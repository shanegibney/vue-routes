<template lang="html">
  <nav class="navbar">
    <ul>
      <li> <router-link :to="{ name: 'Home'}">Home</router-link> </li>
      <li> <router-link :to="{ name: 'About'}">About</router-link> </li>
    </ul>
    <h2>User profiles</h2>
    <ul>
      <li v-for="(id, index) in userIds" :key="index">
      <router-link :to="{ name: 'ViewProfile', params: { user_id: id }}">
      <span>Profile {{ id }}</span>
      </router-link>
    </li>
    </ul>
    <ul>
      <li> <button @click="goBack">Go back</button> </li>
      <li> <button @click="goHome">Redirect to Home</button> </li>
      <li> <button @click="goForward">Go forward</button> </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      userIds: ['1', '2', '3', '4']
    }
  },
  methods: {
      goHome(){
        console.log("hellooooôö");
         this.$router.push({ name: 'Home'})
         console.log("hello home");
     },
     goBack(){
       this.$router.go(-1)
     },
     goForward(){
       this.$router.go(1)
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

a.router-link-exact-active {
  color: purple;
}
</style>
