export default {
  data() {
    return {
      motionOptions:[
          {name: 'UPPER LIMP', value:'UPPER LIMP', children: [
            {name:"NECK",value:"NECK",children:[
              {name:"Flexion",value:"Flexion"},
              {name:"Extension",value:"Extension "},
              {name:"Latero-Flexion R",value:"Latero-Flexion R"},
              {name:"Latero-Flexion L",value:"Latero-Flexion L"},
              {name:"Rotation R",value:"Rotation R"},
              {name:"Rotation L",value:"Rotation L"},
            ]},
            {name:"SHOULDER",value:"SHOULDER",children:[
              {name:"Flexion",value:"Flexion"},
              {name:"Extension",value:"Extension"},
              {name:"Abduction",value:"Abduction"},
              {name:"Adduction",value:"Adduction"},
              {name:"Medial Rotation",value:"Medial Rotation"},
              {name:"Lateral Rotation",value:"Lateral Rotation"}
            ]},
            {name:"ELBOW",value:"ELBOW",children:[
              {name:"Flexion",value:"Flexion"},
              {name:"Extension",value:"Extension"},
            ]},
            {name:"FOREARM",value:"FOREARM",children:[
              {name:"Pronation",value:"Pronation"},
              {name:"Supination",value:"Supination"},
            ]},
            {name:"WRIST",value:"WRIST",children:[
              {name:"Flexion",value:"Flexion"},
              {name:"Extension",value:"Extension"},
              {name:"Abduction",value:"Abduction"},
              {name:"Adduction",value:"Adduction"},
            ]},
            {name:"FINGERS",value:"FINGERS",children:[
              {name:"Thumb opposition",value:"Thumb opposition"},
              {name:"MP Flexion ",value:"MP Flexion "},
              {name:"MP Extension ",value:"MP Extension "},
              {name:"IP Flexion ",value:"IP Flexion "},
            ]}
          ]},
          {name: 'LOWER LIMP', value:'LOWER LIMP', children: [
            {name: 'HIP', value: 'HIP', children: [
                  {name:"Flexion",value:"Flexion "},
                  {name:"Extension",value:"Extension "},
                  {name:"Abduction",value:"Abduction "},
                  {name:"Adduction",value:"Adduction "},
                  {name:"Medial Rotation",value:"Medial Rotation "},
                  {name:"Lateral Rotation",value:"Lateral Rotation"}
            ]},
            {name: 'KNEE', value: 'KNEE', children: [
                  {name: 'Flexion', value: 'Flexion'},
                  {name: 'Extension', value: 'Extension'},
            ]},
            { name: 'ANKLE-FOOT', value: 'ANKLE-FOOT' ,children:[
              {name: 'Dorsi Flexion', value: 'Dorsi Flexion'},
              {name: 'Plantar Flexion', value: 'Plantar Flexion'},
              {name: 'Eversion', value: 'Eversion'},
              {name: 'Extension', value: 'Extension'},
              {name: 'Extension', value: 'Extension'},
              {name: 'Extension', value: 'Extension'},
            ]},
            { name: 'TRUNK', value: 'TRUNK' ,children:[
              {name:"Global Flexion",value:"Global Flexion"},
              {name:"Thoracic Flexion",value:"Thoracic Flexion"},
              {name:"(OttTest)",value:"(OttTest)"},
              {name:"Lumbar Flexion",value:"Lumbar Flexion"},
              {name:"(Schober test)",value:"(Schober test)"},
              {name:"Global Extension",value:"Global Extension"},
              {name:"Latero-Flexion R",value:"Latero-Flexion R"},
              {name:"Latero-Flexion L",value:"Latero-Flexion L"},
              {name:"Rotation R (write OK or imp.)",value:"Rotation R (write OK or imp.)"},
              {name:"Rotation L (write OK or imp.)",value:"Rotation L (write OK or imp.)"},
            ]},
          ]},
        ],
    };
  },
};
