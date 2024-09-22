// import {destructOptionsList} from "@/helpers/utilities"
export default {
    data() {
        return {
            // bloodGroupOptions: [
            //     { en: "O+", ar: "O+",key: "O+" },
            //     { en: "A+", ar: "A+",key: "A+" },
            //     { en: "AB+", ar: "AB+",key: "AB+" },
            //     { en: "B+", ar: "B+",key: "B+" },
            //     { en: "O-", ar: "O-",key: "O-" },
            //     { en: "A-", ar: "A-",key: "A-" },
            //     { en: "B-", ar: "B-",key: "B-" },
            //     { en: "AB-", ar: "AB-",key: "AB-" }
            // ],
            // rhOptions: [
            //     { en: "+VE", ar: "+VE",key: "+VE" },
            //     { en: "-VE", ar: "-VE",key: "-VE" }
            // ],
            // previousLaborsOptions: [
            //     { en: "Normal", ar: "Normal",key:"normal" },
            //     { en: "C.S", ar: "C.S",key:"normal"},
            //     { en: "Normal/C. S.", ar: "Normal/C. S." ,key:"normal/C.S"}
            // ],
            // sexOptions: [
            //     { en: "Male", ar: "Male",key:"male" },
            //     { en: "Female", ar: "Female",key:"female" },
            //     { en: "M/F", ar: "M/F",key:"m/f" }
            // ],
            // durationUnitOptions: [
            //     { en: "year", ar: "year",key: "year" },
            //     { en: "month", ar: "month",key: "month" }
            // ],
            // semenOptions: [
            //     { en: "normal", ar: "normal",key: "normal" },
            //     { en: "abnormal", ar: "abnormal",key: "abnormal" },
            //     { en: "adequate", ar: "adequate",key: "adequate" },
            //     { en: "ashenozoospermia", ar: "ashenozoospermia",key: "ashenozoospermia" },
            //     { en: "azoospermia", ar: "azoospermia",key: "azoospermia" },
            //     { en: "needed", ar: "needed",key: "needed" },
            //     { en: "other", ar: "other",key: "other" }
            // ],
            // wifeOptions: [
            //     { en: "normal", ar: "normal",key: "normal" },
            //     { en: "abnormal", ar: "abnormal",key: "abnormal" },
            //     { en: "dysmenorrhea", ar: "dysmenorrhea",key: "dysmenorrhea" },
            //     { en: "galactorrhea", ar: "galactorrhea",key: "galactorrhea" },
            //     { en: "increase", ar: "increase",key: "increase" },
            //     { en: "Lactating", ar: "Lactating",key: "Lactating" },
            //     { en: "no", ar: "no",key: "no" },
            //     { en: "obese", ar: "obese",key: "obese" },
            //     { en: "other", ar: "other",key: "other" }
            // ],
            // cycleOptions: [
            //     { en: "normal", ar: "normal",key: "normal" },
            //     { en: "abnormal", ar: "abnormal",key: "abnormal" },
            //     { 
            //         en: "congestive dysmenorrhea", 
            //         ar: "congestive dysmenorrhea",
            //         key: "congestive dysmenorrhea" 
            //     },
            //     { en: "delay mensis", ar: "delay mensis",key: "delay mensis" },
            //     { en: "irregular", ar: "irregular",key: "irregular" },
            //     { 
            //         en: "irregular after marriage", 
            //         ar: "irregular after marriage",
            //         key: "irregular after marriage" 
            //     },
            //     { 
            //         en: "irregular cycle bet. regular ones", 
            //         ar: "irregular cycle bet. regular ones",
            //         key: "irregular cycle bet. regular ones" 
            //     },
            //     { en: "menorrhagia", ar: "menorrhagia",key: "menorrhagia" },
            //     { en: "ovarian cyst <5cm", ar: "ovarian cyst <5cm",key: "ovarian cyst <5cm" },
            //     { en: "polymenorrhea", ar: "polymenorrhea",key: "polymenorrhea" },
            //     { en: "regular", ar: "regular",key: "regular" },
            //     { en: "withdrawal mensis", ar: "withdrawal mensis" },
            //     { en: "other", ar: "other",key: "other" }
            // ],
            // ultraSoundOptions: [
            //     { en: "normal", ar: "normal",key: "normal" },
            //     { en: "abnormal", ar: "abnormal",key: "abnormal" },
            //     { en: "free", ar: "free" },
            //     { en: "varicocele & reflux", ar: "varicocele & reflux",key: "varicocele & reflux" },
            //     { en: "Lt. pelvic kd", ar: "Lt. pelvic kd",key: "Lt. pelvic kd" },
            //     { en: "ovarian cyst < 5cm", ar: "ovarian cyst < 5cm",key: "ovarian cyst < 5cm" },
            //     { en: "ovarian cyst > 5cm", ar: "ovarian cyst > 5cm",key: "ovarian cyst > 5cm" },
            //     { en: "other", ar: "other",key: "other" }
            // ],
            // hsgOptions: [
            //     { en: "free", ar: "free",key: "free" },
            //     { 
            //         en: "HSG if not conceived in the next cycle", 
            //         ar: "HSG if not conceived in the next cycle", 
            //         key: "HSG if not conceived in the next cycle" 
            //     },
            //     { en: "left tube", ar: "left tube" },
            //     { en: "needed", ar: "needed",key: "needed" },
            //     { 
            //         en: "right tube - patient/ LT.tube - blocked", 
            //         ar: "right tube - patient/ LT.tube - blocked",
            //         key: "right tube - patient/ LT.tube - blocked" 
            //     },
            //     { en: "other", ar: "other",key: "other" }
            // ],
            // rightTubeOptions: [
            //     { en: "normal", ar: "normal",key: "normal" },
            //     { en: "hydrosalpinx", ar: "hydrosalpinx",key: "hydrosalpinx" },
            //     { en: "obstructed", ar: "obstructed",key: "obstructed" },
            //     { en: "peritubular adhesion", ar: "peritubular adhesion",key:"peritubular adhesion" },
            //     { en: "pyosalpinex", ar: "pyosalpinex",key: "pyosalpinex" },
            //     { en: "other", ar: "other",key: "other" },
            // ],
            // leftTubeOptions: [
            //     { en: "normal", ar: "normal",key: "normal" },
            //     { en: "hydrosalpinx", ar: "hydrosalpinx",key: "hydrosalpinx" },
            //     { en: "obstructed", ar: "obstructed",key: "obstructed" },
            //     { en: "peritubular adhesion", ar: "peritubular adhesion",key:"peritubularAdhesion" },
            //     { en: "pyosalpinex", ar: "pyosalpinex",key: "pyosalpinex" },
            //     { en: "other", ar: "other",key: "other" },
            // ]
            staticTemplate: [
              {
                drugName: {
                  selection: { english: "New York", arabic: "New York" },
                  manualInsertion: "",
                },
                frequency: ["3 Times", "Day", "After", "Meals"],
                form:"AEROSOL",
                route:"DENTAL",
                strength: {
                  selection:"Amba1U" ,
                  value: "5",
                },
                dose: {
                  selection:"liquid",
                  value: "5",
                },
                period: {
                  selection:"weeks",
                  value: "5",
                },
                permission:"replace",
                note: "Test Test Test Test ",
              },
              {
                drugName: {
                  selection: { english: "New York", arabic: "New York" },
                  manualInsertion: "",
                },
                frequency: ["3 Times", "Day", "After", "Meals"],
                form:"AEROSOL",
                route:"DENTAL",
                strength: {
                  selection:"Amba1U" ,
                  value: "5",
                },
                dose: {
                  selection:"liquid",
                  value: "5",
                },
                period: {
                  selection:"weeks",
                  value: "5",
                },
                permission:"replace",
                note: "Test Test Test Test ",
              },
            ],
      
            frequencyOptions:{
              en: [
              {
                name: "1 Time",
                value: "1 Time",
                children: [
                  {
                    name: "Day",
                    value: "Day",
                    children: [
                      {
                        name: "Before",
                        value: "Before",
                        children: [
                          { name: "Breakfast", value: "Breakfast" },
                          { name: "Dinner", value: "Dinner" },
                          { name: "Lunch", value: "Lunch" },
                          { name: "Sleep", value: "Sleep" },
                        ],
                      },
                      {
                        name: "After",
                        value: "After",
                        children: [
                          { name: "Breakfast", value: "Breakfast" },
                          { name: "Dinner", value: "Dinner" },
                          { name: "Lunch", value: "Lunch" },
                        ],
                      },
                      { name: "Random", value: "Random" },
                    ],
                  },
                  {
                    name: "2 Day",
                    value: "2 Day",
                    children: [
                      {
                        name: "Before",
                        value: "Before",
                        children: [
                          { name: "Breakfast", value: "Breakfast" },
                          { name: "Dinner", value: "Dinner" },
                          { name: "Lunch", value: "Lunch" },
                          { name: "Sleep", value: "Sleep" },
                        ],
                      },
                      {
                        name: "After",
                        value: "After",
                        children: [
                          { name: "Breakfast", value: "Breakfast" },
                          { name: "Dinner", value: "Dinner" },
                          { name: "Lunch", value: "Lunch" },
                        ],
                      },
                      { name: "Random", value: "Random" },
                    ],
                  },
                  {
                    name: "Week",
                    value: "Week",
                    children: [{ name: "Random", value: "Random" }],
                  },
                  {
                    name: "Month",
                    value: "Month",
                    children: [{ name: "Random", value: "Random" }],
                  },
                  {
                    name: "Every 2 Months",
                    value: "Every 2 Months",
                    children: [{ name: "Random", value: "Random" }],
                  },
                  {
                    name: "Every 3 Months",
                    value: "Every 3 Months",
                    children: [{ name: "Random", value: "Random" }],
                  },
                  {
                    name: "Every 6 Months",
                    value: "Every 6 Months",
                    children: [{ name: "Random", value: "Random" }],
                  },
                  {
                    name: "Year",
                    value: "Year",
                    children: [{ name: "Random", value: "Random" }],
                  },
                ],
              },
              {
                name: "2 Times",
                value: "2 Times",
                children: [
                  {
                    name: "Day",
                    value: "Day",
                    children: [
                      {
                        name: "Before",
                        value: "Before",
                        children: [
                          {
                            name: "Breakfast and Lunch",
                            value: "Breakfast and Lunch",
                          },
                          {
                            name: "Breakfast and Dinner",
                            value: "Breakfast and Dinner",
                          },
                          { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                        ],
                      },
                      {
                        name: "After",
                        value: "After",
                        children: [
                          {
                            name: "Breakfast and Lunch",
                            value: "Breakfast and Lunch",
                          },
                          {
                            name: "Breakfast and Dinner",
                            value: "Breakfast and Dinner",
                          },
                          { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                        ],
                      },
                      { name: "Morning/Night", value: "Morning/Night" },
                      { name: "Random", value: "Random" },
                    ],
                  },
                ],
              },
              {
                name: "3 Times",
                value: "3 Times",
                children: [
                  {
                    name: "Day",
                    value: "Day",
                    children: [
                      {
                        name: "Before",
                        value: "Before",
                        children: [{ name: "Meals", value: "Meals" }],
                      },
                      {
                        name: "After",
                        value: "After",
                        children: [{ name: "Meals", value: "Meals" }],
                      },
                      {
                        name: "Random",
                        value: "Random",
                      },
                    ],
                  },
                ],
              },
              {
                name: "4 Times",
                value: "4 Times",
                children: [
                  {
                    name: "Day",
                    value: "Day",
                    children: [{ name: "Random", value: "Random" }],
                  },
                ],
              },
              {
                name: "5 Times",
                value: "5 Times",
                children: [
                  {
                    name: "Day",
                    value: "Day",
                    children: [{ name: "Random", value: "Random" }],
                  },
                ],
              },
              {
                name: "6 Times",
                value: "6 Times",
                children: [
                  {
                    name: "Day",
                    value: "Day",
                    children: [{ name: "Random", value: "Random" }],
                  },
                ],
              },
              ],
             ar: [
            {
              name: "1 Time",
              value: "1 Time",
              children: [
                {
                  name: "Day",
                  value: "Day",
                  children: [
                    {
                      name: "Before",
                      value: "Before",
                      children: [
                        { name: "Breakfast", value: "Breakfast" },
                        { name: "Dinner", value: "Dinner" },
                        { name: "Lunch", value: "Lunch" },
                        { name: "Sleep", value: "Sleep" },
                      ],
                    },
                    {
                      name: "After",
                      value: "After",
                      children: [
                        { name: "Breakfast", value: "Breakfast" },
                        { name: "Dinner", value: "Dinner" },
                        { name: "Lunch", value: "Lunch" },
                      ],
                    },
                    { name: "Random", value: "Random" },
                  ],
                },
                {
                  name: "2 Day",
                  value: "2 Day",
                  children: [
                    {
                      name: "Before",
                      value: "Before",
                      children: [
                        { name: "Breakfast", value: "Breakfast" },
                        { name: "Dinner", value: "Dinner" },
                        { name: "Lunch", value: "Lunch" },
                        { name: "Sleep", value: "Sleep" },
                      ],
                    },
                    {
                      name: "After",
                      value: "After",
                      children: [
                        { name: "Breakfast", value: "Breakfast" },
                        { name: "Dinner", value: "Dinner" },
                        { name: "Lunch", value: "Lunch" },
                      ],
                    },
                    { name: "Random", value: "Random" },
                  ],
                },
                {
                  name: "Week",
                  value: "Week",
                  children: [{ name: "Random", value: "Random" }],
                },
                {
                  name: "Month",
                  value: "Month",
                  children: [{ name: "Random", value: "Random" }],
                },
                {
                  name: "Every 2 Months",
                  value: "Every 2 Months",
                  children: [{ name: "Random", value: "Random" }],
                },
                {
                  name: "Every 3 Months",
                  value: "Every 3 Months",
                  children: [{ name: "Random", value: "Random" }],
                },
                {
                  name: "Every 6 Months",
                  value: "Every 6 Months",
                  children: [{ name: "Random", value: "Random" }],
                },
                {
                  name: "Year",
                  value: "Year",
                  children: [{ name: "Random", value: "Random" }],
                },
              ],
            },
            {
              name: "2 Times",
              value: "2 Times",
              children: [
                {
                  name: "Day",
                  value: "Day",
                  children: [
                    {
                      name: "Before",
                      value: "Before",
                      children: [
                        {
                          name: "Breakfast and Lunch",
                          value: "Breakfast and Lunch",
                        },
                        {
                          name: "Breakfast and Dinner",
                          value: "Breakfast and Dinner",
                        },
                        { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                      ],
                    },
                    {
                      name: "After",
                      value: "After",
                      children: [
                        {
                          name: "Breakfast and Lunch",
                          value: "Breakfast and Lunch",
                        },
                        {
                          name: "Breakfast and Dinner",
                          value: "Breakfast and Dinner",
                        },
                        { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                      ],
                    },
                    { name: "Morning/Night", value: "Morning/Night" },
                    { name: "Random", value: "Random" },
                  ],
                },
              ],
            },
            {
              name: "3 Times",
              value: "3 Times",
              children: [
                {
                  name: "Day",
                  value: "Day",
                  children: [
                    {
                      name: "Before",
                      value: "Before",
                      children: [{ name: "Meals", value: "Meals" }],
                    },
                    {
                      name: "After",
                      value: "After",
                      children: [{ name: "Meals", value: "Meals" }],
                    },
                    {
                      name: "Random",
                      value: "Random",
                    },
                  ],
                },
              ],
            },
            {
              name: "4 Times",
              value: "4 Times",
              children: [
                {
                  name: "Day",
                  value: "Day",
                  children: [{ name: "Random", value: "Random" }],
                },
              ],
            },
            {
              name: "5 Times",
              value: "5 Times",
              children: [
                {
                  name: "Day",
                  value: "Day",
                  children: [{ name: "Random", value: "Random" }],
                },
              ],
            },
            {
              name: "6 Times",
              value: "6 Times",
              children: [
                {
                  name: "Day",
                  value: "Day",
                  children: [{ name: "Random", value: "Random" }],
                },
              ],
            },
            ],
          },
      
          diagnoseParams:{
            url: "example/diagnose",
            suggestions:[]
          },

          drugNameParams:{
            url: "example/drugName",
            suggestions:[]
          }, 
          dietContentParams:{
            url: "example/dietContent",
            suggestions:[]
          },
          treatmentProgramParams:{
            url: "example/treatmentProgram",
            suggestions:[]
        },
        recommendedCenterParams:{
            url: "example/recommendedCenter",
            suggestions:[]
        },
        }
    },
  computed:{
      ////////////////obstetric//////////////
    pregFollowUpOptions(){
      return this.$store.getters['detailsGynecology/gynecologyStaticData/staticData']["obstetric"]["pregFollowUp"]
    },
    bloodGroupOptions () {
      return this.pregFollowUpOptions["bloodGroup"]
    },
    rhOptions () {
      return this.pregFollowUpOptions["rh"]
    },
    previousLaborsOptions () {
      return this.pregFollowUpOptions["previousLabors"]
    },
    sexOptions () {
      return this.pregFollowUpOptions["sex"]
    },
    infertilityOptions(){
      return this.$store.getters['detailsGynecology/gynecologyStaticData/staticData']["Gyn"]["infertility"]
    },
    durationUnitOptions () {
      return this.infertilityOptions["durationUnit"]
    },
    semenOptions () {
      return this.infertilityOptions["semen"]
    },
    wifeOptions () {
      return this.infertilityOptions["wife"]
    },
    cycleOptions () {
      return this.infertilityOptions["cycle"]
    },
    ultraSoundOptions () {
      return this.infertilityOptions["ultraSound"]
    },
    hsgOptions () {
      return this.infertilityOptions["hsg"]
    },
    rightTubeOptions () {
      return this.infertilityOptions["rightTube"]
    },
    leftTubeOptions () {
      return this.infertilityOptions["leftTube"]
    },
  },
  methods:{
    async search(event,params) {
      console.log(event.query)
      try {
        await this.$store.dispatch('generalSuggestions/search',{url:params.url,s:event.query})
        .then((res) => {
            // console.log(res)
            params.suggestions = [...res]
        });
      }
      catch (error) {
        console.error(error)
      }
    },
  }
}