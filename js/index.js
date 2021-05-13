 

 function validate(){
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
     
    if(username == "admin" && password == "admin"){
        window.location.href = 'http://127.0.0.1/pages/dashboard.html';
        
    }
 }



