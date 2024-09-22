<template>
  <div class="test">

    <div class="row">
      <div class="col-12">
        <!-- PAGE-HEADER -->

        <h1 class="text-center text-danger fw-bold my-4">RedFoxes</h1>

        <h1 class="text-center">Welcome To RedFoxes Design System</h1>

        <!-- PAGE-HEADER END -->
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h1>Bootstrap Elements</h1>
      </div>

      <div class="col-md-4">
        <button class="btn btn-secondary w-sm m-1">secondary</button>

        <button class="btn btn-info w-sm m-1">info</button>

        <button class="btn btn-warning w-sm m-1">warning</button>

        <button class="btn btn-success w-sm m-1">success</button>

        <button class="btn btn-danger w-sm m-1">danger</button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-outline-secondary w-sm m-1">secondary</button>

        <button class="btn btn-outline-info w-sm m-1">info</button>

        <button class="btn btn-outline-warning w-sm m-1">warning</button>

        <button class="btn btn-outline-success w-sm m-1">success</button>

        <button class="btn btn-outline-danger w-sm m-1">danger</button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-secondary-gradient w-lg m-2">secondary</button>

        <button class="btn btn-info-gradient w-lg m-2">info</button>

        <button class="btn btn-warning-gradient w-lg m-2">warning</button>

        <button class="btn btn-success-gradient w-lg m-2">success</button>

        <button class="btn btn-danger-gradient w-lg m-2">danger</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-secondary-gradient w-sm m-1">secondary</button>

        <button class="btn btn-info-gradient w-sm m-1">info</button>

        <button class="btn btn-warning-gradient w-sm m-1">warning</button>

        <button class="btn btn-success-gradient w-sm m-1">success</button>

        <button class="btn btn-danger-gradient w-sm m-1">danger</button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-secondary-gradient disabled w-sm m-1">
          secondary
        </button>

        <button class="btn btn-info-gradient disabled w-sm m-1">info</button>

        <button class="btn btn-warning-gradient disabled w-sm m-1">
          warning
        </button>

        <button class="btn btn-success-gradient disabled w-sm m-1">
          success
        </button>

        <button class="btn btn-danger-gradient disabled w-sm m-1">
          danger
        </button>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-md-4">
        <div class="form-group">
          <label for="">Default input</label>

          <input type="text" placeholder="Hello World" class="form-control" />
        </div>

        <div class="form-group">
          <label for="">is-invalid input</label>

          <input type="text" class="form-control is-invalid" />
        </div>

        <div class="form-group">
          <label for="">is-valid input</label>

          <input type="text" class="form-control is-valid" />
        </div>

        <div class="form-group">
          <label for="">pagination</label>

          <ul class="pagination">
            <li class="page-item page-prev">
              <a class="page-link" href="javascript:void(0)" tabindex="-1"
                >Prev</a
              >
            </li>

            <li class="page-item active">
              <a class="page-link" href="javascript:void(0)">1</a>
            </li>

            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">2</a>
            </li>

            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">3</a>
            </li>

            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">4</a>
            </li>

            <li class="page-item page-next">
              <a class="page-link" href="javascript:void(0)">Next</a>
            </li>
          </ul>
        </div>

        <div class="form-group">
          <label for="">breadcrumb</label>

          <ol class="breadcrumb1">
            <li class="breadcrumb-item1">
              <a href="javascript:void(0)">Home</a>
            </li>

            <li class="breadcrumb-item1">
              <a href="javascript:void(0)">Library</a>
            </li>

            <li class="breadcrumb-item1 active">Data</li>
          </ol>
        </div>
      </div>

      <div class="col-md-4">
        <div
          class="card p-3 border-primary pricing-card advanced reveal revealrotate active"
        >
          <div class="card-header d-block text-justified pt-2">
            <p class="fs-18 fw-semibold mb-1 pe-0">
              Advanced<span class="tag bg-primary text-white float-end"
                >Limited Deal</span
              >
            </p>

            <p class="text-justify fw-semibold mb-1">
              <span class="fs-30 me-2">$</span
              ><span class="fs-30 me-1">1,299</span
              ><span class="fs-25"
                ><span class="op-0-5 text-muted text-20">/</span> year</span
              >
            </p>

            <p class="fs-13 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos
              debitis aliquam .
            </p>

            <p class="fs-13 mb-1 text-primary">
              Billed monthly on regular basis!
            </p>
          </div>

          <div class="card-body pt-2">
            <ul class="text-justify pricing-body ps-0">
              <li>
                <i
                  class="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"
                ></i>

                <strong> 5 Free</strong> Domain Name
              </li>

              <li>
                <i
                  class="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"
                ></i
                ><strong>5 </strong> One-Click Apps
              </li>

              <li>
                <i
                  class="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"
                ></i
                ><strong> 3 </strong> Databases
              </li>

              <li>
                <i
                  class="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"
                ></i
                ><strong> Unlimited </strong> Cloud Storage
              </li>

              <li>
                <i
                  class="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"
                ></i
                ><strong> Money </strong> BackGuarantee
              </li>

              <li class="mb-6">
                <i
                  class="mdi mdi-checkbox-marked-circle-outline text-primary p-2 fs-16"
                ></i
                ><strong> 24/7</strong> support
              </li>
            </ul>
          </div>

          <div class="card-footer text-center border-top-0 pt-1">
            <button
              class="btn btn-lg btn-primary-gradient text-white btn-block"
            >
              <span class="ms-4 me-4">Select</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h1>Prime Vue Components</h1>
      </div>

      <div class="col-md-4">
        <div class="form-group">
          <label class="form-label">Date</label>

          <Calendar
            placeholder="mm-dd-yy"
            v-model="date"
            :showIcon="true"
            dateFormat="mm-dd-yy"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Basic</label>

          <Dropdown
            v-model="selectedCity1"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
          />
        </div>

        <div class="form-group">
          <div class="field-checkbox">
            <Checkbox id="binary" v-model="checked" :binary="true" />

            <label class="form-label fw-bold ms-2 mb-0" for="binary">{{
              checked
            }}</label>
          </div>
        </div>

        <div class="form-group d-flex align-items-center gap-2">
          <InputSwitch v-model="checked1" />

          <label class="mb-0">Basic</label>
        </div>

        <div class="form-group">
          <RadioButton
            inputId="city1"
            name="city"
            value="Chicago"
            v-model="val2"
          />

          <label for="" class="mb-0 ms-2">Chicago </label>
        </div>

        <div class="form-group">
          <label for="" class="form-label">MultiSelect </label>

          <MultiSelect
            v-model="selectedCars"
            :options="cars"
            optionLabel="brand"
            placeholder="Select Brands"
          />
        </div>

        <div class="form-group">
          <label for="" class="form-label">Password </label>

          <Password v-model="val1" toggleMask />
        </div>

        <div class="form-group">
          <label for="" class="form-label">Rating </label>

          <Rating v-model="val3" :cancel="false" />
        </div>

        <div class="field">
          <label for="serial" class="form-label">Serial</label>

          <InputMask
            mask="a*-999-a999"
            v-model="val6"
            placeholder="a*-999-a999"
          />
        </div>

        <div class="field">
          <label for="Phone" class="form-label">Phone</label>

          <InputMask
            mask="(999) 999-9999"
            v-model="val4"
            placeholder="(999) 999-9999"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Textarea</label>

          <Textarea
            v-model="val4"
            rows="5"
            cols="30"
            placeholder="Textarea"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group p-fluid">
          <label for="" class="form-label">SelectButton </label>

          <SelectButton
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import InputMask from "primevue/inputmask";
import InputSwitch from "primevue/inputswitch";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";
import Rating from "primevue/rating";
import SelectButton from "primevue/selectbutton";
import Textarea from "primevue/textarea";

export default {

  components: {

    Dropdown,
    Calendar,
    Checkbox,
    InputMask,
    InputSwitch,
    MultiSelect,
    Password,
    RadioButton,
    Rating,
    SelectButton,
    Textarea,
  },
  data() {
    return {
      date: null,
      Textarea: null,
      selectedCity: null,
      selectedCity1: null,
      cities: [
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      checked: false,
      checked1: false,
      checked2: false,
      radioValue1: "",
      radioValue2: "",
      val1: null,
      val2: null,
      val3: null,
      val4: null,
      val5: null,
      val6: null,
      selectedCars: null,
      cars: [
        { brand: "Audi", value: "Audi" },
        { brand: "BMW", value: "BMW" },
        { brand: "Fiat", value: "Fiat" },
        { brand: "Honda", value: "Honda" },
        { brand: "Jaguar", value: "Jaguar" },
        { brand: "Mercedes", value: "Mercedes" },
        { brand: "Renault", value: "Renault" },
        { brand: "Volkswagen", value: "Volkswagen" },
        { brand: "Volvo", value: "Volvo" },
      ],
    };
  },
};
</script>

<style></style>
