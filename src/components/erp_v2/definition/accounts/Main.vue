<template>
  <div>
  <div class="container d-flex gap-3 flex-wrap justify-content-start">
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

  </div>
  <FinalAccount :header="$t('header.finalAccount')" :display="displayFinalAccount" @close="closeFinalAccounts" />
    <AccountAdd :header="$t('header.account')" :display="displayAccount" @close="closeAccount" />

  </div>
</template>
<i18n src="@/lang/erp_v2/definition.json"></i18n>
<script>
import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import BaseItem from "@/components/global/UI/base/BaseItem.vue";
import toast from "@/mixins/global/toast";
import FinalAccount from "@/components/erp_v2/definition/accounts/FinalAccount.vue";
import AccountAdd from "@/components/erp_v2/definition/accounts/AccountAdd.vue";

export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,
    FinalAccount,
    AccountAdd,
  },
  data() {
    return {
      displayAccount: false,
      displayFinalAccount: false,
    };
  },
  methods: {
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
   
  },
};
</script>
