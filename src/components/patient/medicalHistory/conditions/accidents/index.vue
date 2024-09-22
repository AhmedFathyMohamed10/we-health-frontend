<template>
	<div class="accidents">
		<Base>
			<div class="row mb-5">
				<div class="col-md-4">
					<div class="form-group">
						<label for="" class="form-label">Cause of the accident?</label>
		        <input type="text" class="form-control w-80" placeholder="accident's cause">
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group">
						<label for="" class="form-label">Date of the accident?</label>
		        <Calendar  :showIcon="true" dateFormat="yy-mm-dd"
              	placeholder="accident's date" />
					</div>
				</div>
			</div>
			<div class="row">
		    <div class="col-md-4">
		    	<Base>
			      <div class="form-group body">
			        <label class="form-label text-center">Body Chart</label>
			        <InteractiveBody
			          :staticRef="'interactiveBody'"
			          v-model="bodyPartName"
			        ></InteractiveBody>
			      </div>
			    </Base>
		    </div>
		    <div class="col-md-3">
		    	<h4>Injury</h4>
		    	<div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="abrasion" />
		          <label class="mb-0 ms-2" for="binary">Abrasion</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="amputation" />
		          <label class="mb-0 ms-2" for="binary">Amputation</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="fracture" />
		          <label class="mb-0 ms-2" for="binary">Fracture</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="brusing" />
		          <label class="mb-0 ms-2" for="binary">Brusing</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="burn" />
		          <label class="mb-0 ms-2" for="binary">Burn</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="concussion" />
		          <label class="mb-0 ms-2" for="binary">Concussion</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="cut" />
		          <label class="mb-0 ms-2" for="binary">Cut</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="dislocation" />
		          <label class="mb-0 ms-2" for="binary">Dislocation</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="sprain" />
		          <label class="mb-0 ms-2" for="binary">Sprain</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="foreignBody" />
		          <label class="mb-0 ms-2" for="binary">Foreign body</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="other" />
		          <label class="mb-0 ms-2" for="binary">Other</label>
		        </div>
		      </div>
		    </div>
		    <div class="col-md-5">
		    	<div class="row">
		    		<div class="col-md-12">
		    			<div class="form-group">
		          	<label class="mb-0 custom-font-weight" for="binary">Was medical treatment necessary?</label>
		    			</div>
		    		</div>
		    	</div>
		    	<div class="row">
		    		<div class="col-md-3">
		    			<div class="form-group">
			    			<Checkbox id="binary" :binary="true" v-model="yes" />
			          <label class="mb-0 mx-1" for="binary">Yes</label>
		    			</div>
		    		</div>
		    		<div class="col-md-3">
		    			<Checkbox id="binary" :binary="true" v-model="no" />
		          <label class="mb-0 mx-1" for="binary">No</label>
		    		</div>
		    	</div>
		    	<div class="row" v-if="yes == true">
		    		<div class="col-md-12">
		    			<div class="form-group">
		    				<label for="" class="form-label">Comment</label>
	        			<input type="text" class="form-control w-80" placeholder="comment">
		    			</div>
		    		</div>
		    	</div>
		    	<div class="row">
		    		<div class="col-md-12">
		    			<div class="form-group">
		          	<label class="mb-0 custom-font-weight" for="binary">Has this part been injured before?</label>
		    			</div>
		    		</div>
		    	</div>
		    	<div class="row">
		    		<div class="col-md-3">
		    			<div class="form-group">
			    			<Checkbox id="binary" :binary="true" v-model="yesInjured" />
			          <label class="mb-0 mx-1" for="binary">Yes</label>
		    			</div>
		    		</div>
		    		<div class="col-md-3">
		    			<Checkbox id="binary" :binary="true" v-model="noInjured" />
		          <label class="mb-0 mx-1" for="binary">No</label>
		    		</div>
		    	</div>
		    	<div class="row" v-if="yesInjured == true && noInjured == false">
		    		<div class="col-md-12">
		    			<div class="form-group">
		    				<label for="" class="form-label">When?</label>
	        			<Calendar  :showIcon="true" dateFormat="yy-mm-dd"
              	placeholder="Injury date" />
		    			</div>
		    		</div>
		    	</div>
		    </div>
		  </div>
		</Base>
		<div class="action-btn my-2">
      <Base>
	      <div class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap">
	        <button class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0">
	          Save
	        </button>
	        <button class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0">
	          Cancel
	        </button>
	      </div>
      </Base>
    </div>
	</div>
</template>
<script>
import InteractiveBody from "@/components/mr/physiotherapy/tabs/entrance/body-chart/InteractiveBody.vue";
import Base from "@/components/global/utilities/Base.vue";

export default {
  components: {
    InteractiveBody,
    Base
  },
  data() {
    return {
    	bodyPartName: "",
    	options: [
          {name: '20 May 2024',id:1}
      ],
      abrasion: "",
			amputation: "",
			fracture: "",
			brusing: "",
			burn: "",
			concussion: "",
			cut: "",
			dislocation: "",
			sprain: "",
			foreignBody: "",
			other: "",
			yes: '',
			no: '',
			yesInjured: '',
			noInjured: '',
    };
  },
  watch: {
  	"no": {
  		handler(){
  			if (this.no == true) {
  				this.yes = false
  			}
  		}
  	},
  	"yes": {
  		handler(){
  			if (this.yes == true) {
  				this.no = false
  			}
  		}
  	},
  	"yesInjured": {
  		handler(){
  			if (this.yesInjured == true) {
  				this.noInjured = false
  			}
  		}
  	},
  	"noInjured": {
  		handler(){
  			if (this.noInjured == true) {
  				this.yesInjured = false
  			}
  		}
  	},
  }
};
</script>

<style scoped>
	.form-group {
		margin-bottom: 5px !important;
	}
	.custom-font-weight {
		font-weight: 700;
	}
</style>
