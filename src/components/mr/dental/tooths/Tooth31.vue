<template>
<div class="">

  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 18 57.57 113.59"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_31_all">
      <g id="adult_dent_31">
        <path
          id="adult_dent_31_crown"
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
          d="M286.63,262.75c-2.05-.16-1.94-1.77-5.2-3.13a13.41,13.41,0,0,0-6.72-.84c-2.32.22-3.65.34-5,1.44-2.38,1.95-2.9,5.43-3.26,7.82s-.16,4.12.2,7.81c.47,4.69.72,7,2,7.94,1.12.75,2.11-.05,4.28-.61,3.12-.8,4.26,0,12.13,1.09,2.07.28,4,.46,7.85.84,11,1.07,12.27.6,13.36-.12,4.48-3,5.32-9.83,5.4-10.58a18.37,18.37,0,0,0-1.63-9.62,12.73,12.73,0,0,0-3.57-5.05,10.4,10.4,0,0,0-7.65-1.92,15.88,15.88,0,0,0-5.4,1.44C289.27,261.07,288.84,262.92,286.63,262.75Z"
          transform="translate(-254.9 -226.79)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.32"
        />
        <path
          id="adult_dent_31_root"
          v-if="selectedTooth.dent.root1"
          d="M269,285.23c-1.33,2.25,1,4.84,1,10.94,0,3.54-.83,6-2.14,10-2,6.14-3.31,6.24-6.73,14.9a73.85,73.85,0,0,0-2.65,9.5c-.72,3.18-.68,3.73-.41,4.09,1.38,1.81,9.16-1,13.87-7.46s3-11.88,9.17-20.19c3.07-4.11,4.48-4.11,5.1-4,2.73.62,4.89,7.33,4,13-.83,5.08-3.57,5.81-5.5,12.87-.67,2.42-2,7.33-.61,8.53,2,1.7,9.29-4.08,13.65-11.9,1-1.85,1.75-3.54,5.3-18.87,3.26-14,4-18.53,2.25-20.08-1-.83-1.79-.06-6,0a54.92,54.92,0,0,1-7.64-.72c-8.07-1.05-8.63-1.48-12.85-1.8C273,283.58,270.09,283.39,269,285.23Z"
          transform="translate(-254.9 -226.79)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.32"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I31"
        v-if="selectedTooth.filling_caries_class_i"
        d="M294.64,271.07H280.18a1.87,1.87,0,0,1-1.86-1.87v-7.32c0-.15.06-.37.1-.62.23-1.4.3-1.51.39-1.57s.23-.05,1.23.26.81.23,1,.31a9.88,9.88,0,0,1,1.33.62,12,12,0,0,1,1.56,1c.57.43.54.5,1.09.89a3.37,3.37,0,0,0,1.28.67,2.75,2.75,0,0,0,1.12,0,4.13,4.13,0,0,0,1.11-.36,8.77,8.77,0,0,0,1.7-1.11,22.5,22.5,0,0,1,2-1.47,12.53,12.53,0,0,1,1.81-.84c1.24-.51,1.49-.51,1.68-.36a2,2,0,0,1,.42,1.52s-.11-.22-.1-.22a2.27,2.27,0,0,1,.37.75,2.86,2.86,0,0,1,.08.56v7.32A1.87,1.87,0,0,1,294.64,271.07Z"
        transform="translate(-254.9 -226.79)"
        fill="#be1622"
        stroke="#e6332a"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial31"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M308.64,274.31H300c-1.94,0-3.51-1.86-3.51-4.14v-7.75a4.19,4.19,0,0,0,0-2.11c-.18-.64-.48-1-.35-1.28s.65-.36,1.31-.41a21.07,21.07,0,0,0,2.55-.34l3.3.53a7.54,7.54,0,0,1,2.09.92,9.27,9.27,0,0,1,3.05,3.31l1.59,3.07c.34,1.48.62,2.79.85,3.9.41,1.94.5,2.52.23,3.08C310.59,274.22,309.08,274.3,308.64,274.31Z"
        transform="translate(-254.9 -226.79)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal31"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M278.4,259.64c.49.58.07,1.11-.09,5.1-.18,4.39-.17,5.72-.17,5.72,0,1.55.05,1.84-.18,2.22-.67,1.12-2.17.47-5.77.41-3,0-4.91.37-5.29-.62-.07-.18,0-.21,0-1.49.06-1.44,0-1.5.05-2.37a15.76,15.76,0,0,1,.44-2.84,16.23,16.23,0,0,1,.65-2.06,8.76,8.76,0,0,1,1-2.06,4.81,4.81,0,0,1,2.1-1.65,5.67,5.67,0,0,1,2.36-.35C277.32,259.59,277.86,259,278.4,259.64Z"
        transform="translate(-254.9 -226.79)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V31"
        v-if="selectedTooth.filling_caries_class_v"
        x="26.94"
        y="50.66"
        width="10.01"
        height="3.3"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal31"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M275.41,273.64l-8.24-.59h0l-.08-4.9h0l8.32-.69a2.23,2.23,0,0,1,2,2.39v1.39A2.24,2.24,0,0,1,275.41,273.64Z"
        transform="translate(-254.9 -226.79)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial31"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M311,273l-8.64.69a2.24,2.24,0,0,1-2-2.4v-1.39a2.23,2.23,0,0,1,2-2.39l8.31.69.13,1.7h0C310.88,270.89,311,271.92,311,273Z"
        transform="translate(-254.9 -226.79)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo31">
        <path
          id="ADULT_DENT_Endo31_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M291.26,286.51c.34-.21.36,0,3.51.38a29,29,0,0,0,4.93.39c2.5-.08,2.66-.59,3.18-.26,1.79,1.17.35,7.67-2.52,21.59-2.11,10.19-2.35,11.61-3.62,14.22-3.62,7.44-9.49,11.94-10.3,11.11s4.44-5.91,5.7-15.38c.34-2.56-.14-7.38-1.1-16.93C290.18,293,289.43,287.59,291.26,286.51Z"
          transform="translate(-254.9 -226.79)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Endo31_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M273.29,284.44a11.31,11.31,0,0,1,3,0c.47,0,1.6.08,3.07.26.48.05,1.69.2,3.28.51a7.76,7.76,0,0,1,2.09.52c1.73,1.49-1.15,9.48-1.65,10.86-3.14,8.6-5.69,15.4-12.38,25.33-2.58,3.82-7.79,11.57-9.21,10.6-1.13-.77.59-6.79,1.54-9.57,2.15-6.33,3.92-6.62,6-12.27a49.55,49.55,0,0,0,2.74-14.09C272.13,290.5,271.42,285.37,273.29,284.44Z"
          transform="translate(-254.9 -226.79)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Post31">
        <g id="ADULT_DENT_Post31_1" v-if="selectedTooth.post.post1">
          <path
            d="M301.65,285.89l-8.73-1.39c-.32-.05-.55-.48-.5-1l.32-3.5c.05-.49.35-.84.67-.79l8.73,1.39c.32.05.55.49.5,1l-.32,3.49C302.27,285.59,302,285.94,301.65,285.89Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M293.92,326.76l-1.1-.17c-.57-.09-1-.87-.89-1.73l3.65-39.21c.08-.86.6-1.49,1.18-1.39l1.1.17c.57.09,1,.86.89,1.73l-3.64,39.21C295,326.23,294.5,326.86,293.92,326.76Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M299.42,294l-6-.95c-.16,0-.27-.24-.24-.48l.1-1.13c0-.24.17-.41.33-.38l6,1c.16,0,.27.24.25.48l-.11,1.12C299.72,293.88,299.57,294.05,299.42,294Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M299,300l-6-1c-.15,0-.26-.22-.23-.44l.1-1.19c0-.22.16-.38.31-.36l6,1c.15,0,.25.22.23.45l-.11,1.18C299.24,299.88,299.1,300,299,300Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M298.3,306l-6-1c-.16,0-.28-.24-.25-.49l.1-1.11c0-.24.17-.42.33-.39l6,.95c.17,0,.28.24.26.49l-.11,1.11C298.61,305.83,298.46,306,298.3,306Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M297.85,312l-6-1a.38.38,0,0,1-.23-.44l.11-1.2c0-.22.16-.38.31-.36l6,1a.38.38,0,0,1,.23.44l-.11,1.2C298.13,311.84,298,312,297.85,312Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M297.3,318l-6-1c-.14,0-.24-.21-.22-.43l.11-1.21c0-.22.15-.37.29-.35l6,.95c.16,0,.27.25.25.5l-.11,1.15C297.57,317.82,297.44,318,297.3,318Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M296.63,323.91l-6-1c-.16,0-.27-.24-.25-.48l.1-1.12c0-.24.17-.42.33-.39l6,.95c.16,0,.27.24.25.48l-.1,1.12C296.94,323.76,296.8,323.94,296.63,323.91Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="42.59"
            y1="91.08"
            x2="35.6"
            y2="96.04"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="42.72"
            y1="89.3"
            x2="35.73"
            y2="94.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="43.18"
            y1="85.05"
            x2="36.22"
            y2="90.09"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="43.3"
            y1="83.37"
            x2="36.38"
            y2="88.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="43.59"
            y1="79.12"
            x2="36.77"
            y2="84.11"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="43.77"
            y1="77.34"
            x2="36.91"
            y2="82.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="44.27"
            y1="73.13"
            x2="37.24"
            y2="78.06"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="44.4"
            y1="71.36"
            x2="37.43"
            y2="76.32"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="44.73"
            y1="67.15"
            x2="37.89"
            y2="72.15"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="44.87"
            y1="65.37"
            x2="38.07"
            y2="70.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M290.52,320.7"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M300.63,281.47l-5.95-1c-.63-.1-1.08-1-1-1.91l.4-4.24c.09-1,.67-1.65,1.3-1.55l5.95.95c.64.1,1.08,1,1,1.91l-.4,4.24C301.84,280.87,301.26,281.57,300.63,281.47Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
        <g id="ADULT_DENT_Post31_2" v-if="selectedTooth.post.post2">
          <path
            d="M286,285.67l-9.6-3.79a.87.87,0,0,1-.37-1.09l1.05-3.31a.75.75,0,0,1,.92-.59l9.59,3.79a.86.86,0,0,1,.38,1.09l-1.06,3.32A.74.74,0,0,1,286,285.67Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M269.16,323.33l-1.21-.48a1.54,1.54,0,0,1-.67-1.93l11.88-37.18a1.3,1.3,0,0,1,1.61-1l1.21.48a1.54,1.54,0,0,1,.67,1.93L270.78,322.3A1.32,1.32,0,0,1,269.16,323.33Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M281.85,293l-6.57-2.59a.43.43,0,0,1-.19-.54l.34-1.06c.08-.23.28-.36.45-.29l6.57,2.59a.43.43,0,0,1,.18.54l-.34,1.07A.36.36,0,0,1,281.85,293Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M280.14,298.68l-6.61-2.61a.4.4,0,0,1-.17-.5l.36-1.12a.35.35,0,0,1,.42-.27l6.6,2.61a.39.39,0,0,1,.18.5l-.36,1.12C280.49,298.63,280.3,298.75,280.14,298.68Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M278.22,304.3l-6.55-2.58a.43.43,0,0,1-.19-.55l.33-1.05c.08-.23.28-.36.46-.29l6.55,2.58a.44.44,0,0,1,.19.55l-.33,1.05C278.6,304.24,278.4,304.37,278.22,304.3Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M276.53,310l-6.62-2.62a.38.38,0,0,1-.17-.49l.36-1.13c.07-.21.25-.33.41-.26l6.62,2.61a.38.38,0,0,1,.17.49l-.36,1.13C276.87,310,276.69,310.08,276.53,310Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M274.72,315.69l-6.63-2.62a.38.38,0,0,1-.16-.48l.36-1.16a.33.33,0,0,1,.4-.25l6.59,2.6a.45.45,0,0,1,.2.55l-.35,1.1A.34.34,0,0,1,274.72,315.69Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M272.79,321.3l-6.56-2.58a.44.44,0,0,1-.18-.55l.33-1.05c.08-.23.28-.36.46-.29l6.56,2.59a.43.43,0,0,1,.18.54l-.33,1.06A.37.37,0,0,1,272.79,321.3Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="20.06"
            y1="88.87"
            x2="11.17"
            y2="91.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="20.56"
            y1="87.17"
            x2="11.66"
            y2="90.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="21.91"
            y1="83.16"
            x2="13.04"
            y2="86.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="22.38"
            y1="81.55"
            x2="13.58"
            y2="84.41"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="23.55"
            y1="77.5"
            x2="14.85"
            y2="80.45"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.1"
            y1="75.81"
            x2="15.36"
            y2="78.77"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.5"
            y1="71.85"
            x2="16.57"
            y2="74.69"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="26"
            y1="70.16"
            x2="17.14"
            y2="73.05"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="27.2"
            y1="66.16"
            x2="18.48"
            y2="69.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="27.72"
            y1="64.47"
            x2="19.05"
            y2="67.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M266.51,316.47"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M285.7,281.07l-6.54-2.58a1.7,1.7,0,0,1-.74-2.14l1.29-4a1.45,1.45,0,0,1,1.78-1.14l6.54,2.58a1.7,1.7,0,0,1,.74,2.14l-1.29,4C287.19,280.84,286.39,281.35,285.7,281.07Z"
            transform="translate(-254.9 -226.79)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis31">
        <path
          id="ADULT_DENT_Left_gingivitis31"
          v-if="selectedTooth.gingivitis.left"
          d="M268.55,284.43c.11.15-.38.54-.62,1.47a5,5,0,0,0,.11,2.44c.42,2,.75,2.65,1,3.8a16.84,16.84,0,0,1,.42,4.41c0,2.54,0,4.37-.73,4.77s-2.21-.74-2.9-2.2c-.88-1.84,0-2.91-.11-6.74-.13-3.44-.94-4.38-.21-5.87C266.38,284.8,268.37,284.14,268.55,284.43Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_gingivitis31"
          v-if="selectedTooth.gingivitis.right"
          d="M305.92,286c-.12.2.47.66.83,1.83a7.2,7.2,0,0,1,.11,3.31,58.93,58.93,0,0,1-1,6.37c-.93,3.64-1.61,4.54-1.14,5.26.61.94,2.66.83,3.73-.37s.47-2.49.94-6.12c.57-4.4,1.75-5.15,1.14-7C309.6,286.66,306.19,285.58,305.92,286Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Left_periodontal31"
          v-if="selectedTooth.periodontal.left"
          d="M268.55,284.43c.11.15-.38.54-.62,1.47a5,5,0,0,0,.11,2.44c.42,2,.75,2.65,1,3.8a16.84,16.84,0,0,1,.42,4.41c0,2.54,0,4.37-.73,4.77s-2.21-.74-2.9-2.2c-.88-1.84,0-2.91-.11-6.74-.13-3.44-.94-4.38-.21-5.87C266.38,284.8,268.37,284.14,268.55,284.43Z"
          transform="translate(-254.9 -226.79)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_periodontal31"
          v-if="selectedTooth.periodontal.right"
          d="M305.92,286c-.12.2.47.66.83,1.83a7.2,7.2,0,0,1,.11,3.31,58.93,58.93,0,0,1-1,6.37c-.93,3.64-1.61,4.54-1.14,5.26.61.94,2.66.83,3.73-.37s.47-2.49.94-6.12c.57-4.4,1.75-5.15,1.14-7C309.6,286.66,306.19,285.58,305.92,286Z"
          transform="translate(-254.9 -226.79)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Left_perio31"
          v-if="selectedTooth.perio.left"
          d="M268.55,284.43c.11.15-.38.54-.62,1.47a5,5,0,0,0,.11,2.44c.42,2,.75,2.65,1,3.8a16.84,16.84,0,0,1,.42,4.41c0,2.54,0,4.37-.73,4.77s-2.21-.74-2.9-2.2c-.88-1.84,0-2.91-.11-6.74-.13-3.44-.94-4.38-.21-5.87C266.38,284.8,268.37,284.14,268.55,284.43Z"
          transform="translate(-254.9 -226.79)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_perio31"
          v-if="selectedTooth.perio.right"
          d="M305.92,286c-.12.2.47.66.83,1.83a7.2,7.2,0,0,1,.11,3.31,58.93,58.93,0,0,1-1,6.37c-.93,3.64-1.61,4.54-1.14,5.26.61.94,2.66.83,3.73-.37s.47-2.49.94-6.12c.57-4.4,1.75-5.15,1.14-7C309.6,286.66,306.19,285.58,305.92,286Z"
          transform="translate(-254.9 -226.79)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Implant31" v-if="selectedTooth.implant">
        <path
          d="M301.62,287.49l-27.44.05c-1,0-1.83-.48-1.82-1.07l.06-4.23c0-.59.84-1.07,1.86-1.08l27.44-.05c1,0,1.83.48,1.82,1.07l-.06,4.24C303.47,287,302.64,287.49,301.62,287.49Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M288.74,337.76h-3.47c-1.79,0-3.24-.84-3.23-1.88l.69-47.49c0-1.05,1.48-1.9,3.28-1.9h3.47c1.8,0,3.24.84,3.23,1.89L292,335.86C292,336.91,290.54,337.76,288.74,337.76Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M296.91,297.63l-18.78,0c-.5,0-.9-.23-.9-.52l0-1.36c0-.29.41-.53.91-.53l18.78,0c.5,0,.9.23.9.52l0,1.36C297.81,297.39,297.4,297.63,296.91,297.63Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M297.1,304.87l-18.89,0c-.47,0-.85-.22-.84-.49l0-1.43c0-.27.38-.49.85-.49l18.9,0c.46,0,.84.21.83.49l0,1.43C298,304.65,297.57,304.87,297.1,304.87Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M296.68,312.11l-18.74,0c-.51,0-.92-.24-.92-.53l0-1.35c0-.29.42-.53.93-.53l18.74,0c.51,0,.92.24.92.54l0,1.34C297.6,311.87,297.19,312.11,296.68,312.11Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M296.91,319.35l-18.93,0c-.46,0-.82-.21-.82-.48l0-1.45c0-.27.38-.48.84-.48l18.92,0c.46,0,.83.22.83.48l0,1.45C297.74,319.13,297.37,319.34,296.91,319.35Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M296.83,326.58l-19,0c-.45,0-.81-.21-.8-.47l0-1.47c0-.26.37-.47.81-.47l18.85,0c.51,0,.93.24.92.54l0,1.4C297.64,326.37,297.27,326.58,296.83,326.58Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M296.37,333.82l-18.75,0c-.51,0-.91-.24-.91-.53l0-1.35c0-.3.42-.53.92-.54l18.76,0c.5,0,.91.24.91.53l0,1.35C297.29,333.58,296.88,333.82,296.37,333.82Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.5"
          y1="99.66"
          x2="22.15"
          y2="106.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.42"
          y1="97.51"
          x2="22.08"
          y2="104.83"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.68"
          y1="92.35"
          x2="22.46"
          y2="99.72"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.6"
          y1="90.32"
          x2="22.46"
          y2="97.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.36"
          y1="85.2"
          x2="22.56"
          y2="92.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.42"
          y1="83.04"
          x2="22.51"
          y2="90.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.84"
          y1="77.91"
          x2="22.36"
          y2="85.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.76"
          y1="75.78"
          x2="22.5"
          y2="83.06"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.63"
          y1="70.69"
          x2="22.77"
          y2="78"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="42.61"
          y1="68.55"
          x2="22.87"
          y2="75.79"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M276.54,331.19"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M297.26,282.4l-18.7,0c-2,0-3.6-.93-3.58-2.09l.08-5.14c0-1.15,1.64-2.09,3.63-2.09l18.7,0c2,0,3.59.93,3.58,2.09l-.08,5.14C300.88,281.46,299.25,282.4,297.26,282.4Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown31">
        <path
          id="ADULT_DENT_Endo_Crown1_31"
          v-if="selectedTooth.endo_crown.crown1"
          d="M303.14,259a15.11,15.11,0,0,0-5.67.2,23.5,23.5,0,0,0-6.35,2.64c-1.92,1.2-2.67,2.11-4.13,2a7.1,7.1,0,0,1-2.91-1.19,19.46,19.46,0,0,1-2.24-1.72,8.35,8.35,0,0,0-5.18-1.34,12.78,12.78,0,0,0-6,1.41l-2.5,2.79a1.87,1.87,0,0,0-.25,2.12,1.17,1.17,0,0,0,1,.47h39.4a.82.82,0,0,0,1-.47,1.18,1.18,0,0,0-.1-1.15l-1.4-3.17a5.61,5.61,0,0,0-1.62-1.78A4.55,4.55,0,0,0,303.14,259Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.32"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_31"
          v-if="selectedTooth.endo_crown.crown2"
          d="M282.31,273.78l9.65-.25,1.5-6.77a.25.25,0,0,0-.21-.32l-12.58,0a.26.26,0,0,0-.21.33Z"
          transform="translate(-254.9 -226.79)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.32"
        />
      </g>
      <g id="ADULT_DENT_Periapical31">
        <path
          id="ADULT_DENT_Periapical31_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M286.59,322.34c.19.18-1,1.6-2,4.43-.21.57-.55,2.07-1.24,5.06A10.64,10.64,0,0,0,283,336a3.1,3.1,0,0,0,.71,1.87c.79.77,2,.39,2.82.14a9.41,9.41,0,0,0,3-1.81,23.52,23.52,0,0,0,4-3.67c1.54-1.79,2.1-3,2.29-2.91s-.33,2.61-1.64,4.71a12.54,12.54,0,0,1-4,3.88c-1.88,1.28-3.06,2.08-4.7,1.94-.37,0-2.9-.27-3.88-2.35-.38-.82-.28-1.4.82-7,.59-3,.89-4.46,1.59-5.68C285,323.34,286.41,322.16,286.59,322.34Z"
          transform="translate(-254.9 -226.79)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Periapical31_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M272.55,327.33c-.25-.17-.94,1.23-2.76,3.05a20.84,20.84,0,0,1-3.34,2.7,20,20,0,0,1-3.88,2.08,5.51,5.51,0,0,1-3.64.48,2.16,2.16,0,0,1-1.53-1,3.38,3.38,0,0,1,.18-2.42c.76-2.35-.17-.57,1.35-6.17a41,41,0,0,1,1.82-5.82,19.28,19.28,0,0,0,1.17-2.63c-.17-.16-1.92,1.75-3.29,4.23-1.09,2-1.58,3.91-2.57,7.81-1.19,4.72-1.09,5.86-.6,6.73a3.83,3.83,0,0,0,2.12,1.67c1.31.51,2.71.4,5.63-.84,4.09-1.72,6.55-2.76,8.17-5.68C272.4,329.64,272.84,327.52,272.55,327.33Z"
          transform="translate(-254.9 -226.79)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer31"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M303.22,259.11a15.12,15.12,0,0,0-5.67.2A23.68,23.68,0,0,0,291.2,262c-1.91,1.2-2.67,2.11-4.13,2a7.23,7.23,0,0,1-2.91-1.2,21.83,21.83,0,0,1-2.24-1.71,8.35,8.35,0,0,0-5.18-1.35,12.73,12.73,0,0,0-6,1.41l-2.5,2.8A1.84,1.84,0,0,0,268,266a1.18,1.18,0,0,0,1,.47h39.4a.82.82,0,0,0,1-.47,1.18,1.18,0,0,0-.1-1.15l-1.4-3.16a5.39,5.39,0,0,0-1.62-1.78A4.49,4.49,0,0,0,303.22,259.11Z"
        transform="translate(-254.9 -226.79)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.32"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer31"
        v-if="selectedTooth.crown.onlay"
        d="M303.22,259.11a15.12,15.12,0,0,0-5.67.2A23.68,23.68,0,0,0,291.2,262c-1.91,1.2-2.67,2.11-4.13,2a7.23,7.23,0,0,1-2.91-1.2,21.83,21.83,0,0,1-2.24-1.71,8.35,8.35,0,0,0-5.18-1.35,12.73,12.73,0,0,0-6,1.41l-2.5,2.8A1.84,1.84,0,0,0,268,266a1.18,1.18,0,0,0,1,.47h39.4a.82.82,0,0,0,1-.47,1.18,1.18,0,0,0-.1-1.15l-1.4-3.16a5.39,5.39,0,0,0-1.62-1.78A4.49,4.49,0,0,0,303.22,259.11Z"
        transform="translate(-254.9 -226.79)"
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