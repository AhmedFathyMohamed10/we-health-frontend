<template>
<div class="">
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.85 113.68"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_20_all">
      <g id="adult_dent_20">
        <path
          id="adult_dent_20_crown"
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
          d="M256.12,259.22c.45-.36,1.1-.75,8.65-2.4,7.1-1.55,10.72-2.33,13.65-2.39,3.23-.07,5.79.35,10.93,1.19a98,98,0,0,1,13,3.06c4,1.18,6,1.79,7.05,2.8,1.5,1.4,1.1,2.87,0,6.52-1.41,4.69-2.11,7-2.73,8.51-2.73,6.52-4.15,9.8-6.83,10.78-2.24.82-3.25.33-13.19.26-12.65-.08-14.5.68-17.53-.53-1.69-.68-2.16-1.33-6.37-8.25-3.94-6.47-4.74-7.89-5.69-10.11C253.88,261.27,255.41,259.77,256.12,259.22Z"
          transform="translate(-254.25 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.74"
        />
        <path
          id="adult_dent_20_root"
          v-if="selectedTooth.dent.root1"
          d="M268.87,288.35c-1.09.46-3.16,2,1.36,12.11A78.65,78.65,0,0,0,275.92,311c4.55,7,6.83,10.53,11.38,14.37,6.81,5.74,16,10.14,17.52,9.45,1.13-.51-2.77-3.32-5.23-8.78-1.85-4.12-1.76-7.21-1.6-12.25a79.68,79.68,0,0,1,2.28-16.63c1.27-4.65,2.43-6.89,0-8.38-2.62-1.6-7.94-1.41-13.65-1.2-4.35.16-5.16.6-10.24.67C270.93,288.3,270.11,287.83,268.87,288.35Z"
          transform="translate(-254.25 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.74"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I20"
        v-if="selectedTooth.filling_caries_class_i"
        d="M285.85,269.49h-9.91c-4.58,0-8.29-2.1-8.29-4.68v-4.88a3.67,3.67,0,0,1,2.43-3.31,20.67,20.67,0,0,1,3.6-.69l4.15-.68c1.94-.21,4.62.13,9.91.83,3.21.42,3.91.56,4.64,1a3.05,3.05,0,0,1,1.76,2.88v4.88C294.14,267.39,290.43,269.49,285.85,269.49Z"
        transform="translate(-254.25 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial20"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M260.19,272.61l2.08,3.39a8,8,0,0,0,3.53-.47c2.14-.91,1.86-2.49,1.85-2.56V259.22c1.66-2,1.62-2.5,1.31-2.64s-1,.32-3.47.8c-.47.09-1.76.33-3.13.65l-.23.05c-.58.14-1.37.34-2.29.59l-2.7.82a2.89,2.89,0,0,0-.66.78,2,2,0,0,0-.24,1.43l.57,3.05a29.53,29.53,0,0,0,1.6,4.45A32.08,32.08,0,0,0,260.19,272.61Z"
        transform="translate(-254.25 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal20"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M294.77,274.92c-1.9-.78-1.1-2.51-.73-9.48.08-1.49,0-.44.1-4.05a8.74,8.74,0,0,0,0-2.09c-.24-1.28-.77-1.92-.33-2.11s1.33.3,2.8.82c2.53.9,3,.59,6.78,1.63,2.5.69,3.77,1.05,4.59,1.75a3.45,3.45,0,0,1,1.19,2.68c.08,1-.19,1.55-.79,3.27-1.18,3.31-1.77,5-1.8,5.83-.05,1.31.21,1.95-.6,2.33s-2.18.06-5.19-.23C296.21,274.83,295.87,275.37,294.77,274.92Z"
        transform="translate(-254.25 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V20"
        v-if="selectedTooth.filling_caries_class_v"
        x="17.25"
        y="54.31"
        width="18.79"
        height="3.07"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal20"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M303.82,272.7h-5.38c-1.85,0-3.36-1-3.36-2.26V269.2c0-1.24,1.51-2.25,3.36-2.25h5.38l4,1.11h0c-.21,1.22-.43,2.43-.64,3.65h0Z"
        transform="translate(-254.25 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial20"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M267.58,272.7H264l-3.07-.91-.8-.24-2.31-3.92L264,267h3.59c2.11,0,3.82,1,3.82,2.23v1.29C271.4,271.7,269.69,272.7,267.58,272.7Z"
        transform="translate(-254.25 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.58"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo20"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M273.78,288.85c.72-.22,1.77.13,5.76-.12,3.11-.2,3.94-.5,6.38-.6a28.33,28.33,0,0,1,6.59.36c5.19,1.38,2,10.46,1.44,18.64-1,13.73,5.73,21,3.7,21.41C293.08,329.44,267.78,290.66,273.78,288.85Z"
        transform="translate(-254.25 -226.77)"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <g id="ADULT_DENT_Post20" v-if="selectedTooth.post.post1">
        <path
          d="M291.83,286.61,275.89,288c-.59.05-1.13-.22-1.2-.61l-.51-2.78c-.07-.39.35-.74.94-.79l15.95-1.35c.59-.05,1.12.22,1.2.61l.5,2.78C292.84,286.21,292.42,286.56,291.83,286.61Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.8,320.21l-2,.17c-1,.09-2-.4-2.12-1.08L281,288.11c-.12-.68.62-1.31,1.67-1.4l2-.17c1.05-.09,2,.39,2.12,1.08l5.7,31.19C292.59,319.49,291.84,320.12,290.8,320.21Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.39,293.49l-10.91.93c-.29,0-.55-.11-.59-.3l-.16-.9c0-.19.17-.36.46-.39l10.91-.92c.29,0,.55.11.59.3l.16.9C290.89,293.3,290.68,293.47,290.39,293.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M291.43,298.23l-11,.93a.48.48,0,0,1-.55-.28l-.17-.94c0-.18.16-.34.44-.36l11-.93c.28,0,.52.1.55.28l.18.94C291.9,298.05,291.71,298.21,291.43,298.23Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M292.12,303l-10.89.92c-.3,0-.57-.11-.6-.3l-.16-.88c0-.2.17-.38.47-.4l10.89-.92c.29,0,.56.11.6.3l.16.89C292.62,302.8,292.41,303,292.12,303Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M293.18,307.74l-11,.93c-.26,0-.51-.1-.54-.28l-.17-.95c0-.17.16-.33.42-.35l11-.93c.27,0,.51.1.54.27l.17.95C293.64,307.56,293.45,307.72,293.18,307.74Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M294.06,312.49l-11,.93c-.26,0-.5-.09-.53-.26l-.17-1c0-.17.15-.33.41-.35l10.95-.93c.3,0,.57.12.61.31l.16.92C294.51,312.31,294.32,312.47,294.06,312.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M294.73,317.26l-10.9.92c-.3,0-.56-.11-.6-.3l-.16-.89c0-.19.18-.37.47-.39l10.9-.92c.29,0,.56.11.59.3l.17.89C295.23,317.06,295,317.24,294.73,317.26Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="40.13"
          y1="85.6"
          x2="29.23"
          y2="91.36"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="39.81"
          y1="84.19"
          x2="28.92"
          y2="89.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="39.3"
          y1="80.8"
          x2="28.48"
          y2="86.61"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="38.99"
          y1="79.47"
          x2="28.21"
          y2="85.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="38.19"
          y1="76.12"
          x2="27.62"
          y2="81.85"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.95"
          y1="74.7"
          x2="27.31"
          y2="80.45"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.53"
          y1="71.32"
          x2="26.56"
          y2="77.07"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="37.21"
          y1="69.93"
          x2="26.37"
          y2="75.67"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.49"
          y1="66.6"
          x2="25.88"
          y2="72.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.2"
          y1="65.19"
          x2="25.65"
          y2="70.89"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M282.86,316.49"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M288.64,283.49l-10.87.92c-1.15.1-2.2-.44-2.34-1.2l-.62-3.37c-.14-.76.69-1.45,1.85-1.55l10.86-.92c1.16-.1,2.21.44,2.35,1.19l.61,3.38C290.62,282.7,289.8,283.39,288.64,283.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_gingivitis20">
        <path
          id="ADULT_DENT_Right_gingivitis20"
          v-if="selectedTooth.gingivitis.right"
          d="M306.77,278.49c-1.14.15.17,2.2-2.07,4.86-1.78,2.11-4.25,2.78-3.93,4.32.17.8.89.95,1.62,1.89,1.13,1.46.68,2.73,0,5.13-1.57,5.53-.51,3.5-2.08,8.64-.84,2.73-1.2,3.51-.69,3.65,1,.3,5.16-2.32,7.39-5.54,2.5-3.62.23-4.54,2.07-10,1.45-4.25,3.34-5.17,2.54-8S308.05,278.32,306.77,278.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_gingivitis20"
          v-if="selectedTooth.gingivitis.left"
          d="M262,279.57c1.16.15.12,1.89,2.31,4.19,1.76,1.84,4.14,2.51,3.7,3.64-.24.6-1,.63-1.62,1.49a2.6,2.6,0,0,0-.23,2.56c1.37,4.23-.13,2.79,1.85,7.16,2.39,5.31,4.46,7.13,3.69,7.43-1,.39-6.63-2.14-9.24-6s.46-4.82-2.07-9.72c-1.61-3.09-3.51-4-3-6.34S260.63,279.39,262,279.57Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_periodontal20"
          v-if="selectedTooth.periodontal.right"
          d="M306.77,278.49c-1.14.15.17,2.2-2.07,4.86-1.78,2.11-4.25,2.78-3.93,4.32.17.8.89.95,1.62,1.89,1.13,1.46.68,2.73,0,5.13-1.57,5.53-.51,3.5-2.08,8.64-.84,2.73-1.2,3.51-.69,3.65,1,.3,5.16-2.32,7.39-5.54,2.5-3.62.23-4.54,2.07-10,1.45-4.25,3.34-5.17,2.54-8S308.05,278.32,306.77,278.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_periodontal20"
          v-if="selectedTooth.periodontal.left"
          d="M262,279.57c1.16.15.12,1.89,2.31,4.19,1.76,1.84,4.14,2.51,3.7,3.64-.24.6-1,.63-1.62,1.49a2.6,2.6,0,0,0-.23,2.56c1.37,4.23-.13,2.79,1.85,7.16,2.39,5.31,4.46,7.13,3.69,7.43-1,.39-6.63-2.14-9.24-6s.46-4.82-2.07-9.72c-1.61-3.09-3.51-4-3-6.34S260.63,279.39,262,279.57Z"
          transform="translate(-254.25 -226.77)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Right_perio20"
          v-if="selectedTooth.perio.right"
          d="M306.77,278.49c-1.14.15.17,2.2-2.07,4.86-1.78,2.11-4.25,2.78-3.93,4.32.17.8.89.95,1.62,1.89,1.13,1.46.68,2.73,0,5.13-1.57,5.53-.51,3.5-2.08,8.64-.84,2.73-1.2,3.51-.69,3.65,1,.3,5.16-2.32,7.39-5.54,2.5-3.62.23-4.54,2.07-10,1.45-4.25,3.34-5.17,2.54-8S308.05,278.32,306.77,278.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#c0392b"
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="ADULT_DENT_Left_perio20"
          v-if="selectedTooth.perio.left"
          d="M262,279.57c1.16.15.12,1.89,2.31,4.19,1.76,1.84,4.14,2.51,3.7,3.64-.24.6-1,.63-1.62,1.49a2.6,2.6,0,0,0-.23,2.56c1.37,4.23-.13,2.79,1.85,7.16,2.39,5.31,4.46,7.13,3.69,7.43-1,.39-6.63-2.14-9.24-6s.46-4.82-2.07-9.72c-1.61-3.09-3.51-4-3-6.34S260.63,279.39,262,279.57Z"
          transform="translate(-254.25 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Implant20" v-if="selectedTooth.implant">
        <path
          d="M293.69,293.37l-22,0c-.81,0-1.47-.44-1.46-1l.05-3.94c0-.55.67-1,1.49-1l22,0c.82,0,1.47.44,1.46,1l0,3.94C295.17,292.92,294.5,293.37,293.69,293.37Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M283.37,340.15h-2.78c-1.44,0-2.6-.78-2.59-1.76l.55-44.2c0-1,1.19-1.76,2.63-1.76H284c1.44,0,2.6.79,2.59,1.76l-.55,44.2C286,339.36,284.81,340.15,283.37,340.15Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M289.91,302.81l-15.05,0c-.4,0-.72-.22-.72-.49l0-1.27c0-.27.33-.49.73-.49l15.05,0c.4,0,.72.22.71.49v1.27C290.64,302.59,290.31,302.81,289.91,302.81Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.07,309.54l-15.14,0c-.38,0-.68-.2-.68-.45l0-1.33c0-.25.31-.46.69-.46l15.13,0c.38,0,.68.2.68.45l0,1.33C290.75,309.34,290.44,309.54,290.07,309.54Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M289.73,316.28l-15,0c-.41,0-.74-.22-.73-.49v-1.26c0-.27.34-.49.75-.49l15,0c.4,0,.73.23.73.5l0,1.25C290.47,316.06,290.14,316.28,289.73,316.28Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M289.91,323l-15.16,0c-.37,0-.67-.2-.66-.45v-1.35c0-.25.31-.45.68-.45l15.16,0c.37,0,.66.2.66.45l0,1.35C290.58,322.81,290.28,323,289.91,323Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M289.84,329.75l-15.19,0c-.36,0-.65-.19-.65-.43l0-1.37c0-.24.3-.44.66-.44l15.09,0c.42,0,.75.22.74.5v1.3C290.5,329.56,290.2,329.75,289.84,329.75Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M289.48,336.49l-15,0c-.4,0-.73-.22-.72-.49v-1.26c0-.27.34-.49.74-.49l15,0c.4,0,.73.22.73.5l0,1.25C290.22,336.27,289.89,336.49,289.48,336.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.05"
          y1="102.85"
          x2="19.75"
          y2="109.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="35.99"
          y1="100.85"
          x2="19.69"
          y2="107.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.2"
          y1="96.05"
          x2="20"
          y2="102.91"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.14"
          y1="94.16"
          x2="20"
          y2="100.88"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="35.94"
          y1="89.39"
          x2="20.08"
          y2="96.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="35.99"
          y1="87.39"
          x2="20.04"
          y2="94.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.33"
          y1="82.62"
          x2="19.92"
          y2="89.38"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.26"
          y1="80.63"
          x2="20.03"
          y2="87.41"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.16"
          y1="75.9"
          x2="20.25"
          y2="82.7"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <line
          x1="36.14"
          y1="73.9"
          x2="20.32"
          y2="80.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M273.59,334"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          d="M290.19,288.64l-15,0c-1.6,0-2.88-.87-2.87-1.94l.06-4.78c0-1.08,1.32-1.95,2.92-2l15,0c1.59,0,2.88.87,2.86,1.94l-.06,4.78C293.09,287.76,291.79,288.63,290.19,288.64Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown20">
        <path
          id="ADULT_DENT_Endo_Crown1_20"
          v-if="selectedTooth.endo_crown.crown1"
          d="M292.4,256.89l-13.2-1.56c-3.8.45-8.06,1.11-12.62,2.08-3,.64-5.74,1.32-8.21,2-1.64.94-2.2,2.28-1.43,3.38a4.93,4.93,0,0,0,2.56,1.5h46.66a3.51,3.51,0,0,0,1.81-.44c.69-.48.68-1.26-.13-1.86l-2.23-1.39c-2.1-.73-4.42-1.46-7-2.17Q295.37,257.55,292.4,256.89Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.74"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_20"
          v-if="selectedTooth.endo_crown.crown2"
          d="M272,271.4l18.11-.23,2.82-6.3c.07-.15-.13-.3-.4-.3l-23.61,0c-.27,0-.47.16-.39.31Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.74"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical20"
        v-if="selectedTooth.periapical.periapical1"
        d="M283.05,322.56c.43-.1,1.35,1.08,4,3.41a45.46,45.46,0,0,0,5.51,4.39l5.18,3a16.19,16.19,0,0,0,4.52,1.87,5.38,5.38,0,0,0,3,.2,1.47,1.47,0,0,0,1.1-1.42c0-.67-.72-1.14-1.1-1.42-.55-.41-1.36-1.67-3-4.19a21.72,21.72,0,0,1-1.87-3.22c-.51-1.22-.33-1.33-1.1-4.71-.43-1.84-.61-2.39-.33-2.45.5-.11,2.07,1.45,3.08,3s.88,2.26,1.66,4c.49,1.09.64,1,3.08,4.45,2.7,3.8,3,4.62,3,5.61,0,.71-.1,2.86-2.2,3.48-1.83.55-4.26-.34-7.39-1.48a35.58,35.58,0,0,1-6.73-3.29,42.41,42.41,0,0,1-5.62-4.12c-2.8-2.31-3.54-3.33-4-4.07C283.07,324.25,282.57,322.67,283.05,322.56Z"
        transform="translate(-254.25 -226.77)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.58"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer20"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M292.56,257l-13.21-1.56c-3.79.46-8.05,1.12-12.61,2.09-3,.63-5.74,1.32-8.21,2-1.65.94-2.21,2.29-1.44,3.38a4.81,4.81,0,0,0,2.57,1.5h46.66a3.55,3.55,0,0,0,1.81-.44c.69-.47.67-1.26-.14-1.86l-2.22-1.38c-2.1-.73-4.42-1.46-7-2.17C296.62,257.93,294.53,257.42,292.56,257Z"
        transform="translate(-254.25 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.74"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer20"
        v-if="selectedTooth.crown.onlay"
        d="M292.56,257l-13.21-1.56c-3.79.46-8.05,1.12-12.61,2.09-3,.63-5.74,1.32-8.21,2-1.65.94-2.21,2.29-1.44,3.38a4.81,4.81,0,0,0,2.57,1.5h46.66a3.55,3.55,0,0,0,1.81-.44c.69-.47.67-1.26-.14-1.86l-2.22-1.38c-2.1-.73-4.42-1.46-7-2.17C296.62,257.93,294.53,257.42,292.56,257Z"
        transform="translate(-254.25 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.74"
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