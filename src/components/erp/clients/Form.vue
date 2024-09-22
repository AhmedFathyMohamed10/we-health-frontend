<!-- <template>
    <div class="form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
      >
        <slot></slot>
        <div class="row" v-if="error">
          <div class="col-12">
            <div class="errors" v-if="(typeof error ==='object')">
              <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
                <span v-if="key !='errors'" >{{ $t(`form.${key}.label`) }}: </span>
                <span v-if="(typeof value ==='string')">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-md-6">
            
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name.label")
                }}</label>
                <div class="p-inputgroup">
                <div class="p-inputgroup" v-if="!form.id" >
                  <span
                    class="p-inputgroup-addon"
                    :class="{ 'p-invalid': $v.form.name.$error }"
                  >
                    <i class="mdi mdi-pill"></i>
                  </span>
                  <AutoComplete
                    
                    v-model="form.name"
                    :suggestions="clientsParams.suggestions"
                    :class="{
                      'is-invalid':
                        $v.form.name.$error 
                    }"               
                    field="fullname"
                    :placeholder="$t('form.name.placeholder')"
                    @complete="search($event, clientsParams)"
                    />
                    
                </div>
                <div v-else  class="p-inputgroup">
                  <input 
                  type="text"
                  v-model="form.name"
                  :placeholder="$t('form.name.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      $v.form.name.$invalid }"
                />
                </div>
              
              </div>
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      $v.form.name.$error &&
                      !$v.form.name.validator
                    "
                  >
                    {{ inputError($t("form.name.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      $v.form.name.$error &&
                      !$v.form.name.required
                    "
                  >
                    {{ requiredError($t("form.name.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" class="form-label">{{
                        $t("form.mobile.label")
                    }}</label>
                    <input
                        type="number"
                        v-model="form.mobile"
                        :placeholder="$t('form.mobile.placeholder')"
                        class="form-control"
                        :class="{
                        'is-invalid':
                            $v.form.mobile.$error 
                        }"
                    />
                    <div
                        v-if="!$v.form.mobile.required && $v.form.mobile.$error"
                        class="invalid-feedback"
                    >
                        {{ requiredError($t("form.mobile.label")) }}
                    </div>
                    <div
                        v-else-if="!$v.form.mobile.minLength && $v.form.mobile.$error"
                        class="invalid-feedback"
                    >
                    {{
                        minLengthError(
                            $t("form.mobile.label"),
                            $v.form.mobile.$params.minLength.min
                        )
                        }}
                    </div>
                    <div
                        v-else-if="!$v.form.mobile.maxLength && $v.form.mobile.$error"
                        class="invalid-feedback"
                    >
                    {{
                        maxLengthError(
                            $t("form.mobile.label"),
                            $v.form.mobile.$params.maxLength.max
                        )
                        }}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" class="form-label">{{
                        $t("form.address.label")
                    }}</label>
                    <input
                        type="text"
                        v-model="form.address"
                        :placeholder="$t('form.address.placeholder')"
                        class="form-control"
                        :class="{
                        'is-invalid':
                            $v.form.address.$error 
                        }"
                    />
                    <div
                        v-if="!$v.form.address.minLength && $v.form.address.$error"
                        class="invalid-feedback"
                    >
                    {{
                        minLengthError(
                            $t("form.address.label"),
                            $v.form.address.$params.minLength.min
                        )
                        }}
                    </div>
                    <div
                        v-else-if="!$v.form.address.maxLength && $v.form.address.$error"
                        class="invalid-feedback"
                    >
                    {{
                        maxLengthError(
                            $t("form.address.label"),
                            $v.form.address.$params.maxLength.max
                        )
                        }}
                    </div>
                    <div v-else-if="! $v.form.address.notContainsHtmlTags &&  $v.form.address.$error" class="invalid-feedback">
                        {{htmlTagsError($t('form.address.label'))}}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.discount_ratio.label")
                }}</label>
                <input
                  type="number"
                  v-model="form.discount_ratio"
                  :placeholder="$t('form.discount_ratio.placeholder')"
                  class="form-control"
                    :class="{'is-invalid': $v.form.discount_ratio.$error}"
                />
                <div v-if="!$v.form.discount_ratio.decimal && $v.foem.discount_ratio.$error" class="invalid-feedback">
                    {{numericError($t('form.discount_ratio.label'))}}
                </div>
              </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label class="form-label">{{ $t("form.group.label") }}</label>
                    <Dropdown
                    v-model="form.group"
                    :options="groupsOptions"
                    optionValue="id"
                    dataKey="id"
                    :value="form.group"
                    optionLabel="name"
                    :placeholder="$t('form.group.label')"
                    :class="{
                        'p-invalid':
                        $v.form.group.$error,
                    }"
                    />
                    <div class="error">
                      <small 
                          class="d-block text-danger" 
                          v-if="!$v.form.group.required && $v.form.group.$error">
                           {{ requiredError($t("form.group.label")) }}
                      </small>
                  </div>
                </div>
            </div>
            <div class="col-md-1">
                <div class="form-group ">
                    <label for="" class="form-label invisible ">{{$t("btns.addDep")}}</label>
                    <button class="btn btn-icon rounded-circle btn-success" @click="addRow">
                        <i class="fa fa-plus fa-md"></i>
                    </button>
                </div>
            </div>
        
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.maximum_debt.label")
                }}</label>
                <input
                  type="number"
                  v-model="form.maximum_debt"
                  :placeholder="$t('form.maximum_debt.placeholder')"
                  class="form-control"
                  :class="{'is-invalid': $v.form.maximum_debt.$error}"
                />
                <div v-if="!$v.form.maximum_debt.decimal && $v.foem.maximum_debt.$error" class="invalid-feedback">
                    {{numericError($t('form.maximum_debt.label'))}}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.job_title.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.job_title"
                  :placeholder="$t('form.job_title.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      $v.form.job_title.$error 
                  }"
                />
                <div
                  v-if="!$v.form.job_title.minLength && $v.form.job_title.$error"
                  class="invalid-feedback"
                >
                {{
                    minLengthError(
                      $t("form.job_title.label"),
                      $v.form.job_title.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-else-if="!$v.form.job_title.maxLength && $v.form.job_title.$error"
                  class="invalid-feedback"
                >
                {{
                    maxLengthError(
                      $t("form.job_title.label"),
                      $v.form.job_title.$params.maxLength.max
                    )
                  }}
                  
                </div>
                <div v-else-if="! $v.form.job_title.notContainsHtmlTags &&  $v.form.job_title.$error" class="invalid-feedback">
                    {{htmlTagsError($t('form.job_title.label'))}}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.pricing_pattern.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.pricing_pattern"
                  :placeholder="$t('form.pricing_pattern.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      $v.form.pricing_pattern.$invalid }"
                />
                <div
                  v-if="
                    !$v.form.pricing_pattern.minLength &&
                    $v.form.pricing_pattern.$error
                  "
                  class="invalid-feedback"
                >
                {{
                    minLengthError(
                      $t("form.pricing_pattern.label"),
                      $v.form.pricing_pattern.$params.maxLength.max
                    )
                  }}
                </div>
    
                <div
                  v-else-if="
                    !$v.form.pricing_pattern.maxLength &&
                    $v.form.pricing_pattern.$error
                  "
                  class="invalid-feedback"
                >
                {{
                    maxLengthError(
                      $t("form.pricing_pattern.label"),
                      $v.form.pricing_pattern.$params.maxLength.max
                    )
                  }}
                  
                </div>
                <div v-else-if="! $v.form.pricing_pattern.notContainsHtmlTags &&  $v.form.pricing_pattern.$error" class="invalid-feedback">
                    {{htmlTagsError($t('form.pricing_pattern.label'))}}
                </div>
              </div>
            </div>
     
            <div class="col-md-6">
            <div class="form-group">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2" v-model="form.status"     :trueValue="1"
                :falseValue="2"
                :binary="true" />
                <label for="binary" >{{
                  $t("form.status.label")
                }}</label>
              </div>
            
          </div>
        </div>
      </div>

        <Form v-model="groupForm" :isLoading="upsertLoading" 
        :displayForm="displayFormGroup" @close="resetForm" 
        @cancel="resetForm" @save="create"
        :header="isUpdating?$t('dialog.title.edit'):$t('dialog.title.new')"> 
        </Form>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/groups/Group.json"></i18n>
  <i18n src="@/lang/erp/clients/Client.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength, maxLength,decimal, } from "vuelidate/lib/validators";
import clientsOptions from "@/mixins/erp/clients/clientsOptions";

  import {notContainsHtmlTags} from "@/validation/customValidators";
  import Form from "@/components/erp/groups/Form.vue";
import { mapGetters,mapActions  } from 'vuex'
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
  } from "@/validation/errors.js";
  
  export default {
    mixins: [clientsOptions],
    components: { 
      EditDialog,
      Form,
     },
    props:{
      displayForm:{
        type:Boolean,
        required:true,
        default(){
          return false;
        },
      },
      isLoading:{
        type:Boolean,
        default(){
          return false;
        },
      },
      value:{
        type:Object,
        required:true,
      },
      error:{
        type:Object,
      },
      header:{
        type:String,
      },
  
    },
    watch: {
      value(){
        this.form = this.value;
      },
    },
    data() {
      return {
        form:this.value,
        displayFormGroup: false,
        isUpdating : false,
        groupForm :{
          name: "",
          discount_percentage: "",
          description: ""
        },
        arr:[]
      };
    },
    computed:{
      ...mapGetters("erp/groups", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
  
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
    groupsOptions() {
      console.log(this.getListResponse)
      if(this.getListResponse){
        return this.getListResponse.results;
      }
      else {
        return []
      }
      
    },
      listResponse() {
      return this.getListResponse;
    },
    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
    },
    created(){
      if (!this.groupsOptions.Length >0)
      {
        let params = {pageNumber:1,rows:1000000,name:"",discount_percentage:""};
        this.$store.dispatch("erp/groups/list", params)
      }
    },
    validations: {
        form: {
            name: {
              
              validator: (value) => {
                if (typeof value == "object" || value == null || value == "")
                  return true;
                else {
                  return (
                    value.length > 0 &&
                    value.length < 255 &&
                    required &&
                    notContainsHtmlTags(value)
                  );
                }
              },
            },
            mobile: {
                required,
                minLength: minLength(11),
                maxLength: maxLength(11),
            },
            address: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                }
            },
            group:{
                required,
            },
            job_title: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                }
            },
            pricing_pattern: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                }
            },
            discount_ratio:{
                decimal
            },
            maximum_debt:{
                decimal,
            },
            status:{},
      
        },
    },
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      htmlTagsError,
      saveForm() {
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.$emit('save');
          this.$v.form.$reset();
        }
      },
      cancelForm() {
        this.$emit('cancel');
        this.$v.form.$reset();
      },


       ////////// UPSERT ///////////////////
       
    addRow(){
      this.displayFormGroup = true;
    },
    closeForm() {
      this.displayFormGroup=false;
    },

    resetForm(){
      this.groupForm={
          name: "",
          discount_percentage: "",
          description: ""
      }
      this.closeForm();
    },
    create(){
      this.$store.dispatch("erp/groups/create", this.groupForm)
      .then((res) => {
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        const summery = err.statusText; 
        const details =  err.data.message;
        this.errorToast(summery,details)
      })
    },
  
    },
  };
  </script>
   -->