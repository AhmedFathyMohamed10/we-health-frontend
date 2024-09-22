<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.64 113.62"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_22_all">
      <g id="adult_dent_22">
        <path
          id="adult_dent_22_crown"
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
          d="M265.4,252.06c-2.69,1-3.5.49-5.54,1.46-1.31.63-3.53,2.06-4.46,6.06-.61,2.63-.53,5.81,3.39,14.15,2.88,6.1,4.37,9.17,7.15,10.44,5.28,2.4,12.2,1.6,18.21.9,5.31-.62,11.06-1.3,14.1-4.16,2-1.87.66-2.65,1.79-8.19,1.09-5.37,2.68-6.3,3.39-11.79.39-3,.57-4.56-.36-6.06-1.59-2.59-4.81-4-10.53-6.4-4.33-1.84-6.68-2.82-10.36-3a20.68,20.68,0,0,0-8.21.9C269.59,247.93,270.28,250.28,265.4,252.06Z"
          transform="translate(-254.41 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
        <path
          id="adult_dent_22_root"
          v-if="selectedTooth.dent.root1"
          d="M265.76,285.4c-2.27.94-.6,4.41,1.6,11.68,2.16,7.11,1.24,6,2.68,10.1,2.8,7.89,4.27,12,9.11,16.61,5.09,4.82,11,7.34,22.14,12.13,1.81.77,5.82,2.44,6.43,2s-3.49-2.8-6.43-6.18c-1.31-1.49-2.57-3.41-4.11-12.68-1.2-7.22-1.8-10.82-1.61-15.16.27-6.06.41-9.1,1.43-13s2.4-6.88.54-7.63c-1.46-.59-3.19.79-8.57,2a48.06,48.06,0,0,1-16.07,1.12C268.34,285.87,267.14,284.83,265.76,285.4Z"
          transform="translate(-254.41 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial22"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M262.92,270.26h4.95c4.31,0,7.81-2.19,7.81-4.9V251.52a19.88,19.88,0,0,0,.12-2.09,1.66,1.66,0,0,0-.19-1.06,2.46,2.46,0,0,0-2-1.08c-.16,0-.68,0-1.92,1A11.09,11.09,0,0,0,270,250a8.83,8.83,0,0,1-1.59,1.27,11.57,11.57,0,0,1-2.3,1.11,14.11,14.11,0,0,1-2.2.7c-1.29.29-1.75.22-2.63.45a6.24,6.24,0,0,0-2.8,1.58,5.81,5.81,0,0,0-1.62,2.7,15.59,15.59,0,0,0-.87,4.28,14.94,14.94,0,0,0,.29,2.41c.18.89.26.87.77,2.78.37,1.38.35,1.46.54,1.66C258,269.43,259.15,270.19,262.92,270.26Z"
        transform="translate(-254.41 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.47"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal22"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M289.15,248c-2.17.58.49,4.29-.47,11.12-.66,4.7-2.53,7.25-.16,8.56.35.19.37.11,6.89.88,2.43.29,3.54.44,4.35,0s.5-.78,1-2.34c.65-1.92,1.14-1.85,1.42-3.23s-.15-1.31.1-2.9c.22-1.43.6-1.51.62-2.46a5.22,5.22,0,0,0-1.25-3.34c-.73-.91-1.66-1.57-4.85-3.15C292.28,248.91,290,247.79,289.15,248Z"
        transform="translate(-254.41 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.47"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V22"
        v-if="selectedTooth.filling_caries_class_v"
        x="18.2"
        y="50.37"
        width="14.74"
        height="2.59"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.47"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal22"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M298.14,267.09h-4.22c-1.46,0-2.64-.85-2.64-1.9v-1.05c0-1.05,1.18-1.91,2.64-1.91h4.22l3.81,1-1.15,3Z"
        transform="translate(-254.41 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.47"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial22"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M262.85,267.09H260c-.77-.26-1.57-.52-2.4-.77l-.88-.25c-.17-1.11-.35-2.22-.53-3.32l3.81-.52h2.82c1.66,0,3,.85,3,1.89v1.09C265.85,266.25,264.51,267.09,262.85,267.09Z"
        transform="translate(-254.41 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.47"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo22"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M272.12,286.85c.73-.23,1,.15,4.36.31a42.94,42.94,0,0,0,6.94-.21c4.37-.51,5.07-1.53,6.3-1.31,4,.69.6,12.09,1.61,23.64,1.25,14.14,8.56,22.24,6.3,22.84s-11.51-8.27-16.95-16.95c-1.69-2.69-3-5.72-5.49-11.77C269.61,290.06,270.47,287.38,272.12,286.85Z"
        transform="translate(-254.41 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.47"
      />
      <g id="ADULT_DENT_Post22" v-if="selectedTooth.post.post1">
        <path
          d="M287.83,284.23l-14.66,2a1,1,0,0,1-1.14-.68l-.65-3.19a.85.85,0,0,1,.82-.93l14.66-2a1,1,0,0,1,1.15.67l.64,3.19A.85.85,0,0,1,287.83,284.23Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289,323l-1.85.25a1.74,1.74,0,0,1-2-1.18l-7.24-35.77a1.52,1.52,0,0,1,1.46-1.66l1.85-.25a1.76,1.76,0,0,1,2,1.19l7.23,35.76A1.5,1.5,0,0,1,289,323Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M286.93,292.2l-10,1.35a.48.48,0,0,1-.56-.33l-.21-1a.42.42,0,0,1,.4-.46l10-1.36a.49.49,0,0,1,.57.33l.2,1C287.38,292,287.2,292.16,286.93,292.2Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M288.19,297.63,278.1,299a.46.46,0,0,1-.53-.31l-.21-1.08c-.05-.2.12-.39.37-.43l10.1-1.36a.45.45,0,0,1,.52.31l.22,1.08A.4.4,0,0,1,288.19,297.63Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.13,303.1l-10,1.35a.49.49,0,0,1-.57-.33l-.2-1a.41.41,0,0,1,.41-.47l10-1.36a.5.5,0,0,1,.57.34l.21,1A.43.43,0,0,1,289.13,303.1Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M290.4,308.53l-10.1,1.36a.44.44,0,0,1-.52-.3l-.22-1.09a.38.38,0,0,1,.37-.42L290,306.71a.44.44,0,0,1,.51.3l.23,1.09A.4.4,0,0,1,290.4,308.53Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M291.52,314l-10.13,1.37a.44.44,0,0,1-.51-.3l-.22-1.11a.37.37,0,0,1,.36-.41l10.06-1.36a.51.51,0,0,1,.59.34l.21,1.05A.38.38,0,0,1,291.52,314Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M292.43,319.45l-10,1.36a.5.5,0,0,1-.57-.34l-.21-1a.43.43,0,0,1,.41-.47l10-1.35a.49.49,0,0,1,.57.33l.2,1A.41.41,0,0,1,292.43,319.45Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="37.39"
          y1="87.06"
          x2="27.68"
          y2="93.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="37.01"
          y1="85.45"
          x2="27.31"
          y2="92.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="36.32"
          y1="81.55"
          x2="26.69"
          y2="88.53"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.95"
          y1="80.03"
          x2="26.35"
          y2="86.89"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35"
          y1="76.2"
          x2="25.59"
          y2="83.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="34.69"
          y1="74.57"
          x2="25.22"
          y2="81.47"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="34.09"
          y1="70.68"
          x2="24.31"
          y2="77.6"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="33.71"
          y1="69.08"
          x2="24.05"
          y2="76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="32.83"
          y1="65.27"
          x2="23.39"
          y2="72.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="32.48"
          y1="63.66"
          x2="23.08"
          y2="70.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M281.42,318.88"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M284.68,280.72l-10,1.35a1.94,1.94,0,0,1-2.24-1.31l-.78-3.87a1.67,1.67,0,0,1,1.61-1.84l10-1.35a2,2,0,0,1,2.25,1.32l.78,3.87A1.65,1.65,0,0,1,284.68,280.72Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
      </g>
      <g id="ADULT_DENT_gingivitis22">
        <path
          id="ADULT_DENT_Right_gingivitis22"
          v-if="selectedTooth.gingivitis.right"
          d="M300.88,273.22c-1.4.62.7,3.34-.57,6.14a4.11,4.11,0,0,1-2.09,2.5c-.4.18-1.11.42-1,.66s.71.2,1.23.41c.87.36,1,1.18,1,2a11.55,11.55,0,0,1-1.13,4.47,26.26,26.26,0,0,0-.95,3.33c-.6,2.43-.37,3.05-.76,6.62-.48,4.36-1,5.43-.09,5.78,1.34.5,4.63-.85,6.73-2.5,5.6-4.43-.51-8.57,2.84-17.28,1.69-4.4,4.39-6.33,2.46-8.94C306.78,274,302.23,272.62,300.88,273.22Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          id="ADULT_DENT_Left_gingivitis22"
          v-if="selectedTooth.gingivitis.left"
          d="M260.5,279.19c.64.18.4.75,1.38,2.31a5.21,5.21,0,0,0,2,2.21c.89.5,1.69.61,1.69,1s-.9.49-1.53,1a2.11,2.11,0,0,0-.46,2.5c.78,2.78,1.82,5.51,2.29,6.93.24.73,0,.17,1.22,4.61.59,2.15.88,3.23.92,3.36,1.08,3.29,1.95,4.06,1.23,4.62-1.05.8-4.65.59-7-.48-4.18-1.88-2.06-5.25-3.82-12.88-1.66-7.2-5-10.65-1.68-13.46C257.53,280.11,259.45,278.91,260.5,279.19Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          id="ADULT_DENT_Right_periodontal22"
          v-if="selectedTooth.periodontal.right"
          d="M300.88,273.22c-1.4.62.7,3.34-.57,6.14a4.11,4.11,0,0,1-2.09,2.5c-.4.18-1.11.42-1,.66s.71.2,1.23.41c.87.36,1,1.18,1,2a11.55,11.55,0,0,1-1.13,4.47,26.26,26.26,0,0,0-.95,3.33c-.6,2.43-.37,3.05-.76,6.62-.48,4.36-1,5.43-.09,5.78,1.34.5,4.63-.85,6.73-2.5,5.6-4.43-.51-8.57,2.84-17.28,1.69-4.4,4.39-6.33,2.46-8.94C306.78,274,302.23,272.62,300.88,273.22Z"
          transform="translate(-254.41 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          id="ADULT_DENT_Left_periodontal22"
          v-if="selectedTooth.periodontal.left"
          d="M260.5,279.19c.64.18.4.75,1.38,2.31a5.21,5.21,0,0,0,2,2.21c.89.5,1.69.61,1.69,1s-.9.49-1.53,1a2.11,2.11,0,0,0-.46,2.5c.78,2.78,1.82,5.51,2.29,6.93.24.73,0,.17,1.22,4.61.59,2.15.88,3.23.92,3.36,1.08,3.29,1.95,4.06,1.23,4.62-1.05.8-4.65.59-7-.48-4.18-1.88-2.06-5.25-3.82-12.88-1.66-7.2-5-10.65-1.68-13.46C257.53,280.11,259.45,278.91,260.5,279.19Z"
          transform="translate(-254.41 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          id="ADULT_DENT_Right_perio22"
          v-if="selectedTooth.perio.right"
          d="M300.88,273.22c-1.4.62.7,3.34-.57,6.14a4.11,4.11,0,0,1-2.09,2.5c-.4.18-1.11.42-1,.66s.71.2,1.23.41c.87.36,1,1.18,1,2a11.55,11.55,0,0,1-1.13,4.47,26.26,26.26,0,0,0-.95,3.33c-.6,2.43-.37,3.05-.76,6.62-.48,4.36-1,5.43-.09,5.78,1.34.5,4.63-.85,6.73-2.5,5.6-4.43-.51-8.57,2.84-17.28,1.69-4.4,4.39-6.33,2.46-8.94C306.78,274,302.23,272.62,300.88,273.22Z"
          transform="translate(-254.41 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          id="ADULT_DENT_Left_perio22"
          v-if="selectedTooth.perio.left"
          d="M260.5,279.19c.64.18.4.75,1.38,2.31a5.21,5.21,0,0,0,2,2.21c.89.5,1.69.61,1.69,1s-.9.49-1.53,1a2.11,2.11,0,0,0-.46,2.5c.78,2.78,1.82,5.51,2.29,6.93.24.73,0,.17,1.22,4.61.59,2.15.88,3.23.92,3.36,1.08,3.29,1.95,4.06,1.23,4.62-1.05.8-4.65.59-7-.48-4.18-1.88-2.06-5.25-3.82-12.88-1.66-7.2-5-10.65-1.68-13.46C257.53,280.11,259.45,278.91,260.5,279.19Z"
          transform="translate(-254.41 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
      </g>
      <g id="ADULT_DENT_Implant22" v-if="selectedTooth.implant">
        <path
          d="M294.64,288.08l-29.73,0c-1.1,0-2-.37-2-.83L263,284c0-.46.91-.84,2-.84l29.72,0c1.11,0,2,.37,2,.84l-.06,3.32C296.64,287.7,295.74,288.07,294.64,288.08Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M280.68,327.55h-3.75c-1.95,0-3.52-.66-3.5-1.48l.74-37.29c0-.82,1.61-1.49,3.56-1.49h3.75c1.95,0,3.51.66,3.5,1.48l-.74,37.29C284.22,326.88,282.63,327.55,280.68,327.55Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.52,296l-20.34,0c-.54,0-1-.19-1-.41l0-1.08c0-.22.45-.41,1-.41l20.34,0c.54,0,1,.19,1,.42l0,1.07C290.51,295.85,290.06,296,289.52,296Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.74,301.72l-20.47,0c-.51,0-.91-.17-.91-.38l0-1.13c0-.21.42-.38.93-.38l20.46,0c.51,0,.92.17.91.38l0,1.13C290.66,301.55,290.24,301.72,289.74,301.72Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.28,307.41l-20.3,0c-.55,0-1-.18-1-.41l0-1.06c0-.23.45-.42,1-.42l20.31,0c.55,0,1,.19,1,.42l0,1.06C290.28,307.22,289.83,307.41,289.28,307.41Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.53,313.09l-20.5,0c-.5,0-.9-.17-.89-.38l0-1.14c0-.21.41-.38.91-.38l20.49,0c.5,0,.9.16.9.37l0,1.14C290.43,312.92,290,313.09,289.53,313.09Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.44,318.77l-20.55,0c-.48,0-.87-.16-.87-.37l0-1.15c0-.21.4-.37.88-.37l20.41,0c.56,0,1,.19,1,.42l0,1.1C290.32,318.61,289.92,318.77,289.44,318.77Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289,324.46l-20.32,0c-.55,0-1-.19-1-.42l0-1.06c0-.23.45-.42,1-.42l20.32,0c.54,0,1,.19,1,.42l0,1.06C289.94,324.27,289.5,324.46,289,324.46Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.64"
          y1="91.89"
          x2="13.6"
          y2="97.62"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.56"
          y1="90.21"
          x2="13.53"
          y2="95.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.84"
          y1="86.16"
          x2="13.94"
          y2="91.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.76"
          y1="84.56"
          x2="13.94"
          y2="90.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.5"
          y1="80.54"
          x2="14.05"
          y2="86.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.56"
          y1="78.85"
          x2="14"
          y2="84.58"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="36.01"
          y1="74.82"
          x2="13.83"
          y2="80.52"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.93"
          y1="73.14"
          x2="13.99"
          y2="78.86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.79"
          y1="69.15"
          x2="14.28"
          y2="74.89"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <line
          x1="35.77"
          y1="67.47"
          x2="14.38"
          y2="73.16"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M267.47,322.39"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
        <path
          d="M289.9,284.08l-20.25,0c-2.16,0-3.89-.73-3.87-1.64l.08-4c0-.91,1.78-1.65,3.93-1.65l20.26,0c2.16,0,3.89.73,3.87,1.64l-.08,4C293.83,283.34,292.06,284.08,289.9,284.08Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.47"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown22">
        <path
          id="ADULT_DENT_Endo_Crown1_22"
          v-if="selectedTooth.endo_crown.crown1"
          d="M272,248.44c-.47.53-.93,1.07-1.4,1.61a15,15,0,0,1-3.12,2,21.55,21.55,0,0,1-5.61,1.76l-3,1.71c-.22.13-1.66,1-1.47,2.29a2.14,2.14,0,0,0,.64,1.13h13.28c1.12,0,2-.57,2-1.28v-9.41c0-.47-.12-.56-.21-.58C272.83,247.6,272.22,248.19,272,248.44Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_22"
          v-if="selectedTooth.endo_crown.crown2"
          d="M292.05,249l3.1,1.58a22.34,22.34,0,0,1,4.29,2.57,15.94,15.94,0,0,1,2.11,2l1.06,1.66a1.45,1.45,0,0,1-.24,1.26,2.88,2.88,0,0,1-1.23.92H289.62c-1.13,0-2-.57-2-1.28v-9.55c-.07-.3,0-.49.18-.59C288.26,247.27,289.7,247.76,292.05,249Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical22"
        v-if="selectedTooth.periapical.periapical1"
        d="M298.63,321.14c-.3.08-.1.71.69,3.7s.85,3.32,1.21,4a14.67,14.67,0,0,0,2.42,3.37,15.52,15.52,0,0,0,3.64,3.26,5.36,5.36,0,0,1,1.9,1.69c.24.39.29.68.09.92a2,2,0,0,1-1.21.49,6,6,0,0,1-3.38-1.08c-1.48-.79-3.26-1.32-4.84-2-3.43-1.5-3.06-1.23-6.32-2.66-2.61-1.15-3.92-1.73-5.71-2.67a27.3,27.3,0,0,1-4.76-2.88c-1.3-1-1.87-1.81-2.16-1.74s0,1.76.95,3.15c1.34,1.94,3.41,2.78,9.34,5.44,7.59,3.41,7.58,3.54,9.52,4.14,2.48.76,9.09,2.78,11.16,1.41,1.49-1,0-3.3-.78-4.57-2.06-3.28-4.42-3.06-6.31-6.14-1.19-2-.71-2.78-2.6-5.23C300.58,322.58,299.13,321,298.63,321.14Z"
        transform="translate(-254.41 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.47"
      />
      <g id="ADULT_DENT_Occlusal_Veneer22">
        <path
          id="ADULT_DENT_Occlusal_Veneer22_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M272.1,248.51l-1.4,1.61a15,15,0,0,1-3.12,2,21.55,21.55,0,0,1-5.61,1.76l-3,1.72c-.22.13-1.67,1-1.47,2.28a2.06,2.06,0,0,0,.64,1.13h13.27c1.13,0,2-.57,2-1.28v-9.4c0-.48-.13-.56-.22-.58C273,247.67,272.34,248.27,272.1,248.51Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer22_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M292.18,249.06l3.09,1.57a22.34,22.34,0,0,1,4.29,2.57,16.67,16.67,0,0,1,2.11,2c.36.55.71,1.11,1.06,1.67a1.42,1.42,0,0,1-.24,1.26,3,3,0,0,1-1.22.91H289.74c-1.13,0-2-.57-2-1.28v-9.55c-.06-.3,0-.49.18-.58C288.39,247.35,289.82,247.83,292.18,249.06Z"
          transform="translate(-254.41 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer22">
        <path
          id="ADULT_DENT_Occlusal_Veneer22_2"
          v-if="selectedTooth.crown.onlay"
          d="M272.1,248.51l-1.4,1.61a15,15,0,0,1-3.12,2,21.55,21.55,0,0,1-5.61,1.76l-3,1.72c-.22.13-1.67,1-1.47,2.28a2.06,2.06,0,0,0,.64,1.13h13.27c1.13,0,2-.57,2-1.28v-9.4c0-.48-.13-.56-.22-.58C273,247.67,272.34,248.27,272.1,248.51Z"
          transform="translate(-254.41 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.42"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer22_1"
          v-if="selectedTooth.crown.onlay"
          d="M292.18,249.06l3.09,1.57a22.34,22.34,0,0,1,4.29,2.57,16.67,16.67,0,0,1,2.11,2c.36.55.71,1.11,1.06,1.67a1.42,1.42,0,0,1-.24,1.26,3,3,0,0,1-1.22.91H289.74c-1.13,0-2-.57-2-1.28v-9.55c-.06-.3,0-.49.18-.58C288.39,247.35,289.82,247.83,292.18,249.06Z"
          transform="translate(-254.41 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.42"
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