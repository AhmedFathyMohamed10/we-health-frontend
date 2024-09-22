<template>
    <div class="business-hours-section">
      <Base>
        <label class="form-label">{{ $t('form.businessHours.type.label') }}</label>
        <div>
          <div class="form-group">
            <RadioButton inputId="24/7" name="type" value="24/7" v-model="form.businessHours.type"
              :class="{ 'p-invalid': v.businessHours.type.$error }" />
            <label class="mb-0 mx-1" for="24/7">{{ $t('form.businessHours.type.24/7') }}</label>
          </div>
          <div class="form-group">
            <RadioButton inputId="days" name="type" value="days" v-model="form.businessHours.type"
              :class="{ 'p-invalid': v.businessHours.type.$error }" />
            <label class="mb-0 mx-1" for="days">{{ $t('form.businessHours.type.days') }}</label>
          </div>
        </div>
        <div class="error">
          <small class="p-invalid"
            v-if="v.businessHours.type.$error && !v.businessHours.type.required">{{ requiredError($t('form.businessHours.type.label')) }}
          </small>
        </div>
        <!-- ///////////////////////////// -->
        <div class="row schedule" v-if="form.businessHours.type === 'days'" :class="{ 'p-invalid': v.businessHours.schedule.$error }">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-label">{{ $t('form.businessHours.schedule.day.label') }}</label>
              <Dropdown v-model="rowToAdd.day" :options="dayOptions" optionLabel="value" optionValue="value"
                :placeholder="$t('form.businessHours.schedule.day.placeholder')"
                :class="{ 'p-invalid': $v.rowToAdd.day.$error }" />
              <small class="p-invalid"
                v-if="$v.rowToAdd.day.$error && !$v.rowToAdd.day.required">{{ requiredError($t('form.businessHours.schedule.day.label')) }}
              </small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="opening" class="form-label">{{ $t('form.businessHours.schedule.opening.label') }}</label>
              <Calendar id="opening" v-model="opening" :timeOnly="true" hourFormat="12" @date-select=selectOpening($event)
                :placeholder="$t('form.businessHours.schedule.opening.placeholder')"
                :class="{ 'p-invalid': $v.rowToAdd.opening.$error }" />
              <small class="p-invalid"
                v-if="$v.rowToAdd.opening.$error && !$v.rowToAdd.opening.required">{{ requiredError($t('form.businessHours.schedule.opening.label')) }}
              </small>
              <small class="p-invalid"
                v-else-if="$v.rowToAdd.opening.$error && !$v.rowToAdd.opening.time">{{ inputError($t('form.businessHours.schedule.opening.label')) }}
              </small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="closing" class="form-label">{{ $t('form.businessHours.schedule.closing.label') }}</label>
              <Calendar id="closing" v-model="closing" :timeOnly="true" hourFormat="12" @date-select=selectClosing($event)
                :placeholder="$t('form.businessHours.schedule.closing.placeholder')"
                :class="{ 'p-invalid': $v.rowToAdd.closing.$error }" />
              <small class="p-invalid"
                v-if="$v.rowToAdd.closing.$error && !$v.rowToAdd.closing.required">{{ requiredError($t('form.businessHours.schedule.closing.label')) }}
              </small>
              <small class="p-invalid"
                v-else-if="$v.rowToAdd.closing.$error && !$v.rowToAdd.closing.time">{{ inputError($t('form.businessHours.schedule.closing.label')) }}
              </small>
            </div>
          </div>
          <div class="col-md-4 mx-4">
            <AddButton class="" @add="addRow"> </AddButton>
          </div>
        <Divider></Divider>
        <Divider></Divider>
      <!-- ///////////Start test new business/////////////// -->
          <div class="row" v-for="day in daysOptions"  :key="day.id">
            <div class="row">
              <div class="col-md-3">
                <div class="field-checkbox d-flex align-items-center my-2 gap-1">
                  <Checkbox id="binary" :binary="true" v-model="day.on" />
                  <label for="binary" class="fw-bold mb-0">
                    {{day.day}}
                  </label>
                </div>
              </div>
              <div class="col-md-3">
                <div v-if="scheduleList[day.day]" class="form-group">
                  <Calendar :disabled="!day.on" id="opening" v-model="scheduleList[day.day][0].opening"
                    :hideOnDateTimeSelect="day.on" :timeOnly="true" hourFormat="12" @date-select=selectOpening($event)
                    :placeholder="$t('form.businessHours.schedule.opening.placeholder')"
                    :class="{'p-invalid': $v.scheduleList[day.day].opening.$error }" />
                  <small class="p-invalid"
                    v-if="$v.scheduleList[day.day].opening.$error && !$v.scheduleList[day.day].opening.required">{{ requiredError($t('form.businessHours.schedule.opening.label')) }}
                  </small>
                  <small class="p-invalid"
                    v-else-if="$v.scheduleList[day.day].opening.$error && !$v.scheduleList[day.day].opening.time">{{ inputError($t('form.businessHours.schedule.opening.label')) }}
                  </small>
                </div>
              </div>
              <div class="col-md-3">
                <div v-if="scheduleList[day.day]" class="form-group">
                  <Calendar id="closing" :disabled="!day.on" v-model="scheduleList[day.day][0].closing"
                    :hideOnDateTimeSelect="day.on" :timeOnly="true" hourFormat="12" @date-select=selectClosing($event)
                    :placeholder="$t('form.businessHours.schedule.closing.placeholder')"
                    :class="{ 'p-invalid': $v.scheduleList[day.day].closing.$error }" />
                  <small class="p-invalid"
                    v-if="$v.scheduleList[day.day].closing.$error && !$v.scheduleList[day.day].closing.required">{{ requiredError($t('form.businessHours.schedule.closing.label')) }}
                  </small>
                  <small class="p-invalid"
                    v-else-if="$v.scheduleList[day.day].closing.$error && !$v.scheduleList[day.day].closing.time">{{ inputError($t('form.businessHours.schedule.closing.label')) }}
                  </small>
                </div>
              </div>
              <div class="col-md-3 ">
                <div :class="{'d-none': !day.on || day.day == selectdDay,'d-block':hideDelete && day.on,}">
                  <AddButtonWithoutLabel class="" @add="addOpeningAndClosingTime(day, day.id)"> </AddButtonWithoutLabel>
                </div>
                <div v-if="day.day === selectdDay && day.on" :class="{ 'd-none':hideDelete || !displaySchedule}">
                  <DeleteButtonWithoutSize class="" @delete="deleteOpeningAndClosingTime(day, day.id)"> </DeleteButtonWithoutSize>
                </div>
              </div>
            </div>
            <div v-if="displaySchedule && day.day == selectdDay && day.on">
                <div class="row" v-for="(schedule, index) in scheduleList[day.day]" :key="index">
                  {{ scheduleList[day.day] }}
                  // {{ schedule }}
                  <div class="row" v-if="index !== 0"> 
                    <div class="col-md-3 "></div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <Calendar id="opening" v-model="schedule[schedule.day + 'Opening' + schedule.count]"
                          :placeholder="$t('form.businessHours.schedule.opening.placeholderTime')"
                          @date-select="selectOpeningSchedule($event, schedule)" :timeOnly="true" hourFormat="12" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <Calendar id="closing" v-model="schedule[schedule.day + 'Closing' + schedule.count]"
                          :placeholder="$t('form.businessHours.schedule.closing.placeholderTime')"
                          @date-select="selectClosingSchedule($event, schedule)" :timeOnly="true" hourFormat="12" />
                      </div>
                    </div>
                    <div class="col-md-3 d-flex  justify-content-start gap-3 ">
                      <div v-if="displaySchedule && index === scheduleList[day.day].length - 1">
                        <AddButtonWithoutLabel @add="addOpeningAndClosingTime(day, day.id)"> </AddButtonWithoutLabel>
                      </div>
                      <div>
                        <DeleteButtonWithoutSize @delete="deleteOpeningAndClosingTime(day, index)"> </DeleteButtonWithoutSize>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>  
      </div>
      <!-- /////////// End test new business/////////////// -->
      <div class="error">
        <small class="p-invalid"
          v-if="form.businessHours.type === 'days' && v.businessHours.schedule.$error && !v.businessHours.schedule.required">{{ requiredError($t('form.businessHours.schedule.day.daySchedule')) }}
        </small>
      </div>
      <div class="table-wrapper my-2" v-if="form.businessHours.schedule.length > 0">
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t('table.thead.count') }}</th>
                    <th scope="col">{{ $t('form.businessHours.schedule.day.label') }}</th>
                    <th scope="col">{{ $t('form.businessHours.schedule.opening.label') }}</th>
                    <th scope="col">{{ $t('form.businessHours.schedule.closing.label') }}</th>
                    <th scope="col">{{ $t('table.thead.controls') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in form.businessHours.schedule" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <span>{{ val.day }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.opening }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.closing }}</span>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <EditButton class="me-2" @edit="openEditDialog(val, index)"></EditButton>
                        <DeleteButton @delete="openDeleteDialog(index)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <EditDialog :header="$t('form.businessHours.header')" :display="displayEditModal" @cancel="closeEditDialog"
        @close="closeEditDialog" @save="editRow">
        <div class="row schedule">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-label">{{ $t('form.businessHours.schedule.day.label') }}</label>
              <Dropdown v-model="rowToEdit.day" :options="dayOptions" optionLabel="value" optionValue="value"
                :placeholder="$t('form.businessHours.schedule.day.placeholder')"
                :class="{ 'p-invalid': $v.rowToEdit.day.$error }" />
              <small class="p-invalid"
                v-if="$v.rowToEdit.day.$error && !$v.rowToEdit.day.required">{{ requiredError($t('form.businessHours.schedule.day.label')) }}
              </small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="opening" class="form-label">{{ $t('form.businessHours.schedule.opening.label') }}</label>
              <Calendar id="opening" v-model="opening" :timeOnly="true" hourFormat="24" @date-select=selectOpening($event)
                :placeholder="$t('form.businessHours.schedule.opening.placeholder')"
                :class="{ 'p-invalid': $v.rowToEdit.opening.$error }" />
              <small class="p-invalid"
                v-if="$v.rowToEdit.opening.$error && !$v.rowToEdit.opening.required">{{ requiredError($t('form.businessHours.schedule.opening.label')) }}
              </small>
              <small class="p-invalid"
                v-else-if="$v.rowToEdit.opening.$error && !$v.rowToEdit.opening.time">{{ inputError($t('form.businessHours.schedule.opening.label')) }}
              </small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="closing" class="form-label">{{ $t('form.businessHours.schedule.closing.label') }}</label>
              <Calendar id="closing" v-model="closing" :timeOnly="true" hourFormat="24" @date-select=selectClosing($event)
                :placeholder="$t('form.businessHours.schedule.closing.placeholder')"
                :class="{ 'p-invalid': $v.rowToEdit.closing.$error }" />
              <small class="p-invalid"
                v-if="$v.rowToEdit.closing.$error && !$v.rowToEdit.closing.required">{{ requiredError($t('form.businessHours.schedule.closing.label')) }}
              </small>
              <small class="p-invalid"
                v-else-if="$v.rowToEdit.closing.$error && !$v.rowToEdit.closing.time">{{ inputError($t('form.businessHours.schedule.closing.label')) }}
              </small>
            </div>
          </div>
          ////////////////////////////////////////////
          <div class="row" v-for="day in daysOptions"  :key="day.id">
      <div class="row">
        <div class="col-md-3">
          <div class="field-checkbox d-flex align-items-center my-2 gap-1">
            <Checkbox id="binary" :binary="true" v-model="day.on" />
            <label for="binary" class="fw-bold mb-0">
              {{day.day}}
            </label>
          </div>
        </div>
        <div class="col-md-3">
          <div v-if="scheduleList[day.day]" class="form-group">
            <Calendar :disabled="!day.on" id="opening" v-model="scheduleList[day.day][0].opening"
              :hideOnDateTimeSelect="day.on" :timeOnly="true" hourFormat="12" @date-select=selectOpening($event)
              placeholder="OpenningTime"
            />
            
          </div>
        </div>
        <div class="col-md-3">
          <div v-if="scheduleList[day.day]" class="form-group">
            <Calendar id="closing" :disabled="!day.on" v-model="scheduleList[day.day][0].closing"
              :hideOnDateTimeSelect="day.on" :timeOnly="true" hourFormat="12" @date-select=selectClosing($event)
              placeholder="Closing Time"
              />
          </div>
        </div>
        <div class="col-md-3 ">
          <div v-if="!displaySchedule">
            <AddButtonWithoutLabel class="" @add="addOpeningAndClosingTime(day, day.id)"> </AddButtonWithoutLabel>
          </div>
          <div v-if="displaySchedule && day.on">
            <DeleteButtonWithoutSize class="" @delete="deleteOpeningAndClosingTime(day, day.id)"> </DeleteButtonWithoutSize>
          </div>
        </div>
      </div>
      <div v-if="displaySchedule && day.on">
        <div class="row" v-for="(schedule) in scheduleList" :key="schedule">
            <div v-for="(schedules, index) in schedule" :key="index">  
              <div class="row" v-if="index !== 0"> 
                <div class="col-md-3 "></div>
                <div class="col-md-3">
                 <div class="form-group">
                    <Calendar id="opening" v-model="schedules[schedules.day + 'Opening' + schedules.count]"
                     :timeOnly="true"  placeholder="Time"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <Calendar id="closing" v-model="schedules[schedules.day + 'Closing' + schedules.count]"
                      placeholder="Openning Time"
                      @date-select="selectClosingSchedule($event, schedules)" :timeOnly="true" hourFormat="12" />
                  </div>
                </div>
                <div class="col-md-3 d-flex  justify-content-start gap-3 ">
                    <div v-if="displaySchedule && index === scheduleList[day.day].length - 1">
                      <AddButtonWithoutLabel @add="addOpeningAndClosingTime(day, day.id)"> </AddButtonWithoutLabel>
                    </div>
                    <div>
                      <DeleteButtonWithoutSize @delete="deleteOpeningAndClosingTime(day, index)"> </DeleteButtonWithoutSize>
                    </div>
                </div>
              </div>
            </div>  
        </div>
      </div> 
    </div>
        </div>
      </EditDialog>
      <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
      </Base>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/business/register.json"></i18n>
  
  <script>
  // <div class="col-md-3">
  //         <div :class="{'d-none':!day.on || displaySubTime, 'd-block': day.on && day.subtimes.length == 0}">
  //           <AddButtonWithoutLabel class="" @add="addTime(day, index)"></AddButtonWithoutLabel>
  //         </div>
  //         <div v-if="displaySubTime && day.on && day.subtimes.length > 0">
  //           <DeleteButtonWithoutSize class="" @delete="deleteTime(day, index)"></DeleteButtonWithoutSize>
  //         </div>
  //       </div>
  // isDayListNotEmpty && 
  // && subIndex === day.subtimes[day.subtimes.length - 1]
                  // this.days[index].openingTime = this.$moment(newValue, "HH:mm A", true).format("hh:mm A");
// 
  import moment from 'moment';
  import { required } from "vuelidate/lib/validators";
  import { requiredError, inputError } from '@/validation/errors.js'
  import { mapGetters, mapActions } from "vuex";
  import Base from "@/components/global/utilities/Base.vue"
  import Divider from "@/components/global/utilities/Divider.vue";
  import AddButton from "@/components/global/utilities/AddButton.vue"
  import AddButtonWithoutLabel from "@/components/global/utilities/AddButtonWithoutLabel.vue"
  import EditButton from "@/components/global/utilities/EditButton.vue"
  import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
  import DeleteButtonWithoutSize from "@/components/global/utilities/DeleteButtonWithoutSize.vue"
  import EditDialog from "@/components/global/utilities/EditDialog.vue"
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
  export default {
    name: "BusinessHoursSection",
    components: {
      Base,
      AddButton,
      AddButtonWithoutLabel,
      DeleteButtonWithoutSize,
      EditButton,
      DeleteButton,
      EditDialog,
      DeleteDialog,
      Divider
    },
    data() {
      return {
        daysOptions: [
          { id: 1, on: false, day: "Saturday", count: 0},
          { id: 2, on: true, day: "Sunday", count: 0 },
          { id: 3, on: true, day: "Monday", count: 0 },
          { id: 4, on: true, day: "Tuesday", count: 0 },
          { id: 5, on: true, day: "Wednesday", count: 0 },
          { id: 6, on: true, day: "Thursday", count: 0 },
          { id: 7, on: false, day: "Friday", count: 0 }
         ,
        ],
        scheduleList: {
          Sunday: [{ opening: ""  , closing: "" }],
          Saturday: [{ opening: "" , closing: "" }],
          Monday: [{ opening: ""  , closing: "" }],
          Tuesday: [{ opening: ""  , closing: "" }],
          Wednesday: [{ opening: "" , closing: "" }],
          Thursday: [{ opening: "" , closing: "" }],
          Friday: [{ opening: "" , closing: "" }],
        },
        allDays: {
          Saturday: [],
          Sunday: [],
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
        },
        countList: 0,
        displaySchedule: false,
        saveDataClosing: "",
        saveDataOpening: "",
        selectdDay: null,
        hideDelete: false,
        /////////////////////////////
        dayOptions: [
          { id: 22, value: "Saturday " },
          { id: 23, value: "Sunday" },
          { id: 34, value: "Monday" },
          { id: 45, value: "Tuesday" },
          { id: 56, value: "Wednesday" },
          { id: 67, value: "Thursday" },
          { id: 78, value: "Friday" },
        ],
        opening: "",
        closing: "",
        rowToAdd: {
          day: "",
          opening: "",
          closing: "",
        },
        rowToEdit: {
  
        },
        indexToEdit: null,
        displayEditModal: false,
        indexToDelete: null,
        displayDeleteModal: false,
      };
    },
    props: {
      v: {
        type: Object,
      }
    },
    // validations() {
    //     const validations = {};
    //     // Loop through each day in scheduleList
    //     for (const day in this.scheduleList) {
    //       validations[day] = [];
    //       // Define validation rules for each opening and closing time
    //       this.scheduleList[day].forEach((schedule, index) => {
    //         validations[day][index] = {
    //           opening: {
    //             required,
    //               time: (value, vm) => {
    //                 if (value == null || value == "") {
    //                   return true;
    //                 }
    //                 else {
    //                   return moment(value, "HH:mm", true).isValid();
    //                   // return moment(value, "HH:mm", true).isValid() && moment(value, 'HH:mm').isBefore(moment(vm.closing, 'HH:mm'));
    //                 }
    //               },
    //           },
    //           closing: {
    //             required,
    //               time: (value, vm) => {
    //                 if (value == null || value == "") {
    //                   return true;
    //                 }
    //                 else {
    //                   return moment(value, "HH:mm", true).isValid();
    //                   // return moment(value, "HH:mm", true).isValid() && moment(value, 'HH:mm').isBefore(moment(vm.closing, 'HH:mm'));
    //                 }
    //               },
    //           }
    //         };
    //       });
    //     }
    //     return { scheduleListValid: validations };
    // },
    computed: {
      ...mapGetters("business/register", {
        getForm: "getForm",
      }),
      //////////////////////////////
      form: {
        get() {
          return this.getForm;
        },
        set(value) {
          this.setForm(value);
        }
      },
    },
    validations: {
      //////////////////
      scheduleList:{
        Sunday: { 
          opening: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }
        },
        Saturday: {
          opening: {
          required,
            time: (value) => {
              if (value == null || value == "") {
                return true;
              }
              else {
                return moment(value, "HH:mm", true).isValid();
              }
            },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }
        },
        Monday: { 
          opening: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          } 
        },
        Tuesday: {
          opening: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }  
        },
        Wednesday: {
          opening: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          } 
        },
        Thursday: {
          opening: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          } 
        },
        Friday: { 
          opening: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          }, 
          closing: {
            required,
              time: (value) => {
                if (value == null || value == "") {
                  return true;
                }
                else {
                  return moment(value, "HH:mm", true).isValid();
                }
              },
          } 
        },
      },
      //////////////////
      rowToAdd: {
        day: {
          required,
        },
        opening: {
          required,
          time: (value, vm) => {
            if (value == null || value == "") {
              return true;
            }
            else {
              return moment(value, "HH:mm", true).isValid() && moment(value, 'HH:mm').isBefore(moment(vm.closing, 'HH:mm'));
            }
          },
        },
        closing: {
          required,
          time: (value, vm) => {
            if (value == null || value == "") {
              return true;
            }
            else {
              return moment(value, "HH:mm", true).isValid() && moment(value, 'HH:mm').isAfter(moment(vm.opening, 'HH:mm'));
            }
          },
        }
      },
      rowToEdit: {
        day: {
          required,
        },
        opening: {
          required,
          time: (value, vm) => {
            if (value == null || value == "") {
              return true;
            }
            else {
              return moment(value, "HH:mm", true).isValid() && moment(value, 'HH:mm').isBefore(moment(vm.closing, 'HH:mm'));
            }
          },
        },
        closing: {
          required,
          time: (value, vm) => {
            if (value == null || value == "") {
              return true;
            }
            else {
              return moment(value, "HH:mm", true).isValid() && moment(value, 'HH:mm').isAfter(moment(vm.opening, 'HH:mm'));
            }
          },
        }
      },
    },
    watch: {
      'form.businessHours.type'(value) {
        if (value === "24/7") {
          this.form.businessHours.schedule = [];
        }
      },
      // checkList(newVlaue) {
      //   this.checkList = newVlaue;
      //   console.log("checkList", this.checkList);
      // },
      // 'daysOptions': {
      //     handler: function(newVal, oldVal) {
      //       newVal.forEach(day => {
      //         if (!day.on) {
      //           this.daysLists[day.day] = [];
      //         }
      //       });
      //     },
      //     deep: true 
      //   }
  
    },
    methods: {
      requiredError,
      inputError,
      //////////////////////////////
      ...mapActions("business/register", {
        setForm: "setForm",
      }),
      ///////////// Start new business///////////////// 
      addOpeningAndClosingTime(day, id) {
        console.log("from id " + id);
        console.log("from day ", day.day);
        this.hideDelete = false;
        this.selectedDay = day.day;
        this.countList = ++day.count;
        this.daysOptions.count = this.countList;
        //////////////push scheduleList////////////
        const dayList = this.scheduleList[day.day];
        //////////////push allDays////////////
        // const dayList2 = this.allDays[day.day];
        console.log("from selected dayList", dayList);
        const newSchedule = {
          day: day.day,
          count: this.countList,
          [`${day.day}Opening${this.countList}`]: "",
          [`${day.day}Closing${this.countList}`]: "",
        };
        this.selectdDay = day.day;
        dayList.push(newSchedule);
        // dayList2.push(newSchedule); 
        this.displaySchedule = true;
      },
      /////////////test solution////////////////
      // console.log("from selectdDay ", this.selectdDay);
      // console.log("scheduleList", this.scheduleList);
      // console.log("displaySchedule",this.displaySchedule);
      // if(id==2 && day.day === "Sunday"){
      //   this.hideDelete = false;
      //   this.selectedDay = day.day;
      //   this.countList = ++day.count;
      //   this.daysOptions.count = this.countList;
      //   const dayList = this.scheduleList[day.day];
      //   console.log("from selected dayList", dayList);
      //   const newSchedule = {
      //     day: day.day,
      //     count: this.countList,
      //     [`${day.day}Opening${this.countList}`]: "",
      //     [`${day.day}Closing${this.countList}`]: "",
      //   };
      //   this.selectdDay = day.day;
      //   dayList.push(newSchedule); 
      //   // console.log("from selectdDay ", this.selectdDay);
      //   // console.log("scheduleList", this.scheduleList);
      //   this.displaySchedule = true;
        
      //   // console.log("displaySchedule",this.displaySchedule);
  
  
      // }
      // if(id==3 && day.day === "Monday"){
      //   this.hideDeleteMonday = false;
      //   this.selectedDay = day.day;
      //    this.daysOptions.count = this.countList;
      //     this.daysOptions.count = this.countList;
      //   const dayList = this.scheduleList[day.day];
      //   console.log("from selected", dayList);
      //   const newSchedule = {
      //     day: day.day,
      //     count: this.countList,
      //     [`${day.day}Opening${this.countList}`]: "",
      //     [`${day.day}Closing${this.countList}`]: "",
      //   };
      //   this.selectdDay = day.day;
      //   dayList.push(newSchedule);
      //   console.log("from selectdDay ", this.selectdDay);
      //   console.log("scheduleList", this.scheduleList);
      //   this.displayScheduleMonday = true;
      //   console.log("displayScheduleMonday",this.displayScheduleMonday);
  
  
      // }
      // else {
      //   console.log("Not Found")
      // }
      deleteOpeningAndClosingTime(day, index) {
        console.log("from day", day);
        console.log("day.day")
        console.log("from index", index);
       /////////// push scheduleList////////////
        if(this.countList > 0){
          this.scheduleList[day.day].splice(index, 1);
          this.countList = --day.count;
        }
        else {
          this.scheduleList[day.day][0].opening = "",
          this.scheduleList[day.day][0].closing = "",   
          this.displaySchedule = false ; 
          this.hideDelete = true;
          console.log("from first lelement from lista",this.scheduleList[day.day])
        }   
      },
      selectOpeningSchedule(event, schedule) {
        console.log("from event ", event)
        console.log("from schedule ", schedule)
      },
      selectClosingSchedule(event, schedule) {
        console.log("from event ", event)
        console.log("from schedule ", schedule)
        console.log("selectClosingSchedule saveDataClosing", this.saveDataClosing)
        this.saveDataClosing = this.$moment(event, "HH:mm", true).format("HH:mm");
      },
      ///////////// End new business/////////////////    
      selectOpening(event) {
        if (this.displayEditModal) {
          this.rowToEdit.opening = this.$moment(event, "HH:mm", true).format("HH:mm");
        }
        else {
          this.rowToAdd.opening = this.$moment(event, "HH:mm", true).format("HH:mm");
        }
      },
      selectClosing(event) {
        if (this.displayEditModal) {
          this.rowToEdit.closing = this.$moment(event, "HH:mm", true).format("HH:mm");
        }
        else {
          this.rowToAdd.closing = this.$moment(event, "HH:mm", true).format("HH:mm");
        }
  
      },
      addRow() {
        this.$v.rowToAdd.$touch();
        if (!this.$v.rowToAdd.$invalid) {
          this.form.businessHours.schedule.push({ ...this.rowToAdd })
          this.opening = "";
          this.closing = "";
          this.rowToAdd = {
            day: "",
            opening: "",
            closing: "",
          };
          this.$v.rowToAdd.$reset();
        }
      },
      /////////////////////
      openEditDialog(val, index) {
        this.displayEditModal = true;
        this.indexToEdit = index;
        this.rowToEdit = { ...val }
        this.opening = val.opening
        this.closing = val.closing
      },
      closeEditDialog() {
        this.rowToEdit = {}
        this.opening = "";
        this.closing = "";
        this.indexToEdit = null;
        this.$v.rowToEdit.$reset()
        this.displayEditModal = false;
      },
      editRow() {
        this.$v.rowToEdit.$touch();
        if (!this.$v.rowToEdit.$invalid) {
          this.form.businessHours.schedule.splice(this.indexToEdit, 1, { ...this.rowToEdit });
          this.closeEditDialog();
        }
      },
      ////////////////////////
      openDeleteDialog(index) {
        this.displayDeleteModal = true;
        this.indexToDelete = index
      },
      closeDeleteDialog() {
        this.displayDeleteModal = false;
        this.indexToDelete = null
      },
      deleteRow() {
        this.form.businessHours.schedule.splice(this.indexToDelete, 1);
        this.closeDeleteDialog();
      },
  
    }
  };
  </script>
  
  <style lang="scss" scoped>
  ///////////////////////
  // /deep/.p-checkbox .p-checkbox-box {
  //   border-radius: 0;
  // }</style>