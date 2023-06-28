<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="E-mail" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value) // need .value because ref()
    // eslint-disable-next-line no-unused-vars
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
      alert(email.value);
    });
};

//const signInWithGoogle = () => {};
</script>
