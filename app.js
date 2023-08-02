
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCYe28GX4SaUpVxIu94pPEvQ8qjRaMxQm4",
    authDomain: "todo-app-17670.firebaseapp.com",
    databaseURL: "https://todo-app-17670-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-app-17670",
    storageBucket: "todo-app-17670.appspot.com",
    messagingSenderId: "386829734243",
    appId: "1:386829734243:web:47f23723bc6fa132ba8356"
};

const fbprovider = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginWithGoggle = document.getElementById("loginWithGoggle");

loginWithGoggle.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log("user -->", user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("error -->", error);
        });
})

const loginWithFacebook = document.getElementById("loginWithFacebook");

loginWithFacebook.addEventListener("click", () => {
    signInWithPopup(auth, fbprovider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log("user-->", user);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log("error-->", error);
            // ...
        });

})