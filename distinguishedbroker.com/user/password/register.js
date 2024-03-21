// Define the input elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const submitBtn = document.getElementById("submitBtn"); // Assuming this is your button ID

// Define the error display elements, assuming you have them
const errorFirstName = document.getElementById("firstNameError");
const errorLastName = document.getElementById("lastNameError");
const errorEmail = document.getElementById("emailError");
const errorPhone = document.getElementById("phoneError");
const errorPass1 = document.getElementById("pass1Error");
const errorPass2 = document.getElementById("pass2Error");

// Function to clear error as user types
function handleChange(event) {
  const target = event.target; // The element that triggered the event
  const errorElement = document.getElementById(target.id + "Error");
  
  if(errorElement) {
    errorElement.textContent = ''; // Clear the error message
  }
}

// Add event listeners for input change to clear errors
firstName.addEventListener("input", handleChange);
lastName.addEventListener("input", handleChange);
email.addEventListener("input", handleChange);
phone.addEventListener("input", handleChange);
pass1.addEventListener("input", handleChange);
pass2.addEventListener("input", handleChange);

// Email validation function
function checkEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

// Form validation function
function validateForm() {
  let valid = true;

  if (!firstName.value.trim()) {
    errorFirstName.textContent = 'First Name is required!';
    valid = false;
  } else {
    errorFirstName.textContent = '';
  }

  if (!lastName.value.trim()) {
    errorLastName.textContent = 'Last Name is required!';
    valid = false;
  } else {
    errorLastName.textContent = '';
  }

  if (!email.value.trim()) {
    errorEmail.textContent = 'Email is required!';
    valid = false;
  } else if (!checkEmail(email.value)) {
    errorEmail.textContent = 'Email is in a wrong format!';
    valid = false;
  } else {
    errorEmail.textContent = '';
  }

  if (!phone.value.trim()) {
    errorPhone.textContent = 'Phone number is required!';
    valid = false;
  } else {
    errorPhone.textContent = '';
  }

  if (!pass1.value.trim()) {
    errorPass1.textContent = 'Password is required!';
    valid = false;
  } else {
    errorPass1.textContent = '';
  }

  // Check if pass2 is empty OR passwords do not match, prioritizing the empty check for pass2
if (!pass2.value.trim()) {
    errorPass2.textContent = 'Password is required!';
    valid = false;
} else if (pass1.value.trim() && pass2.value.trim() && pass1.value !== pass2.value) {
    // Only check for mismatch if both passwords are not empty
    errorPass2.textContent = 'Passwords do not match!';
    valid = false;
} else {
    errorPass2.textContent = '';
}

//   if (!pass2.value.trim()) {
//     errorPass2.textContent = 'Password is required!';
//     valid = false;
//   } else {
//     errorPass2.textContent = '';
//   }


//   if (pass1.value !== pass2.value) {
//     errorPass2.textContent = 'Passwords do not match!';
//     valid = false;
//   } else {
//     errorPass2.textContent = '';
//   }

  return valid;
}

// Submit button event listener
submitBtn.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent form from submitting

  if (validateForm()) {
    // Here, you'd handle the form submission, perhaps using AJAX or fetch to send data
    alert("Form is valid, handle submission here.");
    // Reset form or show a success message
  }
});
