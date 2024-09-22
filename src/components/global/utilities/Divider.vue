<template>
    <hr class="hr-text" :class="[alignment=='vertical'?'vertical':'horizontal']" :data-content="label" />
</template>
<script>
export default {
    props:{
      label:{
        type: String,
        default(){
          return ''
        },
      },
      alignment:{
        type: String,
        default(){
          return 'horizontal'
        },
      },
    },
}
</script>
<style lang="scss" scoped>
      .hr-text {
        line-height: 1em;
        position: relative;
        outline: 0;
        border: 0;
        color: white;
        text-align: center;
        height: 1.5em;
        opacity: 0.8;
        margin:10px 0px;
        &:before {
          content: "";
          // use the linear-gradient for the fading effect
          // use a solid background color for a solid bar
          background: linear-gradient(
            to right,
            transparent,
            #56c596,
            transparent
          );
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }
        &:after {
          content: attr(data-content);
          position: relative;
          display: inline-block;
          color: black;
          padding: 0 0.5em;
          line-height: 1.5em;
          // this is really the only tricky part, you need to specify the background color of the container element...
          font-weight:bold ;
          background-color: #ffff;
          -webkit-text-fill-color: #205072;
          opacity: 1;
        }
      }
      .vertical{
        // transform: rotate(90deg);
        height:auto;   
        width: 1.5em;  
        margin:0px 10px; 
        &:before {
          left: 0.75em;
          top: 0%;
          height: 100%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            #56c596,
            transparent
          );
        }
        &:after {
          transform: rotate(-90deg);
          top: 50%;
          left: -0.75em;
        }          
      }
</style>