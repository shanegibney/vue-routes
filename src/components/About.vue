<template lang="html">
  <div class="about">
    <h1>About</h1>
    <AboutChild/>
  </div>
</template>

<script>
import AboutChild from '@/components/AboutChild'
export default {
  name: 'About',
  components: {
    AboutChild
  },
  data(){
    return {}
  }
}
</script>

<style lang="css">
h1 {
  color: #444;
}
div .about {
  background-color: lightgray;
}
</style>
