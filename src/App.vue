<template>
    <div id="app">
      <top />
      <router-view/>
    </div>
</template>

<script>
  import top from './components/Top'
    export default {
        name: 'App',
        components: {
            top
        }
    }
</script>

<style scoped>

</style>