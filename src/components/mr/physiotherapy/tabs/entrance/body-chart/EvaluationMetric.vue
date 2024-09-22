<template>
  <div class="evaluation">
    <!-- <svg
      id="evaluation_chart"
      data-name="pain chart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 377 60.66"
      class="w-100"
      
    >
      <rect
        @click="levelClicked(0)"
        id="_0"
        data-name="0"
        class="cls-1"
        :class="[selectedLevel=='0'?'active':'']"
        x="3"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(1)"
        id="_1"
        data-name="1"
        class="cls-2"
        :class="[selectedLevel=='1'?'active':'']"
        x="37"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(2)"
        id="_2"
        data-name="2"
        class="cls-3"
        :class="[selectedLevel=='2'?'active':'']"
        x="71"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(3)"
        id="_3"
        data-name="3"
        class="cls-4"
        :class="[selectedLevel=='3'?'active':'']"
        x="105"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(4)"
        id="_4"
        data-name="4"
        class="cls-5"
        :class="[selectedLevel=='4'?'active':'']"
        x="139"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(5)"
        id="_5"
        data-name="5"
        class="cls-6"
        :class="[selectedLevel=='5'?'active':'']"
        x="173"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(6)"
        id="_6"
        data-name="6"
        class="cls-7"
        :class="[selectedLevel=='6'?'active':'']"
        x="207"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(7)"
        id="_7"
        data-name="7"
        class="cls-8"
        :class="[selectedLevel=='7'?'active':'']"
        x="241"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(8)"
        id="_8"
        data-name="8"
        class="cls-9"
        :class="[selectedLevel=='8'?'active':'']"
        x="275"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(9)"
        id="_9"
        data-name="9"
        class="cls-10"
        :class="[selectedLevel=='9'?'active':'']"
        x="309"
        y="11.2"
        width="31"
        height="31"
      />
      <rect
        @click="levelClicked(10)"
        id="_10"
        data-name="10"
        class="cls-11"
        :class="[selectedLevel=='10'?'active':'']"
        x="343"
        y="11.2"
        width="31"
        height="31"
      />
      <g id="numbers">
        <g id="_0-2" data-name="0" class="cls-12">
          <text class="cls-13" transform="translate(12.86 57.2) scale(1.13 1)">
            0
          </text>
        </g>
        <g id="_1-2" data-name="1" class="cls-12">
          <text class="cls-13" transform="translate(46.47 57.2) scale(1.13 1)">
            1
          </text>
        </g>
        <g id="_2-2" data-name="2" class="cls-12">
          <text class="cls-13" transform="translate(81.09 57.2) scale(1.13 1)">
            2
          </text>
        </g>
        <g id="_3-2" data-name="3" class="cls-12">
          <text class="cls-13" transform="translate(115.32 57.2) scale(1.13 1)">
            3
          </text>
        </g>
        <g id="_4-2" data-name="4" class="cls-12">
          <text class="cls-13" transform="translate(147.8 57.2) scale(1.13 1)">
            4
          </text>
        </g>
        <g id="_5-2" data-name="5" class="cls-12">
          <text class="cls-13" transform="translate(183.55 57.2) scale(1.13 1)">
            5
          </text>
        </g>
        <g id="_6-2" data-name="6" class="cls-12">
          <text class="cls-13" transform="translate(216.78 57.2) scale(1.13 1)">
            6
          </text>
        </g>
        <g id="_7-2" data-name="7" class="cls-12">
          <text class="cls-13" transform="translate(251.26 57.2) scale(1.13 1)">
            7
          </text>
        </g>
        <g id="_8-2" data-name="8" class="cls-12">
          <text class="cls-13" transform="translate(284.01 57.2) scale(1.13 1)">
            8
          </text>
        </g>
        <g id="_9-2" data-name="9" class="cls-12">
          <text class="cls-13" transform="translate(319.5 57.2) scale(1.13 1)">
            9
          </text>
        </g>
        <g id="_10-2" data-name="10" class="cls-12">
          <text class="cls-13" transform="translate(349.98 57.2) scale(1.13 1)">
            10
          </text>
        </g>
        <line
          id="Line_22"
          data-name="Line 22"
          class="cls-14"
          y1="45.7"
          x2="377"
          y2="45.7"
        />
      </g>
      <g id="text">
        <text class="cls-15" transform="translate(18.96 7.84)">
          No
          <tspan class="cls-16" x="15.71" y="0">P</tspan>
          <tspan x="22.17" y="0">ain</tspan>
        </text>
        <text class="cls-15" transform="translate(83.88 7.98)">
          Mild
          <tspan class="cls-16" x="22.79" y="0">P</tspan>
          <tspan x="29.24" y="0">ain</tspan>
        </text>
        <text class="cls-15" transform="translate(158.81 8.29)">
          Mode
          <tspan class="cls-17" x="26.4" y="0">r</tspan>
          <tspan x="30.21" y="0">a</tspan>
          <tspan class="cls-18" x="35.77" y="0">t</tspan>
          <tspan class="cls-19" x="39.53" y="0">e</tspan>
          <tspan class="cls-16" x="47.75" y="0">P</tspan>
          <tspan x="54.21" y="0">ain</tspan>
        </text>
        <text class="cls-15" transform="translate(245.3 7.65)">
          S
          <tspan class="cls-20" x="5.74" y="0">e</tspan>
          <tspan class="cls-16" x="11.33" y="0">v</tspan>
          <tspan x="16.58" y="0">e</tspan>
          <tspan class="cls-21" x="22.26" y="0">r</tspan>
          <tspan x="26.05" y="0">e</tspan>
          <tspan class="cls-22" x="34.28" y="0">P</tspan>
          <tspan class="cls-19" x="40.73" y="0">ain</tspan>
          
        </text>
        <text class="cls-15" transform="translate(314.96 7.86)">
          <tspan class="cls-23">W</tspan>
          <tspan class="cls-19" x="9.97" y="0">o</tspan>
          <tspan class="cls-24" x="15.87" y="0">r</tspan>
          <tspan x="19.73" y="0">st</tspan>
          <tspan class="cls-16" x="30.97" y="0">P</tspan>
          <tspan x="37.42" y="0">ain</tspan>
        </text>
      </g>
    </svg> -->

    <svg xmlns="http://www.w3.org/2000/svg" width="318" height="66.5" viewBox="0 0 318 66.5">
      <g id="Group_1827" data-name="Group 1827" transform="translate(-1001.209 -703)">
        <text id="Heading_3" data-name="Heading 3" transform="translate(1011.209 766.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="0">0</tspan></text>
        <text id="Heading_3-2" data-name="Heading 3" transform="translate(1040.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">1</tspan></text>
        <text id="Heading_3-3" data-name="Heading 3" transform="translate(1068.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">2</tspan></text>
        <text id="Heading_3-4" data-name="Heading 3" transform="translate(1098.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">3</tspan></text>
        <text id="Heading_3-5" data-name="Heading 3" transform="translate(1126.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">4</tspan></text>
        <text id="Heading_3-6" data-name="Heading 3" transform="translate(1155.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">5</tspan></text>
        <text id="Heading_3-7" data-name="Heading 3" transform="translate(1185.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">6</tspan></text>
        <text id="Heading_3-8" data-name="Heading 3" transform="translate(1214.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">7</tspan></text>
        <text id="Heading_3-9" data-name="Heading 3" transform="translate(1243.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">8</tspan></text>
        <text id="Heading_3-10" data-name="Heading 3" transform="translate(1271.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">9</tspan></text>
        <text id="Heading_3-11" data-name="Heading 3" transform="translate(1298.209 753.5)" fill="#205072" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="13">10</tspan></text>
        <g id="Group_1826" data-name="Group 1826">
          <rect id="Rectangle_2108" data-name="Rectangle 2108" width="57" height="20.5" transform="translate(1262.209 703)" fill="rgba(0,8,255,0.6)" opacity="0"/>
          <text id="Heading_3-12" data-name="Heading 3" transform="translate(1291.209 716.5)" fill="#205072" font-size="10" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-15.79" y="0">{{levels[4][locale]}}</tspan></text>
        </g>
        <g id="Group_1825" data-name="Group 1825">
          <rect id="Rectangle_2107" data-name="Rectangle 2107" width="57" height="20.5" transform="translate(1204.209 703)" fill="rgba(0,8,255,0.6)" opacity="0"/>
          <text id="Heading_3-13" data-name="Heading 3" transform="translate(1233.709 716.5)" fill="#205072" font-size="10" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-17.63" y="0">{{levels[3][locale]}}</tspan></text>
        </g>
        <g id="Group_1824" data-name="Group 1824">
          <rect id="Rectangle_2106" data-name="Rectangle 2106" width="86" height="20.5" transform="translate(1117.209 703)" fill="rgba(0,8,255,0.6)" opacity="0"/>
          <text id="Heading_3-14" data-name="Heading 3" transform="translate(1160.209 716.5)" fill="#205072" font-size="10" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-25.115" y="0">{{levels[2][locale]}}</tspan></text>
        </g>
        <g id="Group_1823" data-name="Group 1823">
          <rect id="Rectangle_2105" data-name="Rectangle 2105" width="57" height="20.5" transform="translate(1059.209 703)" fill="rgba(0,8,255,0.6)" opacity="0"/>
          <text id="Heading_3-15" data-name="Heading 3" transform="translate(1087.709 716.5)" fill="#205072" font-size="10" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-11.245" y="0">{{levels[1][locale]}}</tspan></text>
        </g>
        <g id="Group_1822" data-name="Group 1822">
          <rect id="Rectangle_2104" data-name="Rectangle 2104" width="57" height="20.5" transform="translate(1001.209 703)" fill="rgba(0,8,255,0.6)" opacity="0"/>
          <text id="Heading_3-16" data-name="Heading 3" transform="translate(1029.709 716.5)" fill="#205072" font-size="10" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-20.36" y="0">{{levels[0][locale]}}</tspan></text>
        </g>

        <line id="Line_380" data-name="Line 380" x2="302" transform="translate(1008.709 754)" fill="none" stroke="#707070" stroke-width="1"/>

        <rect  id="id-0" data-name="0"  @click="levelClicked(0)" :class="[selectedLevel=='0'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1001.209 723.5)" fill="rgba(0,8,255,0.6)"/>
        <rect  id="id-1" data-name="1"  @click="levelClicked(1)" :class="[selectedLevel=='1'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1030.209 723.5)" fill="rgba(145,0,255,0.6)"/>
        <rect  id="id-2" data-name="2"  @click="levelClicked(2)" :class="[selectedLevel=='2'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1059.209 723.5)" fill="rgba(255,0,255,0.6)"/>
        <rect  id="id-3" data-name="3"  @click="levelClicked(3)" :class="[selectedLevel=='3'?'active':'',readOnly?'read-only':'']" width="28" height="28" transform="translate(1088.209 723.5)" fill="rgba(255,0,204,0.6)"/>
        <rect  id="id-4" data-name="4"  @click="levelClicked(4)" :class="[selectedLevel=='4'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1117.209 723.5)" fill="rgba(255,0,144,0.6)"/>
        <rect  id="id-5" data-name="5"  @click="levelClicked(5)" :class="[selectedLevel=='5'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1146.209 723.5)" fill="rgba(255,0,128,0.6)"/>
        <rect  id="id-6" data-name="6"  @click="levelClicked(6)" :class="[selectedLevel=='6'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1175.209 723.5)" fill="rgba(255,0,102,0.6)"/>
        <rect  id="id-7" data-name="7"  @click="levelClicked(7)" :class="[selectedLevel=='7'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1204.209 723.5)" fill="rgba(255,0,95,0.6)"/>
        <rect  id="id-8" data-name="8"  @click="levelClicked(8)" :class="[selectedLevel=='8'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1233.209 723.5)" fill="rgba(255,0,43,0.6)"/>
        <rect  id="id-9" data-name="9"  @click="levelClicked(9)" :class="[selectedLevel=='9'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1262.209 723.5)" fill="rgba(255,0,17,0.6)"/>
        <rect  id="id-10" data-name="10"  @click="levelClicked(10)" :class="[selectedLevel=='10'?'active':'',readOnly?'read-only':'']"  width="28" height="28" transform="translate(1291.209 723.5)" fill="rgba(255,0,0,0.6)"/>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
      default() {
        return "";
      },
    },
    levels: {
      required: true,
      type: Array,
    },
    readOnly: {
      type:Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      selectedLevel: this.value,
    };
  },
  watch: {
    value() {
      if (!this.value) {
        this.selectedLevel = "";
      }
      else {
        this.selectedLevel = this.value
      }
    },
    selectedLevel() {
      this.$emit("input", this.selectedLevel);
    },
  },
  methods: {
    levelClicked(val) {
      if(!this.readOnly)
        this.selectedLevel = JSON.stringify(val);
      
    },
  },
};
</script>
<style scoped>
.evaluation{
  width: 100%;
}
svg{
  /* width: 100%; */
  max-width: 100%;
}
.active {
  stroke: #205072;
  stroke-width: 2px;
  transition: all 0.75s ease-in-out;
}
#id-0,
#id-1,
#id-2,
#id-3,
#id-4,
#id-5,
#id-6,
#id-7,
#id-8,
#id-9,
#id-10{
  cursor: pointer;
}
.read-only{
  cursor: default !important;
}
/*
.cls-1,
.cls-2,
.cls-3,
.cls-4,
.cls-5,
.cls-6,
.cls-7,
.cls-8,
.cls-9,
.cls-10,
.cls-11{
  cursor: pointer;
} */
.cls-1 {
  fill: #9d0aff;
}
.cls-2 {
  fill: #bd0aff;
}
.cls-3 {
  fill: #c100ef;
}
.cls-4 {
  fill: #dd15e1;
}
.cls-5 {
  fill: #ff2aae;
}
.cls-6 {
  fill: #ff359f;
}
.cls-7 {
  fill: #ff0a8d;
}
.cls-8 {
  fill: #ff0a71;
}
.cls-9 {
  fill: #ff0a56;
}
.cls-10 {
  fill: #e90041;
}
.cls-11 {
  fill: #b40005;
}
.cls-12,
.cls-13 {
  isolation: isolate;
}
.cls-13 {
  font-size: 13px;
  fill: #205072;
}
.cls-13,
.cls-15 {
  font-family: Montserrat-Bold, Montserrat;
  font-weight: 700;
}
.cls-14 {
  fill: none;
  stroke: #707070;
}
.cls-15 {
  font-size: 9px;
}
.cls-16 {
  letter-spacing: -0.01em;
}
.cls-17 {
  letter-spacing: -0.01em;
}
.cls-18 {
  letter-spacing: -0.02em;
}
.cls-19 {
  letter-spacing: 0em;
}
.cls-20 {
  letter-spacing: -0.01em;
}
.cls-21 {
  letter-spacing: -0.01em;
}
.cls-22 {
  letter-spacing: -0.02em;
}
.cls-23 {
  letter-spacing: -0.06em;
}
.cls-24 {
  letter-spacing: 0em;
}
.p-ripple.purple .p-ink {
        background: rgba(0,0,0);
}
</style>
