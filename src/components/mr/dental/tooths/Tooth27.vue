<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.65 113.63"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_27_all">
      <g id="adult_dent_27">
        <path
          id="adult_dent_27_crown"
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
          d="M287.28,245.94c-.94-.06-4.1-.2-10.85,1.8-6.48,1.92-13.22,3.91-14.7,7.65-.68,1.71,0,3.09.55,4.28,5.1,11.53-1.84,15.85,4.6,20.93,5.76,4.54,16.23,4.94,19.48,5.06,3.74.14,11.16.43,16-2.47,1.53-.93,2.7-3.11,5-7.43,3.22-6.17,3.86-9,4-9.79a13.91,13.91,0,0,0,.18-6.42c-.49-2.12-1-4.28-3.67-5.74-2.13-1.15-3.16-.53-6.25-1.8-3.5-1.43-3.06-2.6-6.43-4.16A23,23,0,0,0,287.28,245.94Z"
          transform="translate(-254.88 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
        <path
          id="adult_dent_27_root"
          v-if="selectedTooth.dent.root1"
          d="M268.16,282.85c-1.63.84-.44,2.69.74,6.75,1,3.56,1.24,7.21,1.65,14.52a49.21,49.21,0,0,1-.92,15c-1.13,4.94-2,8.71-5.69,13.16-2.93,3.53-5.68,5.15-5,5.63,1.29.86,12.33-2.91,20.77-8.66A42.06,42.06,0,0,0,293,314.92c1.64-2.72,1.06-2.43,5.52-15,3.55-10,5.12-13.57,2.39-14.75-2.06-.88-4.07.66-9.74,1C279.2,287,271.41,281.18,268.16,282.85Z"
          transform="translate(-254.88 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial27"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M308.06,272.13h-8.64c-2.07,0-3.75-1-3.75-2.3v-18.9c0-.39,0-1.17.53-1.27.78-.15,2.19,1.44,2.31,1.58l2.06,1.34a19.45,19.45,0,0,0,2.84.79c1.58.32,2.28.28,3.09.48a4.68,4.68,0,0,1,3.23,2.92q.33,1.58.63,3.18c.18,1,.36,2,.51,3a20.84,20.84,0,0,1-1,5.15A23.61,23.61,0,0,1,308.06,272.13Z"
        transform="translate(-254.88 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal27"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M275.29,249c-.82-.2-2.1.26-4.67,1.18a25,25,0,0,0-5.15,2.57,8.08,8.08,0,0,0-2.26,1.87,4.13,4.13,0,0,0-.8,2.47c0,1,.45,1.45,1.12,3a19.44,19.44,0,0,1,1.13,3.35,11.35,11.35,0,0,1,.7,4.34c-.21,2-1.08,2.46-.38,3.06s2.34.44,6.61.59c5.24.2,5.57.65,6.44.3,2.77-1.1-1.15-5.4-1.77-12.63C275.79,253.42,277.59,249.51,275.29,249Z"
        transform="translate(-254.88 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V27"
        v-if="selectedTooth.filling_caries_class_v"
        x="24.66"
        y="50.75"
        width="15.17"
        height="2.6"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal27"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M271.26,267.7h-2.9l-2.48-.77-.65-.2c-.13-1.08-.27-2.15-.4-3.23l3.53-.66h2.9c1.71,0,3.09.84,3.09,1.88v1.1C274.35,266.86,273,267.7,271.26,267.7Z"
        transform="translate(-254.88 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial27"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M307.21,267.7h-4.35c-1.5,0-2.71-.85-2.71-1.91v-1c0-1.06,1.21-1.91,2.71-1.91h4.35l3.25.94h0c-.17,1-.35,2.06-.52,3.08h0Z"
        transform="translate(-254.88 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.48"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo27"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M275.2,284.77c.69-.14,1,.29,5,1.12a44.36,44.36,0,0,0,6.48,1c4.72.29,6.21-.94,7.81-.4,3,1,1.18,6.41-.5,11.19-3.78,10.8-5.67,16.2-6.15,17-5.84,9.75-16.2,19.1-18.77,18.42s8.45-11.23,7.48-27.88C276,296.11,271.86,285.41,275.2,284.77Z"
        transform="translate(-254.88 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.48"
      />
      <g id="ADULT_DENT_Post27" v-if="selectedTooth.post.post1">
        <path
          d="M293.48,285.41l-15.26-1.08c-.57,0-1-.42-.87-.85l.64-3.07a1.09,1.09,0,0,1,1.19-.7l15.26,1.07c.56,0,.95.42.86.85l-.64,3.08A1.1,1.1,0,0,1,293.48,285.41Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M279.16,321.4l-1.93-.14c-1-.07-1.68-.74-1.53-1.5l7.14-34.46a1.94,1.94,0,0,1,2.1-1.25l1.93.14c1,.07,1.68.74,1.53,1.5l-7.15,34.47A1.93,1.93,0,0,1,279.16,321.4Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M289.41,292.58,279,291.85c-.28,0-.47-.21-.43-.42l.21-1a.53.53,0,0,1,.58-.34l10.44.73c.28,0,.47.21.43.42l-.21,1A.53.53,0,0,1,289.41,292.58Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M288.49,297.85,278,297.11c-.26,0-.44-.19-.4-.39l.22-1a.49.49,0,0,1,.54-.32l10.51.74c.26,0,.44.19.4.39l-.22,1A.5.5,0,0,1,288.49,297.85Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M287.22,303.09l-10.42-.73c-.28,0-.48-.21-.43-.43l.2-1a.54.54,0,0,1,.59-.36l10.43.74c.28,0,.47.21.43.42l-.2,1A.56.56,0,0,1,287.22,303.09Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M286.32,308.36l-10.53-.75c-.25,0-.43-.18-.39-.38l.22-1.05a.51.51,0,0,1,.54-.32l10.52.75c.26,0,.43.19.39.38l-.22,1.05A.51.51,0,0,1,286.32,308.36Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M285.24,313.61l-10.55-.74c-.24,0-.41-.19-.38-.38l.23-1.06a.47.47,0,0,1,.52-.31l10.48.74c.28,0,.48.21.43.43l-.21,1A.48.48,0,0,1,285.24,313.61Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M284,318.85l-10.43-.73c-.28,0-.47-.21-.43-.43l.2-1a.55.55,0,0,1,.59-.35l10.43.74c.28,0,.48.21.43.42l-.2,1A.55.55,0,0,1,284,318.85Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="30.7"
          y1="86.76"
          x2="18.35"
          y2="91.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="30.97"
          y1="85.2"
          x2="18.61"
          y2="89.69"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="31.84"
          y1="81.46"
          x2="19.55"
          y2="86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="32.09"
          y1="79.98"
          x2="19.86"
          y2="84.41"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="32.68"
          y1="76.25"
          x2="20.64"
          y2="80.74"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="33.02"
          y1="74.69"
          x2="20.92"
          y2="79.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="33.99"
          y1="70.98"
          x2="21.57"
          y2="75.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="34.25"
          y1="69.43"
          x2="21.95"
          y2="73.9"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="34.9"
          y1="65.73"
          x2="22.82"
          y2="70.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="35.19"
          y1="64.17"
          x2="23.19"
          y2="68.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M273.31,316.14"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M291.77,281.54l-10.4-.73c-1.1-.08-1.86-.83-1.69-1.66l.78-3.73a2.14,2.14,0,0,1,2.32-1.38l10.4.73c1.1.08,1.86.82,1.69,1.66l-.78,3.73A2.14,2.14,0,0,1,291.77,281.54Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      </g>
      <g id="ADULT_DENT_gingivitis27">
        <path
          id="ADULT_DENT_Right_gingivitis27"
          v-if="selectedTooth.gingivitis.right"
          d="M306.82,278.75c-1,.11-.14,2-2.36,3.66-1.54,1.12-3.63,1.42-3.47,2,.11.39,1,.39,1.74.87,1.24.82.77,2.23.47,3.18-1.84,5.72.4.36-1.73,5.88-.75,1.93-1.31,3.88-2.21,5.78-1.07,2.28-1.81,3.29-1.1,3.66.89.47,3.57-.28,5.35-1.25,4.24-2.3,1.84-5,4.41-11.85,1.54-4.09,3.47-5.94,2.05-9C309.2,280.12,307.7,278.65,306.82,278.75Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          id="ADULT_DENT_Left_gingivitis27"
          v-if="selectedTooth.gingivitis.left"
          d="M263.38,277.69c.76.08.44,1.15,1.89,2.41s3,1.41,2.83,2c-.11.45-1,.44-1.57,1.06s-.28,1.35,0,2.12c.42,1.15.46,2.34.94,3.47.25.58.69,2.74,1.58,7,1.42,6.91.79,7.23.47,7.32-1.32.36-4.63-1.65-6.45-3.95-2.67-3.36,0-4.6-1.26-10.22-.92-4.09-2.94-6.07-1.1-9.06C261.37,278.82,262.54,277.6,263.38,277.69Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          id="ADULT_DENT_Right_periodontal27"
          v-if="selectedTooth.periodontal.right"
          d="M306.82,278.75c-1,.11-.14,2-2.36,3.66-1.54,1.12-3.63,1.42-3.47,2,.11.39,1,.39,1.74.87,1.24.82.77,2.23.47,3.18-1.84,5.72.4.36-1.73,5.88-.75,1.93-1.31,3.88-2.21,5.78-1.07,2.28-1.81,3.29-1.1,3.66.89.47,3.57-.28,5.35-1.25,4.24-2.3,1.84-5,4.41-11.85,1.54-4.09,3.47-5.94,2.05-9C309.2,280.12,307.7,278.65,306.82,278.75Z"
          transform="translate(-254.88 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          id="ADULT_DENT_Left_periodontal27"
          v-if="selectedTooth.periodontal.left"
          d="M263.38,277.69c.76.08.44,1.15,1.89,2.41s3,1.41,2.83,2c-.11.45-1,.44-1.57,1.06s-.28,1.35,0,2.12c.42,1.15.46,2.34.94,3.47.25.58.69,2.74,1.58,7,1.42,6.91.79,7.23.47,7.32-1.32.36-4.63-1.65-6.45-3.95-2.67-3.36,0-4.6-1.26-10.22-.92-4.09-2.94-6.07-1.1-9.06C261.37,278.82,262.54,277.6,263.38,277.69Z"
          transform="translate(-254.88 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          id="ADULT_DENT_Right_perio27"
          v-if="selectedTooth.perio.right"
          d="M306.82,278.75c-1,.11-.14,2-2.36,3.66-1.54,1.12-3.63,1.42-3.47,2,.11.39,1,.39,1.74.87,1.24.82.77,2.23.47,3.18-1.84,5.72.4.36-1.73,5.88-.75,1.93-1.31,3.88-2.21,5.78-1.07,2.28-1.81,3.29-1.1,3.66.89.47,3.57-.28,5.35-1.25,4.24-2.3,1.84-5,4.41-11.85,1.54-4.09,3.47-5.94,2.05-9C309.2,280.12,307.7,278.65,306.82,278.75Z"
          transform="translate(-254.88 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          id="ADULT_DENT_Left_perio27"
          v-if="selectedTooth.perio.left"
          d="M263.38,277.69c.76.08.44,1.15,1.89,2.41s3,1.41,2.83,2c-.11.45-1,.44-1.57,1.06s-.28,1.35,0,2.12c.42,1.15.46,2.34.94,3.47.25.58.69,2.74,1.58,7,1.42,6.91.79,7.23.47,7.32-1.32.36-4.63-1.65-6.45-3.95-2.67-3.36,0-4.6-1.26-10.22-.92-4.09-2.94-6.07-1.1-9.06C261.37,278.82,262.54,277.6,263.38,277.69Z"
          transform="translate(-254.88 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      </g>
      <g id="ADULT_DENT_Implant27" v-if="selectedTooth.implant">
        <path
          d="M301.6,288.15l-30.59,0c-1.13,0-2.05-.37-2-.84L269,284c0-.47.94-.84,2.07-.85l30.59,0c1.14,0,2.05.38,2,.84l-.07,3.34C303.66,287.77,302.74,288.15,301.6,288.15Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M287.24,327.72h-3.87c-2,0-3.61-.66-3.6-1.48l.76-37.39c0-.82,1.66-1.49,3.67-1.49h3.86c2,0,3.62.66,3.6,1.49l-.76,37.38C290.88,327.05,289.24,327.72,287.24,327.72Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M296.34,296.14l-20.94,0c-.55,0-1-.18-1-.41l0-1.07c0-.23.46-.42,1-.42l20.94,0c.56,0,1,.18,1,.41l0,1.07C297.35,296,296.9,296.14,296.34,296.14Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M296.56,301.83l-21.07,0c-.52,0-.94-.17-.93-.38l0-1.13c0-.21.43-.39.95-.39l21.07,0c.52,0,.94.18.93.39l0,1.13C297.51,301.66,297.08,301.83,296.56,301.83Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M296.09,307.53l-20.9,0c-.57,0-1-.19-1-.42l0-1.06c0-.23.47-.42,1-.42l20.9,0c.57,0,1,.19,1,.42l0,1.06C297.12,307.34,296.66,307.53,296.09,307.53Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M296.34,313.23l-21.09,0c-.52,0-.93-.17-.92-.38l0-1.14c0-.21.42-.38.94-.38l21.09,0c.51,0,.93.17.92.38l0,1.14C297.27,313.06,296.86,313.23,296.34,313.23Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M296.25,318.93l-21.15,0c-.49,0-.89-.17-.89-.37l0-1.16c0-.21.42-.37.91-.37l21,0c.58,0,1,.19,1,.42l0,1.11C297.16,318.76,296.75,318.93,296.25,318.93Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M295.75,324.63l-20.91,0c-.57,0-1-.18-1-.41l0-1.07c0-.23.46-.42,1-.42l20.91,0c.56,0,1,.18,1,.41l0,1.07C296.77,324.44,296.31,324.63,295.75,324.63Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.01"
          y1="92.05"
          x2="19.32"
          y2="97.79"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="41.93"
          y1="90.35"
          x2="19.24"
          y2="96.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.21"
          y1="86.3"
          x2="19.67"
          y2="92.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.13"
          y1="84.7"
          x2="19.67"
          y2="90.38"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="41.86"
          y1="80.67"
          x2="19.78"
          y2="86.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="41.92"
          y1="78.97"
          x2="19.73"
          y2="84.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.39"
          y1="74.93"
          x2="19.56"
          y2="80.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.3"
          y1="73.25"
          x2="19.72"
          y2="78.98"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.16"
          y1="69.25"
          x2="20.02"
          y2="75"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <line
          x1="42.14"
          y1="67.56"
          x2="20.12"
          y2="73.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M273.64,322.55"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
        <path
          d="M296.73,284.15l-20.85,0c-2.22,0-4-.74-4-1.64l.08-4.05c0-.91,1.83-1.65,4-1.65l20.85,0c2.22,0,4,.73,4,1.64l-.08,4.05C300.77,283.41,299,284.15,296.73,284.15Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.48"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown27">
        <path
          id="ADULT_DENT_Endo_Crown1_27"
          v-if="selectedTooth.endo_crown.crown1"
          d="M265.23,259h8c1.15,0,2.08-.57,2.08-1.28v-7.67a3.44,3.44,0,0,0-1.19-.42,4.54,4.54,0,0,0-2.29.24l-2.67,1c-.91.49-1.85,1-2.81,1.65s-1.67,1.13-2.38,1.66a14.29,14.29,0,0,0-.75,2c-.28.95-.24,1.22-.11,1.47A3.54,3.54,0,0,0,265.23,259Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_27"
          v-if="selectedTooth.endo_crown.crown2"
          d="M296.74,250c.47,0,1.05.36,1.62,1.59a9,9,0,0,0,2.7,1.46,13.9,13.9,0,0,0,4.32.72,10,10,0,0,1,2.7,1.46,5.37,5.37,0,0,1,1.83,2.38.64.64,0,0,1,0,1.05,2,2,0,0,1-1.47.38H297.31c-1.15,0-2.08-.57-2.08-1.28l0-7.49h0A5,5,0,0,1,296.74,250Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical27"
        v-if="selectedTooth.periapical.periapical1"
        d="M268.43,319.75c.26.07.27.45-.89,3.87a34.54,34.54,0,0,1-1.42,3.81,22.62,22.62,0,0,1-2.32,3.71,14.41,14.41,0,0,1-3.11,3.49,11.51,11.51,0,0,0-2.32,2.08c-.34.36-.67.75-.44,1.14s1.09.62,1.24.65a6.93,6.93,0,0,0,3.65-.65c4.49-1.57,2.83-.77,4.9-1.64a75.33,75.33,0,0,0,7.48-3.59,53.49,53.49,0,0,0,7.66-4.86,27.88,27.88,0,0,0,4.36-3.92c.88-1,1.42-1.85,1.7-1.8s-.07,1.81-.54,3a13.7,13.7,0,0,1-3.38,5.4c-3.15,3.1-7.42,4.66-9.89,5.56-3.64,1.33-3.59.73-8.37,2.4-3.13,1.1-4.5,1.83-6.68,1.69-1.83-.11-4-.83-4.72-2s.69-2.16,2.94-5.24a65.76,65.76,0,0,0,4.81-8,12.78,12.78,0,0,1,2.23-3C265.42,321.88,267.72,319.55,268.43,319.75Z"
        transform="translate(-254.88 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.48"
      />
      <g id="ADULT_DENT_Occlusal_Veneer27">
        <path
          id="ADULT_DENT_Occlusal_Veneer27_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M265.36,259.08h8c1.15,0,2.08-.57,2.08-1.28v-7.67a3.35,3.35,0,0,0-1.19-.41A4.58,4.58,0,0,0,272,250l-2.68,1c-.9.49-1.84,1-2.81,1.66s-1.67,1.12-2.37,1.65a15,15,0,0,0-.76,2c-.27.95-.24,1.22-.11,1.47A3.53,3.53,0,0,0,265.36,259.08Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer27_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M296.86,250.05c.48,0,1.06.36,1.62,1.58a9.09,9.09,0,0,0,2.7,1.46,14.07,14.07,0,0,0,4.32.73,9.79,9.79,0,0,1,2.7,1.45,5.39,5.39,0,0,1,1.84,2.38.65.65,0,0,1,0,1.06,2,2,0,0,1-1.48.37H297.44c-1.16,0-2.09-.57-2.09-1.28l.06-7.49h0A5.8,5.8,0,0,1,296.86,250.05Z"
          transform="translate(-254.88 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer27">
        <path
          id="ADULT_DENT_Occlusal_Veneer27_2"
          v-if="selectedTooth.crown.onlay"
          d="M265.36,259.08h8c1.15,0,2.08-.57,2.08-1.28v-7.67a3.35,3.35,0,0,0-1.19-.41A4.58,4.58,0,0,0,272,250l-2.68,1c-.9.49-1.84,1-2.81,1.66s-1.67,1.12-2.37,1.65a15,15,0,0,0-.76,2c-.27.95-.24,1.22-.11,1.47A3.53,3.53,0,0,0,265.36,259.08Z"
          transform="translate(-254.88 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.44"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer27_1"
          v-if="selectedTooth.crown.onlay"
          d="M296.86,250.05c.48,0,1.06.36,1.62,1.58a9.09,9.09,0,0,0,2.7,1.46,14.07,14.07,0,0,0,4.32.73,9.79,9.79,0,0,1,2.7,1.45,5.39,5.39,0,0,1,1.84,2.38.65.65,0,0,1,0,1.06,2,2,0,0,1-1.48.37H297.44c-1.16,0-2.09-.57-2.09-1.28l.06-7.49h0A5.8,5.8,0,0,1,296.86,250.05Z"
          transform="translate(-254.88 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.44"
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