<template>
  <div class="sessions">
    <Base>
      <div class="row">
        <div class="col-12">
          <div class="head d-flex justify-content-between">
            <h4 class="mb-0">{{ $t("sessions.title") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>
      </div>
      <Timeline :value="events1" align="left" class="customized-timeline">
        <template #marker="slotProps">
          <span
            class="custom-marker"
            :class="[
              slotProps.item.status == 'Issues' ||
              (slotProps.item.status == 'Targets' && displayTargets) ||
              (slotProps.item.status == 'Procedures' && displayProcedures) ||
              (slotProps.item.status == 'Final' && displaySessions)
                ? 'highlight-marker'
                : '',
            ]"
          >
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #opposite="slotProps">
          <label>{{ slotProps.item.status[locale] }}</label>
        </template>
        <template #content="slotProps">
          <div
            class="timeline-content-wrapper"
            v-if="slotProps.item.status['key'] == 'issues'"
          >
            <div class="row issues-form my-4 mx-0">
              <div class="col-md-6">
                <div class="form-group issue">
                  <label class="form-label">{{
                    $t("sessions.issue.label")
                  }}</label>
                  <div class="p-inputgroup">
                    <span
                      class="p-inputgroup-addon"
                      :class="{
                        'p-invalid': $v.issueToAdd.name.$error,
                      }"
                    >
                      <i class="mdi mdi-pill"></i>
                    </span>
                    <AutoComplete
                      v-model="issueToAdd.name"
                      :suggestions="issuePrams.suggestions"
                      field="value"
                      @complete="search($event, issuePrams)"
                      :placeholder="$t('sessions.issue.placeholder')"
                      :class="{ 'p-invalid': $v.issueToAdd.name.$error }"
                      @focus="addSpace('issues')"
                      @blur="removeSpace('issues')"
                    />
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        $v.issueToAdd.name.$error &&
                        !$v.issueToAdd.name.validator
                      "
                    >
                      {{ inputError($t("sessions.issue.label")) }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        $v.issueToAdd.name.$error &&
                        !$v.issueToAdd.name.required
                      "
                    >
                      {{ requiredError($t("sessions.issue.label")) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <AddButton @add="addIssue"></AddButton>
              </div>
            </div>
            <div class="row issues-list-btns" v-if="sessions.length">
              <div class="col-12 d-flex flex-wrap gap-2">
                <div
                  class="form-group"
                  v-for="(issue, index) in sessions"
                  :key="index"
                >
                  <div class="form-label">Issue #{{ index + 1 }}</div>
                  <button
                    class="btn btn-pill w-sm"
                    :class="[
                      issueIndex == index
                        ? 'btn-success'
                        : 'btn-outline-success',
                    ]"
                    @click="showTargets(index)"
                  >
                    <span v-if="issue.name">
                      <span v-if="typeof issue.name == 'object'">{{
                        issue.name.value
                      }}</span>
                      <span v-else>{{ issue.name }}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div
              class="row issues-list-table"
              v-if="displayTargets && sessions.length > 0"
            >
              <div class="offset-xxl-2 col-xxl-8">
                <div class="table-wrapper">
                  <table class="table table-bordered table-sm text-center">
                    <thead>
                      <tr>
                        <th class="align-middle">#</th>
                        <th class="align-middle">
                          {{ $t("sessions.issue.label") }}
                        </th>
                        <th class="align-middle" scope="col">
                          {{ $t("table.thead.controls") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="align-middle">{{ issueIndex + 1 }}</td>
                        <td class="align-middle">
                          <div v-if="sessions[issueIndex].name">
                            <span
                              v-if="
                                typeof sessions[issueIndex].name == 'object'
                              "
                              >{{ sessions[issueIndex].name.value }}</span
                            >
                            <span v-else>{{ sessions[issueIndex].name }}</span>
                          </div>
                        </td>
                        <td class="align-middle">
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                            <EditButton
                              class="me-2"
                              @edit="openEditIssue()"
                            ></EditButton>
                            <DeleteButton
                              @delete="openDeleteIssue()"
                            ></DeleteButton>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Divider></Divider>
            </div>
            <div class="row" v-if="showSpace.issues">
              <div class="col-12">
                <div class="extra-space" id="element-to-hide"></div>
              </div>
            </div>
            <!-- End Issue -->
          </div>
          <div
            class="timeline-content-wrapper"
            v-if="slotProps.item.status['key'] == 'targets'"
          >
            <div class="row targets-form my-4 mx-0" v-if="displayTargets">
              <div class="col-md-6 col-xxl-4">
                <div class="form-group target">
                  <label class="form-label">{{
                    $t("sessions.target.name.label")
                  }}</label>
                  <div class="p-inputgroup">
                    <span
                      class="p-inputgroup-addon"
                      :class="{
                        'p-invalid':
                          $v.targetToAdd.name.$error,
                      }"
                    >
                      <i class="mdi mdi-pill"></i>
                    </span>
                    <AutoComplete
                      v-model="targetToAdd.name"
                      :suggestions="issuePrams.suggestions"
                      field="value"
                      @complete="search($event, issuePrams)"
                      :placeholder="$t('sessions.target.name.placeholder')"
                      :class="{
                        'p-invalid': $v.targetToAdd.name.$error,
                      }"
                      @focus="addSpace('targets')"
                      @blur="removeSpace('targets')"
                    />
                  </div>

                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        $v.targetToAdd.name.$error &&
                        !$v.targetToAdd.name.validator
                      "
                    >
                      {{ inputError($t("sessions.issue.label")) }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        $v.targetToAdd.name.$error &&
                        !$v.targetToAdd.name.required
                      "
                    >
                      {{ requiredError($t("sessions.issue.label")) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                <div class="form-group currentValue">
                  <label class="form-label">{{
                    $t("sessions.target.currentValue.label")
                  }}</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="targetToAdd.currentValue"
                    :placeholder="
                      $t('sessions.target.currentValue.placeholder')
                    "
                    :class="{
                      'is-invalid': $v.targetToAdd.currentValue.$error,
                    }"
                  />

                  <div class="error">
                    <small
                      v-if="
                        !$v.targetToAdd.currentValue.notContainsHtmlTags &&
                        $v.targetToAdd.currentValue.$error
                      "
                      class="invalid-feedback"
                    >
                      {{
                        htmlTagsError($t("sessions.target.currentValue.label"))
                      }}
                    </small>

                    <small
                      v-else-if="
                        !$v.targetToAdd.currentValue.minLength &&
                        $v.targetToAdd.currentValue.$error
                      "
                      class="invalid-feedback"
                    >
                      {{
                        minLengthError(
                          $t("sessions.target.currentValue.label"),
                          $v.targetToAdd.currentValue.$params.minLength.min
                        )
                      }}
                    </small>
                    <small
                      v-else-if="
                        !$v.targetToAdd.currentValue.maxLength &&
                        $v.targetToAdd.currentValue.$error
                      "
                      class="invalid-feedback"
                    >
                      {{
                        maxLengthError(
                          $t("sessions.target.currentValue.label"),
                          $v.targetToAdd.currentValue.$params.maxLength.max
                        )
                      }}
                    </small>

                    <small
                      class="p-invalid"
                      v-else-if="
                        $v.targetToAdd.currentValue.$error &&
                        !$v.targetToAdd.currentValue.required
                      "
                    >
                      {{
                        requiredError($t("sessions.target.currentValue.label"))
                      }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                <div class="form-group targetValue">
                  <label class="form-label">{{
                    $t("sessions.target.targetValue.label")
                  }}</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="targetToAdd.targetValue"
                    :placeholder="$t('sessions.target.targetValue.placeholder')"
                    :class="{
                      'is-invalid':
                        $v.targetToAdd.targetValue.$error
                    }"
                  />
                  <small
                    v-if="
                      !$v.targetToAdd.targetValue.notContainsHtmlTags &&
                      $v.targetToAdd.targetValue.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("sessions.target.targetValue.label")) }}
                  </small>
                  <small
                    v-if="
                      !$v.targetToAdd.targetValue.minLength &&
                      $v.targetToAdd.targetValue.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("sessions.target.targetValue.label"),
                        $v.targetToAdd.targetValue.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    v-if="
                      !$v.targetToAdd.targetValue.maxLength &&
                      $v.targetToAdd.targetValue.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("sessions.target.targetValue.label"),
                        $v.targetToAdd.targetValue.$params.maxLength.max
                      )
                    }}
                  </small>
                </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                <AddButton @add="addTarget"></AddButton>
              </div>
            </div>
            <div
              class="row targets-list-btns"
              v-if="displayTargets && sessions[issueIndex].targets.length > 0"
            >
              <div class="col-12 d-flex flex-wrap gap-2">
                <div
                  class="form-group"
                  v-for="(target, index) in sessions[issueIndex].targets"
                  :key="index"
                >
                  <div class="form-label">Target #{{ index + 1 }}</div>
                  <button
                    class="btn btn-pill w-sm"
                    :class="[
                      targetIndex == index
                        ? 'btn-success'
                        : 'btn-outline-success',
                    ]"
                    @click="showProcedures(index)"
                  >
                  <span v-if="target.name">
                    <span
                      v-if="
                        typeof target.name == 'object'
                      "
                      >{{ target.name.value }}</span
                    >
                    <span v-else>{{ target.name }}</span>
                  </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="row targets-list-table"
              v-if="
                displayProcedures && sessions[issueIndex].targets.length > 0
              "
            >
              <div class="offset-xxl-1 col-xxl-10">
                <div class="table-wrapper">
                  <table class="table table-bordered table-sm text-center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>{{ $t("sessions.target.name.label") }}</th>
                        <th>{{ $t("sessions.target.currentValue.label") }}</th>
                        <th>{{ $t("sessions.target.targetValue.label") }}</th>
                        <th scope="col" rowspan="2">
                          {{ $t("table.thead.controls") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="align-middle">{{ targetIndex + 1 }}</td>
                        <td class="align-middle">
                          <div v-if="sessions[issueIndex].targets[targetIndex].name">
                            <span
                              v-if="
                                typeof sessions[issueIndex].targets[targetIndex].name == 'object'
                              "
                              >{{ sessions[issueIndex].targets[targetIndex].name.value }}</span
                            >
                            <span v-else>{{ sessions[issueIndex].targets[targetIndex].name }}</span>
                          </div>
                        </td>
                        <td class="align-middle">
                          {{
                            sessions[issueIndex].targets[targetIndex]
                              .currentValue
                          }}
                        </td>
                        <td class="align-middle">
                          {{
                            sessions[issueIndex].targets[targetIndex]
                              .targetValue
                          }}
                        </td>
                        <td class="align-middle">
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                            <EditButton
                              class="me-2"
                              @edit="openEditTarget()"
                            ></EditButton>
                            <DeleteButton
                              @delete="openDeleteTarget()"
                            ></DeleteButton>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Divider></Divider>
            </div>
            <div class="row" v-if="showSpace.targets">
              <div class="col-12">
                <div class="extra-space" id="element-to-hide"></div>
              </div>
            </div>
            <!-- End Target -->
          </div>
          <div
            class="timeline-content-wrapper"
            v-if="slotProps.item.status['key'] == 'procedures'"
          >
            <div class="row procedures-form my-4 mx-0" v-if="displayProcedures">
              <div class="col-md-6 col-xxl-4">
                <div class="form-group procedure">
                  <label class="form-label">{{
                    $t("sessions.procedure.name.label")
                  }}</label>
                  <div class="p-inputgroup">
                    <span
                      class="p-inputgroup-addon"
                      :class="{
                        'p-invalid':
                          $v.procedureToAdd.name.$invalid &&
                          $v.procedureToAdd.name.$anyDirty &&
                          $v.procedureToAdd.name.$anyError,
                      }"
                    >
                      <i class="mdi mdi-pill"></i>
                    </span>
                    <AutoComplete
                      v-model="procedureToAdd.name"
                      :suggestions="issuePrams.suggestions"
                      field="value"
                      @complete="search($event, issuePrams)"
                      :placeholder="$t('sessions.procedure.name.placeholder')"
                      :class="{
                        'p-invalid': $v.procedureToAdd.name.$error,
                      }"
                      @focus="addSpace('procedures')"
                      @blur="removeSpace('procedures')"
                    />
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        $v.procedureToAdd.name.$error &&
                        !$v.procedureToAdd.name.validator
                      "
                    >
                      {{ inputError($t("sessions.issue.label")) }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        $v.procedureToAdd.name.$error &&
                        !$v.procedureToAdd.name.required
                      "
                    >
                      {{ requiredError($t("sessions.issue.label")) }}
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
                    v-model="procedureToAdd.noOfSessions"
                    :placeholder="
                      $t('sessions.procedure.noOfSessions.placeholder')
                    "
                    :class="{
                      'is-invalid': $v.procedureToAdd.noOfSessions.$error,
                    }"
                  />
                  <div
                    class="invalid-feedback"
                    v-if="
                      !$v.procedureToAdd.noOfSessions.decimal &&
                      $v.procedureToAdd.noOfSessions.$invalid
                    "
                  >
                    {{
                      inputError($t("sessions.procedure.noOfSessions.label"))
                    }}
                  </div>
                  <div
                    class="invalid-feedback"
                    v-else-if="
                      !$v.procedureToAdd.noOfSessions.minValue &&
                      $v.procedureToAdd.noOfSessions.$invalid
                    "
                  >
                    {{
                      minValueError(
                        $t("sessions.procedure.noOfSessions.label"),
                        $v.procedureToAdd.noOfSessions.$params.minValue.min
                      )
                    }}
                  </div>
                  <div
                    class="invalid-feedback"
                    v-else-if="
                      !$v.procedureToAdd.noOfSessions.maxValue &&
                      $v.procedureToAdd.noOfSessions.$invalid
                    "
                  >
                    {{
                      maxValueError(
                        $t("sessions.procedure.noOfSessions.label"),
                        $v.procedureToAdd.noOfSessions.$params.maxValue.max
                      )
                    }}
                  </div>

                  <div
                    class="invalid-feedback"
                    v-else-if="
                      !$v.procedureToAdd.noOfSessions.required &&
                      $v.procedureToAdd.noOfSessions.$invalid
                    "
                  >
                    {{
                      requiredError(
                        $t("sessions.procedure.noOfSessions.label"),
                        $v.procedureToAdd.noOfSessions.$params.minValue.min
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
                    v-model="procedureToAdd.time"
                    :placeholder="$t('sessions.procedure.time.placeholder')"
                    :class="{
                      'p-invalid': $v.procedureToAdd.time.$errr,
                    }"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="$v.procedureToAdd.time.$error"
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
                    v-model="procedureToAdd.place"
                    :placeholder="$t('sessions.procedure.place.placeholder')"
                    :options="placeOptions"
                    optionLabel="value"
                  />
                </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                <div class="form-group date">
                  <label class="form-label">{{
                    $t("sessions.procedure.date.label")
                  }}</label>
                  <Calendar
                    v-model="procedureToAdd.viewDate"
                    :placeholder="$t('sessions.procedure.date.placeholder')"
                    dateFormat="yy.mm.dd"
                    :showIcon="true"
                    :class="{
                      'p-invalid': $v.procedureToAdd.date.$error,
                    }"
                    :showTime="true"
                    @date-select="getIsoDateTime"
                    @show="addSpace('procedures')"
                    @hide="removeSpace('procedures')"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        $v.procedureToAdd.date.$error
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
                    v-model="procedureToAdd.comment"
                    :placeholder="$t('sessions.procedure.comment.placeholder')"
                    :class="{
                      'is-invalid':
                        $v.procedureToAdd.comment.$error,
                    }"
                  />
                  <small
                    v-if="
                      !$v.procedureToAdd.comment.notContainsHtmlTags &&
                      $v.procedureToAdd.comment.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("sessions.procedure.comment.label")) }}
                  </small>
                  <small
                    v-else-if="
                      !$v.procedureToAdd.comment.minLength &&
                      $v.procedureToAdd.comment.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("sessions.procedure.comment.label"),
                        $v.procedureToAdd.comment.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    v-else-if="
                      !$v.procedureToAdd.comment.maxLength &&
                      $v.procedureToAdd.comment.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("sessions.procedure.comment.label"),
                        $v.procedureToAdd.comment.$params.maxLength.max
                      )
                    }}
                  </small>
                </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                <AddButton @add="addProcedure"></AddButton>
              </div>
            </div>
            <div
              class="row procedures-list-table my-4 mx-0"
              v-if="
                displayProcedures &&
                sessions[issueIndex].targets[targetIndex].procedures.length > 0
              "
            >
              <div class="col-12">
                <div class="table-wrapper">
                  <table class="table table-bordered table-sm text-center">
                    <thead>
                      <tr>
                        <th class="align-middle">#</th>
                        <th class="align-middle">
                          {{ $t("sessions.procedure.name.label") }}
                        </th>
                        <th class="align-middle">
                          {{ $t("sessions.procedure.noOfSessions.label") }}
                        </th>
                        <th class="align-middle">
                          {{ $t("sessions.procedure.time.label") }}
                        </th>
                        <th class="align-middle">
                          {{ $t("sessions.procedure.place.label") }}
                        </th>
                        <th class="align-middle">
                          {{ $t("sessions.procedure.date.label") }}
                        </th>
                        <th class="align-middle">
                          {{ $t("sessions.procedure.comment.label") }}
                        </th>
                        <th class="align-middle">
                          {{ $t("table.thead.controls") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(procedure, index) in sessions[issueIndex]
                          .targets[targetIndex].procedures"
                        :key="index"
                      >
                        <td class="align-middle">{{ index + 1 }}</td>
                        <td class="align-middle">
                          <div v-if="procedure.name">
                            <span
                              v-if="
                                typeof procedure.name == 'object'
                              "
                              >{{ procedure.name.value }}</span
                            >
                            <span v-else>{{ procedure.name }}</span>
                          </div>
                        </td>
                        <td class="align-middle">
                          {{ procedure.noOfSessions }}
                        </td>
                        <td class="align-middle">{{ procedure.time }}</td>
                        <td class="align-middle">
                          <div v-if="procedure.place">
                            {{ procedure.place.value }}
                          </div>
                        </td>
                        <td class="align-middle">
                          <div v-if="procedure.date">
                            {{ getLocaleDateTime(procedure.date) }}
                          </div>
                        </td>
                        <td class="align-middle">{{ procedure.comment }}</td>
                        <td class="align-middle">
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                            <EditButton
                              class="me-2"
                              @edit="openEditProcedure(procedure, index)"
                            ></EditButton>
                            <DeleteButton
                              @delete="openDeleteProcedure(index)"
                            ></DeleteButton>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row" v-if="displayProcedures">
              <div class="col-12">
                <div class="head d-flex justify-content-end">
                  <button
                    class="btn btn-pill btn-secondary w-md"
                    @click="showResults"
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
            <div class="row" v-if="showSpace.procedures">
              <div class="col-12">
                <div class="extra-space" id="element-to-hide"></div>
              </div>
            </div>
            <!-- End Procedures -->
          </div>
          <div
            class="timeline-content-wrapper"
            v-if="slotProps.item.status['key'] == 'final'"
          >
            <div class="row sessions" v-if="displaySessions">
              <div class="col-12">
                <div class="loader-wrapper" v-if="loadingResults">
                  <img
                    src="/assets/images/loader.svg"
                    class="loader-img"
                    alt="Loader"
                  />
                </div>
                <div v-else>
                  <Divider></Divider>
                  <div class="table-wrapper my-2" v-if="sessions.length > 0">
                    <table class="table table-sm table-bordered text-center">
                      <tbody>
                        <tr>
                          <td class="align-middle">#</td>
                          <td class="align-middle">
                            {{ $t("sessions.issue.label") }}
                          </td>
                          <td colspan="9" v-if="displayTargets">
                            <table
                              class="table table-borderless bg-white text-center mb-0"
                            >
                              <tbody>
                                <tr>
                                  <td class="align-middle">
                                    {{ $t("sessions.target.name.label") }}
                                  </td>
                                  <td class="align-middle">
                                    {{
                                      $t("sessions.target.currentValue.label")
                                    }}
                                  </td>
                                  <td class="align-middle">
                                    {{
                                      $t("sessions.target.targetValue.label")
                                    }}
                                  </td>
                                  <td
                                    colspan="6"
                                    v-if="displayProcedures"
                                    class="custom-width30"
                                  >
                                    <table
                                      class="table table-borderless bg-white text-center mb-0"
                                    >
                                      <tbody>
                                        <tr>
                                          <td class="align-middle">
                                            {{
                                              $t(
                                                "sessions.procedure.name.label"
                                              )
                                            }}
                                          </td>
                                          <td class="align-middle">
                                            {{
                                              $t(
                                                "sessions.procedure.noOfSessions.label"
                                              )
                                            }}
                                          </td>
                                          <td class="align-middle">
                                            {{
                                              $t(
                                                "sessions.procedure.time.label"
                                              )
                                            }}
                                          </td>
                                          <td class="align-middle">
                                            {{
                                              $t(
                                                "sessions.procedure.place.label"
                                              )
                                            }}
                                          </td>
                                          <td class="align-middle">
                                            {{
                                              $t(
                                                "sessions.procedure.date.label"
                                              )
                                            }}
                                          </td>
                                          <td class="align-middle">
                                            {{
                                              $t(
                                                "sessions.procedure.comment.label"
                                              )
                                            }}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr v-for="(issue, index) in sessions" :key="index">
                          <td class="align-middle">{{ index + 1 }}</td>
                          <td class="align-middle">
                            <div v-if="issue.name">
                              <span
                                v-if="
                                  typeof issue.name == 'object'
                                "
                                >{{ issue.name.value }}</span
                              >
                              <span v-else>{{ issue.name }}</span>
                            </div>



                          </td>
                          <td colspan="9" v-if="displayTargets">
                            <table
                              class="table table-borderless bg-white text-center mb-0"
                            >
                              <tbody>
                                <tr
                                  v-for="(target, index2) in issue.targets"
                                  :key="index2"
                                  :class="{ 'custom-top-border': index2 > 0 }"
                                >
                                  <td class="align-middle">
                                    <div v-if="target.name">
                                      <span
                                        v-if="
                                          typeof target.name == 'object'
                                        "
                                        >{{ target.name.value }}</span
                                      >
                                      <span v-else>{{ target.name }}</span>
                                    </div>

                                  </td>
                                  <td class="align-middle">
                                    {{ target.currentValue }}
                                  </td>
                                  <td class="align-middle">
                                    {{ target.targetValue }}
                                  </td>
                                  <td colspan="6" v-if="displayProcedures">
                                    <table
                                      class="table table-borderless bg-white text-center mb-0"
                                    >
                                      <tbody>
                                        <tr
                                          v-for="(
                                            procedure, index3
                                          ) in target.procedures"
                                          :key="index3"
                                          :class="{
                                            'custom-top-border': index3 > 0,
                                          }"
                                        >
                                          <td class="align-middle">
                                            <div v-if="procedure.name">
                                              <span
                                                v-if="
                                                  typeof procedure.name == 'object'
                                                "
                                                >{{ procedure.name.value }}</span
                                              >
                                              <span v-else>{{procedure.name }}</span>
                                            </div>
                                            
                                          </td>
                                          <td class="align-middle">
                                            {{ procedure.noOfSessions }}
                                          </td>
                                          <td class="align-middle">
                                            {{ procedure.time }}
                                          </td>
                                          <td class="align-middle">
                                            {{ procedure.place[locale] }}
                                          </td>
                                          <td class="align-middle">
                                            <div v-if="procedure.date">
                                              {{
                                                getLocaleDateTime(
                                                  procedure.date
                                                )
                                              }}
                                            </div>
                                          </td>
                                          <td class="align-middle">
                                            {{ procedure.comment }}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Timeline>
    </Base>
    <EditDialog
      :display="displayEditIssue"
      @cancel="closeEditIssue"
      :header="$t('sessions.issue.label')"
      @save="editIssue"
      @close="closeEditIssue"
    >
      <div class="row">
        <div class="col-12">
          <div class="form-group issue">
            <label class="form-label">{{ $t("sessions.issue.label") }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{
                  'p-invalid': $v.issueToEdit.name.$error,
                }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="issueToEdit.name"
                :suggestions="issuePrams.suggestions"
                field="value"
                @complete="search($event, issuePrams)"
                :placeholder="$t('sessions.issue.placeholder')"
                :class="{ 'p-invalid': $v.issueToEdit.name.$error }"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.issueToEdit.name.$error && !$v.issueToEdit.name.validator
                "
              >
                {{ inputError($t("sessions.issue.label")) }}
              </small>
              <small
                class="p-invalid"
                v-else-if="
                  $v.issueToEdit.name.$error && !$v.issueToEdit.name.required
                "
              >
                {{ requiredError($t("sessions.issue.label")) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
    <DeleteDialog
      :display="displayDeleteIssue"
      @cancel="closeDeleteIssue"
      @delete="deleteIssue"
    ></DeleteDialog>

    <EditDialog
      :display="displayEditTarget"
      @cancel="closeEditTarget"
      :header="$t('sessions.target.name.label')"
      @save="editTarget"
      @close="closeEditTarget"
    >
      <div class="row">
        <div class="col-md-6 col-xxl-4">
          <div class="form-group target">
            <label class="form-label">{{
              $t("sessions.target.name.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{
                  'p-invalid':
                    $v.targetToEdit.name.$error,
                }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="targetToEdit.name"
                :suggestions="issuePrams.suggestions"
                field="value"
                @complete="search($event, issuePrams)"
                :placeholder="$t('sessions.target.name.placeholder')"
                :class="{
                  'p-invalid': $v.targetToEdit.name.$error,
                }"
                @focus="addSpace('targets')"
                @blur="removeSpace('targets')"
              />
            </div>

            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.targetToEdit.name.$error && !$v.targetToEdit.name.validator
                "
              >
                {{ inputError($t("sessions.issue.label")) }}
              </small>
              <small
                class="p-invalid"
                v-else-if="
                  $v.targetToEdit.name.$error && !$v.targetToEdit.name.required
                "
              >
                {{ requiredError($t("sessions.issue.label")) }}
              </small>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xxl-4">
          <div class="form-group currentValue">
            <label class="form-label">{{
              $t("sessions.target.currentValue.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model="targetToEdit.currentValue"
              :placeholder="$t('sessions.target.currentValue.placeholder')"
              :class="{
                'is-invalid': $v.targetToEdit.currentValue.$error,
              }"
            />

            <div class="error">
              <small
                v-if="
                  !$v.targetToEdit.currentValue.notContainsHtmlTags &&
                  $v.targetToEdit.currentValue.$error
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("sessions.target.currentValue.label")) }}
              </small>

              <small
                v-else-if="
                  !$v.targetToEdit.currentValue.minLength &&
                  $v.targetToEdit.currentValue.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("sessions.target.currentValue.label"),
                    $v.targetToEdit.currentValue.$params.minLength.min
                  )
                }}
              </small>
              <small
                v-else-if="
                  !$v.targetToEdit.currentValue.maxLength &&
                  $v.targetToEdit.currentValue.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("sessions.target.currentValue.label"),
                    $v.targetToEdit.currentValue.$params.maxLength.max
                  )
                }}
              </small>

              <small
                class="p-invalid"
                v-else-if="
                  $v.targetToEdit.currentValue.$error &&
                  !$v.targetToEdit.currentValue.required
                "
              >
                {{ requiredError($t("sessions.target.currentValue.label")) }}
              </small>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-6 col-xxl-4">
          <div class="form-group currentValue">
            <label class="form-label">{{
              $t("sessions.target.currentValue.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model="targetToEdit.currentValue"
              :placeholder="$t('sessions.target.currentValue.placeholder')"
              :class="{
                'is-invalid':
                  $v.targetToEdit.currentValue.$invalid &&
                  $v.targetToEdit.currentValue.$anyDirty &&
                  $v.targetToEdit.currentValue.$anyError,
              }"
            />
            <small
              v-if="
                !$v.targetToEdit.currentValue.notContainsHtmlTags &&
                $v.targetToEdit.currentValue.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("sessions.target.currentValue.label")) }}
            </small>
            <small
              v-if="
                !$v.targetToEdit.currentValue.minLength &&
                $v.targetToEdit.currentValue.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("sessions.target.currentValue.label"),
                  $v.targetToEdit.currentValue.$params.minLength.min
                )
              }}
            </small>
            <small
              v-if="
                !$v.targetToEdit.currentValue.maxLength &&
                $v.targetToEdit.currentValue.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("sessions.target.currentValue.label"),
                  $v.targetToEdit.currentValue.$params.maxLength.max
                )
              }}
            </small>
          </div>
        </div> -->
        <div class="col-md-6 col-xxl-4">
          <div class="form-group targetValue">
            <label class="form-label">{{
              $t("sessions.target.targetValue.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model="targetToEdit.targetValue"
              :placeholder="$t('sessions.target.targetValue.placeholder')"
              :class="{
                'is-invalid':
                  $v.targetToEdit.targetValue.$error,
              }"
            />
            <small
              v-if="
                !$v.targetToEdit.targetValue.notContainsHtmlTags &&
                $v.targetToEdit.targetValue.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("sessions.target.targetValue.label")) }}
            </small>
            <small
              v-else-if="
                !$v.targetToEdit.targetValue.minLength &&
                $v.targetToEdit.targetValue.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("sessions.target.targetValue.label"),
                  $v.targetToEdit.targetValue.$params.minLength.min
                )
              }}
            </small>
            <small
              v-else-if="
                !$v.targetToEdit.targetValue.maxLength &&
                $v.targetToEdit.targetValue.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("sessions.target.targetValue.label"),
                  $v.targetToEdit.targetValue.$params.maxLength.max
                )
              }}
            </small>
          </div>
        </div>
      </div>
    </EditDialog>
    <DeleteDialog
      :display="displayDeleteTarget"
      @cancel="closeDeleteTarget"
      @delete="deleteTarget"
    ></DeleteDialog>

    <EditDialog
      :display="displayEditProcedure"
      @cancel="closeEditProcedure"
      @save="editProcedure"
      :header="$t('sessions.procedure.title')"
      @close="closeEditProcedure"
    >
      <div class="row">
        <div class="col-md-6 col-xxl-4">
          <div class="form-group procedure">
            <label class="form-label">{{
              $t("sessions.procedure.name.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{
                  'p-invalid':
                    $v.procedureToEdit.name.$error,
                }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="procedureToEdit.name"
                :suggestions="issueSuggestions"
                :field="locale"
                @complete="searchIssue($event)"
                :placeholder="$t('sessions.procedure.name.placeholder')"
                :class="{
                  'p-invalid':
                    $v.procedureToEdit.name.$error,
                }"
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
            />
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
                'p-invalid': $v.procedureToEdit.time.$error,
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
              optionValue="key"
              :options="placeOptions"
              optionLabel="value"
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
                'p-invalid': $v.procedureToEdit.date.$error,
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
                'is-invalid': $v.procedureToEdit.comment.$error,
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
    <DeleteDialog
      :display="displayDeleteProcedure"
      @cancel="closeDeleteProcedure"
      @delete="deleteProcedure"
    ></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/physiotherapy/planning.json"></i18n>

<script>
import { mapActions } from "vuex";
///////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import sessionOptions from "@/mixins/mr/physiotherapy/options/planningSessionsOptions";

///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  maxValueError,
  inputError,
  minValueError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  numeric,
  minValue,
  decimal,
  maxValue,
  required,
} from "vuelidate/lib/validators";
import {
  notContainsHtmlTags,
  validIsoDateTime,
} from "@/validation/customValidators";
import { getIsoDateTime, getLocaleDateTime } from "@/helpers/utilities";
export default {
  mixins: [sessionOptions],
  components: {
    Base,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    Divider,
    EditDialog,
    DeleteDialog,
  },
  data() {
    return {
      events1: [
        {
          status: { en: "Issues", ar: "مشاكل", key: "issues" },
          icon: "pi pi-circle",
        },
        {
          status: { en: "Targets", ar: "الأهداف", key: "targets" },
          icon: "pi pi-circle",
        },
        {
          status: { en: "Procedures", ar: "إجراءات", key: "procedures" },
          icon: "pi pi-circle",
        },
        {
          status: { en: "Final", ar: "النهاية", key: "final" },
          icon: "pi pi-circle",
        },
      ],
      issueId: 5,
      targetId: 5,
      procedureId: 5,
      issueIndex: null,
      targetIndex: null,
      displayTargets: false,
      displayProcedures: false,
      displaySessions: false,
      loadingResults: true,
      issueSuggestions: [],
      issueToAdd: {
        name: "",
        targets: [],
      },
      targetToAdd: {
        name: "",
        currentValue: "",
        targetValue: "",
        procedures: [],
      },
      procedureToAdd: {
        name: "",
        noOfSessions: "",
        time: "",
        place: null,
        viewDate: "",
        date: "",
        comment: "",
        status: "remaining",
        currentSession: 1,
      },
      ////////////////////////////
      issueToEdit: {},
      displayEditIssue: false,
      displayDeleteIssue: false,
      ////////////////////////////
      targetToEdit: {},
      displayEditTarget: false,
      displayDeleteTarget: false,
      ////////////////////////////
      procedureToEdit: {},
      indexToEdit: null,
      displayEditProcedure: false,
      indexToDelete: null,
      displayDeleteProcedure: false,
      //////////////////////
      //////////////////////
      showSpace: {
        issues: false,
        targets: false,
        procedures: false,
      },
    };
  },
  computed: {
    sessions() {
      return this.$store.getters["detailsPhysiotherapy/physiotherapy/getSessions"];
    },
  },
  validations: {
    issueToAdd: {
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
    },
    targetToAdd: {
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
      currentValue: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      targetValue: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
    procedureToAdd: {
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
        decimal,
        minValue: minValue(1),
        maxValue: maxValue(100),
      },
      time: {
        minLength: minLength(5),
        maxLength: maxLength(5),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      place: {
        name: {
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
    issueToEdit: {
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
    },
    targetToEdit: {
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
      currentValue: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      targetValue: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
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
      place: {
        name: {
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
  mounted() {
    // Get a reference to the element to hide
    // var elementToHide = document.getElementById("element-to-hide");
    // Add an event listener to the body element
    document.body.addEventListener("click", function () {
      // Hide the element
      this.removeSpace;
    });
  },
  methods: {
    htmlTagsError,
    maxLengthError,
    requiredError,
    minValueError,
    minLengthError,
    maxValueError,
    inputError,
    getLocaleDateTime,
    addSpace(key) {
      this.showSpace[key] = true;
    },
    removeSpace(key) {
      this.showSpace[key] = false;
    },
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setSessions", "resetSessions"]),
    reset() {
      this.resetSessions();
      this.initSessions();
      this.restIssue();
      this.restTarget();
      this.restProcedure();
    },
    restIssue() {
      this.issueToAdd = {
        name: "",
        targets: [],
      };
      this.$v.issueToAdd.$reset();
    },
    restTarget() {
      this.targetToAdd = {
        name: "",
        currentValue: "",
        targetValue: "",
        procedures: [],
      };
      this.$v.targetToAdd.$reset();
    },
    restProcedure() {
      this.procedureToAdd = {
        name: "",
        noOfSessions: "",
        time: "",
        place: null,
        viewDate: "",
        date: "",
        comment: "",
        status: "remaining",
        currentSession: 1,
      };
      this.$v.procedureToAdd.$reset();
    },
    initSessions() {
      this.issueId = 5;
      this.targetId = 5;
      this.procedureId = 5;
      this.issueIndex = null;
      this.targetIndex = null;
      this.displayTargets = false;
      this.displayProcedures = false;
      this.loadingResults = true;
      this.displaySessions = false;
      this.issueSuggestions = [];
    },
    getIsoDateTime() {
      this.procedureToAdd.date = getIsoDateTime(this.procedureToAdd.viewDate);
    },
    getIsoDateTimeEdit() {
      this.procedureToEdit.date = getIsoDateTime(this.procedureToEdit.viewDate);
    },
    // searchIssue(event) {
    //     setTimeout(() => {
    //         if (!event.query.trim().length) {
    //             this.issueSuggestions = [...this.issueOptions];
    //         }
    //         else {
    //             this.issueSuggestions = this.issueOptions.filter((opt) => {
    //                 return opt.en.toLowerCase().startsWith(event.query.toLowerCase());
    //             });
    //         }
    //     }, 250);
    // },
    addIssue() {
      this.$v.issueToAdd.$touch();
      if (!this.$v.issueToAdd.$invalid) {
        // if (typeof this.issueToAdd.name === "string") {
        //   if (this.issueToAdd.name) {
        //     let name = this.issueToAdd.name;
        //     this.issueId += 1;
        //     this.issueToAdd.name = { en: name, ar: name, id: this.issueId };
        //     this.sessions.push({ ...this.issueToAdd });
        //     this.restIssue();
        //   }
        // } else {
        this.sessions.push({ ...this.issueToAdd });
        this.restIssue();
        // }
      }
    },
    showTargets(index) {
      // console.log(index);
      this.issueIndex = index;
      this.targetIndex = null;
      this.displayTargets = true;
      this.restTarget();
      ///////////////////
      this.displayProcedures = false;
      this.restProcedure();
      this.displaySessions = false;
    },
    addTarget() {
      this.$v.targetToAdd.$touch();
      if (
        !(
          this.$v.targetToAdd.$invalid ||
          (!this.targetToAdd.currentValue && !this.targetToAdd.targetValue)
        )
      ) {
        // if (typeof this.targetToAdd.name === "string") {
        //   if (this.targetToAdd.name) {
        //     let name = this.targetToAdd.name;
        //     this.targetId += 1;
        //     this.targetToAdd.name = { en: name, ar: name, id: this.targetId };
        //     this.sessions[this.issueIndex].targets.push({
        //       ...this.targetToAdd,
        //     });
        //     this.restTarget();
        //   }
        // } else {
        this.sessions[this.issueIndex].targets.push({ ...this.targetToAdd });
        this.restTarget();
        // }
      }
    },
    showProcedures(index) {
      this.targetIndex = index;
      this.displayProcedures = true;
      this.restProcedure();
      this.displaySessions = false;
    },
    addProcedure() {
      this.$v.procedureToAdd.$touch();
      if (
        !(
          this.$v.procedureToAdd.$invalid ||
          (!this.procedureToAdd.noOfSessions &&
            !this.procedureToAdd.time &&
            !this.procedureToAdd.place &&
            !this.procedureToAdd.date &&
            !this.procedureToAdd.comment)
        )
      ) {
        // if (typeof this.procedureToAdd.name === "string") {
        //   if (this.procedureToAdd.name) {
        //     let name = this.procedureToAdd.name;
        //     this.procedureId += 1;
        //     this.procedureToAdd.name = {
        //       en: name,
        //       ar: name,
        //       id: this.procedureId,
        //     };
        //     this.sessions[this.issueIndex].targets[
        //       this.targetIndex
        //     ].procedures.push({ ...this.procedureToAdd });
        //     this.restProcedure();
        //   }
        // } else {
        this.sessions[this.issueIndex].targets[
          this.targetIndex
        ].procedures.push({ ...this.procedureToAdd });
        this.restProcedure();
        // }
      }
    },
    showResults() {
      this.displaySessions = true;
      this.loadingResults = true;
      setInterval(() => {
        this.loadingResults = false;
      }, 2000);
    },

    /////////////////////
    openEditIssue() {
      this.displayEditIssue = true;
      this.issueToEdit = { ...this.sessions[this.issueIndex] };
    },
    closeEditIssue() {
      this.$v.issueToEdit.$reset();
      this.issueToEdit = {};
      this.issueIndex = 0;
      this.displayEditIssue = false;
    },
    editIssue() {
      this.$v.issueToEdit.$touch();
      if (!this.$v.issueToEdit.$invalid) {
        if (typeof this.issueToEdit.name === "string") {
          let name = this.issueToEdit.name;
          this.issueId += 1;
          this.issueToEdit.name = { en: name, ar: name, id: this.issueId };
          // this.sessions[this.issueIndex]={...this.issueToEdit};
          this.sessions.splice(this.issueIndex, 1, { ...this.issueToEdit });
          this.closeEditIssue();
        } else {
          this.sessions.splice(this.issueIndex, 1, { ...this.issueToEdit });
          // this.sessions[this.issueIndex]={...this.issueToEdit};
          this.closeEditIssue();
        }
      }
    },
    ////////////////////////
    openDeleteIssue() {
      this.displayDeleteIssue = true;
    },
    closeDeleteIssue() {
      this.displayDeleteIssue = false;
    },
    deleteIssue() {
      this.sessions.splice(this.issueIndex, 1);
      if (!this.sessions.length) {
        this.displayTargets = false;
        this.displayProcedures = false;
      } else {
        this.issueIndex = 0;
        this.targetIndex = 0;
        // this.displayTargets=true;
        // this.displayProcedures=true;
      }
      this.closeDeleteIssue();
    },

    /////////////////////
    openEditTarget() {
      this.displayEditTarget = true;
      this.targetToEdit = {
        ...this.sessions[this.issueIndex].targets[this.targetIndex],
      };
    },
    closeEditTarget() {
      this.$v.targetToEdit.$reset();
      this.targetToEdit = {};
      this.targetIndex = 0;
      this.displayEditTarget = false;
    },
    editTarget() {
      this.$v.targetToEdit.$touch();
      if (!this.$v.targetToEdit.$invalid) {
        if (typeof this.targetToEdit.name === "string") {
          let name = this.targetToEdit.name;
          this.issueId += 1;
          this.targetToEdit.name = { en: name, ar: name, id: this.issueId };
          // this.sessions[this.issueIndex].targets[this.targetIndex]={...this.targetToEdit};
          this.sessions[this.issueIndex].targets.splice(this.targetIndex, 1, {
            ...this.targetToEdit,
          });
          this.closeEditTarget();
        } else {
          // this.sessions[this.issueIndex].targets[this.targetIndex]={...this.targetToEdit};
          this.sessions[this.issueIndex].targets.splice(this.targetIndex, 1, {
            ...this.targetToEdit,
          });
          this.closeEditTarget();
        }
      }
    },
    ////////////////////////
    openDeleteTarget() {
      this.displayDeleteTarget = true;
    },
    closeDeleteTarget() {
      this.displayDeleteTarget = false;
    },
    deleteTarget() {
      this.sessions[this.issueIndex].targets.splice(this.targetIndex, 1);
      if (!this.sessions[this.issueIndex].targets.length) {
        this.displayTargets = false;
        this.displayProcedures = false;
      } else {
        this.issueIndex = 0;
        this.targetIndex = 0;
        this.displayTargets = true;
        // this.displayProcedures=true;
      }
      this.closeDeleteTarget();
    },

    /////////////////////
    openEditProcedure(val, index) {
      this.displayEditProcedure = true;
      this.indexToEdit = index;
      this.procedureToEdit = { ...val };
    },
    closeEditProcedure() {
      this.$v.procedureToEdit.$reset();
      this.procedureToEdit = {};
      this.indexToEdit = null;
      this.displayEditProcedure = false;
    },
    editProcedure() {
      this.$v.procedureToEdit.$touch();
      if (!this.$v.procedureToEdit.$invalid) {
        if (typeof this.procedureToEdit.name === "string") {
          let name = this.procedureToEdit.name;
          this.issueId += 1;
          this.procedureToEdit.name = { en: name, ar: name, id: this.issueId };
          // this.sessions[this.issueIndex].targets[this.targetIndex].procedures[this.indexToEdit]={...this.procedureToEdit};
          this.sessions[this.issueIndex].targets[
            this.targetIndex
          ].procedures.splice(this.indexToEdit, 1, { ...this.procedureToEdit });
          this.closeEditProcedure();
        } else {
          // this.sessions[this.issueIndex].targets[this.targetIndex].procedures[this.indexToEdit]={...this.procedureToEdit};
          this.sessions[this.issueIndex].targets[
            this.targetIndex
          ].procedures.splice(this.indexToEdit, 1, { ...this.procedureToEdit });
          this.closeEditProcedure();
        }
      }
    },
    ////////////////////////
    openDeleteProcedure(index) {
      this.displayDeleteProcedure = true;
      this.indexToDelete = index;
    },
    closeDeleteProcedure() {
      this.displayDeleteProcedure = false;
      this.indexToDelete = null;
    },
    deleteProcedure() {
      this.sessions[this.issueIndex].targets[
        this.targetIndex
      ].procedures.splice(this.indexToDelete, 1);
      this.closeDeleteProcedure();
    },
  },
};
</script>

<style lang="scss" scoped>
.sessions {
  .customized-timeline {
    // background-color: white;
    .custom-marker {
      padding: 6px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .highlight-marker {
      background: $success-gradient;
      color: $white;
    }
  }
  /deep/.p-timeline-event-opposite {
    // display: none;
    min-width: 100px;
    max-width: 110px;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  /deep/.p-timeline-event-content {
    overflow: hidden;
  }
  /deep/.p-timeline-event-content {
    // overflow-x: hidden;
    // overflow-y: visible;
    // overflow: auto;
    // position: relative;
    .timeline-content-wrapper {
      // position: absolute;
      // left: 1rem;
      // width: 100%;

      width: 100%;
      height: auto;
      .table-wrapper {
        width: 100%;
        overflow: scroll;
        table {
          td,
          th {
            min-width: 8rem !important;
          }
        }
      }
      .custom-top-border {
        border-top: 1px solid $success;
      }
      // .custom-width30{
      //     min-width:30rem !important;
      // }
    }
  }
  .issues-form,
  .targets-form,
  .procedures-form {
    box-shadow: 1px 1px 5px #c0c0c0;
    border-radius: 1rem;
    padding: 1.5rem 0.75rem;
  }
  .extra-space {
    min-height: 500px;
  }
  .loader-wrapper {
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
