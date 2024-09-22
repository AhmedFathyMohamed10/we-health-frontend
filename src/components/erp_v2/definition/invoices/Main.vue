<template>
  <div>
  
    <div class="container d-flex gap-3 flex-wrap justify-content-start">
    <BaseWrapper
      :title="$t('header.invoice')"
      :icon="'fa-solid fa-receipt'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <a @click="openInvoiceGroup">
          <BaseItem :title="$t('header.invoiceGroup')" icon="fa-solid fa-coins" :active="displayInvoiceGroup" />
        </a>
        <a @click="openInvoiceDefinition">
          <BaseItem :title="$t('header.invoiceDefinition')" icon="fa-solid fa-coins" :active="displayInvoiceDefinition" />
        </a>
        <a @click="openPaymentType">
          <BaseItem :title="$t('header.paymentType')" icon="fa-solid fa-coins" :active="displayPaymentType" />
        </a>
        <a @click="openPurchase">
          <BaseItem :title="$t('header.purchase')" icon="fa-solid fa-calculator" :active="displayPurchase" />
        </a>
        <a @click="openSale">
          <BaseItem :title="$t('header.sale')" icon="fa-solid fa-calculator" :active="displaySale" />
        </a>
      </div>
    </BaseWrapper>  
    <BaseWrapper
      :title="$t('header.order')"
      :icon="'fa-solid fa-receipt'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        <a @click="openOrder">
          <BaseItem :title="$t('header.order')" icon="fa-solid fa-coins" :active="displayOrder" />
        </a>
        <a @click="openOrderReview">
          <BaseItem :title="$t('header.orderReview')" icon="fa-solid fa-coins" :active="displayOrderReview" />
        </a>
        <a @click="openDelivery">
          <BaseItem :title="$t('header.deliveryCompany')" icon="fa-solid fa-coins" :active="displayDelivery" />
        </a>
        
      </div>
    </BaseWrapper>  

  </div>
  <InvoiceDefinitionAdd :header="$t('header.invoiceDefinition')" :display="displayInvoiceDefinition" @close="closeInvoiceDefinition" />
  <InvoiceGroup :header="$t('header.invoiceGroup')" :display="displayInvoiceGroup" @close="closeInvoiceGroup" />
  <Purchase :header="$t('header.purchase')" :display="displayPurchase" @close="closePurchase" /> 
  <PaymentType :header="$t('header.paymentType')" :display="displayPaymentType" @close="closePaymentType" /> 
  <!--   <Sales :header="$t('header.sale')" :display="displaySale" @close="closeSale" /> --> 
  
  <Order :header="$t('header.order')" :display="displayOrder" @close="closeOrder" /> 
  <OrderReview :header="$t('header.orderReview')" :display="displayOrderReview" @close="closeOrderReview" /> 
  <DeliveryCompany :header="$t('header.deliveryCompany')" :display="displayDelivery" @close="closeDelivery" /> 

  </div>
</template>
<i18n src="@/lang/erp_v2/definition.json"></i18n>
<script>
import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import BaseItem from "@/components/global/UI/base/BaseItem.vue";
import toast from "@/mixins/global/toast";
import InvoiceDefinitionAdd from "@/components/erp_v2/definition/invoices/invoice/invoiceDefinition/InvoiceDefinitionAdd.vue";
import InvoiceGroup from "@/components/erp_v2/definition/invoices/invoice/invoiceDefinition/InvoiceGroup.vue";
import Purchase from "@/components/erp_v2/definition/invoices/invoice/Purchase.vue";
import PaymentType from "@/components/erp_v2/definition/invoices/PaymentType.vue";
// import Sale from "@/components/erp_v2/definition/invoices/invoice/Sale.vue";
import Order from "@/components/erp_v2/definition/invoices/order/Order.vue";
import OrderReview from "@/components/erp_v2/definition/invoices/order/OrderReview.vue";
import DeliveryCompany from "@/components/erp_v2/definition/invoices/DeliveryCompany.vue";

export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,
    InvoiceDefinitionAdd,
    InvoiceGroup,
    Purchase,
    PaymentType,
    // Sale,
    Order,
    OrderReview,
    DeliveryCompany,
  },
  data() {
    return {
      displayInvoiceDefinition: false,
      displayInvoiceGroup: false,
      displayPurchase: false,
      displaySale: false,
      displayPaymentType: false,
      displayOrder: false,
      displayOrderReview: false,
      displayDelivery: false,
    };
  },
  methods: {
    openDelivery() {
      this.displayDelivery = true;
    },
    closeDelivery() {
      this.displayDelivery = false;
    },
    //////////////////////////
    openOrder() {
      this.displayOrder = true;
    },
    closeOrder() {
      this.displayOrder = false;
    },
    openOrderReview() {
      this.displayOrderReview = true;
    },
    closeOrderReview() {
      this.displayOrderReview = false;
    },
    ////////////////////////////////
    openInvoiceDefinition() {
      this.displayInvoiceDefinition = true;
    },
    closeInvoiceDefinition() {
      this.displayInvoiceDefinition = false;
    },
    ////////////////////////////////
    openInvoiceGroup() {
      this.displayInvoiceGroup = true;
    },
    closeInvoiceGroup() {
      this.displayInvoiceGroup = false;
    },
    ////////////////////////////////
    openPaymentType() {
      this.displayPaymentType = true;
    },
    closePaymentType() {
      this.displayPaymentType = false;
    },
    ////////////////////////////////
    openPurchase() {
      this.displayPurchase = true;
    },
    closePurchase() {
      this.displayPurchase = false;
    },
    ////////////////////////////////
    openSale() {
      this.displaySale = true;
    },
    closeSale() {
      this.displaySale = false;
    },
  },
};
</script>
