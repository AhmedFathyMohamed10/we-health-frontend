<template>
  <div  class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.74 113.65"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    
  >
    <g id="adult_dent_16_all">
      <g id="adult_dent_16">
        <g id="adult_dent_16_root">
          <path
            id="adult_dent_16_root1"
            v-if="selectedTooth.dent.root1"
            d="M308.84,237.5c-.67-.46-3.07.1-11.16,5.25-5.41,4.56-8.64,7.39-9,7.93a.09.09,0,0,1-.08.06c-.41,0-1.31-3.69-2.27-8.4-3-6.81-4.44-8.07-5.19-8s-1.12,1.71-1.89,4.92c-.4,1.67-.63,3.06-.77,4-2.52,3.56-4.51,6.33-5.78,8.1a67.79,67.79,0,0,0-4.16,6.16,50.6,50.6,0,0,0-3,6.06,35.61,35.61,0,0,0-2.09,6.32,33.49,33.49,0,0,0-.7,5.51c-.24,3.62-.2,5.43.53,6.05,2.26,1.95,8.92-.15,9.5-.34a35.47,35.47,0,0,0,20,.32c1.91.43,6.37,1.23,8.84-.65a2.48,2.48,0,0,0,.42-.36c.82-.95.64-2.79.11-9.73-.61-7.85-.21-3.25-.56-7.65-.37-4.79-.47-5.54-.31-7.14a19.7,19.7,0,0,1,1.74-6.86c1.18-2.54,2.07-3,4-6.59C308.66,239.56,309.51,238,308.84,237.5Z"
            transform="translate(-254.34 -226.51)"
            fill="#fff"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.56"
          />
          <path
            id="adult_dent_16_root2"
            v-if="selectedTooth.dent.root2"
            d="M298.41,232.52c-.77-.45-4.39,1.74-6.81,4.27-.61.63-3.51,3.66-3.62,7.11,0,.22.09,1.22.28,3.23.17,1.74.24,2.15.56,2.24.63.17,1.73-1.09,3.19-2.77a16.22,16.22,0,0,0,2.8-3.84,15,15,0,0,0,1-3.68C296.9,234.77,299.06,232.91,298.41,232.52Z"
            transform="translate(-254.34 -226.51)"
            fill="#fff"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.56"
          />
        </g>
        <g id="adult_dent_16_crown">
          <path
            id="adult_dent_16_crown1"
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
            d="M263.34,283.37a12.83,12.83,0,0,0-5.06,3.08,11.08,11.08,0,0,0-2.27,4,11.48,11.48,0,0,0-.87,3.48c-.09,1.18.12,1.35.35,4.28.09,1.18.14,1.86.17,2.81.08,2.78-.19,3.19.35,4a5.88,5.88,0,0,0,3,2c1.17.43,1.63.29,4.7.54,3.28.26,3.57.48,5.93.53a12.52,12.52,0,0,0,4-.27c1.66-.47,1.61-1,3.32-1.47,1.36-.34,1.57,0,3.84-.4a20.92,20.92,0,0,1,2.79-.53,10.51,10.51,0,0,1,3.83.8c1.16.4,1.28.58,2.44.94a18.32,18.32,0,0,0,2.45.53c3.3.52,4.95.78,6.62.54a11.24,11.24,0,0,0,4.54-1.74c1.27-.85,2-1.95,3.49-4.15a12.18,12.18,0,0,0,1.91-3.48,8.75,8.75,0,0,0,0-3.88,16.44,16.44,0,0,0-1-3.61,10.37,10.37,0,0,0-1.75-3.48c-.77-.88-2.64-3-3.31-3.88a13.9,13.9,0,0,0-1.24-1.27c-1.22-1.26-2.55-.06-7.83-.47-3.28-.26-5.52,1.24-10.24,1.21-5,0-4.88-1.36-9.64-1.34C266.71,282.19,264.2,283.05,263.34,283.37Z"
            transform="translate(-254.34 -226.51)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.56"
          />
          <path
            id="adult_dent_16_crown2"
            v-if="selectedTooth.dent.crown2"
            :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
            d="M273.62,307.85c-.06.72,2.36,1.48,4.06,1.75a15.2,15.2,0,0,0,3.14.14,22.45,22.45,0,0,0,4.19-.54c.62-.14,4.95-1.13,4.83-2-.08-.65-2.52-1-4.4-1.26a20.14,20.14,0,0,0-3.22-.21,22.32,22.32,0,0,0-3.05.31,21,21,0,0,0-3.2.68C274.53,307.17,273.66,307.44,273.62,307.85Z"
            transform="translate(-254.34 -226.51)"
            fill="#fff"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.56"
          />
        </g>
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I16"
        v-if="selectedTooth.filling_caries_class_i"
        d="M282,304.85c-.86.06-1.78.15-2.75.28-1.33.17-2.54.4-3.63.64a17,17,0,0,0-1.8.86c-.47.25-.88.5-1.25.74l0-5.15c0-1.79,1.88-3.23,4.2-3.23h11.67c2.32,0,4.21,1.44,4.21,3.23,0,1.57-.07,3.15-.11,4.73a4,4,0,0,1-1.45-.09,5.39,5.39,0,0,1-1.48-.78,8.58,8.58,0,0,0-2.49-.74,20.29,20.29,0,0,0-2.77-.38C283.42,304.87,282.61,304.85,282,304.85Z"
        transform="translate(-254.34 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.52"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial16"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M269.38,307.38l-9.37-.87a5.12,5.12,0,0,1-2.08-.73,3,3,0,0,1-1.11-1,2.6,2.6,0,0,1-.24-1.66c0-.77-.09-1.54-.08-2.31,0-3-.69-5.39-.37-7.58.06-.42.07-.17.41-1.63.17-.74.24-1.09.62-1.37a2.24,2.24,0,0,1,1.17-.35h11c1.77,0,3.21,1.1,3.21,2.46l-.26,13.53c0,.4,0,.73,0,1s0,.46-.08.56-.56.1-1.12.05C270.69,307.42,270.11,307.38,269.38,307.38Z"
        transform="translate(-254.34 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.52"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal16"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M293.62,307.34c.27.11.4,0,1.28.09,1.43.07,1.71.28,2.61.31a7.69,7.69,0,0,0,2.54-.47,9,9,0,0,0,3.08-1.38,9.66,9.66,0,0,0,1.54-1.8,28.64,28.64,0,0,0,2.34-3.44,8.22,8.22,0,0,0,1-2.11,7.49,7.49,0,0,0-.14-2.82c-.25-1.77-.4-1.51-.73-3.49a5.93,5.93,0,0,0-.44-1.54,4.36,4.36,0,0,0-.74-1.24c-.86-.86-2.89-.57-6.45-.25-5.4.47-5.56.25-6.16.66-1.45,1-.35,2.22-.54,7.66-.08,2.39.34,4.8.07,7.19C292.83,305.22,292.62,306.92,293.62,307.34Z"
        transform="translate(-254.34 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.52"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V16"
        v-if="selectedTooth.filling_caries_class_v"
        x="20.9"
        y="59.56"
        width="14.75"
        height="3.16"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.52"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal16"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M307.77,296l-12.53.57c-1.66,0-3-1-3-2.3V292.9c0-1.27,1.34-2.3,3-2.3l11.5.63.06,0h0c.3,1,.59,2,.88,3Z"
        transform="translate(-254.34 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.52"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial16"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M268.61,296.53l-11.93-1h0a3.76,3.76,0,0,1-.51-2,4,4,0,0,1,.95-2.25h0l11.49-.63c1.66,0,3,1,3,2.3v1.33C271.61,295.5,270.27,296.53,268.61,296.53Z"
        transform="translate(-254.34 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.52"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo16">
        <path
          id="ADULT_DENT_Endo16_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M281.35,239.6c-1.26.14,1.4,7.55-2.62,17.8-1.34,3.42-2.34,4.39-4.32,9.73-3.63,9.81-2.3,12.08-.91,13,.68.46,1.84.66,4.16,1.06,2.92.51,6.43,1.12,8.31.54,5.31-1.66,3.22-14.65,2.22-20.52C286.35,250.35,282.88,239.42,281.35,239.6Z"
          transform="translate(-254.34 -226.51)"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Endo16_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M302.36,241.9c.72.27-2.1,4.06-3.7,9.56-4.24,14.69,4.11,28.33.24,29.58-1.21.39-2.37-.81-6-.53-3,.22-3.63,1.12-4.61.88-3.42-.84-3.55-13.92,3.46-26.56C295.67,247.74,301.41,241.54,302.36,241.9Z"
          transform="translate(-254.34 -226.51)"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Endo16_3"
          v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M295.2,235.35c-.47-.2-3.65,3.33-5.31,6.9a11.06,11.06,0,0,0-.86,2.94c-.16,1.11-.28,3.06.27,3.16.29.05.57-.46,1.61-1.75,1.75-2.18,2.08-2.13,2.51-3,.64-1.28.08-1.7.27-3.64C294,237,295.52,235.47,295.2,235.35Z"
          transform="translate(-254.34 -226.51)"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
      </g>
      <g id="ADULT_DENT_Post16">
        <g id="ADULT_DENT_Post16_3" v-if="selectedTooth.post.post3">
          <path
            d="M264.87,281.7l10,2.45a.69.69,0,0,1,.46.9L274.5,288a.77.77,0,0,1-.89.57l-10-2.44a.69.69,0,0,1-.46-.9l.86-2.93A.78.78,0,0,1,264.87,281.7Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M279.52,248.1l1.27.31a1.23,1.23,0,0,1,.81,1.6L272,282.79a1.37,1.37,0,0,1-1.58,1l-1.26-.31a1.22,1.22,0,0,1-.81-1.59L278,249.12A1.38,1.38,0,0,1,279.52,248.1Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M268.6,275.11l6.87,1.68a.33.33,0,0,1,.22.44l-.28.94a.37.37,0,0,1-.43.28l-6.87-1.67a.34.34,0,0,1-.22-.44l.27-.94A.4.4,0,0,1,268.6,275.11Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M270,270.09l6.91,1.68a.33.33,0,0,1,.21.42l-.29,1a.37.37,0,0,1-.41.26l-6.91-1.68a.33.33,0,0,1-.21-.42l.29-1A.37.37,0,0,1,270,270.09Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M271.55,265.12l6.85,1.67a.35.35,0,0,1,.23.45l-.28.93a.38.38,0,0,1-.44.29l-6.85-1.67a.35.35,0,0,1-.23-.45l.27-.93A.4.4,0,0,1,271.55,265.12Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M272.9,260.1l6.91,1.68a.32.32,0,0,1,.21.41l-.29,1a.37.37,0,0,1-.41.26l-6.91-1.69a.31.31,0,0,1-.21-.4l.29-1A.36.36,0,0,1,272.9,260.1Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M274.36,255.1l6.93,1.69a.3.3,0,0,1,.2.4l-.3,1a.35.35,0,0,1-.39.26l-6.89-1.68a.36.36,0,0,1-.23-.46l.29-1A.34.34,0,0,1,274.36,255.1Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M276,250.14l6.85,1.67a.33.33,0,0,1,.23.44l-.27.94a.39.39,0,0,1-.45.28l-6.85-1.67a.34.34,0,0,1-.23-.45l.27-.93A.39.39,0,0,1,276,250.14Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="19.79"
            y1="28.63"
            x2="28.66"
            y2="25.43"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="19.39"
            y1="30.13"
            x2="28.27"
            y2="26.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="18.28"
            y1="33.67"
            x2="27.12"
            y2="30.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="17.9"
            y1="35.08"
            x2="26.69"
            y2="31.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="16.98"
            y1="38.65"
            x2="25.65"
            y2="35.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="16.53"
            y1="40.13"
            x2="25.24"
            y2="36.88"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="15.36"
            y1="43.64"
            x2="24.28"
            y2="40.47"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="14.97"
            y1="45.12"
            x2="23.81"
            y2="41.92"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="14.01"
            y1="48.65"
            x2="22.71"
            y2="45.39"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="13.59"
            y1="50.14"
            x2="22.24"
            y2="46.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M282.68,253.75"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M265.46,285.61l6.84,1.67a1.36,1.36,0,0,1,.89,1.76l-1.05,3.55a1.52,1.52,0,0,1-1.74,1.12L263.57,292a1.35,1.35,0,0,1-.9-1.76l1.05-3.55A1.52,1.52,0,0,1,265.46,285.61Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
        </g>
        <g id="ADULT_DENT_Post16_2" v-if="selectedTooth.post.post2">
          <path
            d="M278.8,281.18l8,2c.29.07.47.51.39,1l-.59,3.33c-.09.47-.39.78-.69.71l-8-2c-.3-.07-.47-.51-.39-1l.59-3.34C278.19,281.42,278.5,281.1,278.8,281.18Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M289.35,242.55l1,.25c.53.13.84.91.69,1.73l-6.62,37.35c-.15.82-.69,1.38-1.22,1.25l-1-.26c-.52-.13-.83-.9-.68-1.72l6.62-37.35C288.28,243,288.83,242.42,289.35,242.55Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M281.54,273.54l5.49,1.38c.14,0,.23.25.19.48l-.19,1.07c0,.23-.19.38-.34.34l-5.48-1.37c-.15,0-.23-.25-.19-.48l.19-1.07C281.25,273.66,281.4,273.51,281.54,273.54Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M282.47,267.83l5.51,1.38c.14,0,.22.24.18.45l-.2,1.12c0,.22-.18.36-.31.33l-5.52-1.38c-.14,0-.22-.24-.18-.45l.2-1.13C282.19,267.94,282.33,267.79,282.47,267.83Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M283.57,262.16l5.47,1.37c.15,0,.24.26.19.49l-.18,1.05c0,.24-.2.39-.35.36l-5.47-1.37c-.15,0-.24-.26-.19-.49l.18-1.06C283.26,262.28,283.42,262.12,283.57,262.16Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M284.48,256.44l5.52,1.39c.14,0,.22.23.18.44l-.2,1.13c0,.21-.18.36-.31.32l-5.53-1.38a.37.37,0,0,1-.17-.44l.2-1.14C284.21,256.55,284.35,256.41,284.48,256.44Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M285.48,250.75l5.54,1.38a.36.36,0,0,1,.17.43l-.2,1.16c0,.21-.18.34-.31.31l-5.5-1.38c-.15,0-.24-.26-.2-.49l.2-1.1C285.22,250.85,285.35,250.71,285.48,250.75Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M286.59,245.08l5.48,1.37c.15,0,.23.26.19.49l-.19,1.06c0,.23-.19.39-.34.35L286.26,247c-.15,0-.24-.26-.2-.49l.19-1.06C286.29,245.2,286.45,245,286.59,245.08Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="30.96"
            y1="24.3"
            x2="37.88"
            y2="20.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="30.69"
            y1="26"
            x2="37.62"
            y2="21.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="29.92"
            y1="30.04"
            x2="36.82"
            y2="25.74"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="29.67"
            y1="31.65"
            x2="36.52"
            y2="27.46"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="29.05"
            y1="35.7"
            x2="35.81"
            y2="31.44"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="28.74"
            y1="37.4"
            x2="35.53"
            y2="33.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="27.92"
            y1="41.4"
            x2="34.88"
            y2="37.21"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="27.66"
            y1="43.09"
            x2="34.55"
            y2="38.86"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="27.01"
            y1="47.1"
            x2="33.79"
            y2="42.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="26.72"
            y1="48.79"
            x2="33.46"
            y2="44.56"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M292,248.63"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M279.38,285.51l5.46,1.37c.58.14.92,1,.76,1.9l-.71,4.05c-.16.91-.77,1.52-1.35,1.38l-5.46-1.37c-.58-.15-.92-1-.76-1.91l.72-4C278.2,286,278.8,285.36,279.38,285.51Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
        </g>
        <g id="ADULT_DENT_Post16_1" v-if="selectedTooth.post.post1">
          <path
            d="M289.08,281.79l9.61,1.06a.7.7,0,0,1,.58.79l-.25,2.85a.67.67,0,0,1-.71.65l-9.6-1.06a.72.72,0,0,1-.59-.79l.25-2.85A.68.68,0,0,1,289.08,281.79Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M296.31,248.47l1.21.13a1.26,1.26,0,0,1,1,1.4l-2.8,31.94a1.2,1.2,0,0,1-1.26,1.15l-1.21-.14a1.25,1.25,0,0,1-1-1.4l2.81-31.93A1.18,1.18,0,0,1,296.31,248.47Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M291.28,275.15l6.58.73a.34.34,0,0,1,.28.39l-.08.92a.32.32,0,0,1-.34.31l-6.58-.72a.36.36,0,0,1-.29-.39l.08-.92A.34.34,0,0,1,291.28,275.15Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M291.6,270.27l6.62.74a.32.32,0,0,1,.27.36l-.09,1a.3.3,0,0,1-.32.3l-6.62-.73a.34.34,0,0,1-.27-.37l.09-1A.32.32,0,0,1,291.6,270.27Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M292.14,265.42l6.57.72a.35.35,0,0,1,.29.4l-.08.9a.34.34,0,0,1-.35.33L292,267a.35.35,0,0,1-.29-.39l.08-.91A.33.33,0,0,1,292.14,265.42Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M292.46,260.54l6.62.73a.32.32,0,0,1,.26.36l-.08,1a.3.3,0,0,1-.32.29l-6.63-.73a.32.32,0,0,1-.26-.36l.09-1A.29.29,0,0,1,292.46,260.54Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M292.87,255.67l6.65.73a.32.32,0,0,1,.25.35l-.08,1a.31.31,0,0,1-.32.29l-6.59-.73a.36.36,0,0,1-.3-.4l.08-.95A.3.3,0,0,1,292.87,255.67Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M293.42,250.81l6.57.73a.35.35,0,0,1,.29.39l-.08.91a.33.33,0,0,1-.35.32l-6.57-.72a.36.36,0,0,1-.29-.4l.08-.9A.34.34,0,0,1,293.42,250.81Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="38.33"
            y1="29.23"
            x2="45.85"
            y2="25.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="38.24"
            y1="30.68"
            x2="45.76"
            y2="26.56"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="37.87"
            y1="34.14"
            x2="45.35"
            y2="29.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="37.79"
            y1="35.51"
            x2="45.23"
            y2="31.45"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="37.6"
            y1="38.97"
            x2="44.92"
            y2="34.86"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="37.46"
            y1="40.42"
            x2="44.82"
            y2="36.3"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="37.04"
            y1="43.85"
            x2="44.6"
            y2="39.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="36.95"
            y1="45.29"
            x2="44.44"
            y2="41.2"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="36.72"
            y1="48.72"
            x2="44.07"
            y2="44.59"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <line
            x1="36.61"
            y1="50.16"
            x2="43.92"
            y2="46.07"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M300.22,253.38"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
          <path
            d="M290.34,285.39l6.55.72a1.39,1.39,0,0,1,1.13,1.55l-.3,3.45a1.31,1.31,0,0,1-1.39,1.27l-6.54-.72a1.38,1.38,0,0,1-1.14-1.55l.3-3.46A1.31,1.31,0,0,1,290.34,285.39Z"
            transform="translate(-254.34 -226.51)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.52"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis16">
        <path
          id="ADULT_DENT_Left_gingivitis16"
          v-if="selectedTooth.gingivitis.left"
          d="M263.43,282.3c.08-.21-.89-.34-1.49-1.14s-.33-1.78-.13-2.86c.33-1.75-.19-1.29,0-4.2a18.67,18.67,0,0,1,.87-5.24c.68-1.93,1.34-2.54.87-3-.78-.7-4-.14-5.09,1.34-.57.78-.24,1.41,0,3.14a19.37,19.37,0,0,1,0,5.34c-.56,3.48-2.5,4.33-1.62,5.53C258.11,283,263.26,282.78,263.43,282.3Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Right_gingivitis16"
          v-if="selectedTooth.gingivitis.right"
          d="M301.71,281.73c-.09-.18.85-.39,1.49-1.24a3,3,0,0,0,.5-2.1c-.07-1.94-.26-3-.37-4.29-.19-2.16.11-2-.13-3.72-.26-1.93-.71-2.71-.25-2.95s2.37.46,3.36,1.62c1.32,1.56.24,2.67.5,6.1s1.39,4.2.37,5.34C305.74,282.1,301.88,282.08,301.71,281.73Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Left_periodontal16"
          v-if="selectedTooth.periodontal.left"
          d="M263.43,282.3c.08-.21-.89-.34-1.49-1.14s-.33-1.78-.13-2.86c.33-1.75-.19-1.29,0-4.2a18.67,18.67,0,0,1,.87-5.24c.68-1.93,1.34-2.54.87-3-.78-.7-4-.14-5.09,1.34-.57.78-.24,1.41,0,3.14a19.37,19.37,0,0,1,0,5.34c-.56,3.48-2.5,4.33-1.62,5.53C258.11,283,263.26,282.78,263.43,282.3Z"
          transform="translate(-254.34 -226.51)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Right_periodontal16"
          v-if="selectedTooth.periodontal.right"
          d="M301.71,281.73c-.09-.18.85-.39,1.49-1.24a3,3,0,0,0,.5-2.1c-.07-1.94-.26-3-.37-4.29-.19-2.16.11-2-.13-3.72-.26-1.93-.71-2.71-.25-2.95s2.37.46,3.36,1.62c1.32,1.56.24,2.67.5,6.1s1.39,4.2.37,5.34C305.74,282.1,301.88,282.08,301.71,281.73Z"
          transform="translate(-254.34 -226.51)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Left_perio16"
          v-if="selectedTooth.perio.left"
          d="M263.43,282.3c.08-.21-.89-.34-1.49-1.14s-.33-1.78-.13-2.86c.33-1.75-.19-1.29,0-4.2a18.67,18.67,0,0,1,.87-5.24c.68-1.93,1.34-2.54.87-3-.78-.7-4-.14-5.09,1.34-.57.78-.24,1.41,0,3.14a19.37,19.37,0,0,1,0,5.34c-.56,3.48-2.5,4.33-1.62,5.53C258.11,283,263.26,282.78,263.43,282.3Z"
          transform="translate(-254.34 -226.51)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Right_perio16"
          v-if="selectedTooth.perio.right"
          d="M301.71,281.73c-.09-.18.85-.39,1.49-1.24a3,3,0,0,0,.5-2.1c-.07-1.94-.26-3-.37-4.29-.19-2.16.11-2-.13-3.72-.26-1.93-.71-2.71-.25-2.95s2.37.46,3.36,1.62c1.32,1.56.24,2.67.5,6.1s1.39,4.2.37,5.34C305.74,282.1,301.88,282.08,301.71,281.73Z"
          transform="translate(-254.34 -226.51)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
      </g>
      <g id="ADULT_DENT_Implant16" v-if="selectedTooth.implant">
        <path
          d="M270.18,274.93l24,.05c.89,0,1.6.46,1.58,1l-.08,4.07c0,.56-.74,1-1.62,1l-24,0c-.89,0-1.6-.46-1.59-1l.08-4.06C268.56,275.38,269.29,274.93,270.18,274.93Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M281.75,226.77h3c1.57,0,2.83.81,2.81,1.82l-.91,45.53c0,1-1.31,1.81-2.88,1.81h-3c-1.58,0-2.83-.81-2.81-1.81l.9-45.54C278.89,227.58,280.18,226.77,281.75,226.77Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M274.36,265.22l16.4,0c.44,0,.79.23.78.51l0,1.3c0,.28-.36.51-.8.51l-16.39,0c-.44,0-.79-.22-.78-.5l0-1.31C273.57,265.44,273.93,265.22,274.36,265.22Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M274.24,258.28l16.5,0c.4,0,.73.21.73.47l0,1.38c0,.26-.34.47-.75.47l-16.5,0c-.41,0-.73-.21-.73-.47l0-1.37C273.49,258.49,273.83,258.28,274.24,258.28Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M274.65,251.34l16.37,0c.44,0,.8.23.79.52l0,1.28c0,.29-.37.52-.82.52l-16.36,0c-.45,0-.8-.23-.8-.51l0-1.29C273.84,251.57,274.21,251.34,274.65,251.34Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M274.5,244.4l16.52,0c.41,0,.73.21.72.47l0,1.38c0,.26-.33.47-.73.46l-16.53,0c-.4,0-.72-.21-.71-.46l0-1.39C273.77,244.6,274.1,244.4,274.5,244.4Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M274.62,237.46l16.56,0c.39,0,.7.2.7.45l0,1.42c0,.24-.32.44-.71.44l-16.46,0c-.45,0-.81-.23-.8-.52l0-1.34C273.91,237.66,274.23,237.46,274.62,237.46Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M275.06,230.52l16.38,0c.44,0,.79.23.79.51l0,1.3c0,.28-.37.5-.81.5l-16.38,0c-.44,0-.79-.23-.78-.51l0-1.29C274.26,230.74,274.62,230.52,275.06,230.52Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.78"
          y1="11.08"
          x2="37.6"
          y2="4.16"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.84"
          y1="13.14"
          x2="37.65"
          y2="6.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.58"
          y1="18.08"
          x2="37.29"
          y2="11.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.63"
          y1="20.03"
          x2="37.27"
          y2="13.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.81"
          y1="24.94"
          x2="37.15"
          y2="18.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.75"
          y1="27.01"
          x2="37.17"
          y2="20.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.35"
          y1="31.93"
          x2="37.27"
          y2="25.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.4"
          y1="33.97"
          x2="37.14"
          y2="27.06"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.48"
          y1="38.85"
          x2="36.87"
          y2="31.91"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <line
          x1="19.48"
          y1="40.91"
          x2="36.77"
          y2="34.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M292.36,233.11"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          d="M274,279.82l16.33,0c1.74,0,3.13.91,3.11,2l-.1,4.93c0,1.11-1.45,2-3.19,2l-16.33,0c-1.74,0-3.13-.91-3.11-2l.1-4.93C270.79,280.71,272.22,279.82,274,279.82Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown16" data-name="ADULT DENT_Endo_Crown16">
        <path
          id="ADULT_DENT_Endo_Crown1_16"
          v-if="selectedTooth.endo_crown.crown1"
          d="M302.22,305.5a11.65,11.65,0,0,1-4.58,1.58c-.73.09-2.3.21-7.51-1-5-1.19-5.11-1.67-7.29-1.69a22.47,22.47,0,0,0-6.15,1,29.16,29.16,0,0,0-4,1.4c-2.71.11-5,.1-6.79.06a16.31,16.31,0,0,1-5.38-.67,9.64,9.64,0,0,1-3.08-1.76c-.26-1.86-.53-3.72-.79-5.58a.76.76,0,0,1,.13-.68,1.58,1.58,0,0,1,1.45-.46h47.74a2,2,0,0,1,1.45.46,1,1,0,0,1,.05,1.41l-1.35,2.25a10.06,10.06,0,0,1-1.66,2.06A12.53,12.53,0,0,1,302.22,305.5Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.56"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_16"
          v-if="selectedTooth.endo_crown.crown2"
          d="M290.69,290.55l-14.22.26-2.2,6.49c-.06.16.1.31.31.31h18.54c.21,0,.37-.16.3-.32Z"
          transform="translate(-254.34 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.56"
        />
      </g>
      <g id="ADULT_DENT_Periapical16">
        <path
          id="ADULT_DENT_Periapical16_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M300.5,239.77c.21.14,1.12-.7,3.55-1.86.41-.19,1.28-.5,3-1.13.95-.33,1.63-.56,2.17-.33a1.23,1.23,0,0,1,.6.67,2.06,2.06,0,0,1,.09,1.52,10.29,10.29,0,0,1-.86,2.33c-.21.42-.52.94-1.13,2a15.74,15.74,0,0,1-1,1.66c-.63.86-1,1.16-1,1.2a10.43,10.43,0,0,0,4.24-3.59,8.18,8.18,0,0,0,1.3-2.79c.32-1.31.65-2.69-.43-3.65a4.34,4.34,0,0,0-2.51-.87c-.59,0-1,.12-2.86.93a23.25,23.25,0,0,0-3.38,1.6C301,238.39,300.27,239.62,300.5,239.77Z"
          transform="translate(-254.34 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Periapical16_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M297.3,237.38c-.28-.13.47-1.68,1.21-2.79s1.21-1.52.95-2.19a1.22,1.22,0,0,0-.77-.73,2.37,2.37,0,0,0-1.56.27,15.83,15.83,0,0,0-2.95,1.52c-.55.4-.49.41-2.16,1.73-1.2.95-1.34,1-1.39,1s.75-1.68,2.17-3.06a10,10,0,0,1,3.55-2.39c1-.38,2.61-1,3.63-.47a2.17,2.17,0,0,1,.87,2.06,4.64,4.64,0,0,1-1,2.86C298.92,236.44,297.57,237.51,297.3,237.38Z"
          transform="translate(-254.34 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
        <path
          id="ADULT_DENT_Periapical16_3"
          v-if="selectedTooth.periapical.periapical3"
          d="M285.52,238.31c-.14,0-.27-.41-1-1.92a5.46,5.46,0,0,0-1.56-2.2,2.47,2.47,0,0,0-1.39-.59,2.54,2.54,0,0,0-1.64.59,2.81,2.81,0,0,0-.87,1.4,13.93,13.93,0,0,0-.61,2.32c-.14.77-.25,1.42-.34,2.33s-.06,1.31-.18,1.33-.92-1.48-1.12-3.06a8.25,8.25,0,0,1,.17-2.85c.35-1.57.53-2.35,1.39-3a5.3,5.3,0,0,1,3.81-.87,4.78,4.78,0,0,1,2.08.8c.89.67,1,1.49,1.29,3C285.72,236.78,285.78,238.28,285.52,238.31Z"
          transform="translate(-254.34 -226.51)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.52"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer16"
        v-if="selectedTooth.crown.onlay"
        d="M302.34,305.59a11.59,11.59,0,0,1-4.58,1.58c-.73.09-2.29.21-7.51-1-5-1.19-5.11-1.67-7.29-1.69a22.46,22.46,0,0,0-6.14,1,28.69,28.69,0,0,0-4,1.4c-2.72.11-5,.1-6.8.06a16.24,16.24,0,0,1-5.37-.67,9.71,9.71,0,0,1-3.09-1.76q-.39-2.79-.79-5.58a.79.79,0,0,1,.13-.68,1.59,1.59,0,0,1,1.45-.46h47.74a2,2,0,0,1,1.45.46,1,1,0,0,1,.05,1.41l-1.34,2.24a10.81,10.81,0,0,1-1.66,2.07A12.56,12.56,0,0,1,302.34,305.59Z"
        transform="translate(-254.34 -226.51)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.56"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer16"
        v-if="selectedTooth.crown.onlay"
        d="M302.34,305.59a11.59,11.59,0,0,1-4.58,1.58c-.73.09-2.29.21-7.51-1-5-1.19-5.11-1.67-7.29-1.69a22.46,22.46,0,0,0-6.14,1,28.69,28.69,0,0,0-4,1.4c-2.72.11-5,.1-6.8.06a16.24,16.24,0,0,1-5.37-.67,9.71,9.71,0,0,1-3.09-1.76q-.39-2.79-.79-5.58a.79.79,0,0,1,.13-.68,1.59,1.59,0,0,1,1.45-.46h47.74a2,2,0,0,1,1.45.46,1,1,0,0,1,.05,1.41l-1.34,2.24a10.81,10.81,0,0,1-1.66,2.07A12.56,12.56,0,0,1,302.34,305.59Z"
        transform="translate(-254.34 -226.51)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.56"
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