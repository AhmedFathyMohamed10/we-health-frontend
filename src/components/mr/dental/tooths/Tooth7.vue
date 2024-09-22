<template>
<div class="" >
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.93 113.7"
     :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_7_all">
      <g id="adult_dent_7">
        <path
          id="adult_dent_7_root"
          v-if="selectedTooth.dent.root1"
          d="M268.73,230c-2,.19,1.27,6.78-.29,17.67-.82,5.81-2.12,6.5-4.32,16.69-2.59,11.91-1.7,15,1.44,15.7,2.71.59,4.53-1.19,12.41-2.12,10.11-1.2,15.78.71,17.89-.71s-3.26-3.72-6.35-8.91c-2.58-4.34-.4-5.45-1.73-11-.72-3-3-6.39-7.5-13C273.71,234.64,270.42,229.82,268.73,230Z"
          transform="translate(-254.81 -226.46)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
        <path
          id="adult_dent_7_crown"
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
          d="M265.85,281.89c-.73.49-1.43,1.11-3.18,5.65a40,40,0,0,0-2.31,7.07c-.95,5.09-1.43,7.64,1.45,9.34,2.37,1.39,6.45,2.29,10.1,2.4,2.86.08,3.25-.39,6.35-.28,4.83.16,5.49,1.36,9.81,1.69,3,.24,3.33-.32,11.25-1.13s8.51-.35,10.1-1c3.45-1.38,2.64-4.38.87-10.32a31.35,31.35,0,0,0-4.91-9.9c-2.81-3.83-4.28-5.77-7.5-6.79-5-1.58-11.09-.9-17.89-.14C274.26,279.13,269.07,279.71,265.85,281.89Z"
          transform="translate(-254.81 -226.46)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial7"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M300,305.91l3.48-.32a26.51,26.51,0,0,0,3.4-.26,9.78,9.78,0,0,0,1.94-.4,2.45,2.45,0,0,0,1.84-1.9q-1.65-6-3.31-11.95a27.06,27.06,0,0,0-1.67-2.91c-.27-.41-.55-.82-.83-1.21l-3.89-.07c-4,0-7.17,1.58-7.17,3.52V303c-.26,1,.54,1.94,2.1,2.48A10.28,10.28,0,0,0,300,305.91Z"
        transform="translate(-254.81 -226.46)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.62"
        opacity="0.54"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal7"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M279.51,305.43c-.53.12-.92-.08-2.48-.05-.48,0-.48,0-2.08.15-1.27.09-1.9.14-2.28.14a17.33,17.33,0,0,1-3.17-.24,21.05,21.05,0,0,1-4.66-1,8.31,8.31,0,0,1-3-1.75c-.59-.59-.89-1.22-.89-3a25.4,25.4,0,0,1,.6-4.42c.47-2.75.54-3,.89-3.6a9.68,9.68,0,0,0,.89-1.75c.53-1.24.36-1.4.79-1.65.94-.54,2.57-.28,6.75-.19,5.1.1,5.7-.22,6.74.19,1.42.57,1.18,1.52,1.35,4.23a42.09,42.09,0,0,0,.53,4.37c.41,2.18.61,4.38.92,6.56C280.49,303.8,280.68,305.17,279.51,305.43Z"
        transform="translate(-254.81 -226.46)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.62"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V7"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.98"
        y="55.16"
        width="21.85"
        height="2.99"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.62"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal7"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M270.23,296.86,262,296.3h0l-.29-1.26c.2-.57.41-1.15.62-1.72s.4-.95.59-1.43h0l7.33-.64c2.45,0,4.43,1,4.43,2.18v1.26C274.66,295.89,272.68,296.86,270.23,296.86Z"
        transform="translate(-254.81 -226.46)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.62"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial7"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M309.06,295.82l-9,1c-2.45,0-4.44-1-4.44-2.17v-1.26c0-1.2,2-2.18,4.44-2.18l7.68.85.65,1.22c.1.46.2.91.29,1.37S308.94,295.44,309.06,295.82Z"
        transform="translate(-254.81 -226.46)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.62"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo7"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M273.7,240.46c-.92,0-.65,3.87-1.71,11.06-.93,6.39-1.82,8-2.39,14.07-.8,8.6.39,11.67,3.08,12.07.85.12.88-.17,5.47-.67a58.62,58.62,0,0,1,7.86-.51c3.06,0,3.47.38,4.1.17,2.64-.86-4.52-6.57-8.54-14.57-1-2-.27-1.05-4.45-13.57C275,242.21,274.33,240.45,273.7,240.46Z"
        transform="translate(-254.81 -226.46)"
      
        stroke-miterlimit="10"
        stroke-width="0.62"
      />
      <g id="ADULT_DENT_Post7" v-if="selectedTooth.post.post1">
        <path
          d="M277.78,279.64l12.88-1.38a1,1,0,0,1,1.06.58l.73,2.67c.11.37-.2.71-.68.76l-12.88,1.38a1,1,0,0,1-1.05-.58l-.74-2.66C277,280,277.3,279.69,277.78,279.64Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M274.74,247.4l1.62-.18a1.71,1.71,0,0,1,1.86,1l8.28,29.9c.18.65-.36,1.26-1.2,1.35l-1.63.18a1.71,1.71,0,0,1-1.86-1l-8.28-29.9C273.35,248.1,273.89,247.49,274.74,247.4Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M278.16,273l8.82-.94a.49.49,0,0,1,.52.28l.23.86c0,.18-.1.35-.33.38l-8.82.94a.48.48,0,0,1-.52-.28l-.23-.86C277.78,273.23,277.93,273.06,278.16,273Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M276.76,268.49l8.87-.95a.44.44,0,0,1,.48.27l.25.9c.05.17-.09.33-.31.35l-8.87.95a.44.44,0,0,1-.48-.27l-.25-.9C276.4,268.67,276.54,268.51,276.76,268.49Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M275.65,263.92l8.8-.94a.49.49,0,0,1,.53.29l.23.84c.05.19-.1.36-.34.38l-8.8.95a.5.5,0,0,1-.53-.29l-.23-.85C275.26,264.12,275.41,263.94,275.65,263.92Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M274.23,259.38l8.89-.95a.43.43,0,0,1,.47.26l.25.91c.05.17-.09.32-.3.34l-8.89,1a.46.46,0,0,1-.48-.26l-.25-.92C273.88,259.56,274,259.4,274.23,259.38Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M273,254.82l8.91-.95a.43.43,0,0,1,.46.25l.25.93c.05.16-.08.31-.29.34l-8.85.95a.51.51,0,0,1-.54-.3l-.24-.88C272.61,255,272.75,254.85,273,254.82Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M271.86,250.25l8.81-.95a.49.49,0,0,1,.52.29l.24.85c.05.19-.1.36-.34.38l-8.81,1a.49.49,0,0,1-.52-.29l-.24-.85C271.47,250.44,271.62,250.27,271.86,250.25Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="17.91"
          y1="28.48"
          x2="26.15"
          y2="22.89"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="18.33"
          y1="29.82"
          x2="26.57"
          y2="24.22"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="19.14"
          y1="33.08"
          x2="27.31"
          y2="27.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="19.55"
          y1="34.35"
          x2="27.7"
          y2="28.82"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="20.59"
          y1="37.56"
          x2="28.57"
          y2="32.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="20.95"
          y1="38.92"
          x2="28.98"
          y2="33.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="21.68"
          y1="42.16"
          x2="29.99"
          y2="36.59"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="22.1"
          y1="43.5"
          x2="30.31"
          y2="37.93"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="23.08"
          y1="46.69"
          x2="31.09"
          y2="41.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="23.48"
          y1="48.04"
          x2="31.45"
          y2="42.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M281.66,250.93"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M280.75,282.62l8.78-.94a1.9,1.9,0,0,1,2.06,1.14l.9,3.23c.2.73-.4,1.4-1.33,1.5l-8.79.94a1.9,1.9,0,0,1-2.05-1.13l-.9-3.24C279.22,283.39,279.81,282.72,280.75,282.62Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
      </g>
      <g id="ADULT_DENT_gingivitis7">
        <path
          id="ADULT_DENT_Left_gingivitis7"
          v-if="selectedTooth.gingivitis.left"
          d="M262.37,285.4c.82-.17-.77-1.7.92-3.07,1.13-.91,2.94-1.12,2.76-1.62s-1.66-.44-2.94-1a2.78,2.78,0,0,1-1.84-2.8,29.75,29.75,0,0,1,1.1-7.49c1-4.66-.63-4.81.92-8.2.92-2,2-3.19,1.1-3.52-1.24-.44-5.61.76-7.91,2.61s-1.09,3.15-.74,8.93c.13,2.11.17,5.14.19,6.77,0,3,0,4.8,2,6.85C259.47,284.4,261.61,285.56,262.37,285.4Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          id="ADULT_DENT_Right_gingivitis7"
          v-if="selectedTooth.gingivitis.right"
          d="M304.15,281.79c-.63,0-.44-1.11-2.39-2.52a6.12,6.12,0,0,0-2.58-1.27c-1.18-.26-2.09-.15-2.39-.45s.58-.69.92-1.26c.53-.89-.64-1.76-1.47-2.44a37.36,37.36,0,0,1-4.23-4.42,9.3,9.3,0,0,1-2.4-4.6c-.36-2.5,1.17-2.93.37-5.32-.55-1.66-1.68-2.61-.92-2.88s3.11.42,4.6,1.26c2.19,1.23,2.29,2.57,2.76,5.23.73,4.09,1.11,6.15,2,7.31.21.27,1.7,1.66,4.68,4.44,1.78,1.66,2.75,2.54,2.87,3.85C306.13,280.34,304.89,281.81,304.15,281.79Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          id="ADULT_DENT_Left_periodontal7"
          v-if="selectedTooth.periodontal.left"
          d="M262.37,285.4c.82-.17-.77-1.7.92-3.07,1.13-.91,2.94-1.12,2.76-1.62s-1.66-.44-2.94-1a2.78,2.78,0,0,1-1.84-2.8,29.75,29.75,0,0,1,1.1-7.49c1-4.66-.63-4.81.92-8.2.92-2,2-3.19,1.1-3.52-1.24-.44-5.61.76-7.91,2.61s-1.09,3.15-.74,8.93c.13,2.11.17,5.14.19,6.77,0,3,0,4.8,2,6.85C259.47,284.4,261.61,285.56,262.37,285.4Z"
          transform="translate(-254.81 -226.46)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          id="ADULT_DENT_Right_periodontal7"
          v-if="selectedTooth.periodontal.right"
          d="M304.15,281.79c-.63,0-.44-1.11-2.39-2.52a6.12,6.12,0,0,0-2.58-1.27c-1.18-.26-2.09-.15-2.39-.45s.58-.69.92-1.26c.53-.89-.64-1.76-1.47-2.44a37.36,37.36,0,0,1-4.23-4.42,9.3,9.3,0,0,1-2.4-4.6c-.36-2.5,1.17-2.93.37-5.32-.55-1.66-1.68-2.61-.92-2.88s3.11.42,4.6,1.26c2.19,1.23,2.29,2.57,2.76,5.23.73,4.09,1.11,6.15,2,7.31.21.27,1.7,1.66,4.68,4.44,1.78,1.66,2.75,2.54,2.87,3.85C306.13,280.34,304.89,281.81,304.15,281.79Z"
          transform="translate(-254.81 -226.46)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          id="ADULT_DENT_Left_perio7"
          v-if="selectedTooth.perio.left"
          d="M262.37,285.4c.82-.17-.77-1.7.92-3.07,1.13-.91,2.94-1.12,2.76-1.62s-1.66-.44-2.94-1a2.78,2.78,0,0,1-1.84-2.8,29.75,29.75,0,0,1,1.1-7.49c1-4.66-.63-4.81.92-8.2.92-2,2-3.19,1.1-3.52-1.24-.44-5.61.76-7.91,2.61s-1.09,3.15-.74,8.93c.13,2.11.17,5.14.19,6.77,0,3,0,4.8,2,6.85C259.47,284.4,261.61,285.56,262.37,285.4Z"
          transform="translate(-254.81 -226.46)"
          fill= "#c0392b" 
          stroke= "#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          id="ADULT_DENT_Right_perio7"
          v-if="selectedTooth.perio.right"
          d="M304.15,281.79c-.63,0-.44-1.11-2.39-2.52a6.12,6.12,0,0,0-2.58-1.27c-1.18-.26-2.09-.15-2.39-.45s.58-.69.92-1.26c.53-.89-.64-1.76-1.47-2.44a37.36,37.36,0,0,1-4.23-4.42,9.3,9.3,0,0,1-2.4-4.6c-.36-2.5,1.17-2.93.37-5.32-.55-1.66-1.68-2.61-.92-2.88s3.11.42,4.6,1.26c2.19,1.23,2.29,2.57,2.76,5.23.73,4.09,1.11,6.15,2,7.31.21.27,1.7,1.66,4.68,4.44,1.78,1.66,2.75,2.54,2.87,3.85C306.13,280.34,304.89,281.81,304.15,281.79Z"
          transform="translate(-254.81 -226.46)"
          fill= "#c0392b" 
          stroke= "#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
      </g>
      <g id="ADULT_DENT_Implant7" v-if="selectedTooth.implant">
        <path
          d="M264.39,272.33l35.49,0c1.32,0,2.37.44,2.35,1l-.12,3.84c0,.54-1.09,1-2.41,1l-35.49,0c-1.31,0-2.36-.44-2.35-1l.12-3.84C262,272.76,263.08,272.32,264.39,272.33Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M281.54,226.77H286c2.33,0,4.19.77,4.16,1.72l-1.34,43.07c0,.95-1.94,1.71-4.27,1.71h-4.48c-2.32,0-4.19-.78-4.16-1.72l1.34-43.08C277.3,227.53,279.21,226.77,281.54,226.77Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M270.59,263.14l24.29,0c.65,0,1.16.22,1.15.48l0,1.24c0,.26-.54.47-1.19.47l-24.28,0c-.65,0-1.17-.21-1.16-.48l0-1.23C269.42,263.35,270,263.14,270.59,263.14Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M270.41,256.58l24.44,0c.6,0,1.08.2,1.08.44l0,1.3c0,.25-.51.45-1.11.45l-24.44,0c-.6,0-1.09-.2-1.08-.44l0-1.3C269.31,256.77,269.81,256.58,270.41,256.58Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M271,250l24.25,0c.65,0,1.18.22,1.17.49l0,1.22c0,.26-.54.48-1.2.48l-24.24,0c-.66,0-1.19-.22-1.18-.49l0-1.22C269.83,250.23,270.37,250,271,250Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M270.8,243.45l24.47,0c.6,0,1.07.19,1.06.44l0,1.31c0,.24-.49.44-1.09.43l-24.47,0c-.59,0-1.07-.19-1.06-.44l0-1.31C269.72,243.64,270.2,243.44,270.8,243.45Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M271,236.88l24.54,0c.57,0,1,.19,1,.43l0,1.34c0,.23-.48.42-1.06.42l-24.37,0c-.67,0-1.2-.22-1.2-.49l0-1.28C269.92,237.07,270.4,236.88,271,236.88Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M271.63,230.32l24.26,0c.65,0,1.17.21,1.16.48l0,1.22c0,.27-.55.49-1.2.48l-24.26,0c-.65,0-1.18-.21-1.17-.48l0-1.22C270.44,230.53,271,230.31,271.63,230.32Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="15.43"
          y1="10.54"
          x2="41.81"
          y2="3.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="15.5"
          y1="12.49"
          x2="41.88"
          y2="5.92"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="15.12"
          y1="17.17"
          x2="41.35"
          y2="10.55"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="15.2"
          y1="19.01"
          x2="41.32"
          y2="12.52"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="15.47"
          y1="23.66"
          x2="41.14"
          y2="17.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="15.37"
          y1="25.61"
          x2="41.18"
          y2="19.06"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="14.78"
          y1="30.26"
          x2="41.33"
          y2="23.74"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="14.86"
          y1="32.2"
          x2="41.13"
          y2="25.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="14.97"
          y1="36.81"
          x2="40.73"
          y2="30.25"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <line
          x1="14.98"
          y1="38.76"
          x2="40.59"
          y2="32.25"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M297.25,232.77"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
        <path
          d="M270,277l24.19,0c2.57,0,4.64.86,4.6,1.9l-.14,4.67c0,1-2.15,1.89-4.72,1.89l-24.19,0c-2.57,0-4.64-.86-4.6-1.91l.14-4.66C265.3,277.79,267.42,277,270,277Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.62"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown7">
        <path
          id="ADULT_DENT_Endo_Crown1_7"
          v-if="selectedTooth.endo_crown.crown1"
          d="M274.75,305.46l-5.29-.15a19,19,0,0,1-4-1.09,8.61,8.61,0,0,1-3.59-2.46l-.74-1.7c0-.81,1.34-1.47,3-1.47h11.53c1.66,0,3,.66,3,1.47v4.29a.64.64,0,0,1-.22.52C277.9,305.36,276.42,305.61,274.75,305.46Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_7"
          v-if="selectedTooth.endo_crown.crown2"
          d="M297.39,306.13l6-.56c.34,0,3.65-.06,5.49-1.4a2.1,2.1,0,0,0,1.06-1.92v-1.67c0-1.1-1.82-2-4.06-2h-8.47c-2.24,0-4.06.89-4.06,2v3.57C293.33,305.24,295.15,306.13,297.39,306.13Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical7"
        v-if="selectedTooth.periapical.periapical1"
        d="M267,246.33c.39,0,.39-1.42.38-4.21,0-1.28,0-2.42-.13-4.08a36.67,36.67,0,0,0-.38-4.21,23.66,23.66,0,0,1-.13-3.46,1,1,0,0,1,.64-1.07,5.05,5.05,0,0,1,3.33.25,1.41,1.41,0,0,1,.77.88c.41,1,1,1.06,2.31,2.52,1.08,1.2.78,1.26,2.18,3.26.94,1.34.91,1.08,2.57,3.27,1.29,1.71,1.94,2.57,2.56,3.58.84,1.37,1,2,1.28,1.95.48,0,.7-2.31.26-4.52s-2-4.41-5.13-8.67c-1.63-2.24-2.47-3.2-4.61-3.9-.27-.09-3.93-1.26-6.8-.57s-3.23,2.9-3.59,5.34c-.25,1.72.05,3.12.64,5.85a18.5,18.5,0,0,0,.77,2.83C264.74,243.58,266.29,246.38,267,246.33Z"
        transform="translate(-254.81 -226.46)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.62"
      />
      <g id="ADULT_DENT_Occlusal_Veneer7">
        <path
          id="ADULT_DENT_Occlusal_Veneer7_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M274.93,305.55l-5.28-.16a18.31,18.31,0,0,1-4-1.09,8.43,8.43,0,0,1-3.59-2.46l-.74-1.7c0-.81,1.35-1.47,3-1.47h11.54c1.65,0,3,.66,3,1.47v4.3a.62.62,0,0,1-.23.51C278.08,305.45,276.6,305.69,274.93,305.55Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer7_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M297.57,306.22l6-.57c.34,0,3.65-.06,5.49-1.4a2.08,2.08,0,0,0,1.06-1.91v-1.68c0-1.1-1.82-2-4.06-2h-8.47c-2.24,0-4.05.89-4.05,2v3.57C293.52,305.33,295.33,306.22,297.57,306.22Z"
          transform="translate(-254.81 -226.46)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer7">
        <path
          id="ADULT_DENT_Occlusal_Veneer7_2"
          v-if="selectedTooth.crown.onlay"
          d="M274.93,305.55l-5.28-.16a18.31,18.31,0,0,1-4-1.09,8.43,8.43,0,0,1-3.59-2.46l-.74-1.7c0-.81,1.35-1.47,3-1.47h11.54c1.65,0,3,.66,3,1.47v4.3a.62.62,0,0,1-.23.51C278.08,305.45,276.6,305.69,274.93,305.55Z"
          transform="translate(-254.81 -226.46)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer7_1"
          v-if="selectedTooth.crown.onlay"
          d="M297.57,306.22l6-.57c.34,0,3.65-.06,5.49-1.4a2.08,2.08,0,0,0,1.06-1.91v-1.68c0-1.1-1.82-2-4.06-2h-8.47c-2.24,0-4.05.89-4.05,2v3.57C293.52,305.33,295.33,306.22,297.57,306.22Z"
          transform="translate(-254.81 -226.46)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.85"
        />
      </g>
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
