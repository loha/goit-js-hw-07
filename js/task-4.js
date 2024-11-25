document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log({
    email,
    password,
  });

  reset();
});

function reset() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
