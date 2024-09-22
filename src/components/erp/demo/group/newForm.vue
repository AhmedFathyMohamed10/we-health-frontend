<template>
    <div class="form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        :isLoading="isLoading"
        :header="header"
      >
        <slot></slot>
      
        <div class="row">
       
          <div class="col-xxl-4 col-lg-4 col-md-4 col-ms-12">
            <Tree :value="groups" selectionMode="single"  :selectionKeys.sync="selectedKey" :metaKeySelection="false"
            @node-select="onNodeSelect" @node-unselect="onNodeUnselect"></Tree>
          </div>
          <div class="col-xxl-8 col-lg-8  col-md-8 col-ms-12">
            <client :group_id="group_id" :save="isSaving"></client>
          </div>

       
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/demo/group/Group.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import Base from "@/components/global/utilities/Base.vue";
  import { required, minLength, maxLength, decimal} from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import groupOptions from "@/mixins/erp/demo/group/groupSuggestions";
  import { mapGetters,mapActions  } from 'vuex' 
  import client from "@/components/erp/core/demo/Client.vue"
  import pagination from "@/mixins/global/pagination";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    
  } from "@/validation/errors.js";
  export default {
    mixins: [groupOptions,pagination],
    components: { 
      EditDialog,
      client
     },
    props:{
      displayForm:{
        type:Boolean,
        required:true,
        default(){
          return false;
        },
      },
      isLoading:{
        type:Boolean,
        default(){
          return false;
        },
      },
     
      header:{
        type:String,
      },
  
    },
    watch: {
    
    },
    data() {
      return {
        group_id:0,
        isSaving:false,
        selectedKey : null
      }
    },
    validations: {
   
    },
    mounted() { 
      if (!this.groups.length > 0){
        this.list()
      
        
      }
    },
    computed:{
      listResponse() {
        console.log(this.getListResponse)
        return this.getListResponse;
      },
      groups() {
        if(this.listResponse)
        return this.listResponse.data;
      else return {};
    },
    // selectedKey(){
    //  console.log(this.groups[0])
    //  let selectedKey = null
    //  if(this.groups.length > 0){
    //   selectedKey[this.groups[0].label] = true;
    //   return selectedKey
    //  }else{

    //    return selectedKey
    //  }
    // },
      ...mapGetters("erp/group", {
        getListResponse: "getListResponse",
        listLoading: "getListLoading",
        getListError: "getListError",
  
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
  
        getDeleteResponse: "getDeleteResponse",
        deleteLoading: "getDeleteLoading",
        getDeleteError: "getDeleteError",
        
        getStatusResponse: "getStatusResponse",
        statusLoading: "getStatusLoading",
        getStatusError: "getStatusError",
      }),
    },
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      htmlTagsError,
      ...mapActions("erp/client",
    ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setStatusResponse","setStatusError"]),
      onNodeSelect(node) {
        console.log(node)
            // this.$toast.add({severity:'success', summary: 'Node Selected', detail: node.label, life: 3000});
          this.group_id = node.id 
          this.listClient()           
        },
        onNodeUnselect(node) {
            this.$toast.add({severity:'success', summary: 'Node Unselected', detail: node.label, life: 3000});
        },
      saveForm() {
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.isSaving = true
          // this.$emit('save');
          this.$v.form.$reset();
        }
      },
      list() {
       
         this.$store.dispatch("erp/group/list")
         .then((res) => { 
          // console.log(res)
          // this.groups = res.data
         
           
         });
       },
       listClient() {
      let params = { 
        pageNumber:this.pagination.pageNumber+1,
        rows:this.pagination.rows,
        name:"",
        group_id:this.group_id
      }
      if(this.isSearching){
        params.pageNumber = 1
        params.name = this.searchQuery.name
      }
       this.$store.dispatch("erp/client/list", params)
       .then(() => { 

        if (!this.isPaginating){
          this.pagination.offset = 0;
          this.pagination.pageNumber = 0;
        }
          this.isSearching = false;
          this.isPaginating= false;
       });
     },
      cancelForm() {
        this.$emit('cancel');
      },
    },
  };
  </script>
  