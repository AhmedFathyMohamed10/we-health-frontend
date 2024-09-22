<!-- <template>
  <div class="container">
    <BaseWrapper>
      <div>Your component-specific content</div>
    </BaseWrapper>
    <BaseWrapper
      :title="'All Item'"
      :icon="'pi pi-bars'"
      :showBreadCrumb="false"
      :showToggleContent="false"
      :showFullScreen="false"
    >
      <div class="d-flex gap-3">
        <a @click="openAccounts">
          <BaseItem title="Accounts" icon="pi pi-book" :active="true" />
        </a>
        <a @click="openClient">
          <BaseItem title="Clients" icon="pi pi-book" :active="true" />
        </a>
        <a @click="openSupplier">
          <BaseItem title="Supplier" icon="pi pi-book" :active="true" />
        </a>
        <a @click="openB2B">
          <BaseItem title="B2B" icon="pi pi-book" :active="true" />
        </a>
      </div>
      <template v-slot:footer>
        <div>Your custom footer content</div>
      </template>
    </BaseWrapper>
    <Accounts :header="'Account'" :display="display" @close="close_structure">
    </Accounts>
  <Clients :header="'Client'" :display="displayClient" @close="closeClient">
    </Clients> 
    <ClientsAndSuppliers
      :header="'Supplier'"
      :display="displayClientSupplier"
      :category="category"
      @close="closeClientOrSupplier"
    >
    </ClientsAndSuppliers>
    <B2B :header="'B2B'" :display="displayB2B" @close="closeB2B"></B2B>
  </div>
</template>
<script>
import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import ClientsAndSuppliers from "@/components/erp_v2/definition/profiles/ClientsAndSuppliers.vue";
import B2B from "@/components/erp_v2/definition/profiles/B2B.vue";
import Accounts from "@/components/erp_v2/definition/accounts/Accounts.vue";
import BaseItem from "@/components/global/UI/base/BaseItem.vue";
import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,
    Accounts,
    // Clients,
    ClientsAndSuppliers,
    B2B,
  },
  data() {
    return {
      display: false,
      displayClient: false,
      displayClientSupplier: false,
      displayB2B: false,
      category: null,
    };
  },
  computed: {},
  methods: {
    openAccounts() {
      this.display = true;
    },
    close_structure() {
      this.display = false;
    },
    openClient() {
      this.category = 1;
      this.displayClientSupplier = true;
      this.list()
    },
    
    openSupplier() {
      this.category = 2;
      this.displayClientSupplier = true;
      this.$emit("list")
      this.list()
    },
    closeClientOrSupplier() {
      this.category = null;
      this.displayClientSupplier = false;
    },
    openB2B() {
      this.displayB2B = true;
    },
    closeB2B() {
      this.displayB2B = false;
    },
    list() {
      console.log(this.category)
      this.$store.dispatch("erp_v2/groups/list",{category : this.category}).then(() => {});
    },
  },
};
</script> -->
