$(document).ready(function(){

	/**
	 * jQuery Validate Function
	 *
	 * @author Rochelle Lewis <rlewis37@cnm.edu>
	 * @editor Marlon McPherson
	 **/

	/* begin validate function here */
	$("#jca-form").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules here define what is good or bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			jcaName: {
				required: true
			},
			jcaEmail: {
				email: true,
				required: true
			},
			jcaMessage: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user when rules above don't pass
		messages: {
			jcaName: {
				required: "Please enter your name."
			},
			jcaEmail: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			jcaMessage: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#jca-form").ajaxSubmit({
				type: "POST",
				url: $("#jca-form").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#jca-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function here */

});/*end document.ready()*/