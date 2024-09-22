<template>
  <div>
   <div class="verify w-100" v-if="!listDataIsLoading&&listDataServerResponse">
    <div class="error" v-if="serverError">
          <Message severity="error"  v-for="(value, key) in errors" :key="key" :closable="false">
           <span v-if="key">{{ formatKey(key)}} : </span>
            <span v-if="(typeof value ==='string')">{{ value }}</span> 
              <!-- <span v-else-if="(typeof value ==='object')">
                <div v-for="(message, index) in value" :key="index">
                   <span> {{ Number(index) + 1}} - {{message.name }} </span> 
                </div>
              </span>  -->
              <span v-else-if="(typeof value ==='object')">
                <div  v-for="(nestedValue, nestedKey) in value" :key="nestedKey">
                  <!-- {{ nestedValue.name }} -->
                  <div v-for="(message, index) in nestedValue.name" :key="index">
                    <span>{{ Number(nestedKey) + 1 }} : {{ message }}</span>
                </div>
                </div>
              </span> 
              <!-- <span> {{ Number(index) + 1 }}: {{ message[0].name }}</span> -->
              <span v-else-if="(typeof value ==='array')">
                <div v-for="(message2, index) in value" :key="index">
                <span> {{ Number(index) + 1 }}: {{ message2.name[0] }}</span>
              </div>
              </span>
        </Message>
    </div>
    <div class="row" v-if="asideOptions.length>0">
      <div class="col-lg-4 my-4">
        <Base>
          <Aside v-model="toggler" :options="asideOptions" :v="validationSchema?$v.documents:null"></Aside>
        </Base>   
      </div>
      <div class="col-lg-8 my-4">
        <Base>  
          <div class="animate__animated  animate__slideInUp" v-for="option in asideOptions" :key="option.key">  
            <div class="image" v-if="toggler === option.key" >  
              <div class="text-center image-pic" :class="{'invalid':$v.documents[option.key].blobImage.$error}" v-if="validationSchema" > 
                <!-- <div v-if="!checkValid" :class="{'invalid':!source[option.key].validExtension}">  -->
                <img v-if="documents[option.key].blobImage" :src="documents[option.key].blobImage" />
                  <div class="image-icon">
                    <label>
                    <input type="file" class="hidden-input"  @change="handleVerifyImage(documents[option.key],option.key,$event)"/>
                      <i class="pi pi-camera" aria-hidden="true"></i>
                    </label>
                  </div>
                  <div class="delete-icon" v-if="documents[option.key].blobImage">
                    <label for="" @click.prevent="deleteDocument(option.key)">
                      <i class="pi pi-times" aria-hidden="true"></i>
                    </label>
                  </div>
                  <!-- </div> -->
                </div>
              <div v-if="validationSchema" class="errors">
                <small class="p-invalid" v-if="$v.documents[option.key].blobImage.$error && !$v.documents[option.key].blobImage.required">
                  {{ requiredError(option[locale]) }}
                </small>
              </div>
              <!-- {{ source[option.key].validExtension }} -->
              <div v-if="!source[option.key].validExtension" class="errors">
                <small class="p-invalid">
                   <!-- {{$t("ImageExtension")}} -->
                   {{imageTypeError($t())}}
                </small>
              </div>     
            </div>
          </div>
        </Base>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-5">
      <button class="btn btn-success-gradient btn-pill" @click.prevent="verify">{{$t('done')}}</button>
    </div>
    </div>
    <div class="d-flex align-items-end">
      <div class="w-100">
        <CommonSteps></CommonSteps>
      </div>
    </div> 
  </div>
</template>
<i18n lang="json5">
  {
    "en":{
      "done":"Done"
    },
    "ar":{
      "done":"تم"
    }
  }
</i18n>
<i18n src="@/lang/business/register"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue"
import Aside from "@/components/business/common/Aside.vue"
import CommonSteps from "@/components/business/common/CommonSteps.vue"
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import { requiredError,imageTypeError, imageSizeError } from "@/validation/errors.js";
import { mapGetters,mapActions } from "vuex";
import { requiredIf } from 'vuelidate/lib/validators';
import toast from "@/mixins/global/toast";
import {urls} from "@/backend/urls"
import {cloneDeep} from 'lodash';

