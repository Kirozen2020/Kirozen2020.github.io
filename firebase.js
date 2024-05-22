const firebaseConfig = {
    apiKey: "AIzaSyAKiZUkGDtiAQpc96foB9XQQWhan-VqI3k",
    authDomain: "graduation-ceremony-39bfe.firebaseapp.com",
    databaseURL: "https://graduation-ceremony-39bfe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "graduation-ceremony-39bfe",
    storageBucket: "graduation-ceremony-39bfe.appspot.com",
    messagingSenderId: "271013714025",
    appId: "1:271013714025:web:655cc0c34c588e810d6af8",
    measurementId: "G-22KMVJMH7E"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var GraduationDB = firebase.database().ref("Graduation");

document.getElementById("Graduation").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var msgContent = getElementVal("msgContent");

    //console.log(name, msgContent);
    saveMessages(name, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("Graduation").reset();
}

const saveMessages = (name, msgContent) => {
    var newGraduation = GraduationDB.push();

    newGraduation.set({
        name: name,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};