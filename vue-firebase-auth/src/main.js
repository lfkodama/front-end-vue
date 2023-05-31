import Vue from "vue";
import firebase from "firebase";
import "firebase/auth";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTo = false;

let app = "";

firebase.initializeApp({
  apiKey: "AIzaSyAcLQbrpg4wsC7crX5lgLVYdGvce8aoKcM",
  authDomain: "vue-firebase-auth-1c0eb.firebaseapp.com",
  projectId: "vue-firebase-auth-1c0eb",
  storageBucket: "vue-firebase-auth-1c0eb.appspot.com",
  messagingSenderId: "823411770606",
  appId: "1:823411770606:web:df575ea54ed934585e9fff",
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
