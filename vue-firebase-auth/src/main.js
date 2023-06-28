import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcLQbrpg4wsC7crX5lgLVYdGvce8aoKcM",
  authDomain: "vue-firebase-auth-1c0eb.firebaseapp.com",
  projectId: "vue-firebase-auth-1c0eb",
  storageBucket: "vue-firebase-auth-1c0eb.appspot.com",
  messagingSenderId: "823411770606",
  appId: "1:823411770606:web:df575ea54ed934585e9fff",
};

initializeApp(firebaseConfig);

if (location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099");
}

const app = createApp(App);

app.use(router);

app.mount("#app");
