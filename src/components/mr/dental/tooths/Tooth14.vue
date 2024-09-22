<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.61 113.61"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_14_all">
      <g id="adult_dent_14">
        <g id="adult_dent_14_root">
          <path
            id="adult_dent_14_root1"
            v-if="selectedTooth.dent.root1"
            d="M275.13,229.64c-1-.26-4.4,7.92-8.41,17.51-3.62,8.63-4.19,10.72-4.37,13.47-.33,5.14,1.15,5.78.75,11.54-.49,7.16-3.07,10.6-1.28,11.93s4.35-2,10.11-1.44c3.54.33,4.36,1.75,9.48,2.21a23.49,23.49,0,0,0,5.21,0c4.18-.5,4.79-1.82,7.77-2,4.46-.3,6.52,2.44,7.77,1.54,1.81-1.29-3.16-6.47-2.66-14.14.21-3.25,1.33-5.73,3-9.43,2.62-5.85,4.35-6.34,5.54-10.87a26.28,26.28,0,0,0,.53-9c-.24-3.34-1.08-8.38-2-8.37s-.14,6.09-4,12.79c-2.05,3.52-2.94,3-7.56,9a76.43,76.43,0,0,0-6.59,9.91c-3.49,6.31-4,9.59-5.33,9.52-1-.05-2-3.24-3.93-9.62-1.43-4.75-1.34-5.05-2.56-8.85-1.5-4.68-1.88-4.94-2.23-7.12-.28-1.67-.32-3.17.1-8.37C275,231.73,275.59,229.77,275.13,229.64Z"
            transform="translate(-254.46 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.32"
          />
          <path
            id="adult_dent_14_root2"
            v-if="selectedTooth.dent.root2"
            d="M295.78,230.32c-.54-.38-3.54,2.86-7.88,7.55a55.63,55.63,0,0,0-5.32,6.22,34.7,34.7,0,0,0-3.94,7.66c-1.3,3.55-1.5,4.71-1.49,5.38,0,2.17.88,3.53,1.7,5.28,3.18,6.74,2.25,11.1,3.73,11.29,1.1.13,1.73-2.25,4.79-7.56,4.42-7.69,6.1-7.9,6.38-11.18.39-4.42-2.58-4.74-2.34-10.25a30.84,30.84,0,0,1,2.34-9.22C295,232.17,296.13,230.57,295.78,230.32Z"
            transform="translate(-254.46 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.32"
          />
        </g>
        <g id="adult_dent_14_crown">
          <path
            id="adult_dent_14_crown1"
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
            d="M261.72,285.15a12.37,12.37,0,0,0-3.52,4.33,19.06,19.06,0,0,0-1.91,4.91,38.79,38.79,0,0,0-1,7.31c-.41,5.18-.17,5.77.32,6.15,1.35,1.07,2.93-.67,7.13-.09,1.6.22,4.41.6,6.39,2.5.74.71.89,1.19,1.59,1.35,1.22.27,2.13-.83,5-2.6,2.08-1.29,3.13-1.93,4.15-1.93,1.23,0,1.61.59,4.89,2.51a25.93,25.93,0,0,0,4.26,2.21,15.71,15.71,0,0,0,6.28.67,17.7,17.7,0,0,0,7.56-1.83c1.74-.91,2.25-1.66,4.15-2.11s2.57,0,3.4-.58,1.15-2,.75-5.68c-.42-3.91-.64-5.86-1.38-7.88-1.23-3.31-2.43-6.56-5.86-8.66a15.82,15.82,0,0,0-9.05-1.93c-4,.23-5.36,1.71-10.85,1.93a28.55,28.55,0,0,1-4.05-.1c-5.19-.51-5.88-2.1-9.79-2.4C269.17,283.14,265,282.81,261.72,285.15Z"
            transform="translate(-254.46 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.32"
          />
          <path
            id="adult_dent_14_crown2"
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
            d="M258.52,308.62c-.36.86,2.7,3,6,3.85,2.51.63,5.7.61,6-.19s-2.71-2.48-5.21-3.27C262.55,308.16,258.88,307.78,258.52,308.62Z"
            transform="translate(-254.46 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.32"
          />
          <path
            id="adult_dent_14_crown3"
            v-if="selectedTooth.dent.crown3"
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
            d="M274,311.89c.35.76,2.54.58,6,.29,3.12-.26,4.88-.4,5.11-1.15.31-1-2.37-3.26-5.22-3.27C276.42,307.74,273.46,310.84,274,311.89Z"
            transform="translate(-254.46 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.32"
          />
        </g>
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I14"
        v-if="selectedTooth.filling_caries_class_i"
        d="M290.13,311.61a16.4,16.4,0,0,1-3.89-1.66c-1-.63-1.36-1-2.81-1.86a9.59,9.59,0,0,0-3-1.47c-1.95-.3-3.77,1-4.65,1.76a12.48,12.48,0,0,1-1.4,1,14.21,14.21,0,0,1-2,1l-.25-6a4,4,0,0,1,4.19-3.78h13.85a4,4,0,0,1,4.18,3.78v5.39a1.58,1.58,0,0,1,0,1.41C293.86,312,292.09,312.34,290.13,311.61Z"
        transform="translate(-254.46 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial14"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M268.69,308.93l-4.48-1.62q-2.67-.06-5.52,0c-.9,0-1.78,0-2.65.08,0-.62,0-1.23-.05-1.85s0-1.46,0-2.42c.06-1.32.14-1.2.3-3.09s.09-2.3.53-3.08a4.41,4.41,0,0,1,.89-1.13,7.19,7.19,0,0,1,4.52-1.69h4.37a7.33,7.33,0,0,1,4.51,1.69,6.21,6.21,0,0,1,1.2,7.46l0,4.57c0,.54-.09,1.22-.15,2-.05.63-.08,1-.34,1.1s-.53,0-1-.28A7.76,7.76,0,0,1,268.69,308.93Z"
        transform="translate(-254.46 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal14"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M293.54,312c.1.14.55-.15,1.64-.27.41,0,.54,0,1.49-.1l.74-.07a12.55,12.55,0,0,0,2.9-.57,19.6,19.6,0,0,0,2.75-1.43,4.24,4.24,0,0,0,.44-.27,4.84,4.84,0,0,1,.81-.55,8.13,8.13,0,0,1,3.86-1.14c1.09,0,1.44.25,1.92,0s.64-1,.63-2.05a32.85,32.85,0,0,0-.52-4.76,28.8,28.8,0,0,0-.47-3.12c-.43-1.68-.64-2.53-1.3-3-.9-.68-2.08-.62-6.56-.29-6.38.48-6.67.57-7,.86-.92.76-.53,1.43-.32,8.08,0,.46.23,2.07.21,3.73,0,1.22-.11,1.16-.05,1.89a5.84,5.84,0,0,1-.08,1.46C294.36,311.4,293.39,311.83,293.54,312Z"
        transform="translate(-254.46 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V14"
        v-if="selectedTooth.filling_caries_class_v"
        x="23.07"
        y="61.64"
        width="11.48"
        height="2.9"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal14"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M309.89,297.52l-10.35.73a2.23,2.23,0,0,1-2.33-2.11v-1.22a2.22,2.22,0,0,1,2.33-2.11l9,.62h0c.45,1.36.9,2.73,1.36,4.09Z"
        transform="translate(-254.46 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial14"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M266.42,298.25l-10-.45h0c.32-1.44.64-2.88,1-4.31l.05-.06h0l9-.62a2.23,2.23,0,0,1,2.33,2.11v1.22A2.24,2.24,0,0,1,266.42,298.25Z"
        transform="translate(-254.46 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo14">
        <path
          id="ADULT_DENT_Endo14_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M272.4,238.29c-.78-.1-2.79,8.16-3.95,14.28-.44,2.3-.95,7-1.95,16.37-.62,5.77-1.31,12.59.69,13.17.74.21,1.41-.55,3.43-.52,1.86,0,2.37.68,3,.52,2.35-.59,1.59-10,.72-17.69-1-9.19-1.57-9.82-1.79-15.26C272.3,242.35,272.94,238.36,272.4,238.29Z"
          transform="translate(-254.46 -226.55)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Endo14_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M306,244.13c-1-.43-7.31,9.93-9.16,13A109.15,109.15,0,0,0,290,269.77c-.94,2.11-5.73,12.86-3.42,14.12.64.35,1.81,0,4.13-.81a15.26,15.26,0,0,1,3.77-1.13c1.49-.15,1.8.21,2.34,0,1.85-.73.27-5.84.36-10.72.05-2.66.55-3,5.21-15.74C306.21,245,306.22,244.23,306,244.13Z"
          transform="translate(-254.46 -226.55)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Endo14_3"
          v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M290.74,237.54c-.89-.4-5.56,6.74-5.77,7.08a59.09,59.09,0,0,0-5.21,10.06c-1.66,4.1-1.68,5.41-1.59,6.32.16,1.56.63,1.93,2.39,6,2,4.54,2.28,6.14,3,6.11,0,0,.58,0,2.48-5.73h0s1.41-3,2-4.38a28,28,0,0,0,2.15-7.63c.47-4.55-1.43-4.91-1.25-9.58C289.1,240.84,291.32,237.8,290.74,237.54Z"
          transform="translate(-254.46 -226.55)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Post14">
        <g id="ADULT_DENT_Post14_3" v-if="selectedTooth.post.post3">
          <path
            d="M263.88,283.65l11.59-.23a.74.74,0,0,1,.78.71V287a.76.76,0,0,1-.77.74l-11.59.24a.74.74,0,0,1-.78-.71v-2.89A.77.77,0,0,1,263.88,283.65Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M268.93,249.34l1.46,0a1.3,1.3,0,0,1,1.38,1.26l.08,32.33a1.35,1.35,0,0,1-1.37,1.31l-1.47,0a1.29,1.29,0,0,1-1.37-1.25l-.08-32.34A1.35,1.35,0,0,1,268.93,249.34Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.79,276.71l7.93-.16a.37.37,0,0,1,.39.35v.93a.37.37,0,0,1-.38.36l-7.93.16a.36.36,0,0,1-.39-.35v-.92A.38.38,0,0,1,265.79,276.71Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.65,271.79l8-.17a.35.35,0,0,1,.36.33v1a.36.36,0,0,1-.35.34l-8,.16a.34.34,0,0,1-.36-.33v-1A.35.35,0,0,1,265.65,271.79Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.78,266.86l7.91-.16a.36.36,0,0,1,.39.35V268a.38.38,0,0,1-.38.37l-7.92.16a.37.37,0,0,1-.39-.36v-.91A.38.38,0,0,1,265.78,266.86Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.62,261.93l8-.16a.33.33,0,0,1,.35.32v1a.34.34,0,0,1-.35.33l-8,.16a.32.32,0,0,1-.35-.32v-1A.35.35,0,0,1,265.62,261.93Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.6,257l8-.16a.33.33,0,0,1,.35.31v1a.33.33,0,0,1-.34.32l-8,.16a.37.37,0,0,1-.4-.36v-.95A.34.34,0,0,1,265.6,257Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.74,252.07l7.92-.16a.38.38,0,0,1,.39.35v.92a.38.38,0,0,1-.39.37l-7.92.16a.37.37,0,0,1-.39-.35v-.92A.39.39,0,0,1,265.74,252.07Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="10.91"
            y1="30.55"
            x2="19.44"
            y2="25.44"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="10.95"
            y1="32.01"
            x2="19.49"
            y2="26.88"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="10.88"
            y1="35.52"
            x2="19.37"
            y2="30.36"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="10.93"
            y1="36.91"
            x2="19.38"
            y2="31.84"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="11.08"
            y1="40.39"
            x2="19.38"
            y2="35.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="11.07"
            y1="41.86"
            x2="19.42"
            y2="36.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="10.93"
            y1="45.35"
            x2="19.52"
            y2="40.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="10.98"
            y1="46.81"
            x2="19.48"
            y2="41.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="11.07"
            y1="50.26"
            x2="19.4"
            y2="45.15"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="11.1"
            y1="51.73"
            x2="19.38"
            y2="46.65"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M274.13,253.72"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.76,287.08l7.9-.16a1.44,1.44,0,0,1,1.52,1.39v3.5a1.51,1.51,0,0,1-1.52,1.46l-7.89.16a1.46,1.46,0,0,1-1.53-1.4v-3.5A1.51,1.51,0,0,1,265.76,287.08Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
        <g id="ADULT_DENT_Post14_1" v-if="selectedTooth.post.post1">
          <path
            d="M287,282.85l9,2.44a.64.64,0,0,1,.47.75l-.53,2.34a.58.58,0,0,1-.73.43l-9-2.45a.65.65,0,0,1-.47-.75l.53-2.34A.59.59,0,0,1,287,282.85Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M297.24,256.22l1.13.31a1.14,1.14,0,0,1,.83,1.33l-5.95,26.19a1,1,0,0,1-1.3.75l-1.13-.3a1.15,1.15,0,0,1-.83-1.34L295.94,257A1,1,0,0,1,297.24,256.22Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M289.73,277.67l6.15,1.67a.32.32,0,0,1,.23.37l-.17.75a.3.3,0,0,1-.37.21L289.43,279a.33.33,0,0,1-.23-.37l.17-.76A.29.29,0,0,1,289.73,277.67Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M290.54,273.65l6.18,1.68a.3.3,0,0,1,.22.35l-.18.79a.28.28,0,0,1-.34.19L290.24,275a.29.29,0,0,1-.21-.35l.18-.79A.26.26,0,0,1,290.54,273.65Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M291.55,269.68l6.13,1.67a.33.33,0,0,1,.24.38l-.17.74a.29.29,0,0,1-.37.21L291.25,271a.32.32,0,0,1-.23-.37l.17-.74A.29.29,0,0,1,291.55,269.68Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M292.35,265.66l6.19,1.69a.28.28,0,0,1,.21.34l-.18.8a.26.26,0,0,1-.33.19L292.05,267a.29.29,0,0,1-.21-.34l.18-.79A.26.26,0,0,1,292.35,265.66Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M293.25,261.67l6.21,1.69a.29.29,0,0,1,.2.33l-.18.81a.27.27,0,0,1-.33.19L293,263a.34.34,0,0,1-.24-.38l.18-.77A.25.25,0,0,1,293.25,261.67Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M294.27,257.71l6.14,1.67a.32.32,0,0,1,.23.37l-.17.75a.3.3,0,0,1-.37.21L294,259a.32.32,0,0,1-.23-.38l.17-.74A.28.28,0,0,1,294.27,257.71Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="38.59"
            y1="35.14"
            x2="46.12"
            y2="32.94"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="38.36"
            y1="36.34"
            x2="45.89"
            y2="34.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="37.65"
            y1="39.17"
            x2="45.15"
            y2="36.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="37.43"
            y1="40.29"
            x2="44.88"
            y2="38.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.89"
            y1="43.15"
            x2="44.24"
            y2="40.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.61"
            y1="44.34"
            x2="44"
            y2="42.09"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.86"
            y1="47.13"
            x2="43.43"
            y2="44.96"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.63"
            y1="48.32"
            x2="43.13"
            y2="46.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.06"
            y1="51.14"
            x2="42.43"
            y2="48.89"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="34.8"
            y1="52.33"
            x2="42.13"
            y2="50.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M300.44,261"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M287.78,286.05l6.12,1.67a1.26,1.26,0,0,1,.92,1.47l-.65,2.83a1.15,1.15,0,0,1-1.44.84l-6.11-1.67a1.26,1.26,0,0,1-.92-1.47l.64-2.84A1.15,1.15,0,0,1,287.78,286.05Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
        <g id="ADULT_DENT_Post14_2" v-if="selectedTooth.post.post2">
          <path
            d="M277.13,284.4l8.18,1.41c.3.06.52.47.48.94l-.29,3.32c0,.46-.32.8-.62.74l-8.18-1.41c-.3,0-.52-.47-.48-.93l.29-3.32C276.55,284.68,276.83,284.35,277.13,284.4Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M284.18,245.61l1,.17c.54.1.92.84.85,1.66l-3.24,37.26c-.07.82-.56,1.4-1.1,1.31l-1-.18c-.54-.09-.92-.83-.85-1.65l3.24-37.26C283.15,246.1,283.65,245.51,284.18,245.61Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M279.19,276.69l5.59,1a.41.41,0,0,1,.24.46l-.1,1.07c0,.23-.15.39-.3.37l-5.6-1c-.15,0-.25-.23-.23-.46l.09-1.07C278.9,276.83,279,276.66,279.19,276.69Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M279.59,271l5.63,1a.38.38,0,0,1,.22.43l-.1,1.13c0,.21-.14.36-.28.34l-5.63-1a.38.38,0,0,1-.22-.43l.09-1.12C279.32,271.12,279.45,271,279.59,271Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M280.18,265.33l5.58,1c.16,0,.26.24.24.47l-.09,1.06c0,.23-.16.39-.31.37l-5.59-1c-.15,0-.25-.23-.23-.46l.09-1.06C279.89,265.47,280,265.3,280.18,265.33Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M280.57,259.63l5.64,1c.14,0,.24.21.22.42l-.1,1.13c0,.21-.15.36-.28.34l-5.64-1a.37.37,0,0,1-.22-.42l.1-1.14C280.31,259.76,280.44,259.61,280.57,259.63Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M281.06,254l5.65,1c.14,0,.23.21.21.41l-.1,1.16c0,.2-.14.35-.27.32l-5.62-1c-.15,0-.26-.23-.24-.47l.1-1.1C280.8,254.08,280.93,253.93,281.06,254Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M281.66,248.29l5.59,1c.15,0,.25.23.23.46l-.09,1.06c0,.23-.16.4-.31.37l-5.59-1c-.15,0-.25-.24-.23-.47l.09-1.06C281.37,248.43,281.51,248.27,281.66,248.29Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="26.42"
            y1="27.48"
            x2="32.95"
            y2="22.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="26.31"
            y1="29.17"
            x2="32.84"
            y2="24.5"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.9"
            y1="33.21"
            x2="32.4"
            y2="28.49"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.8"
            y1="34.81"
            x2="32.26"
            y2="30.2"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.54"
            y1="38.84"
            x2="31.9"
            y2="34.17"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.39"
            y1="40.54"
            x2="31.78"
            y2="35.86"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.93"
            y1="44.54"
            x2="31.5"
            y2="39.92"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.82"
            y1="46.22"
            x2="31.32"
            y2="41.57"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.53"
            y1="50.22"
            x2="30.92"
            y2="45.53"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.4"
            y1="51.91"
            x2="30.75"
            y2="47.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M287.4,251.41"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M278.11,288.63l5.57,1c.6.1,1,.92.93,1.82l-.35,4c-.07.9-.62,1.55-1.21,1.45l-5.58-1c-.59-.1-1-.92-.93-1.83l.35-4C277,289.18,277.52,288.52,278.11,288.63Z"
            transform="translate(-254.46 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis14">
        <path
          id="ADULT_DENT_Left_gingivitis14"
          v-if="selectedTooth.gingivitis.left"
          d="M261.43,284.35c.13-.19-.55-.52-.87-1.39a3.62,3.62,0,0,1,.19-2.45c.44-1.38.92-2.88,1.16-4,.4-1.82,0-1.67.39-4.46.27-1.89.54-2.52.1-2.88-.65-.53-2.34-.07-3.39.79s-1.21,2.06-1.64,5.24c-.78,5.79-1.14,6.58-.29,7.6C258.41,284.38,261.2,284.7,261.43,284.35Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_gingivitis14"
          v-if="selectedTooth.gingivitis.right"
          d="M303,284.44c-.17-.17.22-.53.29-1.4a4.38,4.38,0,0,0-.48-2.09c-.51-1.34-.76-1.72-1.16-2.71a19,19,0,0,1-.87-2.62c-.24-1-.11-.85-.48-3.59-.2-1.44-.28-1.79,0-2,.53-.42,1.91.05,2.8.7,1.31,1,1.36,2.18,2,4.55,1.32,4.63,2.65,5.28,1.93,6.81C306.19,283.93,303.39,284.81,303,284.44Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Left_periodontal14"
          v-if="selectedTooth.periodontal.left"
          d="M261.43,284.35c.13-.19-.55-.52-.87-1.39a3.62,3.62,0,0,1,.19-2.45c.44-1.38.92-2.88,1.16-4,.4-1.82,0-1.67.39-4.46.27-1.89.54-2.52.1-2.88-.65-.53-2.34-.07-3.39.79s-1.21,2.06-1.64,5.24c-.78,5.79-1.14,6.58-.29,7.6C258.41,284.38,261.2,284.7,261.43,284.35Z"
          transform="translate(-254.46 -226.55)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_periodontal14"
          v-if="selectedTooth.periodontal.right"
          d="M303,284.44c-.17-.17.22-.53.29-1.4a4.38,4.38,0,0,0-.48-2.09c-.51-1.34-.76-1.72-1.16-2.71a19,19,0,0,1-.87-2.62c-.24-1-.11-.85-.48-3.59-.2-1.44-.28-1.79,0-2,.53-.42,1.91.05,2.8.7,1.31,1,1.36,2.18,2,4.55,1.32,4.63,2.65,5.28,1.93,6.81C306.19,283.93,303.39,284.81,303,284.44Z"
          transform="translate(-254.46 -226.55)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Left_perio14"
          v-if="selectedTooth.perio.left"
          d="M261.43,284.35c.13-.19-.55-.52-.87-1.39a3.62,3.62,0,0,1,.19-2.45c.44-1.38.92-2.88,1.16-4,.4-1.82,0-1.67.39-4.46.27-1.89.54-2.52.1-2.88-.65-.53-2.34-.07-3.39.79s-1.21,2.06-1.64,5.24c-.78,5.79-1.14,6.58-.29,7.6C258.41,284.38,261.2,284.7,261.43,284.35Z"
          transform="translate(-254.46 -226.55)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_perio14"
          v-if="selectedTooth.perio.right"
          d="M303,284.44c-.17-.17.22-.53.29-1.4a4.38,4.38,0,0,0-.48-2.09c-.51-1.34-.76-1.72-1.16-2.71a19,19,0,0,1-.87-2.62c-.24-1-.11-.85-.48-3.59-.2-1.44-.28-1.79,0-2,.53-.42,1.91.05,2.8.7,1.31,1,1.36,2.18,2,4.55,1.32,4.63,2.65,5.28,1.93,6.81C306.19,283.93,303.39,284.81,303,284.44Z"
          transform="translate(-254.46 -226.55)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Implant14" v-if="selectedTooth.implant">
        <path
          d="M270.28,277.44l26.1,0c1,0,1.74.43,1.73.95l-.09,3.72c0,.52-.81.94-1.77.93l-26.11,0c-1,0-1.74-.42-1.72-.94l.08-3.72C268.52,277.86,269.31,277.44,270.28,277.44Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M282.89,233.31h3.29c1.71,0,3.08.75,3.06,1.67l-1,41.73c0,.92-1.43,1.66-3.14,1.66h-3.3c-1.71,0-3.08-.75-3.06-1.66l1-41.74C279.77,234.05,281.17,233.31,282.89,233.31Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M274.84,268.54l17.86,0c.47,0,.86.21.85.47l0,1.19c0,.26-.4.46-.87.46l-17.86,0c-.48,0-.86-.2-.85-.46l0-1.2C274,268.75,274.36,268.54,274.84,268.54Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M274.7,262.18l18,0c.45,0,.8.2.8.44l0,1.25c0,.24-.37.43-.82.43l-18,0c-.44,0-.8-.19-.79-.43l0-1.26C273.89,262.37,274.26,262.18,274.7,262.18Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.15,255.82l17.83,0c.49,0,.87.21.87.47l0,1.18c0,.26-.4.47-.89.47l-17.83,0c-.48,0-.87-.21-.86-.47l0-1.18C274.27,256,274.67,255.82,275.15,255.82Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275,249.46l18,0c.43,0,.78.19.78.43l0,1.27c0,.23-.36.42-.8.42l-18,0c-.44,0-.79-.19-.78-.42l0-1.28C274.19,249.65,274.55,249.46,275,249.46Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.12,243.1l18,0c.42,0,.76.19.76.42l0,1.29c0,.23-.36.41-.78.41l-17.93,0c-.49,0-.88-.21-.87-.48l0-1.23C274.34,243.28,274.69,243.1,275.12,243.1Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.6,236.74l17.84,0c.48,0,.86.21.86.47l0,1.19c0,.25-.4.46-.88.46l-17.84,0c-.48,0-.87-.21-.86-.47l0-1.18C274.72,237,275.12,236.74,275.6,236.74Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.12"
          y1="16.67"
          x2="39.52"
          y2="10.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.17"
          y1="18.56"
          x2="39.58"
          y2="12.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.89"
          y1="23.09"
          x2="39.18"
          y2="16.67"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.95"
          y1="24.87"
          x2="39.16"
          y2="18.59"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.14"
          y1="29.38"
          x2="39.03"
          y2="23.04"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.07"
          y1="31.27"
          x2="39.06"
          y2="24.92"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.64"
          y1="35.78"
          x2="39.17"
          y2="29.46"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.7"
          y1="37.65"
          x2="39.02"
          y2="31.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.78"
          y1="42.12"
          x2="38.72"
          y2="35.76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.79"
          y1="44.01"
          x2="38.62"
          y2="37.7"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M294.44,239.12"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M274.4,281.92l17.78,0c1.9,0,3.41.83,3.39,1.85l-.11,4.51c0,1-1.58,1.84-3.47,1.83l-17.79,0c-1.89,0-3.41-.83-3.38-1.84l.1-4.52C271,282.74,272.5,281.92,274.4,281.92Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown14">
        <path
          id="ADULT_DENT_Endo_Crown1_14"
          v-if="selectedTooth.endo_crown.crown1"
          d="M301.57,310.12a18.2,18.2,0,0,1-7.87,1.44,13.4,13.4,0,0,1-4.86-1,40,40,0,0,1-5.41-3.33,6,6,0,0,0-3.08-1.42,5.34,5.34,0,0,0-2.94.86c-4.11,2.23-4.48,4.15-6.15,4.12s-1.6-2.17-4.55-3.28A11.23,11.23,0,0,0,261,307a7.89,7.89,0,0,1-3.53.15,6,6,0,0,1-1.26-.43c-.14-.26,0-2.46,0-5a1.47,1.47,0,0,1,1.55-1.4h51.49a1.6,1.6,0,0,1,.85.23c.52.33.43.82.58,3.46a4,4,0,0,1-.51,2.72l-.05.06c-.91,1.13-3.13,1-3.87.89A21.4,21.4,0,0,1,301.57,310.12Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.32"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_14"
          v-if="selectedTooth.endo_crown.crown2"
          d="M288.74,293.84l-11.06.24L276,300a.23.23,0,0,0,.24.28h14.42a.23.23,0,0,0,.24-.29Z"
          transform="translate(-254.46 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.32"
        />
      </g>
      <g id="ADULT_DENT_Periapical14">
        <path
          id="ADULT_DENT_Periapical14_3"
          v-if="selectedTooth.periapical.periapical3"
          d="M266.9,244.41c.21,0,.53-.84,2.83-6.75a50.19,50.19,0,0,1,2.49-5.36c.69-1.24.61-.79,1.22-1.89.39-.7.58-1.18,1.14-1.4a1.41,1.41,0,0,1,1.08,0c.46.28.4,1,.34,1.77-.16,1.83-.24,2.74-.34,3.28-.22,1.2,0,.58-.4,4.45-.1.88-.24,2.18-.34,4s-.05,1.94,0,1.94c.24,0,1-2.44,1.55-4.87.71-3.42.12-3.25.81-6,.51-2,1.08-3.07.6-4.63a3,3,0,0,0-1.55-2,3.41,3.41,0,0,0-2.69.31c-1.07.53-1.61,1.37-2.63,3.53-.9,1.9-1.33,3-2.36,5.6a24,24,0,0,0-1.54,4.38C266.77,242.38,266.61,244.36,266.9,244.41Z"
          transform="translate(-254.46 -226.55)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Periapical14_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M286.3,238.39c.31.13,1-1,3.37-3.72,3.51-4,3.35-3,4.24-4.2a3.08,3.08,0,0,1,1.21-.91,1.26,1.26,0,0,1,.95-.12c.39.18.45.71.47.91a2.77,2.77,0,0,1-.47,1.65c-.43.77.19-.17-1.28,3.1-.73,1.62-.79,1.63-1.08,2.37s-1,2.57-.74,2.68,2.21-2.64,3.43-4.81a18.78,18.78,0,0,0,1.76-4.2c.71-2.53.27-3,.06-3.22-.62-.54-1.79-.28-2.49-.13a7.67,7.67,0,0,0-3.3,1.77c-1.54,1.28-1.2,1.54-3.23,3.65-1.28,1.33-1.94,1.78-2.49,3C286.29,237.1,286,238.26,286.3,238.39Z"
          transform="translate(-254.46 -226.55)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Periapical14_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M303.61,240.88c.77-2.21.82-2.12,1-2.92a12.49,12.49,0,0,0,.47-3.23,4.94,4.94,0,0,1,.27-1.94c.16-.43.37-1,.88-1.1a1.34,1.34,0,0,1,1,.24,2.23,2.23,0,0,1,.74,1.65c.28,1.86.56,1.31.87,3.35.2,1.26,0,1.17.21,3.59.15,2.26.29,2.47.27,3.77,0,1.9-.37,2.7-.21,2.74.35.1,2.38-3.19,2.65-7.17a15.3,15.3,0,0,0-.42-4.46,8.07,8.07,0,0,0-1.49-3.71,4.92,4.92,0,0,0-2.35-1.7c-.29-.1-2-.64-3,.12-.32.23-.51.53-.88,2.19-.44,2-.36,2.45-.74,4.2-.23,1.09-.35,1.33-.54,2.44a12.18,12.18,0,0,0-.22,2.29c0,.83.11,2.37.42,2.39S302.88,243,303.61,240.88Z"
          transform="translate(-254.46 -226.55)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer14"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M301.66,310.2a18.17,18.17,0,0,1-7.87,1.44,13.35,13.35,0,0,1-4.85-1,39,39,0,0,1-5.41-3.33c-1.29-.86-2-1.35-3.08-1.42a5.38,5.38,0,0,0-2.95.86c-4.11,2.23-4.48,4.15-6.14,4.12s-1.61-2.17-4.55-3.28a11.23,11.23,0,0,0-5.72-.56,7.94,7.94,0,0,1-3.54.15,5.85,5.85,0,0,1-1.26-.43c-.14-.26,0-2.46,0-5a1.48,1.48,0,0,1,1.56-1.4h51.48a1.61,1.61,0,0,1,.86.23c.52.33.42.82.57,3.46a3.92,3.92,0,0,1-.51,2.72l0,.06c-.92,1.13-3.13,1-3.87.89A21.66,21.66,0,0,1,301.66,310.2Z"
        transform="translate(-254.46 -226.55)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.32"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer14"
        v-if="selectedTooth.crown.onlay"
        d="M301.66,310.2a18.17,18.17,0,0,1-7.87,1.44,13.35,13.35,0,0,1-4.85-1,39,39,0,0,1-5.41-3.33c-1.29-.86-2-1.35-3.08-1.42a5.38,5.38,0,0,0-2.95.86c-4.11,2.23-4.48,4.15-6.14,4.12s-1.61-2.17-4.55-3.28a11.23,11.23,0,0,0-5.72-.56,7.94,7.94,0,0,1-3.54.15,5.85,5.85,0,0,1-1.26-.43c-.14-.26,0-2.46,0-5a1.48,1.48,0,0,1,1.56-1.4h51.48a1.61,1.61,0,0,1,.86.23c.52.33.42.82.57,3.46a3.92,3.92,0,0,1-.51,2.72l0,.06c-.92,1.13-3.13,1-3.87.89A21.66,21.66,0,0,1,301.66,310.2Z"
        transform="translate(-254.46 -226.55)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.32"
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
