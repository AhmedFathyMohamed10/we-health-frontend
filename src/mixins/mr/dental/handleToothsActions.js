import { singleAdultTooth } from "./toothObject";
import resetSelection from "./resetSelection";
export default {
  // note we use data props in haver event to get tableData of every tooth
  props: [
    "toothNumbers",
    "gallarAndXray",
    "selectedType",
    "data",
    "adultOrChildSelect",
    "proceduresAndDiagnosisData",
  ],
  data() {
    return {
      basic: false,
      implant: false,
      toothNumber: null,
      togglegingivitis: false,
      toggleCariesFilling: false,
      toggleAlignement: false,
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      category: null,
      toothElement: null,
      tempDiagnosis: this.toothNumbers,
      tempPlanning: this.toothNumbers,
      tempToothNumbers: null,
      TempProceduresAndDiagnosisData: null,
      toothsName: null,
      prevSelectedType: null,

      lang: {
        en: {
          activatedTooth: "Activated Tooths : ",
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 5,
          six: 6,
          seven: 7,
          eight: 8,
          nine: 9,
          ten: 10,
          eleven: 11,
          twelve: 12,
          thirteen: 13,
          fourteen: 14,
          fifteen: 15,
          sixteen: 16,
          seventeen: 17,
          eighteen: 18,
          nineteen: 19,
          twenty: 20,
          twentyOne: 21,
          twentyTwo: 22,
          twentyThree: 23,
          twentyFour: 24,
          twentyFive: 25,
          twentySix: 26,
          twentySeven: 27,
          twentyEight: 28,
          twentyNine: 29,
          thirty: 30,
          thirtyOne: 31,
          thirtyTwo: 32,
        },
        ar: {
          activatedTooth: "Activated Tooths : ",
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 5,
          six: 6,
          seven: 7,
          eight: 8,
          nine: 9,
          ten: 10,
          eleven: 11,
          twelve: 12,
          thirteen: 13,
          fourteen: 14,
          fifteen: 15,
          sixteen: 16,
          seventeen: 17,
          eighteen: 18,
          nineteen: 19,
          twenty: 20,
          twentyOne: 21,
          twentyTwo: 22,
          twentyThree: 23,
          twentyFour: 24,
          twentyFive: 25,
          twentySix: 26,
          twentySeven: 27,
          twentyEight: 28,
          twentyNine: 29,
          thirty: 30,
          thirtyOne: 31,
          thirtyTwo: 32,
        },
      },
    };
  },
  created() {
    //  deep copy use tempToothNumbers if  the user do not click submit on the tooth remember the last choses on tooth
    this.tempToothNumbers = JSON.parse(JSON.stringify(this.toothNumbers));
    // a new deep copy to store old TempProceduresAndDiagnosisData object and use it if user dismiss tooth or switch to other tap without submit

    this.TempProceduresAndDiagnosisData = JSON.parse(
      JSON.stringify(this.proceduresAndDiagnosisData)
    );
    // // console.log("created")
    // this.toothsName = Object.keys(this.lang.en).filter(
    //   (item) => item !== "activatedTooth"
    // );
  },
  mounted() {
    console.log("mounted");
  },
  watch: {
    selectedType: {
      handler() {
        if (this.selectedType.id === 4) {
          this.tempDiagnosis = JSON.parse(JSON.stringify(this.toothNumbers));
          // for first time switch to planning tap  this.tempPlanning = null

          this.setToothNumbersToOldDiagnosis(this.tempPlanning);
        }
        if (this.selectedType.id === 1 || this.selectedType.id === 2) {
          //   this.toothNumbers =   this.tempDiagnosis
          this.setToothNumbersToOldDiagnosis(this.tempDiagnosis);
        }

        this.toothNumber = null;
      },
      deep: true,
    },
    gallarAndXray: {
      // to reset single tooth image after switching to x ray gallary a
      handler() {
        this.toothNumber = null;
      },
    },
    "action.category": {
      handler() {
        // console.log("action.category");
     
        
        if (this.category) {
          switch (this.category) {
            // extraction done
            case "extraction":
              this.action.multiSelectBuffer.map((tooth) => {
                if (tooth) this.resetAllExtraction(tooth);
              });

              break;
            // caries done
            case "caries":
              if (this.action.categoryType[this.action.category.english]) {
                this.action.multiSelectBuffer.map((tooth) => {
                  this.restFillingAndCaries(tooth);
                });
              }
              break;
            // filling done
            case "filling":
              if (this.action.categoryType[this.action.category.english]) {
                this.action.multiSelectBuffer.map((tooth) => {
                  this.restFillingAndCaries(tooth);
                });
              }
              break;
            // pulp done
            case "pulp":
              this.action.multiSelectBuffer.map((tooth) => {
                this.dsicardPulp(tooth);
              });

              break;
            // endo done
            case "endo":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardEndo(tooth);
              });

              break;
            case "periapical":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardToothPeriapical(tooth);
              });
              break;
            // post done
            case "post":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardToothPost(tooth);
              });

              break;
            case "crown":
              this.action.multiSelectBuffer.map((tooth) => {
                this.restCrown(tooth);
              });

              break;
            case "removable":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardRemovable(tooth);
              });

              break;
            case "implant":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardToothImplant(tooth);
              });

              break;

            case "Bone Regeneration":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardToothBone(tooth);
              });

              break;
            case "gingivitis":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardgingivitisLeft(tooth);
                this.discardgingivitisRight(tooth);
              });
              break;
            case "periodontal":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discarPeriodontalLeft(tooth);
                this.discardPeriodontalRight(tooth);
              });

              break;
            case "perio":
              this.action.multiSelectBuffer.map((tooth) => {
                this.discardPerioLeft(tooth);
                this.discardPerioRight(tooth);
              });
              break;

            // case "Fraction / Damaged":
            //   this.action.multiSelectBuffer.map((tooth) => {
            //     this.toothNumbers[tooth].fraction.crown = false;
            //     this.toothNumbers[tooth].fraction.root = false;
            //   });
            //     break;
            case "alignment":
              this.action.multiSelectBuffer.map((tooth) => {
                this.toothNumbers[tooth].alignement = {
                  //postive x
                  mesialShift: 0,
                  //negative x
                  distalShift: 0,
                  //postive y
                  intrusion: 0,
                  //negative Y
                  extrusion: 0,
                  //postive roation
                  distalTilting: 0,
                  //negative rotation
                  mesialTilting: 0,
                };
              });

              break;
            case "orthodontic":
              this.restOrthodontalObject();
              this.action.categoryType.orthodontic = {
                arabic: null,
                english: null,
              };
              this.action.style.orthodontic = {
                mainOption: {
                  arabic: null,
                  english: null,
                },
                type: {
                  arabic: null,
                  english: null,
                },
              };
              break;
          }
        }

        this.category = this.action.category.english;
        this.handToothActins();
      },
      deep: true,
    },
    "action.categoryType": {
      handler() {
        for (
          let counter = 0;
          counter < this.action.multiSelectBuffer.length;
          counter++
        ) {
          var singleTooth = this.action.multiSelectBuffer[counter];
          if (
            !this.gallarAndXray &&
            !this.toothNumbers[singleTooth].extraction &&
            !this.toothNumbers[singleTooth].removeImplant
          ) {
            switch (this.action.category.english) {
              case "caries":
                switch (
                  this.action.categoryType[this.action.category.english].english
                ) {
                  case "class I":
                    this.restCrown(singleTooth);
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassI(singleTooth);

                    break;
                  case "class IV mesial":
                    this.restCrown(singleTooth);
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassIvMesial(singleTooth);

                    break;
                  case "class IV distal":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIvDistal(singleTooth);

                    break;
                  case "class III distal":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIiiDistal(singleTooth);

                    break;
                  case "class II distal":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIiDistal(singleTooth);

                    break;
                  case "class III mesial":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);

                    this.toothCariesFillingClassIiiMesial(singleTooth);
                    break;
                  case "class II mesial":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassI(singleTooth);
                    this.toothCariesFillingClassIvMesial(singleTooth);
                    break;
                  case "class II MOD":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIiMod(singleTooth);

                    break;
                  case "class III MOD":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIiiMod(singleTooth);

                    break;
                  case "class IV MOD":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIvMod(singleTooth);

                    break;
                  case "class V":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassV(singleTooth);

                    break;
                }
                break;
              case "filling":
                switch (
                  this.action.categoryType[this.action.category.english].english
                ) {
                  case "class I":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassI(singleTooth);

                    break;
                  case "class IV mesial":
                    // console.log("filling");
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIvMesial(singleTooth);

                    break;
                  case "class IV distal":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIvDistal(singleTooth);

                    break;
                  case "class III distal":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassIiiDistal(singleTooth);
                    this.restCrown(singleTooth);
                    break;
                  case "class II distal":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassIiDistal(singleTooth);

                    break;
                  case "class III mesial":
                    this.restFillingAndCaries(singleTooth);
                    this.restCrown(singleTooth);
                    this.toothCariesFillingClassIiiMesial(singleTooth);
                    break;
                  case "class II mesial":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassI(singleTooth);
                    this.toothCariesFillingClassIvMesial(singleTooth);
                    break;
                  case "class II MOD":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassIiMod(singleTooth);
                    this.restCrown(singleTooth);
                    break;
                  case "class III MOD":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassIiiMod(singleTooth);

                    break;
                  case "class IV MOD":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassIvMod(singleTooth);
                    this.restCrown(singleTooth);
                    break;
                  case "class V":
                    this.restFillingAndCaries(singleTooth);
                    this.toothCariesFillingClassV(singleTooth);
                    this.restCrown(singleTooth);
                    break;
                }
                break;

              case "orthodontic":
                [this.toothNumber, ...this.action.multiSelectBuffer].map(
                  (tooth) => {
                    if(tooth){
                      this.toothNumbers[tooth].isActive = false;
                    }
                  }
                );

                this.action.multiSelectBuffer = [];
            }
          }
        }
      },
      deep: true,
    },
    "action.categoryType.implant": {
      handler(value) {
        //    if(value.english) becouse when we change selected type
        // change the   action.categoryType.implant fire so we check if the fire from
        // change selected type or from category implant
        if (value.english)
          this.action.multiSelectBuffer.map((tooth) => {
            if (value.english === "Remove Implant") {
              this.toothImplant(tooth);
              this.discardToothImplant(tooth);
              this.toothNumbers[tooth].removeImplant = true;
            } else {
              this.toothNumbers[tooth].removeImplant = false;
              this.toothImplant(tooth);
            }
          });
      },
      deep: true,
    },

    "action.categoryType.crown": {
      handler() {
        this.handCrown();
      },
      deep: true,
    },
    "action.style.alignment": {
      handler(value) {
        //    if(value) becouse when we change selected type
        // change the   action.style.alignment fire so we check if the fire from
        // change selected type or from category implant
        if (value)
          if (value.english)
            this.action.multiSelectBuffer.map((tooth) => {
              this.handAlignment(tooth);
            });
      },
      deep: true,
    },
    "action.categoryType.alignment": {
      handler(val) {
        console.log(val);
        if (
          val &&
          this.toothNumber &&
          !this.gallarAndXray &&
          !this.toothNumbers[this.toothNumber].extraction &&
          !this.toothNumbers[this.toothNumber].removeImplant
        ) {
          if (
            this.toothNumber &&
            val.english &&
            this.action.style[this.action.category.english].english
          ) {
            switch (
              this.action.categoryType[this.action.category.english].english
            ) {
              case "mesial shift":
                this.toothAlignment(
                  "mesialShift",
                  this.action.style[this.action.category.english].english
                );
                break;
              case "distal shift":
                this.toothAlignment(
                  "mesialShift",
                  -1 * this.action.style[this.action.category.english].english
                );
                break;
              case "intrusion":
                this.toothAlignment(
                  "intrusion",
                  this.action.style[this.action.category.english].english
                );
                break;
              case "extrusion":
                this.toothAlignment(
                  "extrusion",
                  -1 * this.action.style[this.action.category.english].english
                );
                break;
              case "distal tilting":
                this.toothAlignment(
                  "distalTilting",
                  this.action.style[this.action.category.english].english
                );
                break;
              case "mesial tilting":
                this.toothAlignment(
                  "mesialTilting",
                  -1 * this.action.style[this.action.category.english].english
                );
                break;
            }
          }
        }
      },
      deep: true,
    },
    "action.categoryType.orthodontic": {
      handler(value) {
        if (value.english) if (!this.gallarAndXray) this.handOrthodontic();
      },
      deep: true,
    },

    "action.categoryType.fraction": {
      handler() {
        if (!this.gallarAndXray) {
          this.handFraction();
        }
      },
      deep: true,
    },
    "action.style.orthodontic": {
      handler() {
        if (!this.gallarAndXray) this.handOrthodontic();
      },
      deep: true,
    },
  },

  methods: {
    //hover tooltip
    showTooltip(evt, hoverTooth) {
      let tooltip = document.getElementById("tooltip");
      if (
        this.action.tableData[this.adultOrChildSelect.english][hoverTooth]
          .length
      ) {
        tooltip.innerHTML = "";
        this.action.tableData[this.adultOrChildSelect.english][hoverTooth].map(
          (action, index) => {
            const node = document.createElement("span");
            const textNode = document.createTextNode(`${
              index + 1 + "-" + action.category
            }
         ${action.categoryType ? "+" + action.categoryType : ""} ${
              action.style ? "+" + action.style : ""
            }`);
            node.appendChild(textNode);
            tooltip.appendChild(node);
            tooltip.appendChild(document.createElement("br"));
          }
        );
        tooltip.style.display = "block";
        tooltip.style.left = evt.pageX + 10 + "px";
        tooltip.style.top = evt.pageY + 10 + "px";
      }
      // note   should   else if  operations table comes before  else if  diagnosis because operation overwrite diagnosis
      else if (
        this.data.operations.toothChart.tableData[
          this.adultOrChildSelect.english
        ][hoverTooth].length
      ) {
        tooltip.innerHTML = "";
        this.data.operations.toothChart.tableData[
          this.adultOrChildSelect.english
        ][hoverTooth].map((action, index) => {
          const node = document.createElement("span");
          const textNode = document.createTextNode(`${
            index + 1 + "-" + action.category
          }
         ${action.categoryType ? "+" + action.categoryType : ""} ${
            action.style ? "+" + action.style : ""
          }`);
          node.appendChild(textNode);
          tooltip.appendChild(node);
          tooltip.appendChild(document.createElement("br"));
        });
        tooltip.style.display = "block";
        tooltip.style.left = evt.pageX + 10 + "px";
        tooltip.style.top = evt.pageY + 10 + "px";
      } else if (
        this.data.diagnosis.toothChart.tableData[
          this.adultOrChildSelect.english
        ][hoverTooth].length
      ) {
        tooltip.innerHTML = "";
        this.data.diagnosis.toothChart.tableData[
          this.adultOrChildSelect.english
        ][hoverTooth].map((action, index) => {
          const node = document.createElement("span");
          const textNode = document.createTextNode(`${
            index + 1 + "-" + action.category
          }
         ${action.categoryType ? "+" + action.categoryType : ""} ${
            action.style ? "+" + action.style : ""
          }`);
          node.appendChild(textNode);
          tooltip.appendChild(node);
          tooltip.appendChild(document.createElement("br"));
        });
        tooltip.style.display = "block";
        tooltip.style.left = evt.pageX + 10 + "px";
        tooltip.style.top = evt.pageY + 10 + "px";
      }
    },

    hideTooltip() {
      var tooltip = document.getElementById("tooltip");
      tooltip.style.display = "none";
    },
    // used from  dental.vue
    clearButton() {
      resetSelection(this.action.tableData, this.action.ortoFacialTMJ);
      return {
        tempToothNumbers: this.tempToothNumbers,
        TempProceduresAndDiagnosisData: this.TempProceduresAndDiagnosisData,
      };
    },
    clearSelectionsButtons() {
      return resetSelection(this.action.tableData, this.action.ortoFacialTMJ);
    },
    // used from  dental.vue
    submit() {
      // a new deep copy to store old tempToothNumbers object and use it if user dismiss tooth or switch to other tap without submit
      this.tempToothNumbers = JSON.parse(JSON.stringify(this.toothNumbers));
      // a new deep copy to store old TempProceduresAndDiagnosisData object and use it if user dismiss tooth or switch to other tap without submit

      this.TempProceduresAndDiagnosisData = JSON.parse(
        JSON.stringify(this.proceduresAndDiagnosisData)
      );

      let category = this.action.category.english;
      if (category === "Fraction / Damaged") category = "fraction";
      if (category === "Restorative color") category = "restorativeColor";
      this.action.multiSelectBuffer.map((tooth) => {
        let oldToothData = this.action.tableData[
          this.adultOrChildSelect.english
        ][tooth].find(
          (tableObject) => tableObject.category === this.action.category.english
        );
        if (oldToothData) {
          this.action.tableData[this.adultOrChildSelect.english][tooth].splice(
            this.action.tableData[this.adultOrChildSelect.english][
              tooth
            ].findIndex(({ category }) => category === oldToothData.category),
            1
          );
        }

        this.action.tableData[this.adultOrChildSelect.english][tooth].push({
          ...this.action.tableData[this.adultOrChildSelect.english][tooth],
          tap: this.selectedType.english,
          category: category && category,
          categoryType: !this.action.categoryType[category]
            ? null
            : this.action.categoryType[category].english,
          style: this.action.style[category]
            ? this.action.style[category].english
            : null,
        });

        this.toothNumbers[tooth].isActive = false;
        // this.toothExtraction(tooth);
      });

      // to update  tempPlanning (tooth chart in planning tap ) object in every submit
      this.tempPlanning = JSON.parse(JSON.stringify(this.toothNumbers));
      // set proceduresAndDiagnosisData for every selected tooth
      this.action.multiSelectBuffer.map((tooth) => {
        this.proceduresAndDiagnosisData[tooth][this.selectedType.english] =
          JSON.parse(
            JSON.stringify(
              this.proceduresAndDiagnosisData[this.toothNumber][
                this.selectedType.english
              ]
            )
          );
      });
      this.toothNumber = null;
      // reset selection after click submit
      return this.clearSelectionsButtons();
    }, // used from  dental.vue (delete icon in planning table )

    resetTempProcedureAndDiagnosis(toothNumber) {
      this.TempProceduresAndDiagnosisData[toothNumber][
        this.selectedType.english
      ];

      this.TempProceduresAndDiagnosisData[toothNumber][
        this.selectedType.english
      ] = JSON.parse(
        JSON.stringify(
          this.proceduresAndDiagnosisData[toothNumber][
            this.selectedType.english
          ]
        )
      );
    }, // used from  dental.vue (delete icon in planning table )

    resetTempToothNumber(toothNumber) {
      this.tempToothNumbers[toothNumber] = singleAdultTooth();
    },
    // used from  dental.vue (delete icon in planning table )
    removeFromPlanningToothObject(toothNumber) {
      this.tempPlanning[toothNumber] = singleAdultTooth();

      // console.log("temp");
    },
    // set toothNumbers to diagnosis or planning tap
    setToothNumbersToOldDiagnosis(oldToothHistory) {
      this.$emit(
        "setToothNumbersToOldDiagnosis",
        JSON.parse(JSON.stringify(oldToothHistory))
      );
    },
    selectedTooth(toothNum) {
      this.prevSelectedType = this.selectedType;
      this.toothNumber = toothNum;
      this.$emit("selectedTooth", this.toothNumber);
      if (!this.gallarAndXray) {
        this.toothNumbers[this.toothNumber].isActive =
          !this.toothNumbers[this.toothNumber].isActive;
        if (this.action.multiSelectBuffer.includes(this.toothNumber)) {
          // reset toothNumbers to old history of dismiss tooth
          this.toothNumbers[this.toothNumber] = JSON.parse(
            JSON.stringify(this.tempToothNumbers[this.toothNumber])
          );
          // reset ProceduresAndDiagnosisData to old history of dismiss tooth
          this.proceduresAndDiagnosisData[this.toothNumber][
            this.selectedType.english
          ] = JSON.parse(
            JSON.stringify(
              this.TempProceduresAndDiagnosisData[this.toothNumber][
                this.selectedType.english
              ]
            )
          );

          this.toothNumbers[this.toothNumber].isActive = false;
          this.action.multiSelectBuffer.splice(
            this.action.multiSelectBuffer.indexOf(this.toothNumber),
            1
          );
        } else {
          this.action.multiSelectBuffer.push(this.toothNumber);

          this.handToothActins();
        }
      }
    },

    handToothActins() {
      if (this.toothNumber)
        switch (this.action.category.english) {
          // extraction done
          case "extraction":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if (tooth) this.resetAllExtraction(tooth);
              }
            );

            this.action.multiSelectBuffer.map((tooth) => {
              this.toothExtraction(tooth);
            });

            break;
          // caries done
          case "caries":
            if (this.action.categoryType[this.action.category.english]) {
              [this.toothNumber, ...this.action.multiSelectBuffer].map(
                (tooth) => {
                  if(tooth){
                    this.restCrown(tooth);
                    this.restFillingAndCaries(tooth);
                  }
                }
              );

              this.action.multiSelectBuffer.map((tooth) => {
                this.handCariesAndFilling("caries", tooth);
              });
            }
            break;
          // filling done
          case "filling":
            if (this.action.categoryType[this.action.category.english]) {
              [this.toothNumber, ...this.action.multiSelectBuffer].map(
                (tooth) => {
                  if(tooth){
                    this.restCrown(tooth);
  
                    this.restFillingAndCaries(tooth);
                  }
                }
              );

              this.action.multiSelectBuffer.map((tooth) => {
                this.handCariesAndFilling("filling", tooth);
              });
            }
            break;
          // pulp done
          case "pulp":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                // add reset impolant
                if(tooth){
                  this.discardToothImplant(tooth);
                  this.discardToothPost(tooth);
                  this.discardEndo(tooth);
                  this.dsicardPulp(tooth);
                }
              }
            );

            this.action.multiSelectBuffer.map((tooth) => {
              this.toothPulp(tooth);
            });

            break;
          // endo done
          case "endo":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardToothPost(tooth);
                  this.discardToothImplant(tooth);
                  this.dsicardPulp(tooth);
                  this.discardEndo(tooth);
                }
              }
            );

            this.action.multiSelectBuffer.map((tooth) => {
              this.toothEndo(tooth);
            });

            break;
          //  periapical done
          case "periapical":
            // add reset implant
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardToothImplant(tooth);
                  this.discardToothPeriapical(tooth);
                }
              }
            );

            this.action.multiSelectBuffer.map((tooth) => {
              this.toothPeriapical(tooth);
            });

            break;
          // post done
          case "post":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardToothImplant(tooth);
                  this.dsicardPulp(tooth);
                  this.discardEndo(tooth);
                  this.discardToothPost(tooth);
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.toothPost(tooth);
            });
            break;
          case "crown":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.restCrown(tooth);
                }
              }
            );

            this.handCrown();
            break;
          case "removable":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardRemovable(tooth);
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.toothRemovable(tooth);
            });
            break;
          case "implant":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardToothImplant(tooth);
                }
              }
            );

            this.action.multiSelectBuffer.map((tooth) => {
              
              this.toothImplant(tooth);
            });

            break;
         
        
          case "Bone Regeneration":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardToothBone(tooth);
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.thoothBone(tooth);
            });

            break;
          case "gingivitis":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardgingivitisLeft(tooth);
                  this.discardgingivitisRight(tooth);
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.toothgingivitisLeft(tooth);
              this.toothgingivitisRight(tooth);
            });

            break;
          case "periodontal":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discarPeriodontalLeft(tooth);
                  this.discardPeriodontalRight(tooth);
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.toothPeriodontalLeft(tooth);
              this.toothPeriodontalRight(tooth);
            });

            break;
          case "perio":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.discardPerioLeft(tooth);
                  this.discardPerioRight(tooth);
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              if(tooth){
                this.toothPerioLeft(tooth);
                this.toothPerioRight(tooth);
              }
            });

            break;
          case "alignment":
            this.action.multiSelectBuffer.map((tooth) => {
              this.handAlignment(tooth);
            });
            break;
          case "Fraction / Damaged":
            this.handFraction();
            break;
          case "fractures":
            this.handFractures();
            break;
        }
    },

    handOrthodontic() {
      if (this.action.categoryType.orthodontic)
        switch (this.action.categoryType.orthodontic.english) {
          case "stable":
            switch (this.action.style.orthodontic.mainOption.english) {
              case "metal":
                this.addOrthodontic("stable", "metal");
                break;
              case "ceramic":
                this.addOrthodontic("stable", "ceramic");
                break;
              case "transparent":
                this.addOrthodontic("stable", "transparent");
                break;
              case "internal":
                this.restOrthodontalObject();
                break;
            }
            break;
          case "mobile":
            switch (this.action.style.orthodontic.mainOption.english) {
              case "wire":
                this.addOrthodontic("mobile", "wire");
                break;
              case "transparent":
                this.addOrthodontic("mobile", "transparent");
                break;
            }
            break;
        }
    },
    handFractures() {
      switch (this.action.categoryType.fractures.english) {
        case "Fracture":
          if (this.action.fractures.fructure.includes(this.toothNumber))
            this.action.fractures.fructure.splice(
              this.action.fractures.fructure.indexOf(this.toothNumber),
              1
            );
          else this.action.fractures.fructure.push(this.toothNumber);
          break;
        case "Severely Damaged":
          if (this.action.fractures.severelyDamaged.includes(this.toothNumber))
            this.action.fractures.severelyDamaged.splice(
              this.action.fractures.severelyDamaged.indexOf(this.toothNumber),
              1
            );
          else this.action.fractures.severelyDamaged.push(this.toothNumber);

          break;
        case "Wear":
          if (this.action.fractures.wear.includes(this.toothNumber))
            this.action.fractures.wear.splice(
              this.action.fractures.wear.indexOf(this.toothNumber),
              1
            );
          else this.action.fractures.wear.push(this.toothNumber);

          break;
      }
    },
    addOrthodontic(value_, type_) {
      this.restOrthodontalObject();
      switch (this.action.style.orthodontic.type.english) {
        case "upper":
          this.toothNumbers.orthodontic[value_][type_].upper = true;
          this.toothNumbers.orthodontic[value_][type_].lower = false;
          break;
        case "lower":
          this.toothNumbers.orthodontic[value_][type_].lower = true;
          this.toothNumbers.orthodontic[value_][type_].upper = false;
          break;
        case "both":
          this.toothNumbers.orthodontic[value_][type_].upper = true;
          this.toothNumbers.orthodontic[value_][type_].lower = true;
          break;
      }
    },
    restOrthodontalObject() {
      this.toothNumbers.orthodontic = {
        stable: {
          metal: {
            upper: false,
            lower: false,
          },
          ceramic: {
            upper: false,
            lower: false,
          },
          internal: false,
          transparent: {
            upper: false,
            lower: false,
          },
        },
        mobile: {
          transparent: {
            upper: false,
            lower: false,
          },
          wire: {
            upper: false,
            lower: false,
          },
        },
      };
    },
    restFillingAndCaries(tooth) {
      this.toothNumbers[tooth].filling_caries_class_i = false;
      this.toothNumbers[tooth].filling_caries_class_iv_mesial = false;
      this.toothNumbers[tooth].filling_caries_class_iv_distal = false;
      this.toothNumbers[tooth].filling_caries_class_v = false;
      this.toothNumbers[tooth].filling_caries_class_iii_distal = false;
      this.toothNumbers[tooth].filling_caries_class_iii_mesial = false;
    },
    restCrown(tooth) {
      this.toothNumbers[tooth].crown.fullVeneer = false;
      this.toothNumbers[tooth].crown.laminateVeneer = false;
      this.toothNumbers[tooth].crown.occlusalVeneer = false;
      this.toothNumbers[tooth].crown.postCrown = false;
      this.toothNumbers[tooth].crown.endoCrown = false;
      this.toothNumbers[tooth].crown.bridge = false;
      this.toothNumbers[tooth].crown.denture = false;
      this.toothNumbers[tooth].crown.onlay = false;
      this.toothNumbers[tooth].endo_crown.crown1 = false;
      this.toothNumbers[tooth].endo_crown.crown2 = false;
      this.toothNumbers[tooth].endo_crown.crown3 = false;
    },
    handFraction() {
      if (this.selectedType.id === 1)
        switch (this.action.categoryType.fraction.english) {
          case "root":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.toothNumbers[tooth].fraction.crown = false;
                  this.toothNumbers[tooth].fraction.root = false;
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.toothNumbers[tooth].fraction.root = true;
            });

            break;
          case "crown":
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
                if(tooth){
                  this.toothNumbers[tooth].fraction.crown = false;
                  this.toothNumbers[tooth].fraction.root = false;
                }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              this.toothNumbers[tooth].fraction.crown = true;
            });
            break;
          case "both":
      
            [this.toothNumber, ...this.action.multiSelectBuffer].map(
              (tooth) => {
               if(tooth){
                 this.toothNumbers[tooth].fraction.crown = false;
                 this.toothNumbers[tooth].fraction.root = false;
               }
              }
            );
            this.action.multiSelectBuffer.map((tooth) => {
              if(tooth){
                this.toothNumbers[tooth].fraction.crown = true;
                this.toothNumbers[tooth].fraction.root = true;
              }
            });

            break;
        }
    },

    handAlignment(tooth) {
      // console.log("handAlignment", tooth);
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        if (
          this.action.categoryType[this.action.category.english].english &&
          this.action.style[this.action.category.english].english
        ) {
          switch (
            this.action.categoryType[this.action.category.english].english
          ) {
            case "mesial shift":
              this.handAlignmentNumbers("mesialShift", tooth);
              break;
            case "distal shift":
              this.handAlignmentNumbers("distalShift", tooth);
              break;
            case "intrusion":
              this.handAlignmentNumbers("intrusion", tooth);
              break;
            case "extrusion":
              this.handAlignmentNumbers("extrusion", tooth);
              break;
            case "distal tilting":
              this.handAlignmentNumbers("distalTilting", tooth);
              break;
            case "mesial tilting":
              this.handAlignmentNumbers("mesialTilting", tooth);
              break;
          }
        }
      }
    },
    handAlignmentNumbers(type_, tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.discardAlignment(type_, tooth);
        if (
          type_ == "distalShift" ||
          type_ == "extrusion" ||
          type_ == "mesialTilting"
        ) {
          this.toothAlignment(
            type_,
            -1 * this.action.style[this.action.category.english].english,
            tooth
          );
        } else {
          // console.log(tooth);
          this.toothAlignment(
            type_,
            this.action.style[this.action.category.english].english,
            tooth
          );
        }
      }
    },
    toothAlignment(type_, value, tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        for (let key in this.toothNumbers[tooth].alignement) {
          this.toothNumbers[tooth].alignement[key] = 0;
        }
        if (type_ != "distalTilting" && type_ != "mesialTilting")
          this.toothNumbers[tooth].alignement[type_] = value / 3;
        else this.toothNumbers[tooth].alignement[type_] = value;
      }
    },
    discardAlignment(type_, tooth) {
      this.toothNumbers[tooth].alignement[type_] = 0;
    },

    handCariesAndFilling(type_, singleTooth) {
      if (
        !this.toothNumbers[singleTooth].extraction &&
        !this.toothNumbers[singleTooth].removeImplant
      ) {
        switch (
          this.action.categoryType[this.action.category.english].english
        ) {
          case "class I":
            this.toothCariesFillingClassI(singleTooth);

            break;
          case "class IV mesial":
            this.toothCariesFillingClassIvMesial(singleTooth);
            break;
          case "class IV distal":
            this.toothCariesFillingClassIvDistal(singleTooth);

            break;
          case "class III distal":
            this.toothCariesFillingClassIiiDistal(singleTooth);

            break;
          case "class II distal":
            this.toothCariesFillingClassIiDistal(singleTooth);

            break;
          case "class III mesial":
            this.toothCariesFillingClassIiiMesial(singleTooth);

            break;
          case "class II mesial":
            this.toothCariesFillingClassIvMesial(singleTooth);
            this.toothCariesFillingClassI(singleTooth);
            break;
          case "class II MOD":
            this.toothCariesFillingClassIiMod(singleTooth);

            break;
          case "class III MOD":
            this.toothCariesFillingClassIiiMod(singleTooth);

            break;
          case "class IV MOD":
            this.toothCariesFillingClassIvMod(singleTooth);

            break;
          case "class V":
            this.toothCariesFillingClassV(singleTooth);
            break;
        }
      }
    },
    handCrown() {
      for (
        let counter = 0;
        counter < this.action.multiSelectBuffer.length;
        counter++
      ) {
        var singleTooth = this.action.multiSelectBuffer[counter];
        if (
          singleTooth &&
          !this.gallarAndXray &&
          !this.toothNumbers[singleTooth].extraction
        ) {
          this.restFillingAndCaries(singleTooth);
          this.restCrown(singleTooth);
          switch (this.action.category.english) {
            case "crown":
              switch (
                this.action.categoryType[this.action.category.english].english
              ) {
                case "full veneer":
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothNumbers[singleTooth].crown.fullVeneer = true;
                  }
                  break;
                case "laminate veneer":
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothNumbers[singleTooth].crown.laminateVeneer = true;
                  }

                  break;
                case "occlusal veneer":
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothNumbers[singleTooth].crown.occlusalVeneer = true;
                  }

                  break;
                case "post crown":
                  this.discardToothImplant(singleTooth);
                  this.discardToothPost(singleTooth);
                  this.discardEndo(singleTooth);
                  this.dsicardPulp(singleTooth);
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothNumbers[singleTooth].crown.postCrown = true;
                    this.toothPost(singleTooth);
                  }
                  break;
                case "endo crown":
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothEndoCrown(singleTooth);
                  }
                  break;
                case "bridge":
                  this.toothNumbers[singleTooth].crown.bridge = true;
                  break;
                case "Denture":
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothNumbers[singleTooth].crown.denture = true;
                  }
                  break;
                case "onlay":
                  if (!this.toothNumbers[singleTooth].removeImplant) {
                    this.toothNumbers[singleTooth].crown.onlay = true;
                  }
                  break;
              }
              break;
          }
        }
      }
    },
    toothPulp(tooth) {
      if (
        !this.toothNumbers[tooth].implant &&
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].pulp.pulp1 = true;
        this.toothNumbers[tooth].pulp.pulp2 = true;
        this.toothNumbers[tooth].pulp.pulp3 = true;
      }
    },
    dsicardPulp(tooth) {
      this.toothNumbers[tooth].pulp.pulp1 = false;
      this.toothNumbers[tooth].pulp.pulp2 = false;
      this.toothNumbers[tooth].pulp.pulp3 = false;
    },
    thoothBone(tooth) {
      this.toothNumbers[tooth].bone = true;
    },
    discardToothBone(tooth) {
      this.toothNumbers[tooth].bone = false;
    },
    toothExtraction(tooth) {
      this.toothNumbers[tooth] = singleAdultTooth();

      this.toothNumbers[tooth].isActive = true;
      this.toothNumbers[tooth].extraction = true;
    },
    resetAllExtraction(tooth) {
      this.toothNumbers[tooth].extraction = false;
    },

    toothImplant(tooth) {
      this.toothNumbers[tooth].fraction.root = false;
      this.toothNumbers[tooth].extraction = false;
      this.toothNumbers[tooth].implant = true;
      this.toothNumbers[tooth].dent.root1 = false;
      this.toothNumbers[tooth].dent.root2 = false;
      this.toothNumbers[tooth].crown.postCrown = false;
      this.discardToothPeriapical(tooth);
      this.discardToothPost(tooth);
      this.discardgingivitisRight(tooth);
      this.discardgingivitisLeft(tooth);
      this.discardEndo(tooth);
      this.discardRemovable(tooth);
      this.discardBridge(tooth);
      this.dsicardPulp(tooth);
      this.discardPerioLeft(tooth);
      this.discardPerioRight(tooth);
      this.discarPeriodontalLeft(tooth);
      this.discardPeriodontalRight(tooth);
    },
    discardToothImplant(tooth) {
      this.toothNumbers[tooth].implant = false;
      this.toothNumbers[tooth].dent.root1 = true;
      this.toothNumbers[tooth].dent.root2 = true;
    },
    //Tooth Periapical
    toothPeriapical(tooth) {
      this.toothNumbers[tooth].periapical.periapical1 = true;
      this.toothNumbers[tooth].periapical.periapical2 = true;
      this.toothNumbers[tooth].periapical.periapical3 = true;
    },
    discardToothPeriapical(tooth) {
      this.toothNumbers[tooth].periapical.periapical1 = false;
      this.toothNumbers[tooth].periapical.periapical2 = false;
      this.toothNumbers[tooth].periapical.periapical3 = false;
    },
    //tooth Post
    toothPost(tooth) {
      this.toothNumbers[tooth].post.post1 = true;
      this.toothNumbers[tooth].post.post2 = true;
      this.toothNumbers[tooth].post.post3 = true;
    },
    discardToothPost(tooth) {
      this.toothNumbers[tooth].post.post1 = false;
      this.toothNumbers[tooth].post.post2 = false;
      this.toothNumbers[tooth].post.post3 = false;
    },
    //tooth gingivitis Right
    toothgingivitisRight(tooth) {
      this.toothNumbers[tooth].gingivitis.right = true;
    },
    discardgingivitisRight(tooth) {
      this.toothNumbers[tooth].gingivitis.right = false;
    },

    // tooth gingivitis perio
    toothPerioLeft(tooth) {
      this.toothNumbers[tooth].perio.left = true;
    },
    discardPerioLeft(tooth) {
      this.toothNumbers[tooth].perio.left = false;
    },
    //tooth perio Left
    toothPerioRight(tooth) {
      this.toothNumbers[tooth].perio.right = true;
    },
    discardPerioRight(tooth) {
      this.toothNumbers[tooth].perio.right = false;
    },
    //tooth gingivitis Left
    toothgingivitisLeft(tooth) {
      this.toothNumbers[tooth].gingivitis.left = true;
    },
    discardgingivitisLeft(tooth) {
      this.toothNumbers[tooth].gingivitis.left = false;
    },
    //tooth Periodontal Left
    toothPeriodontalLeft(tooth) {
      this.toothNumbers[tooth].periodontal.left = true;
    },
    discarPeriodontalLeft(tooth) {
      this.toothNumbers[tooth].periodontal.left = false;
    },
    //tooth Periodontal Left
    toothPeriodontalRight(tooth) {
      this.toothNumbers[tooth].periodontal.right = true;
    },
    discardPeriodontalRight(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].periodontal.right = false;
      }
    },
    //tooth Caries Filling Class I
    toothCariesFillingClassI(tooth) {
      this.toothNumbers[tooth].filling_caries_class_i = true;
    },

    //tooth Caries Filling Class IV Distal
    toothCariesFillingClassIvDistal(tooth) {
      this.toothNumbers[tooth].filling_caries_class_iv_distal = true;
    },

    //tooth Caries Filling Class IV Mod
    toothCariesFillingClassIvMod(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothCariesFillingClassIvMesial(tooth);
        this.toothCariesFillingClassIvDistal(tooth);
      }
    },

    toothCariesFillingClassIvMesial(tooth) {
      this.toothNumbers[tooth].filling_caries_class_iv_mesial = true;
    },
    //tooth Caries Filling Class V
    toothCariesFillingClassV(tooth) {
      if (
        !this.toothNumbers[tooth].implant &&
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].filling_caries_class_v = true;
      }
    },
    //tooth Caries Filling Class III Distal
    toothCariesFillingClassIiiDistal(tooth) {
      this.toothNumbers[tooth].filling_caries_class_iii_distal = true;
    },
    discardCariesFillingClassIiiDistal() {
      this.toothNumbers[
        this.toothNumber
      ].filling_caries_class_iii_distal = false;
    },

    //tooth Caries Filling Class Iii Mesial
    toothCariesFillingClassIiiMesial(tooth) {
      this.toothNumbers[tooth].filling_caries_class_iii_mesial = true;
    },
    discardCariesFillingClassIiiMesial() {
      this.toothNumbers[
        this.toothNumber
      ].filling_caries_class_iii_mesial = false;
    },
    //tooth Caries Filling Class Iii Mod
    toothCariesFillingClassIiiMod(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothCariesFillingClassIiiMesial(tooth);
        this.toothCariesFillingClassIiiDistal(tooth);
      }
    },
    discardCariesFillingClassIiiMod() {
      if (
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.discardCariesFillingClassIiiMesial();
        this.discardCariesFillingClassIiiDistal();
      }
    },
    //tooth Caries Filling Class II Mesial
    toothCariesFillingClassIiMesial(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothCariesFillingClassI(tooth);
        this.toothCariesFillingClassIiiMesial(tooth);
      }
    },
    discardCariesFillingClassIiMesial() {
      if (
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.discardCariesFillingClassI();
        this.discardCariesFillingClassIiiMesial();
      }
    },
    //tooth Caries Filling Class II Distal
    toothCariesFillingClassIiDistal(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothCariesFillingClassI(tooth);
        this.toothCariesFillingClassIiiDistal(tooth);
      }
    },
    discardCariesFillingClassIiDistal() {
      if (
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.discardCariesFillingClassI();
        this.discardCariesFillingClassIiiDistal();
      }
    },
    //tooth Caries Filling Class II Mod
    toothCariesFillingClassIiMod(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothCariesFillingClassIiMesial(tooth);
        this.toothCariesFillingClassIiDistal(tooth);
      }
    },
    discardCariesFillingClassIiMod() {
      if (
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.discardCariesFillingClassIiMesial();
        this.discardCariesFillingClassIiDistal();
      }
    },
    //Tooth Endo
    toothEndo(tooth) {
      if (
        !this.toothNumbers[tooth].implant &&
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].endo.endo1 = true;
        this.toothNumbers[tooth].endo.endo2 = true;
        this.toothNumbers[tooth].endo.endo3 = true;
      }
    },
    discardEndo(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].endo.endo1 = false;
        this.toothNumbers[tooth].endo.endo2 = false;
        this.toothNumbers[tooth].endo.endo3 = false;
      }
    },
    //Tooth Endo Crown
    toothEndoCrown(tooth) {
      if (
        !this.toothNumbers[tooth].implant &&
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].endo_crown.crown1 = true;
        this.toothNumbers[tooth].endo_crown.crown2 = true;
        this.toothNumbers[tooth].endo_crown.crown3 = true;
      }
    },

    //Tooth Removable
    toothRemovable(tooth) {
      if (
        !this.toothNumbers[tooth].implant &&
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].removable = true;
      }
    },
    discardRemovable(tooth) {
      if (
        !this.toothNumbers[tooth].extraction &&
        !this.toothNumbers[tooth].removeImplant
      ) {
        this.toothNumbers[tooth].removable = false;
      }
    },

    //Tooth Bridge
    discardBridge() {
      if (
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.toothNumbers[this.toothNumber].bridge = false;
      }
    },

    //Tooth Bridge
    toothFullVeneer() {
      if (
        !this.toothNumbers[this.toothNumber].implant &&
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.toothNumbers[this.toothNumber].fullVeneer = true;
      }
    },
    discardFullVeneer() {
      if (
        !this.toothNumbers[this.toothNumber].extraction &&
        !this.toothNumbers[this.toothNumber].removeImplant
      ) {
        this.toothNumbers[this.toothNumber].fullVeneer = false;
      }
    },
  },
};
