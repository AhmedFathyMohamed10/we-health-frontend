<template>
  <div class="form">
    <EditDialog :display="displayForm" @close="cancelForm" @cancel="cancelForm" @save="saveForm"
      :isLoading="isLoading" :header="header"
      :min-width="'80'"
      :max-width="'100'" 
      :icon="'pi pi-calendar'"
      >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        
        <div class="col-md-6">
          <slot name="employee"></slot>
          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.reason.label")}}</label>
              <input
                type="text"
                v-model="form.reason"
                :placeholder="$t('form.reason.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.form.reason.$error }"
              />
              <div v-if="!$v.form.reason.required && $v.form.reason.$error" class="invalid-feedback">
                {{ requiredError($t("form.reason.label")) }}
              </div>
             
              <div v-else-if="!$v.form.reason.maxLength && $v.form.reason.$error" class="invalid-feedback">
                {{ maxLengthError($t("form.reason.label"), $v.form.reason.$params.maxLength.max) }}
              </div>
              <div v-else-if="!$v.form.reason.notContainsHtmlTags && $v.form.reason.$error" class="invalid-feedback">
                {{ htmlTagsError($t("form.reason.label")) }}
              </div>
            </div>
          </Base>

          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.type.label")}}</label>
              <Dropdown 
                v-model="form.type" 
                :options="dayOffTypeOptions" 
                :optionLabel="locale" 
                optionValue="id" 
                :placeholder="$t('form.type.placeholder')" 
              />

            </div>
          </Base>
          <Base v-if="form.type == 7">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.new_Official_vacation.label")}}</label>
              <Dropdown 
                v-model="official_vacation" 
                :options="OfficialVacationOptions" 
                @change="selectOption"
                :optionLabel="locale" 
                :placeholder="$t('form.new_Official_vacation.placeholder')" 
              />
              <!-- <div class="autocomplete-container">
                <AutoComplete
                  v-model="official_vacation"
                  :suggestions="officialParams.suggestions"
                  :forceSelection="true"
                  field="role_name"
                  complete-method="filter"
                  :placeholder="$t('form.new_Official_vacation.placeholder')"
                  @complete="searchOfficial($event, officialParams)"
                  
                />
                <i class="pi pi-search"></i>
              </div> -->

            </div>
          </Base>

        </div>
        <div class="col-md-6">
          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.from_date.label")
              }}</label>
              <Calendar 
                v-model="form.from_date" 
                :showIcon="true" dateFormat="yy-mm-dd"
                :placeholder="$t('form.from_date.placeholder')" 
                :class="{'p-invalid': $v.form.from_date.$error,}"
                />
              <div v-if="!$v.form.from_date.required && $v.form.from_date.$error" class="p-error">
                {{ requiredError($t("form.from_date.label")) }}
              </div>
              <div class="p-error" v-if="$v.form.from_date.$error && !$v.form.from_date.validDateTime">
                {{ timeDateError($t()) }}
              </div>
            </div>
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.to_date.label") }}</label>
              <Calendar 
                v-model="form.to_date" 
                :showIcon="true" dateFormat="yy-mm-dd"
                :placeholder="$t('form.to_date.placeholder')" 
                :class="{'p-invalid': $v.form.to_date.$error,}"
                />
              <div v-if="!$v.form.to_date.required && $v.form.to_date.$error" class="p-error">
                {{ requiredError($t("form.to_date.label")) }}
              </div>
              <div class="p-error" v-if="$v.form.to_date.$error && !$v.form.to_date.validDateTime">
                {{ timeDateError($t()) }}
              </div>
            </div>
          </Base>
       
        </div>
      </div>

      <!-- <template #custom-footer>
        <Button
          class="btn btn-pill btn-secondary-gradient"
          :label="$t('dialog.header.send')"
          icon="pi pi-send"
          :iconPos="locale == 'ar' ? 'right' : 'left'"
          @click="sendToAccounting"
        />
      </template> -->

    </EditDialog>

  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/employeeDayOff.json"></i18n>
<script>
const YOUR_API_KEY ='AIzaSyAi8nfBBJ6B5FPw9bGCFSk2W_Usy36VdiM'
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";

