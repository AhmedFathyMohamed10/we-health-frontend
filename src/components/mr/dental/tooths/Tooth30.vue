<template>
<div class="">
<svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 18  57.55 113.6"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_30_all">
      <g id="adult_dent_30">
        <g id="adult_dent_30_crown">
          <path
            id="adult_dent_30_crown1"
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
            d="M281.64,255.92c-3-.69-6.06-.54-12.12-.23s-9.18.5-10.55,2.35c-2.17,2.93-1.31,7.69-.49,12.23.85,4.7,1.79,9.9,5.22,12.24,2.1,1.42,3.66.78,12.42-.47a105.77,105.77,0,0,1,10.55-1.3c9.74.09,12.06,5.15,16.95,2.82,5.29-2.51,7-10.56,7.39-12.35.48-2.22,2.08-9.73-1.28-13.52s-9.66-2-12.52-1.18c-2.48.68-2.31,1.15-4.33,1.53C288.57,258.86,286.45,257,281.64,255.92Z"
            transform="translate(-254.9 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.28"
          />
          <path
            id="adult_dent_30_crown2"
            v-if="selectedTooth.dent.crown2"
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
            d="M285.58,255.81c0-1.11,4.13-1.94,5-2.12a11.35,11.35,0,0,1,6.31.35c1,.37,1.85.68,1.87,1.18,0,1-3.44,2.37-6.7,2.47C289.05,257.78,285.6,256.81,285.58,255.81Z"
            transform="translate(-254.9 -2a26.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.28"
          />
        </g>
        <path
          id="adult_dent_30_root"
          v-if="selectedTooth.dent.root1"
          d="M263.7,284c-1.88,3,1.12,6.19.49,16.24a67.26,67.26,0,0,1-1.38,8.94c-1.51,7.91-2.74,10.6-3.94,18.11-.9,5.64-1.33,8.48-.39,9.17,1.92,1.44,8.93-4.73,13-12.93,2.48-5,3.24-9.48,7.78-15.41,2.72-3.55,3.8-3.72,4.44-3.53,3,.88,3,11.71,3,14.35,0,4.92-.09,9.59-2.66,13.52-2.05,3.13-4.46,3.93-4.24,4.59.34,1,6.62.31,11.82-3.88A25.62,25.62,0,0,0,299.18,322c1.33-3.68.43-3.51,2.27-13.23.67-3.58,1.48-7.25,2.37-13.24.78-5.34.88-7.47-.2-9.17-.39-.62-1.1-1.44-5.33-2.82a35,35,0,0,0-8.57-2c-3.89-.33-5.69.22-10.35.71C267.75,283.5,265.31,281.51,263.7,284Z"
          transform="translate(-254.9 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.28"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I30"
        v-if="selectedTooth.filling_caries_class_i"
        d="M294.56,269.09H279.14a4.55,4.55,0,0,1-4.23-4.81v-6.5a2.68,2.68,0,0,1-.08-.89,2,2,0,0,1,.1-.54c.24-.6,1.49-.48,2-.42,2.1.22,3.16.33,3.86.49,1.11.25,1.88.48,3.21.88a18.47,18.47,0,0,1,2.3.79,6.33,6.33,0,0,0,1.56.69,11.09,11.09,0,0,0,1.73,0c.84,0,.86.08,1.64.08a7.9,7.9,0,0,0,1.48-.09,9.41,9.41,0,0,0,1.32-.4c.31-.11.93-.32,1.73-.68.25-.12.67-.32,1.31-.59a5.43,5.43,0,0,1,1-.3c.47-.1.59-.07.67,0,.24.25,0,.9,0,.95v6.5A4.55,4.55,0,0,1,294.56,269.09Z"
        transform="translate(-254.9 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial30"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M309.31,272.61h-7.92a2.77,2.77,0,0,1-2.5-3V258.39a2.44,2.44,0,0,1,.33-1.6c.43-.58,1.11-.55,2.5-.57.67,0,1.73,0,3.07-.1l2.85.6a4.59,4.59,0,0,1,1.89,1.37,6,6,0,0,1,1.23,2.55c.18,1.5.35,3,.53,4.51-.11,1.58-.24,3-.36,4.13a5.5,5.5,0,0,1-.5,2A3.94,3.94,0,0,1,309.31,272.61Z"
        transform="translate(-254.9 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal30"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M274.93,256.35c-.5-1-2.18-.21-5.21.08-3.2.32-4.17-.23-7.43.47a4.67,4.67,0,0,0-2.89,1.4,6.72,6.72,0,0,0-1.33,3.82,21.2,21.2,0,0,0,.32,3c.2,1.58.3,2.39.47,3.54a19.24,19.24,0,0,0,.62,3.54c.9,1.36,2.95.63,6,.28,6.21-.69,8.07,1.18,9.3-.56.61-.86.07-1.39-.16-8.76a23.27,23.27,0,0,1,.08-4.57C274.92,257.26,275.17,256.8,274.93,256.35Z"
        transform="translate(-254.9 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V30"
        v-if="selectedTooth.filling_caries_class_v"
        x="25.99"
        y="48.16"
        width="9.68"
        height="3.23"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal30"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M267.44,272.81l-7.95-.48h0c-.3-1.63-.59-3.26-.89-4.88h0l8.84-.69a2.18,2.18,0,0,1,2,2.35v1.36A2.18,2.18,0,0,1,267.44,272.81Z"
        transform="translate(-254.9 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial30"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M310,271.83l-7.79,1a2.18,2.18,0,0,1-2-2.34v-1.36a2.18,2.18,0,0,1,2-2.35l8.76.88h0c-.32,1.39-.64,2.79-1,4.19Z"
        transform="translate(-254.9 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo30">
        <path
          id="ADULT_DENT_Endo30_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M267.61,284a20.4,20.4,0,0,1,2.76-.51c1.34-.18,2.36-.23,2.65-.25,1.45-.07,1.79,0,3.39,0,2.54,0,2.65-.3,3-.12,2.23,1.25.59,16.33-6.47,31.36-4.58,9.75-11.09,18.74-12.61,17.7-1.74-1.18,6.94-12.9,6.15-30.85C266.24,296.7,265.11,285,267.61,284Z"
          transform="translate(-254.9 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Endo30_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M286.16,282.11c.49-.39,1.49-.26,3.49,0a35.49,35.49,0,0,1,6.36,1.52,23.26,23.26,0,0,1,3.6,1.27c1.11.86,3.05,3.59-.53,24.4-1.92,11.22-3.21,14.67-5.08,17.83-2.3,3.88-6,8.23-7.31,7.34-1.59-1.09,2.89-8.18,2.65-19.73-.09-3.94-1.08-9.59-3.08-20.87C285.35,288.73,284.34,283.56,286.16,282.11Z"
          transform="translate(-254.9 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Post30">
        <g id="ADULT_DENT_Post30_1" v-if="selectedTooth.post.post1">
          <path
            d="M294.33,279.75l-9.62,2.12c-.36.08-.69-.24-.75-.72l-.43-3.43a.9.9,0,0,1,.54-1l9.62-2.12c.36-.08.7.24.76.72l.42,3.43A.88.88,0,0,1,294.33,279.75Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M295.07,321.38l-1.21.27c-.63.14-1.23-.43-1.33-1.28l-4.74-38.46a1.57,1.57,0,0,1,1-1.78l1.21-.27c.63-.14,1.23.43,1.33,1.28L296,319.6A1.57,1.57,0,0,1,295.07,321.38Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M293.74,288.31l-6.59,1.45c-.17,0-.34-.12-.37-.35l-.13-1.11a.43.43,0,0,1,.26-.49l6.59-1.45c.17,0,.34.12.37.35l.13,1.1A.44.44,0,0,1,293.74,288.31Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M294.56,294.15l-6.62,1.46c-.17,0-.32-.11-.35-.33l-.14-1.16a.39.39,0,0,1,.25-.46l6.62-1.47c.17,0,.32.12.35.34l.14,1.15A.41.41,0,0,1,294.56,294.15Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M295.17,300l-6.57,1.46c-.18,0-.35-.13-.38-.37l-.13-1.08a.45.45,0,0,1,.27-.51l6.57-1.45c.18,0,.35.12.38.36l.13,1.09A.43.43,0,0,1,295.17,300Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M296,305.87l-6.63,1.47c-.17,0-.32-.11-.34-.33l-.15-1.17a.4.4,0,0,1,.24-.46l6.64-1.46c.16,0,.31.11.34.32l.14,1.17A.4.4,0,0,1,296,305.87Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M296.74,311.73l-6.65,1.47c-.16,0-.31-.11-.33-.32l-.15-1.19a.39.39,0,0,1,.24-.44l6.61-1.46c.18,0,.35.12.38.36l.14,1.14A.39.39,0,0,1,296.74,311.73Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M297.34,317.62l-6.58,1.45c-.18,0-.34-.12-.37-.36l-.14-1.09a.43.43,0,0,1,.27-.5l6.58-1.46c.18,0,.34.13.37.36l.14,1.1A.43.43,0,0,1,297.34,317.62Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="42.02"
            y1="84.8"
            x2="35.65"
            y2="92.25"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="41.77"
            y1="83.07"
            x2="35.4"
            y2="90.54"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="41.32"
            y1="78.88"
            x2="35"
            y2="86.38"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="41.08"
            y1="77.24"
            x2="34.77"
            y2="84.62"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="40.46"
            y1="73.12"
            x2="34.28"
            y2="80.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="40.25"
            y1="71.37"
            x2="34.03"
            y2="78.79"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="39.86"
            y1="67.19"
            x2="33.44"
            y2="74.62"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="39.61"
            y1="65.47"
            x2="33.27"
            y2="72.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="39.04"
            y1="61.37"
            x2="32.83"
            y2="68.79"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="38.8"
            y1="59.64"
            x2="32.64"
            y2="67"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M290.11,317"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M292.27,276l-6.56,1.45c-.7.15-1.36-.48-1.47-1.42l-.52-4.16a1.73,1.73,0,0,1,1.06-2l6.56-1.45c.69-.15,1.35.48,1.47,1.41l.51,4.17A1.73,1.73,0,0,1,292.27,276Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <g id="ADULT_DENT_Post30_2" v-if="selectedTooth.post.post2">
          <path
            d="M282.63,282.33l-9.29-3.68a.85.85,0,0,1-.36-1.06l1-3.25c.14-.45.53-.71.88-.57l9.28,3.68a.84.84,0,0,1,.37,1.06l-1,3.25C283.37,282.21,283,282.47,282.63,282.33Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M266.44,319.22l-1.17-.46a1.52,1.52,0,0,1-.65-1.89L276,280.46a1.27,1.27,0,0,1,1.56-1l1.17.46a1.52,1.52,0,0,1,.65,1.89L268,318.21A1.27,1.27,0,0,1,266.44,319.22Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M278.65,289.49,272.29,287a.42.42,0,0,1-.18-.52l.33-1.05c.07-.22.26-.35.43-.28l6.36,2.52a.41.41,0,0,1,.18.52l-.33,1A.36.36,0,0,1,278.65,289.49Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M277,295.08l-6.39-2.54a.38.38,0,0,1-.17-.49l.34-1.09c.07-.21.25-.33.41-.27l6.39,2.54a.39.39,0,0,1,.17.49l-.34,1.09C277.35,295,277.17,295.14,277,295.08Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.16,300.58l-6.34-2.51a.43.43,0,0,1-.18-.53l.32-1c.07-.23.27-.36.44-.29l6.34,2.51a.43.43,0,0,1,.19.54l-.33,1C275.53,300.52,275.34,300.65,275.16,300.58Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M273.54,306.18l-6.41-2.54a.38.38,0,0,1-.16-.48l.35-1.11c.06-.21.24-.32.39-.26l6.41,2.54a.38.38,0,0,1,.16.48l-.34,1.11C273.87,306.12,273.69,306.24,273.54,306.18Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M271.81,311.73l-6.42-2.54a.37.37,0,0,1-.16-.47l.35-1.13a.32.32,0,0,1,.39-.25l6.37,2.52a.43.43,0,0,1,.19.54l-.34,1.08C272.13,311.68,272,311.79,271.81,311.73Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M270,317.23l-6.35-2.51a.43.43,0,0,1-.18-.53l.32-1a.36.36,0,0,1,.44-.28l6.35,2.51a.43.43,0,0,1,.18.53l-.32,1A.36.36,0,0,1,270,317.23Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="17.13"
            y1="84.93"
            x2="8.53"
            y2="87.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="17.61"
            y1="83.27"
            x2="9.01"
            y2="86.14"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="18.91"
            y1="79.34"
            x2="10.34"
            y2="82.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="19.36"
            y1="77.77"
            x2="10.85"
            y2="80.59"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.48"
            y1="73.8"
            x2="12.08"
            y2="76.71"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.01"
            y1="72.15"
            x2="12.57"
            y2="75.06"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.36"
            y1="68.26"
            x2="13.73"
            y2="71.07"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.84"
            y1="66.61"
            x2="14.27"
            y2="69.46"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.99"
            y1="62.69"
            x2="15.56"
            y2="65.61"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="24.49"
            y1="61.03"
            x2="16.11"
            y2="63.93"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M263.87,312.52"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M282.35,277.83,276,275.32a1.67,1.67,0,0,1-.72-2.08l1.24-3.94c.28-.89,1-1.39,1.72-1.12l6.33,2.51a1.66,1.66,0,0,1,.72,2.08l-1.24,3.94C283.8,277.6,283,278.1,282.35,277.83Z"
            transform="translate(-254.9 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis30">
        <path
          id="ADULT_DENT_Right_gingivitis30"
          v-if="selectedTooth.gingivitis.right"
          d="M302.84,284.57c-.08.36.89.67,1.52,2.15a7.93,7.93,0,0,1,.44,3.36,40.72,40.72,0,0,1-.62,6.46c-.76,4.39-1.25,5.23-.8,6,.68,1.18,3,1.14,4-.36,1.17-1.69-.23-3.82,0-9.7.15-3.92.86-5.17.08-6.59C306.26,283.66,303,283.92,302.84,284.57Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_gingivitis30"
          v-if="selectedTooth.gingivitis.right"
          d="M263.6,283.13c.09.22-.52.53-.9,1.55a5.39,5.39,0,0,0-.21,2.52c.2,2,.46,2.94.71,4.55.37,2.44,0,1.76.4,5.87.12,1.22.21,1.9-.1,2.16-.48.39-1.68-.44-2.41-1.44-1.14-1.56-.73-3-1.21-6.83-.53-4.31-1.35-5.12-.7-6.47C260.22,282.9,263.41,282.65,263.6,283.13Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_periodontal30"
          v-if="selectedTooth.periodontal.right"
          d="M302.84,284.57c-.08.36.89.67,1.52,2.15a7.93,7.93,0,0,1,.44,3.36,40.72,40.72,0,0,1-.62,6.46c-.76,4.39-1.25,5.23-.8,6,.68,1.18,3,1.14,4-.36,1.17-1.69-.23-3.82,0-9.7.15-3.92.86-5.17.08-6.59C306.26,283.66,303,283.92,302.84,284.57Z"
          transform="translate(-254.9 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_periodontal30"
          v-if="selectedTooth.periodontal.right"
          d="M263.6,283.13c.09.22-.52.53-.9,1.55a5.39,5.39,0,0,0-.21,2.52c.2,2,.46,2.94.71,4.55.37,2.44,0,1.76.4,5.87.12,1.22.21,1.9-.1,2.16-.48.39-1.68-.44-2.41-1.44-1.14-1.56-.73-3-1.21-6.83-.53-4.31-1.35-5.12-.7-6.47C260.22,282.9,263.41,282.65,263.6,283.13Z"
          transform="translate(-254.9 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_perio30"
          v-if="selectedTooth.perio.right"
          d="M302.84,284.57c-.08.36.89.67,1.52,2.15a7.93,7.93,0,0,1,.44,3.36,40.72,40.72,0,0,1-.62,6.46c-.76,4.39-1.25,5.23-.8,6,.68,1.18,3,1.14,4-.36,1.17-1.69-.23-3.82,0-9.7.15-3.92.86-5.17.08-6.59C306.26,283.66,303,283.92,302.84,284.57Z"
          transform="translate(-254.9 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_perio30"
          v-if="selectedTooth.perio.right"
          d="M263.6,283.13c.09.22-.52.53-.9,1.55a5.39,5.39,0,0,0-.21,2.52c.2,2,.46,2.94.71,4.55.37,2.44,0,1.76.4,5.87.12,1.22.21,1.9-.1,2.16-.48.39-1.68-.44-2.41-1.44-1.14-1.56-.73-3-1.21-6.83-.53-4.31-1.35-5.12-.7-6.47C260.22,282.9,263.41,282.65,263.6,283.13Z"
          transform="translate(-254.9 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Implant30" v-if="selectedTooth.implant">
        <path
          d="M299.45,288.17l-30.05.05c-1.11,0-2-.46-2-1l.06-4.15c0-.57.92-1,2-1l30.05,0c1.11,0,2,.46,2,1l-.07,4.14C301.47,287.7,300.56,288.17,299.45,288.17Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M285.34,337.36h-3.79c-2,0-3.56-.82-3.54-1.84l.75-46.47c0-1,1.63-1.85,3.6-1.85h3.79c2,0,3.55.82,3.54,1.84l-.75,46.47C288.92,336.52,287.31,337.35,285.34,337.36Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M294.28,298.1l-20.56,0c-.55,0-1-.23-1-.51l0-1.34c0-.28.45-.51,1-.51l20.56,0c.55,0,1,.23,1,.52l0,1.33C295.28,297.86,294.83,298.09,294.28,298.1Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M294.5,305.18l-20.69,0c-.51,0-.92-.21-.92-.48l0-1.4c0-.26.43-.48.94-.48l20.69,0c.51,0,.92.21.91.47l0,1.4C295.43,305,295,305.18,294.5,305.18Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M294,312.26l-20.53,0c-.56,0-1-.23-1-.52l0-1.31c0-.29.46-.53,1-.53l20.52,0c.56,0,1,.23,1,.52l0,1.32C295.05,312,294.59,312.26,294,312.26Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M294.28,319.34l-20.71,0c-.51,0-.91-.21-.91-.48l0-1.41c0-.26.42-.47.92-.48l20.72,0c.51,0,.91.21.91.47l0,1.42C295.2,319.13,294.79,319.34,294.28,319.34Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M294.2,326.42l-20.77,0c-.49,0-.89-.21-.88-.46l0-1.44c0-.26.41-.46.89-.46l20.64,0c.56,0,1,.24,1,.53l0,1.37C295.09,326.22,294.69,326.42,294.2,326.42Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M293.7,333.51l-20.54,0c-.55,0-1-.23-1-.52l0-1.32c0-.29.46-.52,1-.52l20.54,0c.55,0,1,.23,1,.51l0,1.33C294.71,333.27,294.25,333.51,293.7,333.51Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="39.91"
          y1="99.52"
          x2="17.63"
          y2="106.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="39.83"
          y1="97.41"
          x2="17.56"
          y2="104.58"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="40.12"
          y1="92.37"
          x2="17.97"
          y2="99.58"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="40.03"
          y1="90.38"
          x2="17.98"
          y2="97.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="39.76"
          y1="85.37"
          x2="18.09"
          y2="92.49"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="39.83"
          y1="83.26"
          x2="18.03"
          y2="90.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="40.29"
          y1="78.24"
          x2="17.87"
          y2="85.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="40.2"
          y1="76.15"
          x2="18.02"
          y2="83.28"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="40.06"
          y1="71.18"
          x2="18.32"
          y2="78.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="40.04"
          y1="69.08"
          x2="18.42"
          y2="76.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M272,330.93"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M294.67,283.2l-20.48,0c-2.18,0-3.93-.91-3.91-2l.08-5c0-1.13,1.8-2.05,4-2.05l20.47,0c2.19,0,3.94.91,3.92,2l-.08,5C298.63,282.28,296.85,283.19,294.67,283.2Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown30">
        <path
          id="ADULT_DENT_Endo_Crown1_30"
          v-if="selectedTooth.endo_crown.crown1"
          d="M307.7,257.22a14.86,14.86,0,0,0-4.78-.6,21.43,21.43,0,0,0-6.46,1.44,15.21,15.21,0,0,1-3.25,1.1,13.27,13.27,0,0,1-3.61,0,17.16,17.16,0,0,1-3.68-.68c-1.85-.55-2.11-1-3.62-1.42a14.16,14.16,0,0,0-4.11-.45c-2.81-.06-4.75,0-7.46.07a44.88,44.88,0,0,0-6.56.34,26,26,0,0,0-4.51,1.2,1.68,1.68,0,0,0-.44.33,2.53,2.53,0,0,0-.59,1.67c-.09,1.19-.19,2.37-.28,3.55a1.9,1.9,0,0,0,.57,1.87.67.67,0,0,0,.44.07h50.47a1.48,1.48,0,0,0,1.33-1.58c-.31-1.56-.62-3.12-.92-4.68a3.61,3.61,0,0,0-1.05-1.64A2.67,2.67,0,0,0,307.7,257.22Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.28"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_30"
          v-if="selectedTooth.endo_crown.crown2"
          d="M281.17,273l9.32-.24,1.46-6.63a.25.25,0,0,0-.21-.31l-12.16,0a.25.25,0,0,0-.2.33Z"
          transform="translate(-254.9 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.28"
        />
      </g>
      <g id="ADULT_DENT_Periapical30">
        <path
          id="ADULT_DENT_Periapical30_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M286,321.75c.33.19.12,1.45-.23,3.46a20,20,0,0,1-1,4.27,9.26,9.26,0,0,1-2.16,3.79c-1,1-2.17,1.26-3.12,2.71a1.6,1.6,0,0,0-.34,1.16c.12.53.71.76,1,.88a4,4,0,0,0,2.73-.07c2.66-.9,4-1.36,4.54-1.63a20,20,0,0,0,5.11-3.12,20.28,20.28,0,0,0,3.41-3.93c1.84-2.66,2.4-4.6,2.67-4.47s.07,3-1.19,5.56c-1.17,2.37-2.75,3.56-5.06,5.28a25.85,25.85,0,0,1-6.59,3.53,8.83,8.83,0,0,1-4.54.95c-.91-.1-2.77-.31-3.35-1.76s.42-3.24.79-3.94c1.57-2.89,3.42-2.27,4.38-4.6.79-1.94-.26-2.92.74-5.36C284.46,322.86,285.63,321.51,286,321.75Z"
          transform="translate(-254.9 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Periapical30_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M273,321.68c-.4-.13-.9,2.19-2.67,5.22a27.9,27.9,0,0,1-3.58,4.75c-1,1.08-.37.28-4.37,4.06-.87.82-1.6,1.53-2.67,1.56a2.36,2.36,0,0,1-2.05-.95,4.11,4.11,0,0,1-.23-2.84c1.07-6.27,0-3,1.31-9,.66-3.11,1-4.66,1.36-6.1.48-1.79.77-2.63.63-2.71s-1.88,2.45-3,5.49a42.71,42.71,0,0,0-1.48,5.76c-1.24,5.67-1.13,6.77-1,7.38s.57,4,2.58,5c1.31.67,2.62,0,4.65-1.09a23.08,23.08,0,0,0,7.73-7.05,14.59,14.59,0,0,0,2.84-6C273.26,323.65,273.31,321.79,273,321.68Z"
          transform="translate(-254.9 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer30"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M307.78,257.31a14.86,14.86,0,0,0-4.78-.6,21.43,21.43,0,0,0-6.46,1.44,15.21,15.21,0,0,1-3.25,1.1,13.27,13.27,0,0,1-3.61,0,17.16,17.16,0,0,1-3.68-.68c-1.85-.55-2.11-1-3.62-1.42a14.53,14.53,0,0,0-4.11-.45c-2.81-.06-4.75,0-7.46.07a42.72,42.72,0,0,0-6.56.35,25.26,25.26,0,0,0-4.51,1.19,1.68,1.68,0,0,0-.44.33,2.53,2.53,0,0,0-.59,1.67l-.27,3.55a1.87,1.87,0,0,0,.56,1.87.67.67,0,0,0,.44.07h50.47a1.47,1.47,0,0,0,1.33-1.58c-.31-1.56-.62-3.12-.92-4.68a3.61,3.61,0,0,0-1.05-1.64A2.67,2.67,0,0,0,307.78,257.31Z"
        transform="translate(-254.9 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.28"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer30"
        v-if="selectedTooth.crown.onlay"
        d="M307.78,257.31a14.86,14.86,0,0,0-4.78-.6,21.43,21.43,0,0,0-6.46,1.44,15.21,15.21,0,0,1-3.25,1.1,13.27,13.27,0,0,1-3.61,0,17.16,17.16,0,0,1-3.68-.68c-1.85-.55-2.11-1-3.62-1.42a14.53,14.53,0,0,0-4.11-.45c-2.81-.06-4.75,0-7.46.07a42.72,42.72,0,0,0-6.56.35,25.26,25.26,0,0,0-4.51,1.19,1.68,1.68,0,0,0-.44.33,2.53,2.53,0,0,0-.59,1.67l-.27,3.55a1.87,1.87,0,0,0,.56,1.87.67.67,0,0,0,.44.07h50.47a1.47,1.47,0,0,0,1.33-1.58c-.31-1.56-.62-3.12-.92-4.68a3.61,3.61,0,0,0-1.05-1.64A2.67,2.67,0,0,0,307.78,257.31Z"
        transform="translate(-254.9 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.28"
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