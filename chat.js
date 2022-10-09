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
function send(){
    msg=document.getElementById("msg").value;
    image=document.getElementById("images").value
    firebase.database().ref(discussion_name).push({
          name:user_name,
          msg:msg,
          like:0,
          image:image
    });
    document.getElementById("msg").value="";
    document.getElementById("images").value="";
    getData();
}
function leave(){
    localStorage.removeItem("discussion_name")
    localStorage.removeItem("user_name")
    window.location="index.html"
}
function getData() { firebase.database().ref("/"+discussion_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       name=message_data['name']
       message=message_data['msg']
       like=message_data['like']
       name_tag="<h4> "+name+"<img class='user_tick'src='tick.png'> </h4>"
       message_tag="<h4 class='message_h4'>"+message+"</h4>"
       like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>"
       span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>"
       row=name_tag+message_tag+like_button+span_tag;
       document.getElementById("output").innerHTML+row;
    } });  }); }

