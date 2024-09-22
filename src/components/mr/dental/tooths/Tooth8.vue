<template>
<div class="">
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58.27 113.65"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_8_all">
      <g id="adult_dent_8">
        <path
          id="adult_dent_8_root"
          v-if="selectedTooth.dent.root1"
          d="M268.85,229.58c-2.73.66,3.79,7.91,1.11,20-.93,4.18-2.17,5.39-3.55,12.11-1.29,6.28.09,3.84-1.11,11.71-.57,3.74-1.06,5.53.67,6.25,2.24.95,5-1.25,12.42-1.64,4.17-.22,4.86.38,11.1.18,4.71-.15,7.06-.23,8.43-1.06,2.05-1.26,1.13-3.27-.67-8.52-3.2-9.37-2.25-8.87-4.44-13.44a57.83,57.83,0,0,0-5.1-8.78C282,238.28,272,228.82,268.85,229.58Z"
          transform="translate(-254.33 -226.51)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
        <path
          id="adult_dent_8_crown"
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
          d="M265.74,281.08A15.24,15.24,0,0,0,260,285.6c-1.9,2.37-1.85,4-2.45,7.45-1.4,8.09-3.67,10.66-1.55,15.17a5.08,5.08,0,0,0,3.55,3.2c2.11.44,3.48-.68,6.88-.94s4.69.73,9.1,1.34c4.22.57,4.29-.18,12.2-.14,7.69.05,8.71.77,13.76.27,3.43-.34,7.06-.7,9.09-2.4,1.6-1.33,1.38-2.77.89-6.12-1.4-9.67-1.07-8.39-1.33-9.45-2.9-11.92-5.72-13.36-7.32-14A29.42,29.42,0,0,0,297,279a81.74,81.74,0,0,0-16.42-.4C273.34,279,269.55,279.29,265.74,281.08Z"
          transform="translate(-254.33 -226.51)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial8"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M302.38,311.25l4.47-.73a8.33,8.33,0,0,0,2.35-1.07c2.45-1.69,1.86-4.09,1.21-7.17-.39-1.87-1-4.84-1.66-8.84a2,2,0,0,0-.42-1.73,2.68,2.68,0,0,0-1.31-.92,4.77,4.77,0,0,0-1.11-.21h-10.4c-2.72,0-4.93,1.33-4.93,3v15.63a2.77,2.77,0,0,0,1.49,1.67,8.31,8.31,0,0,0,3.66.65A42.05,42.05,0,0,0,302.38,311.25Z"
        transform="translate(-254.33 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal8"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M275.4,311.15a6.67,6.67,0,0,1-2-.29c-1-.22-1.19-.36-2.36-.6-.77-.15-.75-.1-1.6-.27a11.61,11.61,0,0,0-1.68-.32,8.92,8.92,0,0,0-1.5.09c-.85.09-1.51.15-2.41.32-1.05.2-1.58.3-2.29.5a4.68,4.68,0,0,1-1.44.37,3,3,0,0,1-1.76-.73,3.9,3.9,0,0,1-1.24-1.92c-.12-.32-.28-.73-.43-1.25a11.56,11.56,0,0,1-.29-1.49,10,10,0,0,1-.09-1.83,5.79,5.79,0,0,1,.21-1.46c.07-.25.13-.39.29-.89s.22-.82.24-.9c.07-.28.12-.52.29-1.49s.16-1,.23-1.39c.13-.67.21-1,.31-1.39s.16-.58.23-.87.1-.52.12-.62c.49-3.1.53-3.5,1.07-3.79.27-.15.55-.21,6.18.14,3.6.21,3.51.21,3.95.21,2.5,0,3.25-.23,4.28.33,1.8,1,1,6.93.85,9.42C274.26,306.42,277,310.81,275.4,311.15Z"
        transform="translate(-254.33 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V8"
        v-if="selectedTooth.filling_caries_class_v"
        x="20.73"
        y="59.11"
        width="16.8"
        height="2.82"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal8"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M263.53,300l-6.34-.68h0l.78-4h0l5.56-.62c1.88,0,3.41.92,3.41,2.05v1.18C266.94,299,265.41,300,263.53,300Z"
        transform="translate(-254.33 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial8"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M309.66,298.9,302.5,300c-1.88,0-3.41-.92-3.41-2v-1.18c0-1.13,1.53-2.05,3.41-2.05l6.78.89h0l-.15,1.16v1.18C309.3,298.24,309.48,298.57,309.66,298.9Z"
        transform="translate(-254.33 -226.51)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.53"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo8"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M274.4,237.12c-1.72.34,3.6,6.88,1.31,15.76-1.1,4.29-2.81,4.58-3.68,9.62-.38,2.19.21.62.79,10.56.1,1.75.21,3.93,2.1,4.41,1.12.29,1.66-.32,4.47-.47,2.08-.11,2.54.18,6.57.32a19.16,19.16,0,0,0,3.42,0c2.63-1.11-4.8-7.14-6.57-16.08-.31-1.56-.47-4.72-.79-11-.13-2.64-.22-5.08-2.1-8C278.35,239.71,275.54,236.89,274.4,237.12Z"
        transform="translate(-254.33 -226.51)"
        stroke-miterlimit="10"
        stroke-width="0.53"
      />
      <g id="ADULT_DENT_Post8" v-if="selectedTooth.post.post1">
        <path
          d="M274,279.37l16.88-1c.62,0,1.17.22,1.22.57l.38,2.54c.05.36-.42.67-1,.71l-16.88,1c-.63,0-1.18-.22-1.23-.57l-.37-2.54C272.92,279.73,273.38,279.41,274,279.37Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M277.05,248.8l2.13-.12c1.11-.07,2.08.39,2.17,1l4.2,28.47c.09.63-.73,1.19-1.84,1.26l-2.13.12c-1.11.07-2.08-.39-2.17-1l-4.2-28.47C275.12,249.43,275.94,248.87,277.05,248.8Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M275.92,273.13l11.56-.69c.3,0,.57.11.6.28l.12.82c0,.18-.2.33-.51.35l-11.55.69c-.31,0-.58-.11-.61-.29l-.12-.81C275.39,273.3,275.62,273.15,275.92,273.13Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M275.1,268.8l11.62-.69c.29,0,.54.1.57.26l.12.86c0,.16-.19.31-.47.33l-11.63.69c-.28,0-.54-.1-.56-.27l-.13-.85C274.6,269,274.81,268.82,275.1,268.8Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M274.66,264.45l11.53-.68c.31,0,.58.11.61.28l.12.81c0,.17-.21.33-.52.35l-11.53.69c-.31,0-.59-.11-.61-.29l-.12-.81C274.11,264.63,274.34,264.47,274.66,264.45Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M273.81,260.12l11.64-.69c.29,0,.53.1.56.26l.13.87c0,.16-.19.3-.47.32l-11.64.69c-.29,0-.54-.1-.56-.26l-.13-.87C273.32,260.28,273.53,260.14,273.81,260.12Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M273.16,255.78l11.67-.69c.27,0,.51.1.54.25l.13.89c0,.15-.18.29-.46.31l-11.59.69c-.32,0-.6-.12-.62-.29l-.13-.84C272.68,255.94,272.88,255.8,273.16,255.78Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.73,251.43l11.54-.68c.31,0,.59.11.61.28l.12.81c0,.18-.2.34-.52.35l-11.53.69c-.31,0-.59-.11-.61-.29l-.12-.81C272.19,251.61,272.42,251.45,272.73,251.43Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="18.49"
          y1="29.38"
          x2="30.3"
          y2="24.29"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="18.75"
          y1="30.66"
          x2="30.55"
          y2="25.56"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="19.09"
          y1="33.76"
          x2="30.82"
          y2="28.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="19.33"
          y1="34.97"
          x2="31.03"
          y2="29.93"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="19.98"
          y1="38.03"
          x2="31.46"
          y2="32.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="20.16"
          y1="39.33"
          x2="31.69"
          y2="34.25"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="20.4"
          y1="42.41"
          x2="32.29"
          y2="37.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="20.65"
          y1="43.69"
          x2="32.41"
          y2="38.61"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="21.22"
          y1="46.73"
          x2="32.73"
          y2="41.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="21.45"
          y1="48.02"
          x2="32.89"
          y2="42.98"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M285.19,252.31"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M277.19,282.26l11.5-.68c1.23-.07,2.3.43,2.4,1.12l.46,3.08c.1.69-.81,1.31-2,1.39l-11.5.68c-1.22.07-2.3-.43-2.4-1.12l-.46-3.08C275.05,283,276,282.33,277.19,282.26Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
      </g>
      <g id="ADULT_DENT_gingivitis8">
        <path
          id="ADULT_DENT_Left_gingivitis8"
          v-if="selectedTooth.gingivitis.left"
          d="M258.58,285.78c.9,0,.55-1.39,2.41-2.89s4.5-1.72,4.52-2.71c0-.65-1-.77-1.69-1.78a2.77,2.77,0,0,1,0-2.72c.67-1.76.82-3.33,1.13-6.45.38-3.88-.94-3.89,0-6.37.73-1.95,1.94-3,1-3.73s-3.33-.8-4.95-.25c-1.78.59-2.56,1.92-3.12,7.89-.71,7.59.38,7.17-.71,9.76-.88,2.11-2.14,3.66-1.41,6C256.25,284.17,257.56,285.83,258.58,285.78Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Right_gingivitis8"
          v-if="selectedTooth.gingivitis.right"
          d="M307.55,283.32c-.34,0-.14-1-1.28-2.21a7.73,7.73,0,0,0-2.54-1.61c-3.12-1.28-6.74-.87-6.8-1.27s1.28-.27,2.27-.94a2.4,2.4,0,0,0,1-2.37,11.22,11.22,0,0,0-1.13-4.33c-.78-1.61-1.37-3.9-2.55-8.49-.68-2.62-.5-2.67-1-3.65-.41-.8-.76-1.24-.43-1.44.66-.4,3.64.3,5.38,1.53,2,1.38,1.53,2.83,2,5.68a25.59,25.59,0,0,0,2.41,7c2.11,4.1,4,4.58,4.24,7.47C309.3,281.18,308,283.34,307.55,283.32Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Left_periodontal8"
          v-if="selectedTooth.periodontal.left"
          d="M258.58,285.78c.9,0,.55-1.39,2.41-2.89s4.5-1.72,4.52-2.71c0-.65-1-.77-1.69-1.78a2.77,2.77,0,0,1,0-2.72c.67-1.76.82-3.33,1.13-6.45.38-3.88-.94-3.89,0-6.37.73-1.95,1.94-3,1-3.73s-3.33-.8-4.95-.25c-1.78.59-2.56,1.92-3.12,7.89-.71,7.59.38,7.17-.71,9.76-.88,2.11-2.14,3.66-1.41,6C256.25,284.17,257.56,285.83,258.58,285.78Z"
          transform="translate(-254.33 -226.51)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Right_periodontal8"
          v-if="selectedTooth.periodontal.right"
          d="M307.55,283.32c-.34,0-.14-1-1.28-2.21a7.73,7.73,0,0,0-2.54-1.61c-3.12-1.28-6.74-.87-6.8-1.27s1.28-.27,2.27-.94a2.4,2.4,0,0,0,1-2.37,11.22,11.22,0,0,0-1.13-4.33c-.78-1.61-1.37-3.9-2.55-8.49-.68-2.62-.5-2.67-1-3.65-.41-.8-.76-1.24-.43-1.44.66-.4,3.64.3,5.38,1.53,2,1.38,1.53,2.83,2,5.68a25.59,25.59,0,0,0,2.41,7c2.11,4.1,4,4.58,4.24,7.47C309.3,281.18,308,283.34,307.55,283.32Z"
          transform="translate(-254.33 -226.51)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Left_perio8"
          v-if="selectedTooth.perio.left"
          d="M258.58,285.78c.9,0,.55-1.39,2.41-2.89s4.5-1.72,4.52-2.71c0-.65-1-.77-1.69-1.78a2.77,2.77,0,0,1,0-2.72c.67-1.76.82-3.33,1.13-6.45.38-3.88-.94-3.89,0-6.37.73-1.95,1.94-3,1-3.73s-3.33-.8-4.95-.25c-1.78.59-2.56,1.92-3.12,7.89-.71,7.59.38,7.17-.71,9.76-.88,2.11-2.14,3.66-1.41,6C256.25,284.17,257.56,285.83,258.58,285.78Z"
          transform="translate(-254.33 -226.51)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          id="ADULT_DENT_Right_perio8"
          v-if="selectedTooth.perio.right"
          d="M307.55,283.32c-.34,0-.14-1-1.28-2.21a7.73,7.73,0,0,0-2.54-1.61c-3.12-1.28-6.74-.87-6.8-1.27s1.28-.27,2.27-.94a2.4,2.4,0,0,0,1-2.37,11.22,11.22,0,0,0-1.13-4.33c-.78-1.61-1.37-3.9-2.55-8.49-.68-2.62-.5-2.67-1-3.65-.41-.8-.76-1.24-.43-1.44.66-.4,3.64.3,5.38,1.53,2,1.38,1.53,2.83,2,5.68a25.59,25.59,0,0,0,2.41,7c2.11,4.1,4,4.58,4.24,7.47C309.3,281.18,308,283.34,307.55,283.32Z"
          transform="translate(-254.33 -226.51)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
      </g>
      <g id="ADULT_DENT_Implant8" v-if="selectedTooth.implant">
        <path
          d="M266.61,273.53l33.88,0c1.25,0,2.26.41,2.24.91l-.11,3.62c0,.5-1.05.91-2.3.91L266.44,279c-1.25,0-2.26-.41-2.24-.91l.11-3.62C264.33,273.93,265.36,273.52,266.61,273.53Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M283,230.66h4.27c2.23,0,4,.72,4,1.61L290,272.82c0,.89-1.85,1.61-4.07,1.6H281.6c-2.22,0-4-.73-4-1.62l1.27-40.53C278.93,231.38,280.75,230.66,283,230.66Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.53,264.88l23.18,0c.62,0,1.11.2,1.1.45l0,1.17c0,.24-.52.44-1.13.44l-23.18,0c-.62,0-1.11-.2-1.11-.45l0-1.16C271.41,265.08,271.91,264.88,272.53,264.88Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.35,258.71l23.33,0c.58,0,1,.19,1,.42l0,1.23c0,.23-.48.41-1.06.41l-23.32,0c-.58,0-1-.18-1-.42l0-1.22C271.3,258.89,271.78,258.7,272.35,258.71Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.94,252.53l23.14,0c.63,0,1.13.2,1.12.45l0,1.15c0,.25-.53.46-1.15.46l-23.14,0c-.63,0-1.13-.21-1.13-.46l0-1.15C271.8,252.73,272.31,252.53,272.94,252.53Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.73,246.35l23.36,0c.56,0,1,.18,1,.41l0,1.24c0,.22-.47.41-1,.41l-23.36,0c-.57,0-1-.19-1-.41l0-1.24C271.69,246.53,272.16,246.35,272.73,246.35Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272.89,240.17l23.42,0c.55,0,1,.18,1,.4l0,1.26c0,.22-.46.4-1,.4l-23.26,0c-.63,0-1.14-.21-1.14-.46l0-1.2C271.89,240.35,272.34,240.17,272.89,240.17Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M273.52,234l23.15,0c.63,0,1.13.21,1.12.46l0,1.15c0,.25-.52.45-1.14.45l-23.16,0c-.62,0-1.12-.2-1.11-.45l0-1.15C272.38,234.2,272.89,234,273.52,234Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.86"
          y1="13.78"
          x2="43.04"
          y2="7.62"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.93"
          y1="15.61"
          x2="43.11"
          y2="9.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.56"
          y1="20.02"
          x2="42.6"
          y2="13.78"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.64"
          y1="21.75"
          x2="42.57"
          y2="15.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.9"
          y1="26.12"
          x2="42.4"
          y2="19.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.8"
          y1="27.96"
          x2="42.44"
          y2="21.79"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.24"
          y1="32.34"
          x2="42.58"
          y2="26.2"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.32"
          y1="34.16"
          x2="42.39"
          y2="28.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.43"
          y1="38.5"
          x2="42.01"
          y2="32.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <line
          x1="17.43"
          y1="40.33"
          x2="41.87"
          y2="34.21"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M298,236.3"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
        <path
          d="M272,277.88l23.08,0c2.46,0,4.43.8,4.4,1.79l-.14,4.38c0,1-2.05,1.79-4.51,1.78l-23.08,0c-2.46,0-4.43-.8-4.4-1.79l.14-4.38C267.48,278.67,269.5,277.87,272,277.88Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.53"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown8">
        <path
          id="ADULT_DENT_Endo_Crown1_8"
          v-if="selectedTooth.endo_crown.crown1"
          d="M269.42,309.66l-4.39,0a6.84,6.84,0,0,1-4.23.83,4.65,4.65,0,0,1-1.94-.93,3.9,3.9,0,0,1-1.3-1.61,8.49,8.49,0,0,1-.81-3.65,1,1,0,0,1-.08-.6c.23-1.41,3.37-2.11,3.6-2.16h13.42c2,0,3.6,1,3.6,2.16v5a1.58,1.58,0,0,1-1.05,1.53,6.09,6.09,0,0,1-2.68-.14C272.57,310,271.17,309.81,269.42,309.66Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_8"
          v-if="selectedTooth.endo_crown.crown2"
          d="M301.65,311.22h-5.92c-1.34,0-2.42-.65-2.42-1.45V303c0-.8,1.08-1.45,2.42-1.45h13.09a3.21,3.21,0,0,1,1.28.47,1.26,1.26,0,0,1,.57,1.51l.08,3.22a3.37,3.37,0,0,1-1.79,2.82,9.65,9.65,0,0,1-2.68,1A22.1,22.1,0,0,1,301.65,311.22Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical8"
        v-if="selectedTooth.periapical.periapical1"
        d="M269.36,246.32c.41,0,.34-1.32.2-3.84-.06-.94-.11-1.89-.3-3.2a20,20,0,0,0-.89-4.25,25.78,25.78,0,0,0-1.08-3.25,1.8,1.8,0,0,1,1.08-2.9,4.3,4.3,0,0,1,2.17.18,8.45,8.45,0,0,1,3.06,1.53c2,1.51,3,2.27,3.55,2.72s1.21,1.09,3.75,3.61c1.85,1.84,2.79,2.77,3.15,3.19,2,2.3,2.51,3.66,3,3.61s.48-1.53.1-2.9-1.14-2.41-4.54-6.15a33.79,33.79,0,0,0-4.14-4.2,14.08,14.08,0,0,0-5.72-3.13c-.74-.19-4.57-1.15-7.1-.06-2.27,1-2.22,3.08-2.17,5.21a28.22,28.22,0,0,0,1.19,4.67,37.77,37.77,0,0,0,1.67,5.08C267.16,244,268.7,246.41,269.36,246.32Z"
        transform="translate(-254.33 -226.51)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.53"
      />
      <g id="ADULT_DENT_Occlusal_Veneer8">
        <path
          id="ADULT_DENT_Occlusal_Veneer8_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M269.56,309.74l-4.39.05a6.84,6.84,0,0,1-4.23.83,4.65,4.65,0,0,1-1.94-.93,4,4,0,0,1-1.3-1.61,8.49,8.49,0,0,1-.81-3.65,1,1,0,0,1-.08-.6c.23-1.41,3.37-2.11,3.6-2.16h13.42c2,0,3.6,1,3.6,2.16v5a1.58,1.58,0,0,1-1.05,1.53,6.09,6.09,0,0,1-2.68-.14C272.71,310.07,271.31,309.89,269.56,309.74Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer8_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M301.79,311.3h-5.92c-1.34,0-2.42-.65-2.42-1.45v-6.73c0-.81,1.08-1.45,2.42-1.45H309a3.21,3.21,0,0,1,1.28.47,1.26,1.26,0,0,1,.57,1.51l.08,3.22a3.37,3.37,0,0,1-1.79,2.82,9.32,9.32,0,0,1-2.68,1A21.56,21.56,0,0,1,301.79,311.3Z"
          transform="translate(-254.33 -226.51)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer8">
        <path
          id="ADULT_DENT_Occlusal_Veneer8_2"
          v-if="selectedTooth.crown.onlay"
          d="M269.56,309.74l-4.39.05a6.84,6.84,0,0,1-4.23.83,4.65,4.65,0,0,1-1.94-.93,4,4,0,0,1-1.3-1.61,8.49,8.49,0,0,1-.81-3.65,1,1,0,0,1-.08-.6c.23-1.41,3.37-2.11,3.6-2.16h13.42c2,0,3.6,1,3.6,2.16v5a1.58,1.58,0,0,1-1.05,1.53,6.09,6.09,0,0,1-2.68-.14C272.71,310.07,271.31,309.89,269.56,309.74Z"
          transform="translate(-254.33 -226.51)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.58"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer8_1"
          v-if="selectedTooth.crown.onlay"
          d="M301.79,311.3h-5.92c-1.34,0-2.42-.65-2.42-1.45v-6.73c0-.81,1.08-1.45,2.42-1.45H309a3.21,3.21,0,0,1,1.28.47,1.26,1.26,0,0,1,.57,1.51l.08,3.22a3.37,3.37,0,0,1-1.79,2.82,9.32,9.32,0,0,1-2.68,1A21.56,21.56,0,0,1,301.79,311.3Z"
          transform="translate(-254.33 -226.51)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.58"
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
