<template>
    <div class="Custody">
        <AddButton @add="openForm"></AddButton>
      <Form
        v-model="form"
        :isLoading="upsertLoading"
        :displayForm="displayForm"
        @close="resetForm"
        @cancel="resetForm"
        @save="create"
        :error="upsertError"
        :header="$t('dialog.header.new')"
      >
      </Form>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/hr/custodies/custodies.json"></i18n>
  <script>
 
  import Form from "@/components/erp/HR/custodies/Form.vue";
  import AddButton from "@/components/global/utilities/AddButton.vue";
 
  import { mapGetters, mapActions } from "vuex";
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  import {cloneDeep} from 'lodash';
  export default {
    mixins: [pagination, toast],
    components: {
     
      Form,
      AddButton
     
    
    },
    data() {
      return {
        displayForm: false,
        // start_date:"",
        // end_date:"",
        dateKeys: ["assets", "bonds", "invoice"],
        form: {
          receipt_date: "",
          delivery_date: "",
          employee: "",
          type: {
            assets: null,
            invoice: null,
            bonds: null,
          },
        },
     
      };
    },
    computed: {
      ...mapGetters("erp/hr/custodies", {
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
      listResponse() {
        return this.getListResponse;
      },
      custodies() {
        if (this.listResponse) return this.listResponse.results;
        else return {};
      },
      totalRecords() {
        if (this.listResponse) return this.listResponse.count;
        else return 0;
      },
      upsertResponse: {
        get() {
          return this.getUpsertResponse;
        },
        set(value) {
          this.setUpsertResponse(value);
        },
      },
      upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
      filterParams(){
      return {
        pageNumber:this.pagination.pageNumber+1,
        rows:this.pagination.rows,
        from_date:this.isSearching?this.searchQuery.from_date : "",
        to_date:this.isSearching?this.searchQuery.to_date :""
      }
    },
    },
  
  
    methods: {
  
      ...mapActions("erp/hr/custodies", [
        "setUpsertResponse",
        "setUpsertError",
        "setDeleteResponse",
        "setDeleteError",
      ]),
      /////////////////////////////////////////

      ////////// UPSERT ///////////////////
      openForm() {
        this.displayForm = true;
      },
      closeForm() {
        this.displayForm = false;
      },
 
      resetForm() {
        this.form = {
          receipt_date: "",
          delivery_date: "",
          employee: "",
          type: {
            assets:null,
            invoice: null,
            bonds: null,
          },
        };
        console.log(this.form);
        this.isUpdating = false;
        this.closeForm();
        this.upsertResponse = null;
        this.upsertError = null;
      },
      create() {
        // this.form.end_date = this.$moment(this.form.end_date).format("YYYY-MM-DD");
        this.$store
          .dispatch("erp/hr/custodies/create", this.form)
          .then((res) => {
            this.resetForm();
            // console.log(res)
            this.list()
            const summery = res.statusText;
            const details = res.data.message;
            this.successToast(summery, details);
          })
          .catch((err) => {
            // console.log(err)
            const summery = err.statusText;
            const details = err.data.message;
            this.errorToast(summery, details);
          });
      },
   
     
      list() {
       this.$store.dispatch("erp/hr/errands/list", this.filterParams)
       .then(() => { 

        if (!this.isPaginating){
          this.pagination.offset = 0;
          this.pagination.pageNumber = 0;
        }
          this.isSearching = false;
          this.isPaginating= false;
       });
     },
  
  
      fetchAll() {
        (this.searchQuery = {
          employee_name: "",
        }),
          this.list();
      },
    
    },
  };
  </script>
  <style></style>
  