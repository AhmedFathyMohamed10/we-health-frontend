<template>
  <div class="reflexes">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">{{ $t("reflexes.reflexes.header") }}</h4>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>

      <div class="row">
        <!-- <h4>{{ $t("reflexes.reflexes.header") }}</h4> -->
        <div class="col-md-6 col-xxl-4">
          <div class="form-group">
            <label class="form-label">{{ $t("reflexes.reflex.label") }}</label>
            <Dropdown
              v-model="rowToAdd.reflex"
              :options="reflexesOptions"
              optionLabel="value"
              :placeholder="$t('reflexes.reflex.placeholder')"
              :class="{ 'p-invalid': $v.rowToAdd.reflex.$error }"
            />
            <small
              class="p-invalid"
              v-if="!$v.rowToAdd.reflex.required && $v.rowToAdd.reflex.$error"
            >
              {{ requiredError($t("section.label")) }}
            </small>
          </div>
        </div>
        <div v-if="rowToAdd.reflex" class="col-md-6 col-xxl-4">
          <div class="form-group" v-if="rowToAdd.reflex.value != 'Babinsky'">
            <label class="form-label">{{ $t("reflexes.right.label") }}</label>
            <div class="radio-checkbox-group">
              <div
                v-for="(option, index) in pnnOptions"
                :key="index + 1"
                class="field-radiobutton"
              >
                <RadioButton
                  :id="index + 1 + 'l'"
                  name="option"
                  :value="option.value"
                  v-model="rowToAdd.right"
                  class="me-2"
                />
                <label :for="index + 1 + 'r'" class="mb-0">
                  {{ option.value }}
                </label>
              </div>
            </div>
          </div>
          <div class="form-group right" v-else>
            <label for="" class="form-label">{{
              $t("reflexes.right.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('reflexes.right.placeholder')"
              v-model="rowToAdd.right"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.right.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.right.notContainsHtmlTags &&
                $v.rowToAdd.right.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("reflexes.right.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.right.minLength && $v.rowToAdd.right.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("reflexes.right.label"),
                  $v.rowToAdd.right.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.right.maxLength && $v.rowToAdd.right.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("reflexes.right.label"),
                  $v.rowToAdd.right.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div v-if="rowToAdd.reflex" class="col-md-6 col-xxl-4">
          <div class="form-group" v-if="rowToAdd.reflex.value != 'Babinsky'">
            <label class="form-label">{{ $t("reflexes.left.label") }}</label>
            <div class="radio-checkbox-group">
              <div
                v-for="(option, index) in pnnOptions"
                :key="index + 1"
                class="field-radiobutton"
              >
                <RadioButton
                  :id="index + 1 + 'l'"
                  name="option"
                  :value="option.value"
                  v-model="rowToAdd.left"
                  class="me-2"
                />
                <label :for="index + 1 + 'l'" class="mb-0">
                  {{ option.value }}
                </label>
              </div>
            </div>
          </div>
          <div class="form-group left" v-else>
            <label for="" class="form-label">{{
              $t("reflexes.left.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('reflexes.left.placeholder')"
              v-model="rowToAdd.left"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.left.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.left.notContainsHtmlTags && $v.rowToAdd.left.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("reflexes.left.label")) }}
            </div>
            <div
              v-else-if="!$v.rowToAdd.left.minLength && $v.rowToAdd.left.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("reflexes.left.label"),
                  $v.rowToAdd.left.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.rowToAdd.left.maxLength && $v.rowToAdd.left.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("reflexes.left.label"),
                  $v.rowToAdd.left.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group comment">
            <label for="" class="form-label">{{
              $t("reflexes.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('reflexes.comment.placeholder')"
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
              {{ htmlTagsError($t("reflexes.comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.comment.minLength && $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("reflexes.comment.label"),
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
                  $t("reflexes.comment.label"),
                  $v.rowToAdd.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <AddButton @add="addRow"></AddButton>
          <small v-if="v.$error && !v.maxLength" class="p-invalid">
            {{
              maxRecordsError(
                $t("reflexes.reflexes.header"),
                v.$params.maxLength.max
              )
            }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="reflexes.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("reflexes.reflex.label") }}</th>
                    <th scope="col">{{ $t("reflexes.left.label") }}</th>
                    <th scope="col">{{ $t("reflexes.right.label") }}</th>
                    <th scope="col">{{ $t("reflexes.comment.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in reflexes" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.reflex">
                        {{ val.reflex.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.left }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.right }}</span>
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
      :header="$t('reflexes.reflexes.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-12">
          <div class="form-group">
            <label class="form-label">{{ $t("reflexes.reflex.label") }}</label>
            <Dropdown
              v-model="rowToEdit.reflex"
              :options="reflexesOptions"
              optionLabel="value"
              :placeholder="$t('reflexes.reflex.placeholder')"
              :class="{
                'p-invalid': $v.rowToAdd.reflex.$error,
              }"
            />
            <small
              class="p-invalid"
              v-if="!$v.rowToAdd.reflex.required && $v.rowToAdd.reflex.$error"
            >
              {{ requiredError($t("section.label")) }}
            </small>
          </div>
        </div>
        <div v-if="rowToEdit.reflex" class="col-12">
          <div class="form-group" v-if="rowToEdit.reflex != 'Babinsky'">
            <label class="form-label">{{ $t("reflexes.right.label") }}</label>
            <div class="radio-checkbox-group">
              <div
                v-for="(option, index) in pnnOptions"
                :key="index + 1"
                class="field-radiobutton"
              >
                <RadioButton
                  :id="index + 1 + 'r'"
                  name="option"
                  :value="option.value"
                  v-model="rowToEdit.right"
                  class="me-2"
                />
                <label :for="index + 1 + 'r'" class="mb-0">
                  {{ option.value }}
                </label>
              </div>
            </div>
          </div>
          <div class="form-group right" v-else>
            <label for="" class="form-label">{{
              $t("reflexes.right.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('reflexes.right.placeholder')"
              v-model="rowToEdit.right"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.right.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.right.notContainsHtmlTags &&
                $v.rowToEdit.right.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("reflexes.right.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.right.minLength && $v.rowToEdit.right.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("reflexes.right.label"),
                  $v.rowToEdit.right.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.right.maxLength && $v.rowToEdit.right.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("reflexes.right.label"),
                  $v.rowToEdit.right.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div v-if="rowToEdit.reflex" class="col-12">
          <div class="form-group" v-if="rowToEdit.reflex != 'Babinsky'">
            <label class="form-label">{{ $t("reflexes.left.label") }}</label>
            <div class="radio-checkbox-group">
              <div
                v-for="(option, index) in pnnOptions"
                :key="index + 1"
                class="field-radiobutton"
              >
                <RadioButton
                  :id="index + 1 + 'l'"
                  name="option"
                  :value="option.value"
                  v-model="rowToEdit.left"
                  class="me-2"
                />
                <label :for="index + 1 + 'l'" class="mb-0">
                  {{ option.value }}
                </label>
              </div>
            </div>
          </div>
          <div class="form-group left" v-else>
            <label for="" class="form-label">{{
              $t("reflexes.left.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('reflexes.left.placeholder')"
              v-model="rowToEdit.left"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.left.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.left.notContainsHtmlTags &&
                $v.rowToEdit.left.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("reflexes.left.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.left.minLength && $v.rowToEdit.left.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("reflexes.left.label"),
                  $v.rowToEdit.left.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.left.maxLength && $v.rowToEdit.left.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("reflexes.left.label"),
                  $v.rowToEdit.left.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group comment">
            <label for="" class="form-label">{{
              $t("reflexes.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('reflexes.comment.placeholder')"
              v-model="rowToEdit.comment"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.comment.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.comment.notContainsHtmlTags &&
                $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("reflexes.comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.minLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("reflexes.comment.label"),
                  $v.rowToEdit.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.maxLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("reflexes.comment.label"),
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
import { mapGetters, mapActions } from "vuex";
import physicalExaminationOptions from "@/mixins/mr/physiotherapy/options/physicalExaminationOptions";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  requiredError,
  maxLengthError,
  inputError,
  maxRecordsError,
} from "@/validation/errors";
import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { findLocaleOption } from "@/helpers/utilities";

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
        reflex: "",
        right: "",
        left: "",
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
      getReflexes: "getReflexes",
    }),
    reflexes: {
      get() {
        return this.getReflexes;
      },
      set(value) {
        this.setReflexes(value);
      },
    },
  },
  validations: {
    rowToAdd: {
      reflex: {
        required,
      },
      right: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },

      left: {
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
      right: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      left: {
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
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setReflexes"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    maxRecordsError,
    inputError,
    findLocaleOption,
    requiredError,

    resetForm() {
      this.rowToAdd = {
        reflex: "",
        right: "",
        left: "",
        comment: "",
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },

    reset() {
      this.resetForm();
      this.reflexes = [];
    },

    /////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.reflexes.push({ ...this.rowToAdd });
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
        this.reflexes[this.indexToEdit] = { ...this.rowToEdit };
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
      this.reflexes.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
