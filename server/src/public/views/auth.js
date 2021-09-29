const authRegisterForm = document.getElementById("authRegister");
const authLoginForm = document.getElementById("authLogin");
const errorLogin = document.getElementById("errorLogin");
const errorRegister = document.getElementById("errorRegister");

authRegisterForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("form submitted!");
  errorLogin.innerText = "";

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

      console.log(res);
      console.log(data);

      if (data.error) {
        errorRegister.innerText = data.error.message;
      }
    })
    .catch((err) => {
      console.log("failed to send a post request", "\n", err);
    });
};

authLoginForm.onsubmit = (e) => {
  e.preventDefault();
  errorLogin.innerText = "";

  const username = authLoginForm.username.value;
  const password = authLoginForm.password.value;
  console.log(username, password);

  const payload = { username, password };

  fetch("./users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      const data = await res.json();

      console.log(res);
      console.log(data);

      if (data.error) {
        errorLogin.innerText = data.error.message;
      }
    })
    .catch((err) => {
      console.log("failed to send a post request", "\n", err);
    });
};
