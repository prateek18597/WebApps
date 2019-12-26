var username = "";
var name = "";
$(document).ready(async function(){
    username=localStorage.getItem("username");
    console.log("Hello " + username);
    const database = firebase.database();
    await database.ref('todo/').child("users").child(username).child("Name").once("value").then(function(snapshot){
        temp = snapshot.val();
    }).then(()=>{
        if(temp!=undefined && temp!=null){
            name = temp;
            $("#nameDiv").text("Hello "+name);
        }
    });

    $("#todoBtn").click(function(){
        localStorage.setItem("name",name);
        localStorage.setItem("username",username);
        var url = document.URL;
        url = url.substring(0,url.lastIndexOf("/"))+"/todo.html";
        document.location.href = url;
    });
});
