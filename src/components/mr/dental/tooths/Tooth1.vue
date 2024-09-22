<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.69 113.64"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g
      id="adult_dent_1_all"
      
    >
      <g id="adult_dent_1">
        <g id="adult_dent_1_root">
          <path
            id="adult_dent_1_root1"
            v-if="selectedTooth.dent.root1"
            d="M259.15,239.54c-.51.34.89,3,3.69,8.35a32.8,32.8,0,0,1,2.77,5.9,21.67,21.67,0,0,1,.93,6c.1,3.15-.25,5.55-1.3,11.08-1.62,8.62-2.28,10.87-.73,11.66,1.29.67,2.4-.56,6.65-1,4.91-.52,6,.84,11.64.72,4.71-.11,4.43-1.07,8.87-1.16,6.71-.13,9.27,2,11.09.87s.43-3.74-1.48-10.65c-2.91-10.51-1.53-10.22-3.51-13.68-3.52-6.12-7.13-5.78-9.24-11.37-2-5.23-.18-9.12-1.85-9.5S281.83,240,280.4,243a19.91,19.91,0,0,0-1.67,6.47c-.19,2.54.22,3.87-.37,4-.93.26-2.67-2.92-5.72-6C267.61,242.3,260.44,238.69,259.15,239.54Z"
            transform="translate(-254.87 -226.52)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <path
            v-if="selectedTooth.dent.root2"
            id="adult_dent_1_root2"
            d="M276.52,235.22c-.46,0-.7,1.13-1.85,4.61-1.54,4.65-1.93,5.1-1.66,6.33.55,2.63,3.24,5.05,4.62,4.75,1.16-.24,1.35-2.41,1.49-4s0-2.59-1.12-7.22C277.1,235.9,276.86,235.23,276.52,235.22Z"
            transform="translate(-254.87 -226.52)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
        </g>
        <g id="adult_dent_1_crown">
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
            id="adult_dent_1_crown1"
            d="M264.69,284.17c-1.89,1.24-2.59,2.76-3.51,4.75a12.26,12.26,0,0,0-1.11,7.91,11.26,11.26,0,0,0,5.36,7.92c3.31,2,8.3,3,12.2,1.73,2.72-.89,2.59-2.14,5.17-2.74,3.35-.77,5.34.92,10,1.88,1.23.25,10,2.07,15.15-1.3,3.84-2.53,3.87-6.86,3.88-8.78,0-1-.1-8.76-7.58-12.38-5-2.41-10.69-1.74-14.41-1.3-2.23.27-3.63,1.33-6.65,1.44s-3.54-.55-6.84-.86C274,282.22,268.45,281.7,264.69,284.17Z"
            transform="translate(-254.87 -226.52)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <path
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
            id="adult_dent_1_crown2"
            d="M278,307.2c.15,1.25,4.37,2,7.39,2,3.38,0,7.85-.91,7.94-2.16s-4.69-3.15-9.05-2.73C281.25,304.61,277.85,306,278,307.2Z"
            transform="translate(-254.87 -226.52)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
        </g>
      </g>
      <path
        v-if="selectedTooth.filling_caries_class_i"
        id="ADULT_DENT_filling_caries_Class_I1"
        d="M286.61,303.1a10.12,10.12,0,0,0-2.47-.19,7.77,7.77,0,0,0-3.51.86c-.9.51-1,.91-2.17,1.54a9.57,9.57,0,0,1-1.39.58c0-2.78,0-5,0-6.61a2.12,2.12,0,0,1,.51-1.52,4.31,4.31,0,0,1,2.77-1.06H290.9a4.26,4.26,0,0,1,2.89.9,2,2,0,0,1,.39,1.68c-.26,3.69.48,5.68-.42,5.9a6.29,6.29,0,0,1-1.48-.35c-.53-.15-1-.29-1.4-.43-1.14-.37-1.27-.44-1.95-.66A16.22,16.22,0,0,0,286.61,303.1Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        id="ADULT_DENT_filling_caries_Class_IV_Mesial1"
        d="M309.62,295.35l-14,0c-.79,0-1.44.32-1.44.72l.13,9.31a33.73,33.73,0,0,0,10.12-.06,9.82,9.82,0,0,0,2.7-1.3,7.34,7.34,0,0,0,1.49-1.39,11,11,0,0,0,1.36-2.49,4.73,4.73,0,0,0,.44-3.33A4.24,4.24,0,0,0,309.62,295.35Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iv_distal"
        id="ADULT_DENT_filling-caries_Class_IV_Distal1"
        d="M276.56,306.13a5.51,5.51,0,0,1-2.6.19,19.47,19.47,0,0,1-3.72-.48,15,15,0,0,1-3.72-1.26,11.33,11.33,0,0,1-3.34-2.6,8.38,8.38,0,0,1-1.61-2.22,17.49,17.49,0,0,1-.87-3.48s-.2-.92,0-1.25c.45-.76,3.82,0,7.31.29,5.59.49,7.19-.51,8.43.57s-.17,1.8.24,5.8C276.93,304.1,277.57,305.51,276.56,306.13Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <rect
        v-if="selectedTooth.filling_caries_class_v"
        id="ADULT_DENT_filling-caries_Class_V1"
        x="22.19"
        y="58.49"
        width="13.99"
        height="3.05"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <rect
        v-if="selectedTooth.filling_caries_class_iii_distal"
        id="ADULT_DENT_filling-caries_Class_III_Distal1"
        x="5.85"
        y="64.86"
        width="12.21"
        height="5.71"
        rx="1.26"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        id="ADULT_DENT_filling_caries_Class_III_Mesial1"
        d="M307.73,297.09h-6.52c-1.57,0-2.84-1-2.84-2.21v-1.29c0-1.22,1.27-2.21,2.84-2.21h6.52a3.51,3.51,0,0,1,2.36,1,2,2,0,0,1,.49,1.23v1.29a1.36,1.36,0,0,1-.05,1.66A2.65,2.65,0,0,1,307.73,297.09Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo1">
        <path
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          id="ADULT_DENT_Endo1_1"
          d="M285.26,240.19c-.67-.06-1.6,3-2.84,7a43.59,43.59,0,0,0-1.75,7.16c-.21,1.42-.29,2.77-.44,5.46-.08,1.38-.2,3.52-.22,6.31,0,3.06.1,3.12.22,7.84.15,6.14,0,7.3,1.1,7.82,1.79.83,3.66-1.35,8.75-1.36,3.17,0,4.25.83,5.25.2,1.43-.91.51-3.43-1.36-8.4-2.81-7.44-3.38-8.86-4-10.58a64.73,64.73,0,0,1-3.55-12.3C285.52,243.77,286,240.25,285.26,240.19Z"
          transform="translate(-254.87 -226.52)"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          id="ADULT_DENT_Endo1_2"
          d="M262.93,242.92c-.41.23,1,1.86,3.29,6.65a28.61,28.61,0,0,1,2,4.77c.53,1.9.32,2.22.93,6.25.36,2.35.45,2.35.88,5.05a49.78,49.78,0,0,1,.81,6.1c-.06,5.19-3.06,7.75-1.53,8.87,1,.69,2.17-.26,5.69,0,4,.29,5.17,1.7,6.36,1.16,1.95-.87.57-5.47-1.11-10.86-.5-1.59-1.28-4-4-10.58-3.19-7.78-3.93-9-4.75-10.08C268.14,245.74,263.57,242.56,262.93,242.92Z"
          transform="translate(-254.87 -226.52)"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          id="ADULT_DENT_Endo1_3"
          d="M276.07,240.19c-.63,0-1,2.73-1.32,5.45a4,4,0,0,0,.44,2.9c.44.69,1.4,1.67,2,1.54C278.81,249.7,277.23,240.19,276.07,240.19Z"
          transform="translate(-254.87 -226.52)"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Post1">
        <g v-if="selectedTooth.post.post1" id="ADULT_DENT_Post1_1">
          <path
            d="M289.33,282.92l10.15-2.6a.8.8,0,0,1,.91.56l.88,2.92a.7.7,0,0,1-.45.91l-10.16,2.6a.78.78,0,0,1-.9-.56l-.89-2.92A.7.7,0,0,1,289.33,282.92Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M283.31,247.18l1.29-.33a1.38,1.38,0,0,1,1.6,1l9.93,32.7a1.23,1.23,0,0,1-.81,1.61l-1.28.33a1.39,1.39,0,0,1-1.6-1l-9.94-32.69A1.25,1.25,0,0,1,283.31,247.18Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M288.9,275.51l7-1.78a.39.39,0,0,1,.44.28l.29.94a.33.33,0,0,1-.23.44l-7,1.78a.37.37,0,0,1-.44-.27l-.29-.94A.35.35,0,0,1,288.9,275.51Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M287.27,270.56l7-1.79a.34.34,0,0,1,.41.26l.3,1a.32.32,0,0,1-.21.42l-7,1.79a.37.37,0,0,1-.42-.26l-.3-1A.33.33,0,0,1,287.27,270.56Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M285.88,265.54l6.93-1.77a.4.4,0,0,1,.46.28l.28.93a.35.35,0,0,1-.23.45l-6.94,1.78a.39.39,0,0,1-.45-.29l-.28-.92A.36.36,0,0,1,285.88,265.54Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M284.24,260.59l7-1.79a.35.35,0,0,1,.41.25l.3,1a.31.31,0,0,1-.2.41l-7,1.79a.34.34,0,0,1-.4-.25l-.31-1A.33.33,0,0,1,284.24,260.59Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M282.72,255.61l7-1.79a.32.32,0,0,1,.39.24l.31,1a.3.3,0,0,1-.2.4l-7,1.78a.4.4,0,0,1-.46-.28l-.29-1A.3.3,0,0,1,282.72,255.61Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M281.33,250.6l6.94-1.78a.39.39,0,0,1,.45.28l.29.93a.35.35,0,0,1-.23.45l-6.94,1.78a.39.39,0,0,1-.45-.28l-.29-.93A.34.34,0,0,1,281.33,250.6Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="27.67"
            y1="29.24"
            x2="33.64"
            y2="22.32"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="28.16"
            y1="30.71"
            x2="34.12"
            y2="23.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="29.17"
            y1="34.28"
            x2="35.08"
            y2="27.32"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="29.63"
            y1="35.66"
            x2="35.54"
            y2="28.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="30.82"
            y1="39.16"
            x2="36.59"
            y2="32.31"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="31.26"
            y1="40.65"
            x2="37.07"
            y2="33.77"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="32.21"
            y1="44.21"
            x2="38.23"
            y2="37.3"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="32.69"
            y1="45.67"
            x2="38.63"
            y2="38.77"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="33.83"
            y1="49.15"
            x2="39.62"
            y2="42.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="34.3"
            y1="50.62"
            x2="40.06"
            y2="43.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M289.24,250.55"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M292,286l6.92-1.78a1.54,1.54,0,0,1,1.77,1.1l1.07,3.54a1.37,1.37,0,0,1-.89,1.78L294,292.42a1.53,1.53,0,0,1-1.78-1.1l-1.07-3.53A1.36,1.36,0,0,1,292,286Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
        </g>
        <g v-if="selectedTooth.post.post3" id="ADULT_DENT_Post1_3">
          <path
            d="M269.29,283.22l8.23-1.61c.31-.06.59.22.62.61l.28,2.83a.74.74,0,0,1-.49.82l-8.23,1.61c-.31.06-.59-.21-.62-.6L268.8,284A.74.74,0,0,1,269.29,283.22Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M269.7,248.93l1-.21c.54-.1,1,.38,1.1,1.07l3.06,31.75A1.29,1.29,0,0,1,274,283l-1,.2c-.54.11-1-.37-1.1-1.07l-3-31.74A1.28,1.28,0,0,1,269.7,248.93Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M270,276.18l5.63-1.1c.15,0,.29.1.31.3l.09.91a.37.37,0,0,1-.24.4l-5.64,1.1c-.15,0-.28-.1-.3-.29l-.09-.92A.36.36,0,0,1,270,276.18Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M269.45,271.36l5.67-1.11a.28.28,0,0,1,.29.28l.09,1a.34.34,0,0,1-.22.38l-5.67,1.1c-.14,0-.27-.09-.29-.28l-.09-.95A.34.34,0,0,1,269.45,271.36Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M269.08,266.5l5.63-1.09c.15,0,.29.1.31.3l.08.9a.36.36,0,0,1-.24.41l-5.62,1.1c-.16,0-.29-.11-.31-.31l-.09-.9A.37.37,0,0,1,269.08,266.5Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M268.52,261.68l5.68-1.1c.13,0,.26.09.28.27l.09,1a.33.33,0,0,1-.22.37l-5.68,1.11c-.14,0-.26-.1-.28-.28l-.09-1A.34.34,0,0,1,268.52,261.68Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M268,256.85l5.7-1.11c.13,0,.25.09.27.26l.09,1a.32.32,0,0,1-.21.36l-5.65,1.1c-.16,0-.3-.1-.32-.3l-.09-.94C267.82,257,267.91,256.87,268,256.85Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M267.68,252l5.63-1.1c.15,0,.29.11.31.3l.09.9a.36.36,0,0,1-.24.41l-5.63,1.1c-.15,0-.29-.1-.31-.3l-.09-.9A.36.36,0,0,1,267.68,252Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="13.01"
            y1="30.45"
            x2="18.62"
            y2="24.41"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="13.18"
            y1="31.88"
            x2="18.79"
            y2="25.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="13.46"
            y1="35.34"
            x2="19.03"
            y2="29.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="13.62"
            y1="36.69"
            x2="19.17"
            y2="30.71"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="14.05"
            y1="40.1"
            x2="19.49"
            y2="34.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="14.18"
            y1="41.54"
            x2="19.65"
            y2="35.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="14.4"
            y1="44.99"
            x2="20.05"
            y2="38.96"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="14.57"
            y1="46.41"
            x2="20.16"
            y2="40.38"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="14.96"
            y1="49.79"
            x2="20.42"
            y2="43.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="15.12"
            y1="51.22"
            x2="20.55"
            y2="45.25"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M273.82,252.61"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M271,286.36l5.61-1.09c.6-.12,1.14.41,1.22,1.19l.33,3.43a1.45,1.45,0,0,1-.95,1.61l-5.61,1.1c-.6.11-1.15-.42-1.22-1.19L270,288A1.45,1.45,0,0,1,271,286.36Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
        </g>
        <g v-if="selectedTooth.post.post2" id="ADULT_DENT_Post1_2">
          <path
            d="M279.8,285l8.31.1c.31,0,.63.4.73.89l.65,3.51c.09.49-.09.89-.39.88l-8.31-.1c-.31,0-.63-.4-.72-.89l-.66-3.51C279.32,285.43,279.5,285,279.8,285Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M275.73,243.42l1,0c.54,0,1.11.71,1.27,1.58l7.34,39.37c.16.87-.15,1.56-.7,1.56l-1,0c-.55,0-1.12-.71-1.28-1.57L275,245C274.87,244.11,275.18,243.42,275.73,243.42Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M279.62,276.65l5.69.07c.15,0,.31.2.35.44l.22,1.13c0,.24-.05.43-.2.43l-5.68-.06c-.15,0-.31-.2-.36-.44l-.21-1.13C279.39,276.85,279.47,276.65,279.62,276.65Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M278.42,270.65l5.72.07c.14,0,.29.19.33.41l.22,1.19c0,.22,0,.4-.18.4l-5.72-.07c-.14,0-.29-.18-.33-.41l-.23-1.18C278.19,270.83,278.27,270.65,278.42,270.65Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M277.39,264.65l5.68.07c.15,0,.31.2.36.45l.21,1.11c0,.24,0,.44-.2.44l-5.67-.07c-.16,0-.32-.2-.37-.44l-.2-1.12C277.15,264.85,277.24,264.65,277.39,264.65Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M276.18,258.65l5.72.07c.14,0,.29.18.33.4l.22,1.2c.05.22,0,.4-.17.4l-5.73-.07c-.14,0-.29-.18-.33-.4l-.22-1.2C276,258.83,276,258.65,276.18,258.65Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M275.05,252.65l5.74.07c.14,0,.28.17.32.39l.23,1.22c0,.22,0,.39-.17.39l-5.71-.07c-.16,0-.32-.21-.37-.45l-.21-1.17C274.84,252.82,274.92,252.65,275.05,252.65Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M274,246.65l5.68.07c.15,0,.31.2.36.44l.2,1.12c.05.24,0,.44-.19.44l-5.68-.07c-.15,0-.31-.2-.36-.44l-.21-1.12C273.8,246.84,273.88,246.65,274,246.65Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="20.03"
            y1="26.24"
            x2="25.04"
            y2="20.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="20.39"
            y1="28.02"
            x2="25.4"
            y2="22.05"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="21.14"
            y1="32.3"
            x2="26.09"
            y2="26.28"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="21.48"
            y1="33.98"
            x2="26.44"
            y2="28.09"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="22.37"
            y1="38.23"
            x2="27.21"
            y2="32.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="22.69"
            y1="40.02"
            x2="27.57"
            y2="34.07"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="23.38"
            y1="44.27"
            x2="28.43"
            y2="38.35"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="23.74"
            y1="46.04"
            x2="28.73"
            y2="40.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="24.59"
            y1="50.25"
            x2="29.45"
            y2="44.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="24.94"
            y1="52.03"
            x2="29.77"
            y2="46.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M280.47,248.93"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M281.94,289.28l5.66.06c.6,0,1.23.79,1.41,1.75l.8,4.26c.17,1-.17,1.73-.77,1.72l-5.66-.06c-.61,0-1.24-.79-1.42-1.75l-.79-4.26C281,290,281.33,289.27,281.94,289.28Z"
            transform="translate(-254.87 -226.52)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis1">
        <path
          v-if="selectedTooth.gingivitis.left"
          id="ADULT_DENT_Left_gingivitis1"
          d="M264.52,283.16c.07-.27-.92-.39-1.53-1.19s-.37-1.5-.12-2.76c.65-3.3.16-2.81.71-4.68.71-2.41,1.48-3.07.94-3.58-.74-.7-3.25-.48-4.71.55-.91.64-1.13,1.39-1.54,5.69-.43,4.54-.32,5.16.36,5.7C260.42,284.3,264.39,283.69,264.52,283.16Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.gingivitis.right"
          id="ADULT_DENT_Right_gingivitis1"
          d="M303.77,282.06c-.15-.28.49-.54.82-1.38a2.8,2.8,0,0,0,0-1.83c-.38-1.6-.74-2.38-1.18-3.77-.85-2.69-.41-2.59-1.06-3.67-.26-.45-.57-.86-.35-1.1s1.76-.12,2.71.27A5.36,5.36,0,0,1,307.3,273c.71,1.29.31,1.74.59,4.32.33,2.91,1,3.58.24,4.31C307,282.72,304.05,282.59,303.77,282.06Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.periodontal.left"
          id="ADULT_DENT_Left_periodontal1"
          d="M264.52,283.16c.07-.27-.92-.39-1.53-1.19s-.37-1.5-.12-2.76c.65-3.3.16-2.81.71-4.68.71-2.41,1.48-3.07.94-3.58-.74-.7-3.25-.48-4.71.55-.91.64-1.13,1.39-1.54,5.69-.43,4.54-.32,5.16.36,5.7C260.42,284.3,264.39,283.69,264.52,283.16Z"
          transform="translate(-254.87 -226.52)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.periodontal.right"
          id="ADULT_DENT_Right_periodontal1"
          d="M303.77,282.06c-.15-.28.49-.54.82-1.38a2.8,2.8,0,0,0,0-1.83c-.38-1.6-.74-2.38-1.18-3.77-.85-2.69-.41-2.59-1.06-3.67-.26-.45-.57-.86-.35-1.1s1.76-.12,2.71.27A5.36,5.36,0,0,1,307.3,273c.71,1.29.31,1.74.59,4.32.33,2.91,1,3.58.24,4.31C307,282.72,304.05,282.59,303.77,282.06Z"
          transform="translate(-254.87 -226.52)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.perio.right"
          id="ADULT_DENT_Right_perio1"
          d="M303.77,282.06c-.15-.28.49-.54.82-1.38a2.8,2.8,0,0,0,0-1.83c-.38-1.6-.74-2.38-1.18-3.77-.85-2.69-.41-2.59-1.06-3.67-.26-.45-.57-.86-.35-1.1s1.76-.12,2.71.27A5.36,5.36,0,0,1,307.3,273c.71,1.29.31,1.74.59,4.32.33,2.91,1,3.58.24,4.31C307,282.72,304.05,282.59,303.77,282.06Z"
          transform="translate(-254.87 -226.52)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.perio.left"
          id="ADULT_DENT_Left_perio1"
          d="M264.52,283.16c.07-.27-.92-.39-1.53-1.19s-.37-1.5-.12-2.76c.65-3.3.16-2.81.71-4.68.71-2.41,1.48-3.07.94-3.58-.74-.7-3.25-.48-4.71.55-.91.64-1.13,1.39-1.54,5.69-.43,4.54-.32,5.16.36,5.7C260.42,284.3,264.39,283.69,264.52,283.16Z"
          transform="translate(-254.87 -226.52)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Implant1" v-if="selectedTooth.implant">
        <path
          d="M272,273.14l26.63.05c1,0,1.78.44,1.77,1l-.09,3.91c0,.55-.82,1-1.81,1l-26.64,0c-1,0-1.77-.45-1.76-1l.09-3.91C270.2,273.58,271,273.14,272,273.14Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M284.86,226.77h3.37c1.74,0,3.14.78,3.12,1.75l-1,43.85c0,1-1.46,1.74-3.21,1.74h-3.36c-1.75,0-3.14-.79-3.12-1.75l1-43.85C281.68,227.55,283.12,226.77,284.86,226.77Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276.65,263.8l18.23,0c.48,0,.87.21.87.48l0,1.26c0,.27-.41.49-.89.48l-18.23,0c-.48,0-.87-.21-.87-.48l0-1.26C275.77,264,276.17,263.79,276.65,263.8Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276.51,257.11l18.34,0c.46,0,.82.21.81.46l0,1.32c0,.25-.37.45-.83.45l-18.34,0c-.45,0-.81-.2-.81-.46l0-1.32C275.69,257.31,276.06,257.11,276.51,257.11Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M277,250.43l18.2,0c.49,0,.89.22.88.5l0,1.24c0,.27-.41.49-.9.49l-18.2,0c-.49,0-.89-.23-.88-.5l0-1.24C276.07,250.65,276.48,250.43,277,250.43Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276.81,243.75l18.36,0c.45,0,.81.2.8.44l0,1.34c0,.25-.37.45-.82.44l-18.37,0c-.44,0-.8-.2-.79-.44l0-1.34C276,243.94,276.36,243.74,276.81,243.75Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276.94,237.06l18.41,0c.43,0,.78.2.77.44l0,1.36c0,.24-.36.43-.79.43l-18.29,0c-.5,0-.91-.23-.9-.5l0-1.3C276.15,237.25,276.5,237.06,276.94,237.06Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M277.43,230.38l18.2,0c.49,0,.89.22.88.49l0,1.25c0,.27-.41.49-.9.49l-18.2,0c-.49,0-.89-.22-.88-.49l0-1.25C276.53,230.6,276.94,230.38,277.43,230.38Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.51"
          y1="10.67"
          x2="41.32"
          y2="4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.57"
          y1="12.65"
          x2="41.37"
          y2="5.96"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.28"
          y1="17.41"
          x2="40.97"
          y2="10.67"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.34"
          y1="19.29"
          x2="40.95"
          y2="12.68"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.54"
          y1="24.02"
          x2="40.81"
          y2="17.36"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.47"
          y1="26.01"
          x2="40.84"
          y2="19.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.03"
          y1="30.74"
          x2="40.96"
          y2="24.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.09"
          y1="32.71"
          x2="40.8"
          y2="26.06"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.17"
          y1="37.41"
          x2="40.5"
          y2="30.73"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="21.18"
          y1="39.39"
          x2="40.4"
          y2="32.76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M296.66,232.88"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276.2,277.85l18.15,0c1.94,0,3.48.87,3.46,1.94l-.11,4.75c0,1.06-1.61,1.92-3.54,1.92l-18.16,0c-1.93,0-3.48-.87-3.45-1.94l.11-4.74C272.68,278.71,274.27,277.85,276.2,277.85Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown1">
        <path
          v-if="selectedTooth.endo_crown.crown1"
          id="ADULT_DENT_Endo_Crown1_1"
          d="M308.83,301.64a1.41,1.41,0,0,1-.34.44,12.46,12.46,0,0,1-3.45,2.14,16.25,16.25,0,0,1-7.35,1.17,36,36,0,0,1-6.23-1.52c-3.78-1.09-4.47-1.51-6.29-1.5a12.6,12.6,0,0,0-4.55.9c-1.4.59-1.36.93-2.66,1.56a12.89,12.89,0,0,1-6.11,1.12,11.3,11.3,0,0,1-5.55-1.9,10.9,10.9,0,0,1-2.89-2.25,8.62,8.62,0,0,1-1.66-2.7c-.35-1,.6-1.88,1.86-1.88h44.62c1.35,0,2.28,1.06,1.79,2Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          v-if="selectedTooth.endo_crown.crown2"
          id="ADULT_DENT_Endo_Crown2_1"
          d="M291.59,289.79l-13.48.25L276,296.29c0,.15.09.3.29.3h17.58c.21,0,.36-.16.29-.31Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
      </g>
      <g id="ADULT_DENT_Periapical1">
        <path
          v-if="selectedTooth.periapical.periapical1"
          id="ADULT_DENT_Periapical1_1"
          d="M290.41,247.7c-.59,0-1.33-3-1.37-3.21a15.52,15.52,0,0,1-.38-2.8c-.1-1.5.06-1.65-.08-2.75-.19-1.44-.33-2.54-1.26-2.88a3.59,3.59,0,0,0-2.18.2,4.79,4.79,0,0,0-1.42.81,6.61,6.61,0,0,0-1.14,1.19,20.83,20.83,0,0,0-1.79,2.22c-.57,1-.59,1.48-.68,1.47-.3,0-1-4.37,2.06-7a7.49,7.49,0,0,1,4.46-1.74,6.09,6.09,0,0,1,3.78.94c.28.22,1,.88,1.21,3.88a24.74,24.74,0,0,1-.26,4.48C290.8,247.42,290.59,247.7,290.41,247.7Z"
          transform="translate(-254.87 -226.52)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.periapical.periapical2"
          id="ADULT_DENT_Periapical1_2"
          d="M272.05,243.87c.13,0,.3-.8,1.14-3.15.92-2.53.86-2,1.2-3.1.57-1.85.57-2.85,1.53-3.23a1.77,1.77,0,0,1,1.09-.07c.69.24.81,1.09.86,1.47a22.78,22.78,0,0,0,1.21,5,14.64,14.64,0,0,1,.11-4.36,3.86,3.86,0,0,0,.06-2.64,2.56,2.56,0,0,0-1.47-1.48,3.57,3.57,0,0,0-2.95.38c-.8.52-.82,1.17-1.31,3.06-.57,2.21-.67,1.78-1,3.4C272,241.46,271.82,243.84,272.05,243.87Z"
          transform="translate(-254.87 -226.52)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          v-if="selectedTooth.periapical.periapical3"
          id="ADULT_DENT_Periapical1_3"
          d="M270,243.91c-.17.09-.84-.71-2.78-2-.89-.58-.55-.28-3.77-2.08a8.64,8.64,0,0,0-3.05-1.19,2.72,2.72,0,0,0-1.53.13,1.47,1.47,0,0,0-.71.64,1.2,1.2,0,0,0,.11,1.06c.37.77.56,1.58,1,2.34,1.4,2.49,1,2.24,1.8,3.44.94,1.4,1.6,1.92,1.31,2.25s-1.45.24-2.29,0c-1.12-.38-2-1.19-3.87-6-1.22-3.12-1.31-3.91-.87-4.8a3.79,3.79,0,0,1,2.67-2.08c.92-.12,1.61.25,3.33,1.15,5.1,2.67,5.06,2.62,5.34,2.84C269.11,241.44,270.3,243.76,270,243.91Z"
          transform="translate(-254.87 -226.52)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <path
        v-if="selectedTooth.crown.occlusalVeneer"
        id="ADULT_DENT_Occlusal_Veneer1"
        d="M309,301.72a1.49,1.49,0,0,1-.34.45,12.7,12.7,0,0,1-3.45,2.14,16.22,16.22,0,0,1-7.35,1.16,35.82,35.82,0,0,1-6.23-1.52c-3.78-1.09-4.47-1.51-6.29-1.49a12.54,12.54,0,0,0-4.55.9c-1.4.58-1.37.93-2.67,1.56A13,13,0,0,1,272,306a11.31,11.31,0,0,1-5.55-1.9,11,11,0,0,1-2.89-2.25,8.65,8.65,0,0,1-1.66-2.71c-.35-.94.6-1.87,1.86-1.87h44.62c1.35,0,2.28,1.05,1.79,2Z"
        transform="translate(-254.87 -226.52)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.5"
      />
      <path
        v-if="selectedTooth.crown.onlay"
        id="ADULT_DENT_Occlusal_Veneer1"
        d="M309,301.72a1.49,1.49,0,0,1-.34.45,12.7,12.7,0,0,1-3.45,2.14,16.22,16.22,0,0,1-7.35,1.16,35.82,35.82,0,0,1-6.23-1.52c-3.78-1.09-4.47-1.51-6.29-1.49a12.54,12.54,0,0,0-4.55.9c-1.4.58-1.37.93-2.67,1.56A13,13,0,0,1,272,306a11.31,11.31,0,0,1-5.55-1.9,11,11,0,0,1-2.89-2.25,8.65,8.65,0,0,1-1.66-2.71c-.35-.94.6-1.87,1.86-1.87h44.62c1.35,0,2.28,1.05,1.79,2Z"
        transform="translate(-254.87 -226.52)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.5"
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

