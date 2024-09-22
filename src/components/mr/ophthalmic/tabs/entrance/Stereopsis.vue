<template>
  <div class="color-vision">
    <Base>
      <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("stereopsis.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
        </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropdown
                        v-model="stereopsis.stereoFly"
                        :label="$t('stereopsis.stereoFly.label')"
                        :placeholder="$t('stereopsis.stereoFly.placeholder')"
                        :options="stereoFlyOptions"
                        :inputType="'text'"
                        :invalidSelection="v.stereoFly.selection.$error "
                        :invalidOther=" v.stereoFly.other.$error  "
                        >
                       
                        <div v-if="v.stereoFly.other.$error && !v.stereoFly.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('stereopsis.stereoFly.label'))}}
                        </div>
                        <div v-else-if="! v.stereoFly.other.minLength &&  v.stereoFly.other.$error" class="invalid-feedback">
                                {{minLengthError($t('stereopsis.stereoFly.label'), v.stereoFly.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.stereoFly.other.maxLength &&  v.stereoFly.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('stereopsis.stereoFly.label'), v.stereoFly.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropdown
                        v-model="stereopsis.brewster"
                        :label="$t('stereopsis.brewster.label')"
                        :placeholder="$t('stereopsis.brewster.placeholder')"
                        :options="brewsterOptions"
                        :inputType="'text'"
                        :invalidSelection="v.brewster.selection.$error  "
                        :invalidOther=" v.brewster.other.$error  "
                        >
                        
                        <div v-if="v.brewster.other.$error && !v.brewster.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('stereopsis.brewster.label'))}}
                        </div>
                        <div v-else-if="! v.brewster.other.minLength &&  v.brewster.other.$error" class="invalid-feedback">
                                {{minLengthError($t('stereopsis.brewster.label'), v.brewster.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.brewster.other.maxLength &&  v.brewster.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('stereopsis.brewster.label'), v.brewster.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropdown
                        v-model="stereopsis.circles"
                        :label="$t('stereopsis.circles.label')"
                        :placeholder="$t('stereopsis.circles.placeholder')"
                        :options="circlesOptions"
                        :inputType="'text'"
                        :invalidSelection="v.circles.selection.$error  "
                        :invalidOther="v.circles.other.$error  "
                        >
                        <div v-if="v.circles.other.$error && !v.circles.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('stereopsis.circles.label'))}}
                        </div>
                        <div v-else-if="! v.circles.other.minLength &&  v.circles.other.$error" class="invalid-feedback">
                                {{minLengthError($t('stereopsis.circles.label'), v.circles.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.circles.other.maxLength &&  v.circles.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('stereopsis.circles.label'), v.circles.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropdown
                        v-model="stereopsis.forms"
                        :label="$t('stereopsis.forms.label')"
                        :placeholder="$t('stereopsis.forms.placeholder')"
                        :options="formsOptions"
                        :inputType="'text'"
                        :invalidSelection="v.forms.selection.$error  "
                        :invalidOther=" v.forms.other.$error "
                        >
                        <div v-if="v.forms.other.$error && !v.forms.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('stereopsis.forms.label'))}}
                        </div>
                        <div v-else-if="! v.forms.other.minLength &&  v.forms.other.$error" class="invalid-feedback">
                                {{minLengthError($t('stereopsis.forms.label'), v.forms.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.forms.other.maxLength &&  v.forms.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('stereopsis.forms.label'), v.forms.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropdown
                        v-model="stereopsis.animals"
                        :label="$t('stereopsis.animals.label')"
                        :placeholder="$t('stereopsis.animals.placeholder')"
                        :options="animalsOptions"
                        :inputType="'text'"
                        :invalidSelection="v.animals.selection.$error "
                        :invalidOther=" v.animals.other.$error  "
                        >
                    
                        <div v-if="v.animals.other.$error && !v.animals.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('stereopsis.animals.label'))}}
                        </div>
                        <div v-else-if="! v.animals.other.minLength &&  v.animals.other.$error" class="invalid-feedback">
                                {{minLengthError($t('stereopsis.animals.label'), v.animals.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.animals.other.maxLength &&  v.animals.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('stereopsis.animals.label'), v.animals.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
        </div> 
        <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{$t('stereopsis.note.label')}}</label>
                  <textarea
                    class="form-control"
                    v-model.trim="stereopsis.note" 
                    :placeholder="$t('stereopsis.note.placeholder')"
                    :class="{
                       'is-invalid':
                        v.note.$error ||
                        (serializer_error.note
                          ? serializer_error.note.length > 0
                          : false),
                    }"
                    >
                  </textarea>
                    <div v-if="! v.note.notContainsHtmlTags &&  v.note.$error" class="invalid-feedback">
                            {{htmlTagsError($t('stereopsis.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('stereopsis.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('stereopsis.note.label'), v.note.$params.maxLength.max)}}
                    </div>
                </div>
              </div>
        </div>   
    </Base> 
  </div>
</template>
<i18n src="@/lang/mr/ophthalmic/entrance.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue'
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import { mapGetters } from "vuex";
import entranceOptions from '@/mixins/mr/ophthalmic/options/entranceOptions'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
// ////////////////////////////////////////////////////////
import {
  inputError,
  htmlTagsError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors";
export default {
  mixins: [ entranceOptions],
  props: {
    v: {
      type: Object,
      required: true,
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  components: {
    CustomDropdown,
    Base,
    ResetButton,
  },
  data(){
    return {

    }
  },
  /////////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getStereopsis"]),
    stereopsis: {
      get() {
        return this.getStereopsis;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setStereopsis", value);
      },
    },
  },
  ///////////////////////////////
  methods: {
      inputError,
      htmlTagsError,
      maxLengthError,
      minLengthError,
      ///////////////////////////////
    reset() {
      this.stereopsis= {
              stereoFly: {
                selection: null,
                other: "",
              },
              brewster: {
                selection: null,
                other: "",
              },
              circles: {
                selection: null,
                other: "",
              },
              forms: {
                selection: null,
                other: "",
              },
              animals: {
                selection: null,
                other: "",
              },
              note: "",
          };

      this.v.$reset();
    },

    },

};
</script>

<style>

</style>