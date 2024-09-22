<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.57 113.6"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_3_all">
      <g id="adult_dent_3">
        <g id="adult_dent_3_root">
          <path
            id="adult_dent_3_root1"
            v-if="selectedTooth.dent.root1"
            d="M291.22,229.23c-1,.28,1.92,7.15.75,18.08-.5,4.61-1.51,7.89-3.3,13.7-2,6.38-3.55,11.56-5.39,11.51-1.57,0-1.49-3.89-5.09-10.14-1.59-2.77-3.51-5-7.33-9.59-5.91-7-7.05-7.2-8.54-10.41-2.61-5.64-1.47-10.22-2.24-10.27s-3.59,6.27-2.4,13.29c1,5.8,3.61,6,6.44,14.52,1.57,4.69,2.56,7.67,2.25,11.78-.45,5.85-3.21,9.45-1.5,10.82,1.22,1,2.73-.77,7-.41,2.86.24,3.25,1.09,8.23,1.92,3.1.51,4.11.37,4.64.27,2.4-.45,2.7-1.55,5.09-2.33a14.16,14.16,0,0,1,6.89-.13c4.43.68,6.07,2.35,7,1.64,1.12-.83-.66-3.42-1.35-7.26-1-5.4,1.24-7.55,1.65-12.74.14-1.7.1-4.06-3.59-14.11C299.92,247.79,292.93,228.78,291.22,229.23Z"
            transform="translate(-254.9 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.31"
          />
          <path
            id="adult_dent_3_root2"
            v-if="selectedTooth.dent.root2"
            d="M270.77,230.09c-.46.36,1.67,2.38,3.23,6.95.87,2.54,1.83,5.35,1.2,8.63-.76,4-3,4.37-2.85,7.12.2,2.91,2.8,3.41,5.69,7.4,4.18,5.76,3.24,10.87,4.94,11s3.58-5.51,4.34-7.94c1-3.18,1.86-5.88,1.65-9.32-.34-5.59-3.28-9.51-6.29-13.42C277.79,234.11,271.51,229.51,270.77,230.09Z"
            transform="translate(-254.9 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.31"
          />
        </g>
        <g id="adult_dent_3_crown">
          <path
            id="adult_dent_3_crown1"
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
            d="M263.67,283.75a10.65,10.65,0,0,0-3.44,3.29,21.66,21.66,0,0,0-3.89,9.59c-.51,2.84-1.75,9.8,1,11.1,1.35.62,2.29-.69,4.65-.14s2.48,2.27,5.09,3.42,5.42.66,7.48.28A25.61,25.61,0,0,0,281,309c4-1.84,4.34-2.64,6-2.6,2.71.06,2.83,2.26,5.83,3,3.75.93,5.18-2.1,11.08-2.19,3.59-.06,4.43,1,5.87.23,3.25-1.85,1.69-9,1.17-11.46-1-4.74-1.83-8.46-5.54-11.24-4.53-3.39-11-3.59-15.42-2-3.13,1.09-2.95,2.27-5.69,2.74-4.09.69-5.35-1.81-12-2.61C269.74,282.48,266.58,282.14,263.67,283.75Z"
            transform="translate(-254.9 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.31"
          />
          <path
            id="adult_dent_3_crown3"
            v-if="selectedTooth.dent.crown3"
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
            d="M294.21,310.19c0,.73-3.2,1.5-6.14,1.51-3.52,0-7.21-1.06-7.18-1.92,0-.12.09-.29,2.39-1.23s3.4-1.38,4-1.37c1,0,1.05.33,4.3,1.73C293.72,309.81,294.21,309.9,294.21,310.19Z"
            transform="translate(-254.9 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.31"
          />
          <path
            id="adult_dent_3_crown2"
            v-if="selectedTooth.dent.crown2"
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
            d="M307.38,308.14c.17.78-2.45,1.94-4.34,2.46-3.43,1-7.57.66-7.78-.27s3-2.35,5.84-2.85S307.21,307.3,307.38,308.14Z"
            transform="translate(-254.9 -226.55)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.31"
          />
        </g>
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I3"
        v-if="selectedTooth.filling_caries_class_i"
        d="M299.68,307.18a7.58,7.58,0,0,0-1.82.57c-.7.31-.78.47-1.37.73a5.82,5.82,0,0,1-2.48.44,5.62,5.62,0,0,1-2.3-.65c-.89-.47-.78-.71-2-1.5a5.39,5.39,0,0,0-2.17-1,4.8,4.8,0,0,0-1.67.06c-1.29.25-1.78.8-3.29,1.65-.59.34-1.38.68-3,1.38a35.9,35.9,0,0,1-3.39,1.39,16.63,16.63,0,0,1-4.64.77,13.59,13.59,0,0,1-2.17-.14c0-3.88.09-7.77.13-11.65a1.44,1.44,0,0,1,1.5-1.37h27.13a1.44,1.44,0,0,1,1.5,1.37Z"
        transform="translate(-254.9 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial3"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M309.32,307c-.9.41-1.59-.12-3.9-.3a16.87,16.87,0,0,0-2.39,0,13.64,13.64,0,0,0-3,.57l-.3-.31,0-13.64a1.46,1.46,0,0,1,1.52-1.39l8.19.31.29,1.26a41.38,41.38,0,0,1,1,4.28c.75,4,.46,5.69.18,6.71a10.83,10.83,0,0,1-.38,1.12A2.46,2.46,0,0,1,309.32,307Z"
        transform="translate(-254.9 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal3"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M257.64,307.13c.67.29,1.08-.32,2.67-.38a6.13,6.13,0,0,1,2.11.27,6.74,6.74,0,0,1,2.21,1.29,12.2,12.2,0,0,1,1.33,1.28,2.54,2.54,0,0,0,.37.28,6.94,6.94,0,0,0,1.83.77c.9.28,1,.24,1.11.18.22-.15.14-.51.09-.94-.08-.68,0-1.36,0-2-.09-1.57.08-2.45.06-5.37,0-2.58-.15-2.22-.12-3.86.07-4.1.91-5.12.05-6-.61-.63-1.17-.3-5.43-.55-3.54-.22-4.86-.55-5.67.28a5.38,5.38,0,0,0-.76,2.15,25,25,0,0,0-.49,2.71c-.42,2.64-.44,2.7-.48,3.15a22.77,22.77,0,0,0-.13,2.84,7.93,7.93,0,0,0,.16,1.78C256.77,306,257,306.83,257.64,307.13Z"
        transform="translate(-254.9 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V3"
        v-if="selectedTooth.filling_caries_class_v"
        x="23.98"
        y="61.08"
        width="11.33"
        height="2.9"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal3"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M265,298.32h-5.29c-.59,0-1.08-.05-1.44-.05-.84,0-1.25,0-1.41-.2s-.05-.24,0-.56.16-.73.28-1.29l.41-1.88a1.47,1.47,0,0,1,.28-.81,2,2,0,0,1,1.85-.64H265a2.21,2.21,0,0,1,2.3,2.11v1.21A2.21,2.21,0,0,1,265,298.32Z"
        transform="translate(-254.9 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial3"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M308.32,298.31H303a2.21,2.21,0,0,1-2.3-2.11V295a2.21,2.21,0,0,1,2.3-2.1h5.29a2.6,2.6,0,0,1,1.14.71,2.26,2.26,0,0,1,.6,1.24l.08,1.48a1.34,1.34,0,0,1,.17,1.17A1.74,1.74,0,0,1,308.32,298.31Z"
        transform="translate(-254.9 -226.55)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.44"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo3">
        <path
          id="ADULT_DENT_Endo3_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M280.05,283c-.88.7-2.65.29-5.49-.36a17.06,17.06,0,0,1-4.26-1.42c-3.53-2.14-.85-7.63-2.31-15.58-.91-5-2.22-4.21-6.38-16.23-1-2.85-2.69-7.75-2.13-7.95.39-.15,1.63,2.1,5.85,9.08,4.56,7.55,4.59,7.35,6.39,10.55.78,1.39,3.14,5.64,5.67,11.36C281.19,281,280.73,282.47,280.05,283Z"
          transform="translate(-254.9 -226.55)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Endo3_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M294.77,238.7c-.59,0,.45,6.13-1.42,14.93-1.14,5.39-1.8,4.34-4.25,13.47-3,11.21-1.19,9.69-2.75,14.66,0,.11-.6,1.94-.17,2.13s1.21-1.71,3.27-2.67c1.39-.65,2.95-.55,6-.33,3.49.25,3.82.69,4.43.33,1.93-1.14-.21-6-1.41-13-.9-5.2-.08-4.61-.89-13.3C296.88,247.17,295.47,238.65,294.77,238.7Z"
          transform="translate(-254.9 -226.55)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Endo3_3"
          v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M276.15,235.61c-.29.16,1.67,2.3,1.77,6.17a18.78,18.78,0,0,1-1.24,6.65,16.69,16.69,0,0,0-1.59,4.71,4.57,4.57,0,0,0,.35,3.08c.51.91,1.15,1.12,2.13,1.95a11,11,0,0,1,2.66,3.57,26.88,26.88,0,0,1,1.95,6c.47,1.83.54,2.38.89,2.43,1.09.16,2.8-5,3-5.68a28,28,0,0,0,1.24-5.52C288.18,250.06,276.89,235.22,276.15,235.61Z"
          transform="translate(-254.9 -226.55)"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Post3">
        <g id="ADULT_DENT_Post3_1" v-if="selectedTooth.post.post1">
          <path
            d="M287.94,281.83l10.46,1a.68.68,0,0,1,.63.74l-.27,2.67a.7.7,0,0,1-.77.6l-10.45-1a.69.69,0,0,1-.64-.74l.27-2.67A.7.7,0,0,1,287.94,281.83Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M295.8,250.6l1.32.13a1.2,1.2,0,0,1,1.12,1.31L295.19,282a1.22,1.22,0,0,1-1.36,1.07l-1.32-.12a1.21,1.21,0,0,1-1.12-1.31l3.05-29.94A1.24,1.24,0,0,1,295.8,250.6Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M290.34,275.61l7.15.68a.33.33,0,0,1,.31.36l-.09.86a.34.34,0,0,1-.38.3l-7.15-.68a.33.33,0,0,1-.31-.36l.09-.86A.34.34,0,0,1,290.34,275.61Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M290.69,271l7.19.68a.33.33,0,0,1,.3.34l-.1.9a.31.31,0,0,1-.35.28l-7.2-.68a.33.33,0,0,1-.29-.34l.09-.91A.32.32,0,0,1,290.69,271Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M291.27,266.48l7.14.69a.33.33,0,0,1,.32.37l-.09.84a.35.35,0,0,1-.38.31l-7.14-.68a.35.35,0,0,1-.32-.37l.09-.85A.35.35,0,0,1,291.27,266.48Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M291.61,261.91l7.21.69a.31.31,0,0,1,.29.33l-.1.91a.32.32,0,0,1-.35.28l-7.2-.69a.32.32,0,0,1-.29-.33l.1-.92A.31.31,0,0,1,291.61,261.91Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M292.07,257.35l7.22.69a.29.29,0,0,1,.28.32l-.09.93a.32.32,0,0,1-.34.27l-7.18-.69a.35.35,0,0,1-.32-.37l.09-.89A.3.3,0,0,1,292.07,257.35Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M292.67,252.8l7.14.68a.35.35,0,0,1,.32.37l-.09.85a.35.35,0,0,1-.38.3l-7.15-.68a.34.34,0,0,1-.31-.37l.08-.85A.34.34,0,0,1,292.67,252.8Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.95"
            y1="30.86"
            x2="45.12"
            y2="27.02"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.85"
            y1="32.22"
            x2="45.02"
            y2="28.36"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.45"
            y1="35.46"
            x2="44.58"
            y2="31.57"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.36"
            y1="36.75"
            x2="44.45"
            y2="32.94"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36.15"
            y1="39.99"
            x2="44.11"
            y2="36.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="36"
            y1="41.35"
            x2="44.01"
            y2="37.49"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.54"
            y1="44.56"
            x2="43.76"
            y2="40.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.44"
            y1="45.91"
            x2="43.58"
            y2="42.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.19"
            y1="49.13"
            x2="43.18"
            y2="45.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="35.07"
            y1="50.48"
            x2="43.02"
            y2="46.65"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M300.06,255.2"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M289.31,285.2l7.12.68a1.34,1.34,0,0,1,1.24,1.45l-.33,3.24a1.36,1.36,0,0,1-1.51,1.19l-7.12-.68a1.35,1.35,0,0,1-1.24-1.45l.33-3.24A1.37,1.37,0,0,1,289.31,285.2Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
        <g id="ADULT_DENT_Post3_3" v-if="selectedTooth.post.post3">
          <path
            d="M269.91,283.94l8-2.95a.51.51,0,0,1,.67.41l.5,2.43a.7.7,0,0,1-.4.8l-8,2.95a.5.5,0,0,1-.66-.41l-.51-2.42A.71.71,0,0,1,269.91,283.94Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M267.42,253.9l1-.37a.88.88,0,0,1,1.17.73l5.69,27.16a1.26,1.26,0,0,1-.72,1.43l-1,.37a.89.89,0,0,1-1.17-.73l-5.69-27.16A1.27,1.27,0,0,1,267.42,253.9Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M270,277.65l5.46-2a.24.24,0,0,1,.33.2l.16.78a.36.36,0,0,1-.2.4l-5.46,2a.26.26,0,0,1-.33-.2l-.16-.78A.37.37,0,0,1,270,277.65Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M269.07,273.55l5.49-2a.22.22,0,0,1,.3.19l.18.82a.34.34,0,0,1-.19.37l-5.49,2a.23.23,0,0,1-.31-.18l-.17-.82A.32.32,0,0,1,269.07,273.55Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M268.29,269.37l5.45-2a.25.25,0,0,1,.33.21l.16.77a.35.35,0,0,1-.2.4l-5.45,2a.25.25,0,0,1-.33-.2l-.16-.77A.36.36,0,0,1,268.29,269.37Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M267.33,265.27l5.5-2a.22.22,0,0,1,.3.19l.17.82a.33.33,0,0,1-.18.37l-5.5,2a.22.22,0,0,1-.3-.19l-.18-.82A.32.32,0,0,1,267.33,265.27Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M266.45,261.13l5.52-2a.22.22,0,0,1,.29.18l.18.84a.32.32,0,0,1-.18.36l-5.48,2a.26.26,0,0,1-.34-.21l-.17-.8A.32.32,0,0,1,266.45,261.13Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M265.69,257l5.45-2a.25.25,0,0,1,.33.21l.16.77a.34.34,0,0,1-.2.4l-5.45,2a.25.25,0,0,1-.33-.21l-.16-.77A.34.34,0,0,1,265.69,257Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="11.41"
            y1="34.72"
            x2="16.42"
            y2="28.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="11.69"
            y1="35.94"
            x2="16.71"
            y2="29.6"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="12.26"
            y1="38.91"
            x2="17.23"
            y2="32.55"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="12.53"
            y1="40.06"
            x2="17.5"
            y2="33.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="13.24"
            y1="42.95"
            x2="18.1"
            y2="36.69"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="13.49"
            y1="44.19"
            x2="18.38"
            y2="37.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="14"
            y1="47.16"
            x2="19.06"
            y2="40.84"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="14.29"
            y1="48.36"
            x2="19.28"
            y2="42.06"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="14.96"
            y1="51.25"
            x2="19.83"
            y2="44.97"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="15.23"
            y1="52.47"
            x2="20.08"
            y2="46.24"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M271.78,256.35"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M271.81,286.37l5.43-2a1,1,0,0,1,1.3.81l.62,2.94a1.39,1.39,0,0,1-.8,1.58l-5.44,2a1,1,0,0,1-1.3-.81L271,288A1.39,1.39,0,0,1,271.81,286.37Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
        <g id="ADULT_DENT_Post3_2" v-if="selectedTooth.post.post2">
          <path
            d="M279.27,283.64l8.38-1.21c.31-.05.59.29.61.76l.21,3.36c0,.47-.2.89-.51.93l-8.38,1.22c-.31,0-.59-.3-.62-.77l-.21-3.36C278.73,284.1,279,283.69,279.27,283.64Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M280.52,243.25l1.06-.15c.55-.08,1,.52,1.09,1.35L285,282.12c.05.83-.35,1.56-.9,1.64l-1.06.16c-.55.08-1-.53-1.09-1.36l-2.32-37.67C279.57,244.07,280,243.33,280.52,243.25Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M280.17,275.4l5.73-.83c.16,0,.29.15.31.38l.06,1.08c0,.23-.09.43-.25.45l-5.74.83c-.15,0-.28-.14-.3-.37l-.06-1.08C279.9,275.63,280,275.42,280.17,275.4Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M279.72,269.67l5.77-.83c.15,0,.27.13.29.35l.07,1.13c0,.22-.1.41-.24.43l-5.77.84c-.14,0-.27-.14-.28-.36l-.07-1.13C279.47,269.88,279.58,269.69,279.72,269.67Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M279.46,263.92l5.73-.83c.16,0,.29.15.31.38l.06,1.07c0,.23-.1.44-.25.46l-5.73.83c-.15,0-.29-.15-.31-.38l-.06-1.07C279.19,264.15,279.31,263.94,279.46,263.92Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M279,258.19l5.78-.84c.14,0,.26.14.28.35l.07,1.15c0,.21-.09.4-.23.42l-5.78.84c-.14,0-.27-.14-.28-.35l-.07-1.15C278.76,258.4,278.87,258.21,279,258.19Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M278.65,252.45l5.79-.84c.14,0,.26.13.27.34l.08,1.17c0,.2-.09.39-.23.41l-5.76.83c-.15,0-.29-.15-.31-.39l-.07-1.11C278.41,252.65,278.51,252.47,278.65,252.45Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M278.4,246.7l5.73-.83c.15,0,.29.14.31.38l.06,1.07c0,.23-.1.44-.25.46l-5.73.83c-.16,0-.29-.15-.31-.38l-.07-1.07C278.13,246.92,278.24,246.72,278.4,246.7Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="23.58"
            y1="26.03"
            x2="29.41"
            y2="19.38"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="23.72"
            y1="27.73"
            x2="29.55"
            y2="21.06"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="23.91"
            y1="31.83"
            x2="29.7"
            y2="25.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.05"
            y1="33.44"
            x2="29.82"
            y2="26.85"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.39"
            y1="37.49"
            x2="30.06"
            y2="30.87"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.49"
            y1="39.2"
            x2="30.19"
            y2="32.56"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.64"
            y1="43.28"
            x2="30.51"
            y2="36.65"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="24.77"
            y1="44.97"
            x2="30.58"
            y2="38.33"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.08"
            y1="48.99"
            x2="30.76"
            y2="42.35"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <line
            x1="25.21"
            y1="50.69"
            x2="30.85"
            y2="44.1"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M284.6,247.93"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
          <path
            d="M280.87,287.48l5.72-.82c.6-.09,1.14.58,1.2,1.49l.25,4.08c.06.92-.39,1.73-1,1.82l-5.71.83c-.61.08-1.15-.59-1.21-1.5l-.25-4.08C279.82,288.38,280.26,287.57,280.87,287.48Z"
            transform="translate(-254.9 -226.55)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.44"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis3">
        <path
          id="ADULT_DENT_Left_gingivitis3"
          v-if="selectedTooth.gingivitis.left"
          d="M264.31,282.59c.06-.2-.3-.3-.57-.87a2.83,2.83,0,0,1-.1-1.93,11.28,11.28,0,0,1,.95-2.18,21.13,21.13,0,0,0,.67-3.32c.14-.72.28-1.4.38-2.36s.18-1.58,0-1.83c-.68-1-3.89-1.11-5.15.26s.59,2.71-.29,6.38a14.32,14.32,0,0,0-.48,3.23c0,1.63.27,2,.39,2.18C261.18,283.45,264.13,283.14,264.31,282.59Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_gingivitis3"
          v-if="selectedTooth.gingivitis.right"
          d="M304.7,283.38c-.26-.39-.07-.66-.19-2a17.46,17.46,0,0,0-.29-1.75c-.31-1.59-.51-1.89-1-3.67a10.1,10.1,0,0,1-.48-3.58c.08-.9.16-1.66.76-2a2.65,2.65,0,0,1,3,.7c.94,1.05-.13,2.07.19,4.63.16,1.23.42,1.08,1.44,4.45.84,2.81.77,3.27.47,3.59C307.79,284.62,305.33,284.35,304.7,283.38Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Left_periodontal3"
          v-if="selectedTooth.periodontal.left"
          d="M264.31,282.59c.06-.2-.3-.3-.57-.87a2.83,2.83,0,0,1-.1-1.93,11.28,11.28,0,0,1,.95-2.18,21.13,21.13,0,0,0,.67-3.32c.14-.72.28-1.4.38-2.36s.18-1.58,0-1.83c-.68-1-3.89-1.11-5.15.26s.59,2.71-.29,6.38a14.32,14.32,0,0,0-.48,3.23c0,1.63.27,2,.39,2.18C261.18,283.45,264.13,283.14,264.31,282.59Z"
          transform="translate(-254.9 -226.55)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_periodontal3"
          v-if="selectedTooth.periodontal.right"
          d="M304.7,283.38c-.26-.39-.07-.66-.19-2a17.46,17.46,0,0,0-.29-1.75c-.31-1.59-.51-1.89-1-3.67a10.1,10.1,0,0,1-.48-3.58c.08-.9.16-1.66.76-2a2.65,2.65,0,0,1,3,.7c.94,1.05-.13,2.07.19,4.63.16,1.23.42,1.08,1.44,4.45.84,2.81.77,3.27.47,3.59C307.79,284.62,305.33,284.35,304.7,283.38Z"
          transform="translate(-254.9 -226.55)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Left_perio3"
          v-if="selectedTooth.perio.left"
          d="M264.31,282.59c.06-.2-.3-.3-.57-.87a2.83,2.83,0,0,1-.1-1.93,11.28,11.28,0,0,1,.95-2.18,21.13,21.13,0,0,0,.67-3.32c.14-.72.28-1.4.38-2.36s.18-1.58,0-1.83c-.68-1-3.89-1.11-5.15.26s.59,2.71-.29,6.38a14.32,14.32,0,0,0-.48,3.23c0,1.63.27,2,.39,2.18C261.18,283.45,264.13,283.14,264.31,282.59Z"
          transform="translate(-254.9 -226.55)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Right_perio3"
          v-if="selectedTooth.perio.right"
          d="M304.7,283.38c-.26-.39-.07-.66-.19-2a17.46,17.46,0,0,0-.29-1.75c-.31-1.59-.51-1.89-1-3.67a10.1,10.1,0,0,1-.48-3.58c.08-.9.16-1.66.76-2a2.65,2.65,0,0,1,3,.7c.94,1.05-.13,2.07.19,4.63.16,1.23.42,1.08,1.44,4.45.84,2.81.77,3.27.47,3.59C307.79,284.62,305.33,284.35,304.7,283.38Z"
          transform="translate(-254.9 -226.55)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        
      </g>
      <g id="ADULT_DENT_Implant3" v-if="selectedTooth.implant">
        <path
          d="M270.37,278.08l29.45.05c1.09,0,2,.42,1.95.94l-.1,3.72c0,.52-.91.94-2,.94l-29.45-.05c-1.1,0-2-.42-2-.94l.1-3.72C268.38,278.5,269.27,278.08,270.37,278.08Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M284.59,234h3.72c1.94,0,3.48.75,3.46,1.67l-1.11,41.72c0,.92-1.61,1.66-3.54,1.66H283.4c-1.94,0-3.48-.74-3.46-1.66l1.11-41.73C281.08,234.69,282.66,234,284.59,234Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.51,269.19l20.16,0c.54,0,1,.2,1,.46l0,1.2c0,.25-.45.46-1,.46l-20.16,0c-.53,0-1-.21-.95-.46l0-1.2C274.54,269.39,275,269.19,275.51,269.19Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.36,262.83l20.28,0c.5,0,.9.19.9.43l0,1.26c0,.23-.41.43-.92.43l-20.28,0c-.5,0-.9-.2-.9-.44l0-1.25C274.44,263,274.86,262.83,275.36,262.83Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.87,256.47l20.12,0c.55,0,1,.21,1,.47l0,1.18c0,.26-.46.47-1,.47l-20.12,0c-.54,0-1-.21-1-.47l0-1.18C274.87,256.68,275.32,256.47,275.87,256.47Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.68,250.11l20.32,0c.49,0,.88.19.88.42l0,1.27c0,.24-.41.43-.9.43l-20.31,0c-.5,0-.89-.19-.89-.43l0-1.27C274.78,250.3,275.19,250.11,275.68,250.11Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275.83,243.75l20.36,0c.48,0,.86.18.86.41l0,1.3c0,.22-.4.41-.88.41l-20.23,0c-.55,0-1-.22-1-.48l0-1.23C275,243.93,275.35,243.75,275.83,243.75Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M276.37,237.39l20.13,0c.55,0,1,.21,1,.46l0,1.19c0,.26-.45.47-1,.47l-20.14,0c-.54,0-1-.21-1-.47l0-1.19C275.38,237.59,275.83,237.39,276.37,237.39Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.32"
          y1="17.31"
          x2="42.22"
          y2="10.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.38"
          y1="19.2"
          x2="42.28"
          y2="12.83"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.06"
          y1="23.73"
          x2="41.83"
          y2="17.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.13"
          y1="25.52"
          x2="41.81"
          y2="19.23"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.35"
          y1="30.02"
          x2="41.66"
          y2="23.68"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="20.27"
          y1="31.92"
          x2="41.69"
          y2="25.57"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.78"
          y1="36.42"
          x2="41.82"
          y2="30.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.84"
          y1="38.29"
          x2="41.65"
          y2="31.96"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.94"
          y1="42.76"
          x2="41.31"
          y2="36.41"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <line
          x1="19.95"
          y1="44.65"
          x2="41.2"
          y2="38.34"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M297.64,239.76"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          d="M275,282.56l20.08,0c2.14,0,3.85.83,3.82,1.85l-.12,4.51c0,1-1.78,1.84-3.92,1.84l-20.07,0c-2.14,0-3.85-.83-3.83-1.85l.12-4.51C271.12,283.38,272.88,282.56,275,282.56Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown3">
        <path
          id="ADULT_DENT_Endo_Crown1_3"
          v-if="selectedTooth.endo_crown.crown1"
          d="M306.37,306.54a12.54,12.54,0,0,0-6.25.06c-3,.85-4.33,2.66-6.38,2.13-.7-.18-.45-.36-2.84-1.79s-3.21-1.57-3.55-1.6a5.91,5.91,0,0,0-3.27.85c-5.72,2.75-6,3.18-7.84,3.81a11.11,11.11,0,0,1-6.56.7,8.58,8.58,0,0,1-3.67-1.79c-.87-.79-1.12-1.44-2.14-2a5.32,5.32,0,0,0-2.72-.52,3.1,3.1,0,0,1-3.35-.06,2.24,2.24,0,0,1-.82-1.44c0-.56-.08-1.33-.12-2.25-.07-1.41-.07-1.89.26-2.37a2.53,2.53,0,0,1,1.13-.85h50.87a1.49,1.49,0,0,1,1.55,1.42v3.47a2.84,2.84,0,0,1-.95,1.68A3.6,3.6,0,0,1,306.37,306.54Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.31"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_3"
          v-if="selectedTooth.endo_crown.crown2"
          d="M288.8,292.46l-10.92.23-1.7,5.95a.23.23,0,0,0,.24.28h14.24a.23.23,0,0,0,.24-.29Z"
          transform="translate(-254.9 -226.55)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.31"
        />
      </g>
      <g id="ADULT_DENT_Periapical3">
        <path
          id="ADULT_DENT_Periapical3_3"
          v-if="selectedTooth.periapical.periapical3"
          d="M256.83,244.56a19.15,19.15,0,0,1-.2-2.8,22.13,22.13,0,0,1,.26-3.47,23.38,23.38,0,0,1,.67-3c0-.11.35-.95,1-2.62a1.76,1.76,0,0,1,.86-1.16,1.3,1.3,0,0,1,1.07.07c.43.25.51.77.59,1.52.11,1,.16,1.45.2,2.55a14.93,14.93,0,0,0,.6,3.47c.06.22.77,2.91,1.13,2.86s.24-1.4.2-2.86c-.07-3.23-.11-4.85-.8-6.57-.54-1.35-1.39-3.47-2.79-3.59-1.74-.15-3.49,2.88-4.12,5a11.36,11.36,0,0,0-.2,5A19.45,19.45,0,0,0,256.83,244.56Z"
          transform="translate(-254.9 -226.55)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Periapical3_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M274.59,241.4c.23-.12-.16-1.24-.93-3.47-.41-1.17-.62-1.78-1-2.62a14.68,14.68,0,0,0-1.46-2.8,4.69,4.69,0,0,1-1.14-1.95c-.06-.31-.17-.82.14-1.1s.95-.15,1.33-.06a6.48,6.48,0,0,1,2.39,1.4c1.23.94,1.84,1.4,2.07,1.59.94.78,1.65,1.43,2,1.76a30.43,30.43,0,0,1,2.4,2.5c.86,1,1.09,1.44,1.19,1.4s-.28-2.17-1.59-4c-.82-1.15-1.9-1.92-4.06-3.47-3.35-2.4-4.38-2.52-5.06-2.5a3.37,3.37,0,0,0-2.46.92c-.3.39-.55,1.09,1.66,6.21a19.76,19.76,0,0,0,1.47,3C272.62,239.87,274.21,241.59,274.59,241.4Z"
          transform="translate(-254.9 -226.55)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
        <path
          id="ADULT_DENT_Periapical3_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M291.42,237.93c.13-.05-.05-.61-.33-2.5-.27-1.73-.17-1.58-.4-2.92a18.78,18.78,0,0,0-.34-2.25,1.51,1.51,0,0,1-.06-1.16,1.17,1.17,0,0,1,.93-.61c.36,0,.71.15,1.26.73a8.2,8.2,0,0,1,1.47,2.25c1.12,2.36,1,1.95,1.46,3.05s.82,1.8,1.06,2.43c.47,1.2.54,1.62.65,1.61s.57-2.29-.11-4.59a11.94,11.94,0,0,0-2.73-4.44c-1.46-1.76-2.42-2.9-3.46-2.74-1.21.18-1.78,2-1.93,2.49-.63,2,.11,3.85.86,5.72C290.35,236.47,291.19,238,291.42,237.93Z"
          transform="translate(-254.9 -226.55)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.44"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer3"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M306.46,306.62a12.54,12.54,0,0,0-6.25.06c-3,.85-4.32,2.66-6.38,2.13-.7-.17-.45-.36-2.84-1.79s-3.2-1.57-3.54-1.6a6,6,0,0,0-3.28.85c-5.71,2.75-6,3.18-7.83,3.82a11.15,11.15,0,0,1-6.57.69,8.5,8.5,0,0,1-3.66-1.79c-.87-.78-1.13-1.44-2.15-2a5.4,5.4,0,0,0-2.71-.52,3.12,3.12,0,0,1-3.35-.05,2.36,2.36,0,0,1-.83-1.45c0-.55-.08-1.33-.12-2.25-.06-1.41-.06-1.89.27-2.37a2.43,2.43,0,0,1,1.13-.85h50.86a1.5,1.5,0,0,1,1.56,1.42v3.47a2.82,2.82,0,0,1-1,1.68A3.57,3.57,0,0,1,306.46,306.62Z"
        transform="translate(-254.9 -226.55)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.31"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer3"
        v-if="selectedTooth.crown.onlay"
        d="M306.46,306.62a12.54,12.54,0,0,0-6.25.06c-3,.85-4.32,2.66-6.38,2.13-.7-.17-.45-.36-2.84-1.79s-3.2-1.57-3.54-1.6a6,6,0,0,0-3.28.85c-5.71,2.75-6,3.18-7.83,3.82a11.15,11.15,0,0,1-6.57.69,8.5,8.5,0,0,1-3.66-1.79c-.87-.78-1.13-1.44-2.15-2a5.4,5.4,0,0,0-2.71-.52,3.12,3.12,0,0,1-3.35-.05,2.36,2.36,0,0,1-.83-1.45c0-.55-.08-1.33-.12-2.25-.06-1.41-.06-1.89.27-2.37a2.43,2.43,0,0,1,1.13-.85h50.86a1.5,1.5,0,0,1,1.56,1.42v3.47a2.82,2.82,0,0,1-1,1.68A3.57,3.57,0,0,1,306.46,306.62Z"
        transform="translate(-254.9 -226.55)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.31"
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
