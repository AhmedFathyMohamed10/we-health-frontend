<template>
  <div class="range-of-motion">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">Range of motion</h4>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("activeMovements.label") }}</label>
            <CustomCascade
              v-model="rowToAdd.activeMovements"
              :placeholder="$t('activeMovements.placeholder')"
              :options="motionOptions"
              :invalid="$v.rowToAdd.activeMovements.$error"
            />
            <small class="p-invalid" v-if="$v.rowToAdd.activeMovements.$error">
              {{ requiredError($t("activeMovements.placeholder")) }}
            </small>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("normal.label") }}</label>
            <input
              type="number"
              class="form-control"
              v-model="rowToAdd.normal"
              :placeholder="$t('normal.placeholder')"
              :class="{ 'is-invalid': $v.rowToAdd.normal.$error }"
            />
            <div
              class="invalid-feedback"
              v-if="!$v.rowToAdd.normal.decimal && $v.rowToAdd.normal.$invalid"
            >
              {{ inputError($t("normal.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.normal.minValue && $v.rowToAdd.normal.$invalid
              "
            >
              {{
                minValueError(
                  $t("normal.label"),
                  $v.rowToAdd.normal.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.normal.maxValue && $v.rowToAdd.normal.$invalid
              "
            >
              {{
                maxValueError(
                  $t("normal.label"),
                  $v.rowToAdd.normal.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("passive.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.passive.right.$error,
              }"
              v-model="rowToAdd.passive.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.passive.right.decimal &&
                $v.rowToAdd.passive.right.$invalid
              "
            >
              {{ inputError($t("passive.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.passive.right.minValue &&
                $v.rowToAdd.passive.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("passive.label"),
                  $v.rowToAdd.passive.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.passive.right.maxValue &&
                $v.rowToAdd.passive.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("passive.label"),
                  $v.rowToAdd.passive.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("passive.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.passive.left.$error,
              }"
              v-model="rowToAdd.passive.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.passive.left.decimal &&
                $v.rowToAdd.passive.left.$invalid
              "
            >
              {{ inputError($t("passive.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.passive.left.minValue &&
                $v.rowToAdd.passive.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("passive.label"),
                  $v.rowToAdd.passive.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.passive.left.maxValue &&
                $v.rowToAdd.passive.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("passive.label"),
                  $v.rowToAdd.passive.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("active.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.active.right.$error,
              }"
              v-model="rowToAdd.active.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.active.right.decimal &&
                $v.rowToAdd.active.right.$invalid
              "
            >
              {{ inputError($t("active.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.active.right.minValue &&
                $v.rowToAdd.active.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("active.label"),
                  $v.rowToAdd.active.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.active.right.maxValue &&
                $v.rowToAdd.active.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("active.label"),
                  $v.rowToAdd.active.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("active.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.active.left.$error,
              }"
              v-model="rowToAdd.active.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.active.left.decimal &&
                $v.rowToAdd.active.left.$invalid
              "
            >
              {{ inputError($t("active.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.active.left.minValue &&
                $v.rowToAdd.active.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("active.label"),
                  $v.rowToAdd.active.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.active.left.maxValue &&
                $v.rowToAdd.active.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("active.label"),
                  $v.rowToAdd.active.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("muscle.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.muscle.right.$error,
              }"
              v-model="rowToAdd.muscle.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.muscle.right.decimal &&
                $v.rowToAdd.muscle.right.$invalid
              "
            >
              {{ inputError($t("muscle.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.muscle.right.minValue &&
                $v.rowToAdd.muscle.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("muscle.label"),
                  $v.rowToAdd.muscle.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.muscle.right.maxValue &&
                $v.rowToAdd.muscle.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("muscle.label"),
                  $v.rowToAdd.muscle.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("muscle.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.muscle.left.$error,
              }"
              v-model="rowToAdd.muscle.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.muscle.left.decimal &&
                $v.rowToAdd.muscle.left.$invalid
              "
            >
              {{ inputError($t("muscle.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.muscle.left.minValue &&
                $v.rowToAdd.muscle.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("muscle.label"),
                  $v.rowToAdd.muscle.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.muscle.left.maxValue &&
                $v.rowToAdd.muscle.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("muscle.label"),
                  $v.rowToAdd.muscle.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.end.right.$error,
              }"
              v-model="rowToAdd.end.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.end.right.decimal && $v.rowToAdd.end.right.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.right.minValue &&
                $v.rowToAdd.end.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.right.maxValue &&
                $v.rowToAdd.end.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.end.left.$error,
              }"
              v-model="rowToAdd.end.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.end.left.decimal && $v.rowToAdd.end.left.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.left.minValue && $v.rowToAdd.end.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.left.maxValue && $v.rowToAdd.end.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group comment">
            <label for="" class="form-label">{{ $t("comment.label") }}</label>
            <input
              type="text"
              :placeholder="$t('comment.placeholder')"
              v-model="rowToAdd.comment"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.comment.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.comment.notContainsHtmlTags &&
                $v.rowToAdd.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-if="
                !$v.rowToAdd.comment.minLength && $v.rowToAdd.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("comment.label"),
                  $v.rowToAdd.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.rowToAdd.comment.maxLength && $v.rowToAdd.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("comment.label"),
                  $v.rowToAdd.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <AddButton @add="addRow"></AddButton>
          <small v-if="v.$error && !v.maxLength" class="p-invalid">
            {{ maxRecordsError($t("motion.header"), v.$params.maxLength.max) }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="motion.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col" rowspan="2">
                      {{ $t("table.thead.count") }}
                    </th>
                    <th scope="col" rowspan="2">
                      {{ $t("activeMovements.label") }}
                    </th>
                    <th scope="col" rowspan="2">{{ $t("normal.label") }}</th>
                    <th scope="col" colspan="2">{{ $t("passive.label") }}</th>
                    <th scope="col" colspan="2">{{ $t("active.label") }}</th>
                    <th scope="col" colspan="2">{{ $t("muscle.label") }}</th>
                    <th scope="col" colspan="2">{{ $t("end.label") }}</th>
                    <th scope="col" rowspan="2">{{ $t("comment.label") }}</th>
                    <th scope="col" rowspan="2">
                      {{ $t("table.thead.controls") }}
                    </th>
                  </tr>
                  <tr class="border-none">
                    <th>({{ $t("right.label") }}</th>
                    <th>{{ $t("left.label") }})</th>
                    <th>({{ $t("right.label") }}</th>
                    <th>{{ $t("left.label") }})</th>
                    <th>({{ $t("right.label") }}</th>
                    <th>{{ $t("left.label") }})</th>
                    <th>({{ $t("right.label") }}</th>
                    <th>{{ $t("left.label") }})</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in motion" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.activeMovements.length">
                        {{ val.activeMovements.join("/") }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.normal }}</span>
                    </td>
                    <td class="align-middle">
                      <span>({{ val.passive.right }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.passive.left }})</span>
                    </td>
                    <td class="align-middle">
                      <span>({{ val.active.right }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.active.left }})</span>
                    </td>
                    <td class="align-middle">
                      <span>({{ val.muscle.right }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.muscle.left }})</span>
                    </td>
                    <td class="align-middle">
                      <span>({{ val.end.right }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.end.left }})</span>
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
      :header="$t('motion.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("activeMovements.label") }}</label>
            <CustomCascade
              v-model="rowToEdit.activeMovements"
              :placeholder="$t('activeMovements.placeholder')"
              :options="motionOptions"
              :invalid="$v.rowToEdit.activeMovements.$error"
            />
            <small class="p-invalid" v-if="$v.rowToEdit.activeMovements.$error">
              {{ requiredError($t("activeMovements.placeholder")) }}
            </small>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("normal.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.normal.$error,
              }"
              v-model="rowToEdit.normal"
              :placeholder="$t('normal.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.normal.decimal && $v.rowToEdit.normal.$invalid
              "
            >
              {{ inputError($t("normal.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.normal.minValue && $v.rowToEdit.normal.$invalid
              "
            >
              {{
                minValueError(
                  $t("normal.label"),
                  $v.rowToEdit.normal.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.normal.maxValue && $v.rowToEdit.normal.$invalid
              "
            >
              {{
                maxValueError(
                  $t("normal.label"),
                  $v.rowToEdit.normal.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.passive">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("passive.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.passive.right.$error,
              }"
              v-model="rowToEdit.passive.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.passive.right.decimal &&
                $v.rowToEdit.passive.right.$invalid
              "
            >
              {{ inputError($t("passive.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.passive.right.minValue &&
                $v.rowToEdit.passive.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("passive.label"),
                  $v.rowToEdit.passive.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.passive.right.maxValue &&
                $v.rowToEdit.passive.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("passive.label"),
                  $v.rowToEdit.passive.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.passive">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("passive.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.passive.left.$error,
              }"
              v-model="rowToEdit.passive.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.passive.left.decimal &&
                $v.rowToEdit.passive.left.$invalid
              "
            >
              {{ inputError($t("passive.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.passive.left.minValue &&
                $v.rowToEdit.passive.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("passive.label"),
                  $v.rowToEdit.passive.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.passive.left.maxValue &&
                $v.rowToEdit.passive.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("passive.label"),
                  $v.rowToEdit.passive.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.active">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("active.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.active.right.$error,
              }"
              v-model="rowToEdit.active.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.active.right.decimal &&
                $v.rowToEdit.active.right.$invalid
              "
            >
              {{ inputError($t("active.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.active.right.minValue &&
                $v.rowToEdit.active.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("active.label"),
                  $v.rowToEdit.active.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.active.right.maxValue &&
                $v.rowToEdit.active.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("active.label"),
                  $v.rowToEdit.active.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.active">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("active.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.active.left.$error,
              }"
              v-model="rowToEdit.active.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.active.left.decimal &&
                $v.rowToEdit.active.left.$invalid
              "
            >
              {{ inputError($t("active.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.active.left.minValue &&
                $v.rowToEdit.active.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("active.label"),
                  $v.rowToEdit.active.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.active.left.maxValue &&
                $v.rowToEdit.active.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("active.label"),
                  $v.rowToEdit.active.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.muscle">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("muscle.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.muscle.right.$error,
              }"
              v-model="rowToEdit.muscle.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.muscle.right.decimal &&
                $v.rowToEdit.muscle.right.$invalid
              "
            >
              {{ inputError($t("muscle.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.muscle.right.minValue &&
                $v.rowToEdit.muscle.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("muscle.label"),
                  $v.rowToEdit.muscle.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.muscle.right.maxValue &&
                $v.rowToEdit.muscle.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("muscle.label"),
                  $v.rowToEdit.muscle.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.muscle">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("muscle.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.muscle.left.$error,
              }"
              v-model="rowToEdit.muscle.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.muscle.left.decimal &&
                $v.rowToEdit.muscle.left.$invalid
              "
            >
              {{ inputError($t("muscle.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.muscle.left.minValue &&
                $v.rowToEdit.muscle.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("muscle.label"),
                  $v.rowToEdit.muscle.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.muscle.left.maxValue &&
                $v.rowToEdit.muscle.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("muscle.label"),
                  $v.rowToEdit.muscle.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.end">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.end.right.$error,
              }"
              v-model="rowToEdit.end.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.end.right.decimal &&
                $v.rowToEdit.end.right.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.right.minValue &&
                $v.rowToEdit.end.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.right.maxValue &&
                $v.rowToEdit.end.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.end">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.end.left.$error,
              }"
              v-model="rowToEdit.end.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.end.left.decimal && $v.rowToEdit.end.left.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.left.minValue &&
                $v.rowToEdit.end.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.left.maxValue &&
                $v.rowToEdit.end.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group comment">
            <label for="" class="form-label">{{ $t("comment.label") }}</label>
            <input
              type="text"
              :placeholder="$t('comment.placeholder')"
              v-model="rowToEdit.comment"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.comment.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.comment.notContainsHtmlTags &&
                $v.rowToEdit.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.comment.minLength && $v.rowToEdit.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("comment.label"),
                  $v.rowToEdit.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.comment.maxLength && $v.rowToEdit.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("comment.label"),
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
<i18n src="@/lang/mr/physiotherapy/motion.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import motionOptions from "@/mixins/mr/physiotherapy/options/motionOptions";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  inputError,
  maxRecordsError,
  requiredError,
  minValueError,
  maxValueError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  minValue,
  maxValue,
  required,
  decimal,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import CustomCascade from "@/components/global/custom/CustomCascade.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
export default {
  mixins: [motionOptions],
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
    CustomCascade,
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
        activeMovements: [],
        normal: "",
        passive: {
          right: "",
          left: "",
        },
        active: {
          right: "",
          left: "",
        },
        muscle: {
          right: "",
          left: "",
        },
        end: {
          right: "",
          left: "",
        },
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
      getMotion: "getMotion",
    }),
    motion: {
      get() {
        return this.getMotion;
      },
      set(value) {
        this.setMotion(value);
      },
    },
  },
  validations: {
    rowToAdd: {
      activeMovements: {
        required,
        minLength: minLength(1),
      },
      normal: {
        decimal,
        minValue: minValue(1),
        maxValue: maxValue(100),
      },
      passive: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      active: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      muscle: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      end: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
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
      activeMovements: {
        required,
      },
      normal: {
        decimal,
        minValue: minValue(1),
        maxValue: maxValue(100),
      },
      passive: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      active: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      muscle: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      end: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
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
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setMotion"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    inputError,
    minValueError,
    maxRecordsError,
    requiredError,
    maxValueError,
    resetForm() {
      this.rowToAdd = {
        activeMovements: [],
        normal: "",
        passive: {
          right: "",
          left: "",
        },
        active: {
          right: "",
          left: "",
        },
        muscle: {
          right: "",
          left: "",
        },
        end: {
          right: "",
          left: "",
        },
        comment: "",
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.motion = [];
    },
    /////////////////////////
    addRow() {
      this.$v.rowToAdd.$touch();
      this.v.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.motion.push({ ...this.rowToAdd });
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
        this.motion[this.indexToEdit] = { ...this.rowToEdit };
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
      this.motion.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
