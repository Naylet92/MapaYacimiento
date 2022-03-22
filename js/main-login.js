var objPeople=[
{
	username: "admin",
	password:"1234"
}
];

var count=2;
 function login(){
	 var username= document.getElementById("username").value
	 var password= document.getElementById("password").value
	 var valid= false;
	 for(i=0; i< objPeople.length; i++){
		 if(username==objPeople[i].username && password==objPeople[i].password){
			valid= true;
			break;
		 }
	
	 }
	 if(valid){
		
	    window.location='export-capa_de_oro.html';
        var link = ''
        return false;
	 }
     var again="tries";
     if(count==1){
      again="try"
     }
     if(count>=1){
         alert ("Equivocado usuario o contraseña")
         count--;
     }
     else{
         alert("incorrecto Usuario o contraseña usted sera bloqueado");
         document.login.username.value="Usted esta bloqueado";
         document.login.password.value="tonto, no puedes ver esto";
         document.login.username.disabled=true;
         document.login.password.disabled=true;
         return false;
     }
 }

/*/////////////////registro///////////////*/

function registrar(){
    var registeruser= document.getElementById("newusername").value
	 var registerpass= document.getElementById("newpassword").value
     var newUser={
         username:registeruser,
         password:registerpass,
     }
    for(i=0; i<objPeople.length; i++){
  if(registeruser==objPeople[i].username){
      alert("that username is already in use")
      return
    }else if(registerpass.length<8){
     alert("that password is too short")
    }
    }



     objPeople.push(newUser)
     console.log(objPeople)
}




