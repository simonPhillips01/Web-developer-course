<!DOCTYPE html>
<html>
<head>
	<title>Learning jQuery</title>
	<meta charset="utf-8">
	<meta http-equiv="Content-type" content="text/html" charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<style type="text/css">
		#wrapper {
			width: 600px;
			margin: 0 auto;
			font-family: helvetica;
			font-size: 1.2em;
		}

		input {
			width: 300px;
			height: 30px;
			padding: 5px;
			border-radius: 5px;
			font-size: 1.2em;
			border: 1px solid grey;
			margin-bottom: 10px;
		}

		label {
			width: 200px;
			float: left;
			padding-top: 7px;
		}

		#submitButton {
			height: 50px;
			margin-left: 200px;
			width: 100px;
		}

		#error {
			color: red;
			margin: 20px;
		}
	</style>
</head>
<body>
	<div id="wrapper">
	<div id="error"></div>
	<form id="validationForm">
		<label for="email">Email</label>
		<input name="email" id="email"/>

		<label for="phone">Telephone</label>
		<input name="phone" id="phone"/>

		<label for="pass">Password</label>
		<input name="pass" type="password" id="pass1"/>

		<label for="pass">Confirm Password</label>
		<input name="pass" id="pass2"/>

		<input id="submitButton" type="submit" value="Submit">
	</form>
	</div>	

<script>
		$("validationForm").submit(function(event) {
			var errorMessage"";
			event.preventDefault();
			function isValidEmailAddress(emailAddress) {
    		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    		return pattern.test(emailAddress);
};
		if (!isValidEmailAddress($("#email").val()) {
			errorMessage="<br/>Please enter a valid email address";
		}
		if (!$.isNumeric($("#phone").val())) {
			errorMessage=errorMessage+"<br/>Please enter a valid phone address";
		}
		if ($("#pass1").val() != $("#pass2").val()) {
			errorMessage=errorMessage+"<br/>Please enter matching passwords";
		}
		if (errorMessage=="") {
			alert("Success!");
		} else {
			$("#error").html(errorMessage);
		}
		$("#error").html(errorMessage);
		});
</script>

</body>
</html>