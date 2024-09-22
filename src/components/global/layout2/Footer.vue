<template>
  <footer>
    <div class="d-flex gap-2 flex-wrap">
      <router-link v-for="link in links" :key="link.id" :to="link.to">{{ link.name }}</router-link>
    </div>
    <h6>RedFoxes Corporation © 2023</h6>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      links: [
        {name:"About",id:1,to:{name:"about"}},
        {name:"Accessibility",id:2,to:{name:"about"}},
        {name:"Help Center",id:3,to:{name:"about"}},
        {name:"Privacy & Terms",id:4,to:{name:"about"}},
        {name:"Advertising",id:5,to:{name:"about"}},
        {name:"Business Services",id:6,to:{name:"about"}},
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>