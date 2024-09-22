<template>
 <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.9 113.69"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_4_all">
      <g id="adult_dent_4">
        <path
          id="adult_dent_4_root"
          v-if="selectedTooth.dent.root1"
          d="M270,230.74c-3.2.42,4.33,11.48.27,28.66-2.59,11-9.68,21.34-5.66,22.3,1.83.44,3.77-1.57,11.08-2.61a64.79,64.79,0,0,1,11.84-.43c8.85.3,10.76,1.64,12.67,1,4.83-1.59-1.78-12-11.05-25.33C272.82,230.9,270.67,230.65,270,230.74Z"
          transform="translate(-254.82 -226.47)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
        <path
          id="adult_dent_4_crown"
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
          d="M263.52,282.72a10.54,10.54,0,0,0-4.85,5.21,9,9,0,0,0,1.08,10.28c4,5,12,7.11,16.18,8.25a40.47,40.47,0,0,0,9.43,1.74c9.53.46,19.59-2.92,24-7.68,4.1-4.43,2.11-8.76.8-11.58s-2.63-5.71-7.54-7.67c-4.39-1.75-9.13-1.65-18.61-1.45S268.22,280.15,263.52,282.72Z"
          transform="translate(-254.82 -226.47)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I4"
        v-if="selectedTooth.filling_caries_class_i"
        d="M288,307.6c-1.18,0-2.56-.09-4.07-.24a33.48,33.48,0,0,1-4.17-.65,25,25,0,0,1-3.57-1.11v-4.2c0-1.74,3-3.15,6.65-3.15h8.83c3.68,0,6.65,1.41,6.65,3.15v4.2c-.2.08-.52.2-.93.32-.57.18-1,.28-1.33.36-1.34.32-1.36.38-2.22.58a26.57,26.57,0,0,1-2.78.45C290.27,307.41,289.23,307.52,288,307.6Z"
        transform="translate(-254.82 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial4"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M305.23,302.74a24,24,0,0,1-3.31,1.73,15,15,0,0,1-1.59.66,3.2,3.2,0,0,1-1.54.35c-.45-.1-.61-.57-.48-1.13V292.11c0-1.1,1.67-2,3.71-2h5.11a4.05,4.05,0,0,1,2.4.4c.23.2.17.38.41,1a6.31,6.31,0,0,0,.37.77,8,8,0,0,1-.05,4.44,9.94,9.94,0,0,1-1.43,2.9,11.42,11.42,0,0,1-1.65,1.72A18.61,18.61,0,0,1,305.23,302.74Z"
        transform="translate(-254.82 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal4"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M275.43,305.63c.88-.21.53-1.46.34-2.7a36.66,36.66,0,0,1,.18-9.45c.18-1.49.39-2.19-.55-2.74-1.18-.68-2.79-.33-7.78-.4-5.28-.07-7.51-.52-8.43.2-.25.2-.29.78-.37,1.94a6.24,6.24,0,0,0,0,1.69,6.72,6.72,0,0,0,1.29,2.59,12,12,0,0,0,2.32,2.74,19.7,19.7,0,0,0,3.15,2.19,33.18,33.18,0,0,0,3.15,1.64c.71.31,1.58.64,3.33,1.29C274.81,305.64,275.14,305.7,275.43,305.63Z"
        transform="translate(-254.82 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V4"
        v-if="selectedTooth.filling_caries_class_v"
        x="22.22"
        y="58.17"
        width="20.41"
        height="3.06"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal4"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M267.22,296h-3.91L260,295l-.87-.24.15-3.95h0l4.05-.64h3.91c2.29,0,4.15,1,4.15,2.23v1.29C271.37,295,269.51,296,267.22,296Z"
        transform="translate(-254.82 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial4"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M310,295.38l-8.1.57c-2.29,0-4.14-1-4.14-2.22v-1.29c0-1.23,1.85-2.23,4.14-2.23l7.64.64h0l.42,1.59v1.29C310,294.28,310,294.83,310,295.38Z"
        transform="translate(-254.82 -226.47)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.6"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo4"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M274.85,240.13c-1.76.17,3.68,8.84.32,21.44-2,7.52-7.16,16.49-4.15,17.15.8.18,1.56-.38,5.43-.69,1.39-.11,2.52-.13,4.79-.17,2.56,0,4.54,0,5.43,0s2.61.05,4.79.17a28,28,0,0,0,3.2.19c3-.76-4.52-12.77-9-20.25C278.38,245.58,276.25,240,274.85,240.13Z"
        transform="translate(-254.82 -226.47)"
        
        stroke-miterlimit="10"
        stroke-width="0.6"
      />
      <g id="ADULT_DENT_Post4" v-if="selectedTooth.post.post1">
        <path
          d="M274.42,280.92l15.15-.62c.56,0,1.05.25,1.08.59l.23,2.5c0,.35-.4.65-1,.67l-15.16.62c-.56,0-1-.24-1.07-.59l-.23-2.5C273.43,281.25,273.86,281,274.42,280.92Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M278.43,251l1.91-.08c1,0,1.85.42,1.9,1l2.56,28c.06.61-.7,1.14-1.7,1.19l-1.91.07c-1,0-1.84-.42-1.9-1l-2.56-28C276.67,251.61,277.43,251.08,278.43,251Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M276.4,274.85l10.37-.43c.27,0,.51.12.53.29l.07.81c0,.17-.2.32-.47.33l-10.37.42c-.28,0-.51-.12-.53-.29l-.07-.8C275.91,275,276.12,274.86,276.4,274.85Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M275.84,270.59l10.44-.43c.26,0,.48.11.49.27l.08.85c0,.16-.18.29-.44.3L276,272c-.25,0-.48-.11-.49-.27l-.08-.84C275.39,270.74,275.59,270.6,275.84,270.59Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M275.63,266.31l10.35-.42c.28,0,.52.12.54.3l.07.79c0,.17-.2.32-.48.33l-10.35.43c-.28,0-.52-.12-.54-.3l-.07-.79C275.13,266.48,275.35,266.33,275.63,266.31Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M275.06,262.06l10.45-.43c.25,0,.47.11.48.27l.08.85c0,.16-.18.29-.43.3l-10.45.43c-.26,0-.48-.11-.49-.27l-.08-.85C274.61,262.2,274.8,262.07,275.06,262.06Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M274.65,257.79l10.48-.43c.24,0,.46.11.47.26l.08.87c0,.15-.18.29-.42.3l-10.41.42c-.28,0-.53-.12-.54-.3l-.08-.82C274.22,257.93,274.41,257.8,274.65,257.79Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M274.46,253.52l10.35-.43c.28,0,.52.12.54.3l.07.79c0,.18-.2.33-.48.34l-10.35.42c-.28,0-.52-.12-.54-.29l-.07-.8C274,253.68,274.18,253.53,274.46,253.52Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="19.53"
          y1="31.41"
          x2="30.32"
          y2="26.68"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="19.71"
          y1="32.68"
          x2="30.49"
          y2="27.93"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="19.88"
          y1="35.72"
          x2="30.6"
          y2="30.95"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="20.05"
          y1="36.92"
          x2="30.73"
          y2="32.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="20.5"
          y1="39.93"
          x2="30.99"
          y2="35.22"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="20.6"
          y1="41.2"
          x2="31.14"
          y2="36.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="20.69"
          y1="44.23"
          x2="31.55"
          y2="39.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="20.86"
          y1="45.49"
          x2="31.6"
          y2="40.76"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="21.25"
          y1="48.48"
          x2="31.76"
          y2="43.75"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="21.39"
          y1="49.74"
          x2="31.85"
          y2="45.05"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M285.57,254.64"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M277.15,283.82l10.32-.42c1.1,0,2,.47,2.11,1.15l.27,3c.07.68-.78,1.27-1.87,1.32l-10.33.42c-1.1,0-2-.47-2.11-1.15l-.27-3C275.21,284.46,276.05,283.87,277.15,283.82Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
      </g>
      <g id="ADULT_DENT_gingivitis4">
        <path
          id="ADULT_DENT_Left_gingivitis4"
          v-if="selectedTooth.gingivitis.left"
          d="M258.87,285.41c1-.16.29-1.38,2.06-2.4,1.15-.67,2.22-.67,2.41-1.2s-1-.81-1.38-1.67.22-1.14.69-2.21c.64-1.47,0-1.76.34-3.23.39-1.68,1.27-1.57,2.24-3.61,1.12-2.35,0-2.64,1.2-4.89.94-1.77,2-2.29,1.38-2.86-.93-.84-4.7-1-7.05-.19-2,.69-2.66,2-3.27,7.48a41.62,41.62,0,0,1-2.06,10,3,3,0,0,0,.68,3.6A4.09,4.09,0,0,0,258.87,285.41Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Right_gingivitis4"
          v-if="selectedTooth.gingivitis.right"
          d="M308.91,284.21c-.69,0-.54-.9-2.07-1.94-2.2-1.49-5.16-1.41-5.33-2.31-.1-.53.89-.66,1.55-1.57s.35-1.74,0-2.68c-1.74-4.65-1.29-3.86-1.72-4.71a29.71,29.71,0,0,0-3.61-6c-1.16-1.4-1.92-2-1.38-2.4.93-.69,5.13-.38,7.74.83s2.91,3,3.61,6.65c.83,4.27-.32,4.71,1.21,6.92.92,1.35,1.92,2,2.06,3.51C311.14,282.36,309.89,284.21,308.91,284.21Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Left_periodontal4"
          v-if="selectedTooth.periodontal.left"
          d="M258.87,285.41c1-.16.29-1.38,2.06-2.4,1.15-.67,2.22-.67,2.41-1.2s-1-.81-1.38-1.67.22-1.14.69-2.21c.64-1.47,0-1.76.34-3.23.39-1.68,1.27-1.57,2.24-3.61,1.12-2.35,0-2.64,1.2-4.89.94-1.77,2-2.29,1.38-2.86-.93-.84-4.7-1-7.05-.19-2,.69-2.66,2-3.27,7.48a41.62,41.62,0,0,1-2.06,10,3,3,0,0,0,.68,3.6A4.09,4.09,0,0,0,258.87,285.41Z"
          transform="translate(-254.82 -226.47)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Right_periodontal4"
          v-if="selectedTooth.periodontal.right"
          d="M308.91,284.21c-.69,0-.54-.9-2.07-1.94-2.2-1.49-5.16-1.41-5.33-2.31-.1-.53.89-.66,1.55-1.57s.35-1.74,0-2.68c-1.74-4.65-1.29-3.86-1.72-4.71a29.71,29.71,0,0,0-3.61-6c-1.16-1.4-1.92-2-1.38-2.4.93-.69,5.13-.38,7.74.83s2.91,3,3.61,6.65c.83,4.27-.32,4.71,1.21,6.92.92,1.35,1.92,2,2.06,3.51C311.14,282.36,309.89,284.21,308.91,284.21Z"
          transform="translate(-254.82 -226.47)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Left_perio4"
          v-if="selectedTooth.perio.left"
          d="M258.87,285.41c1-.16.29-1.38,2.06-2.4,1.15-.67,2.22-.67,2.41-1.2s-1-.81-1.38-1.67.22-1.14.69-2.21c.64-1.47,0-1.76.34-3.23.39-1.68,1.27-1.57,2.24-3.61,1.12-2.35,0-2.64,1.2-4.89.94-1.77,2-2.29,1.38-2.86-.93-.84-4.7-1-7.05-.19-2,.69-2.66,2-3.27,7.48a41.62,41.62,0,0,1-2.06,10,3,3,0,0,0,.68,3.6A4.09,4.09,0,0,0,258.87,285.41Z"
          transform="translate(-254.82 -226.47)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          id="ADULT_DENT_Right_perio4"
          v-if="selectedTooth.perio.right"
          d="M308.91,284.21c-.69,0-.54-.9-2.07-1.94-2.2-1.49-5.16-1.41-5.33-2.31-.1-.53.89-.66,1.55-1.57s.35-1.74,0-2.68c-1.74-4.65-1.29-3.86-1.72-4.71a29.71,29.71,0,0,0-3.61-6c-1.16-1.4-1.92-2-1.38-2.4.93-.69,5.13-.38,7.74.83s2.91,3,3.61,6.65c.83,4.27-.32,4.71,1.21,6.92.92,1.35,1.92,2,2.06,3.51C311.14,282.36,309.89,284.21,308.91,284.21Z"
          transform="translate(-254.82 -226.47)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
      </g>
      <g id="ADULT_DENT_Implant4" v-if="selectedTooth.implant">
        <path
          d="M266.36,273.41l33.15,0c1.23,0,2.22.45,2.2,1l-.11,3.93c0,.55-1,1-2.25,1l-33.16-.05c-1.23,0-2.21-.44-2.19-1l.11-3.94C264.12,273.86,265.13,273.41,266.36,273.41Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M282.37,226.77h4.19c2.18,0,3.92.79,3.89,1.76l-1.25,44.1c0,1-1.81,1.76-4,1.75H281c-2.18,0-3.92-.79-3.89-1.76l1.25-44.11C278.42,227.55,280.2,226.77,282.37,226.77Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.15,264l22.69,0c.6,0,1.09.22,1.08.49l0,1.27c0,.27-.5.48-1.1.48l-22.69,0c-.6,0-1.09-.22-1.08-.49l0-1.26C271.05,264.23,271.55,264,272.15,264Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272,257.29l22.83,0c.56,0,1,.21,1,.46l0,1.33c0,.25-.47.45-1,.45l-22.82,0c-.57,0-1-.21-1-.46l0-1.33C271,257.49,271.42,257.29,272,257.29Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.55,250.57l22.65,0c.62,0,1.11.22,1.1.5l0,1.24c0,.28-.51.5-1.12.5l-22.65,0c-.61,0-1.11-.23-1.1-.5l0-1.25C271.43,250.79,271.94,250.57,272.55,250.57Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.34,243.84l22.87,0c.55,0,1,.2,1,.45l0,1.34c0,.25-.46.45-1,.45l-22.86,0c-.56,0-1-.2-1-.44l0-1.35C271.33,244,271.79,243.84,272.34,243.84Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M272.51,237.12l22.91,0c.54,0,1,.2,1,.44l0,1.37c0,.24-.45.43-1,.43l-22.77,0c-.62,0-1.12-.22-1.11-.5l0-1.3C271.52,237.32,272,237.12,272.51,237.12Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M273.12,230.4l22.66,0c.61,0,1.1.22,1.09.5l0,1.25c0,.27-.51.49-1.12.49l-22.67,0c-.61,0-1.1-.22-1.09-.49l0-1.26C272,230.62,272.51,230.4,273.12,230.4Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="17"
          y1="10.78"
          x2="41.65"
          y2="4.07"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="17.07"
          y1="12.78"
          x2="41.72"
          y2="6.04"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.71"
          y1="17.56"
          x2="41.22"
          y2="10.78"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.79"
          y1="19.45"
          x2="41.19"
          y2="12.81"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="17.04"
          y1="24.21"
          x2="41.02"
          y2="17.51"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.95"
          y1="26.21"
          x2="41.06"
          y2="19.5"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.4"
          y1="30.97"
          x2="41.2"
          y2="24.29"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.47"
          y1="32.95"
          x2="41.01"
          y2="26.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.58"
          y1="37.68"
          x2="40.64"
          y2="30.96"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <line
          x1="16.59"
          y1="39.67"
          x2="40.51"
          y2="33.01"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M297.05,232.91"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <path
          d="M271.59,278.15l22.59,0c2.41,0,4.34.88,4.31,1.95l-.14,4.77c0,1.07-2,1.94-4.41,1.94l-22.59,0c-2.41,0-4.34-.88-4.31-1.95l.14-4.77C267.21,279,269.19,278.15,271.59,278.15Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown4">
        <path
          id="ADULT_DENT_Endo_Crown1_4"
          v-if="selectedTooth.endo_crown.endo1"
          d="M284.71,307.31A54.41,54.41,0,0,1,270.54,304a9.38,9.38,0,0,1-1.76-.92c-1.14-.73-3.51-2.35-8.11-5.78h0l49.05-.16h0l-1.13,2.1a6.14,6.14,0,0,1-2.15,2.16c-.48.3-1,.64-1.61,1a39.23,39.23,0,0,1-6.93,3.43,33.55,33.55,0,0,1-10.67,1.65A19.16,19.16,0,0,1,284.71,307.31Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_4"
          v-if="selectedTooth.endo_crown.endo2"
          d="M294.66,290l-19.67.25-3.05,6.28c-.08.16.14.3.43.3H298c.3,0,.51-.15.42-.31Z"
          transform="translate(-254.82 -226.47)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.81"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical4"
        v-if="selectedTooth.periapical.periapical1"
        d="M269.86,243.62c.32-.07.33-.39-.6-4.11,0-.16-.59-2.39-.95-5a6.22,6.22,0,0,1,.24-2.58c.18-.63.57-1.94,1.43-2,.11,0,.32,0,1.56.77a17.79,17.79,0,0,1,1.8,1.22,14.46,14.46,0,0,1,1.43,1.29,26.87,26.87,0,0,1,2.76,3.47c1.3,1.83,1.2,1.44,3,3.86s2.11,3.12,2.39,3.09c.62-.06.54-3.23-1.08-6.37a21,21,0,0,0-4.43-5.4,13.14,13.14,0,0,0-4.67-3.35c-1-.39-3.93-1.58-6.11-1-1.46.38-1.89,1.36-2.4,2.58-.58,1.41-.5,2.45-.24,4.82.46,4.17.59,4.48.84,4.89C266.16,242,269,243.82,269.86,243.62Z"
        transform="translate(-254.82 -226.47)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.6"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer4"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M284.88,307.39a53.59,53.59,0,0,1-14.17-3.34,9.36,9.36,0,0,1-1.76-.91c-1.14-.73-3.51-2.35-8.11-5.79h0l49.05-.16h0l-1.13,2.1a6.16,6.16,0,0,1-2.15,2.17c-.48.3-1,.63-1.61,1a39.23,39.23,0,0,1-6.93,3.43,33.85,33.85,0,0,1-10.67,1.65A21.05,21.05,0,0,1,284.88,307.39Z"
        transform="translate(-254.82 -226.47)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.81"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer4"
        v-if="selectedTooth.crown.onlay"
        d="M284.88,307.39a53.59,53.59,0,0,1-14.17-3.34,9.36,9.36,0,0,1-1.76-.91c-1.14-.73-3.51-2.35-8.11-5.79h0l49.05-.16h0l-1.13,2.1a6.16,6.16,0,0,1-2.15,2.17c-.48.3-1,.63-1.61,1a39.23,39.23,0,0,1-6.93,3.43,33.85,33.85,0,0,1-10.67,1.65A21.05,21.05,0,0,1,284.88,307.39Z"
        transform="translate(-254.82 -226.47)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.81"
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
      line-height: 1.2;
      bottom: -2.5rem;
      left: 40%;

      
      
    }
}
</style>
