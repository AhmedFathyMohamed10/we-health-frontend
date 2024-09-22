<template>
  <div class="vaccination">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t("vaccinationTab") }}</h4>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <Message v-if="v.$error && !v.maxLength" severity="error">{{
          maxRecordsError($t("vaccinationTab"), v.$params.maxLength.max)
        }}</Message>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("vaccination.vaccineName.label")
            }}</label>
            <Dropdown
              v-model="rowToAdd.vaccineName"
              :options="vaccineNameOptions"
              optionLabel="value"
              :class="{ 'p-invalid': $v.rowToAdd.vaccineName.$error }"
              :placeholder="$t('vaccination.vaccineName.placeholder')"
            />
          </div>
          <div class="error">
            <small
              class="p-invalid"
              v-if="
                $v.rowToAdd.vaccineName.$error &&
                !$v.rowToAdd.vaccineName.validator
              "
            >
              {{ inputError($t("vaccination.vaccineName.label")) }}
            </small>
            <small
              class="p-invalid"
              v-else-if="
                $v.rowToAdd.vaccineName.$error &&
                !$v.rowToAdd.vaccineName.required
              "
            >
              {{ requiredError($t("vaccination.vaccineName.label")) }}
            </small>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group tradeName">
            <label class="form-label">{{
              $t("vaccination.tradeName.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.rowToAdd.tradeName.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToAdd.tradeName"
                :suggestions="vaccinationParams.suggestions"
                :class="{ 'p-invalid': $v.rowToAdd.tradeName.$error }"
                field="value"
                :placeholder="$t('vaccination.tradeName.placeholder')"
                @complete="search($event, vaccinationParams)"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToAdd.tradeName.$error &&
                  !$v.rowToAdd.tradeName.validator
                "
              >
                {{ inputError($t("vaccination.tradeName.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("vaccination.status.label")
            }}</label>
            <Dropdown
              v-model="rowToAdd.status"
              :options="statusOptions"
              optionLabel="value"
              :placeholder="$t('vaccination.status.placeholder')"
            />
          </div>
        </div>
        <div class="col-md-4">
          <AddButton @add="addRow"></AddButton>
        </div>
        <div class="col-md-1"></div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="vaccination.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">
                      {{ $t("vaccination.vaccineName.label") }}
                    </th>
                    <th scope="col">{{ $t("vaccination.tradeName.label") }}</th>
                    <th scope="col">{{ $t("vaccination.status.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in vaccination" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.vaccineName">
                        {{ val.vaccineName.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.tradeName">
                        <span v-if="typeof val.tradeName == 'object'">{{
                          val.tradeName.value
                        }}</span>
                        <span v-else>{{ val.tradeName }}</span>
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.status">
                        {{ val.status.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openEditDialog(val, index)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialog(index)"
                        ></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Base>
    </div>
    <EditDialog
      :display="displayEditDialog"
      @cancel="closeEditDialog"
      @save="editRow"
      @close="closeEditDialog"
      :header =  "$t('vaccinationTab')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-6 col-xxl-4">
          <div class="form-group vaccineName">
            <label for="" class="form-label">{{
              $t("vaccination.vaccineName.label")
            }}</label>
            <Dropdown
              v-model="rowToEdit.vaccineName"
              :options="vaccineNameOptions"
              optionLabel="value"
              :class="{ 'p-invalid': $v.rowToEdit.vaccineName.$error }"
              :placeholder="$t('vaccination.vaccineName.placeholder')"
            />
          </div>
          <div class="error">
            <small
              class="p-invalid"
              v-if="
                $v.rowToEdit.vaccineName.$error &&
                !$v.rowToEdit.vaccineName.validator
              "
            >
              {{ inputError($t("vaccination.vaccineName.label")) }}
            </small>
            <small
              class="p-invalid"
              v-else-if="
                $v.rowToEdit.vaccineName.$error &&
                !$v.rowToEdit.vaccineName.required
              "
            >
              {{ requiredError($t("vaccination.vaccineName.label")) }}
            </small>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group tradeName">
            <label class="form-label">{{
              $t("vaccination.tradeName.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.rowToEdit.tradeName.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToEdit.tradeName"
                :suggestions="vaccinationParams.suggestions"
                :class="{ 'p-invalid': $v.rowToEdit.tradeName.$error }"
                field="value"
                :placeholder="$t('vaccination.tradeName.label')"
                @complete="search($event, vaccinationParams)"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToEdit.tradeName.$error &&
                  !$v.rowToEdit.tradeName.validator
                "
              >
                {{ inputError($t("vaccination.tradeName.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group status">
            <label for="" class="form-label">{{
              $t("vaccination.status.label")
            }}</label>
            <Dropdown
              v-model="rowToEdit.status"
              :options="statusOptions"
              optionLabel="value"
              :placeholder="$t('vaccination.status.placeholder')"
            />
          </div>
        </div>
      </div>
    </EditDialog>
    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRow"
    ></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/pediatric/vaccination.json"></i18n>
<script>
import { mapActions } from "vuex";
// ////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  requiredError,
  maxRecordsError,
} from "@/validation/errors";
import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { findLocaleOption } from "@/helpers/utilities";
import { cloneDeep } from "lodash";
// //////////////////////////////////////////////////////////
import vaccinationOptions from "@/mixins/mr/pediatric/options/vaccinationOptions";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
/////////////////////////////////////////////////////////////
export default {
  mixins: [vaccinationOptions],
  props: {
    v: {
      type: Object,
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  components: {
    Base,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
  },
  data() {
    return {
      rowToAdd: {
        vaccineName: null,
        tradeName: null,
        status: null,
      },
      rowToEdit: {},
      indexToEdit: null,
      displayEditDialog: false,
      indexToDelete: null,
      displayDeleteDialog: false,
      tradeNamesSuggestions: [],
    };
  },
  validations: {
    rowToAdd: {
      tradeName: {
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
      vaccineName: {
        required,
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
    },
    rowToEdit: {
      tradeName: {
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
      vaccineName: {
        required,
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
    },
  },
  computed: {
    vaccination: {
      get() {
        return this.$store.getters["detailsPediatric/pediatric/vaccination"];
      },
      set(value) {
        this.$store.dispatch("detailsPediatric/pediatric/setVaccination", value);
      },
    },
  },
  methods: {
    // ...mapActions("detailsPediatric/pediatric", [
    //     "setVaccination",
    // ]),
    maxRecordsError,
    requiredError,
    htmlTagsError,
    maxLengthError,
    minLengthError,
    findLocaleOption,
    /////////////////////////
    resetForm() {
      this.rowToAdd = {
        vaccineName: null,
        tradeName: null,
        status: null,
      };
      this.$v.rowToAdd.$reset();
    },
    reset() {
      this.resetForm();
      this.v.$reset();
      this.vaccination = [];
    },
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.vaccination.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    /////////////////////
    openEditDialog(val, index) {
      this.displayEditDialog = true;
      this.indexToEdit = index;
      this.rowToEdit = cloneDeep(val);
    },
    closeEditDialog() {
      this.rowToEdit = {};
      this.indexToEdit = null;
      this.$v.rowToEdit.$reset();
      this.displayEditDialog = false;
    },
    editRow() {
      this.$v.rowToEdit.$touch();
      if (!this.$v.rowToEdit.$invalid) {
        this.vaccination[this.indexToEdit] = { ...this.rowToEdit };
        this.closeEditDialog();
      }
    },
    ////////////////////////
    openDeleteDialog(index) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.indexToDelete = null;
    },
    deleteRow() {
      this.vaccination.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
