<template>
  <div class="Growth-Charts">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t("Growth Charts") }}</h4>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-md-6 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("length.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid':
                  v.length.$invalid && v.length.$anyDirty && v.length.$anyError,
              }"
              v-model="growthCharts.length"
              :placeholder="$t('length.placeholder')"
              step="0.01"
            />
            <div
              class="invalid-feedback"
              v-if="!v.length.decimal && v.length.$error"
            >
              {{ inputError($t("length.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="!v.length.minValue && v.length.$error"
            >
              {{
                minValueError($t("length.label"), v.length.$params.minValue.min)
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="!v.length.maxValue && v.length.$error"
            >
              {{
                maxValueError($t("length.label"), v.length.$params.maxValue.max)
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("weight.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid':
                  v.weight.$invalid &&
                  v.weight.$anyDirty &&
                  $v.growthCharts.weight.$anyError,
              }"
              v-model="growthCharts.weight"
              :placeholder="$t('weight.placeholder')"
              step="0.01"
            />
            <div
              class="invalid-feedback"
              v-if="!v.weight.decimal && v.weight.$error"
            >
              {{ inputError($t("weight.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="!v.weight.minValue && v.weight.$error"
            >
              {{
                minValueError($t("weight.label"), v.weight.$params.minValue.min)
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="!v.weight.maxValue && v.weight.$error"
            >
              {{
                maxValueError($t("weight.label"), v.weight.$params.maxValue.max)
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("head.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid':
                  v.head.$invalid && v.head.$anyDirty && v.head.$anyError,
              }"
              v-model="growthCharts.head"
              :placeholder="$t('head.placeholder')"
              step="0.01"
            />
            <div
              class="invalid-feedback"
              v-if="!v.head.decimal && v.head.$error"
            >
              {{ inputError($t("head.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="!v.head.minValue && v.head.$error"
            >
              {{ minValueError($t("head.label"), v.head.$params.minValue.min) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="!v.head.maxValue && v.head.$error"
            >
              {{ maxValueError($t("head.label"), v.head.$params.maxValue.max) }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-2">
          <div class="form-group">
            <label class="form-label">{{ $t("bmi.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid':
                  v.bmi.$invalid &&
                  v.bmi.$anyDirty &&
                  $v.growthCharts.bmi.$anyError,
              }"
              v-model="growthCharts.bmi"
              :placeholder="$t('bmi.placeholder')"
              step="0.01"
            />
            <div class="invalid-feedback" v-if="!v.bmi.decimal && v.bmi.$error">
              {{ inputError($t("bmi.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-1 d-flex">
          <AddButton @add="addToChart"></AddButton>
        </div>
      </div>
    </Base>
    <div
      v-if="
        toggleKeys.key1 ||
        toggleKeys.key2 ||
        toggleKeys.key3 ||
        toggleKeys.key4 ||
        toggleKeys.key5 ||
        toggleKeys.key6 ||
        toggleKeys.key7 ||
        toggleKeys.key8
      "
      class="row"
    >
      <div class="col-xxl-6 my-2" v-if="toggleKeys.key1">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">Length For Age</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key1 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key1MaleLookUp"
            :options="key1LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key1FemaleLookUp"
            :options="key1LinearOptions"
          />
        </Base>
      </div>
      <div class="col-xxl-6 my-2" v-if="toggleKeys.key2">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">Weight For Age</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key2 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key2MaleLookUp"
            :options="key2LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key2FemaleLookUp"
            :options="key2LinearOptions"
          />
        </Base>
      </div>
      <div class="col-xxl-6 my-2" v-if="toggleKeys.key3">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">Head Circumference For Age</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key3 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key3MaleLookUp"
            :options="key3LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key3FemaleLookUp"
            :options="key3LinearOptions"
          />
        </Base>
      </div>
      <div class="col-xxl-6 my-2" v-if="toggleKeys.key4">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">Weight For Length</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key4 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key4MaleLookUp"
            :options="key4LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key4FemaleLookUp"
            :options="key4LinearOptions"
          />
        </Base>
      </div>

      <div class="col-xxl-6 my-2" v-if="toggleKeys.key6">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">Stature For Age</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key6 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key6MaleLookUp"
            :options="key6LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key6FemaleLookUp"
            :options="key6LinearOptions"
          />
        </Base>
      </div>
      <div class="col-xxl-6 my-2" v-if="toggleKeys.key7">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">Weight For Age</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key7 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key7MaleLookUp"
            :options="key7LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key7FemaleLookUp"
            :options="key7LinearOptions"
          />
        </Base>
      </div>
      <div class="col-xxl-6 my-2" v-if="toggleKeys.key8">
        <Base>
          <div class="chart-header d-flex justify-content-between flex-wrap">
            <h4 class="mb-0 fw-bold">BMI For Age</h4>
            <button
              class="btn btn-icon rounded-circle btn-default"
              title="window-maximize"
              @click.prevent="displayMaximizable.key8 = true"
            >
              <i class="pi pi-window-maximize"></i>
            </button>
          </div>
          <Chart
            v-if="gender.english == 'male'"
            type="line"
            :data="key8MaleLookUp"
            :options="key8LinearOptions"
          />
          <Chart
            v-if="gender.english == 'female'"
            type="line"
            :data="key8FemaleLookUp"
            :options="key8LinearOptions"
          />
        </Base>
      </div>
    </div>
    <Dialog
      :visible.sync="displayMaximizable.key1"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="Length For Age"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key1MaleLookUp"
        :options="key1LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key1FemaleLookUp"
        :options="key1LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>
    <Dialog
      :visible.sync="displayMaximizable.key2"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="Weight For Age"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key2MaleLookUp"
        :options="key2LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key2FemaleLookUp"
        :options="key2LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>
    <Dialog
      :visible.sync="displayMaximizable.key3"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="Head Circumference For Age"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key3MaleLookUp"
        :options="key3LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key3FemaleLookUp"
        :options="key3LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>
    <Dialog
      :visible.sync="displayMaximizable.key4"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="Weight For Length"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key4MaleLookUp"
        :options="key4LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key4FemaleLookUp"
        :options="key4LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>

    <Dialog
      :visible.sync="displayMaximizable.key6"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="Stature For Age"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key6MaleLookUp"
        :options="key6LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key6FemaleLookUp"
        :options="key6LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>
    <Dialog
      :visible.sync="displayMaximizable.key7"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="Weight For Age"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key7MaleLookUp"
        :options="key7LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key7FemaleLookUp"
        :options="key7LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>
    <Dialog
      :visible.sync="displayMaximizable.key8"
      :containerStyle="{ width: '90vw' }"
      :maximizable="true"
      :modal="true"
      :closable="true"
      header="BMI For Age"
    >
      <Chart
        v-if="gender.english == 'male'"
        type="line"
        :data="key8MaleLookUp"
        :options="key8LinearOptions"
      />
      <Chart
        v-if="gender.english == 'female'"
        type="line"
        :data="key8FemaleLookUp"
        :options="key8LinearOptions"
      />
      <template #footer>
        <div class="invisible">Footer</div>
      </template>
    </Dialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/pediatric/growthCharts.json"></i18n>
<script>
import { mapActions, mapGetters } from "vuex";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import { decimal, minValue, maxValue } from "vuelidate/lib/validators";
import { inputError, minValueError, maxValueError } from "@/validation/errors";
import growthChartOptions from "@/mixins/mr/pediatric/options/growthChartsOptions";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
export default {
  mixins: [growthChartOptions],
  props: {
    v: {
      type: Object,
    },
  },
  components: {
    Base,
    AddButton,
    ResetButton,
  },
  data() {
    return {
      ////////// == needed from backend in step 2 as user data == /////////////
      gender: {
        english: "male",
        arabic: "male",
      },
      age: 40, // => in months
      ////////////////////////////////////////////////////////////////////////
      toggleKeys: {
        key1: false,
        key2: false,
        key3: false,
        key4: false,
        key5: false,
        key6: false,
        key7: false,
        key8: false,
      },
      displayMaximizable: {
        key1: false,
        key2: false,
        key3: false,
        key4: false,
        key5: false,
        key6: false,
        key7: false,
        key8: false,
      },
      inputError,
      minValueError,
      maxValueError,
    };
  },

  computed: {
    growthCharts: {
      get() {
        return this.$store.getters["detailsPediatric/pediatric/growthCharts"];
      },
      set(value) {
        this.$store.dispatch("detailsPediatric/pediatric/setGrowthCharts", value);
      },
    },
  },
  methods: {
    resetForm() {
      this.growthCharts.length = null;
      this.growthCharts.weight = null;
      this.growthCharts.head = null;
      this.growthCharts.bmi = null;
    },
    reset() {
      this.resetForm();
      this.v.$reset();
    },
    addToChart() {
      this.v.$touch();
      if (!this.v.$invalid) {
        if (this.age > 0 && this.age <= 36) {
          if (
            this.age &&
            this.growthCharts.length &&
            this.growthCharts.weight
          ) {
            this.toggleKeys.key4 = true;
            if (this.gender.english == "male")
              this.key4MaleLookUp.datasets[0].data.push({
                x: this.growthCharts.length,
                y: this.growthCharts.weight,
              });
            if (this.gender.english == "female")
              this.key4FemaleLookUp.datasets[0].data.push({
                x: this.growthCharts.length,
                y: this.growthCharts.weight,
              });
          }
          if (this.age && this.growthCharts.length) {
            this.toggleKeys.key1 = true;
            if (this.gender.english == "male")
              this.key1MaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.length,
              });
            if (this.gender.english == "female")
              this.key1FemaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.length,
              });
          }
          if (this.age && this.growthCharts.weight) {
            this.toggleKeys.key2 = true;
            if (this.gender.english == "male")
              this.key2MaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.weight,
              });
            if (this.gender.english == "female")
              this.key2FemaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.weight,
              });
          }
          if (this.age && this.growthCharts.head) {
            this.toggleKeys.key3 = true;
            if (this.gender.english == "male")
              this.key3MaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.head,
              });
            if (this.gender.english == "female")
              this.key3FemaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.head,
              });
          }
        } else if (this.age > 36 && this.age <= 240) {
          if (this.age && this.growthCharts.length) {
            this.toggleKeys.key6 = true;
            if (this.gender.english == "male")
              this.key6MaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.length,
              });
            if (this.gender.english == "female")
              this.key6FemaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.length,
              });
          }
          if (this.age && this.growthCharts.weight) {
            this.toggleKeys.key7 = true;
            if (this.gender.english == "male")
              this.key7MaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.weight,
              });
            if (this.gender.english == "female")
              this.key7FemaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.weight,
              });
          }
          if (this.age && this.growthCharts.bmi) {
            this.toggleKeys.key8 = true;
            if (this.gender.english == "male")
              this.key8MaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.bmi,
              });
            if (this.gender.english == "female")
              this.key8FemaleLookUp.datasets[0].data.push({
                x: (this.age += 1),
                y: this.growthCharts.bmi,
              });
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/.p-chart canvas {
  max-width: 100% !important;
  min-height: 400px !important;
}
</style>
