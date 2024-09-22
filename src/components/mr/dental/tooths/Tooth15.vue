<template>
  <div class="" >
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58.16 113.63"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_15_all">
      <g id="adult_dent_15">
        <g id="adult_dent_15_root">
          <path
            id="adult_dent_15_root1"
            v-if="selectedTooth.dent.root1"
            d="M272.17,231.83c-1.53-.27-4.6,7.48-5.1,8.74a26.8,26.8,0,0,0-1.58,4.69c-.55,2.62-.19,3.53,0,9.05.21,6.05-.21,5.48.12,8.95a17.07,17.07,0,0,1,.12,4.58,43.49,43.49,0,0,1-1.21,4.79,36.15,36.15,0,0,1-1,3.53c-.45,1.12-.77,1.58-.49,2,.42.59,1.53.2,3.89.52.21,0,1.44.33,3.88.94,1.93.47,2.24.56,3,.73,1.33.28,1.45.25,2.67.52.94.2,1.14.28,2.92.73s2.69.67,3,.72a29.66,29.66,0,0,0,4,0c2.05,0,2,.15,3.23.09a25,25,0,0,0,3.7-.52c2-.4,2-.53,3.4-.71a20.31,20.31,0,0,1,3.28-.21,26.11,26.11,0,0,0,2.79.1c1.11-.06,1.66-.09,2-.31.82-.64,0-2-.61-5.41a26.3,26.3,0,0,1-.49-3.33,35.92,35.92,0,0,1,.25-5.2c.15-2.48.16-3.3.36-5.41.11-1.13.2-1.85.36-2.71s.32-1.3.73-2.91c.74-2.86.55-2.58.85-3.44.57-1.61.89-1.59,1.7-3.64a7.73,7.73,0,0,0,.85-3.23,14.51,14.51,0,0,0-.6-2.7,21.17,21.17,0,0,1-.73-2.71c-.17-1.11,0-1.22-.12-2.5,0-.12-.32-2.89-.85-2.91-.33,0-.29,1-1.22,2.71-.55,1-.84,1.13-1.94,2.91-.32.52-.56.91-.85,1.46a29.8,29.8,0,0,0-1.22,2.81,17,17,0,0,1-1.45,2.91,16,16,0,0,1-1.71,2.08c-.88,1-1.11,1.08-2.42,2.4a24.57,24.57,0,0,0-2.43,2.6c-.52.65-.42.62-1.83,2.7-1.27,1.9-1.31,1.87-1.82,2.71s-1,1.71-1.46,2.7a2.18,2.18,0,0,0-.13.28c-.51,1-.87,1.8-1,2-.33.75-.58,1.41-1.09,2.71a12.82,12.82,0,0,0-1,2.91c-.14.92-.07,1.56-.13,1.56a26,26,0,0,0-.72-4.47c-.14-.49-.29-1.18-.61-2.08a22.51,22.51,0,0,0-1.39-3c-.64-1.18-.66-1-1.16-2-.83-1.57-.64-1.81-1.46-3.43-.59-1.16-.78-1.26-1.58-2.81-.12-.23-.27-.54-1.09-2.29-1-2.16-1.52-3.25-1.7-3.75a25.55,25.55,0,0,1-1-3.33,14,14,0,0,1-.49-2.6c-.07-.92,0-1.17,0-2.6,0-.88-.06-1.51-.12-2.29a15.87,15.87,0,0,0-.61-3.95C272.66,232.42,272.49,231.89,272.17,231.83Z"
            transform="translate(-254.38 -226.53)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.47"
          />
          <path
            id="adult_dent_15_root2"
            v-if="selectedTooth.dent.root2"
            d="M288.08,231.93c-.2.06.17.95.37,3.54a21.06,21.06,0,0,1,0,3.65,7.78,7.78,0,0,1-.37,2.08,10.79,10.79,0,0,1-1.7,2.7c-1.59,2.27-1.47,2.24-2.06,2.92-.85,1-.95.84-2.07,2.08s-.88,1.17-1.82,2.18c-1.12,1.2-1.48,1.32-1.7,2a3.52,3.52,0,0,0,.12,2.08,31.4,31.4,0,0,0,1.66,3.71c1,2,.39.57.89,1.6a20.86,20.86,0,0,0,1.7,3c.72,1.1.52.87,1.22,2.08s.5,1.82.85,1.87,1.09-1.21,2.06-3.22c1.46-3,2.19-4.52,2.55-5.21.93-1.73,1.09-1.76,2.92-5,.91-1.61,1.36-2.42,1.46-2.71.34-1.08.47-2.37-.73-6.87a48.85,48.85,0,0,0-1.46-4.78C290.53,235.73,288.5,231.82,288.08,231.93Z"
            transform="translate(-254.38 -226.53)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.47"
          />
        </g>
        <path
          id="adult_dent_15_crown"
          v-if="selectedTooth.dent.crown1"
          :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
          d="M262.94,279.6a19.37,19.37,0,0,0-6.44,7.7,16.93,16.93,0,0,0-1.21,9.26c.33,3.16.59,5.64,2.79,7.91,2.92,3,7.22,3.57,8.62,3.75,3.62.45,4.73-.49,9.72-1.15a71.11,71.11,0,0,1,18.34.31c3.68.55,6.15,1.24,9.48.32a11.45,11.45,0,0,0,5.34-3c3.59-3.87,1.87-9.26,1.46-10.41-1.06-3-2.4-2.9-4.25-7.18-1.54-3.56-.88-4.23-2.07-5.1-2.36-1.74-5.67.44-14.81,1.25-4.07.36-6.36.56-9.48,0-3.66-.66-5-1.75-9.23-2.71A38.07,38.07,0,0,0,262.94,279.6Z"
          transform="translate(-254.38 -226.53)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.47"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I15"
        v-if="selectedTooth.filling_caries_class_i"
        d="M286.65,305.86h-7.16a45.36,45.36,0,0,0-5.18.74c-1.4.28-2.67.61-3.83.95v-5.9a3.68,3.68,0,0,1,3.93-3.36h16.95a3.67,3.67,0,0,1,3.92,3.36v5.29c-.93-.25-2-.47-3.08-.66A34.08,34.08,0,0,0,286.65,305.86Z"
        transform="translate(-254.38 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.49"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial15"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M258.3,290.06h9.3a2.71,2.71,0,0,1,2.9,2.47v13.73a1.27,1.27,0,0,1-.29,1.21c-.38.32-1,.23-2.66,0l-2.69-.33-2.83-.91a9.57,9.57,0,0,1-2.9-1.81,8,8,0,0,1-2.05-2.91,34,34,0,0,1-1-5.25,33.39,33.39,0,0,1-.14-4.7,1.38,1.38,0,0,1,.3-.81A2.56,2.56,0,0,1,258.3,290.06Z"
        transform="translate(-254.38 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.49"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal15"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M295.93,306.89c-.35-.31-.31-.73-.26-1.58,0-.34.14-2.33.1-3.45s-.19-1-.42-2.9c-.09-.82-.14-1.5-.21-2.79-.19-3.89-.28-5.85.21-6.31s.81-.29,5.6-.63c3.5-.24,5.47-.49,6.17.41a10.73,10.73,0,0,0,.94,1.43c.37.45.45.45.83.89a6.94,6.94,0,0,1,1.15,1.8,16.85,16.85,0,0,1,.47,1.74c.26,1,.39,1.56.42,1.79a9.13,9.13,0,0,1,.05,2.2,7.87,7.87,0,0,1-.62,2.6,8.55,8.55,0,0,1-1.47,2.24,8,8,0,0,1-1.88,1.56,10.8,10.8,0,0,1-3.34,1.17,12,12,0,0,1-2.93.4,25.21,25.21,0,0,1-2.56-.27C296.78,307,296.3,307.22,295.93,306.89Z"
        transform="translate(-254.38 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.49"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V15"
        v-if="selectedTooth.filling_caries_class_v"
        x="22.53"
        y="60.01"
        width="13.1"
        height="3.14"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.49"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal15"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M310.53,295.36l-12.72.49a2.5,2.5,0,0,1-2.66-2.28v-1.32a2.49,2.49,0,0,1,2.66-2.28l10.33.73-.06-.06.06.06,1.59,2.7C310,294.05,310.26,294.71,310.53,295.36Z"
        transform="translate(-254.38 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.49"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial15"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M267.15,295.85l-10.9-.39h0a5.12,5.12,0,0,1,.47-4.66h0l10.43-.83a2.49,2.49,0,0,1,2.66,2.28v1.32A2.5,2.5,0,0,1,267.15,295.85Z"
        transform="translate(-254.38 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.49"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo15">
        <path
          id="ADULT_DENT_Endo15_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M270.46,238.71c-1.17,0-3,7.61-2.86,15.45.1,5.89,1.2,4.92,1.43,11.76.16,4.76-.14,12,2.46,12.82.29.1,1.62.44,2.66.7.68.17,1.21.29,2.26.53,1.58.36,2.38.54,2.46.53,1.79-.36,2.79-7.65.2-16.16-1.7-5.59-3.14-5.71-5.33-11.94C270.8,244,271.44,238.73,270.46,238.71Z"
          transform="translate(-254.38 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Endo15_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M304.28,244c-1.17-.37-5.93,8.19-8.41,13.16-3.71,7.48-2.31,6.92-5.12,11.59-1.49,2.48-2.22,4.7-3.69,9.13-.38,1.15-.9,2.84,0,3.51.38.29.87.29,4.1-.17,2-.29,3.08-.47,4.51-.7,3.45-.56,3.56-.51,3.89-.71,2-1.19,1.18-4.74.82-7.55-.32-2.54.34-6.84,1.64-15.45S305.05,244.22,304.28,244Z"
          transform="translate(-254.38 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Endo15_3"
          v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M290.14,240.64c-1.12-.15-1,4.34-5.74,9.83-1.91,2.21-3.79,3.64-3.69,6,0,.72.23,1,1.64,3.86,2.26,4.63,2.49,5.45,3.07,5.45s1.14-1.07,3.08-6.5c1.15-3.23,1.73-4.85,1.84-5.27C292,247.91,291.54,240.83,290.14,240.64Z"
          transform="translate(-254.38 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
      </g>
      <g id="ADULT_DENT_Post15">
        <g id="ADULT_DENT_Post15_1" v-if="selectedTooth.post.post1">
          <path
            d="M289.7,280.71l11.3.86c.42,0,.73.32.68.64l-.29,2.3a.74.74,0,0,1-.83.53l-11.3-.86c-.42,0-.73-.32-.68-.64l.29-2.3A.74.74,0,0,1,289.7,280.71Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M298.2,253.78l1.43.11c.74.06,1.28.56,1.21,1.13l-3.3,25.82a1.29,1.29,0,0,1-1.47.92l-1.43-.11c-.74,0-1.28-.56-1.21-1.13l3.3-25.81A1.3,1.3,0,0,1,298.2,253.78Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M292.29,275.35l7.73.59c.21,0,.36.15.34.31l-.1.74a.36.36,0,0,1-.41.26l-7.73-.59c-.2,0-.35-.16-.33-.31l.09-.74A.35.35,0,0,1,292.29,275.35Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M292.67,271.4l7.78.6c.19,0,.33.14.31.29l-.1.78a.35.35,0,0,1-.38.24l-7.78-.59c-.19,0-.33-.15-.31-.3l.1-.78C292.3,271.5,292.48,271.39,292.67,271.4Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M293.3,267.48l7.72.59a.32.32,0,0,1,.34.32l-.09.73a.38.38,0,0,1-.42.26l-7.72-.59a.32.32,0,0,1-.34-.32l.1-.73A.35.35,0,0,1,293.3,267.48Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M293.67,263.53l7.79.6c.19,0,.33.14.31.29l-.1.78a.34.34,0,0,1-.38.24l-7.79-.59c-.19,0-.33-.15-.31-.29l.1-.79A.35.35,0,0,1,293.67,263.53Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M294.16,259.6l7.81.59c.19,0,.32.14.3.28l-.1.81a.33.33,0,0,1-.37.23l-7.75-.59c-.22,0-.37-.17-.35-.33l.1-.76C293.81,259.69,294,259.59,294.16,259.6Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M294.81,255.68l7.72.58c.21,0,.36.16.34.32l-.09.73a.37.37,0,0,1-.42.26l-7.72-.58c-.21,0-.36-.16-.34-.32l.09-.73A.37.37,0,0,1,294.81,255.68Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="39.53"
            y1="33.13"
            x2="48.37"
            y2="29.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="39.43"
            y1="34.3"
            x2="48.27"
            y2="30.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="38.99"
            y1="37.1"
            x2="47.79"
            y2="33.74"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="38.9"
            y1="38.21"
            x2="47.65"
            y2="34.93"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="38.67"
            y1="41"
            x2="47.28"
            y2="37.68"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="38.51"
            y1="42.17"
            x2="47.17"
            y2="38.84"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="38.01"
            y1="44.95"
            x2="46.9"
            y2="41.66"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="37.91"
            y1="46.11"
            x2="46.71"
            y2="42.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="37.64"
            y1="48.88"
            x2="46.28"
            y2="45.55"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="37.51"
            y1="50.05"
            x2="46.1"
            y2="46.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M302.8,257.75"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M291.18,283.62l7.7.59c.82.06,1.42.62,1.34,1.25l-.36,2.79a1.43,1.43,0,0,1-1.63,1l-7.7-.58c-.82-.06-1.42-.62-1.34-1.25l.36-2.8A1.44,1.44,0,0,1,291.18,283.62Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
        </g>
        <g id="ADULT_DENT_Post15_3" v-if="selectedTooth.post.post3">
          <path
            d="M265.57,278.33l8.46,1a.6.6,0,0,1,.51.68l-.23,2.45a.59.59,0,0,1-.63.56l-8.47-1a.61.61,0,0,1-.51-.68l.24-2.45A.59.59,0,0,1,265.57,278.33Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M272.09,249.68l1.07.12a1.09,1.09,0,0,1,.9,1.21l-2.62,27.48a1,1,0,0,1-1.11,1l-1.07-.12a1.08,1.08,0,0,1-.9-1.21L271,250.66A1,1,0,0,1,272.09,249.68Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M267.54,272.63l5.79.65a.3.3,0,0,1,.25.34l-.07.79a.29.29,0,0,1-.31.27l-5.8-.65a.31.31,0,0,1-.25-.34l.08-.79A.28.28,0,0,1,267.54,272.63Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M267.84,268.43l5.83.66a.29.29,0,0,1,.24.31l-.08.83a.27.27,0,0,1-.29.25l-5.83-.65a.29.29,0,0,1-.24-.32l.08-.82A.28.28,0,0,1,267.84,268.43Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M268.34,264.25l5.78.66a.31.31,0,0,1,.26.34l-.08.78a.28.28,0,0,1-.31.27l-5.78-.65a.3.3,0,0,1-.26-.34l.07-.78A.31.31,0,0,1,268.34,264.25Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M268.64,260.05l5.84.66a.29.29,0,0,1,.23.31l-.08.84a.28.28,0,0,1-.29.25l-5.84-.66a.28.28,0,0,1-.23-.31l.08-.84A.28.28,0,0,1,268.64,260.05Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M269,255.87l5.85.66a.26.26,0,0,1,.22.3l-.08.85a.24.24,0,0,1-.27.24l-5.82-.65a.32.32,0,0,1-.26-.35l.08-.81A.26.26,0,0,1,269,255.87Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M269.53,251.69l5.79.65a.31.31,0,0,1,.26.34l-.08.78a.29.29,0,0,1-.31.28l-5.79-.65a.3.3,0,0,1-.25-.34l.07-.79A.29.29,0,0,1,269.53,251.69Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="14.46"
            y1="29.4"
            x2="21.11"
            y2="25.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="14.37"
            y1="30.65"
            x2="21.02"
            y2="27.14"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="14.03"
            y1="33.62"
            x2="20.65"
            y2="30.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="13.95"
            y1="34.8"
            x2="20.53"
            y2="31.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="13.77"
            y1="37.78"
            x2="20.25"
            y2="34.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="13.64"
            y1="39.02"
            x2="20.15"
            y2="35.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="13.25"
            y1="41.98"
            x2="19.94"
            y2="38.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="13.17"
            y1="43.22"
            x2="19.79"
            y2="39.73"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="12.95"
            y1="46.17"
            x2="19.45"
            y2="42.65"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="12.85"
            y1="47.41"
            x2="19.31"
            y2="43.92"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M275.52,253.92"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M266.66,281.43l5.77.66a1.18,1.18,0,0,1,1,1.33l-.28,3a1.15,1.15,0,0,1-1.23,1.09l-5.77-.65a1.21,1.21,0,0,1-1-1.34l.29-3A1.15,1.15,0,0,1,266.66,281.43Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
        </g>
        <g id="ADULT_DENT_Post15_2" v-if="selectedTooth.post.post2">
          <path
            d="M278.22,280.39l7.34,1.89c.28.07.43.45.35.86l-.56,2.91c-.08.41-.37.68-.64.61l-7.34-1.89c-.28-.07-.43-.46-.35-.87l.56-2.91C277.66,280.59,278,280.32,278.22,280.39Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M288.21,246.7l.93.24c.48.13.76.81.62,1.52l-6.37,32.63c-.14.72-.64,1.2-1.12,1.08l-.93-.24c-.48-.12-.76-.81-.62-1.52l6.36-32.63C287.22,247.06,287.73,246.58,288.21,246.7Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M280.8,273.74l5,1.29a.36.36,0,0,1,.17.43l-.18.93c0,.2-.18.34-.31.3l-5-1.29a.36.36,0,0,1-.17-.43l.18-.93C280.53,273.84,280.67,273.7,280.8,273.74Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M281.69,268.75l5.06,1.3c.12,0,.2.21.16.39l-.19,1c0,.18-.17.31-.29.28l-5.06-1.31c-.13,0-.2-.21-.16-.39l.19-1C281.44,268.84,281.57,268.71,281.69,268.75Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M282.75,263.79l5,1.3c.14,0,.22.22.18.43l-.18.92c0,.2-.18.34-.32.3l-5-1.29c-.13,0-.21-.23-.17-.43l.18-.92C282.47,263.89,282.61,263.76,282.75,263.79Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M283.63,258.8l5.06,1.3c.13,0,.2.21.16.39l-.19,1c0,.18-.17.3-.29.27l-5.06-1.3a.32.32,0,0,1-.16-.39l.19-1C283.38,258.89,283.51,258.77,283.63,258.8Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M284.59,253.82l5.08,1.31c.12,0,.19.2.15.38l-.19,1c0,.18-.16.3-.28.27l-5.05-1.3c-.14,0-.21-.23-.17-.44l.18-1C284.35,253.91,284.47,253.79,284.59,253.82Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M285.66,248.87l5,1.3c.13,0,.21.22.17.43l-.18.92c0,.2-.18.34-.32.31l-5-1.3c-.13,0-.21-.23-.17-.43l.18-.92C285.38,249,285.52,248.84,285.66,248.87Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="30.04"
            y1="27.35"
            x2="36.43"
            y2="23.76"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="29.78"
            y1="28.84"
            x2="36.17"
            y2="25.23"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="29.04"
            y1="32.37"
            x2="35.41"
            y2="28.71"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="28.79"
            y1="33.77"
            x2="35.12"
            y2="30.21"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="28.19"
            y1="37.31"
            x2="34.44"
            y2="33.69"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="27.9"
            y1="38.79"
            x2="34.17"
            y2="35.17"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="27.12"
            y1="42.29"
            x2="33.54"
            y2="38.73"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="26.86"
            y1="43.76"
            x2="33.23"
            y2="40.17"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="26.23"
            y1="47.27"
            x2="32.49"
            y2="43.64"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <line
            x1="25.96"
            y1="48.75"
            x2="32.18"
            y2="45.15"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M290.62,252.08"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
          <path
            d="M278.73,284.19l5,1.29c.53.14.84.89.69,1.69l-.69,3.53c-.16.79-.71,1.32-1.25,1.19l-5-1.29c-.54-.14-.84-.9-.69-1.69l.69-3.53C277.64,284.59,278.19,284.05,278.73,284.19Z"
            transform="translate(-254.38 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.49"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis15">
        <path
          id="ADULT_DENT_Left_gingivitis15"
          v-if="selectedTooth.gingivitis.left"
          d="M262.92,278.64c.13-.19-.65-.54-.77-1.32a2,2,0,0,1,.55-1.51c.65-.93.27-1,1.21-4.63.59-2.24.77-2.32,1-3.69.31-1.86.49-3-.11-3.31-.91-.51-3.59.72-4.64,2.65-.89,1.63.18,2.32-.11,5.29-.31,3.14-1.68,4.18-.77,5.39S262.71,279,262.92,278.64Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Right_gingivitis15"
          v-if="selectedTooth.gingivitis.right"
          d="M305.29,281.2c-.18-.25.45-.55.77-1.42.38-1.06-.12-1.8-.66-3.5a17.25,17.25,0,0,1-.78-3.69c-.13-1.49.14-1.4.11-3.87,0-1.82-.16-2.36.23-2.55.66-.33,2.3.63,3.08,1.89.41.65.47,1.18.56,2.83.21,3.91,0,3.76.22,4.73.44,2.61,1.46,3.14.91,4.15C308.88,281.29,305.64,281.7,305.29,281.2Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Left_periodontal15"
          v-if="selectedTooth.periodontal.left"
          d="M262.92,278.64c.13-.19-.65-.54-.77-1.32a2,2,0,0,1,.55-1.51c.65-.93.27-1,1.21-4.63.59-2.24.77-2.32,1-3.69.31-1.86.49-3-.11-3.31-.91-.51-3.59.72-4.64,2.65-.89,1.63.18,2.32-.11,5.29-.31,3.14-1.68,4.18-.77,5.39S262.71,279,262.92,278.64Z"
          transform="translate(-254.38 -226.53)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Right_periodontal15"
          v-if="selectedTooth.periodontal.right"
          d="M305.29,281.2c-.18-.25.45-.55.77-1.42.38-1.06-.12-1.8-.66-3.5a17.25,17.25,0,0,1-.78-3.69c-.13-1.49.14-1.4.11-3.87,0-1.82-.16-2.36.23-2.55.66-.33,2.3.63,3.08,1.89.41.65.47,1.18.56,2.83.21,3.91,0,3.76.22,4.73.44,2.61,1.46,3.14.91,4.15C308.88,281.29,305.64,281.7,305.29,281.2Z"
          transform="translate(-254.38 -226.53)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Left_perio15"
          v-if="selectedTooth.perio.left"
          d="M262.92,278.64c.13-.19-.65-.54-.77-1.32a2,2,0,0,1,.55-1.51c.65-.93.27-1,1.21-4.63.59-2.24.77-2.32,1-3.69.31-1.86.49-3-.11-3.31-.91-.51-3.59.72-4.64,2.65-.89,1.63.18,2.32-.11,5.29-.31,3.14-1.68,4.18-.77,5.39S262.71,279,262.92,278.64Z"
          transform="translate(-254.38 -226.53)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Right_perio15"
          v-if="selectedTooth.perio.right"
          d="M305.29,281.2c-.18-.25.45-.55.77-1.42.38-1.06-.12-1.8-.66-3.5a17.25,17.25,0,0,1-.78-3.69c-.13-1.49.14-1.4.11-3.87,0-1.82-.16-2.36.23-2.55.66-.33,2.3.63,3.08,1.89.41.65.47,1.18.56,2.83.21,3.91,0,3.76.22,4.73.44,2.61,1.46,3.14.91,4.15C308.88,281.29,305.64,281.7,305.29,281.2Z"
          transform="translate(-254.38 -226.53)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
      </g>
      <g id="ADULT_DENT_Implant15" v-if="selectedTooth.implant">
        <path
          d="M272.21,274.51l23.92.05c.88,0,1.59.46,1.58,1l-.08,4c0,.56-.74,1-1.62,1l-23.92-.05c-.89,0-1.6-.46-1.59-1l.08-4C270.6,275,271.32,274.51,272.21,274.51Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M283.76,226.77h3c1.57,0,2.83.81,2.81,1.8l-.9,45.14c0,1-1.31,1.8-2.88,1.79h-3c-1.57,0-2.82-.81-2.8-1.8l.9-45.15C280.91,227.57,282.19,226.77,283.76,226.77Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M276.39,264.89l16.37,0c.43,0,.78.22.77.5l0,1.3c0,.27-.36.49-.8.49l-16.37,0c-.43,0-.78-.22-.78-.5l0-1.29C275.6,265.11,276,264.89,276.39,264.89Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M276.26,258l16.47,0c.41,0,.74.21.73.47l0,1.36c0,.26-.34.46-.74.46l-16.47,0c-.41,0-.74-.21-.73-.47l0-1.36C275.52,258.21,275.86,258,276.26,258Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M276.68,251.13l16.34,0c.44,0,.79.23.79.51l0,1.28c0,.28-.37.5-.81.5l-16.34,0c-.44,0-.8-.23-.79-.51l0-1.28C275.87,251.35,276.23,251.13,276.68,251.13Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M276.53,244.25l16.49,0c.4,0,.72.21.72.46l0,1.37c0,.26-.34.46-.74.46l-16.49,0c-.4,0-.72-.21-.72-.46l0-1.38C275.8,244.45,276.13,244.25,276.53,244.25Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M276.64,237.37l16.54,0c.39,0,.7.2.69.45l0,1.4c0,.24-.33.44-.72.44l-16.42,0c-.45,0-.81-.23-.81-.52l0-1.33C275.93,237.56,276.25,237.36,276.64,237.37Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M277.08,230.49l16.35,0c.44,0,.8.23.79.5l0,1.29c0,.28-.36.5-.8.5l-16.35,0c-.44,0-.79-.23-.79-.51l0-1.28C276.28,230.71,276.64,230.48,277.08,230.49Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.76"
          y1="10.97"
          x2="39.54"
          y2="4.11"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.81"
          y1="13.01"
          x2="39.59"
          y2="6.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.56"
          y1="17.91"
          x2="39.23"
          y2="10.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.61"
          y1="19.84"
          x2="39.21"
          y2="13.05"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.79"
          y1="24.71"
          x2="39.09"
          y2="17.86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.72"
          y1="26.77"
          x2="39.12"
          y2="19.9"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.33"
          y1="31.64"
          x2="39.22"
          y2="24.8"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.38"
          y1="33.67"
          x2="39.08"
          y2="26.81"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.46"
          y1="38.5"
          x2="38.81"
          y2="31.62"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <line
          x1="21.46"
          y1="40.54"
          x2="38.72"
          y2="33.72"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M294.35,233.06"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          d="M276,279.36l16.3,0c1.74,0,3.13.9,3.11,2l-.1,4.88c0,1.1-1.45,2-3.18,2l-16.3,0c-1.74,0-3.13-.89-3.11-2l.1-4.89C272.82,280.24,274.25,279.36,276,279.36Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown15">
        <path
          id="ADULT_DENT_Endo_Crown1_15"
          v-if="selectedTooth.endo_crown.crown1"
          d="M300,307.07a70.28,70.28,0,0,0-32.21.36,18.28,18.28,0,0,1-6.24-1.75,16.05,16.05,0,0,1-2.88-1.8c-.72-1.5-1.45-3-2.17-4.51a.92.92,0,0,1,0-.91,1.28,1.28,0,0,1,1.26-.44h51.74a1.29,1.29,0,0,1,1.25.44.91.91,0,0,1,0,1.15l-1.89,4.21a10,10,0,0,1-3.37,2.34A12,12,0,0,1,300,307.07Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.47"
        />
        <path
          id="ADULT_DENT_Endo_Crownl2_15"
          v-if="selectedTooth.endo_crown.crown2"
          d="M289.65,291l-12.63.26-1.95,6.43a.25.25,0,0,0,.27.31H291.8a.25.25,0,0,0,.27-.32Z"
          transform="translate(-254.38 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.47"
        />
      </g>
      <g id="ADULT_DENT_Periapical15">
        <path
          id="ADULT_DENT_Periapical15_3"
          v-if="selectedTooth.periapical.periapical3"
          d="M264.36,249.14c.39,0-.05-1.95.54-4.81.34-1.63.52-1.2,1.92-5.2a52.53,52.53,0,0,1,2.31-5.4,6.5,6.5,0,0,1,1.38-1.78c.55-.51,1.3-1.2,1.93-1,.37.09.62.47,1,1.91a22,22,0,0,1,.62,3.49c.24,2.73.21,1.65.38,3.88.28,3.52.21,4.45.46,4.48s1.1-2,1.39-3.89a15.55,15.55,0,0,0,.15-3.16,16.56,16.56,0,0,0-.61-4.48c-.57-1.95-.86-2.92-1.92-3.49a5.2,5.2,0,0,0-3.85,0c-.77.32-1.66.91-3.53,4.75a43.43,43.43,0,0,0-2.85,7.63,9.3,9.3,0,0,0-.54,4.09C263.34,247.66,264,249.18,264.36,249.14Z"
          transform="translate(-254.38 -226.53)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Periapical15_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M286.19,242.49c.27.06.84-.77,1.16-1.52a7,7,0,0,0,.38-2.83,18.65,18.65,0,0,0-.08-3.23,14.2,14.2,0,0,1-.23-2.37c0-1,.13-1.35.39-1.45s1,.26,1.15.4a3.4,3.4,0,0,1,1.23,1.78c.39,1.14,1,2.21,1.38,3.35.8,2.36,1.52,4.46,1.85,4.42s.24-2.17,0-3.76a15.64,15.64,0,0,0-1.31-4.28c-.68-1.44-1-2.18-1.92-2.76s-2.57-1.23-3.61-.66c-.81.44-.88,1.54-1,3.75a21.53,21.53,0,0,0,.15,3.95c.18,1.34.33,1.48.39,2.57C286.2,241.47,285.93,242.42,286.19,242.49Z"
          transform="translate(-254.38 -226.53)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
        <path
          id="ADULT_DENT_Periapical15_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M302.49,239.85a19.74,19.74,0,0,1,1.38-2,5.92,5.92,0,0,0,.85-1.06,10,10,0,0,0,.46-1.51c.22-.76.3-1,.54-1.12a1.93,1.93,0,0,1,.92-.27,1.19,1.19,0,0,1,.61.07c.36.2.32.74.31,1,0,.9.27.72.54,2.31s-.07,1.69.23,3c.23,1,.43.94.69,2,.33,1.38.2,2.15.39,2.18s.8-1.28,1-2.7a11.74,11.74,0,0,0-.26-3.81c0-.14-.23-1-.67-2.84a4.19,4.19,0,0,0-.84-2.11,2.9,2.9,0,0,0-1.85-1c-1.2-.07-2.11.9-2.76,1.58a9,9,0,0,0-2.08,4.15c-.49,1.65-.8,3.56-.54,3.62C301.52,241.46,301.65,241.14,302.49,239.85Z"
          transform="translate(-254.38 -226.53)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.49"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer15"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M300.1,307.15a70.44,70.44,0,0,0-32.2.37,18.52,18.52,0,0,1-6.24-1.75,16.05,16.05,0,0,1-2.88-1.8l-2.17-4.51a.89.89,0,0,1,0-.91,1.27,1.27,0,0,1,1.26-.44h51.74a1.3,1.3,0,0,1,1.25.44.91.91,0,0,1,0,1.15c-.63,1.4-1.26,2.81-1.9,4.21a9.84,9.84,0,0,1-3.36,2.34A11.82,11.82,0,0,1,300.1,307.15Z"
        transform="translate(-254.38 -226.53)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.47"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer15"
        v-if="selectedTooth.crown.onlay"
        d="M300.1,307.15a70.44,70.44,0,0,0-32.2.37,18.52,18.52,0,0,1-6.24-1.75,16.05,16.05,0,0,1-2.88-1.8l-2.17-4.51a.89.89,0,0,1,0-.91,1.27,1.27,0,0,1,1.26-.44h51.74a1.3,1.3,0,0,1,1.25.44.91.91,0,0,1,0,1.15c-.63,1.4-1.26,2.81-1.9,4.21a9.84,9.84,0,0,1-3.36,2.34A11.82,11.82,0,0,1,300.1,307.15Z"
        transform="translate(-254.38 -226.53)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.47"
      />
    </g>
  </svg>
  </div>
</template>
<script>
export default {
  props: ["selectedTooth"],
};
</script>
<style  lang="scss" scoped>
.single-tooth{
    width:100% ;
    height:100% ;
    position: relative;
    svg {
      width: 100%;
      height: 100%;
    }
    span {
      text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
      font-weight: 500;
      padding:.65rem;
      border-radius: 20px;
      color:#FFF;
      position: absolute;
      line-height: 1.3;
      bottom: -2.5rem;
      left: 40%;

      
      
    }
}
</style>