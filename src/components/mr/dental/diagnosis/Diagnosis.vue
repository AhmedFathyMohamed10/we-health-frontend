<template>
    <div class="">
        <div class="row">
            <div class="col-xl-10 col-lg-9 col-md-9 col-sm-12">
                <div class="form-group">
                    <label class="form-label">Category</label>
                    <div class="p-inputgroup">
                        <Dropdown
                            v-model="data[selectedType.english].toothChart.category"
                            :options="options[selectedType.english].diagnosisSubOptions"
                            placeholder="Please choose a category"
                            :optionLabel="'english'"
                        />
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-12">
                <AddButton @add="displayCategoryDialogMethod"></AddButton>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-10 col-lg-9 col-md-9 col-sm-12">
                <div class="form-group">
                    <label class="form-label">Category type</label>
                    <Dropdown
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english != 'input' &&
                        data[selectedType.english].toothChart.category.english != 'Orto, Facial, TMJ' &&
                        data[selectedType.english].toothChart.category.english !=
                        'Fraction / Damaged' &&
                        data[selectedType.english].toothChart.category.english != 'Restorative color' &&
                        data[selectedType.english].toothChart.category.english !=
                        'Prevention Hygiene' &&
                        data[selectedType.english].toothChart.category.english != 'Other Surgery'
                        "
                        v-model="
                        data[selectedType.english].toothChart.categoryType[
                        data[selectedType.english].toothChart.category.english
                        ]
                        "
                        :options="
                        options[selectedType.english].diagnosisActions.categoryTypeActions[
                        data[selectedType.english].toothChart.category.english
                        ]
                        "
                        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                        placeholder="Please choose a category type"
                        >
                    </Dropdown>
                    <Dropdown
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'Orto, Facial, TMJ'
                        "
                        v-model="data[selectedType.english].toothChart.categoryType.ortoFacialTMJ"
                        :options="
                        options[selectedType.english].diagnosisActions.categoryTypeActions.ortoFacialTMJ
                        "
                        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                        >
                    </Dropdown>
                    <Dropdown
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'Restorative color'
                        "
                        v-model="data[selectedType.english].toothChart.categoryType.restorativeColor"
                        :options="
                        options[selectedType.english].diagnosisActions.categoryTypeActions
                        .restorativeColor
                        "
                        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                        >
                    </Dropdown>
                    <Dropdown
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'Prevention Hygiene'
                        "
                        v-model="data[selectedType.english].toothChart.categoryType.preventionHygiene"
                        :options="
                        options[selectedType.english].diagnosisActions.categoryTypeActions
                        .preventionHygiene
                        "
                        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                        >
                    </Dropdown>
                    <Dropdown
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'Other Surgery'
                        "
                        v-model="data[selectedType.english].toothChart.categoryType.otherSurgery"
                        :options="
                        options[selectedType.english].diagnosisActions.categoryTypeActions.otherSurgery
                        "
                        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                        >
                    </Dropdown>
                    <Dropdown
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'Fraction / Damaged'
                        "
                        v-model="data[selectedType.english].toothChart.categoryType.fraction"
                        :options="
                        options[selectedType.english].diagnosisActions.categoryTypeActions.fraction
                        "
                        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                        >
                    </Dropdown>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-12">
                <AddButton @add="displayCategoryTypeDialogMethod"></AddButton>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-10 col-lg-9 col-md-9 col-sm-12">
                <div class="form-group">
                    <label class="form-label">Style</label>
                    <div class="p-inputgroup">
                        <Dropdown
                            v-if="
                            renderComponent &&
                            data[selectedType.english].toothChart.category.english != 'input' &&
                            data[selectedType.english].toothChart.category.english != 'orthodontic' &&
                            data[selectedType.english].toothChart.category.english != 'fractures' &&
                            data[selectedType.english].toothChart.category.english != 'Restorative color' &&
                            data[selectedType.english].toothChart.category.english != 'Prevention Hygiene'
                            "
                            v-model="
                            data[selectedType.english].toothChart.style[
                            data[selectedType.english].toothChart.category.english
                            ]
                            "
                            :options="
                            options[selectedType.english].diagnosisActions.styleActions[
                            data[[selectedType.english]].toothChart.category.english
                            ]
                            "
                            :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            placeholder="Please choose a style"
                            >
                        </Dropdown>
                    </div>
                    <div
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'orthodontic'
                        "
                        >
                        <Dropdown
                            v-model="data[selectedType.english].toothChart.style.orthodontic.mainOption"
                            :options="
                            options[selectedType.english].diagnosisActions.styleActions.orthodontic[
                            data[selectedType.english].toothChart.categoryType.orthodontic.english
                            ]
                            "
                            :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            >
                        </Dropdown>
                        <div
                            v-if="
                            renderComponent &&
                            data[selectedType.english].toothChart.style.orthodontic.mainOption.english &&
                            ['metal', 'ceramic', 'transparent', 'wire', 'transparent'].find(
                            (style) =>
                            style ===
                            data[selectedType.english].toothChart.style.orthodontic.mainOption.english
                            )
                            "
                            >
                            <label class="form-label">Type</label>
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.style.orthodontic.type"
                                :options="
                                options[selectedType.english].diagnosisActions.styleActions.orthodontic.type
                                "
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                                >
                            </Dropdown>
                        </div>
                    </div>
                    <div
                        class="fractures"
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'fractures'
                        "
                        >
                        <div
                            v-if="
                            options[selectedType.english].diagnosisActions.styleActions.fractures[
                            data[selectedType.english].toothChart.categoryType.fractures.english
                            ]
                            "
                            >
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.style.fractures"
                                :options="
                                options[selectedType.english].diagnosisActions.styleActions.fractures[
                                data[selectedType.english].toothChart.categoryType.fractures.english
                                ]
                                "
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                                >
                            </Dropdown>
                        </div>
                        <div
                            v-else-if="
                            data[selectedType.english].toothChart.categoryType.fractures.english ==
                            'Severely Damaged'
                            "
                            >
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.style.fractures"
                                :options="
                                options[selectedType.english].diagnosisActions.styleActions.fractures
                                .severelyDamaged
                                "
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                                >
                            </Dropdown>
                        </div>
                        <div
                            v-else-if="
                            data[selectedType.english].toothChart.categoryType.fractures.english == 'Wear'
                            "
                            >
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.style.fractures"
                                :options="
                                options[selectedType.english].diagnosisActions.styleActions.fractures.wear
                                "
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                                >
                            </Dropdown>
                        </div>
                    </div>
                    <div
                        v-if="
                        renderComponent &&
                        data[selectedType.english].toothChart.category.english == 'Restorative color'
                        "
                        >
                        <div>
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.style.restorativeColor"
                                :options="
                                options[selectedType.english].diagnosisActions.styleActions.restorativeColor
                                "
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                                >
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-3 col-sm-12">
                <AddButton @add="displayStyleDialogMethod"></AddButton>
            </div>
        </div>
        <EditDialog
          :display="displayCategoryDialog"
          @close="closeCategoryDialog"
          @cancel="closeCategoryDialog"
          @save="addNewCategory"
          :min-width="'50vw'"
          :max-width="'90vw'"
          :min-height="'10vw'"
          :header="categoryDialogHeader">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="" class="form-label">Category</label>
                        <input
                          type="text"
                          placeholder="Please add a new category"
                          class="form-control"
                          v-model="newCategory"
                        />
                    </div>
                </div>
            </div>
        </EditDialog>
        <EditDialog
          :display="displayCategoryTypeDialog"
          @close="closeCategoryTypeDialog"
          @cancel="closeCategoryTypeDialog"
          @save="addNewCategoryType"
          :min-width="'50vw'"
          :max-width="'90vw'"
          :min-height="'10vw'"
          :header="categoryDialogHeader">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label class="form-label">Category</label>
                        <div class="p-inputgroup">
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.category"
                                :options="options[selectedType.english].diagnosisSubOptions"
                                placeholder="Please choose a category"
                                :optionLabel="'english'"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Category type</label>
                        <input
                          type="text"
                          placeholder="Please add a new category type"
                          class="form-control"
                          v-model="newCategoryType"
                        />
                    </div>
                </div>
            </div>
        </EditDialog>
        <EditDialog
          :display="displayStyleDialog"
          @close="closeStyleDialog"
          @cancel="closeStyleDialog"
          @save="addNewCategoryStyle"
          :min-width="'50vw'"
          :max-width="'90vw'"
          :min-height="'10vw'"
          :header="styleDialogHeader">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label class="form-label">Category</label>
                        <div class="p-inputgroup">
                            <Dropdown
                                v-model="data[selectedType.english].toothChart.category"
                                :options="options[selectedType.english].diagnosisSubOptions"
                                placeholder="Please choose a category"
                                :optionLabel="'english'"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Category type</label>
                        <div class="p-inputgroup">
                            <Dropdown
                                v-model="
                                data[selectedType.english].toothChart.categoryType[
                                data[selectedType.english].toothChart.category.english
                                ]
                                "
                                :options="
                                options[selectedType.english].diagnosisActions.categoryTypeActions[
                                data[selectedType.english].toothChart.category.english
                                ]
                                "
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                                placeholder="Please choose a category type"
                                >
                            </Dropdown>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Style</label>
                        <input
                          type="text"
                          placeholder="Please add a new style"
                          class="form-control"
                          v-model="newCategoryStyle"
                        />
                    </div>
                </div>
            </div>
        </EditDialog>
    </div>
