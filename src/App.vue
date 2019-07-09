<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>
<script >

  import FootGuide from 'components/FootGuide/FootGuide'
  export default {
    name:'App',
    async mounted(){
      this.$store.dispatch('getAddress')
    },
    components:{
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
