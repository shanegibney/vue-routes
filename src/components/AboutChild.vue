<template lang="html">
  <div class="AboutChild">
    <h1>About child component</h1>
    <h2>{{ description }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AboutChild',
  data(){
    return {
      description: "This is a child component of the About component"
    }
  }
}
</script>

<style lang="css" scoped>
 h1, h2{
   color: lightblue;
 }
 div .AboutChild{
   background: white;
 }
</style>
