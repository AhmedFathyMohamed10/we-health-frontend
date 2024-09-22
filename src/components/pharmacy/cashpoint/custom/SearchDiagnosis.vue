<template>
       <div class=" patient-search my-4">
             <Base>
                <div class="row">
                    <div class="col-md-9 col-sm-12 col-lg-8 ">
                    <label class="form-label ">Search <span class="mx-3 fw-normal" >Name/Barcode/Item code</span></label>
                    <div class="d-flex ">
                        <span class="p-input-icon-right">
                            <i class="pi pi-search font-bold text-success" ></i>
                            <InputText
                                v-model.trim="activeInvoice.search"
                                placeholder="Search" 
                                
                                />
                        </span>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="my-2 edit-margin ">
                        <AddButton  @add="addSearch" ></AddButton>
                    </div>
                </div>
                </div>
            </Base>

        </div>
        <!-- END*************** -->
</template>

<script>
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue"
/////////////////////////
import { mapGetters  } from "vuex";
export default {
  
  name:'SearchDiagnosis',

  components:{
      Base,
      AddButton,    
  },
  computed:{
        ...mapGetters("allPharmacy/pharmacy",["getActiveInvoice"]),
        activeInvoice: {
            get() {
                return this.getActiveInvoice;
            },
            set(value) {
                this.$store.dispatch("allPharmacy/pharmacy/setActiveInvoice", value);
            },
        },
    },
    methods:{
        addSearch(){
            console.log("addSearch")
        }

    },
        
   }
</script>

<style>
</style>