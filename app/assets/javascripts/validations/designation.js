function validateDesignationForm() {
  
    $('#form_designation').validate({
      debug: true,
      rules: {
        "designation[title]": {
            required: true,
            minlength: 2,
            maxlength: 50
        },
        "designation[responsibilities]": "required",
      },
      errorElement: "span",
      errorClass: "help-block",
      messages: {
        "designation[title]": "Please specify Title",
        "designation[responsibilities]": "Please specify Responsibilities",
      },
      highlight: function(element) {
          $(element).parent().parent().addClass("has-error");
      },
      unhighlight: function(element) {
          $(element).parent().parent().removeClass("has-error");
      },
      invalidHandler: function(event, validator) {
        // 'this' refers to the form
        var errors = validator.numberOfInvalids();
        if (errors) {
          
          // Populating error message
          var errorMessage = errors == 1
            ? 'You missed 1 field. It has been highlighted'
            : 'You missed ' + errors + ' fields. They have been highlighted';
          
          // Removing the form error if it already exists
          $("#div_designation_js_validation_error").remove();
          
          errorHtml = "<div id='div_designation_js_validation_error' class=\"alert alert-danger\" data-alert=\"alert\" style=\"margin-bottom:5px;\">"+ errorMessage +"</div>"
          //$("#div_designation_details").prepend(errorHtml);  
          $("#div_modal_generic div.modal-body-main").prepend(errorHtml);  
          
          // Show error labels
          $("div.error").show();
          
        } else {
          // Hide error labels
          $("div.error").hide();
          // Removing the error message
          $("#div_designation_js_validation_error").remove();
        }
      }
      
    });
    
}
