<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57 113.69"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_10_all">
      <g id="adult_dent_10">
        <path
          id="adult_dent_10_root"
          v-if="selectedTooth.dent.root1"
          d="M298.77,232.44c-1.11-.14-3,2.71-10.36,11.61-5,6.06-6,6.91-7,9.23-2.06,4.68,0,5.24-1.39,9.66-2.63,8.35-12.07,13-9,14.54,1.38.67,3.12-.3,9.51,0a64.14,64.14,0,0,1,11.76,1.68c5.46,1.33,6.93,2.6,8.67,2.24,2.31-.47,2.14-3.16,2-5.31-.64-7.92-1-11.87-1.31-13.14-2.23-8.23-4.15-15.3-3.16-23.66C298.94,235.46,299.86,232.57,298.77,232.44Z"
          transform="translate(-255.12 -226.47)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
        <path
          id="adult_dent_10_crown"
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
          d="M270.78,278.88c-3.21,1-4.61,3-7.28,6.86a34.16,34.16,0,0,0-3.63,6.71c-3.12,7.66-4.67,11.49-.84,13.57,2.08,1.14,4.83,1.36,10.35,1.82,7.24.6,9-.35,21.27-.56,7-.12,8.26.16,10.35-.56,4-1.38,4.53-4.21,5-7.13.44-2.54-.35-5.13-2-10.21s-2.3-5.86-3.08-6.44c-4.12-3.06-11.44-3.89-15.39-4.34C280.72,278.05,275.28,277.44,270.78,278.88Z"
          transform="translate(-255.12 -226.47)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial10"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M270.35,307.25l-7-.75a9.21,9.21,0,0,1-4.41-1.8,3,3,0,0,1-.81-2.08,5.9,5.9,0,0,1,.23-2.44l1.86-6a34,34,0,0,1,2.43-5.05c.23-.38.46-.76.7-1.14h9.8c2.87,0,5.2,1.17,5.2,2.6v14a2.57,2.57,0,0,1-1.53,1.84A11.36,11.36,0,0,1,270.35,307.25Z"
        transform="translate(-255.12 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal10"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M302.55,288.54c-.82-.49-2.36-.24-5.58-.24-5.68,0-6-.05-6.63.15-1.95.61-1.47,2-1.54,5.72-.06,3.22.68,6.46-.1,9.66-.13.55-.56,2.16,1,2.64a11.73,11.73,0,0,0,2.5.14c1.45,0,1.8,0,3.94,0a21,21,0,0,0,2.88-.1,10.16,10.16,0,0,0,2.31-.67c2.71-1.2,3.31-4.32,3.46-5.72a14.11,14.11,0,0,0-.29-4.37c-.18-1-.32-1.15-.86-3.51-.17-.74-.46-1.47-.58-2.21C302.87,289,303,288.79,302.55,288.54Z"
        transform="translate(-255.12 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V10"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.29"
        y="56.72"
        width="21.19"
        height="2.96"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal10"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M304.72,297.1l-8.79.8c-2.38,0-4.31-1-4.31-2.16V294.5c0-1.19,1.93-2.15,4.31-2.15l7.52.87h0C303.87,294.52,304.29,295.81,304.72,297.1Z"
        transform="translate(-255.12 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial10"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M269.13,297.9,260,296.15h0c.25-.55.5-1.1.74-1.65l.53-1.69h0l7.84-.46c2.37,0,4.3,1,4.3,2.15v1.24C273.43,296.93,271.5,297.9,269.13,297.9Z"
        transform="translate(-255.12 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo10"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M294.06,240.45c-1.36-.09-4.35,7.38-5.64,10.6-3.59,9-2,8.58-4.64,13.92-3,5.94-7,10.56-4,11.61,1.21.42,2.46-.12,6,.33,4.24.53,5.18,1.66,6.63,1.49,3-.36,2.87-5.57,2.65-11.6-.3-8.24-.57-10.14-.66-14.09C294.19,244.5,295,240.51,294.06,240.45Z"
        transform="translate(-255.12 -226.47)"
        stroke-miterlimit="10"
        stroke-width="0.6"
      />
      <g id="ADULT_DENT_Post10" v-if="selectedTooth.post.post1">
        <path
          d="M281.13,278.8l13.27,1c.49,0,.85.37.8.74l-.34,2.67a.86.86,0,0,1-1,.6l-13.27-1c-.49,0-.85-.37-.8-.74l.34-2.67A.86.86,0,0,1,281.13,278.8Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M291.11,247.61l1.68.13c.87.07,1.5.65,1.42,1.31l-3.88,29.89A1.53,1.53,0,0,1,288.6,280l-1.67-.13c-.87-.06-1.51-.65-1.42-1.31l3.87-29.88A1.54,1.54,0,0,1,291.11,247.61Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M284.17,272.58l9.08.68c.24,0,.42.19.39.37l-.11.86a.41.41,0,0,1-.48.29L284,274.1c-.24,0-.42-.18-.39-.36l.11-.86C283.71,272.7,283.93,272.57,284.17,272.58Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M284.62,268l9.13.68c.23,0,.39.17.37.34l-.12.9a.39.39,0,0,1-.45.28l-9.13-.68c-.23,0-.39-.17-.37-.34l.12-.9A.39.39,0,0,1,284.62,268Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M285.36,263.47l9.06.68c.25,0,.43.19.41.37l-.11.85a.44.44,0,0,1-.49.3l-9.07-.68c-.24,0-.42-.18-.4-.37l.11-.84C284.89,263.59,285.11,263.46,285.36,263.47Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M285.79,258.91l9.15.68c.22,0,.38.17.36.34l-.12.91a.37.37,0,0,1-.44.27l-9.15-.68c-.22,0-.38-.17-.36-.34l.12-.91A.38.38,0,0,1,285.79,258.91Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M286.37,254.35l9.17.69c.22,0,.38.16.35.32l-.12.93a.39.39,0,0,1-.43.27l-9.11-.69c-.25,0-.43-.18-.41-.37l.12-.88A.37.37,0,0,1,286.37,254.35Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M287.13,249.81l9.07.68c.24,0,.42.18.4.37l-.11.85a.45.45,0,0,1-.49.3l-9.07-.68c-.24,0-.42-.19-.4-.37l.11-.85A.43.43,0,0,1,287.13,249.81Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="30.97"
          y1="27.95"
          x2="41.35"
          y2="24.11"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="30.84"
          y1="29.3"
          x2="41.22"
          y2="25.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="30.33"
          y1="32.54"
          x2="40.66"
          y2="28.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="30.22"
          y1="33.82"
          x2="40.5"
          y2="30.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="29.95"
          y1="37.06"
          x2="40.07"
          y2="33.21"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="29.77"
          y1="38.42"
          x2="39.93"
          y2="34.56"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="29.18"
          y1="41.63"
          x2="39.62"
          y2="37.82"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="29.06"
          y1="42.98"
          x2="39.39"
          y2="39.15"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="28.74"
          y1="46.18"
          x2="38.89"
          y2="42.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="28.59"
          y1="47.54"
          x2="38.68"
          y2="43.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M296.52,252.21"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M282.86,282.16l9.05.68c1,.07,1.66.72,1.57,1.45l-.42,3.23a1.68,1.68,0,0,1-1.91,1.19l-9-.68c-1-.07-1.66-.72-1.57-1.45l.42-3.23A1.68,1.68,0,0,1,282.86,282.16Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
      </g>
      <g id="ADULT_DENT_gingivitis10">
        <path
          id="ADULT_DENT_Left_gingivitis10"
          v-if="selectedTooth.gingivitis.left"
          d="M264.19,282.81c1-.11.11-1.55,2.32-2.86,1.76-1,4.16-1.21,4.1-1.87,0-.4-.93-.44-1.43-1-.7-.78.26-1.66,1.25-2.68s2-2.27,3-3.39c1.66-1.77,1-1.52,3.93-5.26,1.93-2.51,2.54-3,2-3.84-.76-1-3.15-1.94-5.18-1.79-3.4.26-4.95,3.44-6.07,5.72-2.11,4.32.05,5-2.32,7.67s-5.59,3.09-5.71,5.26S263,282.94,264.19,282.81Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Right_gingivitis10"
          v-if="selectedTooth.gingivitis.right"
          d="M304.35,285.66c-.84-.25.25-1.19-1.07-2.4-.76-.7-1.61-.84-1.61-1.34s1.3-.95,2.14-1.43c1.81-1,1-2.51.54-4.55-.67-2.84.39-2-.18-6.78-.36-3-.54-4.52-1.07-5.62s-1.1-1.87-.54-2.06c.85-.28,3.92.89,5.72,2.32s1.6,2.58,2,5.8c.27,2.44.23.29,1.25,7.77.48,3.49.56,4.48-.71,5.71C309,284.83,305.46,286,304.35,285.66Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Left_periodontal10"
          v-if="selectedTooth.periodontal.left"
          d="M264.19,282.81c1-.11.11-1.55,2.32-2.86,1.76-1,4.16-1.21,4.1-1.87,0-.4-.93-.44-1.43-1-.7-.78.26-1.66,1.25-2.68s2-2.27,3-3.39c1.66-1.77,1-1.52,3.93-5.26,1.93-2.51,2.54-3,2-3.84-.76-1-3.15-1.94-5.18-1.79-3.4.26-4.95,3.44-6.07,5.72-2.11,4.32.05,5-2.32,7.67s-5.59,3.09-5.71,5.26S263,282.94,264.19,282.81Z"
          transform="translate(-255.12 -226.47)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Right_periodontal10"
          v-if="selectedTooth.periodontal.right"
          d="M304.35,285.66c-.84-.25.25-1.19-1.07-2.4-.76-.7-1.61-.84-1.61-1.34s1.3-.95,2.14-1.43c1.81-1,1-2.51.54-4.55-.67-2.84.39-2-.18-6.78-.36-3-.54-4.52-1.07-5.62s-1.1-1.87-.54-2.06c.85-.28,3.92.89,5.72,2.32s1.6,2.58,2,5.8c.27,2.44.23.29,1.25,7.77.48,3.49.56,4.48-.71,5.71C309,284.83,305.46,286,304.35,285.66Z"
          transform="translate(-255.12 -226.47)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Left_perio10"
          v-if="selectedTooth.perio.left"
          d="M264.19,282.81c1-.11.11-1.55,2.32-2.86,1.76-1,4.16-1.21,4.1-1.87,0-.4-.93-.44-1.43-1-.7-.78.26-1.66,1.25-2.68s2-2.27,3-3.39c1.66-1.77,1-1.52,3.93-5.26,1.93-2.51,2.54-3,2-3.84-.76-1-3.15-1.94-5.18-1.79-3.4.26-4.95,3.44-6.07,5.72-2.11,4.32.05,5-2.32,7.67s-5.59,3.09-5.71,5.26S263,282.94,264.19,282.81Z"
          transform="translate(-255.12 -226.47)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Right_perio10"
          v-if="selectedTooth.perio.right"
          d="M304.35,285.66c-.84-.25.25-1.19-1.07-2.4-.76-.7-1.61-.84-1.61-1.34s1.3-.95,2.14-1.43c1.81-1,1-2.51.54-4.55-.67-2.84.39-2-.18-6.78-.36-3-.54-4.52-1.07-5.62s-1.1-1.87-.54-2.06c.85-.28,3.92.89,5.72,2.32s1.6,2.58,2,5.8c.27,2.44.23.29,1.25,7.77.48,3.49.56,4.48-.71,5.71C309,284.83,305.46,286,304.35,285.66Z"
          transform="translate(-255.12 -226.47)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
      </g>
      <g id="ADULT_DENT_Implant10" v-if="selectedTooth.implant">
        <path
          d="M266,271.84l34.41,0c1.28,0,2.3.43,2.28,1l-.11,3.81c0,.52-1.07,1-2.34,1l-34.42,0c-1.27,0-2.29-.44-2.28-1l.12-3.81C263.65,272.26,264.69,271.84,266,271.84Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M282.59,226.77h4.35c2.26,0,4.06.76,4,1.7l-1.29,42.61c0,.94-1.89,1.7-4.14,1.69h-4.35c-2.25,0-4.06-.77-4-1.7l1.29-42.62C278.48,227.53,280.34,226.77,282.59,226.77Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272,262.75l23.55,0c.63,0,1.13.21,1.12.47l0,1.23c0,.26-.52.47-1.14.47l-23.56,0c-.62,0-1.12-.21-1.12-.47l0-1.23C270.84,263,271.35,262.75,272,262.75Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M271.8,256.26l23.7,0c.58,0,1.05.2,1.05.44l0,1.28c0,.25-.49.44-1.08.44l-23.69,0c-.59,0-1.06-.2-1.05-.44l0-1.28C270.73,256.45,271.22,256.26,271.8,256.26Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.4,249.76l23.51,0c.63,0,1.14.22,1.14.48l0,1.21c0,.26-.53.48-1.17.48l-23.51,0c-.64,0-1.15-.22-1.14-.48l0-1.21C271.24,250,271.76,249.76,272.4,249.76Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.18,243.27l23.73,0c.58,0,1,.19,1,.43l0,1.3c0,.24-.48.43-1,.43l-23.74,0c-.57,0-1-.19-1-.43l0-1.3C271.13,243.46,271.6,243.27,272.18,243.27Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.35,236.77l23.79,0c.56,0,1,.19,1,.43l0,1.32c0,.23-.47.42-1,.42l-23.63,0c-.65,0-1.17-.22-1.16-.49l0-1.26C271.33,237,271.79,236.77,272.35,236.77Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M273,230.28l23.53,0c.63,0,1.14.21,1.13.48l0,1.21c0,.26-.53.47-1.16.47l-23.52,0c-.64,0-1.14-.21-1.14-.48l0-1.21C271.83,230.49,272.35,230.28,273,230.28Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.52"
          y1="10.43"
          x2="42.1"
          y2="3.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.59"
          y1="12.36"
          x2="42.17"
          y2="5.85"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.22"
          y1="16.98"
          x2="41.65"
          y2="10.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.3"
          y1="18.8"
          x2="41.63"
          y2="12.39"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.55"
          y1="23.4"
          x2="41.45"
          y2="16.93"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.46"
          y1="25.34"
          x2="41.49"
          y2="18.85"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="15.89"
          y1="29.94"
          x2="41.64"
          y2="23.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="15.97"
          y1="31.85"
          x2="41.44"
          y2="25.38"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.08"
          y1="36.41"
          x2="41.05"
          y2="29.92"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.09"
          y1="38.34"
          x2="40.92"
          y2="31.9"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M297.83,232.7"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M271.4,276.41l23.45,0c2.5,0,4.5.85,4.47,1.89l-.14,4.61c0,1-2.09,1.87-4.58,1.87l-23.46,0c-2.49,0-4.49-.85-4.46-1.88l.14-4.62C266.85,277.25,268.9,276.41,271.4,276.41Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown10">
        <path
          id="ADULT_DENT_Endo_Crown1_10"
          v-if="selectedTooth.endo_crown.crown1"
          d="M272.48,306.61l-9.9-.48a5,5,0,0,1-2.33-.76,1.9,1.9,0,0,1-.93-1.43l-.31-3c0-.75,1-1.35,2.2-1.35h11.27c1.22,0,2.21.6,2.21,1.35v4.29C274.69,306,273.7,306.61,272.48,306.61Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_10"
          v-if="selectedTooth.endo_crown.crown2"
          d="M293.78,306.2h4.67a12.93,12.93,0,0,0,2.87-.72,6.92,6.92,0,0,0,2.15-1.23l.82-2.25c.69-.66.53-1.42-.36-1.91a5.5,5.5,0,0,0-2.35-.48h-7.8c-1.83,0-3.32.74-3.32,1.65v3.28C290.46,305.46,292,306.2,293.78,306.2Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical10"
        v-if="selectedTooth.periapical.periapical1"
        d="M285.5,245.29c.41,0,.82-.41,5-5.84,1.1-1.44,2.76-2.79,3.48-4.29a8.24,8.24,0,0,1,2.86-2.92,3.28,3.28,0,0,1,1.87-.62,2.89,2.89,0,0,1,1.49.43,1.35,1.35,0,0,1,.37,1.87,21.15,21.15,0,0,0-.62,3.85,26.25,26.25,0,0,0-.25,4.54c0,2.06.1,2,0,3.42-.08,1.18-.2,1.65,0,1.68.47.05,2.19-2.27,3.24-4.66.65-1.51.28-1.29,1.36-6.1.47-2.06.71-2.88.25-4.16a4.21,4.21,0,0,0-3.23-3.23c-2.53-.58-5.82.47-7.46,1.24-2.17,1-1.94,1.76-4.36,4.79-2.55,3.21-3.56,3.31-4.35,5.22C284.18,242.81,284.6,245.22,285.5,245.29Z"
        transform="translate(-255.12 -226.47)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.6"
      />
      <g id="ADULT_DENT_Occlusal_Veneer10">
        <path
          id="ADULT_DENT_Occlusal_Veneer10_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M272.66,306.69l-9.91-.47a5,5,0,0,1-2.32-.77,1.94,1.94,0,0,1-.94-1.43l-.31-3c0-.74,1-1.35,2.21-1.35h11.27c1.22,0,2.21.61,2.21,1.35v4.3C274.87,306.09,273.88,306.69,272.66,306.69Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer10_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M294,306.28h4.67a13.33,13.33,0,0,0,2.86-.71,7.45,7.45,0,0,0,2.16-1.23c.27-.75.54-1.5.82-2.26.69-.65.53-1.42-.36-1.91a5.54,5.54,0,0,0-2.35-.48H294c-1.84,0-3.32.74-3.32,1.66v3.27C290.64,305.54,292.12,306.28,294,306.28Z"
          transform="translate(-255.12 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer10">
        <path
          id="ADULT_DENT_Occlusal_Veneer10_2"
          v-if="selectedTooth.crown.onlay"
          d="M272.66,306.69l-9.91-.47a5,5,0,0,1-2.32-.77,1.94,1.94,0,0,1-.94-1.43l-.31-3c0-.74,1-1.35,2.21-1.35h11.27c1.22,0,2.21.61,2.21,1.35v4.3C274.87,306.09,273.88,306.69,272.66,306.69Z"
          transform="translate(-255.12 -226.47)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer10_1"
          v-if="selectedTooth.crown.onlay"
          d="M294,306.28h4.67a13.33,13.33,0,0,0,2.86-.71,7.45,7.45,0,0,0,2.16-1.23c.27-.75.54-1.5.82-2.26.69-.65.53-1.42-.36-1.91a5.54,5.54,0,0,0-2.35-.48H294c-1.84,0-3.32.74-3.32,1.66v3.27C290.64,305.54,292.12,306.28,294,306.28Z"
          transform="translate(-255.12 -226.47)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.81"
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