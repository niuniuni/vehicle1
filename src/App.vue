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
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app{
  height: 100%;
}
html, body{
  width:100%;
	height: 100%;
	}
</style>
