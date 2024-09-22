<template>
  <div>
    <div class="profile-images">
      <div class="cover-pic" :class="{ 'invalid': v.cover_img.$invalid }">
        <img v-if="form.cover" :src="form.cover" alt="Selected Image Cover" />
        <img v-else :src="defaultImages.cover" />
        <div class="cover-pic-icon">
          <label for="upload-cover-pic">
            <input type="file" id="handleCoverImage" ref="uploadCoverPic" class="hidden-input" @change="handleFileUpload($event, 'cover')" />
            <i class="pi pi-camera" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <div class="profile-pic" :class="{ 'invalid': v.img.$invalid }">
        <img v-if="form.img" :src="form.img" alt="Selected Image profile" />
        <img v-else :src="defaultImages.profile" />
        <div class="profile-pic-icon">
          <label for="upload-profile-pic"  >
            <input id="handleProfileImage" ref="uploadProfilePic" type="file" class="hidden-input" @change="handleFileUpload($event, 'profile')" />
            <i class="pi pi-camera" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <div v-if="!checkValid" class="errors">
        <small class="p-invalid">
          {{ $t("ImageExtension") }}
        </small>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
  },
  props: {
    v: {
      type: Object,
    },
  },
  data() {
    return {
      imageControls: {
        templateImage: whiteBackground,
      },
      defaultImages: {
        profile: require("@/assets/business/profile.svg"),
        cover: require("@/assets/business/cover.svg"),
      },
      source: {
        cover: {
          validExtension: true,
          validSize: true,
        },
        profile: {
          validExtension: true,
          validSize: true,
        },
      },
      checkValid: true,
    };
  },
  mounted() {
  },
  computed: {
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
    ...mapActions('business/register', {
      setForm: 'setForm',
    }),
    isValidFileType(file) {
      const allowedExtensions = ["jpg", "jpeg", "png"];
      const fileType = file.name.split('.').pop().toLowerCase();
      console.log("from vlidation", allowedExtensions.includes(fileType))
      const isValid = allowedExtensions.includes(fileType);
      return this.checkValid = isValid;
    },
    handleFileUpload(event, type) {
      console.log(`${type} image selected`);
      const file = event.target.files[0];
      const formData = new FormData();
      if (!this.isValidFileType(file)) {
        return;
      }
      if (type === 'cover') {
        this.form.cover = URL.createObjectURL(file);
        this.form.cover_img = file;
      formData.append('image', this.form.cover_img );

      } else if (type === 'profile') {
        this.form.img = URL.createObjectURL(file);
        this.form.profile_img = file;
      formData.append('image', this.form.profile_img);

      }
      // const formData = new FormData();
      // formData.append('image', file);
      // You can use formData for further processing like sending it to the server
    },
  },
};
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
.profile-images {
  width: 100%;
  position: relative;
  margin: 4% 0;

  .cover-pic {
    width: 100%;
    height: 20%;

    &:hover {
      cursor: pointer;
    }
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

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .cover-pic.invalid {
    img {
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
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      border: 2px solid white;
    }
    .profile-pic-icon {
      position: absolute;
      cursor: pointer;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      label {
        cursor: pointer;
        i {
          font-size: 24px;
          color: $primary;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .profile-pic.invalid {
    img {
      border: 3px solid $danger;
    }
  }
}
</style>