<template>
	<div class="conditions">
		<Base>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="heartDisease" />
		          <label class="mb-0 ms-2" for="binary">Heart disease</label>
		        </div>
		      </div>
		      <div class="mx-5">
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="congestiveHeartFailture" />
			          <label class="mb-0 ms-2" for="binary">Congestive heart failture</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="heartAttack" />
			          <label class="mb-0 ms-2" for="binary">Heart attack</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="angina" />
			          <label class="mb-0 ms-2" for="binary">angina</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="heartValveDisease" />
			          <label class="mb-0 ms-2" for="binary">Heart valve disease</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="heartMurmmur" />
			          <label class="mb-0 ms-2" for="binary">Heart murmmur</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="other" />
			          <label class="mb-0 ms-2" for="binary">Other</label>
			        </div>
			      </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="lungDisease" />
		          <label class="mb-0 ms-2" for="binary">Lung disease</label>
		        </div>
		      </div>
		      <div class="mx-5">
		      	<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="asthma" />
			          <label class="mb-0 ms-2" for="binary">Asthma</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="emphysema" />
			          <label class="mb-0 ms-2" for="binary">Emphysema(COPD)</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="otherLungDisease" />
			          <label class="mb-0 ms-2" for="binary">Other</label>
			        </div>
			      </div>
			      <div class="form-group w-50" v-if="otherLungDisease == true">
			        <div class="field-checkbox d-flex align-items-center">
			          <input type="text" class="form-control">
			        </div>
			      </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="kidneyDisease" />
		          <label class="mb-0 ms-2" for="binary">Kidney disease/Problems</label>
		        </div>
		      </div>
		      <div class="form-group w-50" v-if="kidneyDisease == true">
		        <div class="field-checkbox d-flex align-items-center">
		          <input type="text" class="form-control">
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="liverDisease" />
		          <label class="mb-0 ms-2" for="binary">Liver disease</label>
		        </div>
		      </div>
		      <div class="form-group w-50" v-if="liverDisease == true">
		        <div class="field-checkbox d-flex align-items-center">
		          <input type="text" class="form-control">
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="thryoldDisease" />
		          <label class="mb-0 ms-2" for="binary">Thryold disease/Problems</label>
		        </div>
		      </div>
		      <div class="form-group w-50" v-if="thryoldDisease == true">
		        <div class="field-checkbox d-flex align-items-center">
		          <input type="text" class="form-control">
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="cancerDisease" />
		          <label class="mb-0 ms-2" for="binary">Cancer disease</label>
		        </div>
		      </div>
		      <div class="form-group w-50" v-if="cancerDisease == true">
		        <div class="field-checkbox d-flex align-items-center">
		          <input type="text" class="form-control">
		        </div>
		      </div>
				</div>
				<div class="col-md-6 mt-5">
					<div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="setzures" />
		          <label class="mb-0 ms-2" for="binary">Setzures</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="migraines" />
		          <label class="mb-0 ms-2" for="binary">Migraines</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="alcoholism" />
		          <label class="mb-0 ms-2" for="binary">Alcoholism</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="drugAddiction" />
		          <label class="mb-0 ms-2" for="binary">Drug addiction</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="deprission" />
		          <label class="mb-0 ms-2" for="binary">Deprission</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="anxiety" />
		          <label class="mb-0 ms-2" for="binary">Anxiety</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="bipolarDisorder" />
		          <label class="mb-0 ms-2" for="binary">Bipolar disorder</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="chronicFatigueSyndrome" />
		          <label class="mb-0 ms-2" for="binary">Chronic fatigue syndrome</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="arthritis" />
		          <label class="mb-0 ms-2" for="binary">Arthritis</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="lowBackInjury" />
		          <label class="mb-0 ms-2" for="binary">Low back injury</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="hivAids" />
		          <label class="mb-0 ms-2" for="binary">HIV/AIDS</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="irritableBowelSyndrome" />
		          <label class="mb-0 ms-2" for="binary">Irritable bowel syndrome</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="diverticulitis" />
		          <label class="mb-0 ms-2" for="binary">Diverticulitis/Diverticulosis</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="esophageal" />
		          <label class="mb-0 ms-2" for="binary">Esophageal Reflux/Stomach</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="hemorrholds" />
		          <label class="mb-0 ms-2" for="binary">Hemorrholds</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="glaucoma" />
		          <label class="mb-0 ms-2" for="binary">Glaucoma</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="allergic" />
		          <label class="mb-0 ms-2" for="binary">Allergic to latex</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="otherMedicalProblems" />
		          <label class="mb-0 ms-2" for="binary">Other medical problems</label>
		        </div>
		      </div>
		      <div class="form-group w-50" v-if="otherMedicalProblems == true">
		        <div class="field-checkbox d-flex align-items-center">
		          <input type="text" class="form-control">
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
import Base from "@/components/global/utilities/Base.vue";
export default {
  components: {
    Base,
  },
  data() {
    return {
      heartDisease: '',
      congestiveHeartFailture: '',
      heartAttack: '',
      angina: '',
      heartValveDisease: '',
      heartMurmmur: '',
      other: '',
      lungDisease: '',
			kidneyDisease: '',
			liverDisease: '',
			thryoldDisease: '',
			cancerDisease: '',
			setzures: '',
			migraines: '',
			alcoholism: '',
			drugAddiction: '',
			deprission: '',
			anxiety: '',
			bipolarDisorder: '',
			chronicFatigueSyndrome: '',
			arthritis: '',
			lowBackInjury: '',
			hivAids: '',
			irritableBowelSyndrome: '',
			diverticulitis: '',
			esophageal: '',
			hemorrholds: '',
			glaucoma: '',
			allergic: '',
			otherMedicalProblems: '',
			asthma: '',
			emphysema: '',
			otherLungDisease: '',
    };
  },
}
</script>
<style scoped>
	.form-group {
		margin-bottom: 5px !important;
	}
	@media only screen and (max-width: 600px) {
	  .w-50 {
	    width: 100% !important;
	  }
	}
</style>