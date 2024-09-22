<template>
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
          <div class="errors" v-if="typeof error === 'object'">
            <Message
              severity="error"
              v-for="(value, key) in error"
              :key="key"
              :closable="false"
            >
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.name.label")
              }}</label>
              <input
                type="text"
                v-model="form.name"
                :placeholder="$t('form.name.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.form.name.$error }"
              />
              <div
                v-if="!$v.form.name.required && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.name.label")) }}
              </div>
              <div
              v-else-if="
                !$v.form.name.notContainsHtmlTags && $v.form.name.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.name.label")) }}
            </div>
              <div
                v-else-if="!$v.form.name.minLength && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.name.label"),
                    $v.form.name.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("form.name.label"),
                    $v.form.name.$params.maxLength.max
                  )
                }}
              </div>
            </div>
          </div>
        <!-- year -->
        <div class="col-md-5 col-lg-5">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.year.label")
            }}</label>
            <Calendar
              v-model="rowToAdd.year"
              view="year" 
              dateFormat="yy"
              :placeholder="$t('form.year.placeholder')"
              :class="{ 'p-invalid': $v.rowToAdd.year.$error }"
            />
            <div
            v-if="!$v.rowToAdd.year.required && $v.rowToAdd.year.$error"
              class="p-error"
            >
              {{ requiredError($t("form.year.label")) }}
            </div>
        
          </div>
        </div>





        <!-- <Calendar v-model="rowToAdd.year" view="year" dateFormat="yy" /> -->
<!-- 
        <div class="col-md-5 col-lg-5">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.year.label")
            }}</label>
            <input
              type="number"
              v-model="rowToAdd.year"
              :placeholder="$t('form.year.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.rowToAdd.year.$error }"
            />
            <div
            v-if="!$v.rowToAdd.year.required && $v.rowToAdd.year.$error"
            class="invalid-feedback"
          >
            {{ requiredError($t("form.year.label")) }}
          </div>
          <div
          v-else-if="
            !$v.rowToAdd.year.notContainsHtmlTags && $v.rowToAdd.year.$error
          "
          class="invalid-feedback"
        >
          {{ htmlTagsError($t("form.year.label")) }}
        </div>
          </div>
        </div> -->
        <!-- value  -->
        <div class="col-md-5 col-lg-5">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.value.label")
            }}</label>
            <input
              type="number"
              v-model="rowToAdd.value"
              :placeholder="$t('form.value.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.rowToAdd.value.$error }"
            />
            <div
                v-if="!$v.rowToAdd.value.required && $v.rowToAdd.value.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.value.label")) }}
              </div>
              <div
              v-else-if="
                !$v.rowToAdd.value.notContainsHtmlTags && $v.rowToAdd.value.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.value.label")) }}
            </div>
          </div>
        </div>
        <div class="col-2 me-0 d-flex">
          <AddButton @add="addRow"></AddButton>
          <!-- <div class="error">
            <small class="d-block text-danger" v-if="!v.$error && !v.maxLength">
              {{
                maxRecordsError($t("category.header"), v.$params.maxLength.max)
              }}
            </small>
          </div> -->
        </div>
         <div class="table-wrapper my-2" v-if="form.category.length > 0">
            <div class="row my-2">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-sm text-center">
                    <thead>
                      <tr class="border-bottom-custom">
                        <th scope="col">#</th>
                        <th scope="col">{{ $t("form.year.label") }}</th>
                        <th scope="col">{{ $t("form.value.label") }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(val, index) in form.category" :key="index">
                        <td class="align-middle">
                          {{ parseInt(index) + 1 }}
                        </td>
                        <td class="align-middle">
                              {{ val.year }}
                        </td>

                        <td class="align-middle">
                          <span>{{ val.value }}</span>
                        </td>
                        <td class="align-middle">
                          <div class="d-flex justify-content-center">
                            <div>
                              <button
                                class="btn btn-danger-gradient rounded-circle p-1 m-1"
                                @click="openDeleteDialog(index, val)"
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div> 
        <DeleteDialog
          :display="displayDeleteDialog"
          @cancel="closeDeleteDialog"
          @delete="deleteRow"
        ></DeleteDialog>

        <!-- <DetailsDialog
          :display="displayDetailsDialog"
          @hide="closeDetailsDialog"
          :header="$t('dialog.header.details')"
        >
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-borderless text-nowrap mb-0">
                  <tbody>
                    <tr v-for="(value, key) in recordDetails" :key="key">
                      <td v-if="key !== 'price'" class="">
                        {{ $t(`depreciationTable.key.${key}`) }}
                      </td>
                      <td class="">
                        <span v-if="!value" class="text-muted">------</span>
                        <span >{{ value }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DetailsDialog>  -->
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/assets/DepreciationTable.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
// import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";

import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import { mapActions } from "vuex";

export default {
  components: {
    EditDialog,
    // DetailsDialog,
    DeleteDialog,
    AddButton,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
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
      displayDeleteDialog: false,
      indexToDelete: null,
      dataOfIndexDeleted:[],
      form: this.value,
      rowToAdd:{
        year:"",
        value:""
      }
    };
  },
  validations: {
    rowToAdd: {
      year: {
        required,
        // notContainsHtmlTags: (value) => {
        //   return notContainsHtmlTags(value);
        // },
      },
      value: {
        required,
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
    form: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      category:{}
    },
  },

  methods: {
    ...mapActions("DepreciationTable", [ "setindexCategory"]),

    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
        this.$v.rowToAdd.$reset();

      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      this.$v.rowToAdd.$reset();

    },

    //////////////////////
    resetForm() {
      this.rowToAdd = {
        year:"",
        value:""
      };
      this.$v.rowToAdd.$reset();
    },
    addRow() {

      this.rowToAdd.year=this.$moment(this.rowToAdd.year).format("YYYY");

      this.$v.rowToAdd.$touch();
      if (!this.$v.rowToAdd.$invalid) {
            this.form.category.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    /////////////////////
    openDeleteDialog(index, val) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.dataObject = val;
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.indexToDelete = null;
    },
    deleteRow() {
      this.form.category.splice(this.indexToDelete, 1);
      if ("id" in this.dataObject) {
        this.dataOfIndexDeleted.push(this.dataObject);
        this.setindexCategory(this.dataOfIndexDeleted);
      }
      this.dataObject = {};
      this.closeDeleteDialog();
    },  
  },
};
</script>
