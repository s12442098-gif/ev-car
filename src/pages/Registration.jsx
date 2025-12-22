import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

export default function Registration() {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    
    const payload = {
      fullName: form.fullName,
      username: form.username,
      email: form.email,
      phone: form.phone,
      password: form.password,
      gender: form.gender,
      createdAt: new Date().toISOString(),
    };

    try {
      
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      
      localStorage.setItem("registered_user", JSON.stringify(payload));

      alert("Registered ✅");

      setForm({
        fullName: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "male",
      });
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <Navbar />

      <main className="reg-page">
        <div className="reg-card">
          <h2 className="reg-title">Registration</h2>
          <div className="reg-line" />

          {error && <p className="reg-error">{error}</p>}

          <form onSubmit={handleSubmit} className="reg-form">
            <div className="reg-grid">
              <div className="reg-field">
                <label>Full Name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Username</label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Password</label>
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>
            </div>

            <div className="reg-gender">
              <h4>Gender</h4>

              <label className="reg-radio">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label className="reg-radio">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label className="reg-radio">
                <input
                  type="radio"
                  name="gender"
                  value="prefer_not_to_say"
                  checked={form.gender === "prefer_not_to_say"}
                  onChange={handleChange}
                />
                Prefer not to say
              </label>
            </div>

            <button className="reg-btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
