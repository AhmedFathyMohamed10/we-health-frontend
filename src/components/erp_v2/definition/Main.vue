<template>
  <div>
  <div class="container d-flex gap-3 flex-wrap justify-content-start">
   
    <BaseWrapper
      :title="$t('header.fixedAsset')"
      :icon="'fa-solid fa-building-circle-check'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
    <div class="d-flex gap-3 flex-wrap justify-content-center">
      <a @click="openAssetGroup">
        <BaseItem :title="$t('header.group')" icon="fa-solid fa-layer-group" :active="displayAssetGroup" />
      </a>
      <a @click="openAssets">
        <BaseItem :title="$t('header.fixedAsset')" icon="fa-solid fa-building" :active="displayAssets" />
      </a>
      <a @click="openAssetPricing">
        <BaseItem :title="$t('header.pricingAsset')" icon="fa-solid fa-money-check-dollar" :active="displayAssetPricing" />
      </a>
    </div>
    </BaseWrapper> 

    <BaseWrapper
      :title="$t('header.account')"
      :icon="'fa-solid fa-receipt'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <a @click="openFinalAccounts">
          <BaseItem :title="$t('header.finalAccount')" icon="fa-solid fa-coins" :active="displayFinalAccount" />
        </a>
        <a @click="openAccounts">
          <BaseItem :title="$t('header.account')" icon="fa-solid fa-calculator" :active="displayAccount" />
        </a>
      </div>
    </BaseWrapper>  

    <BaseWrapper
      :title="$t('header.product')"
      :icon="'fa-solid fa-list'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <a @click="openGroup">
            <BaseItem :title="$t('header.group')" icon="fa-solid fa-layer-group" :active="displayGroup" />
        </a>
        <a @click="openProduct">
            <BaseItem :title="$t('header.product')" icon="fa-brands fa-unity" :active="displayProduct" />
        </a>
        <a @click="openItemPricing">
          <BaseItem :title="$t('header.itemPricing')" icon="fa-solid fa-money-bill-1" :active="displayItemPricing" />
        </a>
        <a @click="openItemLocation">
          <BaseItem :title="$t('header.location')" icon="fa-solid fa-location-dot" :active="displayItemLocation" />
        </a>
        <a @click="openItemUnit">
          <BaseItem :title="$t('header.units')" icon="fa-solid fa-list-ul" :active="displayItemUnit" />
        </a>
      </div>
    </BaseWrapper>  

    <BaseWrapper
      :title="$t('header.client')"
      :icon="'fa-solid fa-user-group'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <a @click="openClientGroup">
          <BaseItem :title="$t('header.clientGroup')" icon="fa-solid fa-layer-group" :active="displayClientSupplierGroup" />
        </a>
        <a @click="openClientForm">
          <BaseItem :title="$t('header.profile')" icon="fa-solid fa-person-circle-check" :active="displayClientSupplierForm" />
        </a>
        <a @click="openSupplierGroup">
          <BaseItem :title="$t('header.supplierGroup')" icon="fa-solid fa-layer-group" :active="displayClientSupplierGroup" />
        </a>
        <a @click="openSupplierForm">
          <BaseItem :title="$t('header.supplier')" icon="fa-solid fa-truck-field" :active="displayClientSupplierForm" />
        </a>
        <a @click="openEmployee">
          <BaseItem :title="$t('header.employee')" icon="fa-solid fa-user-tie" :active="displayEmployee" />
        </a>
      </div>
    </BaseWrapper>

    <BaseWrapper
    :title="$t('header.b2b')"
    :icon="'fa-solid fa-network-wired'"
    :showBreadCrumb="false"
    :showToggleContent="true"
    :showFullScreen="false"
  >
  <div class="d-flex gap-3">
    <a @click="openB2BGroup">
      <BaseItem :title="$t('header.b2bGroup')" icon="fa-solid fa-landmark" :active="displayB2BGroup" />
    </a>
    <a @click="openB2B">
      <BaseItem :title="$t('header.b2b')" icon="fa-solid fa-square-poll-horizontal" :active="displayB2B" />
    </a>
    <a @click="openCompanyType">
      <BaseItem :title="$t('header.companyType')" icon="fa-solid fa-compass" :active="displayCompanyType" />
    </a>
    <a @click="openContracts">
      <BaseItem :title="$t('header.contracts')" icon="fa-solid fa-file-circle-check" :active="displayContracts" />
    </a>
    <a @click="openContractType">
      <BaseItem :title="$t('header.contractsType')" icon="fa-solid fa-map" :active="displayContractType" />
    </a>
  </div>
  </BaseWrapper> 


  </div>
  
  <ProductAdd :display="displayProduct" @close="closeProduct" />
  <Groups :header="$t('header.productGroup')" :display="displayGroup" @close="closeGroup" />
  <Pricing :header="$t('header.itemPricing')" :display="displayItemPricing" @close="closeItemPricing" />
  <Location :header="$t('header.location')" :display="displayItemLocation" @close="closeItemLocation" />
  <Unit :header="$t('header.units')" :display="displayItemUnit" @close="closeItemUnit" />
  
  
    <FinalAccount :header="$t('header.finalAccount')" :display="displayFinalAccount" @close="closeFinalAccounts" />
    <AccountAdd :header="$t('header.account')" :display="displayAccount" @close="closeAccount" />
    
    <ClientsAndSuppliersGroup :header="category == 1 ? $t('header.clientGroup') : $t('header.supplierGroup')"  :display="displayClientSupplierGroup" :category="category" @close="closeClientOrSupplierGroup"/>

    <ClientsAndSuppliers :header="category == 1 ? $t('header.clients') : $t('header.suppliers')" :display="displayClientSupplier" :category="category" @close="closeClientOrSupplier"/>
    <B2BGroups :header="$t('header.b2bGroup')" :display="displayB2BGroup" @close="closeB2BGroup"/>
    <GroupAsset :header="$t('header.assetGroup')" :display="displayAssetGroup" @close="closeAssetGroup" />
    <AssetAdd :display="displayAssets" @close="closeAssets" />
    <PricingAsset :header="$t('header.pricingAsset')" :display="displayAssetPricing" @close="closeAssetPricing" />
    
    <Employee :header="$t('header.employees')" :display="displayEmployee" @close="closeEmployee" />
    <ClientsAndSuppliers :header="$t('header.client')" :display="displayClientSupplier" :category="category" @close="closeClientOrSupplier"/>
    <B2B :header="$t('header.b2b')" :display="displayB2B" @close="closeB2B"/>

    <CompanyType :header="$t('header.companyType')" :display="displayCompanyType" @close="closeCompanyType"></CompanyType>
    <Contracts :header="$t('header.contracts')" :display="displayContracts" @close="closeContracts"></Contracts>
    <ContractType :header= "$t('header.contractsType')" :display="displayContractType" @close="closeContractType"></ContractType>
    
    

    <!-- <B2B :header="$t('dialog.b2b.header.b2b')" :display="displayB2B" @close="closeB2B" ></B2B> -->
    <CompanyType :header="$t('header.company_type')" :display="displayCompanyType" @close="closeCompanyType"></CompanyType>
    <Contracts :header="$t('header.contracts')" :display="displayContracts" @close="closeContracts"></Contracts>
    <ContractType :header="$t('header.contract_type')" :display="displayContractType" @close="closeContractType"></ContractType>

    <clientAndSupplierForm
    v-model="clientSupplierForm"
    :category="clientSupplierForm.category"
    :isLoading="upsertLoading"
    :displayForm="displayClientSupplierForm"
    :genderOptions="genderOptions"
    :maritalStatusOptions="maritalStatusOptions"
    :paymentMethodOptions="paymentMethodOptions"
    @close="resetForm"
    @cancel="resetForm"
    @save="createClientAndSupplier"
    :error="upsertError"
    :header="clientSupplierForm.category == 1 ? $t('header.client') : $t('header.supplier')"
  >
  </clientAndSupplierForm>

  <B2BForm
  v-model="b2bForm"
  :isLoading="upsertLoading"
  :displayForm="displayB2B" 
  :paymentMethodOptions="paymentMethodOptions" 
  @close="resetForm"
  @cancel="resetForm"
  @save="create"
  :error="b2bUpsertError"
 
  :header="$t('header.b2b')"
>
</B2BForm>
  </div>
</template>
<i18n src="@/lang/erp_v2/definition.json"></i18n>

<script>
const erp_clients= "erp_v2/clients/";
const erp_B2B= "erp_v2/b2b/";

import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import clientAndSupplierForm from "@/components/erp_v2/clients/client/Form.vue";
import FinalAccount from "@/components/erp_v2/definition/accounts/FinalAccount.vue";
import AccountAdd from "@/components/erp_v2/definition/accounts/AccountAdd.vue";
import Groups from "@/components/erp_v2/definition/items/Groups.vue";
import Pricing from "@/components/erp_v2/definition/items/Pricing.vue";
import Location from "@/components/erp_v2/definition/items/Location.vue";
import Unit from "@/components/erp_v2/definition/items/Unit.vue";
import ProductAdd from "@/components/erp_v2/definition/items/ProductAdd.vue";

import GroupAsset from "@/components/erp_v2/definition/assets/GroupAsset.vue";
import AssetAdd from "@/components/erp_v2/definition/assets/AssetAdd.vue";
import PricingAsset from "@/components/erp_v2/definition/assets/PricingAsset.vue";

import ClientsAndSuppliersGroup from "@/components/erp_v2/definition/profiles/clients/Groups.vue";
import ClientsAndSuppliers from "@/components/erp_v2/definition/profiles/clients/ClientAndSupplier.vue";

import B2BGroups from "@/components/erp_v2/definition/profiles/b2b/Groups.vue";
import Employee from "@/components/erp_v2/definition/profiles/Employee.vue";

import B2B from "@/components/erp_v2/definition/profiles/b2b/B2B.vue"
import B2BForm from "@/components/erp_v2/b2b/Form.vue"
// import CompanyType from "@/components/erp_v2/core/b2b/CompanyType.vue"
import CompanyType from "@/components/erp_v2/definition/profiles/b2b/CompanyType.vue"
import Contracts from  "@/components/erp_v2/definition/profiles/b2b/Contracts.vue"
import ContractType from "@/components/erp_v2/definition/profiles/b2b/ContractType.vue"


import { mapGetters, mapActions } from "vuex";

import BaseItem from "@/components/global/UI/base/BaseItem.vue";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,
    FinalAccount,
    AccountAdd,
    Groups,
    Pricing,
    Location,
    Unit,
    ProductAdd,

    GroupAsset,
    AssetAdd,
    PricingAsset,

    ClientsAndSuppliers,
    ClientsAndSuppliersGroup,
    B2BGroups,
    Employee,
    
    B2BForm,
    CompanyType,
    Contracts,
    ContractType,
    clientAndSupplierForm,
  },
  data() {
    return {
      clientSupplierForm:{
        category: null,
        userdata: null,
        name: "",
        group: null,
        gender: "",
        dob: null,
        profession: "",
        marital_status: null,
        phone_number: "",
        other_phone_number: "",
        home_phone_number: "",
        address: "",
        city: "",
        discount: null,
        profit: null,
        max_debit: null,
        insurance_name: "",
        card_name: "",
        member_id: "",
        plan: "",
        expiration_date: null,
        payment_method: null,
        files: null,
        serial: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        saved_files: [],
        uploaded_files: [],
      },
      displayClientSupplierForm:false,
      displayB2B:false,
      displayClientSupplierGroup : false,
      displayAccount: false,
      displayFinalAccount: false,

      displayAssets:false,
      displayAssetGroup:false,
      displayAssetPricing:false,

      displayItemUnit: false,
      displayItemLocation: false,
      displayItemPricing: false,
      displayGroup: false,
      displayProduct: false,

      displayEmployee:false,
      displayClient: false,
      displayClientSupplier: false,
      displayB2BGroup: false,

      category:null,
      displayCompanyType:false,
      displayContracts: false,
      displayContractType: false,

      genderOptions: [
        { name: "Male", en: "Male", ar: "ذكر" },
        { name: "Female", en: "Female", ar: "انثي" },
      ],
      paymentMethodOptions: [
        { name: "Credit", en: "Credit", ar: "دائن" },
        { name: "Debit", en: "Debit", ar: "مدين" },
        { name: "Both", en: "Both", ar: "كلاهما" },
      ],
      maritalStatusOptions: [
        { name: "Married", en: "Married", ar: "متزوج مغفل" },
        { name: "Single", en: "Single", ar: "ملهوش كتكوته" },
        { name: "Divorced", en: "Divorced", ar: "ملهي علي عينه" },
        
        { name: "Other", en: "Other", ar: "خنزير" },
      ],
    };
  },
  computed: {
    ...mapGetters(`${erp_B2B}`, {
      getForm: "getForm",
      getB2BListResponse: "getListResponse",
      B2BlistLoading: "getListLoading",
      getB2BListError: "getListError",
      getB2BUpsertError: "getUpsertError",
    }),
    b2bForm: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setB2BForm(value);
      },
    },
    B2BListResponse: {
      get() {
        return this.getB2BListResponse;
      },
      set(value) {
        this.setB2BListResponse(value);
      },
    },
    b2bUpsertError: {
      get() {
        return this.getB2BUpsertError;
      },
      set(value) {
        this.setB2BUpsetError(value);
      },
    },
    ...mapGetters(`${erp_clients}`, {
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
    ListResponse: {
      get() {
        return this.getListResponse;
      },
      set(value) {
        this.setListResponse(value);
      },
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

    deleteResponse: {
      get() {
        return this.getDeleteResponse;
      },
      set(value) {
        this.setDeleteResponse(value);
      },
    },

    deleteError: {
      get() {
        return this.getDeleteError;
      },
      set(value) {
        this.setDeleteError(value);
      },
    },
  },
  methods: {
    // {
    //   getForm: "getForm",
    //   getB2BListResponse: "getListResponse",
    //   B2BlistLoading: "getListLoading",
    //   getB2BListError: "getListError",
    //   getB2BUpsertError: "getUpsertError",
    // }
    ...mapActions(`${erp_B2B}`, {
      setB2BListResponse:"setListResponse",
      setB2BUpsertResponse:"setUpsertResponse",
      setB2BUpsetError:"setUpsertError",
      setB2BDeleteError:"setDeleteResponse",
      setB2BDeleteError:"setDeleteError",
      setB2BStatusResponse:"setStatusResponse",
      setB2BForm:"setForm",
  }),
    // ...mapActions(`${erp_B2B}`, [
    //   "setListResponse",
    //   "setForm",
    // ]),
    ...mapActions(`${erp_clients}`, [
      "setListResponse",
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setForm",
    ]),
   
    closeForm() {
      this.isUpdating = false;
      this.displayClientSupplierForm = false;
    },
    resetForm() {
      this.b2bForm = {
         
         company_name_en: null,
         company_name_ar: null,
         company_type: null,
         group: null,
         code: null,
   
         contact: {
           city: null,
           address: "",
           email: "",
           phone_number: null,
           other_phone_number: null,
           industry_type: "",
         },
         permissions: {
           discount: null,
           profit: null,
           max_debit: null,
           treat_as: null,
           prevent_dealing: false,
           alert_dealing: false,
           prevent_give: false,
           alert_give: false,
           payment_method: null,
         },
   
         contracts: [],
       }
        this.clientSupplierForm = {
        category: null,
        userdata: null,
        name: "",
        group: null,
        gender: "",
        dob: null,
        profession: "",
        marital_status: null,
        phone_number: "",
        other_phone_number: "",
        home_phone_number: "",
        address: "",
        city: "",
        discount: null,
        profit: null,
        max_debit: null,
        insurance_name: "",
        card_name: "",
        member_id: "",
        plan: "",
        expiration_date: null,
        payment_method: null,
        files: null,
        serial: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        saved_files: [],
        uploaded_files: [],
      };
      this.closeForm();
      this.closeB2B();
      this.upsertResponse = null;
      this.upsertError = null;
      this.b2bUpsertError = null;
    },
   
////////////// B2B /////////////////
openB2BGroup() {
      this.displayB2BGroup = true;
    },
    closeB2BGroup() {
      this.displayB2BGroup = false;
    },
    openB2B(){
      this.displayB2B = true;
      this.listB2B()
      this.listB2Bgroups()
    },
    closeB2B(){
      this.displayB2B = false;
    },
    create() {
     
      const {
      company_name_en,
      company_name_ar,
      company_type,
      group,
      code,
      contracts,
    } = this.b2bForm;
      let b2bData = {
    company_name_en,
    company_name_ar,
    company_type,
    group,
    code,
    contracts,
      ...this.b2bForm.contact,
      ...this.b2bForm.permission,
    };
      this.$store
        .dispatch(`${erp_B2B}create`, b2bData)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },

///////////////// client and supplier ///////
openClientForm() {
      this.clientSupplierForm.category = 1;
      this.displayClientSupplierForm = true;
      this.list()
      this.listGroup()
    },
    openSupplierForm() {
      this.clientSupplierForm.category = 2;
      this.displayClientSupplierForm = true;
      this.list()
      this.listGroup()
    },
    openClientGroup(){
      // this.displayClientSupplierGroup = true;
      this.category = 1;
      this.displayClientSupplierGroup = true;
      this.listGroup()
      this.ListResponse = []
    },
    openSupplierGroup(){
      // this.displayClientSupplierGroup = true;
      this.category = 2;
      this.displayClientSupplierGroup = true;
      this.listGroup()
      this.ListResponse = []
    },

    closeClientOrSupplierGroup(){
      this.category = null;
      this.displayClientSupplierGroup = false;
     
    },
    createClientAndSupplier() {
      let formData = new FormData();
      if (this.clientSupplierForm.uploaded_files) {
        this.clientSupplierForm.uploaded_files.forEach((element) => {
          console.log()
          formData.append("uploaded_files", element.file);
        });
      } else {
        formData.append("uploaded_files", []);
      }
      delete this.clientSupplierForm.uploaded_files;
      delete this.clientSupplierForm.saved_files;
      let data = JSON.stringify(this.clientSupplierForm);
      formData.append("data", data);
      this.$store
        .dispatch(`${erp_clients}create`, formData)
        .then((res) => {
          console.log("create client")
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
/////////////////////// company type ///////////
    openCompanyType(){
      this.displayCompanyType = true;
    },
    closeCompanyType() {
      this.displayCompanyType = false;
    },
//////////////// contracts ////////////////////
    openContracts(){
      this.displayContracts = true;
    },
    
    closeContracts(){
      this.displayContracts = false;
    },
///////////////////////// contract type
    openContractType(){
      this.displayContractType = true;
    },
    closeContractType(){
      this.displayContractType = false;
    },

    //////////////////// Account //////////
    openAccounts() {
      this.displayAccount = true;
    },
    closeAccount() {
      this.displayAccount = false;
    },
    ////////////////////////////////
    openFinalAccounts() {
      this.displayFinalAccount = true;
    },
    closeFinalAccounts() {
      this.displayFinalAccount = false;
    },
    //////////////////  Assets ////////////
    openAssetPricing() {
      this.displayAssetPricing = true;
    },
    closeAssetPricing() {
      this.displayAssetPricing = false;
    },
    openAssets() {
      this.displayAssets = true;
    },
    closeAssets() {
      this.displayAssets = false;
    },
    openAssetGroup() {
      this.displayAssetGroup = true;
    },
    closeAssetGroup() {
      this.displayAssetGroup = false;
    },
    //////////////////////
    openEmployee(){
      this.displayEmployee = true
    },
    closeEmployee(){
      this.displayEmployee = false
    },
   ///////////////////// Item //////////////////
   openItemUnit() {
      this.displayItemUnit = true;
    },
    closeItemUnit() {
      this.displayItemUnit = false;
    },
    openItemLocation() {
      this.displayItemLocation = true;
    },
    closeItemLocation() {
      this.displayItemLocation = false;
    },
    openItemPricing() {
      this.displayItemPricing = true;
    },
    closeItemPricing() {
      this.displayItemPricing = false;
    },
    openGroup() {
      this.displayGroup = true;
    },
    closeGroup() {
      this.displayGroup = false;
    },
    openProduct() {
      this.displayProduct = true;
    },
    closeProduct() {
      this.displayProduct = false;
    },
    //////////////////////
    openClient() {
      this.category = 1;
      this.displayClientSupplier = true;
      this.listGroup()
      this.ListResponse = []
    },
    
    openSupplier() {
      this.category = 2;
      this.displayClientSupplier = true;
      this.listGroup()
      this.ListResponse = []
      // this.$emit("list")
    },
    closeClientOrSupplier() {
      this.category = null;
      this.displayClientSupplier = false;
    },
    listB2B() {
      let params =   { pageNumber: 1, rows: 1, name:"",company_name_en:"",company_name_ar:"",group_id:null}
     
      this.$store
        .dispatch(`${erp_B2B}list`, params)
        .then(() => {
         
        });
    },
    listGroup() {
      this.$store.dispatch("erp_v2/groups/list",{category : this.category || this.clientSupplierForm.category}).then(() => {});
    },
    listB2Bgroups() {
      this.$store.dispatch("erp_v2/b2b_group/list").then(() => {});
    },
    list() {
      let customParams =  { pageNumber: 1, rows: 1, name:"",category_filter:this.clientSupplierForm.category,group_id:null}
      this.$store
        .dispatch(`${erp_clients}list`, customParams)
        .then(() => {});
    },
  },
};
</script>
