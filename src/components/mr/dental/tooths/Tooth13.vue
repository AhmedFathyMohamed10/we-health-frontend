<template>
<div class="" >
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.28 113.68"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_13_all">
      <g id="adult_dent_13">
        <path
          id="adult_dent_13_root"
          v-if="selectedTooth.dent.root1"
          d="M295.9,229.76c-2.19-.23-6.59,7.52-15.4,23-2.86,5-2.78,5.21-6.9,12.48-1.75,3.09-3.12,6.25-5,9.32-2.7,4.49-4.35,6.49-3,7.16,1.71.85,5.71-1.74,14.69-2.46a46.23,46.23,0,0,1,8.67,0c7.41.76,10.13,3.18,11.86,2.56,2.39-.85-1.5-5.89-3.54-11.87-1.28-3.78-1-5.65-.7-15.66C297.16,238.06,297.4,229.93,295.9,229.76Z"
          transform="translate(-254.83 -226.48)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.76"
        />
        <path
          id="adult_dent_13_crown"
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
          d="M261.91,285a10.77,10.77,0,0,0-3.18,3.89,13.21,13.21,0,0,0-1.6,5.22c-.31,3.26-.48,5,1.24,6.86,1.21,1.28,3.52,2.21,8.15,4.09a68,68,0,0,0,8.67,2.87,27.47,27.47,0,0,0,6.9,1.22,24,24,0,0,0,6.9-.92c1.92-.47,4.13-1.19,9.74-4.09,4.79-2.48,7.18-3.72,8-4.71,1.07-1.36.95-3.3.7-7.16s-1-5.1-1.77-6a13.05,13.05,0,0,0-3.54-3,26.37,26.37,0,0,0-8.49-2.66,52.81,52.81,0,0,0-10.09-.92,50.59,50.59,0,0,0-13.63,2.15C266.4,282.8,264,283.48,261.91,285Z"
          transform="translate(-254.83 -226.48)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.76"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I13"
        v-if="selectedTooth.filling_caries_class_i"
        d="M289.39,307.48a25.91,25.91,0,0,1-4.48.76,28.93,28.93,0,0,1-5.6-.11c-.65-.15-1.65-.36-2.9-.6a17.84,17.84,0,0,1-2.61-.57,3.93,3.93,0,0,1-2-1.53v-5.86c0-1.49,2.38-2.7,5.32-2.7h12.4c2.93,0,5.31,1.21,5.31,2.7v5.86A23.17,23.17,0,0,1,289.39,307.48Z"
        transform="translate(-254.83 -226.48)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.59"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial13"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M265,303.6l4,1.59a19.81,19.81,0,0,0,3.14,1.08s-.2-.17-.3-.24c-.54-.35-.93-1.08-.21-2.8.08-3.15.16-6.31.25-9.46a1.69,1.69,0,0,0-1-2,5.83,5.83,0,0,0-2.89-.59h-5.59a6.6,6.6,0,0,0-3.42.89,1.76,1.76,0,0,0-.67,1.83,32,32,0,0,1,.09,5.41,7.91,7.91,0,0,0,2,2.1A14.8,14.8,0,0,0,265,303.6Z"
        transform="translate(-254.83 -226.48)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.59"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal13"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M295.21,304.94c-.47-.12-.23-.92-.08-1.75a20.13,20.13,0,0,0-.06-5.26c-.07-.95-.15-1.23-.41-3.85-.2-2-.22-2.56.47-3,.88-.51,1.77-.1,5.89-.25,2.84-.1,4.27-.36,4.87.12.24.19.09.29.15,1.28a12.31,12.31,0,0,0,.26,1.86,9.43,9.43,0,0,1,.17,1.85,11.73,11.73,0,0,1-.26,1.75c-.22,1.23-.33,1.44-.52,1.65a5,5,0,0,1-1.64,1.05c-3.12,1.67-2.53,1.38-3.47,1.86-2.09,1.06-1.73.83-2.6,1.3C296.17,304.57,295.61,305,295.21,304.94Z"
        transform="translate(-254.83 -226.48)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.59"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V13"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.88"
        y="56.86"
        width="19.09"
        height="3.08"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.59"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal13"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M306.12,292.69l-7.84,1.4c-2.14,0-3.88-1-3.88-2.24v-1.3c0-1.24,1.74-2.24,3.88-2.24l7.16,1.3h0Z"
        transform="translate(-254.83 -226.48)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.59"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial13"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M267,294.09l-7.92-.73h0a3.39,3.39,0,0,1,.05-2.5,5.18,5.18,0,0,1,1.44-1.87l0,0h0l6.39-.66c2.14,0,3.88,1,3.88,2.24v1.3C270.86,293.09,269.12,294.09,267,294.09Z"
        transform="translate(-254.83 -226.48)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.59"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo13"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M290.9,241c-3.22-.2-11.32,33.17-15.09,36.73-.1.09-.84.77-.44,1.08.64.48,3.25-.71,7.47-.69a40.3,40.3,0,0,1,4.48.34c3.33.37,3.78.66,4.48.52,2.51-.53,1.41-5.49.89-8.81-.68-4.38.7.81-.3-15.88C291.87,245.41,291.59,241,290.9,241Z"
        transform="translate(-254.83 -226.48)"
        stroke-miterlimit="10"
        stroke-width="0.59"
      />
      <g id="ADULT_DENT_Post13" v-if="selectedTooth.post.post1">
        <path
          d="M280,279.67l12.19,1.08a.77.77,0,0,1,.74.8l-.32,2.9a.8.8,0,0,1-.89.66L279.49,284a.77.77,0,0,1-.74-.81l.32-2.89A.79.79,0,0,1,280,279.67Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M289.13,245.77l1.54.13a1.36,1.36,0,0,1,1.31,1.42l-3.56,32.5a1.41,1.41,0,0,1-1.59,1.16l-1.54-.13a1.36,1.36,0,0,1-1.31-1.42l3.56-32.5A1.41,1.41,0,0,1,289.13,245.77Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M282.76,272.91l8.34.74a.38.38,0,0,1,.36.4l-.1.93a.39.39,0,0,1-.44.32l-8.35-.74a.37.37,0,0,1-.36-.39l.1-.93A.41.41,0,0,1,282.76,272.91Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M283.16,268l8.4.74a.36.36,0,0,1,.34.37l-.11,1a.36.36,0,0,1-.41.3l-8.4-.74a.36.36,0,0,1-.34-.37l.11-1A.37.37,0,0,1,283.16,268Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M283.85,263l8.32.74a.38.38,0,0,1,.37.4l-.1.92a.4.4,0,0,1-.45.33l-8.32-.74a.38.38,0,0,1-.37-.4l.1-.92A.4.4,0,0,1,283.85,263Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M284.24,258l8.41.75a.34.34,0,0,1,.33.36l-.11,1a.36.36,0,0,1-.4.3l-8.41-.75a.34.34,0,0,1-.33-.36l.11-1A.36.36,0,0,1,284.24,258Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M284.78,253.09l8.42.75a.34.34,0,0,1,.33.35l-.12,1a.34.34,0,0,1-.39.29l-8.37-.75a.37.37,0,0,1-.37-.4l.1-1A.35.35,0,0,1,284.78,253.09Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M285.47,248.15l8.33.74a.38.38,0,0,1,.37.4l-.1.92a.4.4,0,0,1-.45.33l-8.33-.74a.39.39,0,0,1-.37-.4l.11-.92A.4.4,0,0,1,285.47,248.15Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="29.69"
          y1="26.68"
          x2="39.22"
          y2="22.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="29.57"
          y1="28.16"
          x2="39.11"
          y2="23.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="29.11"
          y1="31.68"
          x2="38.59"
          y2="27.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="29"
          y1="33.07"
          x2="38.44"
          y2="28.94"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="28.76"
          y1="36.59"
          x2="38.05"
          y2="32.41"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="28.58"
          y1="38.07"
          x2="37.92"
          y2="33.88"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="28.05"
          y1="41.56"
          x2="37.64"
          y2="37.42"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="27.93"
          y1="43.02"
          x2="37.43"
          y2="38.86"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="27.64"
          y1="46.51"
          x2="36.96"
          y2="42.31"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="27.5"
          y1="47.98"
          x2="36.77"
          y2="43.82"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M294.1,250.76"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M281.56,283.33l8.3.73a1.51,1.51,0,0,1,1.45,1.58l-.39,3.51a1.57,1.57,0,0,1-1.76,1.29l-8.3-.74a1.49,1.49,0,0,1-1.45-1.57l.39-3.51A1.56,1.56,0,0,1,281.56,283.33Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
      </g>
      <g id="ADULT_DENT_gingivitis13">
        <path
          id="ADULT_DENT_Left_gingivitis13"
          v-if="selectedTooth.gingivitis.left"
          d="M257.21,289.26c.49,0,.21-1.53,2.09-3.44a8.52,8.52,0,0,1,3.06-2.23c1.29-.54,2.37-.67,2.57-1.21s-.59-.77-1-1.39c-.64-1.06.46-2.09,1.28-3.07,1.22-1.46,1.53-3.11,2.41-4.65l6.92-12c3.8-6,5.63-7.86,4.5-8.36-1.3-.58-5.68,1-8.68,3-6,3.86-3.31,6.91-7.4,14.22-3.65,6.53-7.71,7.51-7.88,12.83C255,286.28,256.53,289.27,257.21,289.26Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          id="ADULT_DENT_Right_gingivitis13"
          v-if="selectedTooth.gingivitis.right"
          d="M308.18,289c-.19,0-.37-.13-1.77-2.79-1-1.86-1.09-2.18-1.77-2.6-1.36-.85-2.85-.77-3.05-1.4s1.08-.8,1.44-1.76c.26-.69-.19-1.12-.8-2.23a27.59,27.59,0,0,1-1.12-2.88c-2.87-7-2.86-6.81-3.06-7.53-.8-2.88.15-2.55-.32-8.28-.35-4.29-1-6,0-6.22,1.4-.3,4.5,2.6,5.79,4a12.18,12.18,0,0,1,3.05,5.21c.61,2.42-.29,2.95.16,5.48.34,1.86,1,2.39,2.25,5,1.83,3.75,3.21,6.59,2.74,9.95S309.21,289,308.18,289Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          id="ADULT_DENT_Left_periodontal13"
          v-if="selectedTooth.periodontal.left"
          d="M257.21,289.26c.49,0,.21-1.53,2.09-3.44a8.52,8.52,0,0,1,3.06-2.23c1.29-.54,2.37-.67,2.57-1.21s-.59-.77-1-1.39c-.64-1.06.46-2.09,1.28-3.07,1.22-1.46,1.53-3.11,2.41-4.65l6.92-12c3.8-6,5.63-7.86,4.5-8.36-1.3-.58-5.68,1-8.68,3-6,3.86-3.31,6.91-7.4,14.22-3.65,6.53-7.71,7.51-7.88,12.83C255,286.28,256.53,289.27,257.21,289.26Z"
          transform="translate(-254.83 -226.48)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          id="ADULT_DENT_Right_periodontal13"
          v-if="selectedTooth.periodontal.right"
          d="M308.18,289c-.19,0-.37-.13-1.77-2.79-1-1.86-1.09-2.18-1.77-2.6-1.36-.85-2.85-.77-3.05-1.4s1.08-.8,1.44-1.76c.26-.69-.19-1.12-.8-2.23a27.59,27.59,0,0,1-1.12-2.88c-2.87-7-2.86-6.81-3.06-7.53-.8-2.88.15-2.55-.32-8.28-.35-4.29-1-6,0-6.22,1.4-.3,4.5,2.6,5.79,4a12.18,12.18,0,0,1,3.05,5.21c.61,2.42-.29,2.95.16,5.48.34,1.86,1,2.39,2.25,5,1.83,3.75,3.21,6.59,2.74,9.95S309.21,289,308.18,289Z"
          transform="translate(-254.83 -226.48)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          id="ADULT_DENT_Left_perio13"
          v-if="selectedTooth.perio.left"
          d="M257.21,289.26c.49,0,.21-1.53,2.09-3.44a8.52,8.52,0,0,1,3.06-2.23c1.29-.54,2.37-.67,2.57-1.21s-.59-.77-1-1.39c-.64-1.06.46-2.09,1.28-3.07,1.22-1.46,1.53-3.11,2.41-4.65l6.92-12c3.8-6,5.63-7.86,4.5-8.36-1.3-.58-5.68,1-8.68,3-6,3.86-3.31,6.91-7.4,14.22-3.65,6.53-7.71,7.51-7.88,12.83C255,286.28,256.53,289.27,257.21,289.26Z"
          transform="translate(-254.83 -226.48)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          id="ADULT_DENT_Right_perio13"
          v-if="selectedTooth.perio.right"
          d="M308.18,289c-.19,0-.37-.13-1.77-2.79-1-1.86-1.09-2.18-1.77-2.6-1.36-.85-2.85-.77-3.05-1.4s1.08-.8,1.44-1.76c.26-.69-.19-1.12-.8-2.23a27.59,27.59,0,0,1-1.12-2.88c-2.87-7-2.86-6.81-3.06-7.53-.8-2.88.15-2.55-.32-8.28-.35-4.29-1-6,0-6.22,1.4-.3,4.5,2.6,5.79,4a12.18,12.18,0,0,1,3.05,5.21c.61,2.42-.29,2.95.16,5.48.34,1.86,1,2.39,2.25,5,1.83,3.75,3.21,6.59,2.74,9.95S309.21,289,308.18,289Z"
          transform="translate(-254.83 -226.48)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
      </g>
      <g id="ADULT_DENT_Implant13" v-if="selectedTooth.implant">
        <path
          d="M267.86,274.42l31,.05c1.15,0,2.07.45,2.06,1l-.11,4c0,.55-.95,1-2.1,1l-31,0c-1.15,0-2.07-.45-2.05-1l.1-4C265.77,274.86,266.71,274.42,267.86,274.42Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M282.83,227.47h3.92c2,0,3.65.8,3.63,1.77l-1.17,44.39c0,1-1.69,1.77-3.73,1.76h-3.91c-2,0-3.66-.8-3.63-1.77l1.16-44.39C279.13,228.26,280.8,227.47,282.83,227.47Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M273.27,265l21.22,0c.56,0,1,.22,1,.49l0,1.27c0,.27-.47.49-1,.49l-21.22,0c-.56,0-1-.22-1-.49l0-1.28C272.25,265.17,272.71,265,273.27,265Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M273.11,258.19l21.35,0c.52,0,1,.21.94.46l0,1.34c0,.25-.44.46-1,.46l-21.35,0c-.53,0-.95-.2-.94-.46l0-1.33C272.15,258.39,272.58,258.19,273.11,258.19Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M273.65,251.42l21.17,0c.58,0,1,.22,1,.5l0,1.25c0,.28-.48.5-1.06.5l-21.17,0c-.58,0-1-.23-1-.5l0-1.26C272.6,251.65,273.07,251.42,273.65,251.42Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M273.45,244.66l21.38,0c.52,0,.93.2.93.45l0,1.35c0,.25-.43.46-1,.45l-21.38,0c-.52,0-.93-.2-.93-.45l0-1.35C272.51,244.86,272.93,244.66,273.45,244.66Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M273.6,237.89l21.43,0c.51,0,.91.2.9.44l0,1.38c0,.24-.42.44-.93.44l-21.28,0c-.59,0-1.05-.23-1.05-.51l0-1.31C272.68,238.09,273.1,237.89,273.6,237.89Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M274.18,231.13l21.18,0c.57,0,1,.22,1,.5l0,1.26c0,.27-.48.49-1.05.49l-21.18,0c-.58,0-1-.22-1-.5l0-1.26C273.14,231.35,273.6,231.13,274.18,231.13Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="18.13"
          y1="11.54"
          x2="41.18"
          y2="4.79"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="18.2"
          y1="13.55"
          x2="41.24"
          y2="6.78"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="17.87"
          y1="18.37"
          x2="40.77"
          y2="11.55"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="17.94"
          y1="20.27"
          x2="40.75"
          y2="13.58"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="18.17"
          y1="25.06"
          x2="40.59"
          y2="18.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="18.08"
          y1="27.07"
          x2="40.63"
          y2="20.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="17.57"
          y1="31.86"
          x2="40.76"
          y2="25.14"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="17.64"
          y1="33.86"
          x2="40.58"
          y2="27.12"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="17.74"
          y1="38.61"
          x2="40.23"
          y2="31.85"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <line
          x1="17.75"
          y1="40.62"
          x2="40.11"
          y2="33.91"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M296.55,233.65"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          d="M272.75,279.19l21.12,0c2.25,0,4.05.88,4,2l-.12,4.8c0,1.08-1.88,1.95-4.13,1.95l-21.12,0c-2.25,0-4-.88-4-2l.12-4.81C268.65,280.05,270.5,279.18,272.75,279.19Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown13">
        <path
          id="ADULT_DENT_Endo_Crownl1_13"
          v-if="selectedTooth.endo_crown.crown1"
          d="M282.36,307.89l-6.76-1.05a56.56,56.56,0,0,1-7.77-2.45,46.33,46.33,0,0,1-4.42-2l-3.86-2.42c-.88-.54-1-1.3-.32-1.77a3.38,3.38,0,0,1,1.88-.45h42.24a3.3,3.3,0,0,1,1.88.45c.55.49.18,1.38-1.21,1.84l-3.7,2.09a34.52,34.52,0,0,1-9,4.07A49.18,49.18,0,0,1,282.36,307.89Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.76"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_13"
          v-if="selectedTooth.endo_crown.crown2"
          d="M292.39,290.89l-18.39.25-2.86,6.33c-.07.16.13.3.41.3h24c.28,0,.48-.15.39-.31Z"
          transform="translate(-254.83 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.76"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical13"
        v-if="selectedTooth.periapical.periapical1"
        d="M283,246.09c.53,0,1.34-2.27,3.92-7.06,3.38-6.27,3-4.12,3.7-6,0,0,.51-1.31,3-3.5a2.7,2.7,0,0,1,1.57-.71,3.42,3.42,0,0,1,1.68.32,1.8,1.8,0,0,1,1,1.17,13.7,13.7,0,0,1,.33,4.79c-.22,1.76.21,1.11.12,4.28-.12,4.05-.34,5.89-.34,5.89-.15,1.25-.27,1.83,0,1.88.52.08,2.35-1.88,3.14-4,1.09-3-.84-3.63-.34-7.19.42-3,1.94-3.46,1.12-5.37a6.72,6.72,0,0,0-5.6-3.82,10.39,10.39,0,0,0-5.94,1.81c-2,1.18-2.91,2.46-4.59,5a15.92,15.92,0,0,0-2.91,6.09,17.77,17.77,0,0,0-.23,3.23C282.62,244.87,282.61,246.05,283,246.09Z"
        transform="translate(-254.83 -226.48)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.59"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer13"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M282.52,308l-6.76-1a56.56,56.56,0,0,1-7.77-2.45,46.19,46.19,0,0,1-4.42-2L259.71,300c-.88-.54-1-1.31-.32-1.78a3.57,3.57,0,0,1,1.88-.45h42.24a3.39,3.39,0,0,1,1.88.45c.55.49.18,1.38-1.21,1.85l-3.7,2.08a33.86,33.86,0,0,1-9,4.07A47.51,47.51,0,0,1,282.52,308Z"
        transform="translate(-254.83 -226.48)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.76"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer13"
        v-if="selectedTooth.crown.onlay"
        d="M282.52,308l-6.76-1a56.56,56.56,0,0,1-7.77-2.45,46.19,46.19,0,0,1-4.42-2L259.71,300c-.88-.54-1-1.31-.32-1.78a3.57,3.57,0,0,1,1.88-.45h42.24a3.39,3.39,0,0,1,1.88.45c.55.49.18,1.38-1.21,1.85l-3.7,2.08a33.86,33.86,0,0,1-9,4.07A47.51,47.51,0,0,1,282.52,308Z"
        transform="translate(-254.83 -226.48)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.76"
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
