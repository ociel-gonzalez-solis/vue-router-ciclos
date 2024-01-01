<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Ociel",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Ozzy";
    },
  },

  beforeCreate() {
    this.name = "Juan";
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    // Peticiones HTTP
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured: (err, vm, info) => {
    console.log("errorCaptured");
  },
  renderTracked({ key, target, type }) {
    console.log("renderTracked");
  },
  renderTriggered({ key, target, type }) {
    console.log("renderTriggered");
  },
};
</script>

<style></style>
