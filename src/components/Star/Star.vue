<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(c,index) in starClass" :key="index" :class="c"></span>
  </div>
</template>

<script>
  export default {
    name: "Star",
    props:{
      score:Number,
      size:Number,
    },
    computed:{
      starClass() {
        const {score} = this
         const arr = []
        const startInteger =  Math.floor(score)
          for (let i = 0; i < startInteger; i++) {
             arr.push("on");
          }
            if (score*10-startInteger*10>=5) {
              arr.push("on");
          }
            const m = 5-arr.length
        for (let i = 0; i < m; i++) {
          arr.push("off");
        }
        return arr
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