export default {
    name:"Verify",
    mixins: [toast,],
    components:{
      Aside,
      Base,
      CommonSteps,
    },
    data(){
      return {
        toggler:"national_id",
        // asideOptions:[
        //       {
        //           en:'National ID',
        //           ar:'البطاقة',
        //           icon:require('@/assets/icons/business/verify_branch/user-id.svg'),
        //           key:"national_id"
        //         },
        //         {
        //           en:'Commercial Record',
        //           ar:'السجل التجاري',
        //           icon:require('@/assets/icons/business/verify_branch/i_certificate_paper.svg'),
        //           key:"commercial_record"
        //       },
        //       {
        //           en:'Syndicate ID',
        //           ar:'كارنيه النقابة',
        //           icon:require('@/assets/icons/business/verify_branch/user-id.svg'),
        //           key:"syndicate_id",
        //       },
        //       {
        //           en:'Profession License',
        //           ar:'رخصة المزاولة',
        //           icon:require('@/assets/icons/business/verify_branch/i_certificate_paper.svg'),
        //           key:"profession_license"
        //       },
        // ],
        imageControls:{
          templateImage:whiteBackground,
        },
        checkValid:true,
        source:{},
        documents:{},
        validationSchema:false,
        urls,
      }
    },
    computed:{
      ...mapGetters('business/listData', {
      listDataIsLoading: 'getServerLoading',
      listDataServerResponse: 'getServerResponse',
      listDataServerError: 'getServerError',
      }),
      ...mapGetters('business/register', {
        getForm: 'getForm',
        serverError: 'getServerError',
        response: 'getServerResponse',
      }),
     
      images(){
        if(this.listDataServerResponse){
          return this.listDataServerResponse[0].data[0].official_papers;
        }
        else {
          return [];
        }
      },
      asideOptions(){
        let options = [];
        if(this.images.length>0){
          this.images.forEach(image => options.push(
            {
              ar:image.name,
              en:image.name,
              icon:'fa-solid fa-money-check',
              key:image.paper__key,
              isRequired:image.paper__required
            } ))
          return options;
        }
        else {
          return options;
        }
      },
      form: {
				get() {
						return this.getForm;
				},
				set(value) {
						this.setForm(value);
				}
			},
      errors(){
        if(this.serverError){
          return this.serverError.response.data;
        }
        else {
          return null;
        }
      },
      asideOptionsWithRequired() {
        return this.asideOptions.filter(option => option.isRequired === true);
      }
    },
    validations(){
      const validations = {};
      for (const key in this.documents) {
      validations[key] = {
        blobImage: {
          required: requiredIf(() => {
            return this.asideOptionsWithRequired.some(option => option.key === key);
          }),
        }
      };
      }
      return { documents: validations };
    },
    created(){
      this.init();
    },
    watch:{
      'form.isReadOnly':{
        deep:true,
        handler(newValue, oldValue){
           this.form.isReadOnly = newValue;
        }
     },
     checkValid(newValue){
      if(newValue){
         this.checkValid = newValue;
         this.source[this.toggler].validExtension = newValue;
      }
     },
  },
    methods:{
      requiredError,
      imageTypeError,
      imageSizeError,
			...mapActions('business/register',{
        setForm:'setForm',
        registerBusiness:'registerBusiness',
      }),
			...mapActions('business/documents',{
        documentsList:'documentsList',
      }),
      resetForm(){
        this.$store.dispatch('business/register/resetForm');
      },
      async init(){
        let source = {}
        let documents = {}
        if(this.form.category){
              this.asideOptions.forEach(op=>{
                source[op.key] = {
                  validExtension:this.checkValid, 
                  validSize: true
                };
                documents[op.key] = {blobImage:"", sourceFile:""}
              });
              this.source = source ;
              this.documents = documents ;
              if(this.form.isReadOnly === true){
                this.form.saveDataDocuments = this.documents ;
              }
              else   this.documents = cloneDeep(this.form.saveDataDocuments) ;
               
              Object.assign(this.form,documents);
              this.validationSchema = true;
        }
        else {
          this.$router.push({name:'category'})
        }
      },
      formatKey(key) {
        // Capitalize first letter
        let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        // Insert space before uppercase letters (excluding the first letter)
        formattedKey = formattedKey.replace(/([A-Z])/g, ' $1');
        return formattedKey;
      },
      deleteDocument(key){
        this.documents[key] = {blobImage:"",sourceFile:""};
        this.form.saveDataDocuments = this.documents;
      },
      //////////////////////////
      handleVerifyImage(optionKey, key, event) {
          const file = event.target.files[0];
          if (!this.isValidFileType(file)) {
             this.source[key].validExtension = this.checkValid;
            return ;
          }
          this.documents[key].sourceFile = file;
          const formData = new FormData();
          formData.append(key, this.documents[key].sourceFile);
          optionKey.blobImage = URL.createObjectURL(file);
          this.documents[key].blobImage = optionKey.blobImage;
      },
      isValidFileType(file) {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.').pop().toLowerCase();
        const isValid = allowedExtensions.includes(fileType);
        return this.checkValid =  isValid;
      },
      async verify(){
        this.$v.documents.$touch();
        if(!this.$v.documents.$invalid){
          let formData = new FormData();
          let form = cloneDeep(this.form);
          let {profile_img ,cover_img} = form
          delete form.profile_img;
          delete form.cover_img;
          formData.append("data",JSON.stringify(form)); 
          if(profile_img ){
            formData.append("profile_img",profile_img );   
          }
          if(cover_img){
            formData.append("cover_img",cover_img);   
          }
          Object.keys(this.documents).forEach(key => {
            if(this.documents[key].sourceFile){
              formData.append(key,this.documents[key].sourceFile);
            }
          });    
          Object.assign(this.form,this.documents);
          await this.registerBusiness(formData)
          .then((res) =>{
            this.resetForm();
            const summery = res.statusText;
            const details = res.message;
            this.successToast(summery, details);
            this.$router.push({name:'category'})
          }) 
          .catch((err) => {
            this.documents = cloneDeep(this.form.saveDataDocuments);
            this.form.isReadOnly = false;
            if (err.data){   
              const summery = err.statusText;
              const details = err.message;
              this.errorToast(summery, details);
            } 
          })
         
        }
      },  
    },
}
</script>

<style lang="scss" scoped>
.hidden-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.image {
  width: 100%;
  position: relative;
  .image-pic {
    width: 100%;
    height: 250px;
    cursor:pointer;
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 3/2;
      // object-fit: contain;
      // object-position: center;
      // border-radius: 2rem;
    }
    .image-icon,.delete-icon {
      position: absolute;
      top: 5%;
      right: 5%;
      label {
        cursor: pointer;
        i {
          font-size: 24px;
          color: $primary;
          &:hover{
            cursor:pointer;
          }
        }
      }
    }
    .delete-icon {
      left: 5% ;
      right: auto;
      label {
        i {
          color: $danger;
          &:hover{
            cursor:pointer;
          }
        }
      }
    }
  }
  .image-pic.invalid{
      border: 3px solid $danger;
      border-radius: 1rem;
  }
}
</style>