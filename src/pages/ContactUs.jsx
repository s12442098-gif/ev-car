import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("contact_message", JSON.stringify(form));

    alert("Message sent ✅");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
  }

  return (
    <div className="page">
      <Navbar />

      <div className="contact-page">
        <div className="contact-card">
          <h2 className="contact-title">Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-grid">
              <div className="field">
                <label>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                  required
                />
              </div>

              <div className="field">
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                  required
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder=""
                  required
                />
              </div>

              <div className="field">
                <label>Mobile</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  type="tel"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="field field-full">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=""
                rows={10}
                required
              />
            </div>

            <button className="contact-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}