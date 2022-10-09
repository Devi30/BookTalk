var firebaseConfig = {
    apiKey: "AIzaSyB1pVIBPv3P9cTDoD6Evuies2KmjVGfGOg",
    authDomain: "booktalk-14aac.firebaseapp.com",
    databaseURL: "https://booktalk-14aac-default-rtdb.firebaseio.com",
    projectId: "booktalk-14aac",
    storageBucket: "booktalk-14aac.appspot.com",
    messagingSenderId: "878357002821",
    appId: "1:878357002821:web:087dca5a3c788793b0812c"
  };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
discussion_name=localStorage.getItem("discussion_name");
function adddiscussion(){
    discussion_name=document.getElementById("discussion_name").value
    firebase.database().ref("/").child("discussion_name").update({
        purpose:"addingdiscussionname"
    });
    localStorage.setItem("discussion_name",discussion_name)
    window.location="chat.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Discussion_names = childKey;
       row="<div class='discussion_name' id="+ Discussion_names+"  onclick='redirecttodiscussionname(this.id)'>"+Discussion_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirecttodiscussionname(name){
      localStorage.setItem("discussion_name", name)
      window.location="chat.html"
    }
    function logout(){
        localStorage.removeItem("user_name")
        localStorage.removeItem("discussion_name")
        window.location="index.html";
    }

