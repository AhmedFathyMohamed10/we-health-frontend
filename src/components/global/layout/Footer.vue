<template>
  <div></div>
  <!-- FOOTER -->
  <!-- <footer class="footer">
    <div class="container">
        <div class="row align-items-center flex-row-reverse">
            <div class="col-md-12 col-sm-12 text-center">
                Copyright © <span id="year">{{ year }}</span> <a href="javascript:void(0)" class="text-danger fw-bold">REDFOXES</a> All rights reserved.
            </div>
        </div>
    </div>
  </footer> -->
  <!-- FOOTER END -->
</template>
<script>
export default {
  data(){
    return {
      year:new Date().getFullYear()
    }
  }
};
</script>
<style lang="scss">
.footer{
    background: #ffffff;
}
</style>