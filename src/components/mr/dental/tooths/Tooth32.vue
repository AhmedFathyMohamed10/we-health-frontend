<template>
<div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 15 57.72 113.64"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_32_all">
      <g id="adult_dent_32">
        <path
          id="adult_dent_32_crown"
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
          d="M264.72,260.21c-4.2,2.36-5.53,6.76-6.38,9.58-.17.56-3,10.42,1.27,13.18,1.76,1.12,3.33.19,8,0,5.26-.21,5.45.89,12.43,1.5,9.25.81,9.12-1.11,18.81-.3,3.5.29,5.08.67,7-.3,3.57-1.8,4.44-6.23,5.1-9.58.79-4,2.13-10.88-1.92-14.08-2.26-1.79-5.24-1.67-9.56-1.5-5.89.23-7.22,1.93-12.75,1.8-3.27-.07-2.93-.67-7.66-1.2C272.66,258.59,268.43,258.12,264.72,260.21Z"
          transform="translate(-254.86 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.54"
        />
        <path
          id="adult_dent_32_root"
          v-if="selectedTooth.dent.root1"
          d="M259.8,284.58c-1.05,1.39.27,2.53.27,7.41a27.74,27.74,0,0,1-1.07,7.65c-1.12,3.78-2.21,4.07-2.94,7.15a16.23,16.23,0,0,0,.14,7.78c1.64,6.33,7.22,11.23,8.55,10.54.9-.46-1.05-3.08-.67-7.15.59-6.39,6.68-13.95,12.69-13.3,4.79.52,7.46,6,8,7.15,1.84,3.78,2.25,9.15-.26,12.43-.47.61-1.21,1.36-1.07,1.5s3.7-2.28,5.74-3.89c3.17-2.5,4.75-3.75,5.88-5.14,3.53-4.33,3.92-9.37,4.14-12.3.44-5.63-1.17-6.22-.13-9.66,1.75-5.81,7.58-7.53,6.81-9.29-.2-.46-1-1.2-12.85-.68-6.32.28-6.3.5-9.06.43-5.09-.12-6-.86-12.82-1.51C263.65,283,261,283.05,259.8,284.58Z"
          transform="translate(-254.86 -226.77)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.54"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_I32"
        v-if="selectedTooth.filling_caries_class_i"
        d="M292,272.82h-9.85a6.44,6.44,0,0,1-6.63-6.23v-4.46c-.33-2,.22-2.43.44-2.56.42-.25.86,0,2.63.35.88.19,1.78.3,2.67.46l3.34.59a19.25,19.25,0,0,0,2.83.31,18.41,18.41,0,0,0,3-.14c.92-.17,1.66-.36,2.15-.5,1.12-.31,1.69-.57,2.89-.83a3.76,3.76,0,0,1,1.88-.18c1,.38,1.21,1.92,1.27,2.5v4.46A6.44,6.44,0,0,1,292,272.82Z"
        transform="translate(-254.86 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial32"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M309.05,276.19h-7.63a2.36,2.36,0,0,1-2.43-2.28V261.42a1.79,1.79,0,0,0-.68-1.49c-.25-.17-.53-.26-.5-.36s.57-.14,1.54-.14h2.14a16.75,16.75,0,0,1,3.13-.11,17.67,17.67,0,0,1,2.89.4,6.3,6.3,0,0,1,2.31,1.8c1,1.32.95,3.31.89,7.27,0,1.79-.11.79-.25,3.43a6,6,0,0,1-.55,2.8A4.91,4.91,0,0,1,309.05,276.19Z"
        transform="translate(-254.86 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal32"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M258.36,275c-.13-.19-.29-.52.75-4.39a31.31,31.31,0,0,1,1.12-3.69,12.63,12.63,0,0,1,2.43-4,9.55,9.55,0,0,1,4.85-3,13.51,13.51,0,0,1,2.81-.18c3.08-.06,5.57-.38,5.61-.13s-.58.14-.89.63-.11.71,0,1.64c.06.55.07,1,.1,1.85,0,.51,0,.64,0,1.89s0,1.33,0,1.85c0,1.93-.19,1.88-.21,3.64,0,.84,0,1.48-.05,2.74a5.12,5.12,0,0,1-.11,1.1c-.66,1.23-4.1.14-8.92.15C261.25,275.06,259.15,276.07,258.36,275Z"
        transform="translate(-254.86 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V32"
        v-if="selectedTooth.filling_caries_class_v"
        x="24.87"
        y="50.98"
        width="13.12"
        height="3.44"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal32"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M269.61,274.87l-11.29-.4h0c.35-1.78.69-3.56,1-5.34l0,0,0,0,10.25-.71a2.59,2.59,0,0,1,2.67,2.5v1.45A2.59,2.59,0,0,1,269.61,274.87Z"
        transform="translate(-254.86 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial32"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M309.9,274.05l-10.36.82a2.59,2.59,0,0,1-2.67-2.5v-1.45a2.59,2.59,0,0,1,2.67-2.5l11.23,1.25h0l-.87,4.38Z"
        transform="translate(-254.86 -226.77)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.51"
        opacity="0.57"
      />
      <g id="ADULT_DENT_Endo32">
        <path
          id="ADULT_DENT_Endo32_2"
          v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M263.68,284.07c.45-.24,1.54-.16,3.73,0,1.85.13,2.81.3,4.74.54,4.71.59,5,.37,5.46.81,1.79,1.75-1.11,6.92-2.44,9.31-2.43,4.33-3.66,4.78-8.48,11.6-3.57,5.06-4.55,7.14-4.59,9.72s.93,4.65.43,4.85-3.19-2.57-4.17-6.07c-.49-1.74-.53-3.44,1-10,2.09-8.93,2.72-8.14,3-11.74C262.77,288.34,261.81,285.05,263.68,284.07Z"
          transform="translate(-254.86 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Endo32_1"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M286,285.9c.66-.68,1.71-.1,5.36-.21,1.44,0,3.42-.2,4.3-.27,2.66-.21,3.12-.33,3.45,0,.78.78-.82,2.49-1.87,5.8-.87,2.79-.87,5.17-.86,8.91,0,2.49.21,2.63.15,5.26a20.56,20.56,0,0,1-.72,6.07,11.57,11.57,0,0,1-2.43,4.62c-1.05,1.17-3.53,3.4-4.75,2.8-1-.51-.48-2.72,0-8s.71-7.75.43-10a55.26,55.26,0,0,0-2.59-11.06C286,288.33,285.25,286.71,286,285.9Z"
          transform="translate(-254.86 -226.77)"

          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <g id="ADULT_DENT_Post32">
        <g id="ADULT_DENT_Post32_1" v-if="selectedTooth.post.post1">
          <path
            d="M294,283l-10.72,1.12a.71.71,0,0,1-.78-.65l-.24-2.85a.75.75,0,0,1,.66-.79l10.73-1.12a.71.71,0,0,1,.78.65l.23,2.84A.74.74,0,0,1,294,283Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M292.08,317.31l-1.35.14a1.24,1.24,0,0,1-1.38-1.13l-2.66-31.93a1.31,1.31,0,0,1,1.17-1.4l1.35-.15a1.24,1.24,0,0,1,1.38,1.14l2.66,31.93A1.3,1.3,0,0,1,292.08,317.31Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M292.8,290l-7.33.76a.35.35,0,0,1-.39-.31l-.07-.92a.36.36,0,0,1,.32-.39l7.34-.77a.35.35,0,0,1,.38.32l.08.92A.37.37,0,0,1,292.8,290Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M293.33,294.89l-7.39.77a.33.33,0,0,1-.36-.29l-.08-1a.34.34,0,0,1,.31-.36l7.38-.77a.32.32,0,0,1,.36.29l.08,1A.33.33,0,0,1,293.33,294.89Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M293.61,299.77l-7.33.76a.35.35,0,0,1-.39-.32l-.07-.9a.37.37,0,0,1,.33-.4l7.32-.76a.35.35,0,0,1,.39.32l.08.9A.38.38,0,0,1,293.61,299.77Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M294.14,304.62l-7.39.77a.33.33,0,0,1-.36-.29l-.08-1a.34.34,0,0,1,.3-.36L294,303a.32.32,0,0,1,.35.29l.08,1A.33.33,0,0,1,294.14,304.62Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M294.56,309.49l-7.42.77a.31.31,0,0,1-.34-.28l-.08-1a.32.32,0,0,1,.29-.35l7.36-.77a.37.37,0,0,1,.4.33l.08.94A.34.34,0,0,1,294.56,309.49Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M294.83,314.37l-7.34.76a.34.34,0,0,1-.38-.32l-.08-.9a.38.38,0,0,1,.33-.4l7.33-.76a.35.35,0,0,1,.39.32l.07.9A.37.37,0,0,1,294.83,314.37Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="39.91"
            y1="82.6"
            x2="32.4"
            y2="88.3"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="39.75"
            y1="81.16"
            x2="32.24"
            y2="86.88"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="39.53"
            y1="77.69"
            x2="32.08"
            y2="83.44"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="39.38"
            y1="76.33"
            x2="31.95"
            y2="81.97"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="38.97"
            y1="72.89"
            x2="31.67"
            y2="78.57"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="38.85"
            y1="71.44"
            x2="31.52"
            y2="77.13"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="38.7"
            y1="67.98"
            x2="31.15"
            y2="73.67"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="38.54"
            y1="66.55"
            x2="31.07"
            y2="72.24"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="38.18"
            y1="63.14"
            x2="30.87"
            y2="68.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="38.04"
            y1="61.7"
            x2="30.77"
            y2="67.35"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M286.91,313.38"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M292,279.8l-7.3.76a1.38,1.38,0,0,1-1.53-1.26l-.29-3.46a1.46,1.46,0,0,1,1.29-1.55l7.31-.76a1.38,1.38,0,0,1,1.53,1.26l.29,3.45A1.47,1.47,0,0,1,292,279.8Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
        <g id="ADULT_DENT_Post32_2" v-if="selectedTooth.post.post2">
          <path
            d="M277.93,284.25l-8.66-3.87a.69.69,0,0,1-.28-.93l1.16-2.67a.69.69,0,0,1,.88-.41l8.66,3.87a.7.7,0,0,1,.29.93l-1.17,2.67A.69.69,0,0,1,277.93,284.25Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M260.22,314.2l-1.1-.49a1.23,1.23,0,0,1-.5-1.65l13.11-29.92a1.22,1.22,0,0,1,1.55-.74l1.1.49a1.24,1.24,0,0,1,.5,1.65l-13.11,29.93A1.2,1.2,0,0,1,260.22,314.2Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M273.69,290l-5.93-2.65a.35.35,0,0,1-.14-.46L268,286a.34.34,0,0,1,.43-.2l5.92,2.64a.35.35,0,0,1,.15.46l-.38.86A.34.34,0,0,1,273.69,290Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M271.78,294.6l-6-2.67a.32.32,0,0,1-.13-.43l.4-.9a.32.32,0,0,1,.4-.19l6,2.67a.31.31,0,0,1,.13.43l-.39.9A.33.33,0,0,1,271.78,294.6Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M269.69,299.12l-5.92-2.65a.35.35,0,0,1-.14-.47l.37-.84a.34.34,0,0,1,.44-.21l5.91,2.65a.33.33,0,0,1,.14.46l-.37.85A.34.34,0,0,1,269.69,299.12Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M267.79,303.72l-6-2.67a.32.32,0,0,1-.13-.42l.4-.91a.32.32,0,0,1,.4-.19l6,2.67a.33.33,0,0,1,.13.42l-.4.92A.31.31,0,0,1,267.79,303.72Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M265.8,308.29l-6-2.68a.3.3,0,0,1-.12-.41l.41-.93a.3.3,0,0,1,.38-.18l5.95,2.66a.35.35,0,0,1,.14.47l-.38.89A.31.31,0,0,1,265.8,308.29Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M263.69,312.8l-5.92-2.65a.34.34,0,0,1-.14-.46l.37-.85a.34.34,0,0,1,.44-.21l5.92,2.65a.34.34,0,0,1,.14.46l-.37.85A.34.34,0,0,1,263.69,312.8Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="11.16"
            y1="81.51"
            x2="2.76"
            y2="83.23"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="11.72"
            y1="80.14"
            x2="3.32"
            y2="81.88"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="13.2"
            y1="76.92"
            x2="4.82"
            y2="78.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="13.72"
            y1="75.62"
            x2="5.42"
            y2="77.32"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="15.04"
            y1="72.35"
            x2="6.82"
            y2="74.14"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="15.64"
            y1="70.99"
            x2="7.39"
            y2="72.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.17"
            y1="67.81"
            x2="8.74"
            y2="69.49"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="17.72"
            y1="66.45"
            x2="9.36"
            y2="68.17"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="19.06"
            y1="63.22"
            x2="10.82"
            y2="65.01"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <line
            x1="19.64"
            y1="61.86"
            x2="11.45"
            y2="63.63"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M258.16,308.32"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
          <path
            d="M277.93,280.42l-5.9-2.64a1.37,1.37,0,0,1-.56-1.83l1.42-3.23a1.35,1.35,0,0,1,1.72-.81l5.9,2.64a1.35,1.35,0,0,1,.56,1.82l-1.42,3.24A1.35,1.35,0,0,1,277.93,280.42Z"
            transform="translate(-254.86 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.51"
          />
        </g>
      </g>
      <g id="ADULT_DENT_gingivitis32">
        <path
          id="ADULT_DENT_Left_gingivitis32"
          v-if="selectedTooth.gingivitis.left"
          d="M259.52,283.82c.12.2-.6.55-1,1.4a3.9,3.9,0,0,0,.28,2.81,15.46,15.46,0,0,1,.4,4.86,24,24,0,0,1-.81,5.62c-.4,1.86-.59,2.14-.82,2.18-.71.1-1.82-2.23-2.31-4.22-.18-.72-.3-1.47,0-6.77.18-3.22.29-4.1,1.09-4.86C257.5,283.78,259.34,283.52,259.52,283.82Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Right_gingivitis32"
          v-if="selectedTooth.gingivitis.right"
          d="M306.18,284.46c-.14.25.47.56.54,1.4a2.53,2.53,0,0,1-.68,1.79c-.52.62-1,.63-1.76,1.15a8.74,8.74,0,0,0-2,2.05,12.67,12.67,0,0,0-1.9,2.93,7.44,7.44,0,0,0-.82,3.07c0,.88,0,1.87.41,2,.88.33,3-2.62,4.49-4.73,1.26-1.76,1.07-1.74,2-3.07,2.64-3.61,4.41-4.3,4.08-5.37C310.1,284.32,306.5,283.9,306.18,284.46Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Left_periodontal32"
          v-if="selectedTooth.periodontal.left"
          d="M259.52,283.82c.12.2-.6.55-1,1.4a3.9,3.9,0,0,0,.28,2.81,15.46,15.46,0,0,1,.4,4.86,24,24,0,0,1-.81,5.62c-.4,1.86-.59,2.14-.82,2.18-.71.1-1.82-2.23-2.31-4.22-.18-.72-.3-1.47,0-6.77.18-3.22.29-4.1,1.09-4.86C257.5,283.78,259.34,283.52,259.52,283.82Z"
          transform="translate(-254.86 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Right_periodontal32"
          v-if="selectedTooth.periodontal.right"
          d="M306.18,284.46c-.14.25.47.56.54,1.4a2.53,2.53,0,0,1-.68,1.79c-.52.62-1,.63-1.76,1.15a8.74,8.74,0,0,0-2,2.05,12.67,12.67,0,0,0-1.9,2.93,7.44,7.44,0,0,0-.82,3.07c0,.88,0,1.87.41,2,.88.33,3-2.62,4.49-4.73,1.26-1.76,1.07-1.74,2-3.07,2.64-3.61,4.41-4.3,4.08-5.37C310.1,284.32,306.5,283.9,306.18,284.46Z"
          transform="translate(-254.86 -226.77)"
          fill="#e67e22"
          stroke="#e67e22"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Left_perio32"
          v-if="selectedTooth.perio.left"
          d="M259.52,283.82c.12.2-.6.55-1,1.4a3.9,3.9,0,0,0,.28,2.81,15.46,15.46,0,0,1,.4,4.86,24,24,0,0,1-.81,5.62c-.4,1.86-.59,2.14-.82,2.18-.71.1-1.82-2.23-2.31-4.22-.18-.72-.3-1.47,0-6.77.18-3.22.29-4.1,1.09-4.86C257.5,283.78,259.34,283.52,259.52,283.82Z"
          transform="translate(-254.86 -226.77)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Right_periol32"
          v-if="selectedTooth.perio.right"
          d="M306.18,284.46c-.14.25.47.56.54,1.4a2.53,2.53,0,0,1-.68,1.79c-.52.62-1,.63-1.76,1.15a8.74,8.74,0,0,0-2,2.05,12.67,12.67,0,0,0-1.9,2.93,7.44,7.44,0,0,0-.82,3.07c0,.88,0,1.87.41,2,.88.33,3-2.62,4.49-4.73,1.26-1.76,1.07-1.74,2-3.07,2.64-3.61,4.41-4.3,4.08-5.37C310.1,284.32,306.5,283.9,306.18,284.46Z"
          transform="translate(-254.86 -226.77)"
          fill= "#c0392b"
          stroke= "#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <g id="ADULT_DENT_Implant32" v-if="selectedTooth.implant">
        <path
          d="M297.29,287.68l-28.65.05c-1.06,0-1.91-.5-1.9-1.11l.06-4.43c0-.61.88-1.11,1.94-1.11l28.64-.06c1.07,0,1.92.5,1.91,1.11l-.06,4.43C299.22,287.17,298.35,287.67,297.29,287.68Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M283.84,340.15h-3.62c-1.88,0-3.39-.88-3.37-2l.71-49.58c0-1.09,1.55-2,3.43-2h3.62c1.88,0,3.39.88,3.37,2l-.71,49.57C287.25,339.26,285.72,340.15,283.84,340.15Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.36,298.26l-19.6,0c-.52,0-.94-.24-.94-.55l0-1.42c0-.3.43-.55,1-.55l19.61,0c.52,0,.94.25.93.55l0,1.42C293.31,298,292.88,298.26,292.36,298.26Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.57,305.82l-19.73,0c-.49,0-.88-.22-.87-.51l0-1.49c0-.28.4-.51.89-.51l19.72,0c.49,0,.88.23.88.51l0,1.49C293.45,305.59,293.05,305.82,292.57,305.82Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.13,313.38l-19.57,0c-.53,0-1-.25-1-.56l0-1.4c0-.31.44-.56,1-.56l19.57,0c.53,0,1,.24,1,.55l0,1.41C293.09,313.12,292.66,313.37,292.13,313.38Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.36,320.93l-19.75,0c-.48,0-.87-.23-.86-.51l0-1.51c0-.27.4-.5.88-.5l19.75,0c.48,0,.87.23.86.5l0,1.52C293.24,320.7,292.84,320.93,292.36,320.93Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.28,328.49l-19.8,0c-.47,0-.85-.22-.84-.49l0-1.53c0-.27.39-.5.85-.5l19.68,0c.53,0,1,.25,1,.56l0,1.47C293.13,328.27,292.75,328.49,292.28,328.49Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M291.81,336l-19.58,0c-.53,0-1-.25-1-.55l0-1.41c0-.31.43-.56,1-.56l19.58,0c.53,0,1,.25,1,.56l0,1.41C292.77,335.79,292.33,336,291.81,336Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.01"
          y1="101.57"
          x2="16.77"
          y2="109.18"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="37.93"
          y1="99.33"
          x2="16.7"
          y2="106.97"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.2"
          y1="93.94"
          x2="17.09"
          y2="101.64"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.12"
          y1="91.82"
          x2="17.09"
          y2="99.36"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="37.87"
          y1="86.48"
          x2="17.2"
          y2="94.08"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="37.93"
          y1="84.22"
          x2="17.15"
          y2="91.84"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.37"
          y1="78.87"
          x2="16.99"
          y2="86.46"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.29"
          y1="76.65"
          x2="17.14"
          y2="84.25"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.15"
          y1="71.34"
          x2="17.42"
          y2="78.96"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <line
          x1="38.13"
          y1="69.1"
          x2="17.52"
          y2="76.66"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M271.11,333.3"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          d="M292.73,282.37l-19.52,0c-2.08,0-3.75-1-3.74-2.18l.08-5.37c0-1.2,1.72-2.18,3.8-2.19l19.52,0c2.08,0,3.75,1,3.73,2.18l-.07,5.36C296.51,281.39,294.81,282.37,292.73,282.37Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown32">
        <path
          id="ADULT_DENT_Endo_Crown1_32"
          v-if="selectedTooth.endo_crown.crown1"
          d="M306.87,259.89a16.56,16.56,0,0,0-5.86-.68c-2.47.16-3,.79-6.74,1.51a27.19,27.19,0,0,1-7.25.69c-2.27-.15-2.1-.51-6.08-1.1a56.82,56.82,0,0,0-6.59-.62,50,50,0,0,0-5.79.14,8.93,8.93,0,0,0-3.08,1,8.39,8.39,0,0,0-2.78,2.34l-1.83,2.61c-.09.12-1.23,1.63-.8,2.06.07.08.26.19.79.06H309a1.91,1.91,0,0,0,1.9-1,1.68,1.68,0,0,0-.1-1.51l-.34-1.45a5.76,5.76,0,0,0-1-2.06A6.35,6.35,0,0,0,306.87,259.89Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.54"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_32"
          v-if="selectedTooth.endo_crown.crown2"
          d="M278.54,274.2l12.65-.27,2-7.06a.27.27,0,0,0-.27-.34l-16.48,0a.28.28,0,0,0-.28.35Z"
          transform="translate(-254.86 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.54"
        />
      </g>
      <g id="ADULT_DENT_Periapical32">
        <path
          id="ADULT_DENT_Periapical32_1"
          v-if="selectedTooth.periapical.periapical1"
          d="M285,314.69c.56.16.52,1.72.47,3.47a11,11,0,0,1-.39,3.11,12.26,12.26,0,0,1-1.15,2.53c-.87,1.51-1.56,2.16-1.31,2.46s1,0,1.38-.07a5.58,5.58,0,0,0,2-1.16c1.19-.94.41-.16,2.55-1.81,1.05-.81,2.07-1.6,3.38-2.75,2.25-2,2.78-2.77,3.16-2.6s.37,2.05-.39,3.54-2.25,2.49-5.15,4.27a27.06,27.06,0,0,1-4.32,2.1c-2.28.88-2.83.74-3.15.58-1.31-.69-1.05-3.21-1-3.69.23-2.21,1.28-2.19,1.69-4.56.32-1.85-.17-2.73.69-4.12C283.81,315.4,284.52,314.55,285,314.69Z"
          transform="translate(-254.86 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
        <path
          id="ADULT_DENT_Periapical32_2"
          v-if="selectedTooth.periapical.periapical2"
          d="M265.12,316.06c-.24.05-.23.93-.23,2.68a11.16,11.16,0,0,0,.23,3.18,8.43,8.43,0,0,1,.62,1.88c.14.92,0,1.26-.16,1.45a1.64,1.64,0,0,1-1.07.65,2.47,2.47,0,0,1-1.77-.73,21.81,21.81,0,0,1-2.62-2.24,16,16,0,0,1-3.16-4.05c-.66-1.32-.77-2.19-.92-2.17s-.44,2.22.38,4.34,2.08,3.06,4.62,5.14c3.08,2.51,4.1,2.39,4.47,2.31a3.4,3.4,0,0,0,2.08-1.81c.31-.64.28-1.13-.24-4.19a20.09,20.09,0,0,0-.92-4.12C266.34,318.13,265.53,316,265.12,316.06Z"
          transform="translate(-254.86 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.51"
        />
      </g>
      <path
        id="ADULT_DENT_Occlusal_Veneer32"
        v-if="selectedTooth.crown.occlusalVeneer"
        d="M307,260a16.76,16.76,0,0,0-5.86-.69c-2.47.17-3,.79-6.74,1.52a26.81,26.81,0,0,1-7.25.68c-2.27-.14-2.1-.5-6.08-1.1a59.34,59.34,0,0,0-6.59-.62,52.37,52.37,0,0,0-5.79.14,9,9,0,0,0-3.08,1,8.51,8.51,0,0,0-2.78,2.33L261,265.84c-.09.12-1.23,1.62-.8,2.06.07.07.26.18.79.06h48.14a1.93,1.93,0,0,0,1.9-1,1.67,1.67,0,0,0-.1-1.51l-.34-1.45a5.76,5.76,0,0,0-1-2.06A6.35,6.35,0,0,0,307,260Z"
        transform="translate(-254.86 -226.77)"
        fill="#e30613"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="1.54"
      />
      <path
        id="ADULT_DENT_Occlusal_Veneer32"
        v-if="selectedTooth.crown.onlay"
        d="M307,260a16.76,16.76,0,0,0-5.86-.69c-2.47.17-3,.79-6.74,1.52a26.81,26.81,0,0,1-7.25.68c-2.27-.14-2.1-.5-6.08-1.1a59.34,59.34,0,0,0-6.59-.62,52.37,52.37,0,0,0-5.79.14,9,9,0,0,0-3.08,1,8.51,8.51,0,0,0-2.78,2.33L261,265.84c-.09.12-1.23,1.62-.8,2.06.07.07.26.18.79.06h48.14a1.93,1.93,0,0,0,1.9-1,1.67,1.67,0,0,0-.1-1.51l-.34-1.45a5.76,5.76,0,0,0-1-2.06A6.35,6.35,0,0,0,307,260Z"
        transform="translate(-254.86 -226.77)"
        fill="#FFC0CB"
        stroke="#FFC0CB"
        stroke-miterlimit="10"
        stroke-width="1.54"
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
