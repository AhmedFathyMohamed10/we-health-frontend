<template>
<div class="">
<svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.81 113.66"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_26_all">
      <g id="adult_dent_26">
        <path
          id="adult_dent_26_crown"
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
          d="M256.73,253.53c2.65-1,4.95.5,12.81.12s8.6-2.09,16.85-2.35a98.89,98.89,0,0,1,11.62.59c5.47.45,8.22.7,9.49,1.53,2.22,1.44.15,3.55-1.42,6.46-.92,1.72-.1.8-1.9,11.51-1.6,9.56-2.43,11.34-5.69,12.8s-7.38,1.84-10.44,2.12c-2.27.2-10.74.95-17.56-1.3-5.61-1.85-7.19-4.77-10.2-10.33-.64-1.19-1-2-3.08-9.52C254.71,256.29,254.33,254.46,256.73,253.53Z"
          transform="translate(-254.28 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
        <path
          id="adult_dent_26_root"
          v-if="selectedTooth.dent.root1"
          d="M268.83,285.84c-2.95,1.1-1,4,1.19,10.33a88.57,88.57,0,0,1,3.32,14.57c.78,5.5,1.38,9.71-.24,15-2.37,7.79-7.66,12-5.93,12.45,2,.55,10.71-4.25,16.85-10,4.86-4.55,6.08-7.81,10-18.21,6.54-17.51,8.68-23.23,4.27-24.31-2.15-.53-3.36.66-9.73,1.06C277.62,287.46,272.27,284.54,268.83,285.84Z"
          transform="translate(-254.28 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial26"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M302.52,273.54a21.51,21.51,0,0,1-7.5,0,11.76,11.76,0,0,1-5.73-2.37V253.81a1.28,1.28,0,0,1,.82-1.38l.86-.3,11.46.75a12.15,12.15,0,0,1,2.66.34,5.22,5.22,0,0,1,2,.9,2.14,2.14,0,0,1,.21,1.9,25.08,25.08,0,0,1-1.92,3l0,.08c0,.09-.09.17-.5.93a6.64,6.64,0,0,0-.95,2.1c-.07.45.05.38,0,1.15a15.4,15.4,0,0,1-.22,1.56,14.9,14.9,0,0,0,.08,1.89c0,1.11-.22,1.05-.28,2.5a5.18,5.18,0,0,1-.13,1.22,10.51,10.51,0,0,1-.41,1.15A5.78,5.78,0,0,0,302.52,273.54Z"
        transform="translate(-254.28 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal26"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M274.34,253.94c-.64-.16-1,.08-3.33.31a36.45,36.45,0,0,1-4.78.2c-.45,0-.56,0-5.61-.51a7.85,7.85,0,0,0-2.92,0,1.65,1.65,0,0,0-1.24,1.34c-.47,2,.38,3.9.83,5.14a30.16,30.16,0,0,1,.83,3.81,35.6,35.6,0,0,0,1.25,5.36c.82,2.24,1.43,2.71,2.29,3,1,.34,1.91.24,6.24,0,6.66-.36,7.09-.28,7.69-.61,1.53-.85-.23-1.93-.65-5.35a27.87,27.87,0,0,1,.23-4.74c.06-.6.2-2.11.28-4C275.56,255.14,275.43,254.2,274.34,253.94Z"
        transform="translate(-254.28 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V26"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.72"
        y="52.45"
        width="19.59"
        height="2.71"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal26"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M267.63,269.55h-3.75l-3.2-.8-.84-.22-1.06-3.36,5.1-.7h3.75c2.2,0,4,.88,4,2v1.14C271.61,268.67,269.83,269.55,267.63,269.55Z"
        transform="translate(-254.28 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial26"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M299.2,269.55h-5.61c-1.93,0-3.5-.89-3.5-2v-1.1c0-1.1,1.57-2,3.5-2h5.61l4.2,1,.09,3.05Z"
        transform="translate(-254.28 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo26"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M274.37,286.57c1.14.21,2.67.45,4.5.63a59.12,59.12,0,0,0,6.65.32c4.89,0,6-.74,7.3-.53,4.72.75,3.93,11.9-4.29,27.82-3.6,6.95-9.8,17.13-12,16.89-2.43-.26,3.87-12.6,1.51-30.58A67.07,67.07,0,0,0,274.37,286.57Z"
        transform="translate(-254.28 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.56"
      />
      <g id="ADULT_DENT_Post26" v-if="selectedTooth.post.post1">
        <path
          d="M291.17,285.85l-16.28.14c-.6,0-1.08-.34-1.08-.76l0-3c0-.42.49-.77,1.1-.77l16.28-.14c.6,0,1.09.33,1.08.75l0,3C292.27,285.49,291.78,285.84,291.17,285.85Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M283.53,321.83l-2,0c-1.07,0-1.93-.59-1.92-1.34l.4-33.95c0-.75.88-1.36,2-1.37l2.06,0c1.07,0,1.92.59,1.92,1.34l-.41,33.95C285.47,321.21,284.6,321.82,283.53,321.83Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.38,293.11l-11.15.1c-.29,0-.53-.16-.53-.37v-1c0-.2.25-.37.54-.38l11.15-.09c.29,0,.53.16.53.37v1C288.91,292.94,288.67,293.11,288.38,293.11Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.49,298.29l-11.21.09c-.28,0-.5-.15-.5-.34l0-1c0-.19.23-.35.5-.35l11.21-.1c.28,0,.5.16.5.35v1C289,298.13,288.77,298.28,288.49,298.29Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.24,303.46l-11.12.1c-.3,0-.54-.17-.54-.38v-1c0-.21.25-.38.55-.39l11.12-.09c.31,0,.55.16.55.38l0,1C288.79,303.29,288.54,303.46,288.24,303.46Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.38,308.64l-11.23.09c-.27,0-.49-.15-.49-.34v-1c0-.19.23-.35.5-.35l11.23-.1c.27,0,.49.15.49.34v1C288.87,308.48,288.65,308.63,288.38,308.64Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.33,313.81l-11.25.1c-.27,0-.48-.15-.48-.33v-1.06c0-.18.22-.34.49-.34l11.18-.09c.3,0,.55.17.55.38l0,1C288.81,313.66,288.6,313.81,288.33,313.81Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.06,319l-11.13.09c-.3,0-.54-.16-.53-.37v-1c0-.21.24-.38.54-.38l11.13-.1c.3,0,.54.17.54.38v1C288.61,318.81,288.36,319,288.06,319Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.38"
          y1="86.94"
          x2="22.31"
          y2="92.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.34"
          y1="85.4"
          x2="22.27"
          y2="90.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.49"
          y1="81.71"
          x2="22.49"
          y2="87.06"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.45"
          y1="80.26"
          x2="22.5"
          y2="85.5"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.3"
          y1="76.6"
          x2="22.56"
          y2="81.88"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.34"
          y1="75.06"
          x2="22.53"
          y2="80.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.59"
          y1="71.39"
          x2="22.44"
          y2="76.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.54"
          y1="69.87"
          x2="22.52"
          y2="75.15"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.46"
          y1="66.24"
          x2="22.68"
          y2="71.53"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.45"
          y1="64.7"
          x2="22.74"
          y2="69.96"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M276.3,317.18"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.58,282.23l-11.09.09c-1.18,0-2.13-.65-2.12-1.47l0-3.68c0-.82,1-1.5,2.16-1.51l11.09-.1c1.18,0,2.13.66,2.12,1.48l0,3.68C290.73,281.54,289.76,282.22,288.58,282.23Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_gingivitis26">
        <path
          id="ADULT_DENT_Right_gingivitis26"
          v-if="selectedTooth.gingivitis.right"
          d="M304.29,278.18c-.87.26-.11,1-1,2.82a5.31,5.31,0,0,1-2,2.41c-1.38.91-2.74,1.11-2.64,1.61s1.4.54,2.44,1.21a2.16,2.16,0,0,1,1,2.21,16.48,16.48,0,0,1-1,4.83c-1.54,4-.43,3.74-1.83,6.54-1.3,2.62-2.65,3.62-1.62,4.12,1.26.63,5.32.13,7.92-1,5-2.19,1.24-5.31,3.25-12.47,1.55-5.53,5-7.92,1.63-10.36C308.66,278.84,305.5,277.83,304.29,278.18Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_gingivitis26"
          v-if="selectedTooth.gingivitis.left"
          d="M262,279.89c1.46.26.62,1.56,2.85,3,1.87,1.24,4.26,1.48,4.06,2.11s-1.7.48-2.64,1.21-.5,1.66-.2,2.31c.74,1.63.92,3.31,1.62,4.93,1.52,3.51.69,2.57,2.24,6.34,1,2.32,1.48,3.2.61,3.52-1.24.45-4.57-.46-6.71-1.51-5.14-2.51-2.13-5.13-5.08-11.87-1.84-4.21-4.31-6.14-1.83-8.25C258.2,280.64,260.59,279.64,262,279.89Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_gingivitis26"
          v-if="selectedTooth.gingivitis.right"
          d="M304.29,278.18c-.87.26-.11,1-1,2.82a5.31,5.31,0,0,1-2,2.41c-1.38.91-2.74,1.11-2.64,1.61s1.4.54,2.44,1.21a2.16,2.16,0,0,1,1,2.21,16.48,16.48,0,0,1-1,4.83c-1.54,4-.43,3.74-1.83,6.54-1.3,2.62-2.65,3.62-1.62,4.12,1.26.63,5.32.13,7.92-1,5-2.19,1.24-5.31,3.25-12.47,1.55-5.53,5-7.92,1.63-10.36C308.66,278.84,305.5,277.83,304.29,278.18Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_gingivitis26"
          v-if="selectedTooth.gingivitis.left"
          d="M262,279.89c1.46.26.62,1.56,2.85,3,1.87,1.24,4.26,1.48,4.06,2.11s-1.7.48-2.64,1.21-.5,1.66-.2,2.31c.74,1.63.92,3.31,1.62,4.93,1.52,3.51.69,2.57,2.24,6.34,1,2.32,1.48,3.2.61,3.52-1.24.45-4.57-.46-6.71-1.51-5.14-2.51-2.13-5.13-5.08-11.87-1.84-4.21-4.31-6.14-1.83-8.25C258.2,280.64,260.59,279.64,262,279.89Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_periodontal26"
          v-if="selectedTooth.periodontal.right"
          d="M304.29,278.18c-.87.26-.11,1-1,2.82a5.31,5.31,0,0,1-2,2.41c-1.38.91-2.74,1.11-2.64,1.61s1.4.54,2.44,1.21a2.16,2.16,0,0,1,1,2.21,16.48,16.48,0,0,1-1,4.83c-1.54,4-.43,3.74-1.83,6.54-1.3,2.62-2.65,3.62-1.62,4.12,1.26.63,5.32.13,7.92-1,5-2.19,1.24-5.31,3.25-12.47,1.55-5.53,5-7.92,1.63-10.36C308.66,278.84,305.5,277.83,304.29,278.18Z"
          transform="translate(-254.28 -226.77)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_periodontal26"
          v-if="selectedTooth.periodontal.left"
          d="M262,279.89c1.46.26.62,1.56,2.85,3,1.87,1.24,4.26,1.48,4.06,2.11s-1.7.48-2.64,1.21-.5,1.66-.2,2.31c.74,1.63.92,3.31,1.62,4.93,1.52,3.51.69,2.57,2.24,6.34,1,2.32,1.48,3.2.61,3.52-1.24.45-4.57-.46-6.71-1.51-5.14-2.51-2.13-5.13-5.08-11.87-1.84-4.21-4.31-6.14-1.83-8.25C258.2,280.64,260.59,279.64,262,279.89Z"
          transform="translate(-254.28 -226.77)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_perio26"
          v-if="selectedTooth.perio.right"
          d="M304.29,278.18c-.87.26-.11,1-1,2.82a5.31,5.31,0,0,1-2,2.41c-1.38.91-2.74,1.11-2.64,1.61s1.4.54,2.44,1.21a2.16,2.16,0,0,1,1,2.21,16.48,16.48,0,0,1-1,4.83c-1.54,4-.43,3.74-1.83,6.54-1.3,2.62-2.65,3.62-1.62,4.12,1.26.63,5.32.13,7.92-1,5-2.19,1.24-5.31,3.25-12.47,1.55-5.53,5-7.92,1.63-10.36C308.66,278.84,305.5,277.83,304.29,278.18Z"
          transform="translate(-254.28 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_perio26"
          v-if="selectedTooth.perio.left"
          d="M262,279.89c1.46.26.62,1.56,2.85,3,1.87,1.24,4.26,1.48,4.06,2.11s-1.7.48-2.64,1.21-.5,1.66-.2,2.31c.74,1.63.92,3.31,1.62,4.93,1.52,3.51.69,2.57,2.24,6.34,1,2.32,1.48,3.2.61,3.52-1.24.45-4.57-.46-6.71-1.51-5.14-2.51-2.13-5.13-5.08-11.87-1.84-4.21-4.31-6.14-1.83-8.25C258.2,280.64,260.59,279.64,262,279.89Z"
          transform="translate(-254.28 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_Implant26" v-if="selectedTooth.implant">
        <path
          d="M299.67,290l-31.34,0c-1.16,0-2.09-.39-2.08-.87l.07-3.48c0-.49,1-.88,2.12-.88l31.34-.05c1.16,0,2.09.39,2.08.88l-.07,3.48C301.78,289.61,300.83,290,299.67,290Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M285,331.31h-4c-2.05,0-3.71-.69-3.69-1.55l.78-39c0-.86,1.7-1.56,3.75-1.56h4c2.06,0,3.71.69,3.69,1.54l-.78,39C288.69,330.61,287,331.31,285,331.31Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M294.28,298.34l-21.44,0c-.57,0-1-.19-1-.43l0-1.12c0-.24.48-.43,1.05-.43l21.44,0c.57,0,1,.19,1,.43l0,1.12C295.32,298.15,294.85,298.34,294.28,298.34Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M294.51,304.29l-21.58,0c-.54,0-1-.18-1-.4l0-1.18c0-.22.44-.4,1-.4l21.58,0c.53,0,1,.18.95.4l0,1.18C295.48,304.11,295,304.29,294.51,304.29Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M294,310.24l-21.41,0c-.58,0-1.05-.2-1.05-.44l0-1.11c0-.24.48-.44,1.06-.44l21.4,0c.59,0,1.05.19,1.05.43l0,1.11C295.08,310,294.61,310.24,294,310.24Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M294.28,316.19l-21.61,0c-.52,0-.94-.17-.94-.39l0-1.19c0-.22.43-.4.95-.4l21.61,0c.53,0,.95.18.95.4l0,1.19C295.24,316,294.81,316.18,294.28,316.19Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M294.19,322.13l-21.66,0c-.51,0-.92-.17-.92-.38l0-1.21c0-.22.42-.39.93-.39l21.52,0c.59,0,1.06.2,1.06.44l0,1.16C295.12,322,294.7,322.13,294.19,322.13Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M293.67,328.08l-21.42,0c-.57,0-1-.2-1-.44l0-1.11c0-.24.48-.43,1.05-.43l21.42,0c.58,0,1.05.19,1,.43l0,1.11C294.72,327.88,294.25,328.08,293.67,328.08Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.56"
          y1="95.25"
          x2="17.32"
          y2="101.24"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.47"
          y1="93.48"
          x2="17.24"
          y2="99.5"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.77"
          y1="89.24"
          x2="17.67"
          y2="95.3"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.68"
          y1="87.58"
          x2="17.68"
          y2="93.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.4"
          y1="83.37"
          x2="17.79"
          y2="89.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.47"
          y1="81.59"
          x2="17.74"
          y2="87.59"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.95"
          y1="77.38"
          x2="17.56"
          y2="83.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.86"
          y1="75.63"
          x2="17.72"
          y2="81.61"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.71"
          y1="71.45"
          x2="18.03"
          y2="77.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="40.69"
          y1="69.69"
          x2="18.14"
          y2="75.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M271,325.92"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M294.68,285.83l-21.35,0c-2.28,0-4.1-.76-4.09-1.71l.09-4.22c0-.95,1.88-1.72,4.15-1.73l21.36,0c2.27,0,4.1.77,4.08,1.72l-.08,4.22C298.82,285.06,297,285.83,294.68,285.83Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown26">
        <path
          id="ADULT_DENT_Endo_Crown1_26"
          v-if="selectedTooth.endo_crown.crown1"
          d="M269.5,254.44a28.64,28.64,0,0,1-7,0c-1.59-.22-3.17-.61-4.23-.24a1.28,1.28,0,0,0-.93,1v3.45c0,.72,1.18,1.31,2.63,1.31h9.93c1.46,0,2.64-.59,2.64-1.31v-3.45a.64.64,0,0,0-.42-.68A3.81,3.81,0,0,0,269.5,254.44Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_26"
          v-if="selectedTooth.endo_crown.crown2"
          d="M302.23,253,295,252.4a3.2,3.2,0,0,0-1.71,0c-.64.18-1,.57-.8,1v5.23c0,.74,1.22,1.35,2.72,1.35h8.93c.14-.26.48-.83.62-1.09l.56-1,1.54-2.55a2,2,0,0,0-.84-1.18A8.12,8.12,0,0,0,302.23,253Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical26"
        v-if="selectedTooth.periapical.periapical1"
        d="M289.61,323.29c-.26.67-.79,1.71-4.71,5.23a79.93,79.93,0,0,1-6.21,5.13,53.62,53.62,0,0,1-7.24,4.09c-1.08.53-2.84,1.37-4.37,1.14a2.63,2.63,0,0,1-1.27-.51c-.83-.68,0-1.6.23-1.93,1.32-1.6,1.86-3.34,3.11-5,.9-1.17,1.56-3.17,2.87-7.17.8-2.42,1.49-4.86.8-4.95s-3.09,3.08-3.21,3.24c-1.24,1.72-1.18,2.21-2.42,4.61-1.52,3-2.33,3.63-3.45,6.38a10.67,10.67,0,0,0-.69,3.19c-.09,1.67-.12,2.51.81,3,1.86.9,6.5.21,9.54-.74,2.61-.83,2.9-1.5,7.7-5.07,2.3-1.7,4.14-3,7.25-5.46,1.87-1.51,3-2.48,3.21-3.87s-.64-3.09-1.15-3.08S290,322.35,289.61,323.29Z"
        transform="translate(-254.28 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.56"
      />
      <g id="ADULT_DENT_Occlusal_Veneer26">
        <path
          id="ADULT_DENT_Occlusal_Veneer26_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M269.67,254.52a29.23,29.23,0,0,1-7,0c-1.59-.22-3.16-.61-4.23-.24a1.3,1.3,0,0,0-.93,1v3.45c0,.72,1.18,1.3,2.63,1.3h9.93c1.46,0,2.64-.58,2.64-1.3v-3.45a.65.65,0,0,0-.42-.69A3.79,3.79,0,0,0,269.67,254.52Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer26_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M302.4,253.1l-7.25-.63a3.46,3.46,0,0,0-1.72,0c-.64.18-1,.57-.79,1v5.23c0,.74,1.21,1.34,2.72,1.34h8.92l.63-1.09c.12-.21.43-.75.56-1l1.53-2.56a1.91,1.91,0,0,0-.84-1.17A7.93,7.93,0,0,0,302.4,253.1Z"
          transform="translate(-254.28 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer26">
        <path
          id="ADULT_DENT_Occlusal_Veneer26_2"
          v-if="selectedTooth.crown.onlay"
          d="M269.67,254.52a29.23,29.23,0,0,1-7,0c-1.59-.22-3.16-.61-4.23-.24a1.3,1.3,0,0,0-.93,1v3.45c0,.72,1.18,1.3,2.63,1.3h9.93c1.46,0,2.64-.58,2.64-1.3v-3.45a.65.65,0,0,0-.42-.69A3.79,3.79,0,0,0,269.67,254.52Z"
          transform="translate(-254.28 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.67"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer26_1"
          v-if="selectedTooth.crown.onlay"
          d="M302.4,253.1l-7.25-.63a3.46,3.46,0,0,0-1.72,0c-.64.18-1,.57-.79,1v5.23c0,.74,1.21,1.34,2.72,1.34h8.92l.63-1.09c.12-.21.43-.75.56-1l1.53-2.56a1.91,1.91,0,0,0-.84-1.17A7.93,7.93,0,0,0,302.4,253.1Z"
          transform="translate(-254.28 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.67"
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