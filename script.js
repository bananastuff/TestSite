const firebaseConfig = {
  apiKey: "AIzaSyCDXv3m2PzRmwYPc__WSHXOI40ayGJAUdQ",
  authDomain: "test-11c15.firebaseapp.com",
  databaseURL: "https://test-11c15-default-rtdb.firebaseio.com",
  projectId: "test-11c15",
  storageBucket: "test-11c15.appspot.com",
  messagingSenderId: "1003727374724",
  appId: "1:1003727374724:web:410a4bb8fcec26fe8035d1",
};

//initialise
firebase.initializeApp(firebaseConfig);
//reference my database
var contactFormDB = firebase.database().ref("contactForm");

//EVENT to run the submit Form function
document.getElementById("contactForm").addEventListener("submit", submitForm);
//Submit Form function below
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  saveMessages(name, emailid, msgContent);
  //Alert box function
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 4000)
  //resert form
  document.getElementById("contactForm").reset();
}

function saveMessages(name, emailid, msgContent) {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
