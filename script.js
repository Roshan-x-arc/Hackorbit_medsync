// Create login form containers dynamically if not in the HTML yet
function createLoginForms() {
  const mainContent = document.querySelector(".main-content");

  if (!document.getElementById("patientLogin")) {
    const patientLogin = document.createElement("div");
    patientLogin.id = "patientLogin";
    patientLogin.className = "login-form";
    patientLogin.innerHTML = `
        <button class="back-btn" onclick="showWelcome()">← Back</button>
        <h2 style="color: #3498db; margin-bottom: 1.5rem;">Patient Login</h2>
        <form onsubmit="handleLogin(event, 'patient')">
          <div class="form-group">
            <label class="form-label">Patient ID</label>
            <input type="text" class="form-input" required placeholder="Enter your Patient ID">
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" required placeholder="Enter your password">
          </div>
          <button type="submit" class="form-btn">Login</button>
        </form>
      `;
    mainContent.appendChild(patientLogin);
  }

  if (!document.getElementById("hospitalLogin")) {
    const hospitalLogin = document.createElement("div");
    hospitalLogin.id = "hospitalLogin";
    hospitalLogin.className = "login-form";
    hospitalLogin.innerHTML = `
        <button class="back-btn" onclick="showWelcome()">← Back</button>
        <h2 style="color: #00b894; margin-bottom: 1.5rem;">Hospital Login</h2>
        <form onsubmit="handleLogin(event, 'hospital')">
          <div class="form-group">
            <label class="form-label">Hospital ID</label>
            <input type="text" class="form-input" required placeholder="Enter your Hospital ID">
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" required placeholder="Enter your password">
          </div>
          <button type="submit" class="form-btn">Login</button>
        </form>
      `;
    mainContent.appendChild(hospitalLogin);
  }
}

// Show specific login form
function showLogin(type) {
  document.querySelector(".welcome-section").style.display = "none";

  const patientForm = document.getElementById("patientLogin");
  const hospitalForm = document.getElementById("hospitalLogin");

  patientForm.classList.remove("active");
  hospitalForm.classList.remove("active");

  if (type === "patient") {
    patientForm.classList.add("active");
  } else if (type === "hospital") {
    hospitalForm.classList.add("active");
  }
}

// Return to welcome section
function showWelcome() {
  document.querySelector(".welcome-section").style.display = "block";

  document.getElementById("patientLogin")?.classList.remove("active");
  document.getElementById("hospitalLogin")?.classList.remove("active");
}

// Handle login (temporary placeholder logic)
function handleLogin(event, role) {
  event.preventDefault();
  alert(`${role === "patient" ? "Patient" : "Hospital"} login successful!`);
  showWelcome(); // Reset view after login
}

// Init on load
document.addEventListener("DOMContentLoaded", createLoginForms);
