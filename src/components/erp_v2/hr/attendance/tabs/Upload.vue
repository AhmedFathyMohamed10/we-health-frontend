<template>
  <div class="contact">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message severity="error" v-for="(value, key) in error.Contact" :key="key" :closable="false">
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <Base>
        <UploadFile 
          v-model="form.uploaded_files"
          :saved_files="form.saved_files"
          @removePath="removePath"
          :mediaUrl="mediaUrl">
        </UploadFile>
      </Base>
    </div>

  </div>
</template>
<i18n src="@/lang/erp_v2/hr/attendance.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
import UploadFile from "@/components/global/utilities/UploadFile.vue";
import Base from "@/components/global/utilities/Base.vue";
import { urls } from "@/backend/urls";


export default {
  mixins:[],
  props: {
    error: {
      type: Object,
    },
    v: {
      type: Object,
      required: true,
    },
  },
  components: {
    UploadFile,
    Base,
  },
  data() {
    return {
      mediaUrl: urls.business.mediaUrl,
    };
  },
  computed: {
    ...mapGetters("erp_v2/hr/attendance", {
      getForm: "getForm",
    }),
    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },
  },

  methods: {
    requiredError,
    inputError,
    ...mapActions("erp_v2/hr/attendance", [
      "setForm",
    ]),
    removePath(data,index) {
      console.log("remove",data,index);
      this.form.deleted_files.push(
        data
      );
      this.form.saved_files.splice(index, 1);
    },
  },
};
</script>
