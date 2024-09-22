<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 58.34 113.68"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_29_all">
      <g id="adult_dent_29">
        <path
          id="adult_dent_29_crown"
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
          d="M268.28,256.79c5.53-.65,5.29-1.27,10.09-1.73a65,65,0,0,1,8.72-.2c2.39.1,4.23.31,6.65.59,1.07.12,3.38.4,6.29.89,1.94.32,1,.21,4.8.89a17.74,17.74,0,0,1,5.41,1.5,6.22,6.22,0,0,1,.74.46c1.5,1.2.76,2.49-.59,6.93-1.64,5.39-.83,4.41-1.76,6.59-.41,1-.8,1.69-7.06,10.12-2.07,2.79-2.41,3.22-3.52,3.73-3.2,1.46-6.78.82-15.48.55-13.06-.4-14.53.77-17.44-.55-1.32-.6-1.54-1.22-5.68-9.34a41.48,41.48,0,0,1-2.54-5.5c-2.75-8.05-1.5-10.19-.79-11a10.34,10.34,0,0,1,4.7-3C263,257.05,264.12,257.28,268.28,256.79Z"
          transform="translate(-254.34 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
        <path
          id="adult_dent_29_root"
          v-if="selectedTooth.dent.root1"
          d="M264.55,287.77c-1.83,1.14-.5,2.43,1,8.35a59.48,59.48,0,0,1,1.56,12.64,38,38,0,0,1-1.56,10.34c-2.58,9.38-6.84,13.26-4.9,14,2.65.94,13.7-5.23,21.16-11.66,7-6,10-11.61,12.54-16.15,2.11-3.87.12-1.33,4.11-11.43,1.17-3,2-4.74.2-5.83-2-1.24-5.5-.48-12.35-.22C272.57,288.29,267.5,285.93,264.55,287.77Z"
          transform="translate(-254.34 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I29"
        v-if="selectedTooth.filling_caries_class_i"
        d="M291.85,265.93H277.57c-3.51,0-6.35-1.6-6.35-3.56V259a2.07,2.07,0,0,1,1-1.84c.38-.26.95-.52,3.83-1.07,1-.2,2.28-.42,3.76-.64,1,0,2.31-.07,3.94-.08,1.8,0,2.7,0,3.75,0,2,.12,2.09.29,4.89.58s3.15.16,3.93.45a2.9,2.9,0,0,1,1.91,2.55v3.37C298.19,264.33,295.35,265.93,291.85,265.93Z"
        transform="translate(-254.34 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial29"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M306.5,274.26l-3.4.53c-2.71,0-4.91-1.23-4.91-2.75V259.3a1.35,1.35,0,0,0-.12-1.56c-.42-.51-1.14-.73-1-.86s1.33.1,3.15.4c1.29.21,2.37.36,3.1.46l3.27.55a9.15,9.15,0,0,1,2.78.92,4.74,4.74,0,0,1,1.49,1.19l-3,10.45c-.19.57-.41,1.15-.65,1.74S306.75,273.72,306.5,274.26Z"
        transform="translate(-254.34 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal29"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M271.18,257.15c-.58-.21-1.17.22-3.26.48s-2.71-.08-4.49.23a12.59,12.59,0,0,0-3.27,1,7.77,7.77,0,0,0-3.47,2.64,3.24,3.24,0,0,0-.41,1.94c.06,2.21.63,2.95,1.22,5.62.34,1.5,1.07,3,1.43,4.47a1.41,1.41,0,0,0,.82,1.14c1,.48,2.59.21,6.13-.34,5.7-.88,5.65-.79,5.94-1,1.8-1,.15-2.49-.84-8.32a11,11,0,0,1,0-4.93C271.37,258.72,272.06,257.47,271.18,257.15Z"
        transform="translate(-254.34 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V29"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.55"
        y="54.27"
        width="19.24"
        height="3.02"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal29"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M266.05,271.81h-3.68l-4.58-1.21h0c-.22-1.23-.43-2.45-.65-3.68l5.23-.76h3.68c2.16,0,3.91,1,3.91,2.19v1.27C270,270.83,268.21,271.81,266.05,271.81Z"
        transform="translate(-254.34 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial29"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M303.58,271.77h-4.23c-2.32,0-4.2-1.06-4.2-2.36v-.85c0-1.31,1.88-2.36,4.2-2.36h4.23l5.09.87h0l-.95,4h0Z"
        transform="translate(-254.34 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo29"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M272.1,287.94c1.24-.3,1.81.4,6.53.59,2.67.11,5,0,9.26-.24,4.55-.23,4.59-.36,5.06-.23,4.2,1.14,1.19,11.42-5.9,21.39-7.55,10.61-19.14,20.05-21.69,19.38s8.11-8.92,7.58-22.46C272.6,297.72,267.83,289,272.1,287.94Z"
        transform="translate(-254.34 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <g id="ADULT_DENT_Post29" v-if="selectedTooth.post.post1">
        <path
          d="M290.56,286.91l-16.44-.63c-.61,0-1-.37-.95-.78l.58-2.94a1.21,1.21,0,0,1,1.26-.7l16.44.63c.6,0,1,.38.95.79l-.59,2.94A1.18,1.18,0,0,1,290.56,286.91Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M276.29,321.5l-2.07-.08c-1.08,0-1.84-.66-1.69-1.39l6.6-32.95c.14-.73,1.13-1.28,2.21-1.24l2.08.08c1.07,0,1.83.66,1.69,1.39l-6.6,32.95A2.1,2.1,0,0,1,276.29,321.5Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M286.41,293.84l-11.25-.43c-.3,0-.51-.19-.47-.39l.19-.94a.59.59,0,0,1,.62-.35l11.25.44c.3,0,.51.18.47.38l-.19.95C287,293.7,286.71,293.85,286.41,293.84Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M285.59,298.87l-11.32-.44c-.28,0-.48-.17-.44-.36l.2-1c0-.19.29-.33.57-.32l11.32.44c.28,0,.48.17.44.36l-.2,1A.54.54,0,0,1,285.59,298.87Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M284.39,303.88l-11.23-.43c-.3,0-.52-.18-.48-.39l.19-.93c0-.21.32-.36.63-.35l11.23.43c.3,0,.51.19.47.39l-.18.94A.58.58,0,0,1,284.39,303.88Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M283.58,308.91l-11.33-.43c-.28,0-.47-.17-.43-.35l.2-1c0-.18.29-.33.56-.32l11.34.44c.27,0,.47.17.43.35l-.2,1A.53.53,0,0,1,283.58,308.91Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M282.59,313.94l-11.36-.44c-.27,0-.46-.16-.42-.34l.2-1a.52.52,0,0,1,.55-.3l11.29.43c.31,0,.53.19.49.4l-.2,1C283.11,313.81,282.86,314,282.59,313.94Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M281.38,319l-11.24-.43c-.3,0-.52-.19-.47-.39l.18-.94a.58.58,0,0,1,.63-.34l11.23.43c.31,0,.52.18.48.39l-.19.93C282,318.81,281.68,319,281.38,319Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="28.61"
          y1="87.08"
          x2="15.47"
          y2="91.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="28.85"
          y1="85.59"
          x2="15.71"
          y2="90.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="29.67"
          y1="82.02"
          x2="16.6"
          y2="86.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="29.89"
          y1="80.61"
          x2="16.89"
          y2="85.13"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="30.41"
          y1="77.04"
          x2="17.61"
          y2="81.62"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="30.73"
          y1="75.55"
          x2="17.86"
          y2="80.13"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="31.65"
          y1="72"
          x2="18.44"
          y2="76.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="31.88"
          y1="70.51"
          x2="18.8"
          y2="75.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="32.47"
          y1="66.98"
          x2="19.62"
          y2="71.57"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="32.73"
          y1="65.49"
          x2="19.96"
          y2="70.04"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M269.84,316.64"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M288.61,283.28l-11.21-.43c-1.19-.05-2-.73-1.87-1.54l.72-3.56a2.32,2.32,0,0,1,2.45-1.37l11.2.43c1.2.05,2,.73,1.87,1.54l-.71,3.56A2.32,2.32,0,0,1,288.61,283.28Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_gingivitis29">
        <path
          id="ADULT_DENT_Right_gingivitis29"
          v-if="selectedTooth.gingivitis.right"
          d="M302.81,282.8c-1.07.21-.19,1.64-2.19,2.91-1.07.68-2.26.87-2.2,1.35s1.08.53,1.8,1c1.3.86.63,2.26.2,3.25-1.57,3.6.36.88-2.2,6.72-1.51,3.45-2.22,4.47-1.39,4.81,1,.4,3.65-.38,5.38-1.46,3.6-2.23.88-4.34,3-9.51,1.35-3.29,3.28-4.46,2-6.49C306.23,283.83,303.91,282.59,302.81,282.8Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_gingivitis29"
          v-if="selectedTooth.gingivitis.left"
          d="M260.71,282.13c1,.25-.07,1.51,1.6,3,.79.72,1.61,1,1.6,1.57s-.87.89-1.4,1.46c-1,1.06,0,2.29.6,3.35,1.34,2.24-.07,1.59,1.79,7.73.88,2.88,1.44,3.84.8,4-1,.28-4.06-1.5-6-3.47-2.51-2.58-1.18-3.56-3-8.85-1.2-3.5-2.34-4.67-1-6.38C257,283,259.62,281.85,260.71,282.13Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_periodontal29"
          v-if="selectedTooth.periodontal.right"
          d="M302.81,282.8c-1.07.21-.19,1.64-2.19,2.91-1.07.68-2.26.87-2.2,1.35s1.08.53,1.8,1c1.3.86.63,2.26.2,3.25-1.57,3.6.36.88-2.2,6.72-1.51,3.45-2.22,4.47-1.39,4.81,1,.4,3.65-.38,5.38-1.46,3.6-2.23.88-4.34,3-9.51,1.35-3.29,3.28-4.46,2-6.49C306.23,283.83,303.91,282.59,302.81,282.8Z"
          transform="translate(-254.34 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_periodontal29"
          v-if="selectedTooth.periodontal.left"
          d="M260.71,282.13c1,.25-.07,1.51,1.6,3,.79.72,1.61,1,1.6,1.57s-.87.89-1.4,1.46c-1,1.06,0,2.29.6,3.35,1.34,2.24-.07,1.59,1.79,7.73.88,2.88,1.44,3.84.8,4-1,.28-4.06-1.5-6-3.47-2.51-2.58-1.18-3.56-3-8.85-1.2-3.5-2.34-4.67-1-6.38C257,283,259.62,281.85,260.71,282.13Z"
          transform="translate(-254.34 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_perio29"
          v-if="selectedTooth.perio.right"
          d="M302.81,282.8c-1.07.21-.19,1.64-2.19,2.91-1.07.68-2.26.87-2.2,1.35s1.08.53,1.8,1c1.3.86.63,2.26.2,3.25-1.57,3.6.36.88-2.2,6.72-1.51,3.45-2.22,4.47-1.39,4.81,1,.4,3.65-.38,5.38-1.46,3.6-2.23.88-4.34,3-9.51,1.35-3.29,3.28-4.46,2-6.49C306.23,283.83,303.91,282.59,302.81,282.8Z"
          transform="translate(-254.34 -226.77)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_perio29"
          v-if="selectedTooth.perio.left"
          d="M260.71,282.13c1,.25-.07,1.51,1.6,3,.79.72,1.61,1,1.6,1.57s-.87.89-1.4,1.46c-1,1.06,0,2.29.6,3.35,1.34,2.24-.07,1.59,1.79,7.73.88,2.88,1.44,3.84.8,4-1,.28-4.06-1.5-6-3.47-2.51-2.58-1.18-3.56-3-8.85-1.2-3.5-2.34-4.67-1-6.38C257,283,259.62,281.85,260.71,282.13Z"
          transform="translate(-254.34 -226.77)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Implant29" v-if="selectedTooth.implant">
        <path
          d="M296.49,294.19l-30.78,0c-1.14,0-2-.43-2-1l.07-3.87c0-.54.94-1,2.08-1l30.77-.05c1.14,0,2.06.44,2.05,1l-.07,3.87C298.56,293.75,297.63,294.19,296.49,294.19Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M282,340.15h-3.89c-2,0-3.64-.77-3.62-1.73L275.3,295c0-.95,1.66-1.73,3.68-1.73h3.89c2,0,3.64.77,3.62,1.72l-.77,43.43C285.71,339.37,284.06,340.15,282,340.15Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.2,303.46l-21.06,0c-.56,0-1-.21-1-.47l0-1.25c0-.27.47-.48,1-.48l21.06,0c.56,0,1,.21,1,.47l0,1.25C292.21,303.25,291.76,303.46,291.2,303.46Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.42,310.08l-21.19,0c-.53,0-1-.2-.94-.45l0-1.3c0-.25.43-.45,1-.45l21.19,0c.52,0,.94.2.94.45l0,1.31C292.37,309.88,291.94,310.08,291.42,310.08Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.94,316.7l-21,0c-.57,0-1-.22-1-.49l0-1.23c0-.27.47-.48,1-.49l21,0c.57,0,1,.22,1,.49l0,1.23C292,316.48,291.51,316.7,290.94,316.7Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.2,323.32l-21.22,0c-.52,0-.93-.2-.93-.44l0-1.32c0-.25.43-.45.95-.45l21.22,0c.51,0,.93.2.92.44l0,1.32C292.14,323.12,291.71,323.32,291.2,323.32Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.11,329.94l-21.28,0c-.5,0-.9-.19-.9-.43l0-1.35c0-.24.41-.43.91-.43l21.14,0c.57,0,1,.22,1,.49l0,1.28C292,329.74,291.61,329.93,291.11,329.94Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.6,336.55l-21,0c-.56,0-1-.22-1-.49l0-1.23c0-.27.47-.49,1-.49l21,0c.57,0,1,.21,1,.48l0,1.24C291.63,336.34,291.17,336.55,290.6,336.55Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.41"
          y1="103.04"
          x2="14.59"
          y2="109.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.32"
          y1="101.07"
          x2="14.51"
          y2="107.77"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.61"
          y1="96.36"
          x2="14.93"
          y2="103.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.52"
          y1="94.5"
          x2="14.94"
          y2="101.11"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.25"
          y1="89.82"
          x2="15.05"
          y2="96.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.32"
          y1="87.84"
          x2="15"
          y2="94.52"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.79"
          y1="83.16"
          x2="14.82"
          y2="89.8"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.7"
          y1="81.21"
          x2="14.98"
          y2="87.86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.56"
          y1="76.56"
          x2="15.29"
          y2="83.24"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.53"
          y1="74.59"
          x2="15.39"
          y2="81.22"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M268.36,334.15"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.59,289.54l-21,0c-2.23,0-4-.85-4-1.9l.08-4.7c0-1.06,1.85-1.92,4.08-1.92l21,0c2.23,0,4,.85,4,1.9l-.08,4.7C295.65,288.68,293.82,289.54,291.59,289.54Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown29">
        <path
          id="ADULT_DENT_Endo_Crown1_29"
          v-if="selectedTooth.endo_crown.crown1"
          d="M294.59,256.34a75.27,75.27,0,0,0-12.18-.53,73.07,73.07,0,0,0-11.37,1.3,51.17,51.17,0,0,0-9.58,1.85c-.83.24-1.61.5-2.33.76l-1.79,1.4c-.83.59-.84,1.37-.12,1.85a4,4,0,0,0,2,.46h51.07a2.37,2.37,0,0,0,.48-1,2.17,2.17,0,0,0-.27-1.46l-1.37-1.23a40.77,40.77,0,0,0-4.52-1.61A49.57,49.57,0,0,0,294.59,256.34Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_29"
          v-if="selectedTooth.endo_crown.crown2"
          d="M274.81,270.47l18.54-.23,2.88-6.19c.07-.15-.13-.3-.4-.3H271.66c-.29,0-.49.15-.4.3Z"
          transform="translate(-254.34 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical29"
        v-if="selectedTooth.periapical.periapical1"
        d="M264.77,316.71c1,.2-1.6,5.88-1.81,6.33a46.12,46.12,0,0,1-2.37,4.82,26.64,26.64,0,0,0-1.47,4.24.93.93,0,0,0,.23,1,4.8,4.8,0,0,0,3.38.69,5.75,5.75,0,0,0,2.37-.95c2-1.1,2.39-.91,4.52-2a38.54,38.54,0,0,0,4.52-2.92c4.23-2.88,4.58-3.13,5-3.42a46.67,46.67,0,0,0,3.95-3.16c2.06-1.89,2.6-2.85,3.05-2.79.62.09.66,2-.34,3.8s-2.64,2.66-6.21,5c-6.36,4.19-5.86,4.69-9.37,6.21-2.87,1.25-6.46,2.81-9.71,2.16a5.88,5.88,0,0,1-4.4-3.55c-.78-2,.86-2.47,2.94-7.54.85-2.08,1-3.1,2.37-4.88C262.39,318.48,264.16,316.59,264.77,316.71Z"
        transform="translate(-254.34 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer29"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M294.75,256.43a75.08,75.08,0,0,0-12.18-.54,71.69,71.69,0,0,0-11.37,1.31,51.91,51.91,0,0,0-9.58,1.84c-.83.25-1.61.51-2.33.77l-1.79,1.4c-.83.59-.84,1.36-.12,1.84a3.74,3.74,0,0,0,2,.46h51.07a2.38,2.38,0,0,0,.48-1,2.14,2.14,0,0,0-.27-1.46l-1.37-1.23a37.06,37.06,0,0,0-4.52-1.61A49.57,49.57,0,0,0,294.75,256.43Z"
        transform="translate(-254.34 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.75"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer29"
        v-if="selectedTooth.crown.onlay"
        d="M294.75,256.43a75.08,75.08,0,0,0-12.18-.54,71.69,71.69,0,0,0-11.37,1.31,51.91,51.91,0,0,0-9.58,1.84c-.83.25-1.61.51-2.33.77l-1.79,1.4c-.83.59-.84,1.36-.12,1.84a3.74,3.74,0,0,0,2,.46h51.07a2.38,2.38,0,0,0,.48-1,2.14,2.14,0,0,0-.27-1.46l-1.37-1.23a37.06,37.06,0,0,0-4.52-1.61A49.57,49.57,0,0,0,294.75,256.43Z"
        transform="translate(-254.34 -226.77)"
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