</template>
<script>
    import AddButton from "@/components/global/utilities/CRUDAddButton"
    import EditDialog from '@/components/global/utilities/EditDialog.vue';

    export default {
      props: [
        "dataProp",
        "selectedType",
        "isCategoryOrderChanges",
        "toothsLabels",
        "optionsProp",
        "langProp",
        "proceduresAndDiagnosisDataProp",
      ],
    
      components: {
        AddButton,
        EditDialog
      },
      created() {
        this.language = {
          ...this.lang,
          en: {
            teeth: "Selected Teeth",
            ...this.lang.en,
          },
          ar: {
            teeth: "Selected Teeth",
            ...this.lang.ar,
          },
        };
      },
      data() {
        return {
          data: this.dataProp,
          options: this.optionsProp,
          proceduresAndDiagnosisData: this.proceduresAndDiagnosisDataProp,
          lang: this.langProp,
          local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
          inputButtonCount: 1,
          language: null,
          prevCategory: {
            english: null,
            arabic: null,
          },
          prevStyle: {
            english: null,
            arabic: null,
          },
          newCategory: null,
          newCategoryType: null,
          newCategoryStyle: null,
          renderComponent: true,
    
          tempCategoryButtonsOrder: [],
          selectedTab:"reasonForVisit",
          tabs: [
            {
              en: "Reason For Visit",
              ar: "Reason For Visit",
              key: "reasonForVisit",
            },
            {
              en: "Chief Complaint",
              ar: "Chief Complaint",
              key: "chiefComplaint",
            },
          ],
          displayCategoryDialog: false,
          displayCategoryTypeDialog: false,
          displayStyleDialog: false,
          categoryDialogHeader: "Add new category",
          categoryTypeDialogHeader: "Add new category type",
          styleDialogHeader: "Add new style",
        };
      },
    
      mounted() {
        console.log(Object.keys(this.toothsLabels));
    
        //   this.inputButtonCount =  Array.from(document.querySelectorAll(".diagnosisComponent")).length
        // this.toggleSelectButtonCategory(".dragDropCategory");
        // hide saved checked svg
    
        let item = document.querySelector(".ui-success-circle");
        item.classList.remove("ui-success-circle");
        item = document.querySelector(".ui-success-path");
        item.classList.remove("ui-success-path");
        item = document.querySelector(".ui-success");
        item.classList.remove("ui-success");
    
        //  for drag drop
        this.enableDragDropSort("dragDropCategory");
    
        // // // for always  append input button in end in of buttons
        // Array.from(document.querySelectorAll(".diagnosisComponent")).map(
        //   (element, index) => {
        //     //  make it only for category,  category type and style because taps-to-buttons class is general class
        //     if (this.$refs["inputButton" + (index + 1)]) {
        //       this.$refs["inputButton" + (index + 1)][0]?.$el.remove();
        //       element.appendChild(this.$refs["inputButton" + (index + 1)][0].$el);
        //     }
        //   }
        // );
    
        // to solve overflow of the text in buttons category type only have class widthAuto if label overflow of
        Array.from(document.querySelectorAll(".taps-to-buttons div")).map((element) => {
          if (element.classList.contains("p-highlight")) {
            var label = element.childNodes[0];
            var container = element;
    
            if (label.clientWidth + 20 > container.clientWidth) {
              element.classList.add("widthAuto");
            }
          }
        });
    
        Array.from(document.querySelectorAll(" [aria-label='input']")).map((element) => {
          element.removeAttribute("role");
          element.removeAttribute("draggable");
        });
      },
      computed: {
        activeTooths() {
          return this.data[this.selectedType.english].toothChart.multiSelectBuffer.map(
            (tooth) => {
              return this.toothsLabels[tooth];
            }
          );
        },
      },
    
      updated() {
        //to solve overflow of the text in buttons category type only have class widthAuto if label overflow of
        Array.from(document.querySelectorAll(".taps-to-buttons div")).map((element) => {
          if (element.classList.contains("p-highlight")) {
            var label = element.childNodes[0];
            var container = element;
    
            if (label.clientWidth + 20 > container.clientWidth) {
              element.classList.add("widthAuto");
            }
          }
        });
    
        this.toggleSelectButtonStyle(".styleButtons");
        Array.from(document.querySelectorAll(".input-button")).map((element) => {
          element.removeEventListener("click", () => {});
        });
    
        this.inputButtonCount = Array.from(
          document.querySelectorAll(".diagnosisComponent")
        ).length;
        //  remove() for always  append input button in the end   of buttons
        Array.from(document.querySelectorAll(".diagnosisComponent")).map((element, index) => {
          try {
            if (this.$refs["inputButton" + (index + 1)]) {
              this.$refs["inputButton" + (index + 1)][0]?.$el.remove();
              element.appendChild(this.$refs["inputButton" + (index + 1)][0]?.$el);
            }
          } catch (e) {
            console.log();
          }
        });
        //   shoud be deleted
        // Array.from(document.querySelectorAll(".dragDropCategory div")).map((element) => {
        //   if(!element.childNodes[0])
        //   element.remove()
        //   if(element.childNodes[0].classList.contains("p-button-label"))
        //     if(element.childNodes[0].innerText =="")
        //     element.childNodes[0].remove()
        // });
    
        //  for drag drop
        this.enableDragDropSort("dragDropCategory");
    
        Array.from(document.querySelectorAll(" [aria-label='input']")).map((element) => {
          element.removeAttribute("draggable");
        });
      },
    
      methods: {
        toggleSelectButtonCategory(containerClass) {
          Array.from(document.querySelectorAll(`${containerClass} div`)).map((element) => {
            element.onclick = () => {
              if (
                this.prevCategory.english ===
                this.data[this.selectedType.english].toothChart.category.english
              ) {
                this.data[this.selectedType.english].toothChart.category = {
                  english: null,
                  arabic: null,
                };
              }
              this.prevCategory = this.data[this.selectedType.english].toothChart.category;
            };
          });
        },
    
        toggleSelectButtonStyle(containerClass) {
          Array.from(document.querySelectorAll(`${containerClass} div`)).map((element) => {
            if (!element.classList.contains("input-button"))
              // to prevent click event be in input button
    
              element.onclick = () => {
                // console.log("style", this.prevStyle.english);
                if (
                  this.prevStyle.english ===
                  this.data[this.selectedType.english].toothChart.style[
                    this.data[this.selectedType.english].toothChart.category.english
                  ].english
                ) {
                  this.data[this.selectedType.english].toothChart.style[
                    this.data[this.selectedType.english].toothChart.category.english
                  ] = {
                    english: null,
                    arabic: null,
                  };
                }
                this.prevStyle = this.data[this.selectedType.english].toothChart.style[
                  this.data[this.selectedType.english].toothChart.category.english
                ];
              };
          });
        },
        changNewCategory(index, inputValue) {
          //  console.log(index, inputValue);
          if (index === 1) {
            this.newCategory = inputValue;
            this.addNewCategory();
          }
    
          if (index === 2) {
            this.newCategoryType = inputValue;
            this.addNewCategoryType();
          }
    
          if (index === 3) {
            this.newCategoryStyle = inputValue;
            this.addNewCategoryStyle();
          }
    
          if (index === 4) {
            this.newCategoryStyle = inputValue;
            this.addNewCategoryStyle();
          }
        },
    
        addNewCategory() {
          if (this.newCategory)
            if (
              !this.options[this.selectedType.english].diagnosisSubOptions.find(
                (category) => category.english === this.newCategory
              )
            ) {
              this.options[this.selectedType.english].diagnosisSubOptions.unshift({
                english: this.newCategory,
                arabic: this.newCategory,
              });
              console.log(this.options);
              this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
                this.newCategory
              ] = [{ arabic: "input", english: "input" }];
              // this.options[
              //   this.selectedType.english
              // ].diagnosisActions.categoryTypeActions["EXTRA"+this.newCategory] = [
              //   { arabic: "input", english: "input" },
              // ];
    
              this.options[this.selectedType.english].diagnosisActions.styleActions[
                this.newCategory
              ] = [{ arabic: "input", english: "input" }];
    
              this.proceduresMainOption(this.newCategory);
            }
          this.newCategory = null;
        },
    
        addNewCategoryType() {
          //  ortoFacialTMJ   Prevention Hygiene
          // console.log(
          //   this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
          //     this.data[this.selectedType.english].toothChart.category.english
          //   ]
          // );
    
            let category = null;
            if (
              this.data[this.selectedType.english].toothChart.category.english ===
              "Restorative color"
            )
              category = "restorativeColor";
            else if (
              this.data[this.selectedType.english].toothChart.category.english ===
              "Orto, Facial, TMJ"
            )
              //** */
              category = "ortoFacialTMJ";
            else if (
              this.data[this.selectedType.english].toothChart.category.english ===
              "Fraction / Damaged"
            )
              //** */
              category = "fraction";
            else if (
              this.data[this.selectedType.english].toothChart.category.english ===
              "Prevention Hygiene"
            )
              category = "preventionHygiene";
            else category = this.data[this.selectedType.english].toothChart.category.english;
    
            if (
              !this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
                category
              ].find((categoryType) => categoryType.english === this.newCategoryType)
            )
              if (
                this.data[this.selectedType.english].toothChart.category.english ==
                "orthodontic"
              ) {
                this.addNewSubCategoryType(category);
              } else if (
                this.data[this.selectedType.english].toothChart.category.english ==
                "fractures"
              ) {
                this.addNewSubCategoryType(category);
              } else {
                this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
                  category
                ].unshift({
                  english: this.newCategoryType,
                  arabic: this.newCategoryType,
                });
                this.newCategoryType = null;
                // to re-render category type Component
                this.renderComponent = false;
                this.$nextTick(() => {
                  this.renderComponent = true;
                });
              }
        },
    
        addNewSubCategoryType(category) {
          this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
            category
          ].unshift({
            english: this.newCategoryType,
            arabic: this.newCategoryType,
          });
          // add key in style
          this.options[this.selectedType.english].diagnosisActions.styleActions[category][
            this.newCategoryType
          ] = [{ arabic: "input", english: "input" }];
    
          this.newCategoryType = null;
          // to re-render category type Component
          this.renderComponent = false;
          this.$nextTick(() => {
            this.renderComponent = true;
          });
        },
        addNewCategoryStyle() {console.log(this.newCategoryStyle);
          if (this.newCategoryStyle) {console.log("entered case: 0000000");
            let newStyle = null;
            if (
              this.data[this.selectedType.english].toothChart.category.english ===
              "Restorative color"
            ){
              newStyle = "restorativeColor";console.log("entered case: 1111111");
            }
            else newStyle = this.data[this.selectedType.english].toothChart.category.english;
            if (
              this.data[this.selectedType.english].toothChart.category.english ==
              "orthodontic"
            ) {console.log("entered case: 2222222")
              this.addNewSubStyle();
            } else if (
              this.data[this.selectedType.english].toothChart.category.english == "fractures"
            ) {console.log("entered case: 3333333")
              this.addNewSubStyle();
            } else if (
              !this.options[this.selectedType.english].diagnosisActions.styleActions[
                newStyle
              ].find((categoryStyle) => categoryStyle.english === this.newCategoryStyle)
            ) {console.log("entered case: 4444444")
              this.options[this.selectedType.english].diagnosisActions.styleActions[
                newStyle
              ].unshift({
                english: this.newCategoryStyle,
                arabic: this.newCategoryStyle,
              });
              this.newCategory = null;
    
              // to re-render category type Component
              this.renderComponent = false;
              this.$nextTick(() => {
                this.renderComponent = true;
              });
            }
          }
        },
    
        addNewSubStyle() {
          if (
            !this.options[this.selectedType.english].diagnosisActions.styleActions[
              this.data[this.selectedType.english].toothChart.category.english
            ][
              this.data[this.selectedType.english].toothChart.categoryType[
                this.data[this.selectedType.english].toothChart.category.english
              ].english
            ].find((categoryStyle) => categoryStyle.english === this.newCategoryStyle)
          ) {
            // add object in style array
            this.options[this.selectedType.english].diagnosisActions.styleActions[
              this.data[this.selectedType.english].toothChart.category.english
            ][
              this.data[this.selectedType.english].toothChart.categoryType[
                this.data[this.selectedType.english].toothChart.category.english
              ].english
            ].unshift({
              english: this.newCategoryStyle,
              arabic: this.newCategoryStyle,
            });
            this.newCategory = null;
    
            // to re-render category type Component
            this.renderComponent = false;
            this.$nextTick(() => {
              this.renderComponent = true;
            });
          }
        },
    
        enableDragDropSort(containerClass) {
          function enableDragSort(containerClass) {
            const sortableLists = document.getElementsByClassName(containerClass);
            Array.prototype.map.call(sortableLists, (list) => {
              enableDragList(list);
            });
          }
    
          function enableDragList(list) {
            Array.prototype.map.call(list.children, (item) => {
              enableDragItem(item);
            });
          }
    
          function enableDragItem(item) {
            item.setAttribute("draggable", true);
            item.ondragover = (event) => {
              event.preventDefault();
            };
            item.ondrag = handleDrag;
            item.touchstart = handleDrag;
            item.ondragend = handleDrop;
            item.touchend = handleDrop;
          }
    
          function handleDrag(item) {
            const selectedItem = item.target,
              list = selectedItem.parentNode,
              x = event.clientX,
              y = event.clientY;
    
            selectedItem.classList.add("drag-sort-active");
            let swapItem =
              document.elementFromPoint(x, y) === null
                ? selectedItem
                : document.elementFromPoint(x, y);
    
            if (list === swapItem.parentNode) {
              swapItem =
                swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
              list.insertBefore(selectedItem, swapItem);
            }
          }
    
          let handleDrop = (item) => {
            this.tempCategoryButtonsOrder = [];
            Array.from(item.target.parentElement.children).map((element) => {
              this.tempCategoryButtonsOrder.push({
                english: element.getAttribute("aria-label"),
                arabic: element.getAttribute("aria-label"),
              });
            });
    
            /// if order array changed
            if (
              JSON.stringify(this.tempCategoryButtonsOrder) !==
              JSON.stringify(this.options[this.selectedType.english].diagnosisSubOptions)
            ) {
              // copy  the category buttons options to new order
              this.options[this.selectedType.english].diagnosisSubOptions = JSON.parse(
                JSON.stringify(this.tempCategoryButtonsOrder)
              );
    
              let element = document.querySelector("#Oval-1");
              element.classList.add("ui-success-circle");
              element = document.querySelector("#Path-2");
              element.classList.add("ui-success-path");
              element = document.querySelector("#success");
              element.classList.add("ui-success");
    
              var timer;
              (function () {
                window.clearTimeout(timer);
                timer = window.setTimeout(function () {
                  let item = document.querySelector(".ui-success-circle");
                  item.classList.remove("ui-success-circle");
                  item = document.querySelector(".ui-success-path");
                  item.classList.remove("ui-success-path");
                  item = document.querySelector(".ui-success");
                  item.classList.remove("ui-success");
                }, 3000);
              })();
            }
    
            item.target.classList.remove("drag-sort-active");
          };
    
          enableDragSort(containerClass);
        },
    
        proceduresMainOption(ProcedureCategory) {
          console.log(ProcedureCategory);
          if (ProcedureCategory) {
            this.options[this.selectedType.english].proceduresAction[ProcedureCategory] = [
              { arabic: "input", english: "input" },
            ];
    
            // add in proceduresSubAction
            this.options.diagnosis.proceduresSubAction[ProcedureCategory] = {};
            // add on data object
            Object.keys(this.toothsLabels).map((tooth) => {
              this.proceduresAndDiagnosisData[tooth][this.selectedType.english].procedures[
                ProcedureCategory
              ] = {
                mainOption: {
                  arabic: null,
                  english: null,
                },
                subOptions: {},
              };
            });
    
            // add to print the label Sup Procedures
            this.lang[this.local].diagnosis.procedures["SupProcedures"] = "Sup Procedures";
          }
        },
        displayCategoryDialogMethod(){
            this.displayCategoryDialog = true
        },
        displayCategoryTypeDialogMethod(){
            this.displayCategoryTypeDialog = true
        },
        displayStyleDialogMethod(){
            this.displayStyleDialog = true
        },
        closeCategoryDialog() {
            this.displayCategoryDialog = false
        },
        closeCategoryTypeDialog() {
            this.displayCategoryTypeDialog = false
        },
        closeStyleDialog() {
            this.displayStyleDialog = false
        },
        // saveNewCategory(){
        //   this.options[this.selectedType.english].diagnosisSubOptions.push({
        //     english: this.newCategory,
        //     arabic: this.newCategory,
        //   });
        //   this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
        //     this.newCategory
        //   ] = [];
        //   console.log(this.options[this.selectedType.english].diagnosisActions.categoryTypeActions)
        //   this.options[this.selectedType.english].diagnosisActions.styleActions[
        //     this.newCategory
        //   ] = [{ arabic: "input", english: "input" }];
        //   this.displayCategoryDialog = false
        // },
        // saveNewCategoryType(){
        //   if (this.newCategoryType) {
        //     let category = null;
        //     if (
        //       this.data[this.selectedType.english].toothChart.category.english ===
        //       "Restorative color"
        //     )
        //       category = "restorativeColor";
        //     else if (
        //       this.data[this.selectedType.english].toothChart.category.english ===
        //       "Orto, Facial, TMJ"
        //     )
        //       //** */
        //       category = "ortoFacialTMJ";
        //     else if (
        //       this.data[this.selectedType.english].toothChart.category.english ===
        //       "Fraction / Damaged"
        //     )
        //       //** */
        //       category = "fraction";
        //     else if (
        //       this.data[this.selectedType.english].toothChart.category.english ===
        //       "Prevention Hygiene"
        //     )
        //       category = "preventionHygiene";
        //     else category = this.data[this.selectedType.english].toothChart.category.english;

        //     if (
        //       !this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
        //         category
        //       ].find((categoryType) => categoryType.english === this.newCategoryType)
        //     )
        //       if (
        //         this.data[this.selectedType.english].toothChart.category.english ==
        //         "orthodontic"
        //       ) {
        //         this.addNewSubCategoryType(category);
        //       } else if (
        //         this.data[this.selectedType.english].toothChart.category.english ==
        //         "fractures"
        //       ) {
        //         this.addNewSubCategoryType(category);
        //       } else {
        //         this.options[this.selectedType.english].diagnosisActions.categoryTypeActions[
        //           category
        //         ].unshift({
        //           english: this.newCategoryType,
        //           arabic: this.newCategoryType,
        //         });
        //         this.newCategoryType = null;
        //         // to re-render category type Component
        //         this.renderComponent = false;
        //         this.$nextTick(() => {
        //           this.renderComponent = true;
        //         });
        //       }
        //   }
        // },
        // saveNewStyle(){
        //   if (this.newCategoryStyle) {
        //     console.log("done")
        //     let newStyle = null;
        //     if (
        //       this.data[this.selectedType.english].toothChart.category.english ===
        //       "Restorative color"
        //     )
        //       newStyle = "restorativeColor";
        //     else newStyle = this.data[this.selectedType.english].toothChart.category.english;
        //     if (
        //       this.data[this.selectedType.english].toothChart.category.english ==
        //       "orthodontic"
        //     ) {
        //       this.addNewSubStyle();
        //     } else if (
        //       this.data[this.selectedType.english].toothChart.category.english == "fractures"
        //     ) {
        //       this.addNewSubStyle();
        //     } else if (
        //       !this.options[this.selectedType.english].diagnosisActions.styleActions[
        //         newStyle
        //       ].find((categoryStyle) => categoryStyle.english === this.newCategoryStyle)
        //     ) {
        //       this.options[this.selectedType.english].diagnosisActions.styleActions[
        //         newStyle
        //       ].unshift({
        //         english: this.newCategoryStyle,
        //         arabic: this.newCategoryStyle,
        //       });
        //       this.newCategory = null;

        //       // to re-render category type Component
        //       this.renderComponent = false;
        //       this.$nextTick(() => {
        //         this.renderComponent = true;
        //       });
        //     }
        //   }
        // }
      },
    };
</script>