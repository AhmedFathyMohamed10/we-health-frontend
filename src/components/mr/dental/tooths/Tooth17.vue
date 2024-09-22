<template>
<div class="">
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 8 57.7 113.64"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_17_all">
      <g id="adult_dent_17">
        <path
          id="adult_dent_17_crown"
          v-if="selectedTooth.dent.crown1"
          :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
          d="M284.16,260.6a12.3,12.3,0,0,1-3.66.87c-2.11,0-3.16-.8-5.1-1.45s-3.74-.6-7.48-.57c-4.86,0-7.29.05-9.07,1.3-2,1.4-2.66,3.46-3.19,5.19-1,3.12-.48,5.62.16,8.81.92,4.55,1.72,8.52,4.62,9.53,1.26.44,1.8-.07,4.93-.29a40.36,40.36,0,0,1,8,.44c4,.34,7.73-.16,15.29-1.16,7.24-1,7.64-1.54,10.51-1.16,3.82.52,5.75,1.9,7.48.87s1.7-3.31,1.75-6.06A20.82,20.82,0,0,0,306,266.81c-1.53-2.83-3.05-5.63-6.37-6.93-2-.79-4-.67-7.8-.43A32.29,32.29,0,0,0,284.16,260.6Z"
          transform="translate(-254.36 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.52"
        />
        <path
          id="adult_dent_17_root"
          v-if="selectedTooth.dent.root1"
          d="M261.55,285.29c-.51.94,1,1.73,3,5.63a28,28,0,0,1,3,8.81c.58,3.92-.48,4.24.16,7.65a19.39,19.39,0,0,0,3.66,7.94c3.62,5,9.36,8.78,10.51,7.94.81-.58-1.63-2.75-1.75-7.07-.14-5.27,3.29-8.92,4.14-9.82,1.25-1.33,2.82-2.95,5.09-3a6.49,6.49,0,0,1,3.83,1.3,17.37,17.37,0,0,1,7,9.67c1.36,5-.16,8.07,1.12,8.52,1.62.57,5-4,6.36-6.06,1.53-2.36,2.92-4.52,3-7.51.06-1.55-.76-3.94-2.39-8.66s-1.56-3.94-1.75-4.91c-1.09-5.59,1.72-8.78-.32-10.83-.31-.32-.85-.72-3.34-1.16a35.07,35.07,0,0,0-11.15-.14c-7.66,1.16-11.5,1.75-14.49,1.88C268.07,285.84,262.52,283.52,261.55,285.29Z"
          transform="translate(-254.36 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.52"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I17"
        v-if="selectedTooth.filling_caries_class_i"
        d="M286.56,273.37H273.27c-2.78,0-5-1.88-5-4.19v-4.86a4.11,4.11,0,0,1,1.48-3,5.21,5.21,0,0,1,1.92-1c3.13-.87,4.78,1.58,8.57,1.56,3.62,0,6.12-2.24,8.39-1.43a5.68,5.68,0,0,1,1.53.84,4.13,4.13,0,0,1,1.25,1.72,3.45,3.45,0,0,1,.23,1.24v4.86C291.6,271.49,289.34,273.37,286.56,273.37Z"
        transform="translate(-254.36 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial17"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M271.33,260.21c-.06-.31-2.35.12-6,0a13,13,0,0,0-3.83.17,6.4,6.4,0,0,0-2.33.92,6.58,6.58,0,0,0-2,2.82,13.22,13.22,0,0,0-1.31,4,15.51,15.51,0,0,0,.44,5.72c.21,1,.53,2.19.53,2.19.13.49.2.74.24.84.66,1.64,8,3.43,10.81-.05.46-.57.12-.75-.05-6.76-.09-2.93,0-.9,0-3.25,0-2-.12-2.74.34-3.74a4.87,4.87,0,0,1,1.45-1.89C270.57,260.48,271.36,260.38,271.33,260.21Z"
        transform="translate(-254.36 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal17"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M292.2,276.76c-1-.93,0-1.81-.05-6.44,0-3.76,0-7.18-2-9-.25-.22-.85-.7-.71-1.06s1.37-.42,3.21-.38c5.61.12,5.71.11,6.14.26a9.3,9.3,0,0,1,4.33,3c.59.75.28.63,1.74,3.39s1.86,3,2,4.21a29.12,29.12,0,0,0,.21,2.93c.28,1.42.57,1.59.41,2-.44,1.07-2.91.94-7.46,1.15C294.15,277.15,293.1,277.6,292.2,276.76Z"
        transform="translate(-254.36 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V17"
        v-if="selectedTooth.filling_caries_class_v"
        x="18.98"
        y="51.53"
        width="13.15"
        height="3.33"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal17"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M307.11,273.51l-11.62,1a2.55,2.55,0,0,1-2.67-2.42v-1.4a2.55,2.55,0,0,1,2.67-2.42l10.3.71h0l.17.18Z"
        transform="translate(-254.36 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial17"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M267.33,274.55l-10.8-.52h0c-.09-1.1-.19-2.2-.29-3.3l-.28-1.59,11.37-.83a2.55,2.55,0,0,1,2.67,2.42v1.4A2.55,2.55,0,0,1,267.33,274.55Z"
        transform="translate(-254.36 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo17">
        <path
          id="ADULT_DENT_Endo17_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M269,286.51c-1.1,1-.09,3,.72,5.89,1.54,5.55,0,6.19,1.68,16a16.31,16.31,0,0,0,1.94,5.8c.22.38,2.73,4.74,4.32,4.37,1.43-.32.7-4.16,1.68-12.64.74-6.36,1.11-9.53,1.92-12.43,1.08-3.8,2.15-5.86,1-7-1-1-2.49,0-7.94-.2C270.92,286.2,269.79,285.79,269,286.51Z"
          transform="translate(-254.36 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Endo17_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M288.59,285.22c.85-1.43,3.72-1.48,6.87-1.54,2.93-.05,4.39-.08,5.53.65,2.57,1.66.93,5,2.16,10.47,1.43,6.37,4.68,6.47,5.29,11.77.66,5.71-2.46,11.24-4.09,11.12s-.11-6.05-4.8-12c-2.85-3.6-5.22-3.68-7-7.63-1.08-2.44-.42-2.93-1.92-6.76S287.88,286.41,288.59,285.22Z"
          transform="translate(-254.36 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <g id="ADULT_DENT_Post17">
        <g id="ADULT_DENT_Post17_1" v-if="selectedTooth.post.post1">
          <path
            d="M301.07,280.82l-11.66,2.9a.86.86,0,0,1-1-.44l-.91-2.5A.66.66,0,0,1,288,280l11.66-2.89a.84.84,0,0,1,1,.43l.91,2.5A.65.65,0,0,1,301.07,280.82Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M306.73,311.73l-1.47.37a1.52,1.52,0,0,1-1.8-.77l-10.23-28a1.17,1.17,0,0,1,1-1.45l1.47-.37a1.5,1.5,0,0,1,1.79.77l10.23,28A1.16,1.16,0,0,1,306.73,311.73Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M301.31,287.28l-8,2a.41.41,0,0,1-.49-.21l-.3-.81a.32.32,0,0,1,.27-.4l8-2a.42.42,0,0,1,.5.21l.29.81A.32.32,0,0,1,301.31,287.28Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M303,291.52l-8,2a.38.38,0,0,1-.46-.2l-.31-.84a.3.3,0,0,1,.25-.38l8-2a.38.38,0,0,1,.46.2l.31.85A.3.3,0,0,1,303,291.52Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M304.42,295.82l-8,2a.43.43,0,0,1-.51-.21l-.29-.8c-.06-.17.06-.35.28-.41l8-2a.44.44,0,0,1,.51.22l.29.8C304.76,295.58,304.64,295.76,304.42,295.82Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M306.12,300.05l-8,2a.38.38,0,0,1-.45-.2l-.32-.85a.31.31,0,0,1,.25-.38l8-2a.39.39,0,0,1,.46.19l.31.86C306.43,299.83,306.32,300,306.12,300.05Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M307.69,304.32l-8.06,2a.37.37,0,0,1-.44-.2l-.32-.86a.29.29,0,0,1,.24-.37l8-2a.41.41,0,0,1,.51.22l.3.82A.29.29,0,0,1,307.69,304.32Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M309.1,308.62l-8,2a.43.43,0,0,1-.5-.22l-.29-.79a.33.33,0,0,1,.27-.41l8-2a.41.41,0,0,1,.5.21l.3.8A.33.33,0,0,1,309.1,308.62Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="53.54"
            y1="77.4"
            x2="46.51"
            y2="83.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="53.03"
            y1="76.15"
            x2="46.01"
            y2="82.58"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="52"
            y1="73.09"
            x2="45.04"
            y2="79.53"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="51.52"
            y1="71.9"
            x2="44.55"
            y2="78.25"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="50.28"
            y1="68.91"
            x2="43.48"
            y2="75.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="49.83"
            y1="67.64"
            x2="42.98"
            y2="74.01"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="48.87"
            y1="64.58"
            x2="41.77"
            y2="70.99"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="48.36"
            y1="63.33"
            x2="41.36"
            y2="69.73"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="47.18"
            y1="60.36"
            x2="40.36"
            y2="66.73"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="46.7"
            y1="59.1"
            x2="39.91"
            y2="65.42"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M300.09,309.14"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M298.09,278.29l-7.95,2a1.67,1.67,0,0,1-2-.85l-1.11-3a1.29,1.29,0,0,1,1.09-1.61l7.94-2a1.67,1.67,0,0,1,2,.86l1.11,3A1.29,1.29,0,0,1,298.09,278.29Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
        <g id="ADULT_DENT_Post17_2" v-if="selectedTooth.post.post2">
          <path
            d="M281,283.81l-10.7.44a.63.63,0,0,1-.7-.62l.07-2.57a.75.75,0,0,1,.74-.68l10.69-.44a.63.63,0,0,1,.7.62l-.07,2.57A.74.74,0,0,1,281,283.81Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M275.41,314.53l-1.35.06a1.12,1.12,0,0,1-1.24-1.1l.81-28.85a1.32,1.32,0,0,1,1.3-1.2l1.35-.06a1.13,1.13,0,0,1,1.24,1.1l-.81,28.85A1.31,1.31,0,0,1,275.41,314.53Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M279.05,290l-7.32.3a.31.31,0,0,1-.34-.3l0-.83a.37.37,0,0,1,.36-.33l7.32-.3a.31.31,0,0,1,.35.3l0,.83A.35.35,0,0,1,279.05,290Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M279,294.43l-7.36.31a.29.29,0,0,1-.32-.29l0-.87a.35.35,0,0,1,.34-.31l7.37-.3a.29.29,0,0,1,.32.28l0,.87A.33.33,0,0,1,279,294.43Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M278.8,298.84l-7.31.3a.32.32,0,0,1-.35-.31l0-.82a.37.37,0,0,1,.36-.34l7.31-.3a.32.32,0,0,1,.35.31l0,.82A.38.38,0,0,1,278.8,298.84Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M278.8,303.23l-7.37.3a.29.29,0,0,1-.32-.28l0-.88a.32.32,0,0,1,.33-.3l7.38-.31a.29.29,0,0,1,.31.28l0,.88A.35.35,0,0,1,278.8,303.23Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M278.69,307.63l-7.39.3a.27.27,0,0,1-.31-.27l0-.9a.33.33,0,0,1,.32-.3l7.34-.3a.33.33,0,0,1,.36.32l0,.85A.33.33,0,0,1,278.69,307.63Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M278.43,312l-7.31.3a.31.31,0,0,1-.34-.31l0-.82a.37.37,0,0,1,.36-.34l7.31-.3a.32.32,0,0,1,.35.31l0,.82A.38.38,0,0,1,278.43,312Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.55"
            y1="80.76"
            x2="16.54"
            y2="85.49"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.55"
            y1="79.46"
            x2="16.54"
            y2="84.21"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.71"
            y1="76.32"
            x2="16.74"
            y2="81.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.7"
            y1="75.09"
            x2="16.77"
            y2="79.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.67"
            y1="71.98"
            x2="16.87"
            y2="76.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.71"
            y1="70.67"
            x2="16.87"
            y2="75.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.93"
            y1="67.55"
            x2="16.87"
            y2="72.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.93"
            y1="66.26"
            x2="16.95"
            y2="70.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.94"
            y1="63.17"
            x2="17.12"
            y2="67.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="24.95"
            y1="61.87"
            x2="17.18"
            y2="66.56"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M270.73,310.73"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M279.36,280.79l-7.29.3a1.24,1.24,0,0,1-1.37-1.21l.09-3.12a1.46,1.46,0,0,1,1.44-1.33l7.29-.3a1.23,1.23,0,0,1,1.37,1.21l-.09,3.12A1.46,1.46,0,0,1,279.36,280.79Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis17">
        <path
          id="ADULT_DENT_Left_gingivitis17"
          v-if="selectedTooth.gingivitis.left"
          d="M260.82,285a7.08,7.08,0,0,0,.32,1.9,9.6,9.6,0,0,0,1.46,2.64,27.67,27.67,0,0,1,2.26,3.66,35.06,35.06,0,0,1,1,3.37c.76,2.55,1.12,3.12.81,3.37-.56.45-2.75-.49-4.21-2.05-1.7-1.82-.89-2.88-2.58-6.15-1.29-2.5-2.44-3.17-2.1-4.4S259.64,285.4,260.82,285Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Right_gingivitis17"
          v-if="selectedTooth.gingivitis.right"
          d="M306.71,283.69c-.15.29.89.62,1.29,1.76.3.85,0,1.4-.32,2.78a33.39,33.39,0,0,0-.33,3.81c-.19,3.12,0,3.53.33,3.81a2.75,2.75,0,0,0,3.07,0c.25-.19.67-.62.81-2.49a19.19,19.19,0,0,0-.17-3.52c-.18-3.12.89-3.72.16-4.83C310.44,283.31,307,283.18,306.71,283.69Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Left_periodontal17"
          v-if="selectedTooth.periodontal.left"
          d="M260.82,285a7.08,7.08,0,0,0,.32,1.9,9.6,9.6,0,0,0,1.46,2.64,27.67,27.67,0,0,1,2.26,3.66,35.06,35.06,0,0,1,1,3.37c.76,2.55,1.12,3.12.81,3.37-.56.45-2.75-.49-4.21-2.05-1.7-1.82-.89-2.88-2.58-6.15-1.29-2.5-2.44-3.17-2.1-4.4S259.64,285.4,260.82,285Z"
          transform="translate(-254.36 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Right_periodontal17"
          v-if="selectedTooth.periodontal.right"
          d="M306.71,283.69c-.15.29.89.62,1.29,1.76.3.85,0,1.4-.32,2.78a33.39,33.39,0,0,0-.33,3.81c-.19,3.12,0,3.53.33,3.81a2.75,2.75,0,0,0,3.07,0c.25-.19.67-.62.81-2.49a19.19,19.19,0,0,0-.17-3.52c-.18-3.12.89-3.72.16-4.83C310.44,283.31,307,283.18,306.71,283.69Z"
          transform="translate(-254.36 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Left_perio17"
          v-if="selectedTooth.perio.left"
          d="M260.82,285a7.08,7.08,0,0,0,.32,1.9,9.6,9.6,0,0,0,1.46,2.64,27.67,27.67,0,0,1,2.26,3.66,35.06,35.06,0,0,1,1,3.37c.76,2.55,1.12,3.12.81,3.37-.56.45-2.75-.49-4.21-2.05-1.7-1.82-.89-2.88-2.58-6.15-1.29-2.5-2.44-3.17-2.1-4.4S259.64,285.4,260.82,285Z"
          transform="translate(-254.36 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Right_perio17"
          v-if="selectedTooth.perio.right"
          d="M306.71,283.69c-.15.29.89.62,1.29,1.76.3.85,0,1.4-.32,2.78a33.39,33.39,0,0,0-.33,3.81c-.19,3.12,0,3.53.33,3.81a2.75,2.75,0,0,0,3.07,0c.25-.19.67-.62.81-2.49a19.19,19.19,0,0,0-.17-3.52c-.18-3.12.89-3.72.16-4.83C310.44,283.31,307,283.18,306.71,283.69Z"
          transform="translate(-254.36 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <g id="ADULT_DENT_Implant17" v-if="selectedTooth.implant">
        <path
          d="M296.84,289.38l-26.51.05c-1,0-1.77-.48-1.76-1.08l.06-4.27c0-.6.81-1.08,1.79-1.09l26.51-.05c1,0,1.77.48,1.76,1.08l-.06,4.28C298.62,288.89,297.82,289.38,296.84,289.38Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M284.39,340.15h-3.34c-1.74,0-3.14-.85-3.13-1.91l.67-48c0-1.06,1.43-1.91,3.17-1.92h3.35c1.73,0,3.13.85,3.12,1.9l-.66,48C287.55,339.29,286.13,340.15,284.39,340.15Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.28,299.62l-18.14,0c-.48,0-.87-.24-.86-.53v-1.38c0-.29.4-.53.88-.53l18.14,0c.49,0,.87.23.87.52l0,1.38C293.16,299.38,292.76,299.62,292.28,299.62Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.47,306.93l-18.25,0c-.45,0-.82-.22-.81-.5l0-1.44c0-.27.37-.5.82-.5l18.25,0c.45,0,.82.22.81.49l0,1.45C293.29,306.71,292.92,306.93,292.47,306.93Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.06,314.25l-18.1,0c-.49,0-.89-.24-.89-.54l0-1.36c0-.29.41-.54.9-.54l18.11,0c.49,0,.88.24.88.54l0,1.35C293,314,292.55,314.24,292.06,314.25Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.28,321.56l-18.28,0c-.44,0-.8-.22-.79-.49l0-1.46c0-.27.36-.49.81-.49l18.27,0c.45,0,.81.22.8.48l0,1.47C293.09,321.34,292.72,321.55,292.28,321.56Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.2,328.87l-18.32,0c-.43,0-.78-.21-.77-.47l0-1.49c0-.26.35-.48.78-.48l18.21,0c.49,0,.89.24.89.54l0,1.42C293,328.65,292.63,328.87,292.2,328.87Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M291.77,336.18l-18.12,0c-.49,0-.88-.24-.88-.53l0-1.37c0-.29.4-.53.89-.54l18.12,0c.49,0,.88.24.88.54l0,1.36C292.65,335.94,292.25,336.18,291.77,336.18Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.39"
          y1="101.95"
          x2="18.74"
          y2="109.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.32"
          y1="99.78"
          x2="18.67"
          y2="107.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.57"
          y1="94.57"
          x2="19.03"
          y2="102.02"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.49"
          y1="92.52"
          x2="19.04"
          y2="99.82"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.26"
          y1="87.35"
          x2="19.14"
          y2="94.7"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.32"
          y1="85.17"
          x2="19.09"
          y2="92.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.72"
          y1="79.99"
          x2="18.94"
          y2="87.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.64"
          y1="77.84"
          x2="19.08"
          y2="85.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.52"
          y1="72.7"
          x2="19.34"
          y2="80.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.5"
          y1="70.53"
          x2="19.43"
          y2="77.85"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M272.61,333.52"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.62,284.25l-18.06,0c-1.93,0-3.47-.94-3.46-2.11l.07-5.19c0-1.16,1.59-2.11,3.52-2.12l18.06,0c1.92,0,3.47.94,3.45,2.11l-.07,5.19C296.11,283.29,294.54,284.24,292.62,284.25Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown17">
        <path
          id="ADULT_DENT_Endo_Crown1_17"
          v-if="selectedTooth.endo_crown.endo1"
          d="M299.51,261.13c-.53-.27-1.95-.92-5.72-.89a33.64,33.64,0,0,0-6.53.71c-4.45.89-4.21,1.57-6.34,1.6-3.34,0-3.49-1.68-7.78-2.08-.5,0-.71,0-6.33.19l-4.57.19a7,7,0,0,0-3,1,6.2,6.2,0,0,0-2.08,2.16l-.8,2.45a1.75,1.75,0,0,0,1.82,1.65H303a1.38,1.38,0,0,0,1.29-.49,1.1,1.1,0,0,0-.09-1.44L301.9,263A8.06,8.06,0,0,0,299.51,261.13Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.52"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_17"
          v-if="selectedTooth.endo_crown.endo2"
          d="M275,276.38l12.67-.25,2-6.84a.27.27,0,0,0-.28-.32l-16.52,0a.26.26,0,0,0-.27.34Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.52"
        />
      </g>
      <g id="ADULT_DENT_Periapical17">
        <path
          id="ADULT_DENT_Periapical17_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M299,313c.25,0,.4.73.7,2.17a15,15,0,0,1,.46,3.22c0,.95-.1,1.41-.08,3.08,0,.82.06,1.32.47,1.68a2.13,2.13,0,0,0,1.54.35c.7-.11,1.1-.51,2-1.4,2.32-2.31,2.22-2.18,2.39-2.38a21.81,21.81,0,0,0,1.93-2.8c.89-1.52,1.14-2.35,1.46-2.31s.53,1.06.54,1.82c0,2.5-1.69,4.44-3,5.88a11,11,0,0,1-4.16,3.15c-1.13.46-2.69,1.09-3.86.49-1-.52-1.18-1.66-1.54-3.92a17,17,0,0,1,0-5.39C298,315.28,298.51,312.94,299,313Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Periapical17_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M281.45,314.29c-.31.1-.31.78-.31,1.82a8.9,8.9,0,0,0,.23,2.38,9,9,0,0,0,1,2.59,2.68,2.68,0,0,1,.61,1.54,1.41,1.41,0,0,1-.46,1.05,2.16,2.16,0,0,1-1.7.28,5.4,5.4,0,0,1-2-1c-1.06-.66-1.8-1.17-1.93-1.26a21.13,21.13,0,0,1-2-1.47c-1.07-.94-1.36-1.54-1.54-1.47s0,1.74.85,3.15a8,8,0,0,0,3.62,2.94c1.32.59,3.57,1.59,5.48.63a4.15,4.15,0,0,0,2-2.59c.26-1-.11-2.07-.85-4.27a10,10,0,0,0-1.39-2.87C282.79,315.37,281.92,314.14,281.45,314.29Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer17"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M299.62,261.23c-.53-.27-1.95-.92-5.72-.9a34.44,34.44,0,0,0-6.53.71c-4.45.89-4.21,1.58-6.34,1.6-3.34,0-3.49-1.67-7.78-2.07-.5-.05-.71,0-6.34.19l-4.56.18a7.08,7.08,0,0,0-3,1,6.12,6.12,0,0,0-2.08,2.17c-.27.81-.53,1.62-.8,2.44a1.75,1.75,0,0,0,1.82,1.65h44.81a1.4,1.4,0,0,0,1.29-.48,1.11,1.11,0,0,0-.09-1.45l-2.28-3.2A7.9,7.9,0,0,0,299.62,261.23Z"
        transform="translate(-254.36 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.52"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer17"
        v-if="selectedTooth.crown.onlay"
        d="M299.62,261.23c-.53-.27-1.95-.92-5.72-.9a34.44,34.44,0,0,0-6.53.71c-4.45.89-4.21,1.58-6.34,1.6-3.34,0-3.49-1.67-7.78-2.07-.5-.05-.71,0-6.34.19l-4.56.18a7.08,7.08,0,0,0-3,1,6.12,6.12,0,0,0-2.08,2.17c-.27.81-.53,1.62-.8,2.44a1.75,1.75,0,0,0,1.82,1.65h44.81a1.4,1.4,0,0,0,1.29-.48,1.11,1.11,0,0,0-.09-1.45l-2.28-3.2A7.9,7.9,0,0,0,299.62,261.23Z"
        transform="translate(-254.36 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.52"
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