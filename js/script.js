$(function() {

  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});

document.getElementById("userForm").addEventListener("submit", checkForm)
function checkForm(event){
    
  event.preventDefault()
  let userName = document.getElementById("user_name").value;
  let userNameP = document.getElementById("user_name").placeholder;
  let patternName = /^[а-яЁ-Я]+$/
  let checkName = true
  if(!patternName.test(userName)) {
   document.getElementById("user_name").style.borderBottom= "2px solid red";
   document.getElementById("user_name").value = "";
   document.getElementById("user_name").placeholder = "Введите корректное имя"
   document.getElementById("user_name").style.color = "red";
   checkName = false;
  }else {
   document.getElementById("user_name").style.borderBotttom= '2px solid rgb(221, 221, 221)';
  }

  let userPhone = document.getElementById('user_phone').value;
  let patternPhone = /^\+\d{12}$/
  let checkPhone = true;
  if(!patternPhone.test(userPhone)) {
   document.getElementById("user_phone").style.borderBottom= "2px solid red";
   document.getElementById("user_phone").value = "";
   document.getElementById("user_phone").placeholder = "Введите корректный номер"
   checkPhone = false;
  }else {
   document.getElementById("user_phone").style.borderBotttom= '2px solid rgb(221, 221, 221)';
  }


  let userEmail = document.getElementById('user_email').value;
  let patternEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/
  let checkEmail = true;
  if(!patternEmail.test(userEmail)) {
   document.getElementById("user_email").style.borderBottom= "2px solid red";
   document.getElementById("user_email").value = "";
   document.getElementById("user_email").placeholder = "Введите корректный e-mail";
   checkEmail = false;
  }else {
   document.getElementById("user_email").style.borderBotttom= '2px solid rgb(221, 221, 221)';
  }

  if(checkName == true && checkPhone == true && checkEmail == true) {
     document.getElementById("userForm").submit();
  }
}
     
  
