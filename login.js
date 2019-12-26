let username = "";
let password = "";

$(document).ready(function(){
    console.log("Document is ready.");
    $("#btn1").click(async function(){
        username=$("#username").val();
        password=$("#pswd").val();
        var presentUrl = document.URL;
        console.log(presentUrl);
        var url = 'next.html?name=' + username;
        console.log(url);
        // document.location.href = url;
        const database = firebase.database();
        var accExist = false;
        var temp;
        localStorage.setItem("username",username);
        await database.ref('todo/').child("users").child(username).child("Name").once("value").then(function(snapshot){
            temp = snapshot.val();
        }).then(()=>{
            if(temp!=undefined && temp!=null){
                accExist=true;
            }
        });
        if(accExist){
            var url = document.URL;
            url = url.substring(0,url.lastIndexOf("/"))+"/home.html";
            document.location.href = url;
        } else {

        }
    });
    
}); 

