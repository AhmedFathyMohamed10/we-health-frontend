<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 18 57.56 113.6"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_18_all">
      <g id="adult_dent_18">
        <path
          id="adult_dent_18_crown"
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
          d="M280.26,262.31c-1.51,0-1.6-.79-4.67-2.15a20.44,20.44,0,0,0-6.16-1.78,11.82,11.82,0,0,0-6.25.56,12.38,12.38,0,0,0-5.29,4.36,15.64,15.64,0,0,0-2.77,8.71,16.9,16.9,0,0,0,3,9.55c1,1.59,1.72,2.8,3.12,3.51,2,1,3.51.08,6.38-.28,3.68-.46,4.1.73,8.18.85,4.6.12,4.54-1.38,10.47-2.11,6.65-.82,8.78.81,11.18-1.55,1.86-1.82,2.38-4.55,2.77-6.6a16.65,16.65,0,0,0-.6-9.13,11.87,11.87,0,0,0-4-5.51,9.35,9.35,0,0,0-4.58-1.66,11.76,11.76,0,0,0-5.33.7C282.51,260.92,282.29,262.33,280.26,262.31Z"
          transform="translate(-254.47 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.3"
        />
        <path
          id="adult_dent_18_root"
          v-if="selectedTooth.dent.root1"
          d="M260.89,285.78c-2,2.32.46,6.64,3.13,20.51,1.64,8.49,1.29,9.84,3,14.19A33.18,33.18,0,0,0,274.48,332c.32.32,6.71,6.51,8.55,4.78,1.28-1.21-.16-5.81-1.69-10.68-1.73-5.52-2.56-5.75-3.24-9-1.27-6-.17-13.5,2.16-14.19s5.26,4.85,7.1,8.15c3.26,5.86,2.57,7.8,5.65,12.22a28.2,28.2,0,0,0,6.86,6.74c2.36,1.8,7.6,5.77,9,4.22.25-.28.84-1.23-2.7-10.71-2-5.49-3-7.14-4.84-11.93-2.58-6.65-3.87-10-4.13-12.77-.75-8.19,3-12.6,1-15-1-1.2-3.65-.77-8.9.14-5.64,1-6,1.69-9.5,2-2.77.22-3-.18-9.74-.56C264.46,285,261.65,284.9,260.89,285.78Z"
          transform="translate(-254.47 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.3"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I18"
        v-if="selectedTooth.filling_caries_class_i"
        d="M289,272.32H270.61a2.81,2.81,0,0,1-2.56-3v-8.08a2.56,2.56,0,0,1,.51-1.89c.37-.35.88-.36,2.42,0a17.6,17.6,0,0,1,3.06.9c1,.42,1.09.57,3.79,2,1.42.73,1.84.92,2.48.9a5.13,5.13,0,0,0,2.28-.86c1.88-1,1.86-1.13,2.86-1.62a10.25,10.25,0,0,1,4.64-.9,1.47,1.47,0,0,1,1.31.61,1.46,1.46,0,0,1,.12.89v8.08A2.81,2.81,0,0,1,289,272.32Z"
        transform="translate(-254.47 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial18"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M268.66,259c-.08-.31-1.54-.08-1.76-.05a16.35,16.35,0,0,0-4.28,1,12,12,0,0,0-4.68,4.38,12.7,12.7,0,0,0-2.05,4.53,12.92,12.92,0,0,0-.32,3.51,18.06,18.06,0,0,0,1.47,5.81h0s2.87.21,5.09.19c3.55,0,5.32-.05,5.95-.9,1.32-1.76-.29-4.89-.36-10.19,0-1.13,0-1.86,0-3.71,0-.68,0-1.37,0-2.05a3.42,3.42,0,0,1,.2-1.62C268.25,259.3,268.7,259.15,268.66,259Z"
        transform="translate(-254.47 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal18"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M298.41,276.36c-.7.4-1.15,0-2.64-.15-2.78-.35-3.56.6-4.22-.12s.33-2.06.32-6.16c0-2-.28-3.8-.11-5.67.05-.57.05-1.15.11-1.72.09-1.06.19-1.43,0-1.85a1.68,1.68,0,0,0-1-.81,9,9,0,0,1,6.31,3.27,12.48,12.48,0,0,1,2.21,4.56,11.15,11.15,0,0,1,.59,5.47C299.79,274,299.49,275.73,298.41,276.36Z"
        transform="translate(-254.47 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V18"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.79"
        y="50.49"
        width="9.93"
        height="3.24"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal18"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M299.84,272.58l-8.6,1.29a2.2,2.2,0,0,1-2-2.35v-1.37a2.2,2.2,0,0,1,2-2.35l8.26.62h0Z"
        transform="translate(-254.47 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial18"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M264.42,273.87l-8.43-.79h0c.05-1.62.1-3.24.14-4.86h0l8.29-.42a2.2,2.2,0,0,1,2,2.35v1.37A2.2,2.2,0,0,1,264.42,273.87Z"
        transform="translate(-254.47 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo18">
        <path
          id="ADULT_DENT_Endo18_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M263.45,286.5c.39-.38,1.68-.36,4.25-.3a17.2,17.2,0,0,1,3.45.22c1.25.51,2.81,2.28,3.85,10.65.93,7.49,0,8.05.72,14.64a67.49,67.49,0,0,0,2.73,12.72c1.71,5.11,3.47,7.87,2.72,8.7s-3.37-.72-5.27-2.54c-3.36-3.25-3.48-6.65-6.35-16.76-1.64-5.78-3-11.67-4.73-17.4C263.53,292.2,262.08,287.84,263.45,286.5Z"
          transform="translate(-254.47 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Endo18_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M282.59,286.63c.34-.5.6-.38,5.63-1.49,2.95-.64,3.94-.92,4.72-.21,1,.93.93,2.86.91,4,0,.45.6,4.47,1.82,12.52C296.2,305,297.9,309,301.3,317c3.73,8.78,5.71,11.89,5.09,12.51-.84.84-5.76-3.39-9.63-8.69-4.68-6.41-3.57-8.56-9.63-21.22C283.88,292.76,281.27,288.6,282.59,286.63Z"
          transform="translate(-254.47 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Post18">
        <g id="ADULT_DENT_Post18_1" v-if="selectedTooth.post.post1">
          <path
            d="M291.05,280.57l-9.23,4.64c-.34.18-.74,0-.89-.5l-1.07-3.25a.94.94,0,0,1,.34-1.13l9.23-4.64c.34-.18.74.05.89.5l1.07,3.25A.94.94,0,0,1,291.05,280.57Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M299.74,321.15l-1.16.58c-.61.31-1.31-.1-1.58-.9l-12.08-36.4a1.67,1.67,0,0,1,.61-2l1.17-.59c.6-.3,1.31.1,1.57.9l12.09,36.41A1.67,1.67,0,0,1,299.74,321.15Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M292.09,289.11l-6.31,3.18c-.17.09-.37,0-.44-.25l-.35-1a.48.48,0,0,1,.17-.56l6.31-3.18a.33.33,0,0,1,.44.25l.35,1.05A.46.46,0,0,1,292.09,289.11Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M294,294.61l-6.35,3.2c-.16.08-.34,0-.41-.24l-.36-1.09a.43.43,0,0,1,.16-.52l6.35-3.2c.15-.08.34,0,.41.23l.36,1.1A.43.43,0,0,1,294,294.61Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M295.77,300.21l-6.3,3.18c-.17.08-.37,0-.45-.26l-.34-1a.45.45,0,0,1,.17-.56l6.3-3.18c.17-.08.37,0,.45.26l.34,1A.47.47,0,0,1,295.77,300.21Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M297.72,305.71l-6.36,3.2a.3.3,0,0,1-.4-.23l-.37-1.11a.42.42,0,0,1,.16-.51l6.35-3.2c.16-.08.34,0,.41.23l.37,1.1A.46.46,0,0,1,297.72,305.71Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M299.57,311.25l-6.38,3.21c-.15.08-.32,0-.39-.22l-.37-1.13a.41.41,0,0,1,.15-.5l6.33-3.19c.18-.09.38,0,.45.26l.36,1.07A.41.41,0,0,1,299.57,311.25Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M301.29,316.86,295,320c-.17.09-.37,0-.44-.25l-.35-1a.48.48,0,0,1,.18-.56l6.3-3.17c.17-.09.37,0,.44.25l.35,1A.48.48,0,0,1,301.29,316.86Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="45.26"
            y1="84.28"
            x2="40.3"
            y2="93.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="44.67"
            y1="82.65"
            x2="39.72"
            y2="91.66"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="43.42"
            y1="78.66"
            x2="38.53"
            y2="87.69"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="42.87"
            y1="77.12"
            x2="37.96"
            y2="86.02"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="41.46"
            y1="73.25"
            x2="36.69"
            y2="82.14"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="40.92"
            y1="71.59"
            x2="36.11"
            y2="80.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="39.73"
            y1="67.6"
            x2="34.72"
            y2="76.59"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="39.15"
            y1="65.99"
            x2="34.22"
            y2="74.95"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="37.79"
            y1="62.12"
            x2="33"
            y2="71.04"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="37.23"
            y1="60.49"
            x2="32.46"
            y2="69.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M293.94,318.18"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M288.26,277.42,282,280.58c-.66.34-1.45-.1-1.74-1l-1.31-3.94a1.85,1.85,0,0,1,.68-2.21l6.29-3.17c.67-.33,1.45.11,1.74,1l1.31,3.94A1.85,1.85,0,0,1,288.26,277.42Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <g id="ADULT_DENT_Post18_2" v-if="selectedTooth.post.post2">
          <path
            d="M276.19,284.53l-10,1.19c-.37,0-.69-.31-.72-.8l-.19-3.47a.85.85,0,0,1,.62-1l10-1.19c.37,0,.69.31.72.8l.19,3.47A.85.85,0,0,1,276.19,284.53Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M274,326.28l-1.26.15c-.66.08-1.23-.55-1.28-1.41l-2.15-39a1.52,1.52,0,0,1,1.1-1.69l1.27-.15c.65-.08,1.22.55,1.27,1.4l2.15,39A1.52,1.52,0,0,1,274,326.28Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275,293l-6.83.82c-.19,0-.34-.16-.36-.4l-.06-1.11a.43.43,0,0,1,.31-.47l6.83-.82c.19,0,.34.16.36.39l.06,1.12A.42.42,0,0,1,275,293Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.42,299l-6.88.82c-.17,0-.32-.15-.33-.37l-.06-1.17a.38.38,0,0,1,.28-.44l6.88-.82c.17,0,.32.14.33.36l.07,1.18A.4.4,0,0,1,275.42,299Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.63,304.92l-6.82.81c-.19,0-.35-.15-.36-.4l-.06-1.1a.43.43,0,0,1,.31-.48l6.82-.81c.19,0,.35.16.36.4l.06,1.1A.42.42,0,0,1,275.63,304.92Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M276.08,310.84l-6.89.82c-.17,0-.31-.14-.32-.36l-.07-1.18a.41.41,0,0,1,.28-.44l6.89-.82c.17,0,.32.15.33.36l.06,1.19A.38.38,0,0,1,276.08,310.84Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M276.42,316.78l-6.91.82c-.16,0-.3-.13-.31-.35l-.07-1.21a.38.38,0,0,1,.27-.42l6.86-.81c.19,0,.35.16.37.4l.06,1.15A.38.38,0,0,1,276.42,316.78Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M276.62,322.74l-6.83.81c-.18,0-.34-.16-.36-.4l-.06-1.11a.43.43,0,0,1,.31-.47l6.83-.81c.18,0,.34.15.36.39l.06,1.11A.45.45,0,0,1,276.62,322.74Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.15"
            y1="89.87"
            x2="15.11"
            y2="96.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.01"
            y1="88.11"
            x2="14.98"
            y2="94.97"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.85"
            y1="83.87"
            x2="14.85"
            y2="90.77"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.72"
            y1="82.21"
            x2="14.75"
            y2="88.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.37"
            y1="78.02"
            x2="14.53"
            y2="84.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.28"
            y1="76.25"
            x2="14.4"
            y2="83.07"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.18"
            y1="72.03"
            x2="14.09"
            y2="78.84"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="21.04"
            y1="70.29"
            x2="14.03"
            y2="77.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.74"
            y1="66.12"
            x2="13.87"
            y2="72.94"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.62"
            y1="64.36"
            x2="13.8"
            y2="71.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M269.26,321.41"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M274.34,280.54l-6.81.82c-.72.08-1.35-.62-1.4-1.56l-.24-4.22a1.68,1.68,0,0,1,1.22-1.87l6.81-.81c.73-.09,1.36.61,1.41,1.56l.23,4.21A1.67,1.67,0,0,1,274.34,280.54Z"
            transform="translate(-254.47 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis18">
        <path
          id="ADULT_DENT_Left_gingivitis18"
          v-if="selectedTooth.gingivitis.left"
          d="M260.3,285.39c.16.29-.45.72-.74,1.85s0,2,.37,3.71c.64,2.82.32,2.26.86,4.42,1,4,1.94,5.24,1.46,5.85s-2.1.15-3.17-.86c-.79-.74-1.18-1.67-2.08-7.7-.6-4-.62-4.87-.12-5.7C257.84,285.35,260,284.91,260.3,285.39Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_gingivitis18"
          v-if="selectedTooth.gingivitis.right"
          d="M297.9,282.68c0,.15.87.17,1.34,1,.28.49.29,1.06.12,2.57-.2,1.74-.45,3.06-.49,3.28-.47,2.48-.56,2.48-.73,3.7s0,.78-.24,3.14c-.19,2.16-.31,2.66,0,3,.45.5,1.5.3,2.19-.28s.86-1.44,1.35-5.13c.52-3.92.57-4.69.61-5.28.17-2.88.24-4.34-.37-5.13A3.34,3.34,0,0,0,297.9,282.68Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_periodontal18"
          v-if="selectedTooth.periodontal.left"
          d="M260.3,285.39c.16.29-.45.72-.74,1.85s0,2,.37,3.71c.64,2.82.32,2.26.86,4.42,1,4,1.94,5.24,1.46,5.85s-2.1.15-3.17-.86c-.79-.74-1.18-1.67-2.08-7.7-.6-4-.62-4.87-.12-5.7C257.84,285.35,260,284.91,260.3,285.39Z"
          transform="translate(-254.47 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_periodontal18"
          v-if="selectedTooth.periodontal.right"
          d="M297.9,282.68c0,.15.87.17,1.34,1,.28.49.29,1.06.12,2.57-.2,1.74-.45,3.06-.49,3.28-.47,2.48-.56,2.48-.73,3.7s0,.78-.24,3.14c-.19,2.16-.31,2.66,0,3,.45.5,1.5.3,2.19-.28s.86-1.44,1.35-5.13c.52-3.92.57-4.69.61-5.28.17-2.88.24-4.34-.37-5.13A3.34,3.34,0,0,0,297.9,282.68Z"
          transform="translate(-254.47 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_perio18"
          v-if="selectedTooth.perio.left"
          d="M260.3,285.39c.16.29-.45.72-.74,1.85s0,2,.37,3.71c.64,2.82.32,2.26.86,4.42,1,4,1.94,5.24,1.46,5.85s-2.1.15-3.17-.86c-.79-.74-1.18-1.67-2.08-7.7-.6-4-.62-4.87-.12-5.7C257.84,285.35,260,284.91,260.3,285.39Z"
          transform="translate(-254.47 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_perio18"
          v-if="selectedTooth.perio.right"
          d="M297.9,282.68c0,.15.87.17,1.34,1,.28.49.29,1.06.12,2.57-.2,1.74-.45,3.06-.49,3.28-.47,2.48-.56,2.48-.73,3.7s0,.78-.24,3.14c-.19,2.16-.31,2.66,0,3,.45.5,1.5.3,2.19-.28s.86-1.44,1.35-5.13c.52-3.92.57-4.69.61-5.28.17-2.88.24-4.34-.37-5.13A3.34,3.34,0,0,0,297.9,282.68Z"
          transform="translate(-254.47 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Implant18" v-if="selectedTooth.implant">
        <path
          d="M291.21,290.75,268,290.8c-.86,0-1.55-.47-1.55-1.05l.06-4.16c0-.58.71-1.06,1.56-1.06l23.19,0c.86,0,1.55.47,1.54,1l-.05,4.16C292.77,290.27,292.07,290.75,291.21,290.75Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M280.33,340.15H277.4c-1.52,0-2.74-.83-2.73-1.85l.58-46.68c0-1,1.25-1.86,2.77-1.86H281c1.52,0,2.74.83,2.73,1.85l-.58,46.68C283.09,339.31,281.85,340.15,280.33,340.15Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M287.23,300.71l-15.87,0c-.42,0-.76-.23-.76-.52l0-1.34c0-.28.35-.51.77-.51l15.86,0c.43,0,.77.23.76.52v1.34C288,300.48,287.65,300.71,287.23,300.71Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M287.39,307.83l-16,0c-.4,0-.72-.21-.71-.48V306c0-.26.33-.48.73-.48l16,0c.39,0,.71.21.71.48l0,1.4C288.11,307.61,287.79,307.83,287.39,307.83Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M287,314.94l-15.83,0c-.43,0-.78-.24-.78-.53l0-1.32c0-.29.36-.52.79-.53l15.83,0c.43,0,.78.23.78.52l0,1.33C287.82,314.71,287.46,314.94,287,314.94Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M287.23,322.06l-16,0c-.39,0-.7-.21-.7-.47l0-1.43c0-.26.32-.47.71-.47l16,0c.38,0,.7.22.69.48v1.42C287.93,321.84,287.61,322.06,287.23,322.06Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M287.16,329.17l-16,0c-.38,0-.68-.2-.68-.46l0-1.44c0-.26.31-.47.69-.47l15.92,0c.44,0,.79.24.78.53v1.38C287.84,329,287.54,329.17,287.16,329.17Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M286.78,336.28l-15.85,0c-.43,0-.77-.23-.77-.52l0-1.33c0-.29.35-.52.78-.52l15.84,0c.43,0,.78.24.77.52v1.33C287.55,336.05,287.2,336.28,286.78,336.28Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.17"
          y1="102.26"
          x2="15.98"
          y2="109.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.11"
          y1="100.15"
          x2="15.92"
          y2="107.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.33"
          y1="95.08"
          x2="16.24"
          y2="102.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.26"
          y1="93.09"
          x2="16.24"
          y2="100.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.06"
          y1="88.05"
          x2="16.33"
          y2="95.21"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.1"
          y1="85.93"
          x2="16.29"
          y2="93.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.46"
          y1="80.89"
          x2="16.16"
          y2="88.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.39"
          y1="78.79"
          x2="16.28"
          y2="85.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.29"
          y1="73.8"
          x2="16.51"
          y2="80.98"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="33.27"
          y1="71.69"
          x2="16.58"
          y2="78.81"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M270,333.7"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M287.52,285.75l-15.8,0c-1.68,0-3-.91-3-2l.06-5.05c0-1.14,1.39-2.06,3.07-2.07l15.81,0c1.68,0,3,.91,3,2.05l-.07,5.05C290.58,284.82,289.2,285.75,287.52,285.75Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown18">
        <path
          id="ADULT_DENT_Endo_Crownl1_18"
          v-if="selectedTooth.endo_crown.crown1"
          d="M292.44,260.11a9.69,9.69,0,0,0-6.51.55c-2.37,1.15-3.33,3-5.49,2.93-1.57,0-2.58-1-3.61-1.74-1.95-1.41-5.11-2.85-10.35-2.56a9.71,9.71,0,0,0-4.87,1.56,10.75,10.75,0,0,0-1.95,1.63l-2.12,3.9h0l1,.47h39.22a2.1,2.1,0,0,0,.51-1.15,2.2,2.2,0,0,0-.26-1.39l-.9-1.44a16.4,16.4,0,0,0-1.74-1.29A15.22,15.22,0,0,0,292.44,260.11Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.3"
        />
        <path
          id="ADULT_DENT_Endo_Crownl2_18"
          v-if="selectedTooth.endo_crown.crown2"
          d="M273.29,274.86l9.57-.25,1.49-6.65a.24.24,0,0,0-.21-.32H271.66a.24.24,0,0,0-.2.32Z"
          transform="translate(-254.47 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.3"
        />
      </g>
      <g id="ADULT_DENT_Periapical18">
        <path
          id="ADULT_DENT_Periapical18_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M296.89,328.43c.1-.11.59.41,1.69,1.29.75.6.73.53,2.33,1.7,1.79,1.32,1.69,1.32,2.74,2.05a14.25,14.25,0,0,0,2.8,1.56,2.6,2.6,0,0,0,1.81.28,2.07,2.07,0,0,0,1.28-1,3.16,3.16,0,0,0,.17-1.83,10.74,10.74,0,0,0-.64-2.73c-.81-2.31-1.25-3.51-1.57-4.42-.7-2-.6-1.9-1-2.86-.66-1.64-1.15-2.43-1-2.59s1.09.6,1.8,1.43c1.07,1.24,1.58,2.49,2.69,5.79,1.54,4.63,1.64,5.53,1.69,6.06.15,1.79.32,3.88-.7,4.83s-3.11.15-5.07-.75a16.3,16.3,0,0,1-4-2.65c-.45-.39-1-1-2.21-2.18a16.48,16.48,0,0,1-1.75-2C297.46,329.68,296.76,328.57,296.89,328.43Z"
          transform="translate(-254.47 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Periapical18_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M281.62,324.82c-.23.29.3,1,1,2.86a45.46,45.46,0,0,1,1.16,4.43,9.5,9.5,0,0,1,.35,3.33,2.76,2.76,0,0,1-.4,1.36,2.18,2.18,0,0,1-1.4.89,3.26,3.26,0,0,1-2.22-.48,14.1,14.1,0,0,1-3.61-2.59c-1.33-1.27-1.85-2.12-2-2s.22,1.65.93,2.86a8.43,8.43,0,0,0,4,3.4c1.3.61,2.4,1.13,3.79.75a4.27,4.27,0,0,0,2.85-2.35c.5-1.16.33-2.27.07-4.05-.17-1.13-.28-1-1-3.74-.61-2.35-.66-2.92-1.23-3.61C283.07,325,281.89,324.48,281.62,324.82Z"
          transform="translate(-254.47 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer18"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M292.52,260.2a9.69,9.69,0,0,0-6.51.55c-2.37,1.15-3.33,3-5.49,2.94-1.57,0-2.58-1-3.61-1.74-1.94-1.42-5.11-2.85-10.35-2.57a9.65,9.65,0,0,0-4.86,1.56,10.51,10.51,0,0,0-2,1.63q-1.07,1.95-2.11,3.9h0l1,.47h39.22a2.26,2.26,0,0,0,.51-1.15,2.35,2.35,0,0,0-.26-1.39l-.91-1.44a17.9,17.9,0,0,0-1.74-1.29A15.53,15.53,0,0,0,292.52,260.2Z"
        transform="translate(-254.47 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.3"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer18"
        v-if="selectedTooth.crown.onlay"
        d="M292.52,260.2a9.69,9.69,0,0,0-6.51.55c-2.37,1.15-3.33,3-5.49,2.94-1.57,0-2.58-1-3.61-1.74-1.94-1.42-5.11-2.85-10.35-2.57a9.65,9.65,0,0,0-4.86,1.56,10.51,10.51,0,0,0-2,1.63q-1.07,1.95-2.11,3.9h0l1,.47h39.22a2.26,2.26,0,0,0,.51-1.15,2.35,2.35,0,0,0-.26-1.39l-.91-1.44a17.9,17.9,0,0,0-1.74-1.29A15.53,15.53,0,0,0,292.52,260.2Z"
        transform="translate(-254.47 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.3"
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