<template>
  <div  class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.98 113.65"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_9_all">
      <g id="adult_dent_9">
        <path
          id="adult_dent_9_root"
          v-if="selectedTooth.dent.root1"
          d="M298,229.79c-3.4-.74-12,8.38-13.12,9.53a60.54,60.54,0,0,0-8.14,11.26c-.53.86-1.87,3.09-5,9.27-7.32,14.53-7.22,16.74-5.2,17.74,1.53.77,3,.25,7.92.13,15.32-.35,22.8,4.19,26.69,2.12.56-.29,1.42-.92.23-8.07-.82-4.88-1.77-7.86-2.49-11.13a63.18,63.18,0,0,1-1.36-10.86C296.8,236.77,300.75,230.38,298,229.79Z"
          transform="translate(-254.62 -226.51)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
        <path
          id="adult_dent_9_crown"
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
          d="M265.18,278.92c-2.74,1.08-3.91,2.66-5.66,5-1.9,2.59-2.36,4.61-3.16,8.34a52.3,52.3,0,0,0-.91,10.46c-.17,6.49.3,7.41,1.6,8.09,2,1.08,5.42,1,12.2.79,6.42-.19,6.61-.72,10.64-.53,5.45.25,5.81,1.26,10.85,1.32,1.19,0,1.54,0,9.73-.93,7.91-.86,8.53-.91,9.39-1.35,2-1,2.26-2.55,1.7-8.31-.68-6.94-1.05-10.47-3-13.57-2-3.3-3.28-5.32-6.77-7-2.56-1.2-4.4-1.29-19-2.38C270.64,278,268.06,277.78,265.18,278.92Z"
          transform="translate(-254.62 -226.51)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial9"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M274.71,310.8l-12.55.3a7.56,7.56,0,0,1-3.75-.49,2.78,2.78,0,0,1-1.66-1.62v-8.26a40.25,40.25,0,0,1,.16-4.44c.25-2.84.49-2.12.47-3.35,0-.72-.11-1.16.37-1.59.85-.75,2.78-.86,4-.86h10.59c2.78,0,5,1.32,5,2.95V309a2.86,2.86,0,0,1-1.39,1.34A5.44,5.44,0,0,1,274.71,310.8Z"
        transform="translate(-254.62 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal9"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M308.54,290.29c-1-.53-2-.31-7.93-.18-6.86.15-7.18-.11-8.08.27-2.88,1.23-.37,4.15-.08,10.79.22,4.95-.88,10,1.25,10.32a10.23,10.23,0,0,0,1.86-.09c1.21-.1,1.52-.2,3.19-.41,1.07-.13,1.92-.21,2.56-.27,1.46-.14,1.54-.11,2.65-.23,1.34-.14,1.21-.17,2.56-.32a10.09,10.09,0,0,0,2.41-.31,2.68,2.68,0,0,0,1.32-1.1,2.83,2.83,0,0,0,.54-1.72,21,21,0,0,0-.15-3.42c-.19-1.58-.21-1.51-.31-2.5-.13-1.21-.12-1.51-.23-2.73-.09-.84-.16-1.4-.32-2.59C309.14,290.86,309.11,290.6,308.54,290.29Z"
        transform="translate(-254.62 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V9"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.35"
        y="59.05"
        width="17.13"
        height="2.8"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal9"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M310,299.15l-7.1.68c-1.92,0-3.48-.91-3.48-2v-1.18c0-1.12,1.56-2,3.48-2l6.85.81h0l-.09,1.22v1.18Z"
        transform="translate(-254.62 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial9"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M263.58,299.83l-6.71-.83h0l.38-3.34h0l6.33-1.08c1.93,0,3.48.91,3.48,2v1.18C267.06,298.92,265.51,299.83,263.58,299.83Z"
        transform="translate(-254.62 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo9"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M274.64,277a47.81,47.81,0,0,0,7.4,1c3.32.22,6.39.42,8.15,0,5.77-1.48,2.35-11.35,1.88-22.12-.64-14.47,4.43-21,2.41-21.34C289.52,233.62,265.59,274,274.64,277Z"
        transform="translate(-254.62 -226.51)"
  
        stroke-miterlimit="10"
        stroke-width="0.53"
      />
      <g id="ADULT_DENT_Post9" v-if="selectedTooth.post.post1">
        <path
          d="M274.44,278.61l17.22.94c.64,0,1.1.35,1,.7l-.45,2.52c-.06.35-.63.61-1.27.57l-17.22-.94c-.63,0-1.1-.35-1-.7l.45-2.52C273.23,278.83,273.8,278.57,274.44,278.61Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M287.39,249.09l2.17.12c1.13.06,2,.61,1.85,1.24l-5,28.29c-.11.62-1.11,1.07-2.24,1l-2.18-.12c-1.13-.06-1.95-.61-1.84-1.23l5-28.3C285.26,249.48,286.26,249,287.39,249.09Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M278.38,272.73l11.79.64c.31,0,.54.17.51.34l-.15.82c0,.17-.31.29-.62.28l-11.78-.65c-.32,0-.55-.17-.52-.34l.15-.81C277.79,272.83,278.07,272.71,278.38,272.73Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M279,268.4l11.86.65c.29,0,.5.16.48.32l-.16.86c0,.16-.29.27-.58.26l-11.86-.65c-.29,0-.5-.16-.47-.32l.15-.85C278.41,268.5,278.67,268.39,279,268.4Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M279.92,264.1l11.77.64c.32,0,.55.18.52.35l-.14.81c0,.17-.32.3-.64.28l-11.76-.64c-.32,0-.55-.18-.52-.35l.14-.8C279.32,264.21,279.61,264.08,279.92,264.1Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M280.48,259.78l11.88.65c.29,0,.5.15.47.31l-.15.87c0,.15-.29.27-.58.25l-11.87-.64c-.29,0-.5-.16-.47-.32l.15-.86C279.94,259.88,280.2,259.76,280.48,259.78Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M281.24,255.46l11.9.66c.28,0,.48.15.46.3l-.16.88c0,.16-.28.27-.56.25l-11.82-.64c-.33,0-.56-.18-.53-.36l.15-.83C280.71,255.56,281,255.45,281.24,255.46Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M282.22,251.16l11.77.65c.32,0,.55.17.52.35l-.14.8c0,.18-.32.3-.63.29L282,252.6c-.32,0-.55-.17-.52-.35l.14-.8C281.62,251.27,281.9,251.15,282.22,251.16Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="26.24"
          y1="29.02"
          x2="39.71"
          y2="25.39"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="26.08"
          y1="30.3"
          x2="39.55"
          y2="26.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="25.42"
          y1="33.37"
          x2="38.82"
          y2="29.69"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="25.27"
          y1="34.58"
          x2="38.61"
          y2="30.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="24.93"
          y1="37.65"
          x2="38.05"
          y2="34.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="24.68"
          y1="38.93"
          x2="37.88"
          y2="35.28"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="23.92"
          y1="41.97"
          x2="37.47"
          y2="38.37"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="23.76"
          y1="43.25"
          x2="37.18"
          y2="39.62"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="23.35"
          y1="46.28"
          x2="36.52"
          y2="42.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="23.16"
          y1="47.57"
          x2="36.25"
          y2="43.94"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M294.41,253.44"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M276.69,281.79l11.73.64c1.25.07,2.17.69,2,1.37l-.54,3.06c-.12.69-1.24,1.2-2.49,1.13l-11.73-.64c-1.25-.07-2.16-.69-2-1.37l.54-3.07C274.32,282.23,275.44,281.72,276.69,281.79Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
      </g>
      <g id="ADULT_DENT_gingivitis9">
        <path
          id="ADULT_DENT_Left_gingivitis9"
          v-if="selectedTooth.gingivitis.left"
          d="M258.22,284.11c.64-.05.4-1.07,1.88-2.62a9.9,9.9,0,0,1,2.74-2.11c1.46-.78,2.48-.94,2.59-1.52s-.56-.71-1-1.35c-.64-.93-.21-1.81.15-2.62,1.36-3.1-.65-.05,2-5.74,1.56-3.33,1.59-3,2.74-5.5,1.7-3.71,1.37-3.92,2.6-5.82,1.57-2.44,2.91-3.35,2.31-3.72-.9-.55-5.55.43-8.52,2.45-3.36,2.29-2,4.12-4.47,10.3a69.62,69.62,0,0,1-3.46,7c-1.88,3.39-3.21,5.22-2.46,7.77C255.88,282.49,257.37,284.18,258.22,284.11Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Right_gingivitis9"
          v-if="selectedTooth.gingivitis.right"
          d="M309.3,287.07c-.42,0-.56-.63-2.6-3s-2.59-2.65-3.17-2.88c-.84-.32-1.87-.53-1.88-.93s.57-.38,1-.76c.72-.61.33-1.33.15-2.19-.24-1.13.15-1.12.14-2.79,0-1.17-.2-1.77-.86-4.39-.57-2.23-.85-3.35-1-4.14-.71-3.45-.2-3.25-.87-5.74-.38-1.44-.53-2.89-1-4.31-.31-.9-.58-1.53-.14-1.69.71-.27,2.92.87,4.18,1.77,2.64,1.89,2.82,4,3.17,7.77.53,5.61.8,8.43,1,9.13,1.16,3.77,2.53,4.19,3,7.68C310.93,283.87,310.21,287,309.3,287.07Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Left_periodontal9"
          v-if="selectedTooth.periodontal.left"
          d="M258.22,284.11c.64-.05.4-1.07,1.88-2.62a9.9,9.9,0,0,1,2.74-2.11c1.46-.78,2.48-.94,2.59-1.52s-.56-.71-1-1.35c-.64-.93-.21-1.81.15-2.62,1.36-3.1-.65-.05,2-5.74,1.56-3.33,1.59-3,2.74-5.5,1.7-3.71,1.37-3.92,2.6-5.82,1.57-2.44,2.91-3.35,2.31-3.72-.9-.55-5.55.43-8.52,2.45-3.36,2.29-2,4.12-4.47,10.3a69.62,69.62,0,0,1-3.46,7c-1.88,3.39-3.21,5.22-2.46,7.77C255.88,282.49,257.37,284.18,258.22,284.11Z"
          transform="translate(-254.62 -226.51)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Right_periodontal9"
          v-if="selectedTooth.periodontal.right"
          d="M309.3,287.07c-.42,0-.56-.63-2.6-3s-2.59-2.65-3.17-2.88c-.84-.32-1.87-.53-1.88-.93s.57-.38,1-.76c.72-.61.33-1.33.15-2.19-.24-1.13.15-1.12.14-2.79,0-1.17-.2-1.77-.86-4.39-.57-2.23-.85-3.35-1-4.14-.71-3.45-.2-3.25-.87-5.74-.38-1.44-.53-2.89-1-4.31-.31-.9-.58-1.53-.14-1.69.71-.27,2.92.87,4.18,1.77,2.64,1.89,2.82,4,3.17,7.77.53,5.61.8,8.43,1,9.13,1.16,3.77,2.53,4.19,3,7.68C310.93,283.87,310.21,287,309.3,287.07Z"
          transform="translate(-254.62 -226.51)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Left_perio9"
          v-if="selectedTooth.perio.left"
          d="M258.22,284.11c.64-.05.4-1.07,1.88-2.62a9.9,9.9,0,0,1,2.74-2.11c1.46-.78,2.48-.94,2.59-1.52s-.56-.71-1-1.35c-.64-.93-.21-1.81.15-2.62,1.36-3.1-.65-.05,2-5.74,1.56-3.33,1.59-3,2.74-5.5,1.7-3.71,1.37-3.92,2.6-5.82,1.57-2.44,2.91-3.35,2.31-3.72-.9-.55-5.55.43-8.52,2.45-3.36,2.29-2,4.12-4.47,10.3a69.62,69.62,0,0,1-3.46,7c-1.88,3.39-3.21,5.22-2.46,7.77C255.88,282.49,257.37,284.18,258.22,284.11Z"
          transform="translate(-254.62 -226.51)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Right_perio9"
          v-if="selectedTooth.perio.right"
          d="M309.3,287.07c-.42,0-.56-.63-2.6-3s-2.59-2.65-3.17-2.88c-.84-.32-1.87-.53-1.88-.93s.57-.38,1-.76c.72-.61.33-1.33.15-2.19-.24-1.13.15-1.12.14-2.79,0-1.17-.2-1.77-.86-4.39-.57-2.23-.85-3.35-1-4.14-.71-3.45-.2-3.25-.87-5.74-.38-1.44-.53-2.89-1-4.31-.31-.9-.58-1.53-.14-1.69.71-.27,2.92.87,4.18,1.77,2.64,1.89,2.82,4,3.17,7.77.53,5.61.8,8.43,1,9.13,1.16,3.77,2.53,4.19,3,7.68C310.93,283.87,310.21,287,309.3,287.07Z"
          transform="translate(-254.62 -226.51)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
      </g>
      <g id="ADULT_DENT_Implant9" v-if="selectedTooth.implant">
        <path
          d="M266.25,273.41l30.06,0c1.11,0,2,.4,2,.91l-.1,3.59c0,.51-.93.91-2.05.91l-30,0c-1.11,0-2-.41-2-.91l.1-3.6C264.23,273.82,265.14,273.41,266.25,273.41Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M280.77,230.75h3.8c2,0,3.54.72,3.52,1.61L287,272.71c0,.88-1.65,1.6-3.62,1.6h-3.79c-2,0-3.55-.72-3.53-1.61l1.14-40.34C277.18,231.47,278.8,230.75,280.77,230.75Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M271.5,264.81l20.57,0c.55,0,1,.2,1,.45l0,1.16c0,.24-.45.44-1,.44l-20.56,0c-.55,0-1-.2-1-.44l0-1.16C270.51,265,271,264.81,271.5,264.81Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M271.35,258.66l20.69,0c.51,0,.92.19.92.42l0,1.22c0,.23-.43.41-.94.41l-20.69,0c-.51,0-.92-.18-.92-.41l0-1.22C270.41,258.85,270.83,258.66,271.35,258.66Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M271.87,252.52l20.53,0c.55,0,1,.21,1,.46l0,1.14c0,.25-.46.45-1,.45l-20.53,0c-.56,0-1-.21-1-.46l0-1.14C270.85,252.72,271.31,252.52,271.87,252.52Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M271.68,246.37l20.72,0c.5,0,.91.18.9.41l0,1.23c0,.22-.42.41-.93.41l-20.72,0c-.5,0-.91-.19-.9-.41l0-1.23C270.76,246.55,271.17,246.37,271.68,246.37Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M271.82,240.22l20.78,0c.49,0,.88.18.87.4l0,1.25c0,.22-.41.4-.9.4l-20.64,0c-.56,0-1-.21-1-.46l0-1.19C270.93,240.4,271.33,240.22,271.82,240.22Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.38,234.07l20.54,0c.55,0,1,.2,1,.45l0,1.15c0,.25-.46.45-1,.45l-20.54,0c-.55,0-1-.2-1-.45l0-1.15C271.37,234.27,271.82,234.07,272.38,234.07Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.58"
          y1="13.83"
          x2="38.92"
          y2="7.69"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.64"
          y1="15.65"
          x2="38.98"
          y2="9.5"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.32"
          y1="20.03"
          x2="38.53"
          y2="13.83"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.38"
          y1="21.76"
          x2="38.5"
          y2="15.68"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.61"
          y1="26.11"
          x2="38.35"
          y2="19.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.53"
          y1="27.94"
          x2="38.39"
          y2="21.8"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.03"
          y1="32.3"
          x2="38.51"
          y2="26.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.1"
          y1="34.11"
          x2="38.34"
          y2="27.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.19"
          y1="38.43"
          x2="38"
          y2="32.28"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="16.2"
          y1="40.25"
          x2="37.88"
          y2="34.16"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M294.07,236.37"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M271,277.75l20.49,0c2.18,0,3.92.8,3.89,1.79l-.12,4.36c0,1-1.82,1.78-4,1.77l-20.48,0c-2.18,0-3.92-.8-3.9-1.78l.13-4.36C267,278.54,268.81,277.74,271,277.75Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown9">
        <path
          id="ADULT_DENT_Endo_Crown1_9"
          v-if="selectedTooth.endo_crown.crown1"
          d="M266.21,310.83l-5.25.05a4.14,4.14,0,0,1-3.17-.92,1.21,1.21,0,0,1-.31-1.2q-.36-3-.7-5.95c0-.75,1-1.36,2.2-1.36h14.23c1.22,0,2.2.61,2.2,1.36v6.46a1.22,1.22,0,0,1-.41.73,5.16,5.16,0,0,1-2.91.73C270.67,310.82,268.69,310.9,266.21,310.83Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_9"
          v-if="selectedTooth.endo_crown.crown2"
          d="M296.63,311l9.92-.91a5.81,5.81,0,0,0,2.22-.79,2.47,2.47,0,0,0,1-1.21c.19-1.72.37-3.43.56-5.15,0-.8-1.1-1.44-2.46-1.44H296.63c-1.36,0-2.46.64-2.46,1.44v6.61C294.17,310.3,295.27,311,296.63,311Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical9"
        v-if="selectedTooth.periapical.periapical1"
        d="M280.21,243.15c.58.1,1.8-2,5.63-6,2.26-2.35,1.43-1.2,4.33-4.06a17.55,17.55,0,0,1,4.92-3.48,5.26,5.26,0,0,1,2.82-.64,3.27,3.27,0,0,1,1.91.82,1.49,1.49,0,0,1,.4,1.53c-.43,1.7-.4,3.42-.81,5.12-.47,2,0,1.5-.6,6.12-.3,2.34-.51,3.09-.3,3.12.43,0,2.16-3.14,3.12-6.36a34.54,34.54,0,0,0,.8-6.41c.15-1.85.17-3-1-4.3a5.28,5.28,0,0,0-3.41-1.82c-.6-.06-1.88-.07-5.23,1.71a32.9,32.9,0,0,0-6.53,4.59,30.51,30.51,0,0,0-3.55,3.74,13.4,13.4,0,0,0-1.88,2.85C280.19,241.05,279.67,243.05,280.21,243.15Z"
        transform="translate(-254.62 -226.51)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.53"
      />
      <g id="ADULT_DENT_Occlusal_Veneer9">
        <path
          id="ADULT_DENT_Occlusal_Veneer9_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M266.35,310.91l-5.25,0a4.1,4.1,0,0,1-3.17-.91,1.26,1.26,0,0,1-.31-1.2q-.35-3-.7-5.95c0-.75,1-1.36,2.2-1.36h14.24c1.21,0,2.19.61,2.19,1.36v6.46a1.17,1.17,0,0,1-.41.72,5.05,5.05,0,0,1-2.91.74C270.82,310.9,268.83,311,266.35,310.91Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer9_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M296.77,311l9.92-.91a5.93,5.93,0,0,0,2.22-.79,2.51,2.51,0,0,0,1-1.21c.18-1.72.37-3.43.55-5.15,0-.8-1.1-1.44-2.46-1.44H296.77c-1.35,0-2.46.64-2.46,1.44v6.61C294.31,310.38,295.42,311,296.77,311Z"
          transform="translate(-254.62 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer9">
        <path
          id="ADULT_DENT_Occlusal_Veneer9_2"
          v-if="selectedTooth.crown.onlay"
          d="M266.35,310.91l-5.25,0a4.1,4.1,0,0,1-3.17-.91,1.26,1.26,0,0,1-.31-1.2q-.35-3-.7-5.95c0-.75,1-1.36,2.2-1.36h14.24c1.21,0,2.19.61,2.19,1.36v6.46a1.17,1.17,0,0,1-.41.72,5.05,5.05,0,0,1-2.91.74C270.82,310.9,268.83,311,266.35,310.91Z"
          transform="translate(-254.62 -226.51)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.59"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer9_1"
          v-if="selectedTooth.crown.onlay"
          d="M296.77,311l9.92-.91a5.93,5.93,0,0,0,2.22-.79,2.51,2.51,0,0,0,1-1.21c.18-1.72.37-3.43.55-5.15,0-.8-1.1-1.44-2.46-1.44H296.77c-1.35,0-2.46.64-2.46,1.44v6.61C294.31,310.38,295.42,311,296.77,311Z"
          transform="translate(-254.62 -226.51)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.59"
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