export default {
  data() {
    return {
      data: {
        adultOrChild: {
          english: null,
          arabic: null,
        },
        diagnosis: {
          mainDiagnosis: {
            complaint: null,
            mainDiagnosis: [],
          },
          toothChart: {
            category: {
              english: null,
              arabic: null,
            },
            categoryType: {
              extraction: {
                english: null,
                arabic: null,
              },

              periodontal: {
                english: null,
                arabic: null,
              },
              pulp: {
                english: null,
                arabic: null,
              },
              periapical: {
                english: null,
                arabic: null,
              },
              caries: {
                english: null,
                arabic: null,
              },
              filling: {
                english: null,
                arabic: null,
              },
              endo: {
                english: null,
                arabic: null,
              },
              post: {
                english: null,
                arabic: null,
              },
              crown: {
                english: null,
                arabic: null,
              },
              perio: {
                english: null,
                arabic: null,
              },
              removable: {
                english: null,
                arabic: null,
              },
              implant: {
                english: null,
                arabic: null,
              },
              alignment: {
                english: null,
                arabic: null,
              },
              gingivitis: {
                english: null,
                arabic: null,
              },
              orthodontic: {
                english: null,
                arabic: null,
              },
              ortoFacialTMJ: {
                english: null,
                arabic: null,
              },
              fraction: {
                english: null,
                arabic: null,
              },
              fractures: {
                english: null,
                arabic: null,
              },
              restorativeColor: {
                english: null,
                arabic: null,
              },
            },
            style: {
              extraction: {
                english: null,
                arabic: null,
              },

              pulp: {
                english: null,
                arabic: null,
              },
              periodontal: {
                english: null,
                arabic: null,
              },
              periapical: {
                english: null,
                arabic: null,
              },
              filling: {
                english: null,
                arabic: null,
              },
              caries: {
                english: null,
                arabic: null,
              },
              endo: {
                english: null,
                arabic: null,
              },
              post: {
                english: null,
                arabic: null,
              },
              crown: {
                english: null,
                arabic: null,
              },
              perio: {
                english: null,
                arabic: null,
              },
              removable: {
                english: null,
                arabic: null,
              },
              implant: {
                english: null,
                arabic: null,
              },
              alignment: {
                english: null,
                arabic: null,
              },
              gingivitis: {
                english: null,
                arabic: null,
              },
              orthodontic: {
                mainOption: {
                  english: null,
                  arabic: null,
                },
                type: {
                  arabic: null,
                  english: null,
                },
              },
              fractures: {
                english: null,
                arabic: null,
              },
              restorativeColor: {
                english: null,
                arabic: null,
              },
            },
            tableData: {
              ADULT: {
                one: [],
                two: [],
                three: [],
                four: [],
                five: [],
                six: [],
                seven: [],
                eight: [],
                nine: [],
                ten: [],
                eleven: [],
                twelve: [],
                thirteen: [],
                fourteen: [],
                fifteen: [],
                sixteen: [],
                seventeen: [],
                eighteen: [],
                nineteen: [],
                twenty: [],
                twentyOne: [],
                twentyTwo: [],
                twentyThree: [],
                twentyFour: [],
                twentyFive: [],
                twentySix: [],
                twentySeven: [],
                twentyEight: [],
                twentyNine: [],
                thirty: [],
                thirtyOne: [],
                thirtyTwo: [],
              },
              CHILD: {
                A: [],
                B: [],
                C: [],
                D: [],
                E: [],
                F: [],
                G: [],
                H: [],
                I: [],
                J: [],
                T: [],
                S: [],
                R: [],
                Q: [],
                P: [],
                O: [],
                N: [],
                M: [],
                L: [],
                K: [],
              },
            },
            multiSelectBuffer: [],
      
            ortoFacialTMJ: {
              malooclusion: {
                oneOption: {
                  english: null,
                  arabic: null,
                },
                twoOption: {
                  english: null,
                  arabic: null,
                },
                threeOption: {
                  english: null,
                  arabic: null,
                },
                fourOption: {
                  english: null,
                  arabic: null,
                },
                fiveOption: {
                  english: null,
                  arabic: null,
                },
                sixOption: {
                  english: null,
                  arabic: null,
                },
                sevenOption: {
                  english: null,
                  arabic: null,
                },
                eightOption: {
                  english: null,
                  arabic: null,
                },
              },
              facial: {
                facialProfile: {
                  english: null,
                  arabic: null,
                },
                lowerFace: {
                  english: null,
                  arabic: null,
                },
              },
              TMJMuscles: {
                oneOption: {
                  english: null,
                  arabic: null,
                },
                twoOption: {
                  english: null,
                  arabic: null,
                },
                threeOption: {
                  english: null,
                  arabic: null,
                },
              },
            },
          },
        },
        operations: {
          toothChart: {
            category: {
              english: null,
              arabic: null,
            },
            categoryType: {
              extraction: {
                english: null,
                arabic: null,
              },
              periodontal: {
                english: null,
                arabic: null,
              },
              filling: {
                english: null,
                arabic: null,
              },
              endo: {
                english: null,
                arabic: null,
              },
              post: {
                english: null,
                arabic: null,
              },
              crown: {
                english: null,
                arabic: null,
              },

              perio: {
                english: null,
                arabic: null,
              },
              removable: {
                english: null,
                arabic: null,
              },
              implant: {
                english: null,
                arabic: null,
              },
              otherSurgery: {
                english: null,
                arabic: null,
              },
              orthodontic: {
                english: null,
                arabic: null,
              },
            },
            style: {
              extraction: {
                english: null,
                arabic: null,
              },
              periodontal: {
                english: null,
                arabic: null,
              },
              caries: {
                english: null,
                arabic: null,
              },
              filling: {
                english: null,
                arabic: null,
              },
              endo: {
                english: null,
                arabic: null,
              },
              post: {
                english: null,
                arabic: null,
              },
              crown: {
                english: null,
                arabic: null,
              },
              perio: {
                english: null,
                arabic: null,
              },
              removable: {
                english: null,
                arabic: null,
              },
              implant: {
                english: null,
                arabic: null,
              },
              preventionHygiene: {
                english: null,
                arabic: null,
              },
              orthodontic: {
                mainOption: {
                  english: null,
                  arabic: null,
                },
                type: {
                  arabic: null,
                  english: null,
                },
              },
            },
            tableData: {
              ADULT: {
                one: [],
                two: [],
                three: [],
                four: [],
                five: [],
                six: [],
                seven: [],
                eight: [],
                nine: [],
                ten: [],
                eleven: [],
                twelve: [],
                thirteen: [],
                fourteen: [],
                fifteen: [],
                sixteen: [],
                seventeen: [],
                eighteen: [],
                nineteen: [],
                twenty: [],
                twentyOne: [],
                twentyTwo: [],
                twentyThree: [],
                twentyFour: [],
                twentyFive: [],
                twentySix: [],
                twentySeven: [],
                twentyEight: [],
                twentyNine: [],
                thirty: [],
                thirtyOne: [],
                thirtyTwo: [],
              },
              CHILD: {
                A: [],
                B: [],
                C: [],
                D: [],
                E: [],
                F: [],
                G: [],
                H: [],
                I: [],
                J: [],
                T: [],
                S: [],
                R: [],
                Q: [],
                P: [],
                O: [],
                N: [],
                M: [],
                L: [],
                K: [],
              },
            },
            multiSelectBuffer: [],

    
            implant: {
              fullArch: {
                arch: {
                  english: null,
                  arabic: null,
                },
                type: {
                  english: null,
                  arabic: null,
                },
                material: {
                  english: null,
                  arabic: null,
                },
                mode: {
                  english: null,
                  arabic: null,
                },
                NImplants: null,
              },
            },
          },
        },
        planning: {
          toothChart: {
            category: {
              english: null,
              arabic: null,
            },
            categoryType: {
              extraction: {
                english: null,
                arabic: null,
              },
              periodontal: {
                english: null,
                arabic: null,
              },
              filling: {
                english: null,
                arabic: null,
              },
              endo: {
                english: null,
                arabic: null,
              },
              post: {
                english: null,
                arabic: null,
              },
              crown: {
                english: null,
                arabic: null,
              },
              perio: {
                english: null,
                arabic: null,
              },
              removable: {
                english: null,
                arabic: null,
              },
              implant: {
                english: null,
                arabic: null,
              },
              otherSurgery: {
                english: null,
                arabic: null,
              },
              orthodontic: {
                english: null,
                arabic: null,
              },
            },
            style: {
              extraction: {
                english: null,
                arabic: null,
              },
              caries: {
                english: null,
                arabic: null,
              },
              filling: {
                english: null,
                arabic: null,
              },
              endo: {
                english: null,
                arabic: null,
              },
              periodontal: {
                english: null,
                arabic: null,
              },
              post: {
                english: null,
                arabic: null,
              },
              crown: {
                english: null,
                arabic: null,
              },
              perio: {
                english: null,
                arabic: null,
              },
              removable: {
                english: null,
                arabic: null,
              },
              implant: {
                english: null,
                arabic: null,
              },
              preventionHygiene: {
                english: null,
                arabic: null,
              },
              orthodontic: {
                mainOption: {
                  english: null,
                  arabic: null,
                },
                type: {
                  arabic: null,
                  english: null,
                },
              },
            },
            tableData: {
              ADULT: {
                one: [],
                two: [],
                three: [],
                four: [],
                five: [],
                six: [],
                seven: [],
                eight: [],
                nine: [],
                ten: [],
                eleven: [],
                twelve: [],
                thirteen: [],
                fourteen: [],
                fifteen: [],
                sixteen: [],
                seventeen: [],
                eighteen: [],
                nineteen: [],
                twenty: [],
                twentyOne: [],
                twentyTwo: [],
                twentyThree: [],
                twentyFour: [],
                twentyFive: [],
                twentySix: [],
                twentySeven: [],
                twentyEight: [],
                twentyNine: [],
                thirty: [],
                thirtyOne: [],
                thirtyTwo: [],
              },
              CHILD: {
                A: [],
                B: [],
                C: [],
                D: [],
                E: [],
                F: [],
                G: [],
                H: [],
                I: [],
                J: [],
                T: [],
                S: [],
                R: [],
                Q: [],
                P: [],
                O: [],
                N: [],
                M: [],
                L: [],
                K: [],
              },
            },

            multiSelectBuffer: [],
        
            implant: {
              fullArch: {
                arch: {
                  english: null,
                  arabic: null,
                },
                type: {
                  english: null,
                  arabic: null,
                },
                material: {
                  english: null,
                  arabic: null,
                },
                mode: {
                  english: null,
                  arabic: null,
                },
                NImplants: null,
              },
            },
          },
        },
        lab: {
          caseName: null,
          labName: [],
          selectLabForm: null,
          labForm: {
            selectedTooths: [],
            pfm: {
              white: false,
              semiPrecious: false,
              nonPrecious: false,
              yellow: false,
            },
            metalFree: {
              zirconiaSolid: false,
              zirconiaLayered: false,
              highTranslucent: false,
              solidLingual: false,
              Ips: false,
              lithiumDisilicate: false,
              compositeCrown: false,
            },
            fullCast: {
              HnGold: false,
              noble: false,
              hN: false,
              semiPrecious: false,
              nonPrecious: false,
            },
            other: {
              diagnosticwax: false,
              clearstent: false,
              puttymatrix: false,
              temporary: false,
              temporarymetal: false,
            },
            returnFor: {
              finish: false,
              dieTrim: false,
              bisque: false,
              metalTryin: false,
            },
            restoration: {
              crown: false,
              bridge: false,
              noprepVeneer: false,
              veneer: false,
              inlayOnlay: false,
              implant: false,
              diagnosticwaxup: false,
              restSeats: false,
              crownUnderPartial: false,
            },
            pfmMarginDesign: {
              showNoMetal360: false,
              allprocelainDhoulder360: false,
              metalCollar360: false,
              facialProcelainShoulder360: false,
              lingualMetalCollar: false,
              metalOcclusal: false,
              metalLingual: false,
            },
            front: {
              one: false,
              two: false,
              three: false,
              four: false,
              five: false,
              six: false,
              seven: false,
              eight: false,
            },
            crowmDesign: {
              modifiedTidgeLap: false,
              FullRidgeLap: false,
              sanitaryHygienic: false,
              conical: false,
              ovate: false,
              image: null,
              toothShade: null,
              toothShadeEmax: null,
              shadeGuide: null,
              pinkTissueShade: null,
            },
            ifInsufficientRoom: {
              trimOpposing: false,
              callToDiscuss: false,
              metalOcclusal: false,
              reductionCoping: false,
              resin: false,
              metal: false,
              metalIsland: false,
              trimPrepNoCoping: false,
            },
            occlusalContact: {
              light: false,
              open: false,
              tight: false,
            },
            interproximalContact: {
              light: false,
              medium: false,
              heavy: false,
            },
            specificInstructions: {
              text: null,
              fileSrc: [],
            },
          },
          removableProsthetic: {
            select: {
              toBeExtracted: false,
              removed: false,
            },
            adultOrChild: {
              english: "ADULT",
              ararbic: "ADULT",
            },
            extractions: [],
            caseDesign: {
              selectedTooths: [],
              select: {
                followDesign: false,
                bestDesign: false,
              },
              acrylicShade: {
                select: {
                  lucitone: false,
                  lightMeharry: false,
                  lightPink: false,
                  meharry: false,
                },
                toothShade: null,
                shadeGuide: null,
                toothMouldNo: null,
              },
            },
            dantures: {
              upper: false,
              lower: false,
              both: false,
              customTray: false,
              basePlate: false,
              biteRim: false,
              setUpTryIn: false,
              eliteDenture: false,
              premierDenture: false,
              immediateSurgicalDenture: false,
              finish: false,
              castMetalMesh: false,
              wireReinforcement: false,
              patientID: false,
            },
            partials: {
              upper: false,
              lower: false,
              both: false,
              customTray: false,
              basePlate: false,
              biteRim: false,
              setUpTryIn: false,
              finish: false,
              baseMaterial: {
                acrylicPartial: false,
                customFlexPartial: false,
                valplastPartia: false,
                immediateSurgicalPartial: false,
              },
              metalFramework: {
                chromeCobalt: false,
                vitallium: false,
                eliteMetalPartial: false,
                valplastPartial: false,
                castMetalOnly: false,
                castMetalSetIpTryIn: false,
                castMetalBiterim: false,
              },
              toothType: {
                elite: false,
                premier: false,
              },
              design: {
                horseshoePalate: false,
                fullPalatalMetal: false,
                aPStrap: false,
                lingualBar: false,
                lingualApron: false,
                wroughtWireClasps: false,
                ballClasps: false,
                cosmeticClasp: false,
                unilateral: false,
              },
            },
            nightguardsSplints: {
              upper: false,
              lower: false,
              soft: false,
              hard: false,
              flexiGuard: false,
              astronThermoguard: false,
              sportsGuard: false,
              sportsGuardInput: null,
              dreamTAPSnoreGuard: false,
              deprogrammerMini: false,
              deprogrammerFull: false,
              noOpposing: false,
            },
            other: {
              upper: false,
              lower: false,
              reline: false,
              rebase: false,
              repair: false,
              softLiner: false,
              addClasp: false,
              addClaspInput: null,
            },
            specificInstructions: {
              text: null,
              fileSrc: [],
            },
          },
          implantRx: {
            cement: {
              select: {
                customTitanium: false,
                customZirconia: false,
              },
              design: {
                L: false,
                B: false,
                D: false,
                M: false,
              },
              emergenceProfile: {
                followTissue: false,
                contourDesign: false,
                anatomical: false,
              },
            },
            screw: {
              select: {
                screwRetainedChange: false,
                screwRetainedContinue: false,
                zirconiaSolid: false,
                solidLingual: false,
                PFM: false,
                fullCastCrown: false,
              },
              emergenceProfile: {
                pushTissue: false,
                ridgeLap: false,
                anatomicalDesign: false,
              },
              implant: {
                type: null,
                diameter: null,
              },
              toBeIncluded: {
                labAnalog: false,
                abutment: false,
                impressionCoping: false,
                others: false,
                othersInput: false,
              },
            },
            caseInstructions: {
              selectedTooths: [],
              metal: {
                white: false,
                yellow: false,
                semiPrecious: false,
                nonPrecious: false,
              },
              zirconiaCeramic: {
                zirconiaSolid: false,
                zirconiaLayered: false,
                IPS: false,
                lithiumDisillicate: false,
              },
              restoration: {
                crown: false,
                bridge: false,
              },
              returnFor: {
                dieTrim: false,
                bisque: false,
                metalTryIn: false,
                finish: false,
              },
            },
            marginDesign: {
              showNoMetal360: false,
              allprocelainDhoulder360: false,
              metalCollar360: false,
              facialProcelainShoulder360: false,
              lingualMetalCollar: false,
              metalOcclusal: false,
              metalLingual: false,
            },

            crowmDesign: {
              toothShade: null,
              ponticDesign: {
                modifiedTidgeLap: false,
                FullRidgeLap: false,
                sanitaryHygienic: false,
                conical: false,
                ovate: false,
                showNoMetal360: false,
                metalLingual: false,
              },
              ifInsufficientRoom: {
                trimOpposing: false,
                metalOcclusal: false,
                call: false,
                metalIsland: false,
                reductionCoping: false,
                metal: false,
                resin: false,
              },
              occlusalClearance: {
                light: false,
                open: false,
                tight: false,
              },
              contact: {
                light: false,
                medium: false,
                heavy: false,
              },
            },
            specificInstructions: {
              text: null,
              fileSrc: [],
            },
          },
          orthodontal: {
            springAligners: {
              adultOrChild: {
                english: "ADULT",
                ararbic: "ADULT",
              },
              modified: false,
              noReset: false,
              superModified: false,
              resetTeeth: false,
              selectedTooths: [],
              remove: {
                lingualAttachments: false,
                buccalTubes: false,
              },
              provide: {
                bands: false,
                buccalTubes: false,
              },
            },
            fixedAplliances: {
              fixedAnterior: {
                U: false,
                L: false,
              },
              lingualArch: {
                U: false,
                L: false,
              },
              nance: {
                U: false,
                L: false,
              },
              habitTongue: {
                U: false,
                L: false,
              },
              fenceTongue: {
                U: false,
                L: false,
              },
              bandLoop: {
                U: false,
                L: false,
              },
              activeLoop: {
                U: false,
                L: false,
              },
              slidingLoop: {
                U: false,
                L: false,
              },
              loopedCoil: {
                U: false,
                L: false,
              },
              distalShoe: {
                U: false,
                L: false,
              },
              lipBumper: {
                U: false,
                L: false,
              },
              bluegrass: {
                U: false,
                L: false,
              },
              pedoPartial: {
                U: false,
                L: false,
              },
            },
            archDevelopment: {
              hyraxMiniScrew: {
                U: false,
                L: false,
              },
              hyraxRPEwith: {
                U: false,
                L: false,
              },
              facemaskHooks: {
                U: false,
                L: false,
              },
              hyraxRPE: {
                U: false,
                L: false,
              },
              bondedRPE: {
                U: false,
                L: false,
              },
              pendulum: {
                U: false,
                L: false,
              },
              pendex: {
                U: false,
                L: false,
              },
              quadHelix: {
                U: false,
                L: false,
              },
              biHelix: {
                U: false,
                L: false,
              },
              transpalatalArch: {
                U: false,
                L: false,
              },
              expansionAppliance: {
                U: false,
                L: false,
              },
              schwartz: {
                U: false,
                L: false,
              },
              sagittal: {
                U: false,
                L: false,
              },
              twinBlock: {
                U: false,
                L: false,
              },
              eArch: {
                U: false,
                L: false,
              },
              mara: {
                U: false,
                L: false,
              },
              herbst: {
                U: false,
                L: false,
              },
            },
            ratainers: {
              applianceOptions: {
                upper: false,
                lower: false,
                both: false,
              },
              bleachingTrays: {
                soft: false,
                mm15: false,
              },
              essixInvisibleRetainers: {
                fullOcclusal: false,
                scalloped: false,
                straight: false,
              },
              acrylicDesignOptions: {
                anteriorBitePlate: false,
                reverseIncline: false,
                scallopedAnteriors: false,
                PosteriorBitePlate: false,
                horseshoePalate: false,
                facialAcrylic: false,
              },
              retainerType: {
                hawley: false,
                wraparound: false,
                flipperPontic: false,
                BondedRetainer: false,
                QCM: false,
                wraparoundWithout: false,
              },
              acrylicColor: {
                pink: false,
                clear: false,
                other: false,
                otherInput: null,
              },
              labialWire: {
                three: false,
                two: false,
                four: false,
                flatLabial: false,
              },
              clasps: {
                ball: false,
                arrow: false,
                soldered: false,
                C: false,
                adams: false,
                solderedAdams: false,
                occlusalRest: false,
              },
              pontic: {
                pontic: [],
                shade: null,
              },
            },
            studyModels: {
              finished: false,
              unfinished: false,
              duplication: false,
            },
            nightguards: {
              upper: false,
              lower: false,
              hard: false,
              flexiguard: false,
              deprogrammerMini: false,
              deprogrammerFull: false,
              soft: false,
              astronThermo: false,
              noOpposing: false,
            },
            specificInstructions: {
              text: null,
              fileSrc: [],
            },
          },
        },
        threeDScanner: {
          viewType: {
            english: null,
            arabic: null,
          },
          image: {
            imageFile: null,
            imageDate: null,
            extension:null
          },
        },
      },
    };
  },
};
