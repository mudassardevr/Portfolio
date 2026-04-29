import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    title: "Protfolio Contact",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = () => {
    console.log(form); //

    if (!form.name || !form.email || !form.message) {
      console.log("Please fill all fields");
    }

    setLoading(true); //start loading

    emailjs
      .send(
        "service_z486kst",
        "template_s5lk9na",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "T460NZTN-3A5IU3nE",
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        console.log("Message sent successfully ");
        setForm({ name: "", email: "", message: "" });
        setLoading(false); // stop loading
      })
      .catch((error) => {
        console.log("FAILED...", error);
        console.log("Something went wrong ❌");
        setLoading(false); // stop loading
      });
    //alert/notification
  };

  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  return (
    <>
      <div className="text-3xl font-bold text-center mb-5">Contact</div>

      <div
        className="max-w-xl mx-auto p-8 mb-6 
bg-[#161616] border border-[#222] 
rounded-2xl shadow-lg"
      >
        {/* -----------Name------------ */}
        <div>
          <label className="text-sm text-gray-400">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleOnChange}
            type="text"
            placeholder="Enter Your Name"
            className="w-full mt-1 px-4 py-3 
      bg-[#0e0e0e] border border-[#2a2a2a] rounded-lg 
      text-white text-sm placeholder-gray-500
      focus:outline-none focus:border-[#5DCAA5]
      focus:shadow-[0_0_10px_rgba(93,202,165,0.2)]
      transition-all duration-300"
          />
        </div>

        {/* -----------Email------------ */}
        <div className="mt-5">
          <label className="text-sm text-gray-400">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleOnChange}
            type="email"
            placeholder="Enter Your Email"
            className="w-full mt-1 px-4 py-3 
      bg-[#0e0e0e] border border-[#2a2a2a] rounded-lg 
      text-white text-sm placeholder-gray-500
      focus:outline-none focus:border-[#5DCAA5]
      focus:shadow-[0_0_10px_rgba(93,202,165,0.2)]
      transition-all duration-300"
          />
        </div>

        {/* -----------Message------------ */}
        <div className="mt-5">
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleOnChange}
            rows={5}
            placeholder="Type Your Message"
            className="w-full mt-1 px-4 py-3 
      bg-[#0e0e0e] border border-[#2a2a2a] rounded-lg 
      text-white text-sm placeholder-gray-500 resize-none
      focus:outline-none focus:border-[#5DCAA5]
      focus:shadow-[0_0_10px_rgba(93,202,165,0.2)]
      transition-all duration-300"
          ></textarea>
        </div>

        {/* -----------Button------------ */}
        <button
          onClick={handleSendEmail}
          disabled={!isFormValid || loading}
          className={`w-full mt-6 py-3 rounded-lg font-medium 
    transition-all duration-300
    ${
      !isFormValid || loading
        ? "bg-[#333] text-gray-500 cursor-not-allowed"
        : "bg-[#5DCAA5] text-black hover:bg-[#4db893] hover:shadow-[0_0_15px_rgba(93,202,165,0.3)]"
    }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </>
  );
}

export default Contact;
