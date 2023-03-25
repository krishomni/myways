<!DOCTYPE html>
<html>
<head>
	<title>User Registration Form</title>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script>
		function validateForm() {
			var name = document.forms["registrationForm"]["name"].value;
			var email = document.forms["registrationForm"]["email"].value;
			var phone = document.forms["registrationForm"]["phone"].value;
			if (name == "" || email == "" || phone == "") {
				alert("Please fill out all required fields.");
				return false;
			}
			var url = "https://example.com/api/users?email=" + email;
			$.ajax({
				url: url,
				type: "GET",
				success: function(result) {
					alert("User found.");
				},
				error: function(xhr, status, error) {
					if (xhr.status == 404) {
						createUser(name, email, phone);
					} else {
						alert("An error occurred: " + error);
					}
				}
			});
		}

		function createUser(name, email, phone) {
			var data = {
				name: name,
				email: email,
				phone: phone
			};
			$.ajax({
				url: "https://example.com/api/users",
				type: "POST",
				data: data,
				success: function(result) {
					alert("User created successfully.");
				},
				error: function(xhr, status, error) {
					alert("An error occurred: " + error);
				}
			});
		}
	</script>
</head>
<body>
	<h1>User Registration Form</h1>
	<form name="registrationForm" onsubmit="return validateForm()">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" required><br><br>
		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required><br><br>
		<label for="phone">Phone:</label>
		<input type="tel" id="phone" name="phone" required><br><br>
		<input type="submit" value="Submit">
	</form>
</body>
</html>
