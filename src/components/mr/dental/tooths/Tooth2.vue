<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.64 113.62"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_2_all">
      <g id="adult_dent_2">
        <g id="adult_dent_2_root">
          <path
            v-if="selectedTooth.dent.root1"
            id="adult_dent_2_root1"
            d="M293.2,232.78c-1.07.22,1.77,6-.67,13.67-1.83,5.76-4.54,6.09-7.23,13-2.56,6.54-2.09,11.33-3.19,11.37-1.27,0-.85-6.39-5.88-13.1-3-4-4.46-3.5-7.73-7.34-6.85-8.05-5.57-16.26-7.4-16.27-1.66,0-4.52,6.81-2.85,13.53,1.12,4.52,3.27,4.89,4.53,10.08.79,3.23.59,5.85.17,11.08-.6,7.61-2,11.38,0,12.38.67.34.9-.06,4.71-.43,3.35-.33,5.07-.48,7,0,2.23.54,2,1.19,4,1.59,1,.2,2.71.35,6.72-.72,3.65-1,4.21-1.63,6.55-2.31,6.21-1.81,9.43.63,11.26-1,2.07-1.85-1.44-5.56-3-12.66-1.64-7.37,1-8.44,0-16.41C299.09,240,294.43,232.52,293.2,232.78Z"
            transform="translate(-254.88 -226.53)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.43"
          />
          <path
            v-if="selectedTooth.dent.root2"
            id="adult_dent_2_root2"
            d="M278.75,232.78c-.51-.14-2.56,3.27-4,7.63-1.64,4.84-2.88,8.49-1.34,12.38,1.3,3.28,3.08,2.91,5.55,7.34,2.56,4.6,2.52,8.39,3.19,8.35s-.43-4.7,2.35-9.94c1.61-3,3.09-3.52,2.86-5.32-.31-2.33-2.9-2.58-5.88-6.48a16,16,0,0,1-2.86-5.47C277.3,236.58,279.27,232.92,278.75,232.78Z"
            transform="translate(-254.88 -226.53)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.43"
          />
        </g>
        <path
          v-if="selectedTooth.dent.crown1"
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
          id="adult_dent_2_crown"
          d="M262.28,282.3c-1.44,1.24-.61,2-2.18,6.33-1.64,4.49-2.91,4.7-3.36,7.63-.21,1.37-.76,4.91,1.68,7.48,2.89,3.06,8.74,2.55,11.93,2.31,3-.23,2.54-.68,6.55-1.15,3.6-.43,7.58-.89,11.93.28,3.26.88,3.15,1.72,6.05,2.16a16.61,16.61,0,0,0,8.23-.86,13.76,13.76,0,0,0,7.06-6.05c2.66-4.56,1.42-9,.84-11.08-.71-2.54-2.34-8.36-7.39-10.08-3.33-1.13-6.94-.08-13.62,1.87-4.69,1.38-6.5,2.54-9.91,2.16-2.81-.31-2.87-1.24-6.38-2C272.5,281,265.53,279.49,262.28,282.3Z"
          transform="translate(-254.88 -226.53)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.43"
        />
      </g>
      <path
        v-if="selectedTooth.filling_caries_class_i"
        id="ADULT_DENT_filling_caries_Class_I2"
        d="M295.65,306.63c-1.63.33-2.44-.73-6-1.78A26.11,26.11,0,0,0,278,304.1c-1.83.29-4.83,1-5.14,1-2.09.47-3.07.76-3.81.29a2.31,2.31,0,0,1-.79-2.16v-6.84c0-2.73,2.58-4.94,5.76-4.94h17.34a8.32,8.32,0,0,1,4.83,1.24,6.27,6.27,0,0,1,2.74,3.61c0,2.54-.09,5.07-.13,7.6C297.72,305.82,296.57,306.45,295.65,306.63Z"
        transform="translate(-254.88 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        id="ADULT_DENT_filling_caries_Class_IV_Mesial2"
        d="M307.73,288.06h-8.16a3.15,3.15,0,0,0-3.36,2.88,2.17,2.17,0,0,0,.1,1.23c.27.66.75.85,1.36,1.45a6,6,0,0,1,1.39,2.52,7.64,7.64,0,0,1,0,2.18,21.93,21.93,0,0,0,.11,2.95,4.69,4.69,0,0,1-1.12,4c-.82.82-2.13,1.39-2,1.6s.39,0,1-.05c1-.13,1.78-.19,2.36-.23l2.56-.41a14.11,14.11,0,0,0,3.28-1.57,12.44,12.44,0,0,0,4.4-4.94,12.72,12.72,0,0,0,1.19-3.31,12,12,0,0,0,0-4.84,7.05,7.05,0,0,0-.43-1.58,3.15,3.15,0,0,0-.62-1.09A3.39,3.39,0,0,0,307.73,288.06Z"
        transform="translate(-254.88 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iv_distal"
        id="ADULT_DENT_filling-caries_Class_IV_Distal2"
        d="M268.32,305.43c-.14.17-.52.39-3.83,0a9.59,9.59,0,0,1-3.6-.84,6.56,6.56,0,0,1-2.71-2.42c-.59-1-.66-2-.79-4.12a11,11,0,0,1,.06-2.09,6.3,6.3,0,0,1,.38-1.67c.13-.34.2-.41.7-1.41.38-.76.34-.71.51-1.05a25,25,0,0,1,1.4-2.21c.8-1.26.74-1.29.95-1.41.64-.35,1.12,0,3.33.14,1.3.1,1.95.09,2.37.09,1.64,0,2-.14,2.36.23,1.18,1.13-1.34,3.09-1.58,7.91-.17,3.63-.26,5.45.34,7.06C268.39,304.11,268.74,304.94,268.32,305.43Z"
        transform="translate(-254.88 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <rect
        v-if="selectedTooth.filling_caries_class_v"
        id="ADULT_DENT_filling-caries_Class_V2"
        x="21.42"
        y="58.25"
        width="12.72"
        height="3.05"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iii_distal"
        id="ADULT_DENT_filling-caries_Class_III_Distal2"
        d="M266.26,296.37h-5.93a1.94,1.94,0,0,1-1.83-.65,1.38,1.38,0,0,1-.13-1.39l.68-1.05a3.87,3.87,0,0,1,.13-.7,4.63,4.63,0,0,1,1.15-1.92h5.93a2.41,2.41,0,0,1,2.58,2.21v1.28A2.41,2.41,0,0,1,266.26,296.37Z"
        transform="translate(-254.88 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        id="ADULT_DENT_filling_caries_Class_III_Mesial2"
        d="M306.55,296.38h-4.3a2.42,2.42,0,0,1-2.58-2.21v-1.29a2.42,2.42,0,0,1,2.58-2.21h4.53c.49.07,1.2.16,2.06.22,1.16.07,1.56,0,1.89.29.17.14.63.58.25,1.94l.07,1.7a1.27,1.27,0,0,1-.28,1.23,1.87,1.87,0,0,1-1.24.23A26.15,26.15,0,0,0,306.55,296.38Z"
        transform="translate(-254.88 -226.53)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo2">
        <path
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          id="ADULT_DENT_Endo2_1"
          d="M296.33,241.21c-.35,0-.6,2.59-2.19,7.5-1.13,3.52-2.46,6.71-2.58,7-1.37,3.24-1.69,3.45-2.19,5.28-.57,2.07-.4,2.67-1,5.8-.38,2-.55,2.23-1.19,4.95-1.34,5.59-2,8.4-1,8.87s2.08-1.55,5.57-2.39,5.47.56,6.77-.51c1.12-.93.56-2.66-.74-7.67-1.13-4.37-1.69-6.56-1.85-7.51-.6-3.8.21-4.49.6-12.28C296.7,247,296.85,241.25,296.33,241.21Z"
          transform="translate(-254.88 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          id="ADULT_DENT_Endo2_2"
          d="M260.9,239.33c-.62.08-.75,5,.8,10.07.72,2.37.94,2,2.19,5.28,1.5,4,4.2,16.5,3.24,12.36h0a21.75,21.75,0,0,1-.08,7.5c-.66,3.06-2,4.27-1.17,5s2.21-.21,5.17-.14c4.08.1,5.57,2,6.73,1.29,1.75-1-.19-6-1.69-9.79a89.18,89.18,0,0,0-5-10.43c-4.5-8.25-5.36-8.8-7.16-13.13C261.78,242.3,261.39,239.27,260.9,239.33Z"
          transform="translate(-254.88 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          id="ADULT_DENT_Endo2_3"
          d="M276.43,240.36c-1,.07-.44,7.95-.2,11.42a9.76,9.76,0,0,0,1.59,5.29c.78,1.14,1.21,1.18,2,2.39,1.69,2.62,1.37,5,1.76,5s.44-1.2.83-2.81c.82-3.44,1.46-3.76,1.59-5.12.23-2.49-1.74-3.44-4-7C276.73,244.36,277.13,240.3,276.43,240.36Z"
          transform="translate(-254.88 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      </g>
      <g id="ADULT_DENT_Post2">
        <g v-if="selectedTooth.post.post1" id="ADULT_DENT_Post2_1">
          <path
            d="M288.66,279l9.77.53a.65.65,0,0,1,.63.66l-.11,2.45a.63.63,0,0,1-.68.58l-9.77-.53a.65.65,0,0,1-.63-.65l.11-2.45A.63.63,0,0,1,288.66,279Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M294.24,250.11l1.23.07a1.16,1.16,0,0,1,1.12,1.16l-1.18,27.51a1.13,1.13,0,0,1-1.21,1l-1.24-.07a1.14,1.14,0,0,1-1.11-1.16l1.18-27.5A1.13,1.13,0,0,1,294.24,250.11Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M290.54,273.2l6.69.36a.33.33,0,0,1,.31.32l0,.79a.31.31,0,0,1-.33.29l-6.69-.36a.31.31,0,0,1-.31-.32l0-.79A.3.3,0,0,1,290.54,273.2Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M290.61,269l6.73.37a.29.29,0,0,1,.29.3l0,.83a.28.28,0,0,1-.31.26l-6.73-.36a.29.29,0,0,1-.28-.3l0-.83A.29.29,0,0,1,290.61,269Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M290.91,264.82l6.67.36a.33.33,0,0,1,.32.33l0,.77a.32.32,0,0,1-.34.3l-6.67-.37a.33.33,0,0,1-.32-.32l0-.78A.31.31,0,0,1,290.91,264.82Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M291,260.62l6.74.36a.29.29,0,0,1,.28.3l0,.84a.27.27,0,0,1-.3.26l-6.74-.36a.3.3,0,0,1-.28-.3l0-.84A.29.29,0,0,1,291,260.62Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M291.14,256.43l6.75.36a.29.29,0,0,1,.28.29l0,.85a.27.27,0,0,1-.3.26l-6.7-.36a.33.33,0,0,1-.32-.34l0-.81A.27.27,0,0,1,291.14,256.43Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M291.45,252.24l6.67.36a.34.34,0,0,1,.32.33l0,.78a.32.32,0,0,1-.34.29l-6.67-.36a.34.34,0,0,1-.32-.33l0-.78A.31.31,0,0,1,291.45,252.24Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="36.06"
            y1="29.96"
            x2="43.44"
            y2="26.15"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="36.04"
            y1="31.21"
            x2="43.43"
            y2="27.38"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.85"
            y1="34.19"
            x2="43.19"
            y2="30.33"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.83"
            y1="35.37"
            x2="43.15"
            y2="31.59"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.82"
            y1="38.34"
            x2="43.01"
            y2="34.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.76"
            y1="39.59"
            x2="42.98"
            y2="35.77"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.5"
            y1="42.55"
            x2="42.94"
            y2="38.76"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.49"
            y1="43.79"
            x2="42.85"
            y2="39.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.43"
            y1="46.74"
            x2="42.65"
            y2="42.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="35.4"
            y1="47.98"
            x2="42.57"
            y2="44.19"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M298.45,254.17"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M290.11,282l6.66.36a1.26,1.26,0,0,1,1.23,1.28l-.12,3a1.25,1.25,0,0,1-1.34,1.15l-6.66-.36a1.27,1.27,0,0,1-1.23-1.28l.13-3A1.23,1.23,0,0,1,290.11,282Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
        </g>
        <g v-if="selectedTooth.post.post3" id="ADULT_DENT_Post2_3">
          <path
            d="M267.76,282.22l10.15-1.88a.65.65,0,0,1,.79.46l.43,2.35a.65.65,0,0,1-.58.71l-10.15,1.89a.65.65,0,0,1-.79-.47l-.43-2.34A.66.66,0,0,1,267.76,282.22Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M267.19,253.6l1.28-.24a1.16,1.16,0,0,1,1.4.82l4.79,26.27a1.17,1.17,0,0,1-1,1.27l-1.28.24a1.16,1.16,0,0,1-1.4-.83l-4.78-26.26A1.15,1.15,0,0,1,267.19,253.6Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M268.43,276.31l6.95-1.3a.32.32,0,0,1,.38.23l.14.76a.32.32,0,0,1-.28.35l-6.95,1.29a.33.33,0,0,1-.39-.23l-.13-.75A.31.31,0,0,1,268.43,276.31Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M267.59,272.32l7-1.3a.3.3,0,0,1,.36.22l.14.79a.3.3,0,0,1-.26.33l-7,1.3a.3.3,0,0,1-.36-.22l-.15-.79A.31.31,0,0,1,267.59,272.32Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M267,268.3l6.94-1.29a.31.31,0,0,1,.39.23l.14.75a.32.32,0,0,1-.29.35l-6.93,1.29a.33.33,0,0,1-.4-.23l-.13-.74A.32.32,0,0,1,267,268.3Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M266.12,264.32l7-1.3a.3.3,0,0,1,.36.21l.15.8a.3.3,0,0,1-.26.32l-7,1.3a.3.3,0,0,1-.36-.21l-.15-.8A.3.3,0,0,1,266.12,264.32Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M265.38,260.32l7-1.31a.29.29,0,0,1,.35.21l.15.81a.3.3,0,0,1-.25.32l-7,1.29a.33.33,0,0,1-.4-.23l-.14-.78A.29.29,0,0,1,265.38,260.32Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M264.78,256.29l6.94-1.29a.34.34,0,0,1,.4.23l.13.75a.32.32,0,0,1-.28.35L265,257.62a.33.33,0,0,1-.4-.23l-.13-.74A.32.32,0,0,1,264.78,256.29Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="10.31"
            y1="33.9"
            x2="17.07"
            y2="28.49"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="10.56"
            y1="35.08"
            x2="17.32"
            y2="29.66"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="11.01"
            y1="37.94"
            x2="17.72"
            y2="32.5"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="11.26"
            y1="39.06"
            x2="17.95"
            y2="33.71"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="11.89"
            y1="41.87"
            x2="18.45"
            y2="36.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="12.1"
            y1="43.07"
            x2="18.69"
            y2="37.69"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="12.49"
            y1="45.92"
            x2="19.3"
            y2="40.53"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="12.74"
            y1="47.1"
            x2="19.47"
            y2="41.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="13.33"
            y1="49.89"
            x2="19.91"
            y2="44.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="13.57"
            y1="51.08"
            x2="20.11"
            y2="45.74"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M272.4,256.4"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M269.91,284.73l6.92-1.28a1.27,1.27,0,0,1,1.55.91l.52,2.84a1.3,1.3,0,0,1-1.13,1.41l-6.92,1.28a1.26,1.26,0,0,1-1.54-.91l-.52-2.84A1.29,1.29,0,0,1,269.91,284.73Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
        </g>
        <g v-if="selectedTooth.post.post2" id="ADULT_DENT_Post2_2">
          <path
            d="M278.27,281.59l8.32-.86c.31,0,.57.25.59.63l.14,2.75a.69.69,0,0,1-.52.76l-8.31.86a.6.6,0,0,1-.6-.63l-.14-2.75A.69.69,0,0,1,278.27,281.59Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M280.26,248.57l1.05-.11a1.06,1.06,0,0,1,1.05,1.13L284,280.44a1.21,1.21,0,0,1-.93,1.33l-1.05.11a1.07,1.07,0,0,1-1.05-1.13l-1.6-30.85A1.2,1.2,0,0,1,280.26,248.57Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M279.32,274.87l5.69-.6a.3.3,0,0,1,.29.32l0,.88a.33.33,0,0,1-.25.37l-5.69.59c-.15,0-.28-.12-.29-.31l-.05-.88A.33.33,0,0,1,279.32,274.87Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M279,270.17l5.73-.59c.14,0,.26.11.27.29l0,.93a.3.3,0,0,1-.24.34l-5.73.6c-.14,0-.26-.11-.27-.29l-.05-.93A.32.32,0,0,1,279,270.17Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M278.83,265.46l5.68-.59c.16,0,.29.13.3.32l.05.87a.35.35,0,0,1-.27.38l-5.68.59c-.15,0-.28-.13-.29-.32l-.05-.87A.35.35,0,0,1,278.83,265.46Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M278.49,260.77l5.73-.6a.28.28,0,0,1,.27.29l.05.94a.31.31,0,0,1-.24.34l-5.73.6a.28.28,0,0,1-.27-.29l-.05-.94A.31.31,0,0,1,278.49,260.77Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M278.24,256.07l5.75-.6a.27.27,0,0,1,.26.28l.05,1a.31.31,0,0,1-.23.33l-5.71.59c-.16,0-.29-.12-.3-.32l-.05-.91A.29.29,0,0,1,278.24,256.07Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M278.1,251.36l5.68-.59c.16,0,.29.12.3.31l0,.88a.33.33,0,0,1-.26.37l-5.68.59c-.15,0-.28-.12-.29-.31l-.05-.88A.33.33,0,0,1,278.1,251.36Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.19"
            y1="29.64"
            x2="29.08"
            y2="24.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.29"
            y1="31.04"
            x2="29.18"
            y2="25.67"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.41"
            y1="34.39"
            x2="29.26"
            y2="28.99"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.51"
            y1="35.71"
            x2="29.34"
            y2="30.41"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.78"
            y1="39.02"
            x2="29.51"
            y2="33.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.85"
            y1="40.43"
            x2="29.6"
            y2="35.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="23.91"
            y1="43.77"
            x2="29.84"
            y2="38.43"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="24.02"
            y1="45.15"
            x2="29.88"
            y2="39.81"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="24.25"
            y1="48.45"
            x2="29.99"
            y2="43.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <line
            x1="24.34"
            y1="49.84"
            x2="30.05"
            y2="44.54"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M284.21,252.46"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
          <path
            d="M279.79,284.76l5.67-.59a1.17,1.17,0,0,1,1.16,1.24l.17,3.34a1.33,1.33,0,0,1-1,1.47l-5.67.6a1.18,1.18,0,0,1-1.16-1.25l-.17-3.34A1.33,1.33,0,0,1,279.79,284.76Z"
            transform="translate(-254.88 -226.53)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.48"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis2">
        <path
          v-if="selectedTooth.gingivitis.left"
          id="ADULT_DENT_Left_gingivitis2"
          d="M262.1,281.23c.09-.29-.36-.43-.75-1.1s-.33-1.17-.21-2.57c.19-2.17.24-2.16.32-3.3a13.88,13.88,0,0,1,.22-2.76c.25-1,.56-1.32.32-1.65-.45-.62-2.34-.67-3.33.09-.49.38-.63.86-.75,3.4-.16,3.41.05,3.24-.1,5-.19,2-.5,2.52,0,3C258.85,282.37,261.89,281.93,262.1,281.23Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.gingivitis.right"
          fill="#e30613"
          stroke="#e30613"
          id="ADULT_DENT_Right_gingivitis2"
          d="M303.9,278.57c-.11-.24.46-.46.75-1.28a3,3,0,0,0,.11-1.38,9.17,9.17,0,0,0-.64-2.3c-.61-1.78-.49-1.55-.65-1.93-.62-1.49-1.05-1.74-.85-2.2a2.25,2.25,0,0,1,2.46-.83c.79.26,1.08,1,1.61,2.48a20.71,20.71,0,0,1,.74,3.05c.64,3,.94,3.32.54,3.84C307.06,279.21,304.13,279.08,303.9,278.57Z"
          transform="translate(-254.88 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.periodontal.left"
          id="ADULT_DENT_Left_periodontal2"
          d="M262.1,281.23c.09-.29-.36-.43-.75-1.1s-.33-1.17-.21-2.57c.19-2.17.24-2.16.32-3.3a13.88,13.88,0,0,1,.22-2.76c.25-1,.56-1.32.32-1.65-.45-.62-2.34-.67-3.33.09-.49.38-.63.86-.75,3.4-.16,3.41.05,3.24-.1,5-.19,2-.5,2.52,0,3C258.85,282.37,261.89,281.93,262.1,281.23Z"
          transform="translate(-254.88 -226.53)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.periodontal.right"
          fill="#e67e22"
          stroke="#e67e22"
          id="ADULT_DENT_Right_periodontal2"
          d="M303.9,278.57c-.11-.24.46-.46.75-1.28a3,3,0,0,0,.11-1.38,9.17,9.17,0,0,0-.64-2.3c-.61-1.78-.49-1.55-.65-1.93-.62-1.49-1.05-1.74-.85-2.2a2.25,2.25,0,0,1,2.46-.83c.79.26,1.08,1,1.61,2.48a20.71,20.71,0,0,1,.74,3.05c.64,3,.94,3.32.54,3.84C307.06,279.21,304.13,279.08,303.9,278.57Z"
          transform="translate(-254.88 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.perio.left"
          id="ADULT_DENT_Left_perio2"
          d="M262.1,281.23c.09-.29-.36-.43-.75-1.1s-.33-1.17-.21-2.57c.19-2.17.24-2.16.32-3.3a13.88,13.88,0,0,1,.22-2.76c.25-1,.56-1.32.32-1.65-.45-.62-2.34-.67-3.33.09-.49.38-.63.86-.75,3.4-.16,3.41.05,3.24-.1,5-.19,2-.5,2.52,0,3C258.85,282.37,261.89,281.93,262.1,281.23Z"
          transform="translate(-254.88 -226.53)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.perio.right"
          fill="#c0392b"
          stroke="#c0392b"
          id="ADULT_DENT_Right_perio2"
          d="M303.9,278.57c-.11-.24.46-.46.75-1.28a3,3,0,0,0,.11-1.38,9.17,9.17,0,0,0-.64-2.3c-.61-1.78-.49-1.55-.65-1.93-.62-1.49-1.05-1.74-.85-2.2a2.25,2.25,0,0,1,2.46-.83c.79.26,1.08,1,1.61,2.48a20.71,20.71,0,0,1,.74,3.05c.64,3,.94,3.32.54,3.84C307.06,279.21,304.13,279.08,303.9,278.57Z"
          transform="translate(-254.88 -226.53)"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      
      </g>
      <g v-if="selectedTooth.implant" id="ADULT_DENT_Implant2">
        <path
          d="M270.82,273.14l25.84.05c1,0,1.73.44,1.71,1l-.08,3.91c0,.55-.8,1-1.76,1l-25.84,0c-.95,0-1.72-.45-1.71-1l.09-3.91C269.08,273.58,269.87,273.14,270.82,273.14Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M283.3,226.77h3.27c1.69,0,3.05.78,3,1.75l-1,43.85c0,1-1.41,1.74-3.1,1.74h-3.27c-1.69,0-3.05-.79-3-1.75l1-43.85C280.22,227.55,281.61,226.77,283.3,226.77Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M275.34,263.8l17.68,0c.47,0,.85.21.84.48l0,1.26c0,.27-.39.49-.86.48l-17.68,0c-.47,0-.85-.21-.84-.48l0-1.26C274.48,264,274.87,263.79,275.34,263.8Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M275.2,257.11l17.79,0c.44,0,.8.21.79.46l0,1.32c0,.25-.37.45-.81.45l-17.79,0c-.44,0-.79-.2-.78-.46l0-1.32C274.4,257.31,274.76,257.11,275.2,257.11Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M275.65,250.43l17.65,0c.48,0,.86.22.86.5l0,1.24c0,.27-.4.49-.88.49l-17.65,0c-.48,0-.86-.23-.86-.5l0-1.24C274.78,250.65,275.17,250.43,275.65,250.43Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M275.49,243.75l17.81,0c.44,0,.78.2.78.44l0,1.34c0,.25-.36.45-.79.44l-17.82,0c-.44,0-.78-.2-.78-.44l0-1.34C274.7,243.94,275.05,243.74,275.49,243.75Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M275.61,237.06l17.86,0c.43,0,.76.2.76.44l0,1.36c0,.24-.35.43-.78.43l-17.74,0c-.48,0-.87-.23-.87-.5l0-1.3C274.85,237.25,275.19,237.06,275.61,237.06Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M276.09,230.38l17.66,0c.48,0,.86.22.85.49l0,1.25c0,.27-.39.49-.87.49l-17.66,0c-.48,0-.86-.22-.85-.49l0-1.25C275.22,230.6,275.61,230.38,276.09,230.38Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="20.2"
          y1="10.65"
          x2="39.41"
          y2="3.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="20.25"
          y1="12.64"
          x2="39.46"
          y2="5.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="19.97"
          y1="17.4"
          x2="39.07"
          y2="10.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="20.03"
          y1="19.27"
          x2="39.05"
          y2="12.67"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="20.22"
          y1="24.01"
          x2="38.92"
          y2="17.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="20.16"
          y1="26"
          x2="38.95"
          y2="19.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="19.72"
          y1="30.73"
          x2="39.06"
          y2="24.09"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="19.78"
          y1="32.7"
          x2="38.91"
          y2="26.04"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="19.87"
          y1="37.39"
          x2="38.62"
          y2="30.72"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="19.87"
          y1="39.38"
          x2="38.51"
          y2="32.75"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M294.74,232.88"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M274.9,277.85l17.61,0c1.87,0,3.37.87,3.35,1.94l-.1,4.75c0,1.06-1.57,1.92-3.44,1.92l-17.61,0c-1.88,0-3.38-.87-3.35-1.94l.1-4.74C271.49,278.71,273,277.85,274.9,277.85Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown2">
        <path
          v-if="selectedTooth.endo_crown.crown1"
          id="ADULT_DENT_Endo_Crown1_2"
          d="M290.41,304.44a34.55,34.55,0,0,0-13.75-.57,73,73,0,0,1-8,1.11c-4.26.32-6,0-7.47-.76a7.06,7.06,0,0,1-2.92-3l-.43-2.44a1.41,1.41,0,0,1,.52-1.08,2,2,0,0,1,1.26-.45h48.63a1.37,1.37,0,0,1,1.26.45,1,1,0,0,1,.05,1.2l-2.17,3.65a14.22,14.22,0,0,1-6.78,3.35A16.07,16.07,0,0,1,290.41,304.44Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.43"
        />
        <path
          v-if="selectedTooth.endo_crown.crown2"
          id="ADULT_DENT_Endo_Crown2_2"
          d="M289.21,290l-12.26.24L275,296.54a.25.25,0,0,0,.27.29h16c.19,0,.32-.15.26-.3Z"
          transform="translate(-254.88 -226.53)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.43"
        />
      </g>
      <g id="ADULT_DENT_Periapical2">
        <path
          v-if="selectedTooth.periapical.periapical3"
          id="ADULT_DENT_Periapical2_3"
          d="M257.93,249.25c.18-.07-.48-1.21-.82-3.33a18.3,18.3,0,0,1-.15-3.64,16.39,16.39,0,0,1,.45-4,13.39,13.39,0,0,1,1.79-3.71c.48-.71.92-1.21,1.57-1.28a2,2,0,0,1,1.35.45c.52.43.56.94.74,1.79.26,1.23.2.33.82,2.88.46,1.88.32,1.64.6,2.62.38,1.3.41.95,1.12,3,.33,1,.42,1.31.67,1.34.45.05,1.07-1,1.35-1.92.47-1.55,0-2.88-.9-5.43-.08-.23,0,0-1.49-3.46-.81-1.88-1.08-2.51-1.87-3.13a4.07,4.07,0,0,0-2.69-1c-1.73.11-2.79,1.76-3.36,2.63s-1,2-1.42,4.86c-.55,3.72-.81,5.62-.29,7.29C256.12,247.58,257.7,249.34,257.93,249.25Z"
          transform="translate(-254.88 -226.53)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.periapical.periapical2"
          id="ADULT_DENT_Periapical2_2"
          d="M273.69,240.68c.47,0,.94-1.53,1.86-4.54a9.83,9.83,0,0,1,2.17-3.71,1.45,1.45,0,0,1,1-.45,1.14,1.14,0,0,1,.9.45,1.25,1.25,0,0,1-.08,1.15,15.69,15.69,0,0,0-.45,3.13,12.43,12.43,0,0,0,0,2.63c0,.28.2,1,.53,2.36s.4,1.64.67,1.73c.52.18,1.5-.4,1.94-1.15.88-1.5-1.06-2.53-1.05-5.12,0-2.11,1.31-2.44.9-4.35a3.88,3.88,0,0,0-2.16-2.88,4.24,4.24,0,0,0-2.84-.12,4.32,4.32,0,0,0-2.47,3c-.46,1.38,0,1.6-.52,2.75-.62,1.31-1.41,1.36-1.64,2.37C272.13,239.22,273.08,240.71,273.69,240.68Z"
          transform="translate(-254.88 -226.53)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          v-if="selectedTooth.periapical.periapical1"
          id="ADULT_DENT_Periapical2_1"
          d="M292.65,241.19c.19-.07.15-.83.08-2.37,0-.84-.1-1.5-.15-2a21.06,21.06,0,0,0-.23-2.11c-.17-.72-.36-1-.22-1.6a1.28,1.28,0,0,1,.67-1,1.77,1.77,0,0,1,1.42.19,2.5,2.5,0,0,1,1,1.09c1.09,1.84.74.87,1.56,2.43a24,24,0,0,1,1.57,3.39c.66,1.78.77,2.76,1.05,2.75s.57-1.73.59-1.92a6.79,6.79,0,0,0-.07-2.3c-.26-1.26-.74-1.65-2-3.78-1.59-2.65-1.53-3.15-2.46-3.58a4,4,0,0,0-3.58.13c-.4.25-.72.61-1.5,3.9a11,11,0,0,0-.52,3.07C290.2,239.64,292.13,241.38,292.65,241.19Z"
          transform="translate(-254.88 -226.53)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      </g>
      <path
        v-if="selectedTooth.crown.occlusalVeneer"
        id="ADULT_DENT_Occlusal_Veneer2"
        d="M290.52,304.52a34.7,34.7,0,0,0-13.75-.56,72.06,72.06,0,0,1-8,1.1c-4.26.33-6,0-7.47-.75a7.11,7.11,0,0,1-2.92-3l-.44-2.45a1.48,1.48,0,0,1,.52-1.08,2,2,0,0,1,1.26-.44h48.64a1.4,1.4,0,0,1,1.26.44,1,1,0,0,1,0,1.2l-2.16,3.66a14.31,14.31,0,0,1-6.78,3.35A16,16,0,0,1,290.52,304.52Z"
        transform="translate(-254.88 -226.53)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.43"
      />
      <path
        v-if="selectedTooth.crown.onlay"
        id="ADULT_DENT_Occlusal_Veneer2"
        d="M290.52,304.52a34.7,34.7,0,0,0-13.75-.56,72.06,72.06,0,0,1-8,1.1c-4.26.33-6,0-7.47-.75a7.11,7.11,0,0,1-2.92-3l-.44-2.45a1.48,1.48,0,0,1,.52-1.08,2,2,0,0,1,1.26-.44h48.64a1.4,1.4,0,0,1,1.26.44,1,1,0,0,1,0,1.2l-2.16,3.66a14.31,14.31,0,0,1-6.78,3.35A16,16,0,0,1,290.52,304.52Z"
        transform="translate(-254.88 -226.53)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.43"
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