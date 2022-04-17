const ham = document.getElementById("ham")
const close = document.getElementById("close")
const nav = document.getElementById("nav")
const header = document.getElementById("header")
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")
const done = document.getElementById("done")
import {collection, addDoc ,getFirestore} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'

const firebaseConfig = {
    apiKey: "AIzaSyDvpOakNW7LowGInW2FARfC0ufX53F9dDw",
    authDomain: "my-portfolio-1e61a.firebaseapp.com",
    projectId: "my-portfolio-1e61a",
    storageBucket: "my-portfolio-1e61a.appspot.com",
    messagingSenderId: "342768153765",
    appId: "1:342768153765:web:ab402423f65d8ebd86c94c"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
ham.onclick = ()=>{
    nav.style.display = "flex";
    header.style.boxShadow = "none"
}

close.onclick = ()=>{
    nav.style.display = "none"
    header.style.boxShadow = "0px 1px 15px 5px #141D22"
}
window.onscroll = ()=>{
    if (scrollY > 120) {
        header.style.position = "fixed"
    }else {
        header.style.position = "static"
    }
}
window.onresize = ()=>{
    if (window.innerWidth > 450) {
        nav.style.display = "flex" 
    }else {
        nav.style.display = "none"
    }
    
}
form.onsubmit = (e)=>{
    e.preventDefault()
    const docRef =addDoc(collection(db, "connects"), {
        name: name.value,
        email: email.value,
        message: message.value
      }).then(res =>{
          done.style.display = "block"
          name.value = "";
          email.value = "";
          message.value = "";
          setTimeout(()=>{
            done.style.display = "none"
          },2000)
      })
}