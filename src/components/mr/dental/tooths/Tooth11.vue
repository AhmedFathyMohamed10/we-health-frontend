<template>
  <div class="">
    <svg
    id="adult_dent_all"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57.69 113.64"
    :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
  >
    <g id="adult_dent_11_all">
      <g id="adult_dent_11">
        <path
          id="adult_dent_11_root"
          v-if="selectedTooth.dent.root1"
          d="M297.66,229.7c-5-.68-16.49,15.29-18.38,17.92-2.77,3.84-1.27,2.44-11.43,24.05-2.88,6.11-5.51,11.56-1.79,12.8a2.16,2.16,0,0,0,.26.07c3,.81,5.8-.75,10.4-1.23.76-.08,2.78,0,6.82.08,4.59.12,6.88.18,8.74.36,7.6.73,10.07,3.13,11.88,2.63,4.07-1.12-1.93-10.41-4.93-17.35C289.61,246.84,302.72,230.4,297.66,229.7Z"
          transform="translate(-254.37 -226.52)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          id="adult_dent_11_crown"
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
          d="M264.94,285.67c-4.14,1.66-5.68,5.89-8.75,14.35-1.3,3.6-1.71,5.78.45,7.9.46.44,2.16,2,7.62,3.59,2.17.63,17.23,4.84,32.28.84,3-.8,10-2.66,12.77-6.58,1.3-1.83.74-4.4-.44-9.46-1.15-4.9-1.76-7.38-3.59-8.61-4.49-3-12.41-3.31-20.17-3.59C276.34,283.79,270.14,283.57,264.94,285.67Z"
          transform="translate(-254.37 -226.52)"
          fill="none"
          stroke="#1d1d1b"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
      </g>
      <path
        id="ADULT_DENT_filling_caries_Class_IV_Mesial11"
        v-if="selectedTooth.filling_caries_class_iv_mesial"
        d="M264,310.73l-4.27-1.68a7.8,7.8,0,0,1-3.06-2.73,3.61,3.61,0,0,1-.46-2.53c.61-2,1.23-4,1.85-6,.12-.79.46-2.47,1.38-2.53a.91.91,0,0,1,.41.07H272c2.58,0,4.67,1.11,4.67,2.49v12.94a19.13,19.13,0,0,1-7.79,1A17,17,0,0,1,264,310.73Z"
        transform="translate(-254.37 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_IV_Distal11"
        v-if="selectedTooth.filling_caries_class_iv_distal"
        d="M290.61,295.56c1.21-.74,2.75-.35,9.24-.58,4.59-.16,6.73-.45,7.7.25.25.18.34.69.54,1.73s.15,1.2.31,2.17.23,1,.38,1.94a6.93,6.93,0,0,1,.16,2.42,5.75,5.75,0,0,1-.77,1.93,6.57,6.57,0,0,1-1.47,1.85,15.42,15.42,0,0,1-3.54,2.06,21.88,21.88,0,0,1-3.16,1.4,12,12,0,0,1-5.31.65,6.34,6.34,0,0,1-3-1.19c-1.44-1.08-1-2.17-1-4.15s-.21-5.1-.45-7.24S289.76,296.08,290.61,295.56Z"
        transform="translate(-254.37 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <rect
        id="ADULT_DENT_filling-caries_Class_V11"
        v-if="selectedTooth.filling_caries_class_v"
        x="19.56"
        y="61.01"
        width="16.97"
        height="2.53"
        rx="0.87"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling-caries_Class_III_Distal11"
        v-if="selectedTooth.filling_caries_class_iii_distal"
        d="M308.7,301l-7.16.89c-1.91,0-3.45-.83-3.45-1.84V299c0-1,1.54-1.84,3.45-1.84l6.27.3h0c.29,1.19.59,2.38.89,3.56Z"
        transform="translate(-254.37 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_filling_caries_Class_III_Mesial11"
        v-if="selectedTooth.filling_caries_class_iii_mesial"
        d="M264,301.35l-6.59-.47h0l.91-3.74h0l5.68-.54c1.91,0,3.45.83,3.45,1.84v1.07C267.4,300.52,265.86,301.35,264,301.35Z"
        transform="translate(-254.37 -226.52)"
        fill="#be1622"
        stroke="#e30613"
        stroke-miterlimit="10"
        stroke-width="0.5"
        opacity="0.57"
      />
      <path
        id="ADULT_DENT_Endo11"
        v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
        :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
        :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
        d="M292.4,236.87h0a126.51,126.51,0,0,0-10.62,14.31c-3.59,5.94-4.61,10.62-6.64,20,0,0-2.37,10.94,1.59,11.48.61.08,1.07-.14,3.19-.14,2,0,2.75.18,4.78.28a30.8,30.8,0,0,0,4.51,0c4.13-.67,3-8.84,2.39-15.59a127.42,127.42,0,0,1-.53-14.74S291.15,250,292.4,236.87Z"
        transform="translate(-254.37 -226.52)"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
      <g id="ADULT_DENT_Post11" v-if="selectedTooth.post.post1">
        <path
          d="M276.87,283.5l17.13.38c.63,0,1.13.37,1.1.8l-.17,3.09c0,.43-.56.77-1.2.75l-17.12-.37c-.64,0-1.13-.38-1.11-.81l.18-3.09C275.7,283.82,276.24,283.48,276.87,283.5Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M286.55,247l2.17.05c1.12,0,2,.66,1.95,1.42l-2,34.65c0,.76-1,1.36-2.11,1.33l-2.16,0c-1.12,0-2-.66-2-1.42l2-34.64C284.49,247.58,285.43,247,286.55,247Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M280.15,276.17l11.72.26c.31,0,.55.18.54.39l-.06,1c0,.21-.27.37-.58.37l-11.72-.26c-.31,0-.56-.18-.54-.4l.05-1C279.57,276.33,279.84,276.16,280.15,276.17Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M280.26,270.88l11.8.26c.29,0,.51.18.5.37l-.06,1.05c0,.2-.25.35-.55.34l-11.79-.26c-.29,0-.52-.17-.51-.36l.06-1C279.73,271,280,270.88,280.26,270.88Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M280.76,265.61l11.7.26c.32,0,.57.18.55.4l-.05,1c0,.21-.28.38-.6.38l-11.7-.26c-.32,0-.56-.19-.55-.4l.05-1C280.18,265.77,280.44,265.6,280.76,265.61Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M280.86,260.32l11.81.26c.28,0,.51.17.5.37l-.06,1.05c0,.2-.26.35-.54.34l-11.81-.26c-.29,0-.51-.16-.5-.36l.06-1.06C280.33,260.47,280.57,260.32,280.86,260.32Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M281.14,255l11.84.26c.28,0,.5.17.49.36l-.06,1.07c0,.19-.25.34-.53.33l-11.76-.25c-.32,0-.57-.19-.56-.41l.06-1C280.63,255.19,280.86,255,281.14,255Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M281.66,249.77l11.71.26c.31,0,.56.18.55.4l-.06,1c0,.22-.28.38-.59.38l-11.71-.26c-.31,0-.56-.19-.55-.4l.06-1C281.08,249.93,281.35,249.76,281.66,249.77Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="26.42"
          y1="28.61"
          x2="39.35"
          y2="23.6"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="26.39"
          y1="30.18"
          x2="39.33"
          y2="25.15"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="26.06"
          y1="33.94"
          x2="38.93"
          y2="28.87"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="26.05"
          y1="35.43"
          x2="38.85"
          y2="30.46"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="26.03"
          y1="39.17"
          x2="38.62"
          y2="34.15"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="25.92"
          y1="40.74"
          x2="38.58"
          y2="35.72"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="25.49"
          y1="44.48"
          x2="38.51"
          y2="39.48"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="25.47"
          y1="46.03"
          x2="38.35"
          y2="41.03"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="25.39"
          y1="49.75"
          x2="38.02"
          y2="44.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="25.33"
          y1="51.31"
          x2="37.89"
          y2="46.32"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M294,252"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M279.43,287.27l11.67.26c1.25,0,2.21.73,2.17,1.58l-.22,3.74c-.05.85-1.09,1.51-2.33,1.48L279,294.07c-1.24,0-2.21-.73-2.16-1.57l.21-3.75C277.14,287.91,278.19,287.25,279.43,287.27Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_gingivitis11">
        <path
          id="ADULT_DENT_Left_gingivitis11"
          v-if="selectedTooth.gingivitis.left"
          d="M259.16,289.75c.54,0,.39-.94,1.85-2.52a5.45,5.45,0,0,1,2.72-1.91c.87-.25,1.6-.27,1.72-.53s-1-.59-1.72-1.15c-.94-.69-.73-1.48-.29-3.43.76-3.31.6-2.88.72-3.21a125.82,125.82,0,0,1,7.29-15.57c1.55-2.74,2.3-3.95,1.72-4.12-1-.28-5.56,2.63-8.58,5.8-4.47,4.69-1.55,5.66-5.72,13.74-1.69,3.28-3.52,5.74-2.43,9.24C257,288,258.37,289.8,259.16,289.75Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Right_gingivitis11"
          v-if="selectedTooth.gingivitis.right"
          d="M308.91,291.89c-.23,0,0-.78-.58-2.14a3.49,3.49,0,0,0-1.57-2.06c-.91-.52-1.84-.61-1.86-1s.62-.46,1.15-.84a1.8,1.8,0,0,0,.57-2.06,16.65,16.65,0,0,0-1.29-4.35c-1-1.92-1.79-3.87-2.71-5.8-1.26-2.63-1.89-3.94-2.58-5.65-.43-1.07-.9-2.52-1.86-5.42-1.36-4.16-1.53-4.91-1-5,.93-.22,3.49,1.57,5.15,3.06,4.82,4.32,2.77,6.84,5.29,13.73,2.14,5.84,4.56,6.62,4.15,10.84C311.42,288.69,309.37,291.92,308.91,291.89Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Left_periodontal11"
          v-if="selectedTooth.periodontal.left"
          d="M259.16,289.75c.54,0,.39-.94,1.85-2.52a5.45,5.45,0,0,1,2.72-1.91c.87-.25,1.6-.27,1.72-.53s-1-.59-1.72-1.15c-.94-.69-.73-1.48-.29-3.43.76-3.31.6-2.88.72-3.21a125.82,125.82,0,0,1,7.29-15.57c1.55-2.74,2.3-3.95,1.72-4.12-1-.28-5.56,2.63-8.58,5.8-4.47,4.69-1.55,5.66-5.72,13.74-1.69,3.28-3.52,5.74-2.43,9.24C257,288,258.37,289.8,259.16,289.75Z"
          transform="translate(-254.37 -226.52)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Right_periodontal11"
          v-if="selectedTooth.periodontal.right"
          d="M308.91,291.89c-.23,0,0-.78-.58-2.14a3.49,3.49,0,0,0-1.57-2.06c-.91-.52-1.84-.61-1.86-1s.62-.46,1.15-.84a1.8,1.8,0,0,0,.57-2.06,16.65,16.65,0,0,0-1.29-4.35c-1-1.92-1.79-3.87-2.71-5.8-1.26-2.63-1.89-3.94-2.58-5.65-.43-1.07-.9-2.52-1.86-5.42-1.36-4.16-1.53-4.91-1-5,.93-.22,3.49,1.57,5.15,3.06,4.82,4.32,2.77,6.84,5.29,13.73,2.14,5.84,4.56,6.62,4.15,10.84C311.42,288.69,309.37,291.92,308.91,291.89Z"
          transform="translate(-254.37 -226.52)"
          fill="#e67e22" 
          stroke="#e67e22" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Left_perio11"
          v-if="selectedTooth.perio.left"
          d="M259.16,289.75c.54,0,.39-.94,1.85-2.52a5.45,5.45,0,0,1,2.72-1.91c.87-.25,1.6-.27,1.72-.53s-1-.59-1.72-1.15c-.94-.69-.73-1.48-.29-3.43.76-3.31.6-2.88.72-3.21a125.82,125.82,0,0,1,7.29-15.57c1.55-2.74,2.3-3.95,1.72-4.12-1-.28-5.56,2.63-8.58,5.8-4.47,4.69-1.55,5.66-5.72,13.74-1.69,3.28-3.52,5.74-2.43,9.24C257,288,258.37,289.8,259.16,289.75Z"
          transform="translate(-254.37 -226.52)"
          fill="#c0392b" 
          stroke="#c0392b" 
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          id="ADULT_DENT_Right_perio11"
          v-if="selectedTooth.perio.right"
          d="M308.91,291.89c-.23,0,0-.78-.58-2.14a3.49,3.49,0,0,0-1.57-2.06c-.91-.52-1.84-.61-1.86-1s.62-.46,1.15-.84a1.8,1.8,0,0,0,.57-2.06,16.65,16.65,0,0,0-1.29-4.35c-1-1.92-1.79-3.87-2.71-5.8-1.26-2.63-1.89-3.94-2.58-5.65-.43-1.07-.9-2.52-1.86-5.42-1.36-4.16-1.53-4.91-1-5,.93-.22,3.49,1.57,5.15,3.06,4.82,4.32,2.77,6.84,5.29,13.73,2.14,5.84,4.56,6.62,4.15,10.84C311.42,288.69,309.37,291.92,308.91,291.89Z"
          transform="translate(-254.37 -226.52)"
          fill="#c0392b" 
          stroke="#c0392b"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Implant11" v-if="selectedTooth.implant">
        <path
          d="M269,279l27.56,0c1,0,1.84.37,1.83.83l-.09,3.25c0,.45-.86.82-1.88.82l-27.56,0c-1,0-1.84-.37-1.82-.82l.09-3.26C267.1,279.31,267.94,279,269,279Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M282.27,240.4h3.49c1.8,0,3.25.65,3.23,1.45l-1,36.45c0,.8-1.51,1.45-3.32,1.45h-3.48c-1.8,0-3.25-.65-3.23-1.45l1-36.45C279,241.05,280.47,240.4,282.27,240.4Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M273.78,271.18l18.86,0c.5,0,.9.18.89.41l0,1c0,.22-.41.4-.92.4l-18.86,0c-.5,0-.9-.18-.89-.41l0-1C272.86,271.35,273.27,271.18,273.78,271.18Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M273.63,265.62l19,0c.47,0,.85.17.84.37l0,1.1c0,.21-.39.38-.86.38l-19,0c-.47,0-.85-.17-.84-.38l0-1.09C272.78,265.79,273.16,265.62,273.63,265.62Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M274.11,260.07l18.83,0c.51,0,.92.19.91.41l0,1c0,.23-.42.41-.94.41l-18.82,0c-.51,0-.92-.19-.92-.41l0-1C273.18,260.25,273.6,260.07,274.11,260.07Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M273.93,254.51l19,0c.46,0,.83.16.83.37l0,1.11c0,.2-.39.37-.85.37l-19,0c-.46,0-.83-.16-.82-.37l0-1.11C273.09,254.68,273.47,254.51,273.93,254.51Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M274.07,249l19.05,0c.45,0,.81.16.81.36l0,1.13c0,.2-.37.36-.82.36l-18.93,0c-.52,0-.93-.19-.92-.42l0-1.08C273.25,249.12,273.62,249,274.07,249Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M274.58,243.4l18.84,0c.51,0,.91.18.91.41l0,1c0,.23-.43.41-.93.41l-18.84,0c-.51,0-.92-.18-.91-.41l0-1C273.65,243.58,274.07,243.4,274.58,243.4Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.13"
          y1="22.54"
          x2="39.62"
          y2="17"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.19"
          y1="24.19"
          x2="39.68"
          y2="18.63"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="18.89"
          y1="28.15"
          x2="39.26"
          y2="22.54"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="18.95"
          y1="29.7"
          x2="39.24"
          y2="24.22"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.16"
          y1="33.64"
          x2="39.1"
          y2="28.1"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="19.09"
          y1="35.29"
          x2="39.13"
          y2="29.75"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="18.63"
          y1="39.23"
          x2="39.25"
          y2="33.71"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="18.69"
          y1="40.86"
          x2="39.09"
          y2="35.33"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="18.78"
          y1="44.77"
          x2="38.78"
          y2="39.21"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <line
          x1="18.78"
          y1="46.41"
          x2="38.67"
          y2="40.91"
          fill="#e30613"
          stroke="#e30613"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M294.48,245.48"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
        <path
          d="M273.31,282.86l18.78,0c2,0,3.6.72,3.58,1.61l-.11,3.94c0,.89-1.67,1.6-3.67,1.6l-18.78,0c-2,0-3.61-.72-3.58-1.61l.11-3.94C269.67,283.57,271.31,282.86,273.31,282.86Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="0.5"
        />
      </g>
      <g id="ADULT_DENT_Endo_Crown11">
        <path
          id="ADULT_DENT_Endo_Crown1_11"
          v-if="selectedTooth.endo_crown.crown1"
          d="M269.71,311.92l-3.28-.7a35.86,35.86,0,0,1-3.45-1.05,27.17,27.17,0,0,1-3.2-1.41l-2.46-1.83c-.57-.38-.62-.91-.13-1.29a3.08,3.08,0,0,1,2.05-.46h12.24c1.6,0,2.9.7,2.9,1.55V311c0,.11,0,.73-.85,1.1A5.07,5.07,0,0,1,269.71,311.92Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          id="ADULT_DENT_Endo_Crown2_11"
          v-if="selectedTooth.endo_crown.crown2"
          d="M294.73,311.83l3.85-1a31.25,31.25,0,0,0,3.53-1.19,22.84,22.84,0,0,0,3.61-1.83c.4-.34.87-.73,1.39-1.19.78-.67,1-.87.84-1.06-.28-.39-1.69-.43-1.95-.43H294.78c-1.53,0-2.76.65-2.76,1.47v4.2c-.18.41.15.83.81,1A3.16,3.16,0,0,0,294.73,311.83Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
      </g>
      <path
        id="ADULT_DENT_Periapical11"
        v-if="selectedTooth.periapical.periapical1"
        d="M279.36,245.49c.3,0,1.27-1.51,4.08-5.05,0,0,1.78-2.24,4.58-5.37.13-.14,0,0,4.38-4a6.62,6.62,0,0,1,3.69-2,6,6,0,0,1,2.69.1,1.78,1.78,0,0,1,1.19,1.55,5.39,5.39,0,0,1-.49,3.29c-.46,1,.14,0-1.2,5.21-.64,2.48-.83,2.91-1.1,4.36-.37,2.06-.72,3.93-.19,4s2.77-2.94,4-5.8c.83-1.95.32-1.62,1.59-6.27.8-2.91,1.19-3.72.6-5.1a5.62,5.62,0,0,0-4.38-3.62c-2.91-.4-6,1.36-7.67,2.34-.89.51-2.35,1.45-6.37,6.54a34,34,0,0,0-4,5.8C279.85,243.26,279,245.44,279.36,245.49Z"
        transform="translate(-254.37 -226.52)"
        fill="#be1622"
        stroke="#be1622"
        stroke-miterlimit="10"
        stroke-width="0.5"
      />
      <g id="ADULT_DENT_Occlusal_Veneer11">
        <path
          id="ADULT_DENT_Occlusal_Veneer11_2"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M269.85,312l-3.28-.7a35.86,35.86,0,0,1-3.45-1.05,28,28,0,0,1-3.19-1.4L257.46,307c-.57-.38-.62-.9-.13-1.29a3.08,3.08,0,0,1,2.05-.46h12.24c1.61,0,2.91.7,2.91,1.55v4.3a1.21,1.21,0,0,1-.85,1.09A5.1,5.1,0,0,1,269.85,312Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer11_1"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M294.87,311.9l3.85-1a32.43,32.43,0,0,0,3.53-1.18,23.64,23.64,0,0,0,3.61-1.84c.4-.34.87-.73,1.39-1.19.78-.67,1-.87.84-1.06-.28-.39-1.69-.43-1.95-.43H294.92c-1.52,0-2.76.66-2.76,1.47v4.2c-.18.41.15.83.81,1A3.16,3.16,0,0,0,294.87,311.9Z"
          transform="translate(-254.37 -226.52)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
      </g>
      <g id="ADULT_DENT_Occlusal_Veneer11">
        <path
          id="ADULT_DENT_Occlusal_Veneer11_2"
          v-if="selectedTooth.crown.onlay"
          d="M269.85,312l-3.28-.7a35.86,35.86,0,0,1-3.45-1.05,28,28,0,0,1-3.19-1.4L257.46,307c-.57-.38-.62-.9-.13-1.29a3.08,3.08,0,0,1,2.05-.46h12.24c1.61,0,2.91.7,2.91,1.55v4.3a1.21,1.21,0,0,1-.85,1.09A5.1,5.1,0,0,1,269.85,312Z"
          transform="translate(-254.37 -226.52)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
        <path
          id="ADULT_DENT_Occlusal_Veneer11_1"
          v-if="selectedTooth.crown.onlay"
          d="M294.87,311.9l3.85-1a32.43,32.43,0,0,0,3.53-1.18,23.64,23.64,0,0,0,3.61-1.84c.4-.34.87-.73,1.39-1.19.78-.67,1-.87.84-1.06-.28-.39-1.69-.43-1.95-.43H294.92c-1.52,0-2.76.66-2.76,1.47v4.2c-.18.41.15.83.81,1A3.16,3.16,0,0,0,294.87,311.9Z"
          transform="translate(-254.37 -226.52)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.5"
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
