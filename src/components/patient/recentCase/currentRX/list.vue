<template>
	<div class="patient-rx">
		<Base class="pb-0">
			<div class="d-flex justify-content-start">
				<div class="d-flex align-items-center gap-2 w-100">
	        <label for="" class="form-label">Search</label>
	        <input type="text" class="form-control w-80" placeholder="case name">
          <Button icon="fa-solid fa-search" />
				</div>
        <div class="d-flex align-items-center mx-3 w-100">
	        <label for="" class="form-label w-15">Sort by</label>
	        <Dropdown :options="options" optionLabel="name" placeholder="Date" />
        </div>
        <div class="d-flex align-items-center gap-2 w-30">
	        <span class="form-label">Add new</span>
	        <AddButton @add="displayDialog"></AddButton>
        </div>
      </div>
		</Base>
		<div class="row">
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Title: </span>
		          <span class="form-label primary-color">test</span>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Pharmacy name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div>
						<ol>
							<li>Septazole 50ML tablet</li>
							<li>the biggest and best library 50ML tablet</li>
							<li>Septazole 50ML tablet</li>
						</ol>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-start gap-4">
						<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
		          <img :src="img.src">
		        </div>
					</div>
				</Base>				
			</div>
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Title: </span>
		          <span class="form-label primary-color">test</span>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Pharmacy name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div>
						<ol>
							<li>Septazole 50ML tablet</li>
							<li>the biggest and best library 50ML tablet</li>
							<li>Septazole 50ML tablet</li>
						</ol>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-start gap-4">
						<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
		          <img :src="img.src">
		        </div>
					</div>
				</Base>				
			</div><div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Title: </span>
		          <span class="form-label primary-color">test</span>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Pharmacy name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div>
						<ol>
							<li>Septazole 50ML tablet</li>
							<li>the biggest and best library 50ML tablet</li>
							<li>Septazole 50ML tablet</li>
						</ol>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-start gap-4">
						<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
		          <img :src="img.src">
		        </div>
					</div>
				</Base>				
			</div><div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Title: </span>
		          <span class="form-label primary-color">test</span>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Pharmacy name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div>
						<ol>
							<li>Septazole 50ML tablet</li>
							<li>the biggest and best library 50ML tablet</li>
							<li>Septazole 50ML tablet</li>
						</ol>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-start gap-4">
						<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
		          <img :src="img.src">
		        </div>
					</div>
				</Base>				
			</div><div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Title: </span>
		          <span class="form-label primary-color">test</span>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Pharmacy name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div>
						<ol>
							<li>Septazole 50ML tablet</li>
							<li>the biggest and best library 50ML tablet</li>
							<li>Septazole 50ML tablet</li>
						</ol>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-start gap-4">
						<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
		          <img :src="img.src">
		        </div>
					</div>
				</Base>				
			</div><div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Title: </span>
		          <span class="form-label primary-color">test</span>
		        </div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Pharmacy name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div>
						<ol>
							<li>Septazole 50ML tablet</li>
							<li>the biggest and best library 50ML tablet</li>
							<li>Septazole 50ML tablet</li>
						</ol>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-start gap-4">
						<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
		          <img :src="img.src">
		        </div>
					</div>
				</Base>				
			</div>
		</div>
		<EditDialog :display="displayForm" @close="cancelForm" @cancel="cancelForm" @save="saveForm" :min-width="'80%'" :max-width="'80%'" :isLoading="isLoading" :header="header">
      <div class="row">
      	<div class="col-md-3">
      		<div class="form-group">
            <label for="" class="form-label">Date</label>
            <Calendar  :showIcon="true" dateFormat="yy-mm-dd"
              placeholder="date" />
          </div>
      	</div>
      	<div class="col-md-3">
          <div class="form-group">
            <label for="" class="form-label">Doctor name</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-search"></i>
                <AutoComplete
                  placeholder="doctor name"
                />
            </span>
          </div>
      	</div>
      	<div class="col-md-3">
      		<div class="form-group">
            <label for="" class="form-label">Diagnosis</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-search"></i>
                <AutoComplete
                  placeholder="diagnosis"
                />
            </span>
          </div>
      	</div>
      	<div class="col-md-3">
      		<div class="form-group">
            <label for="" class="form-label">Pharmacy</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-search"></i>
                <AutoComplete
                  placeholder="pharmacy"
                />
            </span>
          </div>
      	</div>
      </div>
      <hr class="custom-hr">
      <div class="row">
      	<div class="col-md-3">
          <div class="form-group">
              <label class="form-label">Drug name</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                	<i class="mdi mdi-pill"></i>
                </span>
                <AutoComplete placeholder="Drug name" />
              </div>
          </div>
      	</div>
      	<div class="col-md-3">
      		<label for="" class="form-label">Form</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<Dropdown :options="options" optionLabel="name" placeholder="Form" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<CustomInputGroup 
            :label="'Dose'" 
            :inputType="'text'" 
            :valuePlaceholder="'value'" 
            :dropdownPlaceholder="'-- select --'"
            :value="'value'"
            :options="options"
          />
      	</div>
      	<div class="col-md-3">
      		<label for="" class="form-label">Frequency</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<Dropdown :options="options" optionLabel="name" placeholder="Frequency" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<label for="" class="form-label">Route of adminstration</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<Dropdown :options="options" optionLabel="name" placeholder="Route of adminstration" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<CustomInputGroup 
            :label="'Strength'" 
            :inputType="'text'" 
            :valuePlaceholder="'value'" 
            :dropdownPlaceholder="'-- select --'"
            :value="'value'"
            :options="options"
          />
      	</div>
      	<div class="col-md-3">
      		<CustomInputGroup 
            :label="'Period'" 
            :inputType="'text'" 
            :valuePlaceholder="'time'" 
            :dropdownPlaceholder="'-- select --'"
            :value="'value'"
            :options="options"
          />
      	</div>
      	<div class="col-md-3">
      		<div class="form-group">
	      		<label for="" class="form-label">Comment</label>
	      		<div class="p-inputgroup">
            	<span class="p-inputgroup-addon">
	            	<i class="mdi mdi-pill"></i>
	            </span>
			        <AutoComplete placeholder="comment" />
			      </div>
      		</div>
      	</div>
      	<div class="col-md-3 my-2">
      		<AddButton @add="displayDialog"></AddButton>
      	</div>
      </div>
    </EditDialog>
	</div>
