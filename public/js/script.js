$(function(){
  console.log("running script file")

  $('.flexslider').flexslider({
    touch: true
  })

  $("form").submit(function(e){
    e.preventDefault();

    let formData = {
      'firstName': $("#firstName").val(),
      'lastName': $("#lastName").val(),
      'phone': $("#phone").val(),
      'school': $("#school").val(),
      'program': $("#program").val()
    }
    console.log(formData)
    // alert("Thank you for submitting your information");
    $("form").trigger("reset");

  });

  $('#submit_button').click(function(){
    $("form").submit();
    $('.ui.small.modal').modal('show')


  })

  // $("#request_info_form").on("submit", function(){
  //   console.log("form clicked")
  //   return false;
  // })

})
