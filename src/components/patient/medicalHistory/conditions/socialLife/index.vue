<template>
  <div class="social">
    <Base>
      <div class="row gap-5">
        <div class="col-4">
          <label for="" class="form-label mb-3">How many hours of physical exercise?</label>
          <div class="d-flex align-items-center gap-2">
            <input type="text" class="form-control me-2" v-model="exerciseHours" placeholder="Hour/Week"/>
            <p class="form-label my-2">Hour/Week</p>
          </div>
        </div>
        <div class="col-4">
          <label for="" class="form-label mb-3">What type of exercise?</label>
          <input type="text" class="form-control" v-model="exerciseType" placeholder="Exercises"/>
        </div>
      </div>

      <div class="line"></div>




      <div class="row">
        <div class="col-3">
          <div class="smoke">
            <label for="" class="form-label mb-3">Do you currently smoke?</label>
            <div class="d-flex align-items-center gap-4">
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="currentlySmoke" inputId="currentlySmokeYes" name="currentlySmoke" value="true" />
                <!-- <Checkbox id="binary" v-model="currentlySmoke" :true-value="true" false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">Yes</h6>
              </div>
              <div class="d-flex align-items-center">
                <RadioButton v-model="currentlySmoke" inputId="currentlySmokeNo" name="currentlySmoke" value="false" />
                <!-- <Checkbox id="binary" v-model="currentlySmoke" true-value="false" :false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">No</h6>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showEverSmoke" class="col-3">
          <div class="smoke">
            <label for="" class="form-label mb-3">Have you ever smoked?</label>
            <div class="d-flex align-items-center gap-4">
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="everSmoked" inputId="everSmoked1" name="everSmoked" value="true" />
                <!-- <Checkbox id="binary" v-model="everSmoked" :true-value="true" false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">Yes</h6>
              </div>
              <div class="d-flex align-items-center">
                <RadioButton v-model="everSmoked" inputId="everSmoked2" name="everSmoked" value="false" />
                <!-- <Checkbox id="binary" v-model="everSmoked" :true-value="false" false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">No</h6>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showSmokeDetails" class="col-3">
          <label for="" class="form-label mb-3">How much a week?</label>
          <input type="text" class="form-control" v-model="smokeDetails" placeholder="Smoke per week"/>
        </div>

        <div v-if="showCurrentlySmokeDetails" class="col-3">
          <label for="" class="form-label mb-3">Since when?</label>
          <InputGroupWrapper>
            <InputText
            v-model.trim="currentlySmokeValue"
            type="number"
            min="0"
            placeholder="Value"
            />
            <Dropdown
            v-model="currentlySmokeUnit"
            :options="unitOptions"
            optionLabel="name" 
            optionValue="id" 
            placeholder="Unit"
            />
          </InputGroupWrapper>
        </div>
      </div>



      <div class="line"></div>

      <div class="row">
        <div class="col-3">
          <div class="alcohol">
            <label for="" class="form-label mb-3">Do you currently drink alcohol?</label>
            <div class="d-flex align-items-center gap-4">
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="currentlyDrink" inputId="currentlyDrinkYes" name="currentlyDrink" value="true" />
                <!-- <Checkbox id="binary" v-model="currentlyDrink" :true-value="true" false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">Yes</h6>
              </div>
              <div class="d-flex align-items-center">
                <RadioButton v-model="currentlyDrink" inputId="currentlyDrinkNo" name="currentlyDrink" value="false" />
                <!-- <Checkbox id="binary" v-model="currentlyDrink" :true-value="false" false-value="false" :binary="true" /><Checkbox v-model="currentlyDrink" true-value="No" false-value="Yes" /> -->
                <h6 class="ms-2 my-2">No</h6>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showEverDrink" class="col-3">
          <div class="alcohol">
            <label for="" class="form-label mb-3">Have you ever drunk alcohol?</label>
            <div class="d-flex align-items-center gap-4">
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="everDrunk" inputId="everDrunkYes" name="everDrunk" value="true" />
                <!-- <Checkbox id="binary" v-model="everDrunk" :true-value="true" false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">Yes</h6>
              </div>
              <div class="d-flex align-items-center">
                <RadioButton v-model="everDrunk" inputId="everDrunkNo" name="everDrunk" value="false" />
                <!-- <Checkbox id="binary" v-model="everDrunk" true-value="false" :false-value="false" :binary="true" /> -->
                <h6 class="ms-2 my-2">No</h6>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showDrinkDetails" class="col-3">
          <label for="" class="form-label mb-3">How much a week?</label>
          <input type="text" class="form-control" v-model="drinkDetails" placeholder="Drink per week"/>
        </div>

        <div v-if="showCurrentlyDrinkDetails" class="col-3">
          <label for="" class="form-label mb-3">Since when?</label>
          <InputGroupWrapper>
            <InputText
            v-model.trim="currentlyDrinkValue"
            type="number"
            min="0"
            placeholder="Value"
            />
            <Dropdown
            v-model="currentlyDrinkUnit"
            :options="unitOptions"
            optionLabel="name" 
            optionValue="id" 
            placeholder="Unit"
            />
          </InputGroupWrapper>
        </div>

      </div>

      <div class="line"></div>

      <div class="row">
        <div class="col-12">
          <div class="marital-status">
            <label for="" class="form-label mb-3">Marital Status</label>
            <div class="d-flex flex-wrap gap-4">
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="maritalStatus" inputId="maritalStatus1" name="maritalStatus" value="Single" />
                <h6 class="ms-2 my-2">Single</h6>
              </div>
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="maritalStatus" inputId="maritalStatus2" name="maritalStatus" value="Married" />
                <h6 class="ms-2 my-2">Married</h6>
              </div>
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="maritalStatus" inputId="maritalStatus3" name="maritalStatus" value="Divorced" />
                <h6 class="ms-2 my-2">Divorced</h6>
              </div>
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="maritalStatus" inputId="maritalStatus4" name="maritalStatus" value="Widowed" />
                <h6 class="ms-2 my-2">Widowed</h6>
              </div>
              <div class="d-flex align-items-center me-3">
                <RadioButton v-model="maritalStatus" inputId="maritalStatus5" name="maritalStatus" value="In a committed relationship" />
                <h6 class="ms-2 my-2">In a committed relationship</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="line"></div>

      <div class="row">
        <div class="col-12">
          <label for="" class="form-label mb-3">Have you ever been physically or sexually abused?</label>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center me-3">
              <RadioButton v-model="abuseHistory" inputId="abuseHistoryYes" name="abuseHistory" value="true" />
              <!-- <Checkbox id="binary" v-model="abuseHistory" :true-value="true" false-value="false" :binary="true" /> -->
              <h6 class="ms-2 my-2">Yes</h6>
            </div>
            <div class="d-flex align-items-center">
              <RadioButton v-model="abuseHistory" inputId="abuseHistoryNo" name="abuseHistory" value="false" />
              <!-- <Checkbox id="binary" v-model="abuseHistory" true-value="false" :false-value="false" :binary="true" /> -->
              <h6 class="ms-2 my-2">No</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="action-btn my-2">
        <div class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap">
          <button
            class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0"
          >
            Save
          </button>
          <button class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0">
            Cancel
          </button>
          
        </div>
      </div>



    </Base>
    
  </div>
