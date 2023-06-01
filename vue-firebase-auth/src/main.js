import Vue from "vue";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTo = false;

const config = {
  apiKey: "AIzaSyAcLQbrpg4wsC7crX5lgLVYdGvce8aoKcM",
  authDomain: "vue-firebase-auth-1c0eb.firebaseapp.com",
  projectId: "vue-firebase-auth-1c0eb",
  storageBucket: "vue-firebase-auth-1c0eb.appspot.com",
  messagingSenderId: "823411770606",
  appId: "1:823411770606:web:df575ea54ed934585e9fff",
};

let app = initializeApp(config);
const auth = getAuth(app);

auth(app).onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
