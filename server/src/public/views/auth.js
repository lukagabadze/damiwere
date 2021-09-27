const authRegisterForm = document.getElementById("authRegister");
const authError = document.getElementById("error");

authRegisterForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("form submitted!");
  authError.innerText = "";

  const username = authRegisterForm.username.value;
  const password = authRegisterForm.password.value;
  console.log(username, password);

  const payload = { username, password };

  fetch("./users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      const data = await res.json();

      if (data.error) {
        authError.innerText = data.error.message;
      }
    })
    .catch((err) => {
      console.log("failed to send a post request", "\n", err);
    });
};
