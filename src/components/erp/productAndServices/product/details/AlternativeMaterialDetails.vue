<template>
  <div class="form">
    <div class="table-wrapper my-2" v-if="form.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr class="border-bottom-custom">
                    <th scope="col">#</th>
                    <th scope="col">
                      {{ $t("product.key.alternativeMaterial.material") }}
                    </th>
                    <th v-if="isControl" scope="col">
                      {{ $t("table.thead.controls") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in form" :key="index">
                    <td class="align-middle">
                      {{ parseInt(index) + 1 }}
                    </td>
                    <td class="align-middle">
                      <!-- <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="readDetails(val)"
                        > -->
                      {{ val.material["name_en"] }}
                      <!-- </a>                      -->
                    </td>
                    <td v-if="isControl" class="align-middle">
                      <div class="d-flex justify-content-center">
                        <div>
                          <button
                            class="btn btn-danger-gradient rounded-circle p-1 m-1"
                            @click="openDeleteDialog(index, val)"
                          >
                            <i class="fa fa-trash"></i>
                          </button>
                        </div>
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
    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRow"
    ></DeleteDialog>
  </div>
</template>
  <i18n src="@/lang/erp/productAndService/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
  
<script>
import Base from "@/components/global/utilities/Base.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Base,
    DeleteDialog,
  },
  props: {
    value: {
      type: Array,
    },
    isControl: {
      type: Boolean,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      displayDeleteDialog: false,
      displayDetailsDialog: false,
      form: this.value,
      indexToDelete: null,
      dataOfIndexDeleted: [],
      dataObject: {},

    };
  },
  methods: {
    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setDeletedAlternatevMaterial",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value || item.code == value);
      if (item) return item["name_en"];
      else return value;
    },
    ////////////////////////
    openDeleteDialog(index, val) {
      this.displayDeleteDialog = true;
      this.dataObject = val;
      this.indexToDelete = index;
    },
    deleteRow() {
      this.form.splice(this.indexToDelete, 1);
      if ("id" in this.dataObject) {
        this.dataOfIndexDeleted.push(this.dataObject);
        this.setDeletedAlternatevMaterial(this.dataOfIndexDeleted);
      }
      this.closeDeleteDialog();
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.indexToDelete = null;
      this.dataObject = {};
      this.dataOfIndexDeleted = [];
    },
  },
};
</script>
  