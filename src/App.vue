<template>
 <Nav/>
<router-view/>
</template>
<script>
import Nav from './components/nav.vue'
export default {
  components:{
    Nav
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
  padding: 30px;
}
.nav a{
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content:end;
  font-size: 20px;
}
</style>
