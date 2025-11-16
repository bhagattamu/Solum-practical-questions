import { useState } from "react";

// List of hardcoded dummy users
const users = [
  {
    email: "user1@example.com",
    password: "Password1!",
  },
  {
    email: "user2@example.com",
    password: "Password2@",
  },
];

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState({
    value: "",
    error: "Please enter your email.",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "Please enter your password.",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChangeEmail = (e) => {
    let error = "";
    let valid = true;
    // validate email
    if (!e.target.value) {
      error = "Please enter your email.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      error = "Enter a valid email address.";
      valid = false;
    }
    setEmail({ value: e.target.value, error: valid ? "" : error });
  };

  const handleChangePassword = (e) => {
    let error = "";
    let valid = true;
    // validate password
    if (!e.target.value) {
      error = "Please enter your password.";
      valid = false;
    } else if (e.target.value.length < 8 || e.target.value.length > 16) {
      error = "Password must be between 8 and 16 characters.";
      valid = false;
    }
    // Check if password contains at least one uppercase letter, one lowercase letter, one number, and one special character
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(
        e.target.value
      )
    ) {
      error =
        "Password must include uppercase, lowercase, number, and special character.";
      valid = false;
    }
    setPassword({
      value: e.target.value,
      error: valid ? "" : error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage("");
    if (!email.error && !password.error) {
      // check credentials
      const user = users.find(
        (u) => u.email === email.value && u.password === password.value
      );
      if (user) {
        onLogin(user.email);
      } else {
        setMessage("Invalid email or password.");
      }
    }
  };

  return (
    <div className="login-root">
      <div className="form-wrap" aria-labelledby="loginHeading">
        <div className="brand">
          <div className="logo">T3</div>
          <div>
            <h3 className="title">Sign in to your account</h3>
            <p className="subtitle">Enter your credentials to continue</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {submitted && message && (
            <div className="error" role="alert">
              {message}
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              value={email.value}
              onChange={handleChangeEmail}
              placeholder="you@example.com"
            />
            {email.error && submitted && (
              <div className="error" role="alert">
                {email.error}
              </div>
            )}
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label htmlFor="password">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--accent)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input
              id="password"
              className="input"
              type={showPassword ? "text" : "password"}
              value={password.value}
              onChange={handleChangePassword}
              placeholder="Your password"
            />
            {password.error && submitted && (
              <div className="error" role="alert">
                {password.error}
              </div>
            )}
          </div>

          <button className="btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
