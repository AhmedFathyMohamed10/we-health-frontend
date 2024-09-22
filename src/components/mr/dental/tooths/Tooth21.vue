<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 58.04 113.68"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_21_all">
      <g id="adult_dent_21">
        <path
          id="adult_dent_21_crown"
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
          d="M267.94,258.17c-7,2.37-10.53,3.55-11.69,4.7-2.05,2-1,4.34.47,7.05,6.32,12,9.48,18,15.42,19.58,8.3,2.25,17.88.46,20.34,0,3-.56,6.66-1.25,9.34-3.13,3.32-2.33,1.68-4.05,3.28-8.75,2.33-6.9,7.48-8,6.07-12.4-.21-.68-1.16-3.44-5.14-5.48-1.67-.86-2.56-.91-11.22-2.75s-9.64-2.17-12.15-2.08a42.45,42.45,0,0,0-8.65,1.43C272.58,256.69,271.09,257.1,267.94,258.17Z"
          transform="translate(-254.24 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
        <path
          id="adult_dent_21_root"
          v-if="selectedTooth.dent.root1"
          d="M272.61,291.2c-3.19,1.82,1.31,6,7,14.36,7.75,11.4,6.65,14.37,14.72,22.06,4.12,3.91,9.44,7.94,10.76,7.57,1.14-.32-1.87-3.66-3.74-9.79C300,321,300,317.51,300,312.87a87.28,87.28,0,0,1,.7-10.71c1.12-10.06,2.57-13.48-.34-14.35-2.38-.72-4.39,1.26-12.21,2.37C279.07,291.47,275.06,289.79,272.61,291.2Z"
          transform="translate(-254.24 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I21"
        v-if="selectedTooth.filling_caries_class_i"
        d="M291.64,268.51H274.89c-4.4,0-8-1.81-8-4v-5.55a50.32,50.32,0,0,1,5.23-1.68,60.88,60.88,0,0,1,7.36-1.41l4.33-.34c2.85.49,5.77,1,8.76,1.61,2.39.46,4.69.93,6.92,1.41,0,2,.07,4,.1,6C299.61,266.7,296,268.51,291.64,268.51Z"
        transform="translate(-254.24 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial21"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M263.11,277.59a5.13,5.13,0,0,1-1,0,19.87,19.87,0,0,1-1.24-2,17.22,17.22,0,0,1-.73-1.63c-.67-1.08-1.19-2-1.55-2.62a21.52,21.52,0,0,1-1.83-3.8,5.06,5.06,0,0,1-.38-2.25,3,3,0,0,1,.91-2.1,7.22,7.22,0,0,1,3.09-1.51l3.09-1.26a16.73,16.73,0,0,0,2-.69c.57-.23,1-.46,1.22-.39s.05.18,0,.42a2.49,2.49,0,0,0-.05.91v14.85A4.61,4.61,0,0,1,263.11,277.59Z"
        transform="translate(-254.24 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal21"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M303.71,276.82a8.66,8.66,0,0,1-6.14,0c-2.38-1.22-.82-4.25.41-6.64s2.23-2.7,2.25-4.35c0-1.23-.52-1.67-.66-3.89-.17-2.75.6-3,.87-3.09.56-.14,1.4.18,3.07.8a14.77,14.77,0,0,1,3.48,1.6,10.33,10.33,0,0,1,2.05,2.52c1.39,2,1.44,2.43,1.43,2.75a4.08,4.08,0,0,1-.82,1.94,22.44,22.44,0,0,1-1.84,2.52c-.8,1.07-1.37,2-2.25,3.43C304.43,276.25,304.39,276.51,303.71,276.82Z"
        transform="translate(-254.24 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V21"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.37"
        y="53.72"
        width="19.3"
        height="3.01"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal21"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M302.47,274h-5.53c-1.9,0-3.45-1-3.45-2.22v-1.22c0-1.22,1.55-2.21,3.45-2.21h5.53l6.21,1.09L305.94,273Z"
        transform="translate(-254.24 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial21"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M267.63,274h-3.69l-3.15-.9-.83-.23-2.06-3.6,6-.92h3.69c2.16,0,3.92,1,3.92,2.19v1.27C271.55,273,269.79,274,267.63,274Z"
        transform="translate(-254.24 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo21"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M278.06,291.28c1.54-.56,3.24.48,8,.12,5.55-.42,7.16-2.13,9.08-1.77,3.95.73,1.79,8.8,1.27,16.52-.94,13.83,3.65,21.71,1.69,22-1.4.17-3.24-3.9-12.89-18.89C279.68,300.59,274.31,292.66,278.06,291.28Z"
        transform="translate(-254.24 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <g id="ADULT_DENT_Post21" v-if="selectedTooth.post.post1">
        <path
          d="M293.22,289l-13.74,1.46a1,1,0,0,1-1.08-.5l-.6-2.36c-.09-.33.26-.64.77-.69l13.74-1.47c.51-.05,1,.17,1.07.5l.61,2.36C294.07,288.64,293.73,289,293.22,289Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M294.28,317.67l-1.74.19c-.9.1-1.75-.3-1.9-.88l-6.76-26.48c-.15-.58.46-1.13,1.37-1.23l1.73-.19c.9-.09,1.75.3,1.9.88l6.76,26.49C295.79,317,295.18,317.58,294.28,317.67Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M292.37,294.9l-9.4,1c-.25,0-.49-.08-.53-.24l-.2-.76c0-.16.13-.31.38-.34l9.41-1c.25,0,.48.08.52.24l.2.76C292.79,294.72,292.62,294.88,292.37,294.9Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M293.55,298.92l-9.46,1a.45.45,0,0,1-.5-.23l-.2-.8c0-.15.12-.29.35-.31l9.47-1a.43.43,0,0,1,.49.23l.2.79C293.94,298.76,293.78,298.9,293.55,298.92Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M294.42,303,285,304c-.25,0-.49-.09-.53-.25l-.19-.75c-.05-.17.13-.32.38-.35l9.39-1a.49.49,0,0,1,.54.25l.19.75C294.85,302.79,294.68,303,294.42,303Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.62,307l-9.48,1c-.23,0-.45-.07-.48-.22l-.21-.81c0-.15.12-.29.35-.31l9.47-1a.45.45,0,0,1,.49.22l.21.81C296,306.83,295.85,307,295.62,307Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M296.66,311l-9.5,1c-.22,0-.44-.07-.47-.22l-.21-.82c0-.14.11-.28.34-.3l9.43-1c.26,0,.51.09.55.25l.2.78C297,310.87,296.88,311,296.66,311Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M297.52,315.08l-9.4,1c-.25,0-.49-.08-.53-.24l-.19-.76c0-.16.13-.31.38-.34l9.39-1a.49.49,0,0,1,.54.25l.19.75C297.94,314.9,297.77,315.06,297.52,315.08Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="42.68"
          y1="84.15"
          x2="33.57"
          y2="89.28"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="42.32"
          y1="82.96"
          x2="33.22"
          y2="88.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.68"
          y1="80.07"
          x2="32.65"
          y2="85.24"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.34"
          y1="78.95"
          x2="32.32"
          y2="84.02"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="40.45"
          y1="76.11"
          x2="31.62"
          y2="81.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="40.15"
          y1="74.9"
          x2="31.27"
          y2="80.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="39.6"
          y1="72.03"
          x2="30.42"
          y2="77.14"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="39.24"
          y1="70.84"
          x2="30.18"
          y2="75.96"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="38.42"
          y1="68.02"
          x2="29.56"
          y2="73.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="38.08"
          y1="66.82"
          x2="29.27"
          y2="71.89"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M287.19,314.66"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.27,286.41l-9.37,1c-1,.11-1.94-.33-2.1-1l-.73-2.87c-.17-.64.51-1.25,1.51-1.35l9.36-1c1-.11,1.94.33,2.11,1l.73,2.87C291.94,285.69,291.27,286.3,290.27,286.41Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_gingivitis21">
        <path
          id="ADULT_DENT_Right_gingivitis21"
          v-if="selectedTooth.gingivitis.right"
          d="M305.79,279.6c-.73.17.51,1.44-.48,3.7a15.07,15.07,0,0,1-2.13,3.18h0l-1.66,1.06h0l1.42,1.06c1.21,1,.37,2.57,0,3.45-.84,2,.25,1.35-.47,5.83-.64,4-1.61,5.13-.48,5.56,1.34.52,4.85-.27,6.65-1.72,3.26-2.64-2-5.16-.48-10.2,1.08-3.54,4.23-4.07,3.56-6.89S306.85,279.34,305.79,279.6Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_gingivitis21"
          v-if="selectedTooth.gingivitis.left"
          d="M262.62,282.64c.7,0,.67,1.09,2.37,3.18a8.78,8.78,0,0,0,2.85,2.65c2.11,1.14,4.24,1.2,4.27,1.86s-1.6.67-2.13,1.59c-.41.68.12,1.28.71,2.12,1.19,1.71.27,1.1,1.89,3.7,2.68,4.3,5.08,5.8,4.27,6.23s-5.66-.58-8.53-2.78c-3.78-2.89-.36-4.69-3.8-9.14-2-2.62-4.25-3.35-4.27-5.7C260.24,284.44,261.7,282.61,262.62,282.64Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_periodontal21"
          v-if="selectedTooth.periodontal.right"
          d="M305.79,279.6c-.73.17.51,1.44-.48,3.7a15.07,15.07,0,0,1-2.13,3.18h0l-1.66,1.06h0l1.42,1.06c1.21,1,.37,2.57,0,3.45-.84,2,.25,1.35-.47,5.83-.64,4-1.61,5.13-.48,5.56,1.34.52,4.85-.27,6.65-1.72,3.26-2.64-2-5.16-.48-10.2,1.08-3.54,4.23-4.07,3.56-6.89S306.85,279.34,305.79,279.6Z"
          transform="translate(-254.24 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_periodontal21"
          v-if="selectedTooth.periodontal.left"
          d="M262.62,282.64c.7,0,.67,1.09,2.37,3.18a8.78,8.78,0,0,0,2.85,2.65c2.11,1.14,4.24,1.2,4.27,1.86s-1.6.67-2.13,1.59c-.41.68.12,1.28.71,2.12,1.19,1.71.27,1.1,1.89,3.7,2.68,4.3,5.08,5.8,4.27,6.23s-5.66-.58-8.53-2.78c-3.78-2.89-.36-4.69-3.8-9.14-2-2.62-4.25-3.35-4.27-5.7C260.24,284.44,261.7,282.61,262.62,282.64Z"
          transform="translate(-254.24 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_perio21"
          v-if="selectedTooth.perio.right"
          d="M305.79,279.6c-.73.17.51,1.44-.48,3.7a15.07,15.07,0,0,1-2.13,3.18h0l-1.66,1.06h0l1.42,1.06c1.21,1,.37,2.57,0,3.45-.84,2,.25,1.35-.47,5.83-.64,4-1.61,5.13-.48,5.56,1.34.52,4.85-.27,6.65-1.72,3.26-2.64-2-5.16-.48-10.2,1.08-3.54,4.23-4.07,3.56-6.89S306.85,279.34,305.79,279.6Z"
          transform="translate(-254.24 -226.77)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_perio21"
          v-if="selectedTooth.perio.left"
          d="M262.62,282.64c.7,0,.67,1.09,2.37,3.18a8.78,8.78,0,0,0,2.85,2.65c2.11,1.14,4.24,1.2,4.27,1.86s-1.6.67-2.13,1.59c-.41.68.12,1.28.71,2.12,1.19,1.71.27,1.1,1.89,3.7,2.68,4.3,5.08,5.8,4.27,6.23s-5.66-.58-8.53-2.78c-3.78-2.89-.36-4.69-3.8-9.14-2-2.62-4.25-3.35-4.27-5.7C260.24,284.44,261.7,282.61,262.62,282.64Z"
          transform="translate(-254.24 -226.77)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Implant21" v-if="selectedTooth.implant">
        <path
          d="M299.86,294.25l-25.57,0c-1,0-1.71-.43-1.7-1l.06-3.87c0-.54.78-1,1.73-1l25.57-.05c.95,0,1.71.43,1.7,1l-.06,3.87C301.58,293.81,300.81,294.25,299.86,294.25Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M287.86,340.15h-3.23c-1.68,0-3-.77-3-1.72l.63-43.37c0-.95,1.39-1.73,3.06-1.73h3.23c1.68,0,3,.77,3,1.72l-.63,43.37C290.9,339.37,289.53,340.15,287.86,340.15Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.47,303.51l-17.5,0c-.47,0-.84-.21-.84-.48l0-1.24c0-.27.38-.48.85-.48l17.5,0c.46,0,.84.21.83.47l0,1.25C296.31,303.29,295.93,303.51,295.47,303.51Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.65,310.12l-17.61,0c-.44,0-.79-.2-.78-.45l0-1.3c0-.25.36-.45.79-.45l17.61,0c.44,0,.79.2.78.44l0,1.31C296.44,309.92,296.08,310.12,295.65,310.12Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.26,316.73l-17.47,0c-.48,0-.86-.22-.85-.49v-1.22c0-.27.4-.49.87-.49l17.47,0c.47,0,.85.21.85.48l0,1.23C296.12,316.51,295.73,316.73,295.26,316.73Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.47,323.34l-17.64,0c-.43,0-.77-.2-.77-.44l0-1.32c0-.24.36-.44.78-.44l17.64,0c.43,0,.77.19.77.44l0,1.32C296.25,323.14,295.9,323.34,295.47,323.34Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.39,330l-17.68,0c-.41,0-.75-.19-.74-.43l0-1.34c0-.24.34-.43.76-.43l17.56,0c.48,0,.86.22.86.49l0,1.28C296.15,329.76,295.81,330,295.39,330Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295,336.56l-17.48,0c-.47,0-.85-.22-.85-.48l0-1.24c0-.26.39-.48.86-.48l17.48,0c.47,0,.85.21.85.48l0,1.23C295.83,336.34,295.44,336.56,295,336.56Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.68"
          y1="103.05"
          x2="22.71"
          y2="109.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.61"
          y1="101.09"
          x2="22.65"
          y2="107.77"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.85"
          y1="96.38"
          x2="23"
          y2="103.11"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.78"
          y1="94.52"
          x2="23"
          y2="101.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.55"
          y1="89.85"
          x2="23.1"
          y2="96.5"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.6"
          y1="87.88"
          x2="23.05"
          y2="94.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.99"
          y1="83.2"
          x2="22.91"
          y2="89.83"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.92"
          y1="81.25"
          x2="23.04"
          y2="87.9"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.8"
          y1="76.6"
          x2="23.3"
          y2="83.28"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="41.78"
          y1="74.64"
          x2="23.38"
          y2="81.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M276.49,334.16"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M295.79,289.61l-17.42,0c-1.86,0-3.35-.85-3.34-1.91l.07-4.69c0-1.05,1.54-1.91,3.39-1.91l17.43,0c1.85,0,3.35.85,3.33,1.91l-.07,4.69C299.17,288.75,297.65,289.6,295.79,289.61Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown21">
        <path
          id="ADULT_DENT_Endo_Crown1_21"
          v-if="selectedTooth.endo_crown.crown1"
          d="M296.37,258.19l-14.43-2.58a79.55,79.55,0,0,0-7.82,1.64,67.63,67.63,0,0,0-7.78,2.56l-5.94,2c-.85.08-1.47.45-1.52.85s.45.68.53.72h47.7a1.68,1.68,0,0,0,1-.46c.26-.37-.09-.86-.91-1.11l-2.14-1.19c-1.18-.4-2.45-.8-3.81-1.19C299.55,259,297.91,258.55,296.37,258.19Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_21"
          v-if="selectedTooth.endo_crown.crown2"
          d="M274.56,270.39l18.6-.23,2.9-6.18c.07-.15-.13-.3-.41-.3H271.4c-.28,0-.48.15-.4.3Z"
          transform="translate(-254.24 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.75"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical21"
        v-if="selectedTooth.periapical.periapical1"
        d="M289,323.3c.49-.07,1.24,1.53,3.51,3.92,1.87,2,1.85,1.4,5.1,4.43a26.77,26.77,0,0,0,5,3.48,4.26,4.26,0,0,0,2.38.63,2.46,2.46,0,0,0,1.59-.69c.53-.64-.13-1.38-.46-1.78-1.09-1.31-1.42-2.78-2.15-4.17a38.44,38.44,0,0,1-1.47-4.3c-1.24-3.8-1.48-4.55-1.13-4.62.51-.1,1.95,1.29,2.83,2.4,1.29,1.62,1.33,2.55,2,4.31,1.3,3.2,2.36,3,3,5.44.51,1.83,1.11,4-1.12,5.06a10.25,10.25,0,0,1-5.66.44c-2.27-.42-2.55-1.28-6.45-4.3-3.42-2.64-4.41-2.92-5.55-4.56a9.23,9.23,0,0,1-1.36-3C289.1,325.74,288.47,323.38,289,323.3Z"
        transform="translate(-254.24 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer21"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M296.53,258.28l-14.43-2.59a79.82,79.82,0,0,0-7.82,1.65,67.81,67.81,0,0,0-7.78,2.55l-5.94,2.05c-.85.08-1.47.44-1.52.85s.45.68.53.72h47.7c.1,0,.76-.13,1-.47s-.09-.86-.91-1.1l-2.14-1.2c-1.18-.39-2.45-.79-3.81-1.19C299.71,259.06,298.07,258.64,296.53,258.28Z"
        transform="translate(-254.24 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.75"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer21"
        v-if="selectedTooth.crown.onlay"
        d="M296.53,258.28l-14.43-2.59a79.82,79.82,0,0,0-7.82,1.65,67.81,67.81,0,0,0-7.78,2.55l-5.94,2.05c-.85.08-1.47.44-1.52.85s.45.68.53.72h47.7c.1,0,.76-.13,1-.47s-.09-.86-.91-1.1l-2.14-1.2c-1.18-.39-2.45-.79-3.81-1.19C299.71,259.06,298.07,258.64,296.53,258.28Z"
        transform="translate(-254.24 -226.77)"
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