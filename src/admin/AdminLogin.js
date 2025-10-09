import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import AdminDashboard from "./AdminDashboard";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return user ? (
    <AdminDashboard user={user} onLogout={handleLogout} />
  ) : (
    <div className="auth-module-container">
      <div className="auth-module-card">
        <h2 className="auth-module-heading">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="auth-form-input-field"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth-form-input-field"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="auth-form-submit-btn" type="submit">
            Login
          </button>
        </form>
        {error && <p className="auth-error-msg active">{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
