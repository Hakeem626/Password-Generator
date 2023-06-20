// Generate a random password
function generatePassword() {
  // Password length
  var length = parseInt(
    prompt('Enter the desired password length (between 8 and 128 characters):')
  );

  // Validate password length
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(
      prompt(
        'Invalid length! Please enter a number between 8 and 128 for the password length:'
      )
    );
  }

  // Character types required
  var includeLowercase = confirm('Include lowercase characters?');
  var includeUppercase = confirm('Include uppercase characters?');
  var includeNumeric = confirm('Include numeric characters?');
  var includeSpecial = confirm('Include special characters?');

  // At least one character type must be selected
  while (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert('At least one character type must be selected!');
    includeLowercase = confirm('Include lowercase characters?');
    includeUppercase = confirm('Include uppercase characters?');
    includeNumeric = confirm('Include numeric characters?');
    includeSpecial = confirm('Include special characters?');
  }

  // Define the characters to be included based on selected criteria
  var characters = '';
  if (includeLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeNumeric) {
    characters += '0123456789';
  }
  if (includeSpecial) {
    characters += '!@#$%^&*()-_=+';
  }

  var password = '';
  for (var i = 0; i < length; i++) {
    // Generate a random index to pick a character from the characters string
    var randomIndex = Math.floor(Math.random() * characters.length);
    // Append the randomly selected character to the password
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Generate password when the button is clicked
document.getElementById('generate').addEventListener('click', function () {
  var generatedPassword = generatePassword();
  document.getElementById('password').value = generatedPassword;
});
