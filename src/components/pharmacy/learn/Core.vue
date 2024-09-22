<template>
  <div class="learn my-3 ">
    <!-- ////////////////////////////// -->
    <div class="content-schedule">
      <div v-for="(day, index) in days" :key="index">
        <div class="row">
          <div class="col-md-3">
            <div class="field-checkbox d-flex align-items-center my-2 gap-1">
              <Checkbox :id="day.id" :binary="true" v-model="day.on" @change="handleCheckboxChange(index)" />
              <label :for="day.id" class="fw-bold mb-0">{{ day.label }}</label>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <Calendar :disabled="!day.on" 
              :id="'opening' + day.id" v-model="day.openingTime" 
              :timeOnly="true"
              hourFormat="12"
              @date-select="selectOpening($event, day, index)" 
              placeholder="Opening Time" 
              :class="{'p-invalid':day.checkTimeOpening}"
               />
              <small class="p-invalid"
              v-if="day.checkTimeOpening">{{ inputError($t('form.businessHours.schedule.opening.label')) }}
            </small>
              <!--       :class="{ 'p-invalid': closingTimeError(index) && day.on }" <small class="p-invalid"
              v-if="$v.days[index].openingTime.$error && !$v.days[index].openingTime.required">{{ requiredError($t('form.businessHours.schedule.opening.label')) }}
            </small> -->
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <Calendar :disabled="!day.on" :id="'closing' + day.id" v-model="day.closingTime" :timeOnly="true"
                hourFormat="12" @date-select="selectClosing($event, day, index)" placeholder="Closing Time" 
                :class="{'p-invalid':day.checkTimeClosing}" 
                />
                <small class="p-invalid"
                  v-if="day.checkTimeClosing">{{ inputError($t('form.businessHours.schedule.opening.label')) }}
                </small>
              <!-- <small class="p-invalid" 
              v-if="closingTimeError(index) && day.on ">{{ requiredError($t('form.businessHours.schedule.opening.label')) }}
            </small> -->
              <!-- :class="{ 'p-invalid': $v.days[index].closingTime.$error }"  <small class="p-invalid"
                 v-if="$v.days[index].closingTime.$error && !$v.days[index].closingTime.required">{{ requiredError($t('form.businessHours.schedule.opening.label')) }}
              </small> -->
            </div>
          </div>
          <div class="col-md-3">
            <div :class="{ 'd-none': !day.on || displaySubTime, 'd-block': day.on && day.subtimes.length == 0 }">
              <AddButtonWithoutLabel class="" @add="addTime(day, index)"></AddButtonWithoutLabel>
            </div>
            <div v-if="displaySubTime && day.on && day.subtimes.length > 0">
              <DeleteButtonWithoutSize class="" @delete="deleteSubTime(day, index)"></DeleteButtonWithoutSize>
            </div>
          </div>
        </div>
        <div v-if="displaySubTime && day.on && day.subtimes.length > 0">
          <div class="row" v-for="(subtime, subIndex) in day.subtimes" :key="subIndex">
            <div class="col-md-3"></div>
            <div class="col-md-3">
              <div class="form-group">
                <Calendar :id="'opening' + day.id + subIndex" v-model="subtime[subtime.day + 'Opening' + subtime.count]"
                  :timeOnly="true" hourFormat="12" @date-select="selectOpeningSubtimes($event, day, index, subtime.count)"
                  placeholder="Opening Time" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <Calendar :id="'closing' + day.id + subIndex" v-model="subtime[subtime.day + 'Closing' + subtime.count]"
                  :timeOnly="true" hourFormat="12" @date-select="selectClosingSubtimes($event, day, index, subtime.count)"
                  placeholder="Closing Time" />
              </div>
            </div>
            <div class="col-md-3">
              <div class="d-flex justify-content-start">
                <div v-if="displaySubTime && subIndex === day.subtimes.length - 1">
                  <AddButtonWithoutLabel class="" @add="addTime(day, index)"></AddButtonWithoutLabel>
                </div>
                <div :class="{ 'd-none': !day.on || !displaySubTime }">
                  <DeleteButtonWithoutSize class="" @delete="deleteSubTime(day, index)"></DeleteButtonWithoutSize>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ////////////////////////////////////////////// -->

    <!-- ////////////////////////////// -->
    <!-- <div>
        <img :src="previewImage" class="uploading-image" />
        <input type="file" accept="image/jpeg" @change=uploadImageSave>
    </div> -->
    <!-- **************************************** -->
    <!-- <div class="content-custom-image-profile">
         <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
        <input ref="fileInput" type="file" @input="pickFile">
     </div> -->
    <!-- ////////////////////////////////// -->

    <div class="custom-file-input">
      <img :src="previewImageUrl" alt="Selected Image" v-if="imageFile" />
      <img src="@/assets/icons/business/register/locations.svg" alt="Selected Image" v-else />

      <i class="pi pi-camera text-success"></i>
      <input type="file" class="hidden-input" @change="handleFileChange2" />
    </div>
    <!-- <img :src="previewImageUrl" alt="Selected Image" v-if="imageFile" /> -->
    <!-- <input type="file" @change="handleFileChange2" /> -->
    <!-- /////////////////////////////////// -->
    <!-- <input type="file" @change="uploadImage" /> -->
    <!-- **************************************** -->
    <File>
    </File>
    <!-- ******************form***************** -->
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="">input one </label>
          <input type="text" placeholder="Hello World" class="form-control" v-model="inputOne">
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="">input two </label>

          <input type="text" placeholder="Hello World" class="form-control" v-model="inputTWO">
        </div>
      </div>
      <div class="col-md-4">

        <div class="m-5">
          <button class="btn btn-info" @click="addRow()">
            Add
          </button>
        </div>
      </div>
      <!-- ********************table*************************** -->
      <div class=" row position-relative  " v-if="records.length > 0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>input one</th>
              <th>input two</th>
              <th>Controls</th>
            </tr>

          </thead>
          <tbody>
            <tr v-for="(record, index) in records" :key="record.index">
              <td> {{ index + 1 }}</td>
              <td>{{ record.inputOne }}</td>
              <td>{{ record.inputTWO }}</td>
              <td>
                <button class="btn btn-warning mx-3" @click="editRecord(index)">Edit</button>
                <button class="btn btn-danger mx-3" @click="deleteRecord(index)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- *************Dialog Edit******************** -->
      <div v-if="editDialog" class="bg-light  z-3 position-absolute w-50 ">
        <div class="row rounded pt-4">
          <div class="col-md-6">
            <div class="form-group ">
              <label for="">input one Edit </label>
              <input type="text" placeholder="Hello World" class="form-control" v-model="inputOneEdit">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="">input two Edit </label>

              <input type="text" placeholder="Hello World" class="form-control" v-model="inputTWOEdit">
            </div>
          </div>
          <div class="col-md-12">

            <div class="m-5">
              <button class="btn btn-info mx-3" @click="saveRecord()">
                save
              </button>
              <button class="btn btn-danger mx-3" @click="cancel()">
                cancel
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- ******************************** -->
      <!-- <div class="card">
      <div class="flex flex-wrap justify-content-center gap-2 mb-2">
          <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
          <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
      </div>
      <div class="flex flex-wrap justify-content-center gap-2 mb-2">
          <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
          <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
          <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
      </div>
      <div class="flex flex-wrap justify-content-center gap-2">
          <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
          <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
          <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
      </div>

      <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
          <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <template #footer>
              <Button label="No" icon="pi pi-times" @click="visible = false" text />
              <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
          </template>
