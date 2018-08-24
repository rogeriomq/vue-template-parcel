<template>
  <div>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: { Hello },
  debug: true,
  mounted () {
    this.log('App.vue Mounted!')
    this.warn('To disable this log, set prop debug = false...')
  }
}
</script>

<style lang='stylus'>
@import './css/theme.styl'
</style>