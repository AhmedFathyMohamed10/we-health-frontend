<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.79 113.66"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_12_all">
      <g id="adult_dent_12">
        <path
          id="adult_dent_12_root"
          v-if="selectedTooth.dent.root1"
          d="M295,229.26c-2.95-.33-9.47,9.91-14.25,17.4a136.64,136.64,0,0,0-7.46,13.49c-8,15.67-7.52,18.73-5.09,19.53,1.71.58,3-.46,8.14-.37a41.94,41.94,0,0,1,12.89,2.42c9.22,3,11.11,6.2,12.9,5.86,3.85-.72-5.72-15.38-7.3-33.95C293.62,239.18,297.84,229.59,295,229.26Z"
          transform="translate(-254.3 -226.5)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.64"
        />
        <path
          id="adult_dent_12_crown"
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
          d="M268.37,280.43c-2,.85-2,1.75-4.41,5.3-2.19,3.21-2.46,2.82-5.77,7.44-2.68,3.76-3.19,5-3.05,6.52a6.07,6.07,0,0,0,1.7,3.72c1.53,1.67,4,2.65,9,4.55,4.77,1.84,7.76,3,12.39,3.63a26.13,26.13,0,0,0,6.95.38c3.12-.33,3.45-1.11,8.32-2.52,4.41-1.27,5.33-1,8.48-2.23,3.57-1.42,4.4-2.61,4.58-2.88.39-.6.35-.93.34-2.89,0-4,.16-3.66,0-4.74a11,11,0,0,0-1.36-4.37,16.13,16.13,0,0,0-3-3.63c-3.55-3.17-11.55-7.54-22.91-8.75C275.85,279.57,271.55,279.11,268.37,280.43Z"
          transform="translate(-254.3 -226.5)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.64"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I12"
        v-if="selectedTooth.filling_caries_class_i"
        d="M286,311.3l-4.5.09a36.32,36.32,0,0,1-5.57-.85l-3.87-1-1.56-.42c0-.75-.09-2-.15-3.49-.09-2.56-.07-3.38,1-4a7.44,7.44,0,0,1,3.35-.66h12.61c2.62,0,4.73,1.16,4.73,2.6v5.62c-1,.3-2,.64-3.11,1S286.93,310.94,286,311.3Z"
        transform="translate(-254.3 -226.5)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.55"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial12"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M270.2,308.64l-6.8-2.35a19.43,19.43,0,0,1-2.32-1.1,10.56,10.56,0,0,1-4.8-4.93l.46-3.57q1.41-1.68,2.79-3.48c.65-.84,1.26-1.67,1.86-2.49h3.81c2.94,0,5.32,1.3,5.32,2.92v13.64C270.41,307.73,270.31,308.19,270.2,308.64Z"
        transform="translate(-254.3 -226.5)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.55"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal12"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M292.51,309c-1.28-.19-.23-3.32-.35-7.24a37.93,37.93,0,0,0-.73-7.1c-.45-1.82-.95-3,.41-3.82,1-.61,2.63-.65,5.81-.73,2.46-.06,4.37-.1,5.48.59a3.35,3.35,0,0,1,1.08,1.37,6.78,6.78,0,0,1,.67,1.68c.16.56.12.59.41,1.91a13.07,13.07,0,0,1,.33,1.59,11.58,11.58,0,0,1,0,1.64c0,1.27,0,1.91,0,2.37a9.14,9.14,0,0,1,.17,1.68,2.52,2.52,0,0,1-.58,1.73,9.46,9.46,0,0,1-2.74,1.5,19.78,19.78,0,0,1-2.58,1c-.36.12-1.29.34-3.15.77l-2.32.55A11.13,11.13,0,0,1,292.51,309Z"
        transform="translate(-254.3 -226.5)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.55"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V12"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.9"
        y="57.12"
        width="18.3"
        height="2.8"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.55"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal12"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M305.52,297l-7.27.53c-2.05,0-3.72-.92-3.72-2V294.3c0-1.13,1.67-2,3.72-2l6.13.6h0l.14.09C304.86,294.3,305.19,295.64,305.52,297Z"
        transform="translate(-254.3 -226.5)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.55"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial12"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M266.4,297.52h-3.5l-5.53-1.06h0l2.89-3.59h0l6.14-.61c2.05,0,3.72.91,3.72,2v1.18C270.12,296.6,268.45,297.52,266.4,297.52Z"
        transform="translate(-254.3 -226.5)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.55"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo12"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M291.73,236.16c-5.83-.64-22.79,41.15-17.17,42.22.32.06,1.1.06,3.72.31s3.78.37,5.15.63a40,40,0,0,1,5.73,1.57h0s3.14,1.7,4.29,1.57c2.89-.32.22-12.88-.86-21.66C290.45,243.33,294.12,236.42,291.73,236.16Z"
        transform="translate(-254.3 -226.5)"
        stroke-miterlimit="10"
        stroke-width="0.55"
      />
      <g id="ADULT_DENT_Post12" v-if="selectedTooth.post.post1">
        <path
          d="M275.47,280l14.39,1.07c.54,0,.92.4.87.8l-.37,2.86a.93.93,0,0,1-1.06.65l-14.39-1.07c-.53,0-.92-.39-.87-.79l.37-2.87A.94.94,0,0,1,275.47,280Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M286.3,246.5l1.81.13c.95.07,1.64.7,1.54,1.41l-4.2,32.13a1.64,1.64,0,0,1-1.87,1.15l-1.82-.13c-.94-.07-1.63-.7-1.54-1.41l4.2-32.13A1.65,1.65,0,0,1,286.3,246.5Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M278.77,273.34l9.84.73c.27,0,.46.2.43.39l-.12.93a.46.46,0,0,1-.52.32l-9.84-.74c-.27,0-.46-.19-.43-.39l.12-.92A.46.46,0,0,1,278.77,273.34Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M279.25,268.43l9.91.74c.24,0,.42.18.4.36l-.13,1a.42.42,0,0,1-.49.3l-9.9-.73c-.25,0-.43-.19-.4-.37l.12-1A.44.44,0,0,1,279.25,268.43Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M280.06,263.55l9.83.73c.26,0,.46.2.43.4l-.12.9a.46.46,0,0,1-.53.33l-9.83-.73c-.26,0-.46-.2-.43-.4l.12-.91C279.55,263.67,279.79,263.53,280.06,263.55Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M280.52,258.64l9.93.73c.24,0,.41.18.39.36l-.13,1c0,.18-.24.31-.48.3l-9.92-.74c-.24,0-.42-.18-.39-.36l.13-1A.41.41,0,0,1,280.52,258.64Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M281.15,253.74l10,.74a.36.36,0,0,1,.38.35l-.13,1a.4.4,0,0,1-.46.29l-9.88-.74c-.28,0-.47-.2-.45-.4l.13-.95A.4.4,0,0,1,281.15,253.74Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M282,248.85l9.83.73c.27,0,.46.2.43.4l-.12.91a.46.46,0,0,1-.52.33l-9.84-.73c-.26,0-.46-.2-.43-.4l.12-.91A.47.47,0,0,1,282,248.85Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="26.55"
          y1="27.31"
          x2="37.8"
          y2="23.19"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="26.41"
          y1="28.77"
          x2="37.67"
          y2="24.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="25.86"
          y1="32.25"
          x2="37.06"
          y2="28.07"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="25.73"
          y1="33.63"
          x2="36.88"
          y2="29.55"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="25.45"
          y1="37.11"
          x2="36.41"
          y2="32.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="25.24"
          y1="38.57"
          x2="36.27"
          y2="34.42"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="24.61"
          y1="42.02"
          x2="35.93"
          y2="37.93"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="24.48"
          y1="43.47"
          x2="35.68"
          y2="39.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="24.13"
          y1="46.92"
          x2="35.13"
          y2="42.77"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="23.97"
          y1="48.37"
          x2="34.9"
          y2="44.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M292.16,251.43"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M277.35,283.64l9.81.73c1,.08,1.8.77,1.7,1.55l-.45,3.48a1.84,1.84,0,0,1-2.08,1.28l-9.8-.73c-1-.08-1.81-.78-1.71-1.56l.46-3.48A1.82,1.82,0,0,1,277.35,283.64Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
      </g>
      <g id="ADULT_DENT_gingivitis12">
        <path
          id="ADULT_DENT_Left_gingivitis12"
          v-if="selectedTooth.gingivitis.left"
          d="M263,285.51c.79-.08.07-1.42,1.85-3.12,1.24-1.18,2.64-1.55,2.47-2.37-.13-.59-.9-.68-1.54-1.44a2.42,2.42,0,0,1-.31-2.53c1.62-5.67,1.59-5.62,1.69-5.83,2-4.16,2.26-3.89,3.55-6.85,1.46-3.34,1-3.5,2.31-5.66,1.55-2.57,3-3.76,2.31-4.14-.94-.47-5,.62-7.86,2.2-6.67,3.7-1.61,7.36-6.32,16.73-1.5,3-3.4,5.37-2.15,8.7C259.81,283.51,261.93,285.62,263,285.51Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          id="ADULT_DENT_Right_gingivitis12"
          v-if="selectedTooth.gingivitis.right"
          d="M308,294.89c-.9-.08.16-1.84-2-3.89-1.46-1.38-3.53-2.08-3.08-3,.18-.39.59-.41,1.08-.93a2.31,2.31,0,0,0,.31-2.62c-1-2.6-1.26-5.28-2.47-7.85a59.63,59.63,0,0,1-3.24-9.13c-.88-3.43-.38-3.19-1.38-7.44-1.1-4.63-2.12-6.65-1.24-6.84s3.85,2.2,5.71,4.22c2.53,2.77,4.16,5.81,5.39,12.43,1.8,9.64-.52,9.26,1.85,13.09,1.45,2.34,3.52,4.43,2.77,7.52C311.07,292.83,309,295,308,294.89Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          id="ADULT_DENT_Left_periodontal12"
          v-if="selectedTooth.periodontal.left"
          d="M263,285.51c.79-.08.07-1.42,1.85-3.12,1.24-1.18,2.64-1.55,2.47-2.37-.13-.59-.9-.68-1.54-1.44a2.42,2.42,0,0,1-.31-2.53c1.62-5.67,1.59-5.62,1.69-5.83,2-4.16,2.26-3.89,3.55-6.85,1.46-3.34,1-3.5,2.31-5.66,1.55-2.57,3-3.76,2.31-4.14-.94-.47-5,.62-7.86,2.2-6.67,3.7-1.61,7.36-6.32,16.73-1.5,3-3.4,5.37-2.15,8.7C259.81,283.51,261.93,285.62,263,285.51Z"
          transform="translate(-254.3 -226.5)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          id="ADULT_DENT_Right_periodontal12"
          v-if="selectedTooth.periodontal.right"
          d="M308,294.89c-.9-.08.16-1.84-2-3.89-1.46-1.38-3.53-2.08-3.08-3,.18-.39.59-.41,1.08-.93a2.31,2.31,0,0,0,.31-2.62c-1-2.6-1.26-5.28-2.47-7.85a59.63,59.63,0,0,1-3.24-9.13c-.88-3.43-.38-3.19-1.38-7.44-1.1-4.63-2.12-6.65-1.24-6.84s3.85,2.2,5.71,4.22c2.53,2.77,4.16,5.81,5.39,12.43,1.8,9.64-.52,9.26,1.85,13.09,1.45,2.34,3.52,4.43,2.77,7.52C311.07,292.83,309,295,308,294.89Z"
          transform="translate(-254.3 -226.5)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          id="ADULT_DENT_Left_perio12"
          v-if="selectedTooth.perio.left"
          d="M263,285.51c.79-.08.07-1.42,1.85-3.12,1.24-1.18,2.64-1.55,2.47-2.37-.13-.59-.9-.68-1.54-1.44a2.42,2.42,0,0,1-.31-2.53c1.62-5.67,1.59-5.62,1.69-5.83,2-4.16,2.26-3.89,3.55-6.85,1.46-3.34,1-3.5,2.31-5.66,1.55-2.57,3-3.76,2.31-4.14-.94-.47-5,.62-7.86,2.2-6.67,3.7-1.61,7.36-6.32,16.73-1.5,3-3.4,5.37-2.15,8.7C259.81,283.51,261.93,285.62,263,285.51Z"
          transform="translate(-254.3 -226.5)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          id="ADULT_DENT_Right_perio12"
          v-if="selectedTooth.perio.right"
          d="M308,294.89c-.9-.08.16-1.84-2-3.89-1.46-1.38-3.53-2.08-3.08-3,.18-.39.59-.41,1.08-.93a2.31,2.31,0,0,0,.31-2.62c-1-2.6-1.26-5.28-2.47-7.85a59.63,59.63,0,0,1-3.24-9.13c-.88-3.43-.38-3.19-1.38-7.44-1.1-4.63-2.12-6.65-1.24-6.84s3.85,2.2,5.71,4.22c2.53,2.77,4.16,5.81,5.39,12.43,1.8,9.64-.52,9.26,1.85,13.09,1.45,2.34,3.52,4.43,2.77,7.52C311.07,292.83,309,295,308,294.89Z"
          transform="translate(-254.3 -226.5)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
      </g>
      <g id="ADULT_DENT_Implant12" v-if="selectedTooth.implant">
        <path
          d="M263.62,277.75l35,0c1.29,0,2.33.41,2.32.91l-.12,3.6c0,.5-1.08.91-2.38.91l-35,0c-1.3,0-2.34-.4-2.32-.91l.12-3.6C261.25,278.15,262.32,277.75,263.62,277.75Z"
          transform="translate(-254.3 -226.5)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M280.53,235.07H285c2.3,0,4.14.72,4.11,1.61L287.74,277c0,.89-1.91,1.61-4.21,1.6h-4.42c-2.3,0-4.14-.72-4.11-1.61l1.32-40.36C276.35,235.79,278.24,235.07,280.53,235.07Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M269.73,269.15l24,0c.64,0,1.15.21,1.14.45l0,1.16c0,.25-.53.45-1.17.44l-24,0c-.64,0-1.15-.21-1.14-.45l0-1.16C268.57,269.34,269.1,269.14,269.73,269.15Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M269.55,263l24.12,0c.59,0,1.07.19,1.06.42l0,1.22c0,.23-.5.41-1.09.41l-24.12,0c-.59,0-1.07-.18-1.06-.41l0-1.22C268.47,263.18,269,263,269.55,263Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M270.16,256.84l23.92,0c.65,0,1.17.21,1.16.46l0,1.14c0,.25-.54.45-1.19.45l-23.92,0c-.65,0-1.17-.2-1.16-.45l0-1.14C269,257.05,269.51,256.84,270.16,256.84Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M269.94,250.69l24.15,0c.58,0,1.05.19,1,.41l0,1.23c0,.23-.48.41-1.07.41l-24.15,0c-.59,0-1.06-.18-1.05-.41l0-1.23C268.87,250.88,269.35,250.69,269.94,250.69Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M270.11,244.54l24.21,0c.57,0,1,.18,1,.4l0,1.25c0,.22-.47.4-1,.4l-24.05,0c-.66,0-1.19-.2-1.18-.46l0-1.19C269.07,244.72,269.54,244.54,270.11,244.54Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M270.75,238.39l23.94,0c.65,0,1.16.2,1.15.45l0,1.15c0,.25-.54.45-1.19.45l-23.93,0c-.65,0-1.16-.2-1.16-.45l0-1.15C269.58,238.59,270.11,238.39,270.75,238.39Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="15.08"
          y1="18.16"
          x2="41.12"
          y2="12.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="15.16"
          y1="19.99"
          x2="41.19"
          y2="13.83"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="14.78"
          y1="24.37"
          x2="40.66"
          y2="18.16"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="14.86"
          y1="26.09"
          x2="40.63"
          y2="20.02"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="15.12"
          y1="30.45"
          x2="40.46"
          y2="24.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="15.03"
          y1="32.28"
          x2="40.5"
          y2="26.14"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="14.44"
          y1="36.64"
          x2="40.64"
          y2="30.53"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="14.52"
          y1="38.45"
          x2="40.44"
          y2="32.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="14.64"
          y1="42.77"
          x2="40.05"
          y2="36.62"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <line
          x1="14.64"
          y1="44.6"
          x2="39.91"
          y2="38.5"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M296,240.69"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
        <path
          d="M269.14,282.08l23.87,0c2.54,0,4.57.8,4.54,1.78l-.14,4.37c0,1-2.12,1.78-4.66,1.77l-23.87,0c-2.54,0-4.57-.8-4.54-1.78l.14-4.37C264.51,282.87,266.6,282.08,269.14,282.08Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.55"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown12">
        <path
          id="ADULT_DENT_Endo_Crown1_12"
          v-if="selectedTooth.endo_crown.crown1"
          d="M287.71,310.51a18.23,18.23,0,0,1-5.63.8,16.52,16.52,0,0,1-7-1.51,44.77,44.77,0,0,1-5.48-1.47,32.49,32.49,0,0,1-6-2.71l-4.93-1.94c-1.29-.41-1.77-1.1-1.39-1.52a2.06,2.06,0,0,1,1.08-.42h44.77a4.34,4.34,0,0,1,2.16.42c.87.55.73,1.62-.73,2.4L300,307c-1.84.41-3.81.9-5.86,1.48C291.73,309.14,289.6,309.83,287.71,310.51Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.64"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_12"
          v-if="selectedTooth.endo_crown.crown2"
          d="M289.67,295.12l-17.63.23-2.73,5.75c-.07.14.12.27.38.27h23c.27,0,.46-.14.38-.28Z"
          transform="translate(-254.3 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.64"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical12"
        v-if="selectedTooth.periapical.periapical1"
        d="M280.19,245.62c.58,0,1.3-2.58,4.19-6.89,2.69-4,2.95-3,4.29-5.53a11.69,11.69,0,0,1,3.76-3.89,4.86,4.86,0,0,1,2.36-.77,3.38,3.38,0,0,1,1.4.18,1.06,1.06,0,0,1,.64,1.18c-.08,1.31.42,2.65,0,3.94-.71,2.21-.46,4.48-.75,6.71-.63,4.9-.64,5.5-.32,5.54.67.08,2.48-2.3,3.44-4.65.85-2.1.31-2.39,1-5.77.73-3.8,1.64-4.59.54-6.12a6.66,6.66,0,0,0-4.75-2.74c-3.37-.33-6.5,1.87-8.56,3.32a16.82,16.82,0,0,0-6.12,7.77,15.57,15.57,0,0,0-1.19,4C280.05,242.11,279.53,245.56,280.19,245.62Z"
        transform="translate(-254.3 -226.5)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.55"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer12"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M287.86,310.59a18.18,18.18,0,0,1-5.63.8,16.57,16.57,0,0,1-7-1.51,42.88,42.88,0,0,1-5.49-1.48,31.91,31.91,0,0,1-6-2.7l-4.93-1.94c-1.29-.41-1.76-1.1-1.39-1.52a2.06,2.06,0,0,1,1.09-.42h44.76a4.33,4.33,0,0,1,2.16.42c.88.55.73,1.62-.73,2.4l-4.64,2.42c-1.85.42-3.82.91-5.87,1.49C291.88,309.22,289.75,309.91,287.86,310.59Z"
        transform="translate(-254.3 -226.5)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.64"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer12"
        v-if="selectedTooth.crown.onlay"
        d="M287.86,310.59a18.18,18.18,0,0,1-5.63.8,16.57,16.57,0,0,1-7-1.51,42.88,42.88,0,0,1-5.49-1.48,31.91,31.91,0,0,1-6-2.7l-4.93-1.94c-1.29-.41-1.76-1.1-1.39-1.52a2.06,2.06,0,0,1,1.09-.42h44.76a4.33,4.33,0,0,1,2.16.42c.88.55.73,1.62-.73,2.4l-4.64,2.42c-1.85.42-3.82.91-5.87,1.49C291.88,309.22,289.75,309.91,287.86,310.59Z"
        transform="translate(-254.3 -226.5)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.64"
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
