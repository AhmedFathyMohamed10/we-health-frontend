<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 20 57.55 113.6"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_19_all">
      <g id="adult_dent_19">
        <path
          id="adult_dent_19_root"
          v-if="selectedTooth.dent.root1"
          d="M262.69,285.66c-.59,1.34-.3,2.22.83,9,1.34,8.05-.42-1.33,2.12,13.59,1.28,7.49,1.92,11.25,2.24,12.2.86,2.57,2.82,8.2,7.54,12.34s10.71,5.52,11.34,4.2c.41-.85-1.62-2.27-3.67-6.28a30.23,30.23,0,0,1-2.95-9.7c-1-6.91,0-16.49,2.83-17.2,1.58-.4,3.75,3.06,8,10,4.41,7.16,5.13,9.57,8.6,14.28,2.05,2.77,6.91,9.38,8.84,8.18,2.25-1.39-.51-12.66-.7-13.45-1.26-5-2.21-5.37-3.19-10.4a57.36,57.36,0,0,1-.94-10.26c0-2,.06-4.54.24-9.69.21-6.15.32-7.58-.59-8.48-1.21-1.19-2.82-.08-6.37.28-1.5.15-2.43.08-8.37-.83-12.35-1.89-11.87-2.12-13.91-2.08C270.91,281.42,264.51,281.53,262.69,285.66Z"
          transform="translate(-254.48 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.28"
        />
        <g id="adult_dent_19_crown">
          <path
            id="adult_dent_19_crown1"
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
            d="M270.12,255.84c.21-.9,2.84-.75,3.89-.69s3.64.21,3.77,1.11-1.94,2.5-4,2.36S269.92,256.68,270.12,255.84Z"
            transform="translate(-254.48 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.28"
          />
          <path
            id="adult_dent_19_crown2"
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
            d="M291.93,256.26c-.05-.79,2.26-1.86,4.36-1.94,2.46-.1,5,1.13,4.95,1.94s-3.41,1.23-3.65,1.25C295.1,257.72,292,257.16,291.93,256.26Z"
            transform="translate(-254.48 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.28"
          />
          <path
            id="adult_dent_19_crown-2"
            data-name="adult_dent_19_crown"
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
            d="M273,259.31c-1.91-.61-1.89-2.22-4.25-3.05-1.71-.6-2,.13-5.54,0-3.22-.13-3.66-.78-4.71-.14-1.52.92-2,3.11-2.6,6.24a21.94,21.94,0,0,0-.47,8.74c.26,1.45,1.31,3.64,3.42,8,2,4.23,2.59,4.95,3.42,5.13,1.52.33,2.11-1.56,4.72-2.91,2.1-1.09,4-1,7.89-.7,2.72.19,3.44.54,7.79,1.25,3.31.54,5.8.81,7.3,1,10.4,1.12,12.39.05,13.44-.69a12.24,12.24,0,0,0,3.78-4.58c.51-1.06,1-2.46,1.41-7.62.5-6.3.72-9.48-.47-11a6.11,6.11,0,0,0-5.78-1.8c-1.3.27-1.26.78-2.83,1.11-.5.1-1.81.32-5.07-.42a34.1,34.1,0,0,1-3.41-1,19.38,19.38,0,0,0-11-.28C276.08,257.9,275.28,260.06,273,259.31Z"
            transform="translate(-254.48 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.28"
          />
        </g>
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I19"
        v-if="selectedTooth.filling_caries_class_i"
        d="M292.56,271.54H274.35c-2.28,0-4.13-2.18-4.13-4.86v-5.33c.06-1.18.23-2.56.69-2.67s.66.65,1.07,1c.76.73,2.43.78,6.38-1.92a18.63,18.63,0,0,1,3.71-1,20.62,20.62,0,0,1,6.24.09c1.11.16,2,.36,2.25.42,2.37.55,2.28.9,3.91,1.15.9.14,1.31.09,1.7.52a3.22,3.22,0,0,1,.53,2.33v5.33C296.7,269.36,294.85,271.54,292.56,271.54Z"
        transform="translate(-254.48 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial19"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M257.45,274.55h10.94a2.68,2.68,0,0,0,1.09-1,3.56,3.56,0,0,0,.54-1.93V260.38c.21-.36.86-1.59.47-2.29-.14-.25-.36-.33-1.17-.64l-1.62-.63a15.4,15.4,0,0,1-4,.45,16,16,0,0,1-3.75-.55,1.65,1.65,0,0,0-1.32,0,2.57,2.57,0,0,0-1.33,2.29,24.54,24.54,0,0,0-1.56,7.61,25.38,25.38,0,0,0,.16,4,12.22,12.22,0,0,0,.7,2.29A11.1,11.1,0,0,0,257.45,274.55Z"
        transform="translate(-254.48 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal19"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M296.17,259c-.23.39.06,1,.29,1.64.56,1.58.51,3.77.4,8.16-.09,3.6-.35,4,.1,4.62.75.95,1.81.16,5.69,0,3-.13,4.68.24,5.16-.85.16-.36.05-.55,0-1.59a34.15,34.15,0,0,1,.31-4.13c.15-1.94,0-1.05.11-4.62a4.74,4.74,0,0,0-.21-2.19,3.51,3.51,0,0,0-1.76-1.7,5.18,5.18,0,0,0-3.1-.48c-1.7.23-1.67,1-3.2,1.21C297.92,259.43,296.58,258.35,296.17,259Z"
        transform="translate(-254.48 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V19"
        v-if="selectedTooth.filling_caries_class_v"
        x="22.49"
        y="49.13"
        width="9.73"
        height="3.2"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal19"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M307.8,271.79l-8.09.66a2.17,2.17,0,0,1-2-2.32v-1.35a2.17,2.17,0,0,1,2-2.32l8.35.73h0C308,268.72,307.89,270.26,307.8,271.79Z"
        transform="translate(-254.48 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial19"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M263.89,271.89l-7.63-.68h0l-.08-.12-.38-4.6h0l8.09-.6a2.17,2.17,0,0,1,2,2.33v1.34A2.17,2.17,0,0,1,263.89,271.89Z"
        transform="translate(-254.48 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.43"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo19">
        <path
          id="ADULT_DENT_Endo19_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M277.73,282.69c-.81-.7-2.31-.63-5.33-.5s-4.67.21-5.54,1.13c-1.33,1.4-1,3.76,0,11.28,1.61,12.6,1.44,12.57,2.13,15.68a55.74,55.74,0,0,0,3.3,11.28c3.5,8,9,13.46,9.81,12.79.56-.49-1.8-3.72-3.2-10.54-.71-3.42-.8-6.21-1-11.65-.12-4.05-.25-8.76.11-15.17C278.56,287.92,279.57,284.31,277.73,282.69Z"
          transform="translate(-254.48 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Endo19_1"
          v-if="selectedTooth.endo.endo1|| selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M286.25,283.7c.19-.15,2.26.19,6.4.87a17.08,17.08,0,0,0,3.3.38c2.87,0,3.65-1,4.48-.63,2.13,1-.24,8.56.53,17.43.71,8.17,3.47,10.34,6.5,26.7.65,3.46.82,5,.32,5.27-1.58,1-8.72-11.16-13.53-21.31C287.87,298.94,283.93,285.49,286.25,283.7Z"
          transform="translate(-254.48 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Post19">
        <g id="ADULT_DENT_Post19_1" v-if="selectedTooth.post.post1">
          <path
            d="M297.84,280.75l-9.49,3.16c-.35.12-.71-.17-.8-.65l-.68-3.43a.93.93,0,0,1,.47-1.07l9.48-3.17c.35-.12.71.17.81.65l.67,3.43A.93.93,0,0,1,297.84,280.75Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M301.64,322.82l-1.2.4c-.62.21-1.26-.31-1.43-1.15l-7.56-38.44a1.64,1.64,0,0,1,.82-1.91l1.2-.4c.62-.21,1.26.31,1.43,1.15l7.56,38.44A1.64,1.64,0,0,1,301.64,322.82Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M297.87,289.48l-6.49,2.17c-.17.05-.35-.09-.4-.33l-.21-1.1a.45.45,0,0,1,.23-.53l6.49-2.17c.17,0,.35.09.39.32l.22,1.11A.46.46,0,0,1,297.87,289.48Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M299.13,295.3l-6.53,2.18c-.16.06-.33-.08-.37-.3L292,296a.43.43,0,0,1,.21-.49l6.53-2.18c.16-.06.33.08.37.3l.23,1.16A.41.41,0,0,1,299.13,295.3Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M300.17,301.2l-6.48,2.16c-.17.06-.35-.09-.4-.33l-.22-1.08a.47.47,0,0,1,.24-.54l6.48-2.17c.17-.06.35.09.4.33l.21,1.09A.46.46,0,0,1,300.17,301.2Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M301.44,307l-6.54,2.18c-.16.05-.32-.08-.37-.29l-.23-1.17a.42.42,0,0,1,.21-.49l6.54-2.19c.16-.05.33.08.37.3l.23,1.17A.43.43,0,0,1,301.44,307Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M302.6,312.87,296,315.06c-.15.05-.31-.07-.35-.28l-.24-1.2a.4.4,0,0,1,.21-.47l6.51-2.18c.18-.06.36.09.41.33l.22,1.14A.4.4,0,0,1,302.6,312.87Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M303.63,318.77l-6.48,2.17c-.18.06-.36-.09-.4-.33l-.22-1.09a.48.48,0,0,1,.23-.54l6.49-2.16c.17-.06.35.09.4.32l.21,1.1A.45.45,0,0,1,303.63,318.77Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="48.29"
            y1="85.92"
            x2="42.45"
            y2="94.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="47.92"
            y1="84.2"
            x2="42.08"
            y2="92.43"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="47.16"
            y1="80"
            x2="41.37"
            y2="88.26"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="46.8"
            y1="78.37"
            x2="41.02"
            y2="86.5"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="45.87"
            y1="74.26"
            x2="40.22"
            y2="82.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="45.54"
            y1="72.51"
            x2="39.85"
            y2="80.67"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="44.84"
            y1="68.32"
            x2="38.95"
            y2="76.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="44.46"
            y1="66.61"
            x2="38.65"
            y2="74.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="43.58"
            y1="62.51"
            x2="37.91"
            y2="70.68"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="43.22"
            y1="60.78"
            x2="37.58"
            y2="68.89"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M296.34,318.91"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M295.49,277.14,289,279.3c-.69.23-1.4-.34-1.58-1.28l-.82-4.16a1.83,1.83,0,0,1,.91-2.11l6.47-2.16c.68-.23,1.39.34,1.58,1.28l.81,4.16A1.81,1.81,0,0,1,295.49,277.14Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <g id="ADULT_DENT_Post19_2" v-if="selectedTooth.post.post2">
          <path
            d="M279.8,280.23l-9.84-.14c-.36,0-.64-.45-.62-1l.14-3.85c0-.53.33-1,.7-1l9.84.15c.36,0,.64.44.62,1l-.14,3.84C280.48,279.81,280.17,280.24,279.8,280.23Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M273.76,325.75l-1.24,0c-.65,0-1.14-.78-1.11-1.73L273,280.92c0-.95.59-1.71,1.23-1.7l1.25,0c.64,0,1.14.78,1.1,1.73L275,324.05C275,325,274.41,325.76,273.76,325.75Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M277.82,289.4l-6.73-.1c-.18,0-.32-.22-.31-.48l.05-1.24c0-.26.16-.47.34-.47l6.73.1c.18,0,.32.22.31.48l0,1.24C278.16,289.19,278,289.4,277.82,289.4Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M277.69,296l-6.78-.1c-.16,0-.29-.21-.28-.45l0-1.3c0-.25.16-.44.32-.44l6.78.1c.17,0,.3.2.29.45l-.05,1.3C278,295.77,277.86,296,277.69,296Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M277.33,302.53l-6.72-.1c-.18,0-.32-.22-.31-.49l0-1.21c0-.27.17-.49.35-.48l6.72.1c.19,0,.33.22.32.49l-.05,1.21C277.67,302.32,277.52,302.54,277.33,302.53Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M277.21,309.1l-6.79-.1c-.16,0-.29-.2-.28-.44l.05-1.31c0-.25.15-.44.31-.44l6.79.1c.17,0,.29.2.28.45l-.05,1.31C277.52,308.91,277.37,309.11,277.21,309.1Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M277,315.67l-6.81-.1c-.16,0-.28-.2-.27-.43l.05-1.34c0-.23.14-.42.3-.42l6.76.1c.19,0,.33.23.32.5l-.05,1.27C277.27,315.48,277.14,315.67,277,315.67Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M276.61,322.23l-6.73-.1c-.18,0-.32-.22-.31-.48l.05-1.23c0-.26.16-.48.34-.47l6.73.1c.18,0,.32.22.31.48l-.05,1.23C276.94,322,276.79,322.24,276.61,322.23Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.7"
            y1="88.78"
            x2="15.2"
            y2="95.25"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.74"
            y1="86.82"
            x2="15.24"
            y2="93.33"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="22.98"
            y1="82.15"
            x2="15.52"
            y2="88.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.01"
            y1="80.31"
            x2="15.58"
            y2="86.72"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.07"
            y1="75.66"
            x2="15.76"
            y2="82.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.15"
            y1="73.7"
            x2="15.8"
            y2="80.18"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.44"
            y1="69.05"
            x2="15.89"
            y2="75.5"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.47"
            y1="67.11"
            x2="16"
            y2="73.58"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.57"
            y1="62.5"
            x2="16.25"
            y2="68.99"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="23.63"
            y1="60.55"
            x2="16.34"
            y2="66.99"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M269.57,319.71"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M278.38,275.59l-6.71-.1c-.71,0-1.26-.87-1.22-1.92l.17-4.66c0-1.05.65-1.89,1.37-1.88l6.7.1c.72,0,1.27.87,1.23,1.92l-.18,4.66C279.71,274.76,279.1,275.6,278.38,275.59Z"
            transform="translate(-254.48 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis19">
        <path
          id="ADULT_DENT_Left_gingivitis19"
          v-if="selectedTooth.gingivitis.left"
          d="M262.51,284.31c.16.29-.41.72-.71,1.82s-.14,1.72.24,3.66c.57,2.92.73,3.5,1,4.78.3,1.75.18,1.83.47,3.94.6,4.4,1.32,5.8,1,6.06-.57.4-3.44-2.46-4.55-6.48-.52-1.89,0-1.72-.59-6.61-.42-3.48-.8-4.63-.12-5.77C260.08,284.17,262.23,283.8,262.51,284.31Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_gingivitis19"
          v-if="selectedTooth.gingivitis.right"
          d="M303.43,283c-.07.19.57.46,1,1.4a4.81,4.81,0,0,1,.12,2.68,40.2,40.2,0,0,0,0,5.91c0,3.57-.05,5.36-.12,5.77-.18,1-.39,1.73-.12,2,.44.39,2-.61,2.87-2.11,1-1.85.21-3.09.48-7.32.25-3.88,1.07-4.77.36-6.19C306.86,282.92,303.59,282.63,303.43,283Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_periodontal19"
          v-if="selectedTooth.periodontal.left"
          d="M262.51,284.31c.16.29-.41.72-.71,1.82s-.14,1.72.24,3.66c.57,2.92.73,3.5,1,4.78.3,1.75.18,1.83.47,3.94.6,4.4,1.32,5.8,1,6.06-.57.4-3.44-2.46-4.55-6.48-.52-1.89,0-1.72-.59-6.61-.42-3.48-.8-4.63-.12-5.77C260.08,284.17,262.23,283.8,262.51,284.31Z"
          transform="translate(-254.48 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_periodontal19"
          v-if="selectedTooth.periodontal.right"
          d="M303.43,283c-.07.19.57.46,1,1.4a4.81,4.81,0,0,1,.12,2.68,40.2,40.2,0,0,0,0,5.91c0,3.57-.05,5.36-.12,5.77-.18,1-.39,1.73-.12,2,.44.39,2-.61,2.87-2.11,1-1.85.21-3.09.48-7.32.25-3.88,1.07-4.77.36-6.19C306.86,282.92,303.59,282.63,303.43,283Z"
          transform="translate(-254.48 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Left_perio19"
          v-if="selectedTooth.perio.left"
          d="M262.51,284.31c.16.29-.41.72-.71,1.82s-.14,1.72.24,3.66c.57,2.92.73,3.5,1,4.78.3,1.75.18,1.83.47,3.94.6,4.4,1.32,5.8,1,6.06-.57.4-3.44-2.46-4.55-6.48-.52-1.89,0-1.72-.59-6.61-.42-3.48-.8-4.63-.12-5.77C260.08,284.17,262.23,283.8,262.51,284.31Z"
          transform="translate(-254.48 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Right_perio19"
          v-if="selectedTooth.perio.right"
          d="M303.43,283c-.07.19.57.46,1,1.4a4.81,4.81,0,0,1,.12,2.68,40.2,40.2,0,0,0,0,5.91c0,3.57-.05,5.36-.12,5.77-.18,1-.39,1.73-.12,2,.44.39,2-.61,2.87-2.11,1-1.85.21-3.09.48-7.32.25-3.88,1.07-4.77.36-6.19C306.86,282.92,303.59,282.63,303.43,283Z"
          transform="translate(-254.48 -226.77)"
          fill="#c0392b"
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Implant19" v-if="selectedTooth.implant">
        <path
          d="M297,287.29l-27.86,0c-1,0-1.86-.46-1.85-1l.06-4.11c0-.57.85-1,1.88-1l27.86-.05c1,0,1.87.46,1.86,1l-.06,4.1C298.84,286.83,298,287.29,297,287.29Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M283.88,336.05h-3.52c-1.83,0-3.29-.82-3.28-1.83l.69-46.06c0-1,1.51-1.84,3.34-1.84h3.52c1.83,0,3.29.82,3.28,1.83l-.69,46.06C287.2,335.23,285.71,336.05,283.88,336.05Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M292.17,297.13l-19.07,0c-.5,0-.91-.22-.91-.5l0-1.33c0-.28.42-.5.93-.51l19.07,0c.5,0,.91.23.91.51l0,1.32C293.09,296.9,292.68,297.13,292.17,297.13Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M292.37,304.15l-19.19,0c-.47,0-.85-.22-.85-.48l0-1.39c0-.26.4-.47.87-.47l19.18,0c.48,0,.86.21.86.48l0,1.38C293.23,303.94,292.84,304.15,292.37,304.15Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M291.94,311.17l-19,0c-.52,0-.93-.23-.93-.52l0-1.3c0-.29.43-.52.94-.52l19,0c.51,0,.93.23.92.52l0,1.3C292.88,310.94,292.46,311.17,291.94,311.17Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M292.17,318.19l-19.21,0c-.47,0-.84-.21-.84-.47l0-1.4c0-.26.39-.47.85-.47l19.22,0c.46,0,.84.21.83.47l0,1.4C293,318,292.64,318.19,292.17,318.19Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M292.09,325.22l-19.26,0c-.45,0-.82-.2-.81-.46l0-1.42c0-.26.37-.46.83-.46l19.13,0c.52,0,.94.23.94.52l0,1.36C292.91,325,292.54,325.21,292.09,325.22Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M291.63,332.24l-19,0c-.52,0-.93-.23-.93-.51l0-1.31c0-.29.43-.52.94-.52l19.05,0c.51,0,.92.23.92.51l0,1.31C292.56,332,292.14,332.24,291.63,332.24Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.19"
          y1="98.31"
          x2="17.53"
          y2="105.38"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.11"
          y1="96.22"
          x2="17.46"
          y2="103.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.38"
          y1="91.22"
          x2="17.84"
          y2="98.37"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.3"
          y1="89.25"
          x2="17.85"
          y2="96.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.05"
          y1="84.28"
          x2="17.95"
          y2="91.35"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.11"
          y1="82.19"
          x2="17.9"
          y2="89.27"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.53"
          y1="77.22"
          x2="17.74"
          y2="84.26"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.45"
          y1="75.15"
          x2="17.89"
          y2="82.21"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.33"
          y1="70.22"
          x2="18.16"
          y2="77.3"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <line
          x1="38.3"
          y1="68.13"
          x2="18.26"
          y2="75.16"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M271.5,329.68"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          d="M292.53,282.36l-19,0c-2,0-3.65-.91-3.63-2l.07-5c0-1.12,1.67-2,3.7-2l19,0c2,0,3.65.9,3.63,2l-.07,5C296.2,281.45,294.55,282.36,292.53,282.36Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown19">
        <path
          id="ADULT_DENT_Endo_Crown1_19"
          v-if="selectedTooth.endo_crown.crown1"
          d="M305.63,258.32c-1.79-.89-3,.3-5.84.72-2.33.34-4.21-.06-6.92-.63-2.08-.44-2.45-.76-4.61-1.09a19.28,19.28,0,0,0-4.46-.27,17,17,0,0,0-5.08,1.18c-3.22,1.29-2.94,2.31-4.53,2.44-2.92.24-3.47-3.22-7.23-3.44-1.11-.06-1.65.21-3.84.09A24.09,24.09,0,0,1,260,257a1.69,1.69,0,0,0-1.3.18,2.38,2.38,0,0,0-1,1.54c-.44,2-.87,3.92-1.31,5.88a1.48,1.48,0,0,0,1.34,1.58H306.9a1.35,1.35,0,0,0,1-.46c.55-.67.35-1.89,0-3.92-.12-.68-.24-1.23-.32-1.6h0A4.92,4.92,0,0,0,305.63,258.32Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.28"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_19"
          v-if="selectedTooth.endo_crown.crown2"
          d="M277.79,273.45l9.38-.24,1.46-6.57a.23.23,0,0,0-.2-.31l-12.23,0a.24.24,0,0,0-.21.32Z"
          transform="translate(-254.48 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.28"
        />
      </g>
      <g id="ADULT_DENT_Periapical19">
        <path
          id="ADULT_DENT_Periapical19_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M297.85,326.65c.21-.1.58.93,1.95,2.82.49.69.45.56,2.34,2.89,1.16,1.44,1.32,1.67,1.88,2.29a7.91,7.91,0,0,0,2.46,2.08,2.23,2.23,0,0,0,1.71.34,2.86,2.86,0,0,0,1.49-1.68c.44-1.05.23-1.65-.12-5.38a26.47,26.47,0,0,0-.57-4.84c-.27-1-.59-1.78-.45-1.88s1,1,1.6,2.08a14.3,14.3,0,0,1,1.25,5c.43,3.43.65,5.15.06,6.45a4.77,4.77,0,0,1-2.63,2.56c-1.68.5-3.17-.62-4.23-1.41-.75-.57-.72-.73-3.37-3.9-1.71-2.05-2-2.34-2.45-3.23C297.82,329,297.57,326.79,297.85,326.65Z"
          transform="translate(-254.48 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
        <path
          id="ADULT_DENT_Periapical19_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M281.74,325.31c-.19.22.18,1.07.92,2.75a29.83,29.83,0,0,0,4,6.92,2,2,0,0,1,.69,1.21,1.85,1.85,0,0,1-.29,1.15,1.68,1.68,0,0,1-1,.67,4.47,4.47,0,0,1-2.57-.2,31.32,31.32,0,0,1-3.19-1.21,16.48,16.48,0,0,1-3.2-1.68c-1-.74-1.66-1.35-1.66-1.35-.76-.7-1-1.08-1.14-1s.41,1.7,1.31,3a9.24,9.24,0,0,0,3.66,2.89,10.79,10.79,0,0,0,5.42,1.75,4.73,4.73,0,0,0,3.89-1.41,3.4,3.4,0,0,0,.86-2c0-.91-.45-1.26-1.43-3-.55-1-.28-.66-1.66-3.43a26,26,0,0,0-1.43-2.69C283.78,326,282.08,324.92,281.74,325.31Z"
          transform="translate(-254.48 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer19"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M305.71,258.41c-1.79-.89-3,.3-5.84.72-2.32.34-4.21-.06-6.92-.63-2.08-.44-2.45-.76-4.61-1.09a19.28,19.28,0,0,0-4.46-.27,17,17,0,0,0-5.08,1.18c-3.22,1.29-2.94,2.31-4.53,2.44-2.92.24-3.47-3.22-7.23-3.44-1.11-.06-1.64.21-3.84.09a24.09,24.09,0,0,1-3.08-.36,1.69,1.69,0,0,0-1.3.18,2.38,2.38,0,0,0-1,1.54c-.44,2-.87,3.92-1.31,5.88a1.48,1.48,0,0,0,1.34,1.58H307a1.35,1.35,0,0,0,.95-.46c.55-.67.36-1.89,0-3.92-.11-.68-.24-1.23-.32-1.6h0A4.92,4.92,0,0,0,305.71,258.41Z"
        transform="translate(-254.48 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.28"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer19"
        v-if="selectedTooth.crown.onlay"
        d="M305.71,258.41c-1.79-.89-3,.3-5.84.72-2.32.34-4.21-.06-6.92-.63-2.08-.44-2.45-.76-4.61-1.09a19.28,19.28,0,0,0-4.46-.27,17,17,0,0,0-5.08,1.18c-3.22,1.29-2.94,2.31-4.53,2.44-2.92.24-3.47-3.22-7.23-3.44-1.11-.06-1.64.21-3.84.09a24.09,24.09,0,0,1-3.08-.36,1.69,1.69,0,0,0-1.3.18,2.38,2.38,0,0,0-1,1.54c-.44,2-.87,3.92-1.31,5.88a1.48,1.48,0,0,0,1.34,1.58H307a1.35,1.35,0,0,0,.95-.46c.55-.67.36-1.89,0-3.92-.11-.68-.24-1.23-.32-1.6h0A4.92,4.92,0,0,0,305.71,258.41Z"
        transform="translate(-254.48 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.28"
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