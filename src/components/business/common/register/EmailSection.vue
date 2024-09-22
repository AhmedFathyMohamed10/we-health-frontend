<template>
  <div class="email-section">
    <Base>
      <div class="row">
        <div class="col-md-7">
            <div class="form-group">
              <label class="form-label">{{$t('form.email.label')}}</label>
              <InputText 
                  type="email"  
                  :placeholder="$t('form.email.placeholder')" 
                  v-model.trim="email"
                  :class="{'p-invalid':$v.email.$error || v.emails.$invalid}"
              ></InputText>
            </div>
        </div>
        <div class="col-md-5">
          <AddButton @add="addEmail"></AddButton>
        </div>
     </div>
     <div class="hint-email">
        <span class="text-success fw-bold">{{ $t('form.email.hint.label') }} : </span>
        <span>{{ $t('form.email.hint.content') }}</span>
      </div>
      <div class="errors">
        <small class="p-invalid" v-if="$v.email.$error && !$v.email.required">{{requiredError($t('form.email.label'))}}
        </small>
        <small class="p-invalid" v-else-if="$v.email.$error && !$v.email.email">{{emailError($t('form.email.label'))}}
        </small>
        <small class="p-invalid" v-else-if="$v.email.$error && !$v.email.maxLength">
          {{ maxLengthError($t('form.email.label'),$v.email.$params.maxLength.max) }}
        </small>  
        <small class="p-invalid" v-else-if="v.emails.$invalid && !v.emails.maxLength">
          {{ $t('form.email.hint.content') }}
        </small>  
        <small class="p-invalid" v-if="duplicateEmail">
          {{ $t('form.email.hint.duplicateEmail') }}
        </small>  
      </div> 
      <div class="row">
        <div v-for="(email, index) in form.emails" :key="email.name" class=" col-12 my-2">
          <Chip :label="email.name" removable  @remove="deleteEmail(index)" />
        </div>
      </div>
     
    </Base>
  </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import { mapGetters,mapActions } from "vuex";
import { required,email,maxLength } from "vuelidate/lib/validators";
import {minLengthError,maxLengthError,emailError,requiredError}from "@/validation/errors";
import Base from "@/components/global/utilities/Base.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"

export default {
  props: { 
    v:{
      type:Object,
    },
  },
  components:{ 
    Base,
    AddButton,
  },
  data() {
    return {
      email:"",
      duplicateEmail:false,
    }
  },
  computed:{
    ...mapGetters('business/register', {
      getForm: 'getForm',
    }),
    form: {
      get() {
          return this.getForm;
      },
      set(value) {
          this.setForm(value);
      }
    },
  },
  validations:{
    email:{
      required,
      email,
      maxLength: maxLength(144),

    }, 
  },
  methods:{
      requiredError,
      emailError,
      maxLengthError,
      minLengthError,
      ...mapActions('business/register',{
        setForm:'setForm',
      }),
      addEmail(){
        this.$v.email.$touch();
        if (!this.$v.email.$invalid) {
          const exists = this.form.emails.some((email) => email.name === this.email);
          this.duplicateEmail = exists;
          if (!exists && this.form.emails.length < 3) {
            this.form.emails.push({name: this.email});
          }
          this.duplicateEmail = exists;
          this.email = "";
          this.$v.email.$reset();
        }
      },  
      deleteEmail(index){
        this.form.emails.splice(index, 1)
      },
  },
}
</script>
<style lang="scss" scoped>

</style>