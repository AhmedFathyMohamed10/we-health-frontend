 
 <template>
    <div class="website-section">
      <Base>
          <div class="row">
            <div class="col-md-10 my-1">
              <label class="form-label">{{$t("form.website.label")}}</label>
              <div class="custom-input-group ">
                  <InputText 
                    type="url"  
                    :placeholder="$t('form.website.placeholder')" 
                    v-model.trim="websites"
                    :class="{'p-invalid':$v.websites.$error || !isUrl || duplicateUrl}"
                  ></InputText> 
                  <Dropdown v-model="selectedCountry" :options="socialAccounts" optionLabel="name"  placeholder="Select a Social Account" >
                    <template #value="slotProps">
                          <div class=" d-flex  align-items-center justify-content-start gab-3 country-item country-item-value" v-if="slotProps.value">
                            <div>  <img src="" :class="'px-3 fs-5 pi ' + slotProps.value.icon.toLowerCase()" /></div>
                              <div>{{slotProps.value.name}}</div>
                          </div>
                          <span v-else>
                            {{slotProps.placeholder}}
                          </span>
                      </template>
                      <template #option="slotProps">
                          <div class=" d-flex align-items-center justify-content-start gab-3 country-item">
                              <div> <img src="" :class="'px-3 fs-5 pi ' + slotProps.option.icon.toLowerCase()" /></div>
                              <div class="">{{slotProps.option.name}}</div>
                          </div>
                      </template> 
                  </Dropdown>
              </div>
              <div class="error">
                <small class="p-invalid" v-if="$v.websites.$error && !$v.websites.required">
                  {{requiredError($t('form.website.label'))}}
                </small>
                <small class="p-invalid" v-else-if="$v.websites.$error && !$v.websites.maxLength">
                  {{ maxLengthError($t('form.website.label'),$v.websites.$params.maxLength.max) }}
                </small>  
                <small class="p-invalid" v-else-if="!isUrl">
                  {{ $t('form.website.invalidUrl') }}
                </small>
                <small class="p-invalid" v-else-if="duplicateUrl">
                  {{ $t('form.website.duplicateUrl') }}
                </small>
              </div>
            </div>
            <div class="col-md-2 my-1">
              <AddButton @add="addWebsiteSelectSocial"></AddButton>
            </div>
          </div>
          <div class="row">
            <div v-for="(website, index) in form.websitesSocialAccounts" :key="website.name" class="">
              <span class="fw-bold px-3 social-text"><i :class="website.icon" class=" pi "></i> {{website.name}}</span>
              <Chip :label="`${website.url}`"  removable  @remove="deleteWebsiteSelectSocial(index)"  class="custom-chip" />
              <Divider></Divider>
            </div>
          </div>
      </Base>
    </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import Divider from "@/components/global/utilities/Divider.vue";
import {required,maxLength} from "vuelidate/lib/validators";
import {requiredError,maxLengthError}from "@/validation/errors.js";
import { mapGetters,mapActions } from "vuex";
export default {
    props: {
      v:{
        type:Object,
      } 
    },
    components:{Base,Divider,AddButton},
    data(){
        return {
          websites: "",
          isUrl: true,
          duplicateUrl: false,
          selectedCountry: null,
          socialAccounts: [
            {name: 'Facebook', icon: 'pi-facebook text-primary'},
            {name: 'youTube', icon: 'pi-youtube text-danger '},
            {name: 'LinkedIn', icon: 'pi-linkedin text-info'},
            {name: 'Instagram', icon: 'pi-instagram text-danger '}, 
            {name: 'Whatsapp', icon: 'pi-whatsapp text-success '}, 
            {name: 'Twitter', icon: 'pi-twitter text-info'},
          ]
        }
    },
    validations:{
      websites:{
        required,
        maxLength: maxLength(144)
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
    methods:{
        requiredError,
        maxLengthError,
        ...mapActions('business/register',{
          setForm:'setForm',
        }),
        isValidURLWithSocial(url, name) {
          const urlPattern = new RegExp('^(https?:\\/\\/)?'+  // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
          const lowercaseUrl = url.toLowerCase();
          const lowercaseName = name.toLowerCase();
          const isUrlValid = urlPattern.test(lowercaseUrl);
          const isNameIncludesURL = lowercaseUrl.includes(lowercaseName);
          return  this.isUrl  = isUrlValid && isNameIncludesURL;
        },
        addWebsiteSelectSocial(){
          this.$v.websites.$touch();
          if (!this.$v.websites.$invalid && this.isValidURLWithSocial(this.websites,this.selectedCountry.name)) {
            const newWebsite = {
              name: this.selectedCountry.name,
              url:  this.websites,
              icon: this.selectedCountry.icon,
            };
            const exists = this.form.websitesSocialAccounts.some((website) => website.url === this.websites  && website.name === this.selectedCountry.name );
            this.duplicateUrl = exists;
            if (!exists && this.selectedCountry ) { 
              this.form.websitesSocialAccounts.push(newWebsite);
            }
            this.duplicateUrl = exists;
          }
          this.websites = "";
          this.selectedCountry = null;
          this.$v.websites.$reset(); 
        },
        deleteWebsiteSelectSocial(index){
          this.form.websitesSocialAccounts.splice(index,1)
        },
      
    },
   
}
</script>
<style lang="scss" scoped>
  .custom-input-group {
      display: flex;
      width:100%;
      .p-dropdown {
        border-radius: 0rem 2rem 2rem 0rem;
        width:50% !important;
        .p-dropdown-panel{ 
          .p-dropdown-header{
            padding: 0;
          }
        }
      }
      input {
        border-radius: 2rem 0rem 0rem 2rem;
        border-right: 0px;
        width:50% !important;
      }
  }
 
  .rtl .custom-input-group {
    .p-dropdown {
        border-radius:0px 2rem 2rem  0px ;
        width:50% !important;
    }
    input {
        border-radius:2rem 0px 0px 2rem;
        border-right: 1px solid #56c596;
        border-left: 0px;
      }
  }
  /deep/ .p-inputtext p-component {
    width: 69%;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
  .custom-chip {
    font-size: 7px;
  }
  .social-text {
    font-size: 10px;
  }
  .custom-add-website {
    margin:0px !important;
  }
}
</style>




