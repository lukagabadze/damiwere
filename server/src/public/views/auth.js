const authForm = document.getElementById("authWrapper");

authForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("form submitted!");

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
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("failed to create a user", err);
    });
};
