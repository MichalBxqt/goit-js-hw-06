const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
