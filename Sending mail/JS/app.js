console.log("Form submitting");
// copy code for testing
jQuery(document).ready(function ($) {
  "use strict";
  $("form.postForm").submit(function () {
    console.log("Submit pressedx");
    // event.preventDefault(); //Trigger on form submit
    $("#name + .throw_error").empty(); //Clear the messages first
    $("#success").empty();

    var postForm = {
      //Fetch form data
      name: $("input[name=name]").val(), //Store name fields value
    };

    $.ajax({
      //Process the form using $.ajax()
      type: "POST", //Method type
      url: "./PHP/app.php", //Your form processing file URL
      data: postForm, //Forms name
      dataType: "json",
      success: function (data) {
        console.log("in seccess");
        if (!data.success) {
          //If fails
          if (data.errors.name) {
            //Returned if any error from process.php
            $(".throw_error").fadeIn(1000).html(data.errors.name); //Throw relevant error
          }
        } else {
          $("#success")
            .fadeIn(1000)
            .append("<p>" + data.posted + "</p>"); //If successful, than throw a success message
        }
      },
    });
  });
});
