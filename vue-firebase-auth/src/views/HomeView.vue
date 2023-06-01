<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
const auth = getAuth();
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    logout: function () {
      auth()
        .signOut()
        .then(() => {
          this.$router.replace("LoginView");
        });
    },
  },
};
</script>