</Dialog>
</div> -->
      <!-- *************************************** -->
      <!-- <div class="card flex justify-content-center">
      <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
      <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </Dialog>
  </div> -->
      <!-- *************************************** -->
      <!-- <div>
      <Button label="Show Dialog" icon="pi pi-info" @click="showDialog" />
      <Dialog header="Dialog Title" :visible="dialogVisible" @hide="hideDialog">
      Dialog content goes here -->
      <!-- </Dialog>
  </div> -->
      <!-- *************************** -->
    </div>
    <!-- **************simple & active************** -->
    <div class="row">
      <div class="col-md-4">
        <div class="d-flex gap-4">
          <label class="form-check-label" for="flexSwitchCheckChecked">Nva</label>
          <div class="form-check form-switch">
            <input class="form-check-input " v-model="toggleValue" type="checkbox" role="switch"
              id="flexSwitchCheckChecked">
            <label class="form-check-label" for="flexSwitchCheckChecked">Dva</label>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <input type="radio" id="one" value="Simple" v-model="optionValue" />
        <label for="one">Simple</label>

      </div>
      <div class="col-md-3">
        <input type="radio" id="two" value="Advanced" v-model="optionValue" />
        <label for="two">Advanced</label>

      </div>
    </div>


    <!-- //////////////Advanced////////////////////// -->
    <div class="row my-4">
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select1">select1</label><br>
        <select name="" id="select1" v-model="distant.select1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select2">select2</label><br>
        <select name="" id="select2" v-model="distant.select2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select3">select3</label><br>
        <select name="" id="select3" v-model="distant.select3">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select4">select4</label><br>
        <select name="" id="select4" v-model="distant.select4">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced'" class="col-md-1">
        <label for="select5">select5</label><br>
        <select name="" id="select5" v-model="distant.select5">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced'" class="col-md-1">
        <label for="select6">select6</label><br>
        <select name="" id="select6" v-model="distant.select6">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div class="col-md-1" v-if="optionValue == 'Advanced' && toggleValue">
        <label for="Nva">Dva</label><br>
        <select name="" id="Nva" v-model="distant.select7">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="col-md-1" v-if="optionValue == 'Advanced' && !toggleValue">
        <label for="Nva">Nva</label><br>
        <select name="" id="Nva" v-model="distant.select7">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
    <!-- ///////////simple////////////////////// -->
    <!-- <div  v-if="optionValue =='Simple' " class="row my-4" >
    <div class="col-md-1">
      <label for="select1" >select1</label><br>
      <select name="" id="select1"  v-model="distant.select1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
    </div>
    <div class="col-md-1">
      <label for="select2" >select2</label><br>
      <select name="" id="select2"  v-model="distant.select2" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
    </div>
    <div class="col-md-1">
      <label for="select3" >select3</label><br>
      <select name="" id="select3"  v-model="distant.select3" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
    </div>
    <div class="col-md-1">
      <label for="select4" >select4</label><br>
      <select name="" id="select4"  v-model="distant.select4">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
    </div>
 </div> -->
    <!-- //////////////////buttons////////////////// -->
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-3"><i @click="upData" class="pi pi-angle-up text-success fw-bold"></i></div>
      <div class="col-md-3"><i @click="downData" class="pi pi-angle-down text-success fw-bold"></i></div>
    </div>
    <!-- //////////////////////Advanced////////////// -->
    <div class="row my-4">
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select1">select1</label><br>
        <select name="" id="select1" v-model="near.select1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select2">select2</label><br>
        <select name="" id="select2" v-model="near.select2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select3">select3</label><br>
        <select name="" id="select3" v-model="near.select3">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced' || optionValue == 'Simple'" class="col-md-1">
        <label for="select4">select4</label><br>
        <select name="" id="select4" v-model="near.select4">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced'" class="col-md-1">
        <label for="select5">select5</label><br>
        <select name="" id="select5" v-model="near.select5">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div v-if="optionValue == 'Advanced'" class="col-md-1">
        <label for="select6">select6</label><br>
        <select name="" id="select6" v-model="near.select6">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div class="col-md-1" v-if="optionValue == 'Advanced' && toggleValue">
        <label for="Nva">Dva</label><br>
        <select name="" id="Nva" v-model="near.select7">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="col-md-1" v-if="optionValue == 'Advanced' && !toggleValue">
        <label for="Nva">Nva</label><br>
        <select name="" id="Nva" v-model="near.select7">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

    </div>
    <!-- //////////////////////Simple////////////// -->
    <!-- <div  v-if="optionValue =='Simple' " class="row my-4" >
          <div class="col-md-1">
              <label for="select1" >select1</label><br>
              <select name="" id="select1"  v-model="near.select1" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
          </div>
          <div class="col-md-1">
              <label for="select2" >select2</label><br>
              <select name="" id="select2" v-model="near.select2" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
          </div>
          <div class="col-md-1">
              <label for="select3" >select3</label><br>
              <select name="" id="select3"  v-model="near.select3">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
          </div>
          <div class="col-md-1">
              <label for="select4" >select4</label><br>
              <select name="" id="select4"  v-model="near.select4" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
          </div>
          
          
     </div> -->
    <!-- /////////////////////Knob//////////////////////////// -->
    <knob v-model="value" :strokeWidth="5" />
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="person.name">
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="number" id="age" v-model="person.age">
    </div>
    <p>Changed Name: {{ changedName }}</p>
    <p>Changed Age: {{ changedAge }}</p>
    <!-- /////////////////////////////// -->
    <hr><br>


    <div class="outer">
      <div class="box">
        The inner box is 90% - 30px.
      </div>
    </div>
    <div class="rotate">

    </div>
    <button @click="hello">click...</button>
    <div class="content-buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
    </div>
    <!-- ////////////////////axios////////////////////////////// -->

    <div class="axois-get">
      <!-- {{responseData}} -->
      <div class="card" style="width: 18rem;">
        <ul v-for=" (item, index) in responseData" :key="index.responseData" class="list-group list-group-flush">
          <li class="list-group-item"> ID:{{ item.id }} </li>
          <li class="list-group-item"> Title:{{ item.title }}</li>


        </ul>
      </div>
    </div>
    <section>
      <form @submit.prevent="createPost">
        <div>
          <label for="userId">UserID:</label>
          <input type="text" id="userId" v-model="postData.userId">
        </div>
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" v-model="postData.title">
        </div>
        <div>
          <label for="body">Body: </label>
          <textarea id="body" rows="6" cols="22" v-model="postData.body"></textarea>
        </div>
        <button>Create Post</button>
      </form>
    </section>
    <div :class="isValid ? 'valid' : 'invalid'">
      content when data binding
    </div>
    <!-- ////////////direct/////////// -->
    <div :class="['class1', 'class2', 'class3', isValid ? 'valid' : 'invalid']">
      contentfrom summation class===>>
    </div>
    <!-- ////by referance//// -->
    <div :class="myClass">
      contentfrom summation class===>>
    </div>
    <!-- bind multiple classes with an object -->
    <!-- ///////////referance object///////////////// -->
    <!-- <div :class="{
      class:condition,
      valid:true,
      invalid:false,
      }" >
      bind multiple classes with an object 
    </div> -->
    <div :class="{
        valid: true,
        class3: true,
        class1: false
      }">
      bind multiple classes with an object
    </div>
    <!-- //////////////// -->
    <p>Moustache syntax wraps the data property in double curly braces.</p>
    <p v-pre>Example: {{ name }}</p>

    <p>The resulting output will be the value of the data property.</p>
    <p>Example: {{ name }}</p>
    <p>myname: {{ greeting('randa') }}</p>
    <!-- //////////////////////////////// -->
    <p>fullName:{{ fullName }}</p>
    <p>first name:<input type="text" @input="getFirstName"></p>
    <p>last name:<input type="text" @input="getLastName"></p>
    <p>{{ name }}</p>
    <button v-on:click="changeName">change name</button>
    <p>{{ name }}==>{{ age }}</p>
    <button v-on:click="changeName(), changeAage()">change name</button>
    <!-- ////////////////////////// -->
    <!-- <p>Your name from get input: {{ name }}</p>
     <input type="text" @input="getInput"> -->
    <p>Your name from get input: {{ name }}</p>
    <input type="text" @input="getInput($event, 'Johnson')">
    <!-- ////////////////////////////////// -->
    <p>Counter: {{ count }}</p>

    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
    <!-- ///////////////////////////////// -->
    <h2>Dates and Weekdays</h2>
    <div v-for="(date, index) in generatedDates" :key="index">
      <p>{{ date.format('YYYY-MM-DD') }}</p>
      <p>Weekday: {{ date.format('dddd') }}</p>
      <p v-if="isWeekdayInList(date.format('dddd'))">Weekday is in the list!</p>
      <hr />
      <hr />
    </div>
    <hr />
    <hr />
    <h2>Ordered Days of the Week</h2>
    <div v-for="(day, index) in orderedDays" :key="index">
      {{ day }}
    </div>
    <!-- <p> merage==> {{ mergeAppointment }}</p> -->
    <!-- //////////////////////////// -->

    <!-- //////////////////////////// -->
    <!-- <template> -->
    <!-- {{ combinedAppointments }} -->


    <!-- </template>  -->
    <!-- ####################orientation="horizontal"#################### -->
    <div class=" ">
      <Carousel :value="combinedAppointments" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <!-- {{ slotProps.data }} -->
          <div class="product-item  custom-shadow">
            <div class="product-item-content">
              <!-- {{ slotProps.data.day }}
                    {{ slotProps.data.appointments}}v-if="slotProps.data.day !== yesterday"  -->
              <div class="d-flex justify-content-between align-items-center flex-wrap ">
                <div>
                  <button v-if="todayDate == slotProps.data.day"
                    class="btn btn-outline-secondary btn-pill">TODAY</button>
                  <button v-else-if="tomorrowDate == slotProps.data.day"
                    class="btn btn-outline-secondary btn-pill">TOMORROW</button>
                  <div v-else>
                    <div v-for="(date, index) in dateList" :key="index">
                      <button v-if="date.format('dddd') == slotProps.data.day"
                        class="btn btn-outline-secondary btn-pill">
                        {{ date.format('dd DD /MM') }}
                      </button>
                      <!-- {{ date }} -->
                    </div>
                  </div>
                </div>

                <!-- v-if="sections(booking).length > 0"  -->
                <!-- v-for="section in sections(booking)" :key="section.sectionNumber"   -->
                <div v-if="slotProps.data.appointments.length > 0">
                  <div v-for="appointment in slotProps.data.appointments" :key="appointment.id"
                    class="d-flex justify-content-between align-items-center flex-wrap ">
                    <!-- {{ slotProps.data }} -->
                    <div class="mb-0">
                      <span class="fw-bold">From</span>
                      <span class="fw-bold text-success">{{ appointment.appointmentFrom }}</span>

                    </div>
                    <div class="mb-0">
                      <span class="fw-bold">To</span>
                      <span class="fw-bold text-success">{{ appointment.appointmentTo }}</span>

                    </div>
                    <!-- <Divider></Divider> -->
                  </div>
                </div>
                <div v-else class="">
                  <div class="fw-bold">
                    Not Available Appointments
                  </div>
                </div>
                <div v-if="slotProps.data.appointments.length > 0" class="">
                  <button class="btn btn-secondary-gradient btn-pill">
                    view
                  </button>
                </div>
                <div v-else class="">
                  <button class="btn btn-secondary-gradient btn-pill disabled">
                    view
                  </button>
                </div>
              </div>
            </div>
          </div>

        </template>
      </Carousel>
    </div>
    <!-- ##################orientation="test horizontal"######################## -->
    <div class=" ">
      <Carousel :value="combinedAppointments" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <!-- {{ slotProps.data }} -->

          <!-- {{ slotProps.data.day }}
                    {{ slotProps.data.appointments}}v-if="slotProps.data.day !== yesterday"  -->
          <div class="booking-item">
            <div class=" booking-item-content text-center ">
              <div class="">
                <button v-if="todayDate == slotProps.data.day" class="btn btn-outline-secondary btn-pill">TODAY</button>
                <button v-else-if="tomorrowDate == slotProps.data.day"
                  class="btn btn-outline-secondary btn-pill">TOMORROW</button>
                <div v-else>
                  <div v-for="(date, index) in dateList" :key="index">
                    <button v-if="date.format('dddd') == slotProps.data.day" class="btn btn-outline-secondary btn-pill">
                      {{ date.format('dd DD /MM') }}
                    </button>
                    <!-- {{ date }} -->
                  </div>
                </div>
              </div>

              <!-- v-if="sections(booking).length > 0"  -->
              <!-- v-for="section in sections(booking)" :key="section.sectionNumber"   -->
              <div v-if="slotProps.data.appointments.length > 0" class="bookings">
                <div v-for="(appointment, index) in slotProps.data.appointments" :key="appointment.id" class="">
                  <!-- {{ slotProps.data }} -->
                  <table class="table table-borderless text-start">
                    <tbody>
                      <tr>
                        <td>From</td>
                        <td class="text-success">{{ appointment.appointmentFrom }}</td>
                      </tr>
                      <tr>
                        <td>To</td>
                        <td class="text-success">{{ appointment.appointmentTo }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <div >
                                <span class="fw-bold mx-2">From</span>
                                <span class="fw-bold text-success">{{ appointment.appointmentFrom }}</span>
                            
                              </div>
                              <div >
                                <span class="fw-bold mx-2">To</span>
                                <span class="fw-bold text-success">{{ appointment.appointmentTo  }}</span>
                                
                              </div> -->
                  <Divider v-if="slotProps.data.appointments.length > index + 1"></Divider>
                </div>
              </div>
              <div v-else class="no-bookings ">
                <div class="fw-bold mx-2">
                  Not Available Appointments
                </div>
              </div>
              <div class="">
                <button class="btn btn-secondary-gradient btn-pill" :disabled="!slotProps.data.appointments.length > 0">
                  view
                </button>
              </div>

            </div>
          </div>

        </template>
      </Carousel>
    </div>
    <!-- ///////////test/////////////// -->

    <!-- <template #item="slotProps">
          <div class="product-item">
              <div class="product-item-content">
                  <div class="mb-3">
                      <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                  </div>
                  <div>
                      <h4 class="mb-1">{{slotProps.data.name}}</h4>
                      <h6 class="mt-0 mb-3">${{slotProps.data.price}}</h6>
                      <span :class="'product-badge status-'+slotProps.data.inventoryStatus.toLowerCase()">{{slotProps.data.inventoryStatus}}</span>
                      <div class="car-buttons mt-5">
                          <Button icon="pi pi-search" class="p-button p-button-rounded mr-2" />
                          <Button icon="pi pi-star-fill" class="p-button-success p-button-rounded mr-2" />
                          <Button icon="pi pi-cog" class="p-button-help p-button-rounded" />
                      </div>
                  </div>
              </div>
          </div>
      </template> -->

    <!-- ////////////////////////////////////////// -->
    <!-- <div class="carousel-container">
          <Carousel :value="items" :numVisible="1" :numScroll="1" :circular="true" :responsiveOptions="responsiveOptions">
            <template #content>
              <div class="vertical-content">
                <div v-for="(item, index) in items" :key="index" class="carousel-item bg-red text-white">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </template>
            <template #indicators>
              <div class="horizontal-indicators">
                <button v-for="(item, index) in items" :key="index" @click="goToPage(index)" :class="{ 'p-filled': index === activeIndex }"></button>
              </div>
            </template>
          </Carousel>
        </div> -->
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/business/register.json"></i18n>
<script>
import moment from 'moment';
import { required } from "vuelidate/lib/validators";
import { requiredError, inputError } from '@/validation/errors.js'
import Divider from "@/components/global/utilities/Divider.vue";
import File from "@/components/pharmacy/learn/common/File.vue";
import AddButtonWithoutLabel from "@/components/global/utilities/AddButtonWithoutLabel.vue"
import DeleteButtonWithoutSize from "@/components/global/utilities/DeleteButtonWithoutSize.vue"
import axios from 'axios'
import { cloneDeep } from 'lodash';
export default {
  components: {
    Divider,
    File,
    AddButtonWithoutLabel,
    DeleteButtonWithoutSize
  },

  props: {
  },

  data() {

    return {
      days: [
        { id: 'Saturday', on: false, label: 'Saturday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false, subtimes: [] },
        { id: 'Sunday', on: true, label: 'Sunday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false, subtimes: [] },
        { id: 'Monday', on: true, label: 'Monday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false, subtimes: [] },
        { id: 'Tuesday', on: true, label: 'Tuesday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false, subtimes: [] },
        { id: 'Wednesday', on: true, label: 'Wednesday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false, subtimes: [] },
        { id: 'Thursday', on: true, label: 'Thursday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false,  subtimes: [] },
        { id: 'Friday', on: false, label: 'Friday', openingTime: '', closingTime: '', count: 0, checkTimeOpening:false, checkTimeClosing:false,  subtimes: [] },
        // Add other days here
      ],
      displaySubTime: false,
      displayDelete: false,
      countSubTime: 0,
      indexData:1,
      // checkTimeOpening: false,
      selectClosingIndex: 1,
      selectOpeningIndex: 1,
      saveDataClosing: "",
      saveDataOpening: "",
      saveDataClosingSubtimes: "",
      saveDataOpeningSubtimes: "",
      //////////////////////
      openingSunday: "",
      openingSunday1: "",
      closingSunday1: "",
      closingSunday: "",
      openingMonday: "",
      closingMonday: "",
      // displaySubTime:false,
      // count:1,
      ////////////////////
      daysOptions: [
        { id: 1, on: false, day: "Saturday", count: 0 },
        { id: 2, on: true, day: "Sunday", count: 0 },
        { id: 3, on: true, day: "Monday", count: 0 },
        { id: 4, on: true, day: "Tuesday", count: 0 },
        { id: 5, on: true, day: "Wednesday", count: 0 },
        { id: 6, on: true, day: "Thursday", count: 0 },
        { id: 7, on: false, day: "Friday", count: 0 }
        ,
      ],
      scheduleList: {
        Sunday: [{ opening: "", closing: "" }],
        Saturday: [{ opening: "", closing: "" }],
        Monday: [{ opening: "", closing: "" }],
        Tuesday: [{ opening: "", closing: "" }],
        Wednesday: [{ opening: "", closing: "" }],
        Thursday: [{ opening: "", closing: "" }],
        Friday: [{ opening: "", closing: "" }],
      },
      allDays: {
        Saturday: [],
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
      },
      countList: 0,
      displaySchedule: false,
      // saveDataClosing: "",
      // saveDataOpening: "",
      selectDay: null,
      hideDelete: false,
      ////////////////////
      imageFile: null,
      previewImageUrl: null,
      /////////////////////////
      previewImage: null,
      startDate: moment(), // Initialize with today's date
      //////////////////////////////
      products: null,
      yesterday: null,
      todayDate: null,
      tomorrowDate: null,
      anyDate: null,
      images: [
        { id: 1, src: require("@/assets/search/slider_1.svg"), alt: "Image from 1" },
        { id: 2, src: require("@/assets/search/slider_2.svg"), alt: "Image 2" },
        { id: 3, src: require("@/assets/search/slider_3.svg"), alt: "Image 3" },
        { id: 4, src: require("@/assets/search/slider_4.svg"), alt: "Image 4" },
        { id: 5, src: require("@/assets/search/slider_2.svg"), alt: "Image 5" },
        { id: 6, src: require("@/assets/search/slider_4.svg"), alt: "Image 6" },
        { id: 7, src: require("@/assets/search/slider_1.svg"), alt: "Image 7" },
        { id: 8, src: require("@/assets/search/slider_3.svg"), alt: "Image 8" },
        { id: 9, src: require("@/assets/search/slider_4.svg"), alt: "Image 9" },
        { id: 10, src: require("@/assets/search/slider_1.svg"), alt: "Image 10" },

      ],

      ////////////////////////////////
      containsBooking: [
        { day: 'Friday', },
        // {day:'Saturday', appointmentFrom:'03:00 AM',appointmentTo:'04:00 AM '},
        { day: 'Sunday', appointmentFrom: '5:30 AM', appointmentTo: '06:30 AM' },
        { day: 'Monday', appointmentFrom: '04:00 AM', appointmentTo: '04:30 AM ' },
        { day: 'Tuesday', appointmentFrom: '04:30 AM', appointmentTo: '05:00 AM ' },
        { day: 'Wednesday', appointmentFrom: '04:00 AM', appointmentTo: '06:30 AM ' },
        { day: 'Wednesday', appointmentFrom: '09:00 AM', appointmentTo: '12:30 AM ' },
        { day: 'Thursday', appointmentFrom: '03:00 PM', appointmentTo: '06:00 PM ' },
        // {day:'Wednesday',  appointmentFrom:'04:30 pm',appointmentTo:'06:30 pm' },
        // {day:'Thursday', appointmentFrom:'03:00 PM',appointmentTo:'06:00 PM ' },
        // {day:'Tuesday', appointmentFrom:'03:30 pm',appointmentTo:'05:30 pm'},
        // {day:'Wednesday', appointmentFrom:'03:30 pm',appointmentTo:'05:30 pm'},
        // {day:'TODAY', appointmentFrom:'01:30 pm',appointmentTo:'07:30 pm'},

      ],
      ////////////////////////
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      orderedDays: [],
      /////////////////////
      items: [
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
        // Add more items as needed
      ],
      //////////////////////
      firstname: "",
      lastname: "",
      age: 26,
      count: 0,
      ///////////////
      name: 'Randa Ali',
      myClass: ['class1', 'class2', 'class3'],
      isValid: true,
      postData: {
        userId: '',
        title: '',
        body: '',
      },
      responseData: {},
      fetchingData: false,
      ///////////Knob////////////////////
      value: 50,
      person: {
        name: '',
        age: null
      },
      changedName: '',
      changedAge: '',
      // ********Crud*****************
      inputOne: "",
      inputTWO: "",
      records: [],
      inputOneEdit: "",
      inputTWOEdit: "",
      editDialog: false,
      checkIndex: "",
      // **************simple & active***************
      optionValue: "Simple",
      toggleValue: false,
      distant: {
        select1: '',
        select2: '',
        select3: '',
        select4: '',
        select5: '',
        select6: '',
        select7: '',

      },
      near: {
        select1: '',
        select2: '',
        select3: '',
        select4: '',
        select5: '',
        select6: '',
        select7: '',
      },
      ////////////////////////////////
      backendWeekdays: ['Monday', 'Wednesday', 'Friday'], // Replace this with your backend data
      generatedDates: [],
      dateList: [],
      mergeAppointment: [],
      //////////////////////
      // combinedAppointments:{},
      combinedAppointments: [],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ],
    };
  },
  validations: {
    // days: {
    //   $each: {
    //     openingTime:required,
    //       // timeBefore: timeBefore('closingTime')
    //     closingTime: required,
    //   }
    // }
  },
  created() {
    this.todayDate = moment().format('dddd');
    this.anyDate = moment().add(2, 'day').format('dddd');
    this.tomorrowDate = moment().add(1, 'day').format('dddd');
    this.yesterday = moment().subtract(1, 'day').format('dddd');
    this.generateDates();
    /////////////////////////////
    this.contentSumAppointment();


    // this.orderDaysFromToday();
    ///////////////////////////////////
    //////////////////////////////
    // const backendArray = [
    //  // ... your data from the backend
    // ];

    //  contentSumAppointment(backendArray);


  },
  watch: {
    'person.name': function (oldVal, newVal) {
      // console.log(oldVal)
      this.changedName = `Name change from ${oldVal} to ${newVal}`;

    },
    count(newValue, oldValue) {
      if (newValue > oldValue && newValue === 5) {
        alert('Increasing the volume past 5 may damage your hearing');
      }
    },
    //////////////////////
    countSubTime(newValue, oldValue){
      this.countSubTime = newValue;
      console.log(newValue);
      console.log(oldValue);
    },
    //////////////////////////
    'days': {
      deep: true,
      handler(newDays, oldDays) {
        newDays.forEach((day, index) => {  
          const unwatchOn = this.$watch(() => day.on, (newValue, oldValue) => {
            if (index === this.indexData && newValue === false) {
                this.$set(this.days[index],'subtimes',[]);
                this.days[index].openingTime = "";
                this.days[index].closingTime = "";
                this.days[index].checkTimeOpening = false;
                this.days[index].checkTimeClosing = false;
            }
          });
          const unwatchOpeningTime = this.$watch(() => day.openingTime, (newValue, oldValue) => {
            if (index === this.selectOpeningIndex && day.on) {
              const startTime = newValue;
              const startTimeMoment = moment(startTime, 'hh:mm'); 
              const closingTime = day.closingTime; 
              const closingTimeMoment = moment(closingTime, 'hh:mm'); 
              // if (startTimeMoment.isAfter(closingTimeMoment) || newValue == "" || newValue == null) {
              //   console.log("Current time is after unwatchClosingTime closing time");
              //   day.checkTimeOpening = false;
              // } else {
              //   console.log("Current time is not after unwatchClosingTime closing time");
              //   day.checkTimeOpening = true;
              // }
              //////////////////
              // const startTime = moment(newValue, 'hh:mm'); 
              // console.log("startTime opening==>",startTime );
              // const currentTime = moment();
              // const currentTimeMoment = moment(currentTime, 'hh:mm');
              // console.log("currentTimeMoment opening==>",currentTimeMoment );
              // if (currentTimeMoment.isBefore(startTime) || newValue == "" || newValue == null) {
              //   console.log("Current time is after opening time");
              //   day.checkTimeOpening = false;
              // } else {
              //   console.log("Current time is not after opening time");
              //   day.checkTimeOpening = true;
              // }
            }
          });
          const unwatchClosingTime = this.$watch(() => day.closingTime, (newValue, oldValue) => {
            if (index === this.selectClosingIndex && day.on) {
              const startTime = day.openingTime;
              const startTimeMoment =moment(startTime, 'hh:mm'); 
              const closingTime = moment(newValue, 'hh:mm'); 
              if (startTimeMoment.isBefore(closingTime) || newValue == "" || newValue == null) {
                console.log("Current time is after unwatchClosingTime opening time");
                day.checkTimeClosing = false;
              } else {
                console.log("Current time is not after unwatchClosingTime opening time");
                day.checkTimeClosing = true;
              }
            }
          });
          const unwatchSubtimes = this.$watch(() => day.subtimes, (newValue, oldValue) => {
            if (newValue.length > 0) {
              newValue.forEach(item=>{
                console.log("from item outside check",item)
                // if(item ==`${item.day}Opening${item.count}`){
                //   console.log(`${item}`);
                // }
              })
            } else {
              console.log("Subtimes length is 0 for " + day.label);
            }
          });
    
        this.$once('hook:beforeDestroy', () => {
          unwatchOn();
          unwatchOpeningTime();
          unwatchClosingTime();
          unwatchSubtimes();
        });
        });
         }
    },

    //////////////////////////
    
    // openingTimeError(index) {
    //   // console.log("from openingTimeError index = ",index)
    //   // const dayValidation = this.$v.days[index];
    //   // // Check if dayValidation and dayValidation.openingTime are defined
    //   // if (dayValidation && dayValidation.$each && dayValidation.$each[index]) {
    //   //   return dayValidation.$each[index].openingTime.$error && !dayValidation.$each[index].$params.openingTime.required;
    //   // }
    //   return false;
    // },
    // closingTimeError(index) {
    //   // console.log("closingTimeError day on from validation",day.on)
    //   console.log("from closingTimeError index = ",index)

    //   // const dayValidation = this.$v.days[index];///////
    //   // Check if dayValidation and dayValidation.openingTime are defined
    //   // if (dayValidation && dayValidation.$each && dayValidation.$each[index]) {
    //   //   return dayValidation.$each[index].closingTime.$error && !dayValidation.$each[index].$params.closingTime.required;
    //   // }
    //   return false;
    // },

    /////////////////
  },
  mounted() {
    this.createPost();
    ///////////////////////
    this.orderBookingList();
    //   this.generateDates();


  },
  methods: {
    requiredError,
    inputError,
    
    //////////////////////
    handleCheckboxChange(index) {
      this.indexData = index;
      // console.log(`Checkbox  index day for ${index} `);
    },
    // handleOpeningTimeChange(index) {
    //   // console.log("handleOpeningTimeChange",index)
    //   if (day.openingTime && day.closingTime && day.openingTime.isAfter(day.closingTime)) {
    //     this.days[index].checkTimeOpening = true;
    //   } else {
    //     this.days[index].checkTimeOpening = false;
    //   }
    // },
    // handleClosingTimeChange(index) {
    //   // console.log("handleClosingTimeChange",index)

    //   if (day.openingTime && day.closingTime && day.openingTime.isAfter(day.closingTime)) {
    //     this.days[index].checkTimeOpening = true;
    //   } else {
    //     this.days[index].checkTimeOpening = false;
    //   }
    // },
    // handleOpeningTimeChange(index){
    //    console.log("handleOpeningTimeChange",index)
    // },
    ////////////////
    addTime(day, index) {
        if(this.days[index].checkTimeOpening == false && this.days[index].checkTimeClosing == false ) {
          this.indexData = index;
          this.countSubTime = ++day.count;
          const newSchedule = {
            index: index,
            day: day.id,
            count: this.countSubTime,
            [`${day.id}Opening${this.countSubTime}`]: "",
            [`${day.id}Closing${this.countSubTime}`]: "",
          };
          this.days[index].subtimes.push(newSchedule);
          this.displaySubTime = true;
      }
    },
    deleteSubTime(day, index) {
      console.log("from day",day)
      if (this.days[index].subtimes.length == 1) {
        this.countSubTime = day.count = 0;
        console.log("from submit count ",this.countSubTime)
        this.days[index].subtimes.pop();
        this.displayDelete = true;
      }
      else {
        this.countSubTime =--day.count;
        this.displayDelete = false;
        this.days[index].subtimes.pop();
      }
    },
    selectOpeningSchedule(event, schedule) {
      // console.log("from event ", event)
      // console.log("from schedule ", schedule)
    },
    selectClosingSchedule(event, schedule) {
      // console.log("from event ", event)
      // console.log("from schedule ", schedule)
    
    },
    selectOpening(event, schedule, index) {
      console.log("selectOpeningIndex",index)
      this.selectOpeningIndex = index;
      console.log("from selectOpening event  ", event)
      console.log("from selectOpening schedule ", schedule)
      // this.saveDataOpening= this.$moment(event, "HH:mm", true).format("HH:mm A");
      // this.days[index].openingTime = this.$moment(event, "HH:mm", true).format("HH:mm A");
      // console.log("selectClosingSchedule saveDataOpening",  this.saveDataOpening)
    },
    selectClosing(event, schedule, index) {
      console.log("selectClosingIndex",index)
      this.selectClosingIndex = index;
      console.log("from selectClosing event ", event)
      console.log("from selectClosing schedule ", schedule)
      // this.saveDataClosing = this.$moment(event, "HH:mm", true).format("HH:mm A");
      // this.days[index].closingTime = this.$moment(event, "HH:mm", true).format("HH:mm A");
      // console.log("selectClosingSchedule saveDataClosing",this.saveDataClosing)
    },
    //////////////////////////////////
    selectOpeningSubtimes(event, schedule, index, count) {
      console.log("selectOpeningIndex",index)
      console.log("selectOpeningSubtimes count",count)
      this.saveDataOpeningSubtimes = index;
      console.log("from selectOpening event  ", event)
      console.log("from selectOpening schedule ", schedule)
      // this.saveDataOpening= this.$moment(event, "HH:mm", true).format("HH:mm");
      // this.days[index].openingTime = this.$moment(event, "HH:mm", true).format("HH:mm");
      // console.log("selectClosingSchedule saveDataOpening",  this.saveDataOpening)
    },
    selectClosingSubtimes(event, schedule, index,count) {
      console.log("selectClosingIndex",index)
      console.log(" selectClosingSubtimes count",count)
      this.saveDataClosingSubtimes = index;
      console.log("from selectClosing event ", event)
      console.log("from selectClosing schedule ", schedule)
      // this.saveDataClosingSubtimes = this.$moment(event, "HH:mm", true).format("HH:mm");
      // // this.days[index].closingTime = this.$moment(event, "HH:mm", true).format("HH:mm");
      // console.log("selectClosingSchedule saveDataClosing",this.saveDataClosing)
    },
    ////////////////////////////
    handleFileChange2(event) {
      const file = event.target.files[0];
      const fileName = event.target.files[0].name;
      if (file) {
        this.imageFile = file;
        // Read Image Display
        this.previewImageUrl = URL.createObjectURL(file);
        // console.log("from file name", fileName)
        // convert image as form data
        const formData = new FormData();
        formData.append('image', this.imageFile);
        // console.log("from image File", this.imageFile)
        // console.log("from previewImageUrl", this.previewImageUrl)
      }
    },
    //////////////////////////
    uploadImageSave(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        // console.log(this.previewImage);
      };
      const URL = 'http://foobar.com/upload';
      let data = new FormData();
      // data.append('name', 'my-picture');
      // console.log("from fuplode file", e.target.files[0].name)
      data.append('file', e.target.files[0]);
      let config = {
        header: {
          'Content-Type': 'image/png'
        }
      }
      axios.put(URL, data, config).then(response => {
        // console.log('image upload response > ', response)
      })
    },


    //////////////////////////////////
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage2 = URL.createObjectURL(file);
        this.imageFile = file;
      }
    },
    // saveImage() {
    //   // Use this.imageFile to access the selected image file and upload/save it
    // },
    //////////////////////////////////////////
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
        this.saveImage(file);
      }
    },
    saveImage(file) {
      const formData = new FormData();
      formData.append('image', file);
      this.$emit('save', formData);
    },
    /////////////////////////////////
    uploadImage(event) {
      const file = event.target.files[0];
      // console.log("file" + file);


      // Create a FormData object
      const formData = new FormData();
      // console.log("formData" + formData);

      // Append the file to FormData
      formData.append('image', file);
      // console.log("fileformData" + formData.append('image', file));
    },
    //////////////orderBookingList from backEnd//////////////////////
    orderBookingList() {
      const today = moment().format('dddd');
      ////////// combinedAppointments//////////
      // console.log("orderBookingList from today:: ==>> " + today)
      // console.log("orderBookingList from combinedAppointments" + this.combinedAppointments)
      const todayIndex = this.combinedAppointments.findIndex(booking => booking.day === today);
      // console.log("todayIndex==> " + todayIndex)
      if (todayIndex === -1) {
        console.error('Today is not found in containsBooking.');
        return;
      }
      // Reorder the containsBooking array starting from today
      const orderedList = [
        ...this.combinedAppointments.slice(todayIndex),
        ...this.combinedAppointments.slice(0, todayIndex),
      ];
      // console.log("orderedList from randa" + orderedList);
      this.combinedAppointments = orderedList;

    },
    goToPage(index) {
      this.activeIndex = index;
    },
    //////////////contentSumAppointment==>arrayFromBackend/////////////////////
    // contentSumAppointment(arrayFromBackend) {
    //   // Ensure the provided array is not empty
    //   if (!arrayFromBackend || arrayFromBackend.length === 0) {
    //     console.error('Input array is empty or undefined.');
    //     return [];
    //   }

    //   this.combinedAppointments = [];

    //   arrayFromBackend.forEach(appointment => {
    //     const day = appointment.day;

    //     if (!this.combinedAppointments.find(item => item.day === day)) {
    //       this.combinedAppointments.push({
    //         day: day,
    //         appointments: [],
    //       });
    //     }

    //     if (appointment.appointmentFrom && appointment.appointmentTo) {
    //       this.combinedAppointments.find(item => item.day === day).appointments.push({
    //         appointmentFrom: appointment.appointmentFrom,
    //         appointmentTo: appointment.appointmentTo,
    //       });
    //     }
    //   });

    //   console.log(this.combinedAppointments);
    //   return this.combinedAppointments;
    // },
    /////////////////////////////////
    getDayName(day, lista) {
      // console.log("form day", day);
      // console.log("form lista", lista);
      var contentValue = lista.filter((ele) => ele === day);
      return contentValue;
    },
    ////////////////////////////////
    contentSumAppointment() {
      const array1 = [
        { day: 'Friday' },
        { day: 'Saturday', appointmentFrom: '03:00 AM', appointmentTo: '04:00 AM' },
        { day: 'Sunday', appointmentFrom: '5:30 pm', appointmentTo: '06:30 pm' },
        { day: 'Monday', appointmentFrom: '10:00 AM', appointmentTo: '04:30 AM' },
        { day: 'Monday', appointmentFrom: '08:00 AM', appointmentTo: '04:30 AM' },
        { day: 'Tuesday', appointmentFrom: '04:30 AM', appointmentTo: '05:00 AM' },
        { day: 'Tuesday', appointmentFrom: '04:30 AM', appointmentTo: '05:00 AM' },
        { day: 'Wednesday', appointmentFrom: '04:00 AM', appointmentTo: '06:30 AM' },
        { day: 'Wednesday', appointmentFrom: '09:00 AM', appointmentTo: '12:30 AM' },
        { day: 'Thursday', appointmentFrom: '03:00 PM', appointmentTo: '06:00 PM' },
        { day: 'Thursday', appointmentFrom: '08:00 PM', appointmentTo: '12:00 PM' },
      ];

      this.combinedAppointments = [];

      array1.forEach(appointment => {
        const day = appointment.day;
        if (!this.combinedAppointments.find(item => item.day === day)) {
          this.combinedAppointments.push({
            day: day,
            appointments: [],
          });

        }
        if (appointment.appointmentFrom && appointment.appointmentTo) {
          this.combinedAppointments.find(item => item.day === day).appointments.push({
            appointmentFrom: appointment.appointmentFrom,
            appointmentTo: appointment.appointmentTo,
          });
        }
      });

      // console.log("combinedAppointments from contentSumAppointment"+this.combinedAppointments);
      return this.combinedAppointments;
    },
    ///////////////////////////////////////
    // sections() {
    //     return (booking) =>{
    //         //////////////////////////////////
    //       const sections = [];
    //       const now = moment();
    //       const currentTimestamp = now.valueOf(); 
    //       console.log("currentTimestamp==>"+currentTimestamp)
    //       console.log("time now from Randa==> " + now);
    //       console.log("time appointmentFrom from Randa==> " + booking.appointmentFrom);
    //       const openingTime = moment(booking.appointmentFrom, "hh:mm A");
    //       const lets = now.isSameOrAfter(openingTime);
    //       console.log("lets::==> " + lets);
    //       if(lets) {
    //           console.log("openingTime Randa==>" + openingTime);
    //           const closingTime = moment(booking.appointmentTo, "hh:mm A");
    //           console.log("closingTime Randa Ali==>" +closingTime)
    //           const sectionDuration = this.sectionDuration;
    //           const diffInMinutes = closingTime.diff(openingTime, "minutes");
    //           const numberOfSections = Math.floor(diffInMinutes / sectionDuration);
    //           let startTime = openingTime.clone();
    //           for (let i = 0; i < numberOfSections; i++) {
    //             const endTime = startTime.clone().add(sectionDuration, "minutes");
    //             sections.push({
    //               sectionNumber: i + 1,
    //               openingTime: startTime.format("hh:mm A"),
    //               closingTime: endTime.format("hh:mm A"),
    //             });
    //             startTime = endTime;
    //           }
    //         // return  [...this.containsBooking,...this.dateList,...sections ];
    //         return sections;
    //       }
    //       else{
    //         // return  [...this.containsBooking,...this.dateList,...sections ];
    //         return  sections ;
    //       }  
    //     }
    // },
    //////////////////////////////
    generateDates() {
      this.dateList = [];
      for (let i = 0; i < 7; i++) { // Generate dates for 5 weeks (you can adjust as needed).format('dddd')
        this.dateList.push(moment(this.startDate).add(i, 'days'));
      }
    },
    ///////////////////////////


    //   orderDaysFromToday() {
    //   const today = moment().format('dddd'); // Get the current day
    //   const startingIndex = this.daysOfWeek.indexOf(today);

    //   // Reorder the days of the week starting from today
    //   this.orderedDays = [
    //       ...this.daysOfWeek.slice(startingIndex),
    //       ...this.daysOfWeek.slice(0, startingIndex),
    //   ];
    //  },
    ///////////////////////////////
    //    generateDates() {
    //         const startDate = moment(); // You can set a specific start date if needed
    //         const numberOfDays = 7; // Adjust as needed

    //         for (let i = 0; i < numberOfDays; i++) {
    //             const currentDate = startDate.clone().add(i, 'days');
    //             this.generatedDates.push(currentDate);
    //         }
    //         },
    //         isWeekdayInList(weekday) {
    //         return this.backendWeekdays.includes(weekday);
    //      },

    ///////////////////////////////
    // async fetchApi(){
    //     // const API ='https://api.adviceslip.com/advice' ====>https://my.api.mockaroo.com/object.json?key=c45d22e0";
    //     await axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((response)=>{
    //       this.responseData =cloneDeep(response.data) ;
    //       console.log(this.responseData);

    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    //     // await axios.get("https://my.api.mockaroo.com/object.json?key=c45d22e0")
    //     // // .then((response)=>{
    //     //   this.responseData = fetchResponsive.data;
    //     //   console.log(this.responseData);

    //     // })
    //     // .catch((error)=>{
    //     //     console.log(error);
    //     // })


    // },
    // async loadFetchApi(){
    //   this.fetchingData = true;
    //   const fetchResponsive = await axios.get("https://my.api.mockaroo.com/object.json?key=c45d22e0")
    //   this.responseData.push(...(fetchResponsive.data))
    //   this.fetchingData = false;
    // },
    ///////////////function-methods//////////////////
    functiontwo() {
      return 'hello world'
    },
    ////arrow function////
    //  greeting:(name)=>'hllo'+name,




    ///////////arrow function////////////////
    greeting: (name) => {
      return 'welcome' + name;
    },
    getFirstName(event) {
      this.firstname = event.target.value
    },
    getLastName(event) {
      this.lastname = event.targt.value;
    },
    changeName() {
      this.name = 'seham abdallah'
    },
    changeAage() {
      this.age = '23'
    },
    ////////////////////////

    /////////////////////
    //    getInput(event) {
    //     this.name = event.target.value
    //     console.log(event)
    //   },
    getInput(event, lastName) {
      this.name = event.target.value + " " + lastName
      // console.log(event)
      // console.log(this.name)
    },


    // **********CRUD*******************************
    hello() {
      let cotentHello = "hello edabit.com";
      contentLowerCase = cotentHello.lowerToCase()
      // console.log(contentLowerCase);
      return contentLowerCase;
    },
    addRow() {
      const data = {
        inputOne: this.inputOne,
        inputTWO: this.inputTWO,
      }
      if (this.inputOne && this.inputTWO != null) {
        this.records.push(data);
        this.inputOne = '';
        this.inputTWO = '';
      }
    },
    editRecord(index) {
      // console.log(index);
      this.checkIndex = index;
      this.editDialog = true;
      this.inputOneEdit = this.records[index].inputOne;
      this.inputTWOEdit = this.records[index].inputTWO;
      // console.log(this.inputOneEdit)
      // console.log(this.inputOneEdit)


    },
    saveRecord() {
      // console.log(this.checkIndex);
      this.records[this.checkIndex].inputOne = this.inputOneEdit;
      this.records[this.checkIndex].inputTWO = this.inputTWOEdit;
      this.inputOneEdit = "";
      this.inputTWOEdit = "";
      this.editDialog = false;


    },
    deleteRecord(record) {
      // console.log(record);
      this.records.splice(record, 1);
    },
    cancel() {
      this.editDialog = false;
    },
    ///////*************SIMPLE & ACTIVE************///////////
    downData() {
      const distant = cloneDeep(this.distant);
      this.near = distant;
    },
    upData() {
      const near = cloneDeep(this.near);
      near = this.distant;
    },
    /////////////////////////////
    async createPost() {
      await axios.post('https://jsonplaceholder.typicode.com/posts', this.postData)
        .then((res) => {
          // console.log(res.data);
        })
    }

  },
  computed: {
    // filteredAppointments() {
    //   const today = this.todayDate;
    //   return this.containsBooking.map(item => {
    //     const appointments = this.containsBooking.filter(appointment => appointment.day === today);
    //     return { ...item, appointments };
    //   });
    // },
    ////////////////////////////
    // carouselItems() {
    //   const today = moment().format('dddd');
    //   const tomorrow = moment().add(1, 'day').format('dddd');
    //   const dayAfterTomorrow = moment().add(2, 'days').format('dddd');

    //   const items = [
    //     { day: today, dayContent: 'TODAY' },
    //     { day: tomorrow, dayContent: 'TOMORROW' },
    //     // You can add more items for subsequent days if needed
    //     // { day: dayAfterTomorrow, dayContent: 'Day After Tomorrow' },
    //   ];

    //   return items;
    // },
    ////////////////////
   
    /////////////////////////////
    sections() {
      return (booking) => {
        // let booking = booking;
        //////////////////////////////////
        const sections = [];
        const now = moment();
        const currentTimestamp = now.valueOf();
        // console.log("currentTimestamp==>" + currentTimestamp)
        // console.log("time now from Randa==> " + now);
        // console.log("time appointmentFrom from Randa==> " + booking.appointmentFrom);
        const openingTime = moment(booking.appointmentFrom, "hh:mm A");
        const lets = now.isSameOrAfter(openingTime);
        // console.log("lets::==> " + lets);
        if (lets) {
          // console.log("openingTime Randa==>" + openingTime);
          const closingTime = moment(booking.appointmentTo, "hh:mm A");
          // console.log("closingTime Randa Ali==>" + closingTime)
          const sectionDuration = this.sectionDuration;
          const diffInMinutes = closingTime.diff(openingTime, "minutes");
          const numberOfSections = Math.floor(diffInMinutes / sectionDuration);
          let startTime = openingTime.clone();
          for (let i = 0; i < numberOfSections; i++) {
            const endTime = startTime.clone().add(sectionDuration, "minutes");
            sections.push({
              sectionNumber: i + 1,
              openingTime: startTime.format("hh:mm A"),
              closingTime: endTime.format("hh:mm A"),
            });
            startTime = endTime;
          }
          // return  [...this.containsBooking,...this.dateList,...sections ];
          return sections;
        }
        else {
          // return  [...this.containsBooking,...this.dateList,...sections ];
          return sections;
        }
      }
    },
    // mergedBookingArrays(){
    //     return [...this.containsBooking,...this.dateList, ];
    // },
    fullName() {
      return this.firstname + " " + this.lastname;
    }
  }
}
</script>
<style scoped lang="scss">
.custom-file-input {
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding: 10px 20px;
  background-color: #fff;
  color: black;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    // background-color: darken(#56c956, 10%);
    border: 1px solid #56c569;
    border-radius: 0.5rem;
  }

  .hidden-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
  }
}

