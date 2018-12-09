<template>
  <div id="app">
    <top/>
    <router-view/>
  </div>
</template>

<script>
import top from "./components/Top";
import axios from 'axios'
export default {
  name: "App",
  components: {
    top
  },
  created() {
    axios.get('http://www.tstdwxq.cn/application').then(res => {
      console.log(res.data)
    })
    axios.get('http://www.tstdwxq.cn/cata').then(res => {
      console.log(res.data)
    })
    axios.get('http://www.tstdwxq.cn/type').then(res => {
      console.log(res.data)
    })
  }
};
</script>

<style scoped>
</style>