<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15  57.54 113.67"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_23_all">
      <g id="adult_dent_23">
        <path
          id="adult_dent_23_crown"
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
          d="M257.89,253.26c3.05-1.38,7.89-1.22,16.48-.93,10.06.34,11.32,1.74,19.87,1.75,9.63,0,13.16-1.76,16-.58,2,.81,1.72,2.27-.73,9.32-1.81,5.22-2.72,7.82-3.64,9.79-3.29,7.06-5,10.61-9.2,12.12-5.87,2.12-13.51,1.76-16.24,1.64-2.46-.12-9.39-.45-14.05-2.69-5.19-2.49-3.79-5.57-4.6-11.53C260.15,260.19,252.29,255.81,257.89,253.26Z"
          transform="translate(-254.84 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
        <path
          id="adult_dent_23_root"
          v-if="selectedTooth.dent.root1"
          d="M266.86,285.67c-4.11,1.22-2.31,5.7.72,14.33,5.68,16.14,4.26,14.33,5.58,16.44,7.87,12.66,24,21.82,25.44,21.44.72-.19-2.78-2.72-5.09-7.46-1.74-3.56-1.73-6.16-.49-15.5,1.52-11.39,2.28-17.09,2.91-18.65,2.24-5.51,5.24-9.53,1.94-10.6-2.37-.77-5.14.91-12.36,1.28C275.16,287.48,270.65,284.54,266.86,285.67Z"
          transform="translate(-254.84 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial23"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M274.14,271.93h-11l-.75-3.64-4.76-11.36c-1.05-1-.91-2.1.37-2.92a9.23,9.23,0,0,1,4.11-1c1.3-.1,2.7-.17,4.2-.22,2.73-.09,5.2,0,7.37,0a12.1,12.1,0,0,1,4,.72,4.55,4.55,0,0,1,1.87,1.22v14.59C279.55,270.76,277.13,271.93,274.14,271.93Z"
        transform="translate(-254.84 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal23"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M293.69,254.76c1.92-.48,3.11.28,7.44-.31.71-.1,2.72-.39,5.52-.61a7.1,7.1,0,0,1,3,.1,1.18,1.18,0,0,1,.64,1.64c-.88,3.13-1.32,4.7-1.49,5.1-1.2,2.87-.39,2.82-1.7,5.42-.88,1.76-1.23,1.74-1.76,3.17-.74,2-.32,2.78-1.64,3.27-1.48.55-3.81.22-6.15-.11a22.3,22.3,0,0,1-6.16-1.53c-2.77-1.37-1.59-3-.64-9.09C291.45,257.14,291.17,255.39,293.69,254.76Z"
        transform="translate(-254.84 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V23"
        v-if="selectedTooth.filling_caries_class_v"
        x="18.88"
        y="52.3"
        width="20.01"
        height="2.69"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal23"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M302.34,268.63h-5.73c-2,0-3.57-.88-3.57-2v-1.09c0-1.09,1.6-2,3.57-2h5.73l5.19,1.16-1.58,3Z"
        transform="translate(-254.84 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial23"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M270.88,268.63h-3.83l-5.05-.91h0l-1.1-3.27,6.15-.86h3.83c2.25,0,4.07.88,4.07,2v1.13C275,267.76,273.13,268.63,270.88,268.63Z"
        transform="translate(-254.84 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo23"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M272.12,286.41c1.48-.25,3.08.88,8.33,1.06,6.65.23,9.55-1.4,11.82-.85,4.53,1.1-.08,9.18-2.19,14.34-6.53,16,2,26.41-.65,26.66C284.31,328.08,263.9,287.85,272.12,286.41Z"
        transform="translate(-254.84 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.56"
      />
      <g id="ADULT_DENT_Post23" v-if="selectedTooth.post.post1">
        <path
          d="M291.68,285.52l-17.75.44c-.66,0-1.2-.29-1.2-.69l-.05-2.89c0-.41.52-.74,1.18-.76l17.75-.44c.66,0,1.2.29,1.2.69l.05,2.89C292.86,285.17,292.34,285.51,291.68,285.52Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M284.33,320l-2.24.05c-1.16,0-2.12-.52-2.13-1.23l-.49-32.39c0-.72.93-1.32,2.09-1.35l2.24-.05c1.17,0,2.12.52,2.13,1.24l.49,32.38C286.43,319.36,285.5,320,284.33,320Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.83,292.51l-12.15.3c-.33,0-.59-.15-.59-.34l0-.93c0-.2.26-.37.58-.38l12.15-.3c.32,0,.59.15.59.34v.93C289.41,292.33,289.15,292.5,288.83,292.51Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M289.09,297.44l-12.22.3c-.3,0-.55-.13-.55-.32l0-1c0-.19.24-.34.55-.35l12.22-.31c.3,0,.55.14.55.32l0,1C289.64,297.28,289.4,297.43,289.09,297.44Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M289,302.38l-12.12.3c-.33,0-.6-.15-.6-.35l0-.91c0-.2.26-.37.59-.38l12.13-.3c.33,0,.6.14.6.34V302C289.56,302.2,289.29,302.37,289,302.38Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M289.25,307.31l-12.24.31c-.29,0-.54-.14-.54-.32l0-1c0-.18.24-.33.54-.34l12.24-.3c.3,0,.54.13.54.31l0,1C289.79,307.15,289.55,307.3,289.25,307.31Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M289.34,312.25l-12.27.3c-.29,0-.52-.13-.53-.3v-1c0-.17.23-.32.52-.33l12.19-.31c.33,0,.6.15.61.36v1C289.86,312.09,289.63,312.24,289.34,312.25Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M289.19,317.19l-12.13.3c-.33,0-.59-.14-.6-.34v-.93c0-.2.26-.36.59-.37l12.13-.31c.33,0,.59.15.6.35v.92C289.78,317,289.52,317.18,289.19,317.19Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.87"
          y1="85.37"
          x2="21.85"
          y2="90.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.78"
          y1="83.91"
          x2="21.76"
          y2="89.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.85"
          y1="80.39"
          x2="21.91"
          y2="85.72"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.76"
          y1="79.01"
          x2="21.87"
          y2="84.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.5"
          y1="75.52"
          x2="21.83"
          y2="80.78"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.49"
          y1="74.04"
          x2="21.76"
          y2="79.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.66"
          y1="70.54"
          x2="21.56"
          y2="75.8"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.57"
          y1="69.09"
          x2="21.61"
          y2="74.36"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.39"
          y1="65.63"
          x2="21.69"
          y2="70.9"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="34.33"
          y1="64.16"
          x2="21.7"
          y2="69.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M276.31,315.69"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M288.75,282.12l-12.09.3c-1.29,0-2.35-.58-2.36-1.36l-.05-3.51c0-.79,1-1.45,2.31-1.48l12.1-.31c1.28,0,2.34.58,2.35,1.37l.05,3.51C291.08,281.42,290,282.09,288.75,282.12Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_gingivitis23">
        <path
          id="ADULT_DENT_Right_gingivitis23"
          v-if="selectedTooth.gingivitis.right"
          d="M303.85,279.4c-1,.16-.31,1.11-1.87,2.6-1.76,1.69-4.7,2.48-4.14,3,.3.28,1.23.11,2.07.5a1.36,1.36,0,0,1,.83,1.5,7.28,7.28,0,0,1-.62,3.19A36.24,36.24,0,0,0,296.8,297c-1,3.18.52,3-.62,6.39-1,2.82-2.38,3.8-1,4.69,1.78,1.19,7.3,1.43,10.16.3,3.92-1.55-.18-4.46.42-10.08.8-7.42,8.73-9.65,5.19-14.57C309.19,281.31,305.4,279.16,303.85,279.4Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_gingivitis23"
          v-if="selectedTooth.gingivitis.left"
          d="M260.9,278.31c.83.08-.7,2.12,1.87,4,1.83,1.33,4.74,1.86,4.36,2.49-.23.39-1.36.32-2.49.8a2.5,2.5,0,0,0-1.66,2.6c0,3,1.48,6.36,2.28,8.48,1.3,3.41.6,2.9,1.66,5.19,1.7,3.68,3.56,5.16,2.08,5.89s-5.58.45-8.1-.6c-4.25-1.78-1-4.59-2.07-10.68-1-5.8-4.55-6.52-3.53-11.08C256.22,281.34,259.85,278.2,260.9,278.31Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_periodontal23"
          v-if="selectedTooth.periodontal.right"
          d="M303.85,279.4c-1,.16-.31,1.11-1.87,2.6-1.76,1.69-4.7,2.48-4.14,3,.3.28,1.23.11,2.07.5a1.36,1.36,0,0,1,.83,1.5,7.28,7.28,0,0,1-.62,3.19A36.24,36.24,0,0,0,296.8,297c-1,3.18.52,3-.62,6.39-1,2.82-2.38,3.8-1,4.69,1.78,1.19,7.3,1.43,10.16.3,3.92-1.55-.18-4.46.42-10.08.8-7.42,8.73-9.65,5.19-14.57C309.19,281.31,305.4,279.16,303.85,279.4Z"
          transform="translate(-254.84 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_periodontal23"
          v-if="selectedTooth.periodontal.left"
          d="M260.9,278.31c.83.08-.7,2.12,1.87,4,1.83,1.33,4.74,1.86,4.36,2.49-.23.39-1.36.32-2.49.8a2.5,2.5,0,0,0-1.66,2.6c0,3,1.48,6.36,2.28,8.48,1.3,3.41.6,2.9,1.66,5.19,1.7,3.68,3.56,5.16,2.08,5.89s-5.58.45-8.1-.6c-4.25-1.78-1-4.59-2.07-10.68-1-5.8-4.55-6.52-3.53-11.08C256.22,281.34,259.85,278.2,260.9,278.31Z"
          transform="translate(-254.84 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_perio23"
          v-if="selectedTooth.perio.right"
          d="M303.85,279.4c-1,.16-.31,1.11-1.87,2.6-1.76,1.69-4.7,2.48-4.14,3,.3.28,1.23.11,2.07.5a1.36,1.36,0,0,1,.83,1.5,7.28,7.28,0,0,1-.62,3.19A36.24,36.24,0,0,0,296.8,297c-1,3.18.52,3-.62,6.39-1,2.82-2.38,3.8-1,4.69,1.78,1.19,7.3,1.43,10.16.3,3.92-1.55-.18-4.46.42-10.08.8-7.42,8.73-9.65,5.19-14.57C309.19,281.31,305.4,279.16,303.85,279.4Z"
          transform="translate(-254.84 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_perio23"
          v-if="selectedTooth.perio.left"
          d="M260.9,278.31c.83.08-.7,2.12,1.87,4,1.83,1.33,4.74,1.86,4.36,2.49-.23.39-1.36.32-2.49.8a2.5,2.5,0,0,0-1.66,2.6c0,3,1.48,6.36,2.28,8.48,1.3,3.41.6,2.9,1.66,5.19,1.7,3.68,3.56,5.16,2.08,5.89s-5.58.45-8.1-.6c-4.25-1.78-1-4.59-2.07-10.68-1-5.8-4.55-6.52-3.53-11.08C256.22,281.34,259.85,278.2,260.9,278.31Z"
          transform="translate(-254.84 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_Implant23" v-if="selectedTooth.implant">
        <path
          d="M296.81,288.33l-32.72,0c-1.21,0-2.18-.39-2.17-.87l.07-3.45c0-.48,1-.87,2.21-.88l32.72,0c1.22,0,2.19.39,2.18.87l-.07,3.46C299,287.94,298,288.33,296.81,288.33Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M281.45,329.31h-4.13c-2.15,0-3.87-.69-3.85-1.54l.81-38.72c0-.85,1.77-1.54,3.92-1.54h4.13c2.15,0,3.87.69,3.85,1.54l-.81,38.72C285.35,328.62,283.6,329.31,281.45,329.31Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M291.19,296.6l-22.39,0c-.6,0-1.08-.19-1.07-.43l0-1.11c0-.24.49-.43,1.09-.43l22.39,0c.59,0,1.07.19,1.07.43l0,1.11C292.27,296.41,291.78,296.6,291.19,296.6Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M291.42,302.5l-22.53,0c-.56,0-1-.18-1-.4l0-1.17c0-.22.46-.4,1-.4l22.53,0c.56,0,1,.18,1,.4l0,1.17C292.43,302.32,292,302.5,291.42,302.5Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M290.92,308.4l-22.35,0c-.61,0-1.1-.19-1.09-.43l0-1.1c0-.24.5-.44,1.11-.44l22.35,0c.61,0,1.1.2,1.09.44l0,1.09C292,308.21,291.53,308.4,290.92,308.4Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M291.19,314.3l-22.56,0c-.55,0-1-.17-1-.39l0-1.18c0-.22.45-.4,1-.4l22.56,0c.55,0,1,.17,1,.39l0,1.18C292.19,314.13,291.74,314.3,291.19,314.3Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M291.09,320.2l-22.62,0c-.53,0-1-.17-1-.38l0-1.2c0-.21.44-.38,1-.38l22.47,0c.61,0,1.11.19,1.1.44l0,1.14C292.06,320,291.63,320.2,291.09,320.2Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M290.55,326.11l-22.36,0c-.6,0-1.09-.19-1.08-.43l0-1.1c0-.24.5-.43,1.1-.43l22.37,0c.6,0,1.08.19,1.08.43l0,1.1C291.65,325.91,291.16,326.11,290.55,326.11Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="36.93"
          y1="93.32"
          x2="12.67"
          y2="99.27"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="36.85"
          y1="91.57"
          x2="12.59"
          y2="97.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="37.15"
          y1="87.36"
          x2="13.04"
          y2="93.37"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="37.06"
          y1="85.71"
          x2="13.04"
          y2="91.6"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="36.77"
          y1="81.53"
          x2="13.16"
          y2="87.47"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="36.84"
          y1="79.77"
          x2="13.11"
          y2="85.72"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="37.34"
          y1="75.59"
          x2="12.92"
          y2="81.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="37.25"
          y1="73.85"
          x2="13.09"
          y2="79.79"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="37.1"
          y1="69.71"
          x2="13.42"
          y2="75.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="37.07"
          y1="67.96"
          x2="13.53"
          y2="73.86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M266.91,324"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M291.61,284.19l-22.3,0c-2.38,0-4.28-.75-4.26-1.7l.08-4.19c0-.94,2-1.7,4.34-1.71l22.3,0c2.37,0,4.28.75,4.26,1.7l-.09,4.19C295.92,283.42,294,284.18,291.61,284.19Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown23">
        <path
          id="ADULT_DENT_Endo_Crown1_23"
          v-if="selectedTooth.endo_crown.crown1"
          d="M270.53,252.75l-9.56.38c-2.15.47-2.82,1-3.05,1.39s-.07.78.2,1.69a10.8,10.8,0,0,1,.43,2.13,3.65,3.65,0,0,0,1,1.16,6.49,6.49,0,0,0,1,.67h9.94c1.51,0,2.74-.59,2.74-1.32v-4.78C273.27,253.34,272,252.75,270.53,252.75Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_23"
          v-if="selectedTooth.endo_crown.crown1"
          d="M307,260.17h-8.59c-1.57,0-2.83-.61-2.83-1.36v-3.47a2.77,2.77,0,0,1,1.15-.63,6.46,6.46,0,0,1,2.14-.28L307,254c1.56,0,2.83.61,2.83,1.36-.24,1.14-.48,2.27-.71,3.41a1.41,1.41,0,0,1-.71.89A4.4,4.4,0,0,1,307,260.17Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical23"
        v-if="selectedTooth.periapical.periapical1"
        d="M293.94,318.15c-.3,0-.24.64-.35,3.44a30.15,30.15,0,0,0-.12,3.84,12.78,12.78,0,0,0,.82,3.73,18.41,18.41,0,0,0,2.11,3.73c1.44,2.16,2.16,3.24,2.7,3.56.2.11.92.52.94,1.07a.82.82,0,0,1-.7.85,4.19,4.19,0,0,1-1.88-.11,5.27,5.27,0,0,1-2.23-1.08c-.62-.49.4.42-4.11-2.37-1.63-1-2.62-1.62-3.64-2.32a45.26,45.26,0,0,1-6.1-5c-3.6-3.52-4.83-5.55-5.29-5.48s.43,2.47,1.65,4.52a24.17,24.17,0,0,0,4.69,5.59,30.44,30.44,0,0,0,6.34,4.46c2.59,1.38,7.78,4.14,10.8,3.5,2.43-.51,2.5-3,2.23-4.23-.48-2.23-2.52-2.35-4.1-5.09a11.82,11.82,0,0,1-1.3-5.76,11.22,11.22,0,0,0-.35-3.39C295.53,319.9,294.45,318.11,293.94,318.15Z"
        transform="translate(-254.84 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.56"
      />
      <g id="ADULT_DENT_Occlusal_Veneer23">
        <path
          id="ADULT_DENT_Occlusal_Veneer23_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M270.69,252.82l-9.55.39c-2.15.46-2.82,1-3.06,1.38s-.07.78.21,1.7a12.35,12.35,0,0,1,.43,2.12,3.73,3.73,0,0,0,1,1.17,7.87,7.87,0,0,0,1,.67h9.94c1.52,0,2.75-.6,2.75-1.33v-4.78C273.44,253.41,272.21,252.82,270.69,252.82Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer23_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M307.14,260.25h-8.58c-1.57,0-2.84-.61-2.84-1.37v-3.46a2.93,2.93,0,0,1,1.16-.64,6.6,6.6,0,0,1,2.13-.27l8.13-.45c1.57,0,2.84.61,2.84,1.36l-.72,3.4a1.33,1.33,0,0,1-.71.89A4.64,4.64,0,0,1,307.14,260.25Z"
          transform="translate(-254.84 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer23">
        <path
          id="ADULT_DENT_Occlusal_Veneer23_2"
          v-if="selectedTooth.crown.onlay"
          d="M270.69,252.82l-9.55.39c-2.15.46-2.82,1-3.06,1.38s-.07.78.21,1.7a12.35,12.35,0,0,1,.43,2.12,3.73,3.73,0,0,0,1,1.17,7.87,7.87,0,0,0,1,.67h9.94c1.52,0,2.75-.6,2.75-1.33v-4.78C273.44,253.41,272.21,252.82,270.69,252.82Z"
          transform="translate(-254.84 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.68"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer23_1"
          v-if="selectedTooth.crown.onlay"
          d="M307.14,260.25h-8.58c-1.57,0-2.84-.61-2.84-1.37v-3.46a2.93,2.93,0,0,1,1.16-.64,6.6,6.6,0,0,1,2.13-.27l8.13-.45c1.57,0,2.84.61,2.84,1.36l-.72,3.4a1.33,1.33,0,0,1-.71.89A4.64,4.64,0,0,1,307.14,260.25Z"
          transform="translate(-254.84 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.68"
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