/* .change-indecator{
background-color: aquamarine;
} */
// /deep/ .p-carousel-items-container {
//     display: flex;
//     flex-direction: column !important;
// }
///////////////column//////////
/deep/ .p-carousel-container {
  // width:100%;

}

// /deep/ .p-carousel-item {
//   border-radius: 2rem;
//   box-shadow: inset 0 0 10px rgba(86, 197, 150, 0.8);
//   margin:0.2rem;
//   padding: 2rem 0;

// }
/////////////////////////////////////////
.booking-item {
  height: 100%;
  border-radius: 2rem;
  box-shadow: inset 0 0 10px rgba(86, 197, 150, 0.8);
  margin: 0 0.3rem;
  padding: 1.5rem 0;


}

.booking-item-content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .bookings,
  .no-bookings {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

/* //////////////////////////// */
/* .p-carousel-items-container {
  flex-direction: column;
} */
// .carousel-container {
// position: relative;
// }

// .vertical-content {
// display: flex;
// flex-direction: column;
// height: 100%;
// }



// .horizontal-indicators {
// position: absolute;
// bo: 8px;
// }ttom: 0;
// left: 50%;
// transform: translateX(-50%);
// display: flex;
// gap

// .horizontal-indicators button {
// background-color: #ddd;
// border: none;
// width: 10px;
// height: 10px;
// border-radius: 50%;
// cursor: pointer;
// }

// .horizontal-indicators button.p-filled {
// background-color: #333;
// }
// /* /////////////////// */
// .p-carousel-indicators{
// background-color: #566964;

// }
// .carousel-container {
//   height: 300px; /* Set the fixed height for the carousel container */
//   overflow: hidden; /* Hide content that exceeds the fixed height */
// }
// .custom-height{
//   height:500px;
// }
// .carousel-item {

//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

// }

.class1 {
  font-weight: bold;
}

.class2 {
  color: blueviolet;
}

.class3 {
  font-style: italic;
}

.valid {

  color: blue;
}

.invalid {

  color: red;
}

.outer {
  border: 5px solid black;
  width: 100%;
}

.box {
  background-color: rebeccapurple;
  width: calc(100% - 30px);
  color: white;
  padding: 10px;
}

.rotate {
  transform: rotate(0.62turn);
  margin: 70px;
  height: 100px;
  width: 100px;
  background-color: rebeccapurple;
}

.content-buttons {
  width: 100%;
  padding: 20px;
  border: 5px solid red;
  display: flex;

}

button:first-child {
  align-self: flex-start;

}

// html,body{
//     margin:0;
//     padding:0
// }
section {
  height: 100vh;
  display: grid;
  justify-items: center;
  padding-top: 40px
}

// div{
//     margin:24px auto
// }
label {
  font-weight: bolder;
  display: block;
  margin-bottom: 4px
}
</style>
