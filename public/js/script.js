// javascript code will go here

//this function will fire when the page will load

//let element = document.getElementsByClassName("main");
// function element(){
//     alert("Welcome to the roadmap of full stack developer");
// }
// form validation

  function check_Email(mail){
    let regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(regex.test(mail.myemail.value)){
      return true;
      alert("Congrats! This is a valid Email email");
    }
    else{
      alert("This is not a valid email address");
      return false;
    }
  }
      
var myFunction = ()=>{
    // alert("please enter 6 digit password");
}

let check_form=(form)=>{
// validate email
if(form.email.value == "") {
    alert("Error: Input is empty!");
    form.email.focus();
    return false;
  }

  var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(!re.test(form.email.value)) {
    alert("Error: Input contains invalid characters!");
    form.email.focus();
    return false;
  }
  if(form.password.value == "") {
    alert("Error: Input is empty!");
    form.email.focus();
    return false;
  }
 else  if(form.password.value<8) {
    alert("Error: Input is less than 8 digit!");
    form.email.focus();
    return false;
  }

  var re2  = /^[a-zA-Z]\w{3,14}$/;
  if(!re1.test(form.password.value)){
      alert("Error: Invalid password")
      form.password.focus();
      return false;

  }
  else{
      alert("you got it");
  }
}