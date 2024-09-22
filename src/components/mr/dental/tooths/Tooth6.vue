<template>
  <div class="">
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.69 113.64"
     :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_6_all">
      <g id="adult_dent_6">
        <path
          id="adult_dent_6_root"
          v-if="selectedTooth.dent.root1"
          d="M268.89,229.77c-1.69.29.76,4.88,2,14.55.59,4.57,1.06,8.37.23,13.25-.2,1.18-.55,2.82-3.81,11.35-4.54,11.88-6.63,15.93-3.58,16.91,2.24.73,4.12-1.21,12.09-1.65a120.75,120.75,0,0,1,15.22.47c4.67.38,7,.77,8.73,0s1.74-2.37,1.56-3.67c-.68-5.19-3-9.17-4.21-11.74-2.16-4.45-.76-3.71-3.17-9.19a67.51,67.51,0,0,0-6-10.64,90,90,0,0,0-8.5-10.53C275.18,234.32,270.68,229.47,268.89,229.77Z"
          transform="translate(-254.87 -226.52)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
        <path
          id="adult_dent_6_crown"
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
          d="M262.4,286.78c-1.25.74-2,2.27-3.58,5.32a20.92,20.92,0,0,0-2.69,8.16c-.3,3.71-.45,5.58,1.57,7.45,2.91,2.71,8.4,3.6,13.87,4.5,3.28.53,19.11,3.12,31.79-1.3,2.11-.74,5.54-2,7.39-4.26,1.6-2,1.22-3.82,0-7.1-3-8.05-4.52-12.08-8.73-13.6-2.3-.83-6.69-.91-15.45-1.06C273,284.65,266.13,284.57,262.4,286.78Z"
          transform="translate(-254.87 -226.52)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial6"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M304.55,294h-4.66c-3.47,0-6.28,1.49-6.28,3.32v11.37c0,.07-.27,1.51,1.84,2.35a8.5,8.5,0,0,0,3.47.45l3.63-1.1c.47-.15,2.23-.76,3.35-1.26a9.93,9.93,0,0,0,4.47-3.78,7.33,7.33,0,0,0,.27-2.24,14.91,14.91,0,0,0-.85-3.3c-.74-2.36-.94-2.55-1.29-3.69a10.07,10.07,0,0,0-.39-1,2.18,2.18,0,0,0-.45-.75C307,294,305.36,294,304.55,294Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal6"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M273.61,311.9a26.58,26.58,0,0,1-3.7-.57c-2.39-.42-3.61-.64-4.61-.89a22.21,22.21,0,0,1-3.69-1.14,11,11,0,0,1-2.62-1.5,5.12,5.12,0,0,1-1.69-2.4c-.17-.47-.24-.83-.15-3.66a18.34,18.34,0,0,1,.15-2.6c.19-1,.36-1.06.77-2.68s.29-1.66.62-1.87c1-.63,3.07-.38,8.46,0,6.52.46,6.54.3,7.22.57,2.62,1,1.33,3.08,1,9C275.13,308.69,275.68,311.55,273.61,311.9Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V6"
        v-if="selectedTooth.filling_caries_class_v"
        x="21.18"
        y="62.23"
        width="16.95"
        height="2.5"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal6"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M263.92,303.8l-6.61-.47h0l-.07-1.35v-1.05l-.06-1.23h0l6.74-.59c1.91,0,3.45.81,3.45,1.82V302C267.37,303,265.83,303.8,263.92,303.8Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial6"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M310.36,303.06l-6.85.74c-1.9,0-3.45-.81-3.45-1.82v-1.05c0-1,1.55-1.82,3.45-1.82l5.89.66h0l.79,1.16V302Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo6"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M274.9,238.27c-1.43.18,3.79,7.88,2.92,18.78-1.09,13.59-11.16,26-7.69,26.76.55.12.87-.18,4-.42,2.7-.21,4.83-.16,6.1-.14,2,.05,3.65.17,6.9.42,3.66.29,3.67.35,4,.28,3.3-.76-.56-8.11-3.45-17.51-2.54-8.27-1.43-8.72-4-14.71C280.81,245,276.26,238.11,274.9,238.27Z"
        transform="translate(-254.87 -226.52)"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
      <g id="ADULT_DENT_Post6" v-if="selectedTooth.post.post1">
        <path
          d="M273,285.13h17.11c.64,0,1.15.3,1.15.68l0,2.73c0,.38-.52.69-1.16.69H273c-.63,0-1.14-.31-1.14-.69l0-2.73C271.88,285.44,272.4,285.13,273,285.13Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M280.84,252.75H283c1.13,0,2,.54,2,1.22l-.22,30.6c0,.67-.92,1.22-2,1.22h-2.16c-1.12,0-2-.54-2-1.22l.21-30.6C278.81,253.3,279.72,252.75,280.84,252.75Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.93,278.6h11.71c.31,0,.56.15.56.33v.88c0,.19-.26.34-.57.34H275.92c-.31,0-.56-.15-.56-.34v-.88C275.36,278.75,275.62,278.6,275.93,278.6Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.77,273.94h11.79c.29,0,.52.14.52.32v.92c0,.18-.24.32-.53.32H275.76c-.29,0-.52-.14-.52-.31v-.93C275.25,274.08,275.48,273.94,275.77,273.94Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276,269.27h11.68c.32,0,.58.15.58.34v.87c0,.19-.26.34-.58.34H276c-.31,0-.57-.16-.57-.35v-.86C275.43,269.43,275.69,269.27,276,269.27Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.83,264.61h11.8c.29,0,.52.14.52.31v.94c0,.17-.23.31-.52.31h-11.8c-.29,0-.52-.14-.52-.31v-.93C275.31,264.75,275.54,264.61,275.83,264.61Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.85,259.94h11.83c.28,0,.5.13.5.3v.95c0,.17-.22.3-.5.3H275.92c-.32,0-.58-.16-.58-.35v-.9C275.34,260.08,275.57,259.94,275.85,259.94Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M276.1,255.28h11.7c.31,0,.57.16.57.35v.87c0,.19-.26.34-.57.34h-11.7c-.32,0-.57-.15-.57-.34v-.87C275.53,255.43,275.78,255.28,276.1,255.28Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.63"
          y1="33.51"
          x2="33.28"
          y2="28.83"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.68"
          y1="34.89"
          x2="33.34"
          y2="30.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.54"
          y1="38.22"
          x2="33.12"
          y2="33.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.6"
          y1="39.53"
          x2="33.13"
          y2="34.89"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.78"
          y1="42.83"
          x2="33.09"
          y2="38.15"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.75"
          y1="44.22"
          x2="33.13"
          y2="39.53"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.51"
          y1="47.52"
          x2="33.25"
          y2="42.86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.57"
          y1="48.9"
          x2="33.17"
          y2="44.22"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.67"
          y1="52.17"
          x2="33.02"
          y2="47.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="20.69"
          y1="53.56"
          x2="32.97"
          y2="48.9"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M288.48,257"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.78,288.41h11.66c1.24,0,2.24.6,2.24,1.35l0,3.31c0,.74-1,1.35-2.26,1.35H275.74c-1.25,0-2.25-.6-2.24-1.35l0-3.31C273.52,289,274.54,288.41,275.78,288.41Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_gingivitis6">
        <path
          id="ADULT_DENT_Left_gingivitis6"
          v-if="selectedTooth.gingivitis.left"
          d="M258.86,289.69c.82-.16-.2-1.32,1.28-2.42,1-.76,2.43-.87,2.43-1.43,0-.41-.75-.51-1.28-1.06-.68-.68-.34-1.36,0-2.26.65-1.77-.29-.19.85-3.39.85-2.39,1.08-2.44,1.86-4.53,1.15-3.09.66-3,1.57-4.6s1.87-2.45,1.28-2.72-3.09.35-4.71,1.13c-2.05,1-3.06,2.28-4.71,9.66-1.31,5.85-.76,5.43-1.43,6.41-.44.66-1.23,1.66-.71,2.87C255.89,288.73,258,289.86,258.86,289.69Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Right_gingivitis6"
          v-if="selectedTooth.gingivitis.right"
          d="M307.54,289.31c-.34,0-.45-.84-2-2.19a6.23,6.23,0,0,0-2.57-1.58c-1.31-.4-2.41-.3-2.57-.61s1-.6,1.72-1.13c1.25-.89.72-2.06.28-3.32-1.15-3.26-.08-2.47-1.28-5.5a52.19,52.19,0,0,0-2.57-5.28c-1.25-2.29-1.9-3.18-1.29-3.4.81-.29,3.52.71,5.29,2,3.14,2.24,1.39,4,2.85,8.83,1,3.17,2,3.28,2.57,6.49S308.13,289.28,307.54,289.31Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Left_periodontal6"
          v-if="selectedTooth.periodontal.left"
          d="M258.86,289.69c.82-.16-.2-1.32,1.28-2.42,1-.76,2.43-.87,2.43-1.43,0-.41-.75-.51-1.28-1.06-.68-.68-.34-1.36,0-2.26.65-1.77-.29-.19.85-3.39.85-2.39,1.08-2.44,1.86-4.53,1.15-3.09.66-3,1.57-4.6s1.87-2.45,1.28-2.72-3.09.35-4.71,1.13c-2.05,1-3.06,2.28-4.71,9.66-1.31,5.85-.76,5.43-1.43,6.41-.44.66-1.23,1.66-.71,2.87C255.89,288.73,258,289.86,258.86,289.69Z"
          transform="translate(-254.87 -226.52)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Right_periodontal6"
          v-if="selectedTooth.periodontal.right"
          d="M307.54,289.31c-.34,0-.45-.84-2-2.19a6.23,6.23,0,0,0-2.57-1.58c-1.31-.4-2.41-.3-2.57-.61s1-.6,1.72-1.13c1.25-.89.72-2.06.28-3.32-1.15-3.26-.08-2.47-1.28-5.5a52.19,52.19,0,0,0-2.57-5.28c-1.25-2.29-1.9-3.18-1.29-3.4.81-.29,3.52.71,5.29,2,3.14,2.24,1.39,4,2.85,8.83,1,3.17,2,3.28,2.57,6.49S308.13,289.28,307.54,289.31Z"
          transform="translate(-254.87 -226.52)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Left_perio6"
          v-if="selectedTooth.perio.left"
          d="M258.86,289.69c.82-.16-.2-1.32,1.28-2.42,1-.76,2.43-.87,2.43-1.43,0-.41-.75-.51-1.28-1.06-.68-.68-.34-1.36,0-2.26.65-1.77-.29-.19.85-3.39.85-2.39,1.08-2.44,1.86-4.53,1.15-3.09.66-3,1.57-4.6s1.87-2.45,1.28-2.72-3.09.35-4.71,1.13c-2.05,1-3.06,2.28-4.71,9.66-1.31,5.85-.76,5.43-1.43,6.41-.44.66-1.23,1.66-.71,2.87C255.89,288.73,258,289.86,258.86,289.69Z"
          transform="translate(-254.87 -226.52)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Right_perio6"
          v-if="selectedTooth.perio.right"
          d="M307.54,289.31c-.34,0-.45-.84-2-2.19a6.23,6.23,0,0,0-2.57-1.58c-1.31-.4-2.41-.3-2.57-.61s1-.6,1.72-1.13c1.25-.89.72-2.06.28-3.32-1.15-3.26-.08-2.47-1.28-5.5a52.19,52.19,0,0,0-2.57-5.28c-1.25-2.29-1.9-3.18-1.29-3.4.81-.29,3.52.71,5.29,2,3.14,2.24,1.39,4,2.85,8.83,1,3.17,2,3.28,2.57,6.49S308.13,289.28,307.54,289.31Z"
          transform="translate(-254.87 -226.52)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Implant6" v-if="selectedTooth.implant">
        <path
          d="M270.27,279.11l27.53,0c1,0,1.84.36,1.82.81l-.09,3.21c0,.45-.85.81-1.87.81l-27.52,0c-1,0-1.84-.36-1.83-.81l.09-3.21C268.42,279.47,269.25,279.11,270.27,279.11Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M283.57,241h3.48c1.8,0,3.25.65,3.22,1.44l-1,36c0,.79-1.51,1.43-3.31,1.43h-3.48c-1.8,0-3.25-.64-3.23-1.43l1-36C280.28,241.65,281.77,241,283.57,241Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.08,271.43l18.84,0c.5,0,.9.18.9.4l0,1c0,.22-.42.4-.92.39l-18.84,0c-.5,0-.9-.18-.9-.4l0-1C274.17,271.61,274.58,271.43,275.08,271.43Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M274.94,265.94l18.95,0c.47,0,.85.17.84.38l0,1.08c0,.21-.39.37-.86.37l-18.95,0c-.47,0-.85-.17-.84-.38l0-1.08C274.09,266.1,274.47,265.94,274.94,265.94Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.42,260.45l18.8,0c.51,0,.92.18.91.41l0,1c0,.22-.42.4-.93.4l-18.81,0c-.51,0-.92-.19-.91-.41l0-1C274.49,260.63,274.91,260.45,275.42,260.45Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.24,255l19,0c.46,0,.83.17.83.37l0,1.1c0,.2-.39.36-.85.36l-19,0c-.46,0-.83-.17-.83-.37l0-1.1C274.4,255.12,274.78,255,275.24,255Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.38,249.46l19,0c.45,0,.81.16.81.36l0,1.11c0,.2-.37.36-.82.36l-18.9,0c-.52,0-.93-.18-.93-.41l0-1.06C274.56,249.62,274.93,249.46,275.38,249.46Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M275.88,244l18.82,0c.51,0,.91.18.91.4l0,1c0,.22-.43.4-.93.4l-18.82,0c-.51,0-.91-.18-.9-.4l0-1C275,244.15,275.38,244,275.88,244Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.94"
          y1="23.04"
          x2="40.4"
          y2="17.57"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.99"
          y1="24.68"
          x2="40.46"
          y2="19.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.7"
          y1="28.59"
          x2="40.04"
          y2="23.05"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.76"
          y1="30.13"
          x2="40.02"
          y2="24.7"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.97"
          y1="34.01"
          x2="39.88"
          y2="28.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.89"
          y1="35.65"
          x2="39.91"
          y2="30.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.43"
          y1="39.54"
          x2="40.03"
          y2="34.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.5"
          y1="41.16"
          x2="39.87"
          y2="35.69"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.58"
          y1="45.01"
          x2="39.56"
          y2="39.53"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.59"
          y1="46.64"
          x2="39.45"
          y2="41.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M295.76,246"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M274.62,283l18.76,0c2,0,3.59.72,3.57,1.6l-.12,3.89c0,.88-1.66,1.59-3.66,1.59l-18.76,0c-2,0-3.59-.72-3.57-1.59l.11-3.9C271,283.68,272.62,283,274.62,283Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown6">
        <path
          id="ADULT_DENT_Endo_Crown1_6"
          v-if="selectedTooth.endo_crown.crown1"
          d="M276.41,310.65a.84.84,0,0,1-.47.93c-.25.13-1.11.49-6.92-.63a45.64,45.64,0,0,1-6.32-1.57c-2.17-.73-2.79-1.18-3.14-1.56a10,10,0,0,1-.9-1.3c-.35-.53-.63-1-.82-1.27l17.88,0a.52.52,0,0,1,.33.18.15.15,0,0,1,0,.09C276.19,307.25,276.3,309,276.41,310.65Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_6"
          v-if="selectedTooth.endo_crown.crown2"
          d="M300.07,310.87a46.33,46.33,0,0,1-6.54,1.35,1.56,1.56,0,0,1-.66.06.72.72,0,0,1-.69-.88v-4.91c0-.69,1.06-1.24,2.36-1.24l14.66.07a.88.88,0,0,1,.5.29c.13.21-.09.39-.12.41l-3.3,2.42A34.54,34.54,0,0,1,300.07,310.87Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical6"
        v-if="selectedTooth.periapical.periapical1"
        d="M269.83,245.09c.49-.11-.09-1-.5-3.47-.36-2.12-.06-2.23-.5-3.73-.38-1.31-.66-1.4-1-2.79s0-1.41-.4-2.63-.88-1.8-.3-2.52a2.4,2.4,0,0,1,1.69-.89,3.93,3.93,0,0,1,2,.47,6.12,6.12,0,0,1,2.09,1.52c.84.89,1.82,1.75,2.68,2.63,1.28,1.3,1.16,1.1,2.29,2.26.27.27,1.43,1.46,2.89,3.1s2.12,2.4,2.88,3.37c1,1.31,1.26,1.75,1.49,1.73.54,0,.46-2.45-.4-4.68a14.29,14.29,0,0,0-2.88-4.46,22,22,0,0,0-7.76-5.84c-2.18-1-6.2-2.9-8.65-2.26-1.72.45-1.81,2-2,5.2-.15,2.63.33,4.32,1.19,7.36a7.48,7.48,0,0,0,1.59,3C267.35,243.81,269.17,245.22,269.83,245.09Z"
        transform="translate(-254.87 -226.52)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
      <g id="ADULT_DENT_Occlusal_Veneer6">
        <path
          id="ADULT_DENT_Occlusal_Veneer6_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M276.55,310.72a.83.83,0,0,1-.46.93c-.26.14-1.12.49-6.93-.63a45.64,45.64,0,0,1-6.32-1.57c-2.16-.73-2.79-1.18-3.14-1.56a11.23,11.23,0,0,1-.9-1.3c-.35-.53-.63-1-.82-1.27l17.88,0a.52.52,0,0,1,.33.18.16.16,0,0,1,0,.09Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer6_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M300.21,310.94a46,46,0,0,1-6.54,1.35,1.4,1.4,0,0,1-.66.06.72.72,0,0,1-.69-.88v-4.91c0-.69,1.06-1.24,2.36-1.24l14.66.07a.88.88,0,0,1,.5.29c.13.21-.09.39-.11.41l-3.31,2.42A34.23,34.23,0,0,1,300.21,310.94Z"
          transform="translate(-254.87 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer6">
        <path
          id="ADULT_DENT_Occlusal_Veneer6_2"
          v-if="selectedTooth.crown.onlay"
          d="M276.55,310.72a.83.83,0,0,1-.46.93c-.26.14-1.12.49-6.93-.63a45.64,45.64,0,0,1-6.32-1.57c-2.16-.73-2.79-1.18-3.14-1.56a11.23,11.23,0,0,1-.9-1.3c-.35-.53-.63-1-.82-1.27l17.88,0a.52.52,0,0,1,.33.18.16.16,0,0,1,0,.09Z"
          transform="translate(-254.87 -226.52)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.49"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer6_1"
          v-if="selectedTooth.crown.onlay"
          d="M300.21,310.94a46,46,0,0,1-6.54,1.35,1.4,1.4,0,0,1-.66.06.72.72,0,0,1-.69-.88v-4.91c0-.69,1.06-1.24,2.36-1.24l14.66.07a.88.88,0,0,1,.5.29c.13.21-.09.39-.11.41l-3.31,2.42A34.23,34.23,0,0,1,300.21,310.94Z"
          transform="translate(-254.87 -226.52)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.49"
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
