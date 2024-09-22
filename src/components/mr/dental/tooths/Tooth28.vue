<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 17 57.86 113.68"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_28_all">
      <g id="adult_dent_28">
        <path
          id="adult_dent_28_crown"
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
          d="M273.62,258c-3.94,1.2-6,.22-9.88,1.09-3.69.84-6.35,2.74-7.32,4.48-1.23,2.24.34,4.23,1.39,5.79,6.72,10,.07,14.5,7.9,18.34,3.09,1.52,6.51,2,11.26,2.62,4.35.59,12.24,1.65,17.79-.44,2.53-.95,2.82-1.9,6.12-6.11,6.8-8.64,10.33-10.63,10.87-15.72.31-2.94-.65-4.26-1.78-5.13-2.12-1.65-4.41-1.36-9.09-3.17-5.9-2.28-4.75-3.7-9.09-4.7a26.51,26.51,0,0,0-13.63.77C275.77,256.67,276.13,257.22,273.62,258Z"
          transform="translate(-254.83 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
        <path
          id="adult_dent_28_root"
          v-if="selectedTooth.dent.root1"
          d="M265.12,288.34c-3.57,1.12.81,6.8,3,17,1.33,6.28,2.64,13-1,20.64-3,6.3-7.81,10-6.91,10.26,1.23.41,11.39-6.1,18.77-14.52,4.61-5.26,2.1-4.38,11.07-19.22,3.7-6.13,6.71-10.56,4-11.68-1.68-.69-3.78.56-8.5.87C274.8,292.43,268.71,287.21,265.12,288.34Z"
          transform="translate(-254.83 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I28"
        v-if="selectedTooth.filling_caries_class_i"
        d="M292.57,266.42H277.84c-.59-.13-3.58-.83-5.11-2.82a3.68,3.68,0,0,1,0-4.59,13.34,13.34,0,0,0,3.2-1.28c.53-.31.7-.47,1.11-.74l.56-.35a9.42,9.42,0,0,1,3.15-.82c1.4-.2,2.5-.31,3-.36a28.5,28.5,0,0,1,5.27-.27,11.88,11.88,0,0,1,3.13.73,13.56,13.56,0,0,1,2.81,1.73,26.18,26.18,0,0,0,2.8,1.55,3.44,3.44,0,0,1-.05,4.4C296.18,265.48,293.28,266.24,292.57,266.42Z"
        transform="translate(-254.83 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial28"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M303.33,278.82c-.67.14-3.37.63-5.11-.13-.83-.37-1.14-.89-1.52-2.14a19,19,0,0,1-.79-5.06c-.09-3.69.42-2.73.17-4.1-.15-.84-.47-1.87.62-2.64.37-.27.71-.36,1.19-.73a2.88,2.88,0,0,0,1.16-1.73,1.81,1.81,0,0,0-.17-1.55c-.36-.59-1-.93-.82-1s.69,0,2.63.76l4,1.37a10.41,10.41,0,0,1,2.14.45,5.93,5.93,0,0,1,3,1.91l1,2.37a12,12,0,0,1-.49,2.92,16.12,16.12,0,0,1-3.14,5.46A28.17,28.17,0,0,1,303.33,278.82Z"
        transform="translate(-254.83 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal28"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M272.73,259c-.51-.27-1.54.12-4.45.42-2.26.23-2.27.06-3.5.23a11.13,11.13,0,0,0-6.18,2.73,3.92,3.92,0,0,0-1.24,3c0,.65.23,1.24,1.86,4,1.73,2.91,2.13,2.75,2.45,3.95.59,2.24-.68,3.24.64,3.91.72.36,1.42.21,5.35.22,4.18,0,4.95.38,5.77,0,1.26-.57.39-1.73-.06-4.3-.72-4.11,1-4.17-.15-7-.88-2.14-2.18-2.79-1.64-4.43C272,260.32,273.41,259.37,272.73,259Z"
        transform="translate(-254.83 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V28"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.36"
        y="58.56"
        width="19.4"
        height="3"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal28"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M269.05,273.78h-3.72l-3.16-.89-.83-.23c-.74-1.25-1.48-2.5-2.23-3.75l6.22-.75h3.72c2.17,0,3.94,1,3.94,2.18v1.26C273,272.81,271.22,273.78,269.05,273.78Z"
        transform="translate(-254.83 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial28"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M305.61,273.53l-5.59,0c-2.3,0-4.16-1-4.16-2.29v-.59c0-1.27,1.86-2.3,4.16-2.3l10,.88a8.54,8.54,0,0,1-.43,1.83c-.52,1.52-1.06,1.83-1.28,1.94A5.73,5.73,0,0,1,305.61,273.53Z"
        transform="translate(-254.83 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo28"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M270.49,289.93c.91-.18,1.65.73,5.52,1.64a32.84,32.84,0,0,0,7.23.94c4.54.06,6-1,7.22-.59,2.36.85-1.16,5.46-4.89,12.21-4.06,7.37-3.55,8.57-7.64,14.68-2,2.92-5.74,8.54-7.23,8.33-1.87-.26,4.3-9.12,2.34-21.6C271.86,298.05,267.94,290.43,270.49,289.93Z"
        transform="translate(-254.83 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <g id="ADULT_DENT_Post28" v-if="selectedTooth.post.post1">
        <path
          d="M287.62,290.76l-11.76-.67c-.44,0-.74-.31-.66-.64l.52-2.39a.85.85,0,0,1,.92-.56l11.76.66c.44,0,.73.32.66.65l-.52,2.39A.87.87,0,0,1,287.62,290.76Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M276.25,318.82l-1.48-.08c-.77-.05-1.3-.56-1.17-1.15l5.82-26.8a1.55,1.55,0,0,1,1.63-1l1.48.09c.77,0,1.3.55,1.17,1.14l-5.82,26.8A1.53,1.53,0,0,1,276.25,318.82Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M284.42,296.37l-8.05-.46c-.22,0-.36-.15-.33-.31l.17-.77a.43.43,0,0,1,.45-.28l8.06.46c.21,0,.35.15.32.31l-.17.77A.42.42,0,0,1,284.42,296.37Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M283.66,300.46l-8.1-.46c-.2,0-.34-.14-.3-.3l.17-.8a.41.41,0,0,1,.43-.26l8.1.46c.2,0,.33.14.3.29l-.17.81A.41.41,0,0,1,283.66,300.46Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M282.64,304.54l-8-.46c-.22,0-.36-.15-.33-.32l.17-.76a.43.43,0,0,1,.46-.28l8,.45c.21,0,.36.16.33.33l-.17.76A.45.45,0,0,1,282.64,304.54Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M281.9,308.63l-8.12-.46c-.2,0-.33-.14-.3-.29l.18-.82a.39.39,0,0,1,.42-.25l8.11.46c.2,0,.33.14.3.29l-.18.82A.39.39,0,0,1,281.9,308.63Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M281,312.71l-8.13-.45c-.2,0-.33-.14-.29-.29l.18-.83a.38.38,0,0,1,.4-.25l8.08.46c.22,0,.37.16.34.33l-.18.79A.36.36,0,0,1,281,312.71Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M280,316.79l-8-.45c-.22,0-.36-.16-.33-.32l.17-.77a.42.42,0,0,1,.46-.27l8,.45c.22,0,.36.16.33.32l-.17.76A.43.43,0,0,1,280,316.79Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="26.45"
          y1="85.88"
          x2="16.88"
          y2="89.49"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="26.67"
          y1="84.66"
          x2="17.1"
          y2="88.29"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="27.38"
          y1="81.76"
          x2="17.85"
          y2="85.41"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="27.58"
          y1="80.61"
          x2="18.11"
          y2="84.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="28.07"
          y1="77.71"
          x2="18.74"
          y2="81.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="28.35"
          y1="76.49"
          x2="18.97"
          y2="80.11"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="29.13"
          y1="73.61"
          x2="19.51"
          y2="77.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="29.34"
          y1="72.4"
          x2="19.81"
          y2="76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="29.88"
          y1="69.53"
          x2="20.52"
          y2="73.15"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="30.12"
          y1="68.31"
          x2="20.81"
          y2="71.91"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M271.79,314.81"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M286.34,287.78l-8-.45c-.85-.05-1.43-.62-1.29-1.27l.63-2.9a1.72,1.72,0,0,1,1.8-1.1l8,.46c.86,0,1.43.61,1.29,1.26l-.63,2.9A1.69,1.69,0,0,1,286.34,287.78Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_gingivitis28">
        <path
          id="ADULT_DENT_Right_gingivitis28"
          v-if="selectedTooth.gingivitis.right"
          d="M300.2,286.3c-1.26.3-.36,1.66-2.41,2.89-1.14.68-2.21.72-2.42,1.33s.67.86,1,1.67a2.26,2.26,0,0,1-.6,2.22c-1.78,2.51,1.7-.93-4.23,7.68-3.85,5.58-5.19,6.86-4.22,7.33s4.25-.22,6.44-1.33c4.94-2.51,1.75-5.48,5-11,2.94-5,8.07-6.86,6-9.12A6.07,6.07,0,0,0,300.2,286.3Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_gingivitis28"
          v-if="selectedTooth.gingivitis.left"
          d="M260.36,283.85c1.11.3.24,1.48,2,2.67.91.61,1.82.75,1.82,1.22s-1,.63-1.61,1.23c-.81.76-.36,1.65,0,2.44.66,1.47.94,3,1.61,4.45.48,1.07,1,2.68,2,5.89,1.34,4.26,1.25,4.78.8,4.89-1,.25-3.55-1.4-5.23-3-3.46-3.28-1.64-5-3.62-10.12-1.76-4.57-4.38-6.37-2.21-8.22C257.08,284.32,259.28,283.56,260.36,283.85Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_periodontal28"
          v-if="selectedTooth.periodontal.right"
          d="M300.2,286.3c-1.26.3-.36,1.66-2.41,2.89-1.14.68-2.21.72-2.42,1.33s.67.86,1,1.67a2.26,2.26,0,0,1-.6,2.22c-1.78,2.51,1.7-.93-4.23,7.68-3.85,5.58-5.19,6.86-4.22,7.33s4.25-.22,6.44-1.33c4.94-2.51,1.75-5.48,5-11,2.94-5,8.07-6.86,6-9.12A6.07,6.07,0,0,0,300.2,286.3Z"
          transform="translate(-254.83 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_periodontal28"
          v-if="selectedTooth.periodontal.left"
          d="M260.36,283.85c1.11.3.24,1.48,2,2.67.91.61,1.82.75,1.82,1.22s-1,.63-1.61,1.23c-.81.76-.36,1.65,0,2.44.66,1.47.94,3,1.61,4.45.48,1.07,1,2.68,2,5.89,1.34,4.26,1.25,4.78.8,4.89-1,.25-3.55-1.4-5.23-3-3.46-3.28-1.64-5-3.62-10.12-1.76-4.57-4.38-6.37-2.21-8.22C257.08,284.32,259.28,283.56,260.36,283.85Z"
          transform="translate(-254.83 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_perio28"
          v-if="selectedTooth.perio.right"
          d="M300.2,286.3c-1.26.3-.36,1.66-2.41,2.89-1.14.68-2.21.72-2.42,1.33s.67.86,1,1.67a2.26,2.26,0,0,1-.6,2.22c-1.78,2.51,1.7-.93-4.23,7.68-3.85,5.58-5.19,6.86-4.22,7.33s4.25-.22,6.44-1.33c4.94-2.51,1.75-5.48,5-11,2.94-5,8.07-6.86,6-9.12A6.07,6.07,0,0,0,300.2,286.3Z"
          transform="translate(-254.83 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_perio28"
          v-if="selectedTooth.perio.left"
          d="M260.36,283.85c1.11.3.24,1.48,2,2.67.91.61,1.82.75,1.82,1.22s-1,.63-1.61,1.23c-.81.76-.36,1.65,0,2.44.66,1.47.94,3,1.61,4.45.48,1.07,1,2.68,2,5.89,1.34,4.26,1.25,4.78.8,4.89-1,.25-3.55-1.4-5.23-3-3.46-3.28-1.64-5-3.62-10.12-1.76-4.57-4.38-6.37-2.21-8.22C257.08,284.32,259.28,283.56,260.36,283.85Z"
          transform="translate(-254.83 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Implant30" v-if="selectedTooth.implant">
        <path
          d="M296.48,294.49l-31.73.05c-1.18,0-2.12-.43-2.11-1l.07-3.85c0-.53,1-1,2.14-1l31.74,0c1.17,0,2.12.43,2.11,1l-.07,3.85C298.62,294.06,297.66,294.49,296.48,294.49Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M281.58,340.15h-4c-2.08,0-3.75-.77-3.73-1.71l.79-43.14c0-.95,1.72-1.72,3.8-1.72h4c2.08,0,3.75.77,3.73,1.71l-.79,43.14C285.36,339.38,283.66,340.15,281.58,340.15Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291,303.71l-21.72,0c-.58,0-1-.22-1-.48l0-1.24c0-.26.48-.47,1.06-.47l21.72,0c.57,0,1,.22,1,.48l0,1.24C292.07,303.49,291.6,303.7,291,303.71Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.25,310.28l-21.85,0c-.54,0-1-.2-1-.44l0-1.3c0-.25.45-.45,1-.45l21.85,0c.54,0,1,.2,1,.44l0,1.3C292.23,310.08,291.79,310.28,291.25,310.28Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.76,316.85l-21.67,0c-.59,0-1.06-.22-1.06-.49l0-1.22c0-.27.49-.49,1.08-.49l21.67,0c.59,0,1.07.22,1.06.49l0,1.22C291.83,316.64,291.35,316.85,290.76,316.85Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291,323.43l-21.89,0c-.53,0-1-.2-.95-.44l0-1.31c0-.24.44-.44,1-.44l21.89,0c.53,0,1,.19.95.43l0,1.32C292,323.23,291.56,323.43,291,323.43Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.93,330,269,330c-.52,0-.94-.19-.93-.42l0-1.34c0-.24.43-.43,1-.43l21.79,0c.6,0,1.08.22,1.07.49l0,1.28C291.87,329.81,291.45,330,290.93,330Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.41,336.58l-21.69,0c-.59,0-1.06-.22-1.05-.48l0-1.23c0-.27.48-.48,1.07-.48l21.69,0c.58,0,1.05.21,1.05.48l0,1.22C291.47,336.36,291,336.58,290.41,336.58Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.76"
          y1="103.11"
          x2="13.23"
          y2="109.73"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.68"
          y1="101.15"
          x2="13.15"
          y2="107.8"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.98"
          y1="96.47"
          x2="13.59"
          y2="103.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.89"
          y1="94.63"
          x2="13.59"
          y2="101.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.61"
          y1="89.97"
          x2="13.71"
          y2="96.59"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.67"
          y1="88.01"
          x2="13.66"
          y2="94.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.16"
          y1="83.36"
          x2="13.48"
          y2="89.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.07"
          y1="81.42"
          x2="13.64"
          y2="88.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.92"
          y1="76.8"
          x2="13.96"
          y2="83.44"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.9"
          y1="74.85"
          x2="14.06"
          y2="81.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M267.48,334.19"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.43,289.88l-21.62,0c-2.31,0-4.16-.85-4.14-1.9l.09-4.66c0-1.05,1.9-1.91,4.2-1.91l21.63,0c2.3,0,4.15.84,4.13,1.89l-.08,4.67C295.62,289,293.73,289.87,291.43,289.88Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown28">
        <path
          id="ADULT_DENT_Endo_Crown1_28"
          v-if="selectedTooth.endo_crown.endo1"
          d="M276,258.43l-4.28.91a21.09,21.09,0,0,0-6.36.08,16.22,16.22,0,0,0-3.31.91L258.58,263c-.08,0-.54.27-.47.51s.87.54,1.89.43h49.3a24.39,24.39,0,0,0-3.22-1.7,33.62,33.62,0,0,0-4.33-1.56l-4.65-1.49a6.63,6.63,0,0,0-2.9-2.29,15.67,15.67,0,0,0-5.11-1.22,23.15,23.15,0,0,0-8.42.53A13.32,13.32,0,0,0,276,258.43Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_28"
          v-if="selectedTooth.endo_crown.endo2"
          d="M275.1,270.93l18.7-.23,2.91-6.15c.07-.15-.13-.29-.41-.29l-24.38,0c-.28,0-.49.16-.4.31Z"
          transform="translate(-254.83 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical28"
        v-if="selectedTooth.periapical.periapical1"
        d="M268,318.56c.91.24,0,2.2-1.37,5.35-1.64,3.7-2.46,5.54-3.64,6.61,0,0-3.26,3-4.1,5-.12.29-.31.83.23,1.13a4.22,4.22,0,0,0,2.16.13,6.93,6.93,0,0,0,3.3-1.45c4.32-3.13,2.62-1.6,4.35-3.06,1.94-1.65,2.28-2.05,4.31-3.86,3.52-3.14,4-3.2,5.35-4.78s1.73-2.43,2.16-2.39c.75.06,1.36,2.62-.35,5-.84,1.14-1.51,1.25-4,3.27-3.17,2.6-2.44,2.72-4.66,4.34a29.75,29.75,0,0,1-8.54,4c-3.54,1.07-4.65.84-5,.75-2.32-.59-2.19-3.11-2.17-3.46.13-2.54,2.58-2.74,4.78-6.54a14.28,14.28,0,0,0,2.17-5,4.38,4.38,0,0,1,.91-2.51C265,319.6,267.17,318.35,268,318.56Z"
        transform="translate(-254.83 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer28"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M276.14,258.51l-4.28.92a21,21,0,0,0-6.36.07,16.32,16.32,0,0,0-3.31.92l-3.45,2.67c-.08,0-.53.26-.46.5s.86.54,1.88.43h49.3a27,27,0,0,0-3.22-1.7,34.07,34.07,0,0,0-4.32-1.56l-4.65-1.49a6.85,6.85,0,0,0-2.9-2.29,16.26,16.26,0,0,0-5.11-1.22,23,23,0,0,0-8.43.54A13.17,13.17,0,0,0,276.14,258.51Z"
        transform="translate(-254.83 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.75"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer28"
        v-if="selectedTooth.crown.onlay"
        d="M276.14,258.51l-4.28.92a21,21,0,0,0-6.36.07,16.32,16.32,0,0,0-3.31.92l-3.45,2.67c-.08,0-.53.26-.46.5s.86.54,1.88.43h49.3a27,27,0,0,0-3.22-1.7,34.07,34.07,0,0,0-4.32-1.56l-4.65-1.49a6.85,6.85,0,0,0-2.9-2.29,16.26,16.26,0,0,0-5.11-1.22,23,23,0,0,0-8.43.54A13.17,13.17,0,0,0,276.14,258.51Z"
        transform="translate(-254.83 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.75"
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