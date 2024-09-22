<template>
  <div>
  <div class="containe d-flex gap-2 flex-wrap justify-content-center">
    <BaseWrapper
      :title="'Profile'"
      :icon="'pi pi-users'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
      <div class="d-flex gap-2">
        <a @click="openClient" class="mt-2">
          <BaseItem title="Clients" icon="pi pi-book" :active="displayClient" />
        </a>
        <a @click="openSupplier" class="mt-2">
          <BaseItem title="Suppliers" icon="pi pi-book" :active="displayClientSupplier" />
        </a>
        <a @click="openEmployee" class="mt-2">
          <BaseItem title="Employees" icon="pi pi-book" :active="displayEmployee" />
        </a>
      
      </div>
    </BaseWrapper>
  </div>
    <Employee :header="'Employee'" :display="displayEmployee" @close="closeEmployee" />
    <ClientsAndSuppliers :header="'Supplier'" :display="displayClientSupplier" :category="category" @close="closeClientOrSupplier"/>
  </div>
</template>
<script>
const erp_clients= "erp_v2/clients/";
import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import toast from "@/mixins/global/toast";
import { mapGetters, mapActions } from "vuex";
import BaseItem from "@/components/global/UI/base/BaseItem.vue";

import ClientsAndSuppliers from "@/components/erp_v2/definition/profiles/ClientsAndSuppliers.vue";
import Employee from "@/components/erp_v2/definition/profiles/Employee.vue";

export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,
    Employee,
    ClientsAndSuppliers,
  },
  data() {
    return {
      displayEmployee:false,
      displayClient: false,
      displayClientSupplier: false,
      displayB2B: false,
      category: null,
    };
  },
  computed: {
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
  },
  methods: {
    ...mapActions(`${erp_clients}`, [
      "setListResponse",
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setForm",
    ]),
    //////////////////////
    openEmployee(){
      this.displayEmployee = true
    },
    closeEmployee(){
      this.displayEmployee = false
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
    },
    closeClientOrSupplier() {
      this.category = null;
      this.displayClientSupplier = false;
    },
    //////////////////////
    openB2B() {
      this.displayB2B = true;
    },
    closeB2B() {
      this.displayB2B = false;
    },
    listGroup() {
      this.$store.dispatch("erp_v2/groups/list",{category : this.category}).then(() => {});
    },
  },
};
</script>
