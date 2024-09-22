<template>
  <div>
    <ImageEditor
      v-model="form.cover_img"
      :editorControls="imageControls"
      :staticRef="'coverImage'"
      ref="coverImageEditor"
      @source="getCoverImageSource"
      :uploadOnly="true"
      :hideButtons="true"
    >
    </ImageEditor>
    <div class="profile-images">
      <div class="cover-pic" :class="{'invalid':v.cover_img.$invalid}">
        <img v-if="form.cover_img" :src="form.cover_img" />
        <img v-else :src="defaultImages.cover" />
        <div class="cover-pic-icon">
          <label for="upload-cover-pic" @click.prevent="$refs['coverImageEditor'].$refs['coverImage'].click()">
            <i class="pi pi-camera" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <div class="profile-pic" :class="{'invalid':v.img.$invalid}">
        <img v-if="form.img" :src="form.img" />
        <img v-else :src="defaultImages.profile" />
        <div class="profile-pic-icon">
          <label for="upload-profile-pic" @click.prevent="$refs['profileImageEditor'].$refs['profileImage'].click()">
            <i class="pi pi-camera" aria-hidden="true"></i>
          </label>
        </div>
      </div>
    </div>
    <ImageEditor
      v-model="form.img"
      :editorControls="imageControls"
      :staticRef="'profileImage'"
      ref="profileImageEditor"
      @source="getProfileImageSource"
      :uploadOnly="true"
      :hideButtons="true"
    >
    </ImageEditor>
  </div>
</template>
<script>
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import { mapGetters,mapActions } from "vuex";

export default {
  components: {
    ImageEditor 
  },
  props: { 
    v:{
      type:Object,
    },
   },
  data() {
    return {
      imageControls:{
        templateImage:whiteBackground,
      },
      defaultImages: {
        profile: require("@/assets/business/profile.svg"),
        cover: require("@/assets/business/cover.svg"),
        // profile: require("@/assets/business/Avatar-img.jpg"),
        // cover: require("@/assets/business/clinic_cover.jpg"),
      },
      source:{
        cover:{
          validExtension:true,
          validSize:true,
        },
        profile:{
          validExtension:true,
          validSize:true,
        },
      },
    };
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
  methods: {
      //////////////////////////////
			...mapActions('business/register',{
        setForm:'setForm',
      }),
    //////////////////////////////
    getCoverImageSource(value){
      this.source.cover = value
    },
    getProfileImageSource(value){
      this.source.profile = value
    },
  },
};
</script>
<style lang="scss" scoped>
.profile-images {
  width: 100%;
  position: relative;
  margin: 4% 0;
  .cover-pic {
    width: 100%;
    height: 20%;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid $primary;
      border-radius: 1rem;
      object-fit: contain;
      object-position: center;
    }
    .cover-pic-icon {
      position: absolute;
      top: 5%;
      right: 5%;
      label {
        cursor: pointer;
        i {
          font-size: 24px;
          color: $primary;
        }
      }
    }
  }
  .cover-pic.invalid{
    img{
      border: 3px solid $danger;
    }
  }
  .profile-pic {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 10;
    background-color: rgb(207, 207, 207);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      border: 2px solid white;
      // box-shadow: $shadow-1;
    }
    .profile-pic-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      label {
        cursor: pointer;
        i {
          font-size: 24px;
          color: $primary;
        }
      }
    }
  }
  .profile-pic.invalid{
    img{
      border: 3px solid $danger;
    }
  }
}
</style>