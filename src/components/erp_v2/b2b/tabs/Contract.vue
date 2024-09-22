<template>
  <div class="contact">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message
            severity="error"
            v-for="(value, key) in error.Contact"
            :key="key"
            :closable="false"
          >
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>
    <div class="row">
      <Toast position="center" />
      <div class="search-wrapper">
        <div
          class="d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-between gap-2 my-2"
        >
          <label for="" class="mb-0">Search</label>
          <span
            :class="[
              locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
            ]"
          >
            <i
              class="pi"
              :class="[
                isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
              ]"
            ></i>
            <div class="autocomplete-container">
              <AutoComplete
                v-model="number"
                :suggestions="contractParams.suggestions"
                :forceSelection="true"
                field="number"
                complete-method="filter"
                :placeholder="$t('form.contracts.placeholder')"
                @complete="search($event, contractParams)"
                @item-select="addRow()"
              />
              <i class="pi pi-search"></i>
            </div>
          </span>
          <AddButton class="d-flex" @add="openForm"></AddButton>
          <!-- <button
            class="btn btn-icon rounded-circle btn-success-gradient"
            @click.prevent="search"
          >
            <i class="fa fa-search fa-md" aria-hidden="true"></i>
          </button> -->
          <!-- <div class="result d-flex align-items-center gap-1"> -->
            <!-- <AddButton @add="openForm"></AddButton> -->
            <!-- <button class="btn btn-pill btn-success-gradient" @click="openForm">
              <i class="fa fa-plus fa-md"></i>
              {{ "add" }}
            </button> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <Base v-if="form.length > 0">
      <div class="row my-2">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-sm text-center">
              <thead>
                <tr>
                  <th scope="col">{{ $t("form.number.label") }}</th>
                  <th scope="col">{{ $t("form.type.label") }}</th>
                  <th scope="col">{{ $t("form.total_cost.label") }}</th>
                  <th scope="col">{{ $t("form.start_date.label") }}</th>
                  <th scope="col">{{ $t("form.end_date.label") }}</th>
                  <th scope="col">{{ $t("table.thead.controls") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in form" :key="index">
                 
                  <td class="align-middle">
                    <span>
                      <a class="fw-bold" href="javascript:void(0)" @click="openDetailsDialog(item)">{{item.number }}</a>
                    </span>
                  </td>
                  <td class="align-middle">{{ item.type_data.name_en }}</td>
                  <td class="align-middle">{{ item.total_cost }}</td>
                  <td class="align-middle">{{ item.start_date }}</td>
                  <td class="align-middle">{{ item.end_date }}</td>
                  <td class="align-middle">
                    <div class="d-flex justify-content-center align-items-center">
                      <DeleteButton @delete="removeRow(index)"></DeleteButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Base>
    <Form v-model="formContract" :isLoading="upsertLoading" :displayForm="displayForm" :isUpdating="isUpdating"
           @close="resetForm" @cancel="resetForm" @save="create" :error="upsertError"
          :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')">
        </Form>
       
  </div>
</template>
<i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/b2b/contracts.json"></i18n>
<script>
import { required, maxLength } from "vuelidate/lib/validators";
import AddButton from "@/components/global/utilities/AddButton.vue";
import { mapGetters, mapActions } from "vuex";
import contractsSuggestions from "@/mixins/erp_v2/b2b/contractsSuggestions.js";
import Form from "@/components/erp_v2/b2b/contracts/Form.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Toast from 'primevue/toast';
// import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import {
  requiredError,
  inputError,
  timeDateError,
  maxLengthError,
  htmlTagsError,
} from "@/validation/errors.js";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import moment from "moment";

export default {
  mixins: [contractsSuggestions],
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
    Base,
    DeleteButton,
    Form,
    AddButton,
    Toast
    // DeleteDialog
  },
  data() {
    return {
      isUpdating:false,
      displayForm:false,
      formContract: {
        number: null,
        type: null,
        reason: "",
        total_cost: null,
        start_date: null,
        end_date: null,
        accrual_amount: null,
        every: null,
        randomly:false,
        },
      typeOptions: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
        number:null,
      isSearching: false,
    };
  },
  computed: {
    ...mapGetters("erp_v2/contracts/", {
        getListResponse: "getListResponse",
        listLoading: "getListLoading",
        getListError: "getListError",
  
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
  
        getDeleteResponse: "getDeleteResponse",
        deleteLoading: "getDeleteLoading",
        getDeleteError: "getDeleteError",
      }),
    ...mapGetters("erp_v2/b2b", {
      getContracts: "getContracts",
    }),
    upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
    form: {
      get() {
        return this.getContracts;
      },
      set(value) {
        this.setContact(value);
      },
    },
  },
  validations: {
    form: { maxLength: maxLength(4)},
  },
  methods: {
    requiredError,
    inputError,
    timeDateError,
    maxLengthError,
    htmlTagsError,
    ...mapActions("erp_v2/contracts/", [
        "setUpsertResponse",
        "setUpsertError",
        "setDeleteResponse",
        "setDeleteError",
        "setStatusResponse",
        "setStatusError",
      ]),  
    ...mapActions("erp_v2/b2b", ["setContracts"]),
    openForm() {
        this.displayForm = true;
      },
    resetForm() {
        this.formContract = {
            number: null,
        type: null,
        reason: "",
        total_cost: null,
        start_date: null,
        end_date: null,
        accrual_amount: null,
        every: null,
        randomly:false,
        };
        this.closeForm();
        this.upsertResponse = null;
        this.upsertError = null;
      },
      closeForm() {
      this.displayForm = false;
     
    },
      create() {
        this.$store
          .dispatch("erp_v2/contracts/create", this.formContract)
          .then((res) => {
            this.resetForm();
            // const summery = res.statusText;
            // const details = res.message;
            // this.successToast(summery, details);
          })
          .catch((err) => {
            // const summery = err.statusText;
            // const details = err.message;
            // this.errorToast(summery, details);
          });
      },
    addRow() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.form.push({ ...this.number });
        this.$v.form.$reset();
      }else{
        // this.showError()
      }
      this.number = null;
    },
    removeRow(index) {
      this.form.splice(index, 1);
      
    },
    showError() {
      let message =   maxLengthError(
                $t("form.contracts.label"),
                $v.form.$params.maxLength.max
              )
            this.$toast.add({severity:'error', summary: message, detail:message, life: 3000});
        },
  },
};
</script>
<style lang="scss" scoped>
/deep/.p-chip {
  background: $primary;
  justify-content: center;
  height: 23px;
  .p-chip-text {
    color: white;
  }
}
.chip {
  background: $secondary-gradient;
  height: auto;
}
.current-balance {
  border: 1px solid #bec7be;
  border-radius: 17px;
}

.radio-button {
  border: 1px solid $primary;
  border-radius: 1rem;
  padding: 0.5rem;
}
.autocomplete-container {
  position: relative;
}
.autocomplete-container .pi-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: #ccc;
  z-index: 1;
}
:dir(rtl) .autocomplete-container .pi-search {
  left: 15px;
  right : unset;
 
}
</style>