<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      num: 6
    }
  },
  methods: {
    change () {
      this.num++
    }
  }
}
</script>

<style lang="less"></style>