import Base from "@/components/global/utilities/Base.vue";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  timeDateError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";
import officialVacationsSuggestions from "@/mixins/erp_v2/hr/daysOff/officialVacationsSuggestions"
// import { google } from 'googleapis';
// import axios from 'axios';
export default {
  mixins: [toast,officialVacationsSuggestions],
  components: {
    EditDialog,
    Base,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isUpdating: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    dayOffTypeOptions: {
      type: Array,
      required: [],
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
      
    },

  },
  data() {
    return {
      events: [],
      form: this.value,
      official_vacation:null,
      OfficialVacationOptions :[{id:1,ar:"عيد الميلاد المجيد",en:"Christmas ",from:"07-01-2024",to:"08-01-2024"},
      {id:2,ar:"ثورة 25 يناير",en:"25 January reveloution",from:"25-01-2024",to:"26-01-2024"},
      {id:3,ar:"عيدالفطرالمبارك",en:"Eid al-Fitr",from:"09-04-2024",to:"14-04-2024"},
      {id:4,ar:"عيد تحرير سينا",en:"Sina Liberation Day",from:"25-04-2024",to:"26-04-2024"},
      {id:5,ar:"عيد العمال",en:"labor day",from:"05-05-2024",to:"06-05-2024"},
      {id:6,ar:"عيد شم النسيم",en:"Sham El Nessim holiday",from:"06-05-2024",to:"07-05-2024"},
      {id:7,ar:"وقفة عيد الأضحى",en:"Eid al-Adha pause",from:"15-06-2024",to:"16-06-2024"},
      {id:8,ar:"عيد الأضحى المبارك",en:"Eid al-Adha",from:"16-06-2024",to:"19-06-2024"},
      {id:9,ar:"ثورة ٣٠ يونيو",en:"June 30 revolution",from:"30-06-2024",to:"01-07-2024"},
      {id:10,ar:" رأس السنة الهجرية",en:"Islamic New Year",from:"08-07-2024",to:"09-07-2024"},
      {id:11,ar:"عيد ثورة ٢٣ يوليو",en:"Revolution Day, July 23",from:"23-07-2024",to:"24-07-2024"},
      {id:12,ar:"المولد النبوي الشريف",en:"Prophet's Birthday",from:"16-09-2024",to:"17-09-2024"},
      {id:13,ar:"عيد نصر6 اكتوبر",en:"Victory Day, October 6",from:"06-10-2024",to:"07-10-2024"}
      


      ]
    };
  },
  // mounted() {
  //   this.getCalendarEvents();
  // },
  validations: {
    form: {
      to_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      from_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      type: {},
      reason: {
        required, 
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      
    },
  },

  methods: {
    // async getCalendarEvents() {
    //   try {
    //     const response = await axios.get(
    //       `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${YOUR_API_KEY}`
    //     );
    //     this.events = response.data.items;
    //   } catch (error) {
    //     console.error('Error fetching events:', error);
    //   }
    // },
    selectOption(){
      console.log(this.official_vacation)
      
      this.form.from_date = this.$moment(this.official_vacation.from).format("YYYY-MM-DD")
      this.form.to_date = this.$moment(this.official_vacation.to).format("YYYY-MM-DD")
      this.form.reason = this.official_vacation[this.locale]
    },
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    timeDateError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },

    sendToAccounting() {
      console.log("pass")
    },
  },
};
</script>
<style lang="scss" scoped>
.autocomplete-container {
  position: relative;
}

.autocomplete-container .pi-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: #ccc;
  z-index: 1;
}
/deep/.p-chip {
  background: $primary;
  justify-content: center;
  height: 23px;
  .p-chip-text {
    color: white;
  }
}
.chip {
  background: $secondary-gradient;
  height: auto;
}
.current-balance {
  border: 1px solid #bec7be;
  border-radius: 17px;
}

.radio-button {
  border: 1px solid $primary;
  border-radius: 1rem;
  padding: 0.5rem;
}
:dir(rtl) .autocomplete-container .pi-search {
  left: 15px;
  right : unset;
 
}
</style>
