<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/feed">Feed</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/sign-in">Login</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import { ref, watchEffect } from "vue"; // used for conditional rendering
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = ref(true);

// runs after firebase is initialized
onAuthStateChanged(getAuth(), function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
  } else {
    isLoggedIn.value = false; // if we do not
  }
});

const handleSignOut = () => {
  signOut(getAuth());
  router.push("/");
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
