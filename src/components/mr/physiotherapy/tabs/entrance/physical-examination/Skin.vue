<template>
  <div class="skin mb-2">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">Skin &amp; Soft Tissues Problem</h4>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("skin.disorder.label") }}</label>
            <Dropdown
              v-model="rowToAdd.disorder"
              :options="skinOptions"
              optionLabel="value"
              :placeholder="$t('skin.disorder.placeholder')"
              :class="{ 'p-invalid': $v.rowToAdd.disorder.$error }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToAdd.disorder.$error && !$v.rowToAdd.disorder.required
                "
              >
                {{ requiredError($t("skin.disorder.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-xxl-2">
          <div class="form-group">
            <div class="d-flex justify-content-between px-3">
              <label class="form-label">
                {{ $t("skin.minor.label") }}
              </label>
              <label class="form-label">
                {{ $t("skin.major.label") }}
              </label>
            </div>
            <div class="radio-checkbox-group">
              <div
                v-for="option in mmOptions"
                :key="option.value"
                class="field-radiobutton"
              >
                <RadioButton
                  :id="option.id"
                  name="option"
                  op
                  :value="option.value"
                  v-model="rowToAdd.type"
                />
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between"></div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group comment">
            <label for="" class="form-label">{{
              $t("skin.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('skin.comment.placeholder')"
              v-model="rowToAdd.comment"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.comment.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.comment.notContainsHtmlTags &&
                $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("skin.comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.comment.minLength && $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("skin.comment.label"),
                  $v.rowToAdd.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.comment.maxLength && $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("skin.comment.label"),
                  $v.rowToAdd.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-1 col-xxl-3">
          <AddButton @add="addRow"></AddButton>
          <small v-if="v.$error && !v.maxLength" class="p-invalid">
            {{
              maxRecordsError($t("skin.skin.header"), v.$params.maxLength.max)
            }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="skin.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("skin.disorder.label") }}</th>
                    <th scope="col">
                      {{ $t("skin.minor.label") }} ||
                      {{ $t("skin.major.label") }}
                    </th>
                    <th scope="col">{{ $t("skin.comment.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in skin" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.disorder">
                        {{ val.disorder.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>{{ findLocaleOption(mmOptions, val.type) }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.comment }}</span>
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
      :header="$t('skin.disorder.label')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-12">
          <div class="form-group">
            <label class="form-label">{{ $t("skin.disorder.label") }}</label>
            <Dropdown
              v-model="rowToEdit.disorder"
              :options="skinOptions"
              optionLabel="value"
              :placeholder="$t('skin.disorder.placeholder')"
              :class="{ 'p-invalid': $v.rowToEdit.disorder.$error }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToEdit.disorder.$error &&
                  !$v.rowToEdit.disorder.required
                "
              >
                {{ requiredError($t("skin.disorder.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <div class="d-flex justify-content-between px-3">
              <label class="form-label">
                {{ $t("skin.minor.label") }}
              </label>
              <label class="form-label">
                {{ $t("skin.major.label") }}
              </label>
            </div>
            <div class="radio-checkbox-group">
              <div
                v-for="option in mmOptions"
                :key="option.value"
                class="field-radiobutton"
              >
                <RadioButton
                  :id="option.id"
                  name="option"
                  op
                  :value="option.value"
                  v-model="rowToEdit.type"
                />
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between"></div>
        </div>
        <div class="col-12">
          <div class="form-group comment">
            <label for="" class="form-label">{{
              $t("skin.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('skin.comment.placeholder')"
              v-model="rowToEdit.comment"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.rowToEdit.comment.$invalid &&
                  $v.rowToEdit.comment.$anyDirty &&
                  $v.rowToEdit.comment.$anyError,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.comment.notContainsHtmlTags &&
                $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("skin.comment.label")) }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.comment.minLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("skin.comment.label"),
                  $v.rowToEdit.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.comment.maxLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("skin.comment.label"),
                  $v.rowToEdit.comment.$params.maxLength.max
                )
              }}
            </div>
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
<i18n src="@/lang/mr/physiotherapy/physicalExamination.json"></i18n>
<script>
// import { mapActions } from "vuex";
import { mapGetters, mapActions } from "vuex";

import physicalExaminationOptions from "@/mixins/mr/physiotherapy/options/physicalExaminationOptions";
import { cloneDeep } from "lodash";

///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  requiredError,
  maxRecordsError,
  inputError,
} from "@/validation/errors";
import { findLocaleOption } from "@/helpers/utilities";
import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";

// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
export default {
  mixins: [physicalExaminationOptions],
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
        disorder: "",
        type: "",
        comment: "",
      },
      rowToEdit: {},
      indexToEdit: null,
      displayEditDialog: false,
      indexToDelete: null,
      displayDeleteDialog: false,
    };
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getSkin: "getSkin",
    }),
    skin: {
      get() {
        return this.getSkin;
      },
      set(value) {
        this.setSkin(value);
      },
    },
  },

  validations: {
    rowToAdd: {
      disorder: {
        required,
      },
      type: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      comment: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
    rowToEdit: {
      disorder: {
        required,
      },
      type: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      comment: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
  },
  methods: {
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setSkin"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    maxRecordsError,
    inputError,
    findLocaleOption,
    requiredError,

    resetForm() {
      this.rowToAdd = {
        disorder: "",
        type: "",
        comment: "",
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.skin = [];
    },
    /////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.skin.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    /////////////////////
    openEditDialog(val, index) {
      this.displayEditDialog = true;
      this.indexToEdit = index;
      this.rowToEdit = { ...val };
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
        this.skin[this.indexToEdit] = { ...this.rowToEdit };
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
      this.skin.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>

<style></style>
