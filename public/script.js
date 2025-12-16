// Register
function registerUser() {
  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  if (!username || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem(
    "ggnodesUser",
    JSON.stringify({ username, email, password })
  );

  alert("Registration successful!");
  window.location.href = "login.html";
}

// Login
function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("ggnodesUser"));

  if (!user) {
    alert("No user found. Please register first.");
    return;
  }

  if (user.email === email && user.password === password) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}
