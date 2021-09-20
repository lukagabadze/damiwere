const authForm = document.getElementById("authWrapper");
const authError = document.getElementById("error");

authForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("form submitted!");
  authError.innerText = "";

  const username = authForm.username.value;
  const password = authForm.password.value;
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
