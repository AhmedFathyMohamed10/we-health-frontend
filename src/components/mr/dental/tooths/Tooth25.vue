<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.9 113.69"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_25_all">
      <g id="adult_dent_24">
        <path
          id="adult_dent_25_crown"
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
          d="M261.73,252.13c-3.17,1-4.94,3-.57,15.36,3.61,10.24,5.8,11.71,9.35,12.69,6.65,1.83,16.72,1.6,23.24-.23,4.37-1.24,6.37-3.6,10.19-8.27,3.47-4.23,4.56-7,6.52-12.22,2.06-5.47,1.6-6.62-.28-7.33-2.41-.91-5-.29-16.43-.35-8.33-.05-8.83-.39-16.72-.35C268.25,251.47,263.86,251.49,261.73,252.13Z"
          transform="translate(-254.82 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <path
          id="adult_dent_25_root"
          v-if="selectedTooth.dent.root1"
          d="M270.51,281c-2.78.83,1,4,3.15,8.86.83,1.87,1,4.56,1.39,9.88.53,8,.29,14,.28,14.32-.74,17.55-3.87,23.43-.9,23.74,3.65.37,12.58-8,17.05-14.78a39.22,39.22,0,0,0,5.38-13,53,53,0,0,0,1.42-10,98.07,98.07,0,0,0,0-11c-.25-6.2-.7-8.39-3.38-8.77s-4.46,1.51-10.5,1.9C277.19,282.51,273,280.24,270.51,281Z"
          transform="translate(-254.82 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial25"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M302.65,271.1h-3.84c-4.32,0-7.82-1.43-7.82-3.21V255.11c0-.07-.33-1.44,2.29-2.27a14.36,14.36,0,0,1,5.05-.45l5.4-.07a10.52,10.52,0,0,1,5.79.52c1.64.82.82,1.86.77,1.92q-1.79,4.85-3.59,9.7a20.28,20.28,0,0,1-1.72,3.48A24.83,24.83,0,0,1,302.65,271.1Z"
        transform="translate(-254.82 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal25"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M275.18,252.06c-1.29-.3-3.51-.2-7.95,0-3.77.17-4.71.43-5.21.61a2.7,2.7,0,0,0-2,2.45,12.46,12.46,0,0,0,.05,4.79c.58,3,.88,4.58,1.51,5.55.88,1.36,1.65,1.87,1.86,3.2s-.43,1.84.55,2.27c2.21,1,8.57-.13,8.94-.2a21,21,0,0,0,4.47-1.22c3.8-1.75.38-4.19-.49-9C276,255.58,278.71,252.87,275.18,252.06Z"
        transform="translate(-254.82 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V25"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.47"
        y="47.6"
        width="23.39"
        height="2.69"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal25"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M271.8,268.39h-4.48l-3.82-.79-1-.22-.69-3.17,5.51-.85h4.48c2.62,0,4.75.87,4.75,1.95v1.13C276.55,267.52,274.42,268.39,271.8,268.39Z"
        transform="translate(-254.82 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial25"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M301.22,268.39h-5.88c-2,0-3.67-.88-3.67-2v-1.09c0-1.09,1.65-2,3.67-2h5.88l5.8,1.05-1.14,3Z"
        transform="translate(-254.82 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo25"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M275.8,282c1.14-.15,2.27.76,5.89.84a30.26,30.26,0,0,0,6.41-.63c2.12-.45,2.26-.77,2.81-.74,3,.15,3.55,9.4,1.37,21.16a65.47,65.47,0,0,1-2.9,11.36c-3.17,8.77-8.72,18.21-10.51,18.09-1-.06-.13-3.25.52-10.94.82-9.8,1.24-14.71.25-19.89C277.85,291.88,272.27,282.47,275.8,282Z"
        transform="translate(-254.82 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.61"
      />
      <g id="ADULT_DENT_Post25" v-if="selectedTooth.post.post1">
        <path
          d="M289.61,280.39l-15.14.48a1,1,0,0,1-1.11-.85L273,276.5a.88.88,0,0,1,.92-.92l15.15-.49a1,1,0,0,1,1.1.86l.36,3.52A.89.89,0,0,1,289.61,280.39Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M287.13,322.35l-1.91.06a1.84,1.84,0,0,1-2-1.51l-4-39.46a1.57,1.57,0,0,1,1.64-1.63l1.92-.06a1.85,1.85,0,0,1,1.95,1.51l4,39.46A1.56,1.56,0,0,1,287.13,322.35Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M287.94,288.89l-10.36.33a.5.5,0,0,1-.54-.42l-.12-1.13a.43.43,0,0,1,.46-.45l10.36-.34a.52.52,0,0,1,.54.42l.12,1.14A.44.44,0,0,1,287.94,288.89Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M288.72,294.9l-10.43.33a.48.48,0,0,1-.51-.39l-.12-1.19a.4.4,0,0,1,.43-.42l10.42-.34a.48.48,0,0,1,.51.4l.12,1.18A.41.41,0,0,1,288.72,294.9Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M289.15,300.92l-10.34.33a.53.53,0,0,1-.56-.43l-.11-1.12a.45.45,0,0,1,.46-.46l10.35-.33a.51.51,0,0,1,.55.43l.11,1.12A.44.44,0,0,1,289.15,300.92Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M289.94,306.92l-10.44.34a.48.48,0,0,1-.5-.39l-.12-1.2a.4.4,0,0,1,.42-.42l10.44-.33a.47.47,0,0,1,.5.39l.12,1.2A.39.39,0,0,1,289.94,306.92Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M290.56,312.94l-10.46.33a.46.46,0,0,1-.49-.37l-.12-1.23a.39.39,0,0,1,.4-.4l10.4-.33a.52.52,0,0,1,.56.43l.12,1.16A.39.39,0,0,1,290.56,312.94Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M291,319l-10.35.33a.52.52,0,0,1-.55-.43l-.11-1.12a.44.44,0,0,1,.46-.46l10.35-.33a.52.52,0,0,1,.55.43l.11,1.12A.44.44,0,0,1,291,319Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="36.05"
          y1="86.04"
          x2="25.49"
          y2="92.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="35.81"
          y1="84.26"
          x2="25.26"
          y2="90.67"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="35.48"
          y1="79.97"
          x2="24.99"
          y2="86.42"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="35.25"
          y1="78.29"
          x2="24.8"
          y2="84.61"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34.64"
          y1="74.03"
          x2="24.39"
          y2="80.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34.48"
          y1="72.24"
          x2="24.16"
          y2="78.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34.24"
          y1="67.98"
          x2="23.6"
          y2="74.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34"
          y1="66.21"
          x2="23.49"
          y2="72.58"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="33.46"
          y1="61.99"
          x2="23.17"
          y2="68.37"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="33.25"
          y1="60.2"
          x2="23.02"
          y2="66.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M279.79,317.09"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M286.73,276.24l-10.32.33a2.05,2.05,0,0,1-2.16-1.68l-.43-4.27a1.73,1.73,0,0,1,1.81-1.8l10.32-.33a2.06,2.06,0,0,1,2.17,1.68l.43,4.27A1.74,1.74,0,0,1,286.73,276.24Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
      </g>
      <g id="ADULT_DENT_gingivitis25">
        <path
          id="ADULT_DENT_Right_gingivitis25"
          v-if="selectedTooth.gingivitis.right"
          d="M302.88,274.93c-1.27.15-.41,1.32-2.67,2.69-1.59,1-3.23,1.12-3.4,1.89-.13.6.74,1,1.46,1.5,1.43,1,1.41,1.93,1.46,3.88.14,6.75.52,5.51.24,7.58-.81,6-2.88,8.35-.49,8.87,1.68.36,4.71-.38,6.55-1.2,5.91-2.61-.7-5.81.73-12.75,1-4.82,5-7.34,1-10.47C306.48,276,304.24,274.76,302.88,274.93Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Left_gingivitis25"
          v-if="selectedTooth.gingivitis.left"
          d="M262.85,274.83c1.5.29-.3,1.72,1.94,3.29,1.78,1.24,4.64,1.55,4.37,2.39-.16.47-1.11.57-1.46,1.29a1.24,1.24,0,0,0,.24,1.3,24.56,24.56,0,0,0,2.43,3.19c.65.69,1,1.75,1.7,3.89,1.14,3.47.47,3.57,1.45,7.37.64,2.46,1.12,3.2.25,3.39-1.65.35-6.56-1.62-9.47-3.79-4.18-3.12-1.4-4.54-3.39-9.47-2.43-6-8.28-8.17-4.61-10.86C258,275.54,261.4,274.54,262.85,274.83Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Right_periodontal25"
          v-if="selectedTooth.periodontal.right"
          d="M302.88,274.93c-1.27.15-.41,1.32-2.67,2.69-1.59,1-3.23,1.12-3.4,1.89-.13.6.74,1,1.46,1.5,1.43,1,1.41,1.93,1.46,3.88.14,6.75.52,5.51.24,7.58-.81,6-2.88,8.35-.49,8.87,1.68.36,4.71-.38,6.55-1.2,5.91-2.61-.7-5.81.73-12.75,1-4.82,5-7.34,1-10.47C306.48,276,304.24,274.76,302.88,274.93Z"
          transform="translate(-254.82 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Left_periodontal25"
          v-if="selectedTooth.periodontal.left"
          d="M262.85,274.83c1.5.29-.3,1.72,1.94,3.29,1.78,1.24,4.64,1.55,4.37,2.39-.16.47-1.11.57-1.46,1.29a1.24,1.24,0,0,0,.24,1.3,24.56,24.56,0,0,0,2.43,3.19c.65.69,1,1.75,1.7,3.89,1.14,3.47.47,3.57,1.45,7.37.64,2.46,1.12,3.2.25,3.39-1.65.35-6.56-1.62-9.47-3.79-4.18-3.12-1.4-4.54-3.39-9.47-2.43-6-8.28-8.17-4.61-10.86C258,275.54,261.4,274.54,262.85,274.83Z"
          transform="translate(-254.82 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Right_perio25"
          v-if="selectedTooth.perio.right"
          d="M302.88,274.93c-1.27.15-.41,1.32-2.67,2.69-1.59,1-3.23,1.12-3.4,1.89-.13.6.74,1,1.46,1.5,1.43,1,1.41,1.93,1.46,3.88.14,6.75.52,5.51.24,7.58-.81,6-2.88,8.35-.49,8.87,1.68.36,4.71-.38,6.55-1.2,5.91-2.61-.7-5.81.73-12.75,1-4.82,5-7.34,1-10.47C306.48,276,304.24,274.76,302.88,274.93Z"
          transform="translate(-254.82 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Left_perio25"
          v-if="selectedTooth.perio.left"
          d="M262.85,274.83c1.5.29-.3,1.72,1.94,3.29,1.78,1.24,4.64,1.55,4.37,2.39-.16.47-1.11.57-1.46,1.29a1.24,1.24,0,0,0,.24,1.3,24.56,24.56,0,0,0,2.43,3.19c.65.69,1,1.75,1.7,3.89,1.14,3.47.47,3.57,1.45,7.37.64,2.46,1.12,3.2.25,3.39-1.65.35-6.56-1.62-9.47-3.79-4.18-3.12-1.4-4.54-3.39-9.47-2.43-6-8.28-8.17-4.61-10.86C258,275.54,261.4,274.54,262.85,274.83Z"
          transform="translate(-254.82 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
      </g>
      <g id="ADULT_DENT_Implant25" v-if="selectedTooth.implant">
        <path
          d="M299.83,284.08l-38.26,0c-1.41,0-2.55-.38-2.54-.86l.08-3.45c0-.48,1.17-.87,2.59-.87l38.26-.05c1.42,0,2.56.39,2.55.87l-.09,3.45C302.41,283.69,301.25,284.08,299.83,284.08Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M281.87,325H277c-2.51,0-4.53-.69-4.51-1.54l1-38.66c0-.85,2.07-1.55,4.58-1.55h4.83c2.51,0,4.52.68,4.5,1.53l-.95,38.67C286.43,324.32,284.38,325,281.87,325Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M293.26,292.34l-26.19,0c-.7,0-1.26-.19-1.25-.43l0-1.11c0-.23.57-.42,1.27-.43l26.18,0c.7,0,1.26.19,1.25.42l0,1.11C294.52,292.15,294,292.34,293.26,292.34Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M293.53,298.23l-26.35,0c-.65,0-1.17-.18-1.17-.4l0-1.16c0-.22.54-.4,1.19-.4l26.35,0c.65,0,1.17.18,1.17.4l0,1.16C294.71,298.05,294.18,298.23,293.53,298.23Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M292.94,304.13l-26.14,0c-.71,0-1.28-.2-1.27-.44l0-1.09c0-.24.58-.44,1.29-.44l26.14,0c.71,0,1.28.2,1.27.44l0,1.09C294.23,303.93,293.65,304.13,292.94,304.13Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M293.26,310l-26.39,0c-.64,0-1.15-.18-1.15-.39l0-1.18c0-.22.53-.4,1.17-.4l26.39,0c.64,0,1.15.17,1.15.39l0,1.18C294.42,309.84,293.9,310,293.26,310Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M293.14,315.91l-26.44,0c-.63,0-1.13-.17-1.12-.38l0-1.2c0-.21.51-.38,1.13-.38L293,314c.72,0,1.3.2,1.29.44l0,1.14C294.28,315.74,293.77,315.91,293.14,315.91Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M292.51,321.81l-26.15,0c-.71,0-1.27-.2-1.27-.44l0-1.1c0-.23.58-.43,1.29-.43l26.15,0c.71,0,1.27.2,1.27.43l0,1.1C293.79,321.61,293.22,321.81,292.51,321.81Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.12"
          y1="89.03"
          x2="10.75"
          y2="94.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.02"
          y1="87.28"
          x2="10.65"
          y2="93.24"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.38"
          y1="83.08"
          x2="11.18"
          y2="89.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.27"
          y1="81.43"
          x2="11.18"
          y2="87.31"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="38.93"
          y1="77.26"
          x2="11.33"
          y2="83.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.01"
          y1="75.5"
          x2="11.26"
          y2="81.44"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.6"
          y1="71.33"
          x2="11.05"
          y2="77.24"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.49"
          y1="69.59"
          x2="11.24"
          y2="75.52"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.31"
          y1="65.45"
          x2="11.62"
          y2="71.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="39.28"
          y1="63.7"
          x2="11.75"
          y2="69.6"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M264.86,319.67"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M293.75,280l-26.08,0c-2.78,0-5-.75-5-1.7l.11-4.18c0-.94,2.29-1.7,5.07-1.71l26.07,0c2.78,0,5,.75,5,1.69l-.1,4.19C298.79,279.18,296.52,279.94,293.75,280Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown25">
        <path
          id="ADULT_DENT_Endo_Crown1_25"
          v-if="selectedTooth.endo_crown.crown1"
          d="M273.3,252H267a11.18,11.18,0,0,0-4.66.81c-1.24.66-1.05,1.42-1,1.57-.33,1.28-.66,2.55-1,3.83,0,.75,1.49,1.36,3.32,1.36h9.69c1.83,0,3.31-.61,3.31-1.36V253.4C276.61,252.65,275.13,252,273.3,252Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <rect
          id="ADULT_DENT_Endo_Crown2_25"
          v-if="selectedTooth.endo_crown.crown2"
          x="41.44"
          y="25.8"
          width="13.49"
          height="7.03"
          rx="0.84"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical25"
        v-if="selectedTooth.periapical.periapical1"
        d="M273.43,319.08c.58.05.08,1.49-.55,5.87-1,6.83-.14,6-.82,7.56-.57,1.31.06,2.67-.28,4-.06.25-.24.88.69,1.36a5.69,5.69,0,0,0,2.47.5,6.89,6.89,0,0,0,3.84-1.35,36.73,36.73,0,0,0,5.22-3.95c2.69-2.6,4-3.89,4.53-4.45a41.48,41.48,0,0,0,3.29-4.23c1.64-2.43,2.05-3.69,2.48-3.67s.62,1.78.27,3.44c-.29,1.37-.94,2.85-3.57,6.2-2.46,3.14-3.7,4.71-5.49,5.87-1.5,1-6.66,4.31-11.26,3.89a7.26,7.26,0,0,1-5.63-3.61c-1.17-1.74-.5-2.51,0-6.37.53-4.08,0-4.69,1.1-6.88S272.7,319,273.43,319.08Z"
        transform="translate(-254.82 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.61"
      />
      <g id="ADULT_DENT_Occlusal_Veneer25">
        <path
          id="ADULT_DENT_Occlusal_Veneer25_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M273.49,252.12h-6.34a11.1,11.1,0,0,0-4.66.8c-1.25.67-1.05,1.42-1,1.58l-1,3.82c0,.75,1.48,1.36,3.31,1.36h9.69c1.83,0,3.32-.61,3.32-1.36v-4.84C276.81,252.73,275.32,252.12,273.49,252.12Z"
          transform="translate(-254.82 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <rect
          id="ADULT_DENT_Occlusal_Veneer25_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          x="41.64"
          y="25.88"
          width="13.49"
          height="7.03"
          rx="0.84"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer25">
        <path
          id="ADULT_DENT_Occlusal_Veneer25_2"
          v-if="selectedTooth.crown.onlay"
          d="M273.49,252.12h-6.34a11.1,11.1,0,0,0-4.66.8c-1.25.67-1.05,1.42-1,1.58l-1,3.82c0,.75,1.48,1.36,3.31,1.36h9.69c1.83,0,3.32-.61,3.32-1.36v-4.84C276.81,252.73,275.32,252.12,273.49,252.12Z"
          transform="translate(-254.82 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <rect
          id="ADULT_DENT_Occlusal_Veneer25_1"
          v-if="selectedTooth.crown.onlay"
          x="41.64"
          y="25.88"
          width="13.49"
          height="7.03"
          rx="0.84"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.82"
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