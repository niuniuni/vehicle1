<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* @import url('./css/iCheck/all.css');
@import url('./css/style.css');
@import url('./css/font-awesome.min.css'); */
/* @import url('./css/bootstrap.min.css'); */
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app{
   overflow: hidden;
}
html, body{
  width:100%;
  height: 100%;
 
  }
</style>
