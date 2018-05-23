$(document).ready(function(){
  $('#login').on('click',function(event){
    event.preventDefault();
    console.log("I was clicked")
    var username = $('#email').val();
    var password = $('#pwd').val();
    console.log("Username is ", username);
    console.log("Password is ", password);
    $.ajax({
      url: "/api/user",
      data:{
        username:username,
        password:password
      },
      method: "POST"
    }).then(function(response){
      console.log("Response is ",response)
    })
  })
})
