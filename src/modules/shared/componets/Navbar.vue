<template>
  <div>
    <router-link to="/">Pokemon List</router-link>
    <router-link to="/id">Pokemon por ID</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div {
    padding: 0 30px;
}

div a {
    color      : #2c3e50;
    font-weight: bold;
    margin     : 0 10px;
}

.router-link-active{
    color: #42b983;
}

</style>