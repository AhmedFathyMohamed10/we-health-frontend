<template>
<div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.91 113.69"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_24_all">
      <g id="adult_dent_24">
        <path
          id="adult_dent_24_crown"
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
          d="M256.73,252.51c2.16-.92,3.62-.32,19.25-.92,8.8-.34,14.18-.76,22.11-.12,5.7.46,7.17,1,7.76,1.27,3.13,1.36,2.41,3.37,1.15,7.26-.89,2.73-1.69,5.46-2.59,8.19-2.71,8.22-1.1,10.17-5.74,11.64-4.88,1.54-11.78,1-14.36.81-10.19-.79-15.84-4.14-17.81-5.31-4.21-2.49-3.48-3.7-7.47-12.1C255.47,255.71,253.55,253.87,256.73,252.51Z"
          transform="translate(-254.21 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <path
          id="adult_dent_24_root"
          v-if="selectedTooth.dent.root1"
          d="M270,278.56c-3.83.66-1.75,5.25-.58,11.07,1.59,7.91-.77,6.89.58,14.75.9,5.3,2,11.73,8,19.37,6.29,7.95,15.52,14.13,16.66,13.94.76-.12-2.86-3-4-7.72-.89-3.6.44-5,1.43-10.26.89-4.71-.13-3.84.58-12,.54-6.28.82-9.42,2-12.56,1-2.57,1.55-5.16,2.58-7.72,1.54-3.82,2.55-5.38.29-6.23-2.89-1.08-7.09.5-14.94-.23S272.59,278.11,270,278.56Z"
          transform="translate(-254.21 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial24"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M272.9,271.43h-8.74L262.72,268l-6.08-13.5c-.08-.13-.49-.94.77-1.55a5,5,0,0,1,1.11-.36l14.71-.35a12.38,12.38,0,0,1,4.52.26c1.51.43,2.28,1.19,2,2v14.21C279.76,270.2,276.69,271.43,272.9,271.43Z"
        transform="translate(-254.21 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal24"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M291.34,271.73a43.36,43.36,0,0,1,0-4.75c.19-3.54.62-3.67.51-5.86a32.29,32.29,0,0,0-.76-6.06c-.49-1.8-1-2.94.5-3.37.46-.13,1-.17,6.3.33,5.05.49,5.82.65,6.54.91a4,4,0,0,1,2.36,2c1.16,2.28-.85,3.57-2.08,6.83-.48,1.28-.13,1-.78,3.62a43.38,43.38,0,0,1-2,6.17"
        transform="translate(-254.21 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V24"
        v-if="selectedTooth.filling_caries_class_v"
        x="18.71"
        y="47.01"
        width="23.72"
        height="2.66"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal24"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M299.29,266.85H292.5c-2.34,0-4.24-.87-4.24-2v-1.08c0-1.08,1.9-1.95,4.24-1.95h6.79l5.08,1h0l-.81,3.15h0Z"
        transform="translate(-254.21 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial24"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M271.68,266.85h-4.54l-3.87-.78-1-.21-1.86-3.31,6.74-.68h4.54c2.66,0,4.82.86,4.82,1.93v1.12C276.5,266,274.34,266.85,271.68,266.85Z"
        transform="translate(-254.21 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.61"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo24"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M274.39,280.13c1-.08,2.18.76,6.5,1.25,4.88.55,7.3-.08,9.08.21,6.44,1-.82,13.25-3.63,21.88-4.65,14.27,1.46,22.95-.26,23C282.16,326.69,267.34,280.69,274.39,280.13Z"
        transform="translate(-254.21 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.61"
      />
      <g id="ADULT_DENT_Post24" v-if="selectedTooth.post.post1">
        <path
          d="M295.11,280.29l-18.76-.23c-.69,0-1.21-.34-1.14-.73l.47-2.85c.06-.4.68-.72,1.38-.71l18.76.23c.69,0,1.2.34,1.14.74l-.47,2.85C296.42,280,295.81,280.3,295.11,280.29Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M281.23,314l-2.37,0c-1.23,0-2.13-.59-2-1.3l5.26-32c.12-.7,1.21-1.26,2.44-1.24l2.37,0c1.23,0,2.14.6,2,1.3l-5.26,32C283.55,313.46,282.46,314,281.23,314Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M290.86,287.07,278,286.92c-.34,0-.59-.17-.56-.37l.15-.91c0-.2.34-.35.68-.35l12.84.16c.34,0,.59.16.56.36l-.15.92C291.51,286.92,291.2,287.08,290.86,287.07Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M290.27,292l-12.92-.16c-.32,0-.56-.16-.53-.34l.16-1c0-.18.31-.33.63-.33l12.92.16c.32,0,.56.16.53.34l-.16,1C290.87,291.8,290.59,292,290.27,292Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M289.25,296.81l-12.82-.15c-.35,0-.6-.17-.57-.37l.15-.9c0-.2.34-.36.69-.36l12.82.16c.34,0,.6.17.57.37l-.15.9C289.9,296.66,289.6,296.82,289.25,296.81Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M288.67,301.69l-12.94-.16c-.31,0-.54-.15-.51-.33l.16-1c0-.17.31-.32.62-.31l12.94.15c.31,0,.54.16.52.34l-.17,1C289.27,301.55,289,301.69,288.67,301.69Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M287.89,306.56l-13-.16c-.31,0-.53-.15-.51-.32l.17-1c0-.18.3-.32.6-.31l12.89.15c.35,0,.61.18.58.38l-.16.94C288.46,306.42,288.19,306.56,287.89,306.56Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M286.85,311.43,274,311.27c-.34,0-.6-.17-.57-.36l.15-.91c0-.2.34-.36.69-.35l12.82.15c.35,0,.6.17.57.37l-.15.91C287.5,311.27,287.19,311.43,286.85,311.43Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34.08"
          y1="79.7"
          x2="19.43"
          y2="84.42"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34.25"
          y1="78.25"
          x2="19.6"
          y2="82.99"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="34.94"
          y1="74.78"
          x2="20.37"
          y2="79.55"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="35.1"
          y1="73.42"
          x2="20.6"
          y2="78.09"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="35.45"
          y1="69.97"
          x2="21.18"
          y2="74.68"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="35.7"
          y1="68.51"
          x2="21.36"
          y2="73.24"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="36.51"
          y1="65.07"
          x2="21.78"
          y2="69.76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="36.67"
          y1="63.63"
          x2="22.09"
          y2="68.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="37.1"
          y1="60.21"
          x2="22.79"
          y2="64.94"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="37.3"
          y1="58.76"
          x2="23.07"
          y2="63.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M273.56,309.47"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M292.64,276.83l-12.79-.16c-1.36,0-2.36-.66-2.23-1.44l.57-3.45c.13-.78,1.34-1.4,2.7-1.38l12.78.15c1.37,0,2.37.66,2.24,1.44l-.57,3.46C295.21,276.23,294,276.84,292.64,276.83Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
      </g>
      <g id="ADULT_DENT_gingivitis24">
        <path
          id="ADULT_DENT_Right_gingivitis24"
          v-if="selectedTooth.gingivitis.right"
          d="M304,276.26c-.92.16.2,1.06-1.23,2.17s-4.55,1.41-4.43,2.17c.07.42,1,.52,1.72,1,1.77,1.1.27,2.67-.24,3.26-2.24,2.57-1.69,5.4-2.71,8.09-3.59,9.52-1.72,7.16-2.46,8.19s-1.59,2-.24,2.67c1.71.81,6.8.78,9.59-.1,6.09-1.92-3.3-6.4,0-13.43,2.55-5.42,10.41-7.58,6.89-11C309.22,277.55,305.34,276,304,276.26Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Left_gingivitis24"
          v-if="selectedTooth.gingivitis.left"
          d="M263,274.09c1.09.12.85.73,2.7,1.77,2.08,1.18,4.18,1.43,3.94,2s-1.4.41-2.46.89c-1.76.78-1.25,2-1,2.76.65,1.8.38,3.63,1,5.43.24.71.57,2.48,1.23,6,1.13,6.07,1.65,9.11-.25,9.38s-5.7-1.52-7.87-3.26c-4.72-3.77,0-5.8-1-11.55s-6.5-8.13-2.22-11.25C258.38,275.29,261.15,273.88,263,274.09Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Right_periodontal24"
          v-if="selectedTooth.periodontal.right"
          d="M304,276.26c-.92.16.2,1.06-1.23,2.17s-4.55,1.41-4.43,2.17c.07.42,1,.52,1.72,1,1.77,1.1.27,2.67-.24,3.26-2.24,2.57-1.69,5.4-2.71,8.09-3.59,9.52-1.72,7.16-2.46,8.19s-1.59,2-.24,2.67c1.71.81,6.8.78,9.59-.1,6.09-1.92-3.3-6.4,0-13.43,2.55-5.42,10.41-7.58,6.89-11C309.22,277.55,305.34,276,304,276.26Z"
          transform="translate(-254.21 -226.77)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Left_periodontal24"
          v-if="selectedTooth.periodontal.left"
          d="M263,274.09c1.09.12.85.73,2.7,1.77,2.08,1.18,4.18,1.43,3.94,2s-1.4.41-2.46.89c-1.76.78-1.25,2-1,2.76.65,1.8.38,3.63,1,5.43.24.71.57,2.48,1.23,6,1.13,6.07,1.65,9.11-.25,9.38s-5.7-1.52-7.87-3.26c-4.72-3.77,0-5.8-1-11.55s-6.5-8.13-2.22-11.25C258.38,275.29,261.15,273.88,263,274.09Z"
          transform="translate(-254.21 -226.77)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Right_perio24"
          v-if="selectedTooth.perio.right"
          d="M304,276.26c-.92.16.2,1.06-1.23,2.17s-4.55,1.41-4.43,2.17c.07.42,1,.52,1.72,1,1.77,1.1.27,2.67-.24,3.26-2.24,2.57-1.69,5.4-2.71,8.09-3.59,9.52-1.72,7.16-2.46,8.19s-1.59,2-.24,2.67c1.71.81,6.8.78,9.59-.1,6.09-1.92-3.3-6.4,0-13.43,2.55-5.42,10.41-7.58,6.89-11C309.22,277.55,305.34,276,304,276.26Z"
          transform="translate(-254.21 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          id="ADULT_DENT_Left_perio24"
          v-if="selectedTooth.perio.left"
          d="M263,274.09c1.09.12.85.73,2.7,1.77,2.08,1.18,4.18,1.43,3.94,2s-1.4.41-2.46.89c-1.76.78-1.25,2-1,2.76.65,1.8.38,3.63,1,5.43.24.71.57,2.48,1.23,6,1.13,6.07,1.65,9.11-.25,9.38s-5.7-1.52-7.87-3.26c-4.72-3.77,0-5.8-1-11.55s-6.5-8.13-2.22-11.25C258.38,275.29,261.15,273.88,263,274.09Z"
          transform="translate(-254.21 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
      </g>
      <g id="ADULT_DENT_Implant24" v-if="selectedTooth.implant">
        <path
          d="M305.37,284.07l-39.7,0c-1.47,0-2.65-.38-2.64-.86l.09-3.41c0-.48,1.21-.86,2.68-.87l39.7,0c1.48,0,2.66.39,2.65.86l-.09,3.42C308.05,283.69,306.84,284.07,305.37,284.07Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M286.73,324.61h-5c-2.61,0-4.7-.68-4.68-1.52l1-38.29c0-.84,2.15-1.53,4.75-1.53h5c2.6,0,4.69.68,4.67,1.52l-1,38.3C291.46,323.92,289.33,324.6,286.73,324.61Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M298.54,292.25l-27.17,0c-.72,0-1.3-.19-1.29-.42l0-1.1c0-.24.6-.43,1.32-.43l27.17,0c.73,0,1.31.18,1.3.42l0,1.1C299.86,292.06,299.27,292.25,298.54,292.25Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M298.83,298.09l-27.34,0c-.68,0-1.22-.17-1.21-.39l0-1.15c0-.22.55-.4,1.23-.4l27.34,0c.67,0,1.22.18,1.21.4l0,1.15C300.06,297.91,299.5,298.09,298.83,298.09Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M298.22,303.92l-27.12,0c-.74,0-1.33-.19-1.32-.43l0-1.08c0-.24.61-.43,1.35-.43l27.12,0c.73,0,1.33.19,1.32.43l0,1.08C299.56,303.73,299,303.92,298.22,303.92Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M298.55,309.76l-27.38,0c-.67,0-1.2-.18-1.2-.39l0-1.17c0-.21.55-.39,1.22-.39l27.38,0c.66,0,1.2.18,1.19.39l0,1.17C299.76,309.58,299.21,309.76,298.55,309.76Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M298.43,315.6l-27.45,0c-.64,0-1.16-.16-1.16-.37l0-1.19c0-.21.54-.38,1.18-.38l27.27,0c.74,0,1.35.2,1.34.44l0,1.13C299.6,315.43,299.08,315.6,298.43,315.6Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M297.77,321.43l-27.13,0c-.73,0-1.32-.19-1.32-.43l0-1.09c0-.23.61-.42,1.34-.42l27.13,0c.74,0,1.32.19,1.32.42l0,1.09C299.1,321.24,298.51,321.43,297.77,321.43Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.04"
          y1="88.71"
          x2="15.6"
          y2="94.59"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="44.94"
          y1="86.98"
          x2="15.5"
          y2="92.88"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.31"
          y1="82.82"
          x2="16.05"
          y2="88.77"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.2"
          y1="81.19"
          x2="16.05"
          y2="87.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="44.85"
          y1="77.06"
          x2="16.2"
          y2="82.93"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="44.93"
          y1="75.31"
          x2="16.13"
          y2="81.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.54"
          y1="71.18"
          x2="15.91"
          y2="77.04"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.42"
          y1="69.46"
          x2="16.11"
          y2="75.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.24"
          y1="65.36"
          x2="16.51"
          y2="71.25"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <line
          x1="45.21"
          y1="63.63"
          x2="16.64"
          y2="69.47"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M269.08,319.31"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <path
          d="M299.05,280,272,280c-2.89,0-5.2-.75-5.18-1.68l.11-4.14c0-.93,2.38-1.69,5.26-1.69l27.06,0c2.88,0,5.19.75,5.17,1.68l-.11,4.14C304.29,279.21,301.93,280,299.05,280Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown24">
        <path
          id="ADULT_DENT_Endo_Crown1_24"
          v-if="selectedTooth.endo_crown.crown1"
          d="M267.05,252.31l-5.84.46c-.91.08-2.7.28-3.37.86a.63.63,0,0,0-.17.84,13.46,13.46,0,0,1,.84,3.72,2.88,2.88,0,0,0,.85.81,7,7,0,0,0,1.75.8h5.94c1.81,0,3.28-.59,3.28-1.31v-4.86C270.33,252.9,268.86,252.31,267.05,252.31Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_24"
          v-if="selectedTooth.endo_crown.crown2"
          d="M296.32,252l5.57.4a9.88,9.88,0,0,1,3.38.82,2.21,2.21,0,0,1,1,.88c-.06,1.35-.11,2.71-.17,4.06.05.12.22.67-.68,1.15a4.72,4.72,0,0,1-1.42.46h-7.85c-1.78,0-3.22-.58-3.22-1.29V252.9c-.19-.35.19-.72.95-.91A4.87,4.87,0,0,1,296.32,252Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical24"
        v-if="selectedTooth.periapical.periapical1"
        d="M293.65,319.49c-.54,0-.44.91-1,3.68s-.8,2.79-.84,4.19a9.42,9.42,0,0,0,.56,3.75c.8,2.17,1.21,3.26,2.36,4.07.47.33,1.78,1.18,1.54,2.13a1.08,1.08,0,0,1-.84.72,5.66,5.66,0,0,1-2.09,0,4.83,4.83,0,0,1-3.2-1.84c-1.45-1.55-2.22-1.17-5.15-3.41-1.84-1.41-1.3-1.38-4.73-4.91-2.8-2.89-3.3-3.05-4.31-4.53-1.26-1.83-1.44-3-2-3s-1.32,1.73-1,3.46,1.4,2.66,3.62,4.75c3.58,3.38,5.37,5.06,7.1,6.43,6.09,4.79,8.14,5.1,9.46,5.13a10.48,10.48,0,0,0,6.4-1.85c1.49-1.33-.56-2.18-2.08-5a11.83,11.83,0,0,1-1.25-7.2,6,6,0,0,0,0-3.35C295.76,321.13,294.41,319.45,293.65,319.49Z"
        transform="translate(-254.21 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.61"
      />
      <g id="ADULT_DENT_Occlusal_Veneer24">
        <path
          id="ADULT_DENT_Occlusal_Veneer24_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M267.25,252.39l-5.84.46c-.92.07-2.71.27-3.38.85a.64.64,0,0,0-.17.84,13.48,13.48,0,0,1,.85,3.73,2.81,2.81,0,0,0,.84.81,7.59,7.59,0,0,0,1.76.8h5.94c1.81,0,3.27-.59,3.27-1.32V253.7C270.52,253,269.06,252.39,267.25,252.39Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer24_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M296.52,252.1l5.57.41a9.72,9.72,0,0,1,3.37.81,2.2,2.2,0,0,1,1,.88c-.06,1.36-.12,2.71-.17,4.07,0,.12.22.66-.68,1.15a5.37,5.37,0,0,1-1.42.46h-7.85c-1.78,0-3.22-.58-3.22-1.29V253c-.19-.36.19-.72.94-.92A5,5,0,0,1,296.52,252.1Z"
          transform="translate(-254.21 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer24">
        <path
          id="ADULT_DENT_Occlusal_Veneer24_2"
          v-if="selectedTooth.crown.onlay"
          d="M267.25,252.39l-5.84.46c-.92.07-2.71.27-3.38.85a.64.64,0,0,0-.17.84,13.48,13.48,0,0,1,.85,3.73,2.81,2.81,0,0,0,.84.81,7.59,7.59,0,0,0,1.76.8h5.94c1.81,0,3.27-.59,3.27-1.32V253.7C270.52,253,269.06,252.39,267.25,252.39Z"
          transform="translate(-254.21 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.82"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer24_1"
          v-if="selectedTooth.crown.onlay"
          d="M296.52,252.1l5.57.41a9.72,9.72,0,0,1,3.37.81,2.2,2.2,0,0,1,1,.88c-.06,1.36-.12,2.71-.17,4.07,0,.12.22.66-.68,1.15a5.37,5.37,0,0,1-1.42.46h-7.85c-1.78,0-3.22-.58-3.22-1.29V253c-.19-.36.19-.72.94-.92A5,5,0,0,1,296.52,252.1Z"
          transform="translate(-254.21 -226.77)"
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