<template>
  <div class="chief-complaint-child">
    <div class="form-wrapper">
      <Base>
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("chiefComplaint.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.chiefComplaint"
              :label="$t('chiefComplaint.chiefComplaint.label')"
              :placeholder="$t('chiefComplaint.chiefComplaint.placeholder')"
              :otherPlaceholder="
                $t('chiefComplaint.chiefComplaint.otherPlaceholder')
              "
              :options="chiefComplaintOptions"
              :v="$v.rowToAdd.chiefComplaint"
              :invalidSelection="$v.rowToAdd.chiefComplaint.selection.$error"
              :invalidOther="$v.rowToAdd.chiefComplaint.other.$error"
            >
              <small
                v-if="
                  $v.rowToAdd.chiefComplaint.selection.$error &&
                  !$v.rowToAdd.chiefComplaint.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("chiefComplaint.chiefComplaint.label")) }}
              </small>
              <div
                v-else-if="
                  $v.rowToAdd.chiefComplaint.other.$error &&
                  !$v.rowToAdd.chiefComplaint.other.required
                "
                class="invalid-feedback"
              >
                {{ requiredError($t("chiefComplaint.chiefComplaint.label")) }}
              </div>
              <div
                v-else-if="
                  $v.rowToAdd.chiefComplaint.other.$error &&
                  !$v.rowToAdd.chiefComplaint.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.chiefComplaint.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.chiefComplaint.other.minLength &&
                  $v.rowToAdd.chiefComplaint.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.chiefComplaint.label"),
                    $v.rowToAdd.chiefComplaint.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.chiefComplaint.other.maxLength &&
                  $v.rowToAdd.chiefComplaint.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.chiefComplaint.label"),
                    $v.rowToAdd.chiefComplaint.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.location"
              :label="$t('chiefComplaint.location.label')"
              :placeholder="$t('chiefComplaint.location.placeholder')"
              :otherPlaceholder="$t('chiefComplaint.location.otherPlaceholder')"
              :options="locationOptions"
              :invalidSelection="$v.rowToAdd.location.selection.$error"
              :invalidOther="$v.rowToAdd.location.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.location.other.$error &&
                  !$v.rowToAdd.location.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.location.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.location.other.minLength &&
                  $v.rowToAdd.location.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.location.label"),
                    $v.rowToAdd.location.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.location.other.maxLength &&
                  $v.rowToAdd.location.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.location.label"),
                    $v.rowToAdd.location.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.quality"
              :label="$t('chiefComplaint.quality.label')"
              :placeholder="$t('chiefComplaint.quality.placeholder')"
              :otherPlaceholder="$t('chiefComplaint.quality.otherPlaceholder')"
              :options="qualityOptions"
              :invalidSelection="$v.rowToAdd.quality.selection.$error"
              :invalidOther="$v.rowToAdd.quality.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.quality.other.$error &&
                  !$v.rowToAdd.quality.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.quality.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.quality.other.minLength &&
                  $v.rowToAdd.quality.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.quality.label"),
                    $v.rowToAdd.quality.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.quality.other.maxLength &&
                  $v.rowToAdd.quality.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.quality.label"),
                    $v.rowToAdd.quality.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.severity"
              :label="$t('chiefComplaint.severity.label')"
              :placeholder="$t('chiefComplaint.severity.placeholder')"
              :otherPlaceholder="$t('chiefComplaint.severity.otherPlaceholder')"
              :options="severityOptions"
              :invalidSelection="$v.rowToAdd.severity.selection.$error"
              :invalidOther="$v.rowToAdd.severity.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.severity.other.$error &&
                  !$v.rowToAdd.severity.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.severity.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.severity.other.minLength &&
                  $v.rowToAdd.severity.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.severity.label"),
                    $v.rowToAdd.severity.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.severity.other.maxLength &&
                  $v.rowToAdd.severity.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.severity.label"),
                    $v.rowToAdd.severity.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.timing"
              :label="$t('chiefComplaint.timing.label')"
              :placeholder="$t('chiefComplaint.timing.placeholder')"
              :otherPlaceholder="$t('chiefComplaint.timing.otherPlaceholder')"
              :options="timingOptions"
              :invalidSelection="$v.rowToAdd.severity.selection.$error"
              :invalidOther="$v.rowToAdd.severity.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.timing.other.$error &&
                  !$v.rowToAdd.timing.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.timing.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.timing.other.minLength &&
                  $v.rowToAdd.timing.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.timing.label"),
                    $v.rowToAdd.timing.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.timing.other.maxLength &&
                  $v.rowToAdd.timing.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.timing.label"),
                    $v.rowToAdd.timing.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomInputGroup
              v-model="rowToAdd.duration"
              :label="$t('chiefComplaint.duration.label')"
              :placeholder="$t('chiefComplaint.duration.placeholder')"
              :valuePlaceholder="$t('chiefComplaint.duration.valuePlaceholder')"
              :options="durationOptions"
              :invalidSelection="$v.rowToAdd.duration.selection.$error"
              :invalidValue="$v.rowToAdd.duration.value.$error"
            >
            </CustomInputGroup>
            <small
              v-if="
                !$v.rowToAdd.duration.value.maxValue &&
                $v.rowToAdd.duration.value.$error
              "
              class="p-invalid"
            >
              {{
                maxValueError(
                  $t("chiefComplaint.duration.label"),
                  $v.rowToAdd.duration.value.$params.maxValue.max
                )
              }}
            </small>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.context"
              :label="$t('chiefComplaint.context.label')"
              :placeholder="$t('chiefComplaint.context.placeholder')"
              :otherPlaceholder="$t('chiefComplaint.context.otherPlaceholder')"
              :options="contextOptions"
              :invalidSelection="$v.rowToAdd.context.selection.$error"
              :invalidOther="$v.rowToAdd.context.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.context.other.$error &&
                  !$v.rowToAdd.context.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.context.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.context.other.minLength &&
                  $v.rowToAdd.context.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.context.label"),
                    $v.rowToAdd.context.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.context.other.maxLength &&
                  $v.rowToAdd.context.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.context.label"),
                    $v.rowToAdd.context.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.modifyingFactor"
              :label="$t('chiefComplaint.modifyingFactor.label')"
              :placeholder="$t('chiefComplaint.modifyingFactor.placeholder')"
              :otherPlaceholder="
                $t('chiefComplaint.modifyingFactor.otherPlaceholder')
              "
              :options="modifyingFactorOptions"
              :invalidSelection="$v.rowToAdd.modifyingFactor.selection.$error"
              :invalidOther="$v.rowToAdd.modifyingFactor.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.modifyingFactor.other.$error &&
                  !$v.rowToAdd.modifyingFactor.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.modifyingFactor.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.modifyingFactor.other.minLength &&
                  $v.rowToAdd.modifyingFactor.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.modifyingFactor.label"),
                    $v.rowToAdd.modifyingFactor.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.modifyingFactor.other.maxLength &&
                  $v.rowToAdd.modifyingFactor.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.modifyingFactor.label"),
                    $v.rowToAdd.modifyingFactor.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <CustomDropdown
              v-model="rowToAdd.associationSign"
              :label="$t('chiefComplaint.associationSign.label')"
              :placeholder="$t('chiefComplaint.associationSign.placeholder')"
              :otherPlaceholder="
                $t('chiefComplaint.associationSign.otherPlaceholder')
              "
              :options="associationSignOptions"
              :invalidSelection="$v.rowToAdd.associationSign.selection.$error"
              :invalidOther="$v.rowToAdd.associationSign.other.$error"
            >
              <div
                v-if="
                  $v.rowToAdd.associationSign.other.$error &&
                  !$v.rowToAdd.associationSign.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.associationSign.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.associationSign.other.minLength &&
                  $v.rowToAdd.associationSign.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.quality.label"),
                    $v.rowToAdd.associationSign.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.associationSign.other.maxLength &&
                  $v.rowToAdd.associationSign.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.associationSign.label"),
                    $v.rowToAdd.associationSign.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
          <div class="col-md-4">
            <AddButton @add="addRow"></AddButton>
            <small
            v-if="v.complaints.$error && !v.complaints.maxLength"
            class="p-invalid"
          >
            {{ maxRecordsError($t("chiefComplaint.header"), v.complaints.$params.maxLength.max) }}
          </small>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{
                $t("chiefComplaint.note.label")
              }}</label>
              <textarea
                class="form-control"
                v-model.trim="chiefComplaint.note"
                :placeholder="$t('chiefComplaint.note.placeholder')"
                :class="{
                  'is-invalid': v.note.$invalid && v.note.$anyError,
                }"
              ></textarea>
              <div
                v-if="!v.note.notContainsHtmlTags && v.note.$error"
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("comment.label")) }}
              </div>
              <div
                v-else-if="!v.note.minLength && v.note.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("comment.label"),
                    v.note.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="!v.note.maxLength && v.note.$error"
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("comment.label"),
                    v.note.$params.maxLength.max
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
    <div class="table-wrapper my-2">
      <Base v-if="chiefComplaint.complaints.length">
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th class="align-middle" scope="col">
                      {{ $t("table.thead.count") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.chiefComplaint.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.location.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.quality.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.severity.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.timing.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.duration.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.context.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.modifyingFactor.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("chiefComplaint.associationSign.label") }}
                    </th>
                    <th class="align-middle" scope="col">
                      {{ $t("table.thead.controls") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(val, index) in chiefComplaint.complaints"
                    :key="index"
                  >
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.chiefComplaint.other">
                        {{ val.chiefComplaint.other }}
                      </div>
                      <div v-if="val.chiefComplaint.selection">
                        {{ val.chiefComplaint.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.location.other">
                        {{ val.location.other }}
                      </div>
                      <div v-if="val.location.selection">
                        {{ val.location.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.quality.other">
                        {{ val.quality.other }}
                      </div>
                      <div v-if="val.quality.selection">
                        {{ val.quality.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.severity.other">
                        {{ val.severity.other }}
                      </div>
                      <div v-if="val.severity.selection">
                        {{ val.severity.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.timing.other">
                        {{ val.timing.other }}
                      </div>
                      <div v-if="val.timing.selection">
                        {{ val.timing.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.duration.value">
                        {{ val.duration.value }}
                      </div>
                      <div v-if="val.duration.selection">
                        {{ val.duration.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.context.other">
                        {{ val.context.other }}
                      </div>
                      <div v-if="val.context.selection">
                        {{ val.context.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.modifyingFactor.other">
                        {{ val.modifyingFactor.other }}
                      </div>
                      <div v-if="val.modifyingFactor.selection">
                        {{ val.modifyingFactor.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.associationSign.other">
                        {{ val.associationSign.other }}
                      </div>
                      <div v-if="val.associationSign.selection">
                        {{ val.associationSign.selection.value }}
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
      @close="closeEditDialog"
      @cancel="closeEditDialog"
      @save="editRow"
      :header="$t('chiefComplaint.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.chiefComplaint">
          <CustomDropdown
            v-model="rowToEdit.chiefComplaint"
            :label="$t('chiefComplaint.chiefComplaint.label')"
            :placeholder="$t('chiefComplaint.chiefComplaint.placeholder')"
            :otherPlaceholder="
              $t('chiefComplaint.chiefComplaint.otherPlaceholder')
            "
            :options="chiefComplaintOptions"
            :invalidSelection="$v.rowToEdit.chiefComplaint.selection.$invalid"
            :invalidOther="$v.rowToEdit.chiefComplaint.other.$invalid"
          >
          <small
                v-if="
                  $v.rowToEdit.chiefComplaint.selection.$error &&
                  !$v.rowToEdit.chiefComplaint.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("chiefComplaint.chiefComplaint.label")) }}
              </small>
              <div
                v-else-if="
                  $v.rowToEdit.chiefComplaint.other.$error &&
                  !$v.rowToEdit.chiefComplaint.other.required
                "
                class="invalid-feedback"
              >
                {{ requiredError($t("chiefComplaint.chiefComplaint.label")) }}
              </div>
              <div
                v-else-if="
                  $v.rowToEdit.chiefComplaint.other.$error &&
                  !$v.rowToEdit.chiefComplaint.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.chiefComplaint.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.chiefComplaint.other.minLength &&
                  $v.rowToEdit.chiefComplaint.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.chiefComplaint.label"),
                    $v.rowToEdit.chiefComplaint.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.chiefComplaint.other.maxLength &&
                  $v.rowToEdit.chiefComplaint.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.chiefComplaint.label"),
                    $v.rowToEdit.chiefComplaint.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.location">
          <CustomDropdown
            v-model="rowToEdit.location"
            :label="$t('chiefComplaint.location.label')"
            :placeholder="$t('chiefComplaint.location.placeholder')"
            :otherPlaceholder="$t('chiefComplaint.location.otherPlaceholder')"
            :options="locationOptions"
            :invalidSelection="$v.rowToEdit.location.selection.$error"
            :invalidOther="$v.rowToEdit.location.other.$error"
          >
          <div
                v-if="
                  $v.rowToEdit.location.other.$error &&
                  !$v.rowToEdit.location.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.location.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.location.other.minLength &&
                  $v.rowToEdit.location.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.location.label"),
                    $v.rowToEdit.location.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.location.other.maxLength &&
                  $v.rowToEdit.location.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.location.label"),
                    $v.rowToEdit.location.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.quality">
          <CustomDropdown
            v-model="rowToEdit.quality"
            :label="$t('chiefComplaint.quality.label')"
            :placeholder="$t('chiefComplaint.quality.placeholder')"
            :otherPlaceholder="$t('chiefComplaint.quality.otherPlaceholder')"
            :options="qualityOptions"
            :invalidSelection="$v.rowToEdit.quality.selection.$error"
            :invalidOther="$v.rowToEdit.quality.other.$error"
          >
          <div
                v-if="
                  $v.rowToEdit.quality.other.$error &&
                  !$v.rowToEdit.quality.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.quality.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.quality.other.minLength &&
                  $v.rowToEdit.quality.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.quality.label"),
                    $v.rowToEdit.quality.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.quality.other.maxLength &&
                  $v.rowToEdit.quality.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.quality.label"),
                    $v.rowToEdit.quality.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.severity">
          <CustomDropdown
            v-model="rowToEdit.severity"
            :label="$t('chiefComplaint.severity.label')"
            :placeholder="$t('chiefComplaint.severity.placeholder')"
            :otherPlaceholder="$t('chiefComplaint.severity.otherPlaceholder')"
            :options="severityOptions"
            :invalidSelection="$v.rowToEdit.severity.selection.$error"
            :invalidOther="$v.rowToEdit.severity.other.$error"
          >
          <div
                v-if="
                  $v.rowToEdit.severity.other.$error &&
                  !$v.rowToEdit.severity.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.severity.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.severity.other.minLength &&
                  $v.rowToEdit.severity.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.severity.label"),
                    $v.rowToEdit.severity.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.severity.other.maxLength &&
                  $v.rowToEdit.severity.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.severity.label"),
                    $v.rowToEdit.severity.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.timing">
          <CustomDropdown
            v-model="rowToEdit.timing"
            :label="$t('chiefComplaint.timing.label')"
            :placeholder="$t('chiefComplaint.timing.placeholder')"
            :otherPlaceholder="$t('chiefComplaint.timing.otherPlaceholder')"
            :options="severityOptions"
            :invalidSelection="$v.rowToEdit.severity.selection.$error"
            :invalidOther="$v.rowToEdit.severity.other.$error"
          >
          <div
                v-if="
                  $v.rowToEdit.timing.other.$error &&
                  !$v.rowToEdit.timing.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.timing.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.timing.other.minLength &&
                  $v.rowToEdit.timing.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.timing.label"),
                    $v.rowToEdit.timing.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.timing.other.maxLength &&
                  $v.rowToEdit.timing.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.timing.label"),
                    $v.rowToEdit.timing.other.$params.maxLength.max
                  )
                }}
              </div>
          </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.duration">
          <CustomInputGroup
            v-model="rowToEdit.duration"
            :label="$t('chiefComplaint.duration.label')"
            :placeholder="$t('chiefComplaint.duration.placeholder')"
            :valuePlaceholder="$t('chiefComplaint.duration.valuePlaceholder')"
            :options="durationOptions"
            :invalidSelection="
              $v.rowToEdit.duration.selection.$invalid ||
              (serializer_error.duration
                ? serializer_error.duration.durationUnit
                  ? serializer_error.duration.durationUnit.length > 0
                  : false
                : false)
            "
            :invalidValue="
              $v.rowToEdit.duration.value.$invalid ||
              (serializer_error.duration
                ? serializer_error.duration.value
                  ? serializer_error.duration.value.length > 0
                  : false
                : false)
            "
          />
          <small
            v-if="
              !$v.rowToEdit.duration.value.maxValue &&
              $v.rowToEdit.duration.value.$error
            "
            class="p-invalid"
          >
            {{
              maxValueError(
                $t("chiefComplaint.duration.label"),
                $v.rowToEdit.duration.value.$params.maxValue.max
              )
            }}
          </small>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.context">
          <CustomDropdown
            v-model="rowToEdit.context"
            :label="$t('chiefComplaint.context.label')"
            :placeholder="$t('chiefComplaint.context.placeholder')"
            :otherPlaceholder="$t('chiefComplaint.context.otherPlaceholder')"
            :options="contextOptions"
            :invalidSelection="$v.rowToEdit.context.selection.$invalid"
            :invalidOther="$v.rowToEdit.context.other.$invalid"
          >
          <div
                v-if="
                  $v.rowToEdit.context.other.$error &&
                  !$v.rowToEdit.context.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.context.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.context.other.minLength &&
                  $v.rowToEdit.context.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.context.label"),
                    $v.rowToEdit.context.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.context.other.maxLength &&
                  $v.rowToEdit.context.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.context.label"),
                    $v.rowToEdit.context.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.modifyingFactor">
          <CustomDropdown
            v-model="rowToEdit.modifyingFactor"
            :label="$t('chiefComplaint.modifyingFactor.label')"
            :placeholder="$t('chiefComplaint.modifyingFactor.placeholder')"
            :otherPlaceholder="
              $t('chiefComplaint.modifyingFactor.otherPlaceholder')
            "
            :options="modifyingFactorOptions"
            :invalidSelection="$v.rowToEdit.modifyingFactor.selection.$invalid"
            :invalidOther="$v.rowToEdit.modifyingFactor.other.$invalid"
          >
          <div
                v-if="
                  $v.rowToEdit.modifyingFactor.other.$error &&
                  !$v.rowToEdit.modifyingFactor.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.modifyingFactor.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.modifyingFactor.other.minLength &&
                  $v.rowToEdit.modifyingFactor.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.modifyingFactor.label"),
                    $v.rowToEdit.modifyingFactor.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.modifyingFactor.other.maxLength &&
                  $v.rowToEdit.modifyingFactor.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.modifyingFactor.label"),
                    $v.rowToEdit.modifyingFactor.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
        </div>
        <div class="col-md-12 col-lg-6 col-xxl-4" v-if="rowToEdit.associationSign">
          <CustomDropdown
            v-model="rowToEdit.associationSign"
            :label="$t('chiefComplaint.associationSign.label')"
            :placeholder="$t('chiefComplaint.associationSign.placeholder')"
            :otherPlaceholder="
              $t('chiefComplaint.associationSign.otherPlaceholder')
            "
            :options="associationSignOptions"
            :invalidSelection="$v.rowToEdit.associationSign.selection.$invalid"
            :invalidOther="$v.rowToEdit.associationSign.other.$invalid"
          >
          <div
                v-if="
                  $v.rowToEdit.associationSign.other.$error &&
                  !$v.rowToEdit.associationSign.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("chiefComplaint.associationSign.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.associationSign.other.minLength &&
                  $v.rowToEdit.associationSign.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("chiefComplaint.quality.label"),
                    $v.rowToEdit.associationSign.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.associationSign.other.maxLength &&
                  $v.rowToEdit.associationSign.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("chiefComplaint.associationSign.label"),
                    $v.rowToEdit.associationSign.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          
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
<i18n src="@/lang/mr/ophthalmic/chiefComplaint.json"></i18n>
<script>
///////////////////////////////////
import { cloneDeep } from "lodash";
//////////////////////////////
import { mapGetters } from "vuex";
import {
  inputError,
  htmlTagsError,
  minLengthError,
  maxLengthError,
  maxValueError,
  requiredError,
  maxRecordsError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  numeric,
  requiredIf,
  maxValue,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import chiefComplaintOptions from "@/mixins/mr/ophthalmic/options/chiefComplaintOptions";
//////////////////////////////////////////////////////////
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
export default {
  mixins: [chiefComplaintOptions],
  props: {
    v: {
      type: Object,
      required: true,
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  components: {
    CustomDropdown,
    CustomInputGroup,
    Base,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
    ResetButton,
  },
  data() {
    return {
      rowToAdd: {
        chiefComplaint: {
          selection: null,
          other: "",
        },
        location: {
          selection: null,
          other: "",
        },
        quality: {
          selection: null,
          other: "",
        },
        severity: {
          selection: null,
          other: "",
        },
        timing: {
          selection: null,
          other: "",
        },
        duration: {
          selection: null,
          value: null,
        },
        context: {
          selection: null,
          other: "",
        },
        modifyingFactor: {
          selection: null,
          other: "",
        },
        associationSign: {
          selection: null,
          other: "",
        },
      },
      rowToEdit: {},
      indexToEdit: null,
      displayEditDialog: false,
      indexToDelete: null,
      displayDeleteDialog: false,
    };
  },
  ////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getChiefComplaint"]),
    chiefComplaint: {
      get() {
        return this.getChiefComplaint;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setChiefComplaint", value);
      },
    },
  },
  validations: {
    rowToAdd: {
      chiefComplaint: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.chiefComplaint.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.chiefComplaint.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      location: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      quality: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      severity: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      timing: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      duration: {
        selection: {},
        value: {
          numeric,
          maxValue: maxValue(100),
        },
      },
      context: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      modifyingFactor: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      associationSign: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
    },
    rowToEdit: {
      chiefComplaint: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToEdit.chiefComplaint.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToEdit.chiefComplaint.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      location: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      quality: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      severity: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      timing: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      duration: {
        selection: {},
        value: {
          numeric,
           maxValue: maxValue(100),
        },
      },
      context: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      modifyingFactor: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      associationSign: {
        selection: {},
        other: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
    },
  },
  
  methods: {
    ////////////////////////////
    inputError,
    htmlTagsError,
    maxLengthError,
    maxValueError,
    minLengthError,
    requiredError,
    maxRecordsError,
    ////////////////////////////
    resetForm() {
      this.rowToAdd = {
        chiefComplaint: {
          selection: null,
          other: "",
        },
        location: {
          selection: null,
          other: "",
        },
        quality: {
          selection: null,
          other: "",
        },
        severity: {
          selection: null,
          other: "",
        },
        timing: {
          selection: null,
          other: "",
        },
        duration: {
          selection: null,
          value: null,
        },
        context: {
          selection: null,
          other: "",
        },
        modifyingFactor: {
          selection: null,
          other: "",
        },
        associationSign: {
          selection: null,
          other: "",
        },
      };
      this.$v.rowToAdd.$reset();
    },
    reset() {
      this.resetForm();
      this.chiefComplaint = {
        complaints: [],
        note: "",
      };
      this.v.$reset();
    },

    /////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.chiefComplaint.complaints.push({ ...this.rowToAdd });
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
      this.v.$touch();
      if (!(this.v.$invalid || this.$v.rowToEdit.$invalid)) {
        this.chiefComplaint.complaints[this.indexToEdit] = {
          ...this.rowToEdit,
        };
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
      this.chiefComplaint.complaints.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