</template>

<script>
import Base from "@/components/global/utilities/Base.vue";
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper'

export default {
  components: {
    Base,
    InputGroupWrapper
  },
  data() {
    return {
      exerciseHours: '',
      exerciseType: '',
      currentlySmoke: false,
      everSmoked: false,
      smokeDetails: '',
      currentlySmokeValue: null,
      currentlySmokeUnit: '',
      currentlyDrink: false,
      everDrunk: false,
      drinkDetails: '',
      currentlyDrinkValue: null,
      currentlyDrinkUnit: '',
      maritalStatus: '',
      abuseHistory: false,
      unitOptions: [
        { name: "Days", en: "Days", ar: "يوم", id: 1 },
        { name: "Weeks", en: "Weeks", ar: "اسبوع", id: 2 },
        { name: "Months", en: "Months", ar: "شهر", id: 3 },
        { name: "Years", en: "Years", ar: "سنه", id: 4 },
      ],
    };
  },
  computed: {
    showSmokeDetails() {
      return this.currentlySmoke === 'false' && this.everSmoked === 'true' || this.currentlySmoke === 'true';
    },
    showCurrentlySmokeDetails() {
      return this.currentlySmoke === 'true';
    },
    showEverSmoke() {
      return !(this.currentlySmoke === 'true');
    },
    showDrinkDetails() {
      return this.currentlyDrink === 'false' && this.everDrunk === 'true' || this.currentlyDrink === 'true';
    },
    showCurrentlyDrinkDetails() {
      return this.currentlyDrink === 'true';
    },
    showEverDrink() {
      return  !(this.currentlyDrink === 'true');
    },

  }
}
</script>

<style scoped>
.line {
  height: 1px;
  /* background: linear-gradient(to right, transparent, var(--primary), transparent); */
  background: var(--primary);
  margin: 15px 0;
  width: 100%;
}
</style>
