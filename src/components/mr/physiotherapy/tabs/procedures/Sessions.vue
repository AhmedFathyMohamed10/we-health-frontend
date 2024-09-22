<template>
  <div class="sessions">
    <Base>
      <h4>Sessions</h4>
      <div
        class="session"
        v-for="(session, issueIndex) in sessions"
        :key="issueIndex"
      >
        <div
          class="target"
          v-for="(target, targetIndex) in session.targets"
          :key="targetIndex"
        >
          <div class="row">
            <div
              class="col-md-6 col-xl-4 my-2"
              v-for="(procedure, procedureIndex) in target.procedures"
              :key="procedureIndex"
            >
              <div class="procedure">
                <div
                  class="d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div v-if="typeof procedure.name === 'object'">
                    <span
                      ><strong>Name:</strong> {{ procedure.name[locale] }}</span
                    >
                  </div>
                  <div v-else class="d-flex">
                    <span class="d-block"><strong>Name:</strong> </span>
                    <span class="d-block">{{ procedure.name }}</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center gap-1"
                  >
                    <span class="d-block status">
                      <strong>Status :</strong>
                      <span class="value" :class="[procedure.status]">
                        {{
                          findLocaleOption(
                            proceduresStatusOptions,
                            procedure.status
                          )
                        }}
                      </span>
                    </span>
                    <span
                      class="d-block edit-icon"
                      @click="
                        openEditProcedure(
                          procedure,
                          issueIndex,
                          targetIndex,
                          procedureIndex
                        )
                      "
                    >
                      <i class="pi pi-ellipsis-v align-middle"></i>
                    </span>
                  </div>
                </div>
                <div class="d-flex">
                  <span class="d-block"><strong>No Of Sessions :</strong></span>
                  <span class="d-block">#{{ procedure.noOfSessions }}</span>
                </div>
                <div class="d-flex">
                  <span class="d-block"><strong>Session Time :</strong></span>
                  <span class="d-block">{{ procedure.time }} min</span>
                </div>
                <div class="d-flex">
                  <span class="d-block"><strong>Date : </strong></span>
                  <span class="d-block"
                    >{{
                      new Date(
                        procedure.date.split("T")[0]
                      ).toLocaleDateString()
                    }}
                    at :
                    {{ new Date(procedure.date).toLocaleTimeString() }}</span
                  >
                </div>
                <div class="d-flex">
                  <span class="d-block"><strong>Comment :</strong></span>
                  <span class="d-block">{{ procedure.comment }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>

    <EditDialog
      :display="displayEditProcedure"
      @cancel="closeEditProcedure"
      :header="$t('sessions.title')"
      @save="editProcedure"
      @close="closeEditProcedure"
    >
      <div class="row">
        <div class="col-md-6 col-xxl-4">
          <div class="form-group">
            <label class="form-label">{{
              $t("sessions.procedure.name.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.procedureToEdit.name.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="procedureToEdit.name"
                :suggestions="issueSuggestions"
                :field="locale"
                @complete="searchIssue($event)"
                :placeholder="$t('sessions.procedure.name.placeholder')"
                :class="{ 'p-invalid': $v.procedureToEdit.name.$error }"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.procedureToEdit.name.$invalid &&
                  $v.procedureToEdit.name.$anyDirty &&
                  $v.procedureToEdit.name.$anyError
                "
              >
                {{ inputError($t("sessions.procedure.name.label")) }}
              </small>
              <small
                class="p-invalid"
                v-else-if="
                  $v.procedureToEdit.name.$invalid &&
                  $v.procedureToEdit.name.required
                "
              >
                {{ requiredError($t("sessions.procedure.name.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group noOfSessions">
            <label class="form-label">{{
              $t("sessions.procedure.noOfSessions.label")
            }}</label>
            <input
              type="number"
              class="form-control"
              v-model="procedureToEdit.noOfSessions"
              :placeholder="$t('sessions.procedure.noOfSessions.placeholder')"
              :class="{
                'is-invalid': $v.procedureToEdit.noOfSessions.$error,
              }"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.procedureToEdit.noOfSessions.required &&
                $v.procedureToEdit.noOfSessions.$invalid
              "
            >
              {{ requiredError($t("sessions.procedure.noOfSessions.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.procedureToEdit.noOfSessions.decimal &&
                $v.procedureToEdit.noOfSessions.$invalid
              "
            >
              {{ inputError($t("sessions.procedure.noOfSessions.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.procedureToEdit.noOfSessions.minValue &&
                $v.procedureToEdit.noOfSessions.$invalid
              "
            >
              {{
                minValueError(
                  $t("sessions.procedure.noOfSessions.label"),
                  $v.procedureToEdit.noOfSessions.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.procedureToEdit.noOfSessions.maxValue &&
                $v.procedureToEdit.noOfSessions.$invalid
              "
            >
              {{
                maxValueError(
                  $t("sessions.procedure.noOfSessions.label"),
                  $v.procedureToEdit.noOfSessions.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group currentSession">
            <label class="form-label">
              <span>{{ $t("sessions.procedure.currentSession.label") }} </span>
              <span v-if="procedureToEdit.currentSession"
                >{{ procedureToEdit.currentSession }} /
              </span>
              <span v-else>--- / </span>
              <span>{{ procedureToEdit.noOfSessions }}</span>
            </label>
            <input
              type="number"
              class="form-control"
              v-model="procedureToEdit.currentSession"
              :placeholder="$t('sessions.procedure.currentSession.placeholder')"
              :class="{
                'is-invalid': $v.procedureToEdit.currentSession.$error,
              }"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.procedureToEdit.currentSession.required &&
                $v.procedureToEdit.currentSession.$invalid
              "
            >
              {{ requiredError($t("sessions.procedure.currentSession.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.procedureToEdit.currentSession.decimal &&
                $v.procedureToEdit.currentSession.$invalid
              "
            >
              {{ inputError($t("sessions.procedure.currentSession.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.procedureToEdit.currentSession.minValue &&
                $v.procedureToEdit.currentSession.$invalid
              "
            >
              {{
                minValueError(
                  $t("sessions.procedure.currentSession.label"),
                  $v.procedureToEdit.currentSession.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.procedureToEdit.currentSession.maxValue &&
                $v.procedureToEdit.currentSession.$invalid
              "
            >
              {{
                maxValueError(
                  $t("sessions.procedure.currentSession.label"),
                  $v.procedureToEdit.currentSession.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group time">
            <label class="form-label">{{
              $t("sessions.procedure.time.label")
            }}</label>
            <InputMask
              mask="99:99"
              v-model="procedureToEdit.time"
              :placeholder="$t('sessions.procedure.time.placeholder')"
              :class="{
                'p-invalid':
                  $v.procedureToEdit.time.$invalid &&
                  $v.procedureToEdit.time.$anyDirty &&
                  $v.procedureToEdit.time.$anyError,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.procedureToEdit.time.$invalid &&
                  $v.procedureToEdit.time.$anyDirty &&
                  $v.procedureToEdit.time.$anyError
                "
              >
                {{ inputError($t("sessions.procedure.time.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group place">
            <label class="form-label">{{
              $t("sessions.procedure.place.label")
            }}</label>
            <Dropdown
              v-model="procedureToEdit.place"
              :placeholder="$t('sessions.procedure.place.placeholder')"
              :options="placeOptions"
              :optionLabel="locale"
              optionValue="key"
            />
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group">
            <label class="form-label">{{
              $t("sessions.procedure.status.label")
            }}</label>
            <Dropdown
              v-model="procedureToEdit.status"
              :placeholder="$t('sessions.procedure.status.placeholder')"
              :options="proceduresStatusOptions"
              :optionLabel="locale"
              optionValue="key"
            />
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group date">
            <label class="form-label">{{
              $t("sessions.procedure.date.label")
            }}</label>
            <Calendar
              v-model="procedureToEdit.viewDate"
              :placeholder="$t('sessions.procedure.date.placeholder')"
              dateFormat="yy.mm.dd"
              :showIcon="true"
              :class="{
                'p-invalid':
                  $v.procedureToEdit.date.$invalid &&
                  $v.procedureToEdit.date.$anyDirty &&
                  $v.procedureToEdit.date.$anyError,
              }"
              :showTime="true"
              @date-select="getIsoDateTimeEdit"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.procedureToEdit.date.$invalid &&
                  $v.procedureToEdit.date.$anyDirty &&
                  $v.procedureToEdit.date.$anyError
                "
              >
                {{ inputError($t("sessions.procedure.date.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group comment">
            <label class="form-label">{{
              $t("sessions.procedure.comment.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model="procedureToEdit.comment"
              :placeholder="$t('sessions.procedure.comment.placeholder')"
              :class="{
                'is-invalid':
                  $v.procedureToEdit.comment.$invalid &&
                  $v.procedureToEdit.comment.$anyDirty &&
                  $v.procedureToEdit.comment.$anyError,
              }"
            />
            <small
              v-if="
                !$v.procedureToEdit.comment.notContainsHtmlTags &&
                $v.procedureToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("sessions.procedure.comment.label")) }}
            </small>
            <small
              v-if="
                !$v.procedureToEdit.comment.minLength &&
                $v.procedureToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("sessions.procedure.comment.label"),
                  $v.procedureToEdit.comment.$params.minLength.min
                )
              }}
            </small>
            <small
              v-if="
                !$v.procedureToEdit.comment.maxLength &&
                $v.procedureToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("sessions.procedure.comment.label"),
                  $v.procedureToEdit.comment.$params.maxLength.max
                )
              }}
            </small>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/physiotherapy/planning.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { findLocaleOption } from "@/helpers/utilities";
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  minValueError,
  maxValueError,
  inputError,
  requiredError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  numeric,
  minValue,
  maxValue,
  required,
} from "vuelidate/lib/validators";
import {
  notContainsHtmlTags,
  validIsoDateTime,
} from "@/validation/customValidators";
import { getIsoDateTime } from "@/helpers/utilities";
import { mapGetters } from "vuex";
export default {
  components: {
    Base,
    EditDialog,
  },
  data() {
    return {
      issueOptions: [
        { en: "New York", ar: "نيويورك", id: 1 },
        { en: "Rome", ar: "Rome", id: 2 },
        { en: "London", ar: "London", id: 3 },
        { en: "Istanbul", ar: "Istanbul", id: 4 },
        { en: "Paris", ar: "Paris", id: 5 },
        { en: "New York", ar: "نيويورك", id: 6 },
        { en: "Rome", ar: "Rome", id: 7 },
        { en: "London", ar: "London", id: 8 },
        { en: "Istanbul", ar: "Istanbul", id: 9 },
        { en: "Paris", ar: "Paris", id: 10 },
      ],
      placeOptions: [
        { en: "Indoor", ar: "Indoor", key: "indoor" },
        { en: "Outdoor", ar: "Outdoor", key: "outdoor" },
      ],
      proceduresStatusOptions: [
        { en: "Done", ar: "تم", key: "done" },
        { en: "Passed", ar: "تخطي", key: "passed" },
        { en: "in Progress", ar: "جاري التنفيذ", key: "inProgress" },
        { en: "Remaining", ar: "متبقي", key: "remaining" },
        { en: "Cancelled", ar: "ملغي", key: "cancelled" },
      ],
      issueSuggestions: [],
      procedureToEdit: {},
      issueIndex: null,
      targetIndex: null,
      procedureIndex: null,
      displayEditProcedure: false,
    };
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getSessions: "getSessions",
    }),
    sessions: {
      get() {
        return this.getSessions;
      },
      set(value) {
        this.$store.dispatch("detailsPhysiotherapy/physiotherapy/setSessions", value);
      },
    },
  },
  validations: {
    procedureToEdit: {
      name: {
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
      noOfSessions: {
        required,
        numeric,
        minValue: minValue(1),
        maxValue: maxValue(50),
      },
      currentSession: {
        required,
        numeric,
        minValue: minValue(1),
        maxValue: maxValue(50),
      },
      time: {
        minLength: minLength(5),
        maxLength: maxLength(5),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      place: {},
      date: {
        validIsoDateTime: (value) => {
          return validIsoDateTime(value);
        },
      },
      comment: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },
  methods: {
    htmlTagsError,
    maxLengthError,
    minLengthError,
    minValueError,
    requiredError,
    inputError,
    findLocaleOption,
    maxValueError,
    /////////////////////
    openEditProcedure(val, issueIndex, targetIndex, procedureIndex) {
      this.displayEditProcedure = true;
      this.issueIndex = issueIndex;
      this.targetIndex = targetIndex;
      this.procedureIndex = procedureIndex;
      this.procedureToEdit = { ...val };
    },
    closeEditProcedure() {
      this.$v.procedureToEdit.$reset();
      this.procedureToEdit = {};
      this.issueIndex = null;
      this.targetIndex = null;
      this.procedureIndex = null;
      this.displayEditProcedure = false;
    },
    editProcedure() {
      this.$v.procedureToEdit.$touch();
      if (!this.$v.procedureToEdit.$invalid) {
        if (typeof this.procedureToEdit.name === "string") {
          let name = this.procedureToEdit.name;
          this.procedureToEdit.name = { en: name, ar: name, id: this.issueId };
          // this.sessions[this.issueIndex].targets[this.targetIndex].procedures[this.procedureIndex]={...this.procedureToEdit};
          this.sessions[this.issueIndex].targets[
            this.targetIndex
          ].procedures.splice(this.procedureIndex, 1, {
            ...this.procedureToEdit,
          });
          this.closeEditProcedure();
        } else {
          // this.sessions[this.issueIndex].targets[this.targetIndex].procedures[this.procedureIndex]={...this.procedureToEdit};
          this.sessions[this.issueIndex].targets[
            this.targetIndex
          ].procedures.splice(this.procedureIndex, 1, {
            ...this.procedureToEdit,
          });
          this.closeEditProcedure();
        }
      }
    },
    getIsoDateTimeEdit() {
      this.procedureToEdit.date = getIsoDateTime(this.procedureToEdit.viewDate);
    },
    ////////////////////////
  },
};
</script>
<style lang="scss" scoped>
.sessions {
  .procedure {
    padding: 1rem;
    border-radius: 0.5rem;
    // background-color:rgba($gray,0.2);
    box-shadow: 1px 1px 5px #e9edf4;
    .status {
      .value {
        padding: 0.25rem;
        margin: 0 0.25rem;
        border-radius: 0.25rem;
      }
      .remaining {
        background-color: rgba($secondary, 0.25);
      }
      .done {
        background-color: rgba($success, 0.25);
      }
      .passed {
        background-color: rgba($info, 0.25);
      }
      .inProgress {
        background-color: rgba($warning, 0.25);
      }
      .cancelled {
        background-color: rgba($danger, 0.25);
      }
    }
    .edit-icon {
      cursor: pointer;
    }
  }
}
</style>