</template>
<i18n src="@/lang/mr/global/rx/rx.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButtonWithText.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import DropFile from '@/components/global/file-handling/DropFile.vue'

export default {
  components:{
    Base,
    AddButton,
    EditDialog,
    CustomInputGroup,
    // DropFile
  },
  data(){
    return{
    	displayForm: false,
    	isLoading: false,
    	header: "Rx",
    	value: "value",
    	select: '-- select --',
      options: [
          {name: '20 May 2024',id:1}
      ],
      defaultImages: {
        images: [
          { id: 1, src: require("@/assets/search/slider_1.svg"), alt: "Image from 1" },
          { id: 2, src: require("@/assets/search/slider_2.svg"), alt: "Image 2" },
          { id: 3, src: require("@/assets/search/slider_3.svg"), alt: "Image 3" },
        ],
      },
    }
  },
  methods: {
    saveForm() {
    },
    cancelForm() {
      this.$emit("cancel");
      this.displayForm = false
    },
    displayDialog() {
    	this.displayForm = true
    }
  },
}
</script>
<style lang="scss" scoped>
	.primary-color {
    color: $primary;
  }
  .modify-hr {
  	border-top: 1px solid $success;
  	margin-top: 0px !important;
  	margin-bottom: 10px !important;
  }
  .custom-hr {
  	border-top: 1px solid $success;
  	margin: 10px 0px 10px 0px !important;
  }
  ol li {
  	font-weight: 500;
  }
  .hide {
  	visibility: hidden;
  }
</style>