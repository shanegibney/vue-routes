<template lang="html">
  <nav class="navbar">
    <a href="https://github.com/shanegibney/vue-routes">return to repo</a>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
      userIds: ['1', '2', '3', '4']
    }
  }
}
</script>

<style lang="css">
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
li {
  display: inline-block;
  margin: 10px;
}
</style>
