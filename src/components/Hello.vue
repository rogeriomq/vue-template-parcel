<template>
  <div class="border-test1">
    <h2 class="border-test2">Hello Vue Project With Parcel!</h2>
    <h4 class="border-test3"><b>I'm loving Parcel. Quick and simple!</b></h4>
  </div>
</template>

<script>
export default {
  name: 'hello',
  debug: true,
  mounted () {
    this.log('Hello.vue Mounted!')
  }
}
</script>

<style>
</style>
