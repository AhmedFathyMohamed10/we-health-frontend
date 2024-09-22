<template>
  <div class="">
  <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.82 113.67"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_5_all">
      <g id="adult_dent_5">
        <path
          id="adult_dent_5_root"
          v-if="selectedTooth.dent.root1"
          d="M269.84,229.86c-3.76.41,3.67,12-2.34,29.14l-4.42,15.74a50.78,50.78,0,0,0-1.78,7.56c-.06.56,1.52,3.33,1.52,3.33h0a55.38,55.38,0,0,1,17.41-5.9c9.07-1.27,14,1.32,17.67-.26s1.53-5.15-3.9-15.88c-7-13.91-6.19-13.21-8.57-16.8S273.94,229.42,269.84,229.86Z"
          transform="translate(-254.84 -226.49)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.69"
        />
        <path
          id="adult_dent_5_crown"
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
          d="M262.3,287a17.64,17.64,0,0,0-3.89,5,14.75,14.75,0,0,0-1.82,7.61c0,3-.06,4.57,1.3,5.78,2.58,2.29,7.66,3,13.25,3.8,6.59.94,13.61,1.93,22.09.53,2.21-.37,12.7-2.12,16.89-7.22a6.92,6.92,0,0,0,1-7.48c-1.11-2.8-3.09-3.2-7.53-8.4-3.75-4.38-2.85-4.69-4.68-5.51C291.21,277.58,269.76,280.62,262.3,287Z"
          transform="translate(-254.84 -226.49)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.69"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I5"
        v-if="selectedTooth.filling_caries_class_i"
        d="M288.57,309.52c-1.34.1-3,.17-4.85.14-1.7,0-3.2-.11-4.45-.22s-2.93-.23-4.58-.43c-1.08-.13-2.09-.28-3-.43-.1-2-.19-3.92-.29-5.88,0-1.75,3.12-3.17,7-3.17H290a12.17,12.17,0,0,1,4.93.93,3.47,3.47,0,0,1,2,2.24c.38.89.23,1.37.21,2.94a25.63,25.63,0,0,0,.09,2.69c-1,.23-2.18.47-3.55.68A50.21,50.21,0,0,1,288.57,309.52Z"
        transform="translate(-254.84 -226.49)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial5"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M303.92,305.89l-2.22.94-2.09.7c-1.51.48-1.62.48-1.71.46-.94-.17.26-2.1-.3-4.6a6.88,6.88,0,0,0-.84-2.09l-.69-6.21c0-1.41,2.27-2.56,5.06-2.56h4.38a6.47,6.47,0,0,1,2.88.41c.42.21.63.55,1.05,1.22a10,10,0,0,1,.54,1,10.57,10.57,0,0,1,.53,1.26,4.31,4.31,0,0,1,.09,1.8,9.37,9.37,0,0,1-1,3.12,11.4,11.4,0,0,1-2.4,2.47A19.17,19.17,0,0,1,303.92,305.89Z"
        transform="translate(-254.84 -226.49)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal5"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M271.16,308.47c-.46.15-1,0-3.21-.45a44.13,44.13,0,0,1-5.54-1.22,11.46,11.46,0,0,1-2.67-1.26,4.93,4.93,0,0,1-1.61-1.53,3.07,3.07,0,0,1-.27-1.85c0-2-.05-1.11,0-2.57s.12-2.29.18-2.89a13.9,13.9,0,0,1,.45-2.11c.24-.9.35-1,.53-1.13.91-.55,2.65-.25,6-.18,4.59.09,5.58-.39,6.52.09s.41,1.25-.06,3.6a27.51,27.51,0,0,0-.39,3.34c-.16,2.95-.24,4.43.27,6.18C271.59,307.35,272,308.21,271.16,308.47Z"
        transform="translate(-254.84 -226.49)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V5"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.67"
        y="56.48"
        width="19.68"
        height="2.78"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal5"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M265.86,299.66,258,299h0l.1-2.52.49-1.73h0l7.28-.28c2.2,0,4,.9,4,2v1.17C269.85,298.76,268.06,299.66,265.86,299.66Z"
        transform="translate(-254.84 -226.49)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial5"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M310.28,298.76l-7.87.9c-2.21,0-4-.9-4-2v-1.17c0-1.11,1.79-2,4-2l7.28.43h0l.48,1.58v1.17Z"
        transform="translate(-254.84 -226.49)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.56"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo5"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M273.78,237.22c-1,.06-1.08,4.24-1.23,12.6-.18,9.64.37,8,0,10.41-.69,4.32-1.24,9.47-2.34,19.79a1.24,1.24,0,0,0,.8,1.51,5.69,5.69,0,0,0,2.74-.38c6.07-1.78,6.16-2,7.72-2.26a30.25,30.25,0,0,1,6.47-.32c2.8.11,3.36.46,4,.32,3.29-.76-3.88-11.63-8.31-19.9C276.52,245.7,275.4,237.13,273.78,237.22Z"
        transform="translate(-254.84 -226.49)"
        stroke-miterlimit="10"
        stroke-width="0.56"
      />
      <g id="ADULT_DENT_Post5" v-if="selectedTooth.post.post1">
        <path
          d="M273.71,281l15.52-1.06c.57,0,1.06.24,1.09.61l.22,2.7c0,.37-.42.71-1,.75L274,285.05c-.57,0-1.06-.24-1.09-.61l-.21-2.7C272.69,281.37,273.13,281,273.71,281Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M278.07,248.55l2-.13c1-.07,1.89.41,1.94,1.08l2.38,30.21c0,.67-.74,1.26-1.75,1.33l-2,.14c-1,.07-1.89-.42-1.94-1.08l-2.38-30.22C276.27,249.22,277.06,248.62,278.07,248.55Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M275.79,274.37l10.62-.73c.28,0,.52.12.54.3l.07.87c0,.19-.21.35-.49.37l-10.62.72c-.29,0-.53-.11-.54-.29l-.07-.87C275.29,274.55,275.5,274.39,275.79,274.37Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M275.25,269.78l10.69-.73c.27,0,.49.1.51.28l.07.91c0,.17-.19.32-.46.34l-10.69.73c-.26,0-.49-.11-.5-.28l-.07-.91C274.79,270,275,269.79,275.25,269.78Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M275.07,265.16l10.61-.73c.28,0,.53.12.54.31l.07.85c0,.19-.21.36-.49.38l-10.61.72c-.29,0-.53-.11-.55-.3l-.06-.86C274.56,265.35,274.78,265.18,275.07,265.16Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274.52,260.56l10.71-.73c.26,0,.48.11.49.28l.08.92c0,.17-.19.32-.45.34l-10.71.73c-.26,0-.48-.11-.49-.28l-.07-.92C274.06,260.73,274.26,260.58,274.52,260.56Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274.15,256l10.73-.73c.25,0,.47.1.48.27l.07.93c0,.17-.18.32-.43.33l-10.66.73c-.29,0-.54-.12-.56-.31l-.07-.89C273.7,256.13,273.89,256,274.15,256Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274,251.34l10.61-.72c.29,0,.53.11.55.3l.07.86c0,.19-.21.35-.5.37l-10.61.73c-.28,0-.53-.12-.54-.31l-.07-.86C273.48,251.53,273.7,251.36,274,251.34Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="19"
          y1="29.58"
          x2="30.09"
          y2="24.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="19.16"
          y1="30.94"
          x2="30.25"
          y2="25.53"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="19.32"
          y1="34.23"
          x2="30.33"
          y2="28.79"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="19.48"
          y1="35.52"
          x2="30.46"
          y2="30.17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="19.92"
          y1="38.77"
          x2="30.69"
          y2="33.4"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="20.01"
          y1="40.14"
          x2="30.85"
          y2="34.76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="20.07"
          y1="43.42"
          x2="31.23"
          y2="38.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="20.24"
          y1="44.77"
          x2="31.28"
          y2="39.38"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="20.6"
          y1="48"
          x2="31.42"
          y2="42.61"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="20.74"
          y1="49.36"
          x2="31.49"
          y2="44.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M285.36,252.27"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M276.47,284.06l10.58-.72c1.13-.08,2.09.46,2.15,1.19l.25,3.27c.06.74-.81,1.39-1.93,1.47l-10.58.72c-1.13.08-2.09-.45-2.15-1.19l-.25-3.27C274.48,284.8,275.34,284.14,276.47,284.06Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_gingivitis5">
        <path
          id="ADULT_DENT_Left_gingivitis5"
          v-if="selectedTooth.gingivitis.left"
          d="M258.05,289.86c.47,0,.19-.85,1.49-2,.95-.83,1.68-.91,2-1.59.2-.43,0-.85-.33-1.67-.49-1.15-.9-1.37-1.16-2.09a3,3,0,0,1,.17-2.18c1.85-5.27.89-4.25,2.32-7.37,1.26-2.74,2.06-3.64,1-4.18s-3.87-.48-5.63.17c-3.18,1.17-1.13,3.44-2,9.62-.43,3.1-1.2,4.33-.5,7C256,287.92,257.32,289.9,258.05,289.86Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_gingivitis5"
          v-if="selectedTooth.gingivitis.right"
          d="M303.47,284.34c-.53,0-1-.67-2-1.93-.75-1-1.49-2.09-1.49-2.09h0a6.51,6.51,0,0,1-2-.25c-.13-.2.89-.42,1.65-.84a2.67,2.67,0,0,0,1.33-2.51,7.84,7.84,0,0,0-.83-3.35c-1-2.61-1.52-3.91-2.15-4.68s-1.23-1.26-.83-1.51c.68-.42,3.75-.08,5.63.84,1.24.6,1.51,1.23,2.49,4.85,1.06,3.91.46,2.11,1.16,4.77.58,2.22.85,2.92.33,4C306.16,283,304.61,284.41,303.47,284.34Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_periodontal5"
          v-if="selectedTooth.periodontal.left"
          d="M258.05,289.86c.47,0,.19-.85,1.49-2,.95-.83,1.68-.91,2-1.59.2-.43,0-.85-.33-1.67-.49-1.15-.9-1.37-1.16-2.09a3,3,0,0,1,.17-2.18c1.85-5.27.89-4.25,2.32-7.37,1.26-2.74,2.06-3.64,1-4.18s-3.87-.48-5.63.17c-3.18,1.17-1.13,3.44-2,9.62-.43,3.1-1.2,4.33-.5,7C256,287.92,257.32,289.9,258.05,289.86Z"
          transform="translate(-254.84 -226.49)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_periodontal5"
          v-if="selectedTooth.periodontal.right"
          d="M303.47,284.34c-.53,0-1-.67-2-1.93-.75-1-1.49-2.09-1.49-2.09h0a6.51,6.51,0,0,1-2-.25c-.13-.2.89-.42,1.65-.84a2.67,2.67,0,0,0,1.33-2.51,7.84,7.84,0,0,0-.83-3.35c-1-2.61-1.52-3.91-2.15-4.68s-1.23-1.26-.83-1.51c.68-.42,3.75-.08,5.63.84,1.24.6,1.51,1.23,2.49,4.85,1.06,3.91.46,2.11,1.16,4.77.58,2.22.85,2.92.33,4C306.16,283,304.61,284.41,303.47,284.34Z"
          transform="translate(-254.84 -226.49)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Right_perio5"
          v-if="selectedTooth.perio.right"
          d="M303.47,284.34c-.53,0-1-.67-2-1.93-.75-1-1.49-2.09-1.49-2.09h0a6.51,6.51,0,0,1-2-.25c-.13-.2.89-.42,1.65-.84a2.67,2.67,0,0,0,1.33-2.51,7.84,7.84,0,0,0-.83-3.35c-1-2.61-1.52-3.91-2.15-4.68s-1.23-1.26-.83-1.51c.68-.42,3.75-.08,5.63.84,1.24.6,1.51,1.23,2.49,4.85,1.06,3.91.46,2.11,1.16,4.77.58,2.22.85,2.92.33,4C306.16,283,304.61,284.41,303.47,284.34Z"
          transform="translate(-254.84 -226.49)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          id="ADULT_DENT_Left_perio5"
          v-if="selectedTooth.perio.left"
          d="M258.05,289.86c.47,0,.19-.85,1.49-2,.95-.83,1.68-.91,2-1.59.2-.43,0-.85-.33-1.67-.49-1.15-.9-1.37-1.16-2.09a3,3,0,0,1,.17-2.18c1.85-5.27.89-4.25,2.32-7.37,1.26-2.74,2.06-3.64,1-4.18s-3.87-.48-5.63.17c-3.18,1.17-1.13,3.44-2,9.62-.43,3.1-1.2,4.33-.5,7C256,287.92,257.32,289.9,258.05,289.86Z"
          transform="translate(-254.84 -226.49)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      
      </g>
      <g id="ADULT_DENT_Implant5" v-if="selectedTooth.implant">
        <path
          d="M268.3,275l31.95,0c1.18,0,2.13.41,2.12.9l-.11,3.57c0,.49-1,.9-2.17.89l-31.95,0c-1.19,0-2.14-.4-2.12-.9l.11-3.57C266.14,275.39,267.11,275,268.3,275Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M283.73,232.72h4c2.09,0,3.77.72,3.74,1.6l-1.2,40c0,.88-1.75,1.59-3.84,1.58h-4c-2.09,0-3.77-.72-3.74-1.6l1.2-40C279.92,233.42,281.64,232.71,283.73,232.72Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M273.88,266.47l21.87,0c.58,0,1,.2,1,.45l0,1.15c0,.24-.48.44-1.06.44l-21.87,0c-.58,0-1.05-.2-1-.45l0-1.14C272.82,266.66,273.3,266.47,273.88,266.47Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M273.71,260.37l22,0c.54,0,1,.19,1,.42l0,1.2c0,.23-.45.41-1,.41l-22,0c-.54,0-1-.18-1-.41l0-1.2C272.72,260.56,273.17,260.37,273.71,260.37Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274.27,254.28l21.82,0c.6,0,1.07.2,1.06.45l0,1.13c0,.25-.5.45-1.09.45l-21.83,0c-.59,0-1.06-.2-1.05-.45l0-1.13C273.19,254.48,273.67,254.28,274.27,254.28Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274.06,248.19l22,0c.53,0,1,.18,1,.41l0,1.21c0,.23-.45.41-1,.41l-22,0c-.53,0-1-.18-.95-.41l0-1.22C273.09,248.37,273.53,248.19,274.06,248.19Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274.22,242.1l22.09,0c.52,0,.94.17.93.39l0,1.24c0,.22-.43.4-.95.4l-21.95,0c-.6,0-1.08-.21-1.07-.46l0-1.18C273.27,242.27,273.7,242.1,274.22,242.1Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M274.81,236l21.84,0c.59,0,1.06.2,1.05.45l0,1.14c0,.25-.49.44-1.08.44l-21.84,0c-.59,0-1.06-.21-1.05-.45l0-1.14C273.74,236.2,274.22,236,274.81,236Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.72"
          y1="15.72"
          x2="42.48"
          y2="9.65"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.79"
          y1="17.53"
          x2="42.54"
          y2="11.43"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.44"
          y1="21.87"
          x2="42.06"
          y2="15.73"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.52"
          y1="23.58"
          x2="42.03"
          y2="17.56"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.76"
          y1="27.89"
          x2="41.87"
          y2="21.82"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.67"
          y1="29.71"
          x2="41.91"
          y2="23.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.14"
          y1="34.02"
          x2="42.04"
          y2="27.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.21"
          y1="35.82"
          x2="41.86"
          y2="29.75"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.31"
          y1="40.1"
          x2="41.5"
          y2="34.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <line
          x1="18.32"
          y1="41.91"
          x2="41.37"
          y2="35.87"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M297.88,238.28"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
        <path
          d="M273.34,279.28l21.77,0c2.32,0,4.18.79,4.15,1.76l-.13,4.33c0,1-1.93,1.76-4.25,1.75l-21.78,0c-2.32,0-4.17-.8-4.14-1.77l.13-4.32C269.12,280.06,271,279.28,273.34,279.28Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.56"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown5">
        <path
          id="ADULT_DENT_Endo_Crown1_5"
          v-if="selectedTooth.endo_crown.crown1"
          d="M293.59,308.54l-8,1a90.9,90.9,0,0,1-12.46-1,75.78,75.78,0,0,1-11.23-2.58l-3.54-2.41c-.43-.59-.2-1.24.61-1.69a5.77,5.77,0,0,1,2.56-.51h44a5,5,0,0,1,2.29.46c.73.42.88,1.05.38,1.59l-1.91,1.2a34.3,34.3,0,0,1-5.42,2.26A49.63,49.63,0,0,1,293.59,308.54Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.69"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_5"
          v-if="selectedTooth.endo_crown.crown2"
          d="M293.48,294.88l-19,.22-2.94,5.7c-.07.14.13.27.41.27h24.72c.29,0,.5-.14.41-.28Z"
          transform="translate(-254.84 -226.49)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.69"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical5"
        v-if="selectedTooth.periapical.periapical1"
        d="M268.72,245.07c.59-.09.19-1.18-.23-4.6s-.1-2.94-.47-4.78c-.27-1.4.1-2.83-.46-4.2a1.3,1.3,0,0,1,.35-1.75,3.66,3.66,0,0,1,1.85-.58,5.27,5.27,0,0,1,2.19.35,6.58,6.58,0,0,1,3.23,2.27c.94,1.13,2,2.24,2.89,3.38,2.41,3,2.7,2.82,3.93,4.67.35.53.8,1.28,2,3s1.35,2,1.5,2c.53,0,.89-2.92-.69-6-1.81-3.44-4.1-3.14-6.47-7.11-1-1.69-1.22-2.78-3.35-3.79a12.6,12.6,0,0,0-6.58-1.11c-2.92.51-3.74,2.61-4.27,4-1,2.42.55,2.71.58,6.94,0,2-.33,3,.69,4.54S268,245.18,268.72,245.07Z"
        transform="translate(-254.84 -226.49)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.56"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer5"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M293.75,308.61l-8,1a89,89,0,0,1-12.46-1A74.52,74.52,0,0,1,262.07,306l-3.53-2.4c-.44-.59-.21-1.24.6-1.69a5.52,5.52,0,0,1,2.57-.51h44a4.87,4.87,0,0,1,2.28.46c.73.42.89,1.05.38,1.59l-1.9,1.2a34.83,34.83,0,0,1-5.42,2.25A47.56,47.56,0,0,1,293.75,308.61Z"
        transform="translate(-254.84 -226.49)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.69"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer5"
        v-if="selectedTooth.crown.onlay"
        d="M293.75,308.61l-8,1a89,89,0,0,1-12.46-1A74.52,74.52,0,0,1,262.07,306l-3.53-2.4c-.44-.59-.21-1.24.6-1.69a5.52,5.52,0,0,1,2.57-.51h44a4.87,4.87,0,0,1,2.28.46c.73.42.89,1.05.38,1.59l-1.9,1.2a34.83,34.83,0,0,1-5.42,2.25A47.56,47.56,0,0,1,293.75,308.61Z"
        transform="translate(-254.84 -226.49)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.69"
      />
    </g>
    
  </svg>
  </div>
</template>
<script >
export default {
  props: ["selectedTooth"],
};
</script>
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