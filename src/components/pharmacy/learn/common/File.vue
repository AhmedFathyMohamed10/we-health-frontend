<template>
    <div>
        <BaseImageProfile :title="'name'" :icon="'pi pi-home'">
          <h1> Welcome Randa Ali</h1>
          <div class="col-lg-5 order-1 order-lg-2 my-4">
            <!-- <Base :title="$t('profile')" :icon="'pi pi-image'"> -->
            <ProfileImages ref="profileImages" :v="$v.form"></ProfileImages>
          <!-- </Base> -->
          </div>
        </BaseImageProfile>
        <Base>
            <!-- <input type="file" @change="handleFileChange" />
            <div v-if="fileName">{{ fileName }}</div>
            <button @click="sendFile">Send File</button> -->
            <!-- <Breadcrumb
            :home="home"
            :model="items"
            > -->
            <!-- </Breadcrumb> -->


            <label class="custom-file-input">
            <!-- <span class="file-name">Choose a file</span> -->
              <i class="pi pi-camera text-success"></i>
              <input type="file" class="hidden-input" @change="handleFileChange"/>
            </label>
            <!-- ////////////////////////////// -->
            <!-- <button class="btn btn-icon rounded-circle btn-secondary me-2" >
                    <i class="fa fa-paperclip fa-lg" aria-hidden="true"> </i>
                </button> -->
            <!-- /////////test content file/////////////////////////// -->
            <!-- <div class="content-file"> 
                <input  type="file" @change="handleFileChange"/>
                <div v-if="fileName" :class="p-invalid">{{fileeName}}</div>
                <button @click="sendFile">SendFile</button>
            </div> -->
        </Base>
    </div>
  </template>
  <script>
  import Base from '@/components/global/utilities/Base.vue'
  import BaseImageProfile from '@/components/business/common/register/BaseImageProfile.vue'
  import Breadcrumb from "primevue/breadcrumb";
  import ProfileImages from "@/components/business/common/register/ProfileImages"

  import axios from 'axios'
  export default {
    components:{
        Base,
        // Breadcrumb,
        ProfileImages,
        BaseImageProfile,
    },
    data() {
      return {
        fileName: null,
        file: null,
        home:{
          icon:"pi pi-home",
          to:"/"
        },
        items:[
        //  {label:"computer1"},
        //  {label:"computer2"},
        //  {label:"computer3"},
        //  {label:"computer4"},
        ],
      };
    },
    validations: {
    form: {
      // name: {
      //   otherName: {
      //     required,
      //     minLength: minLength(4),
      //     maxLength: maxLength(255),
      //     arabic(value) {
      //       return arabic(value);
      //     },
      //   },
      //   enName: {
      //     required,
      //     minLength: minLength(4),
      //     maxLength: maxLength(255),
      //     english(value) {
      //       return english(value);
      //     },
      //   },
      // },
      // title: {
      //   required,
      // },
      // subspeciality: {
      //   required,
      // },
      // service_type: {
      //   required,
      // },
     
      // bio: {
      //   required,
      //   maxLength: maxLength(255),
      // },
      img: {},
      cover_img: {},
      // location:{
      //   address:{
      //       required,
      //       minLength: minLength(3),
      //       maxLength: maxLength(255),
      //   },
      //   zipCode:{
      //       required,
      //       numeric,
      //       minLength: minLength(3),
      //       maxLength: maxLength(6),
      //   },
      //   city:{
      //      required,
      //   }
      // },
      // email:{
      //     required,
      //     email
      // },
      // org_phone_numbers :{
      //   maxLength:maxLength(2)
      // },
      // websites: {
      //   required,
      // },
      // equipments:{
      // },
      // businessHours:{},
      // waiting_time:{
      //     required,
      //     numeric,
      //     maxValue: maxValue(1000)
      // },
      // insurance:{},
      // fees:{
      //     value:{
      //       required,
      //       numeric,
      //       maxValue: maxValue(1000000)
      //     }
      // }
    },
  },
    methods: {
        handleFileChange(event){
          this.file=event.target.files[0];
          console.log("this.file" +this.file)
          this.fileName = this.file.name;
          console.log("this.fileName==> " +this.fileName)

        },
      sendFile() {
        // Create a new FormData object
        const formData = new FormData();
        formData.append('file', this.file);
  
        // Send the formData object to the backend using an HTTP request
        // You can use Axios, Fetch API, or any other library for this
  
        // Example using Axios:
        axios.post('/upload', formData)
          .then(response => {
            console.log(response)
            console.log('File uploaded successfully');
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          });
      }
    }
  };
  </script>
  <style scoped lang="scss">
  .content-file{
    margin: 5%;
    input[type="file"] {
         border-radius: 1.5rem;
         border:10 px solid #56c569;
    }
    
  }
  .custom-file-input {
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 10px 20px;
  background-color: #fff;
  color: black;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    // background-color: darken(#56c956, 10%);
    border:1px solid #56c569;
    border-radius: 0.5rem;
  }

//   .file-name {
//     display: block;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

  .hidden-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
  </style>