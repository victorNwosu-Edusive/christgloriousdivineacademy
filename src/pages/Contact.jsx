import React, { useState } from "react";
import emailjs from "emailjs-com";
import ScrollToTop from "../components/scrolltotop";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_686v7rd", // Replace with your EmailJS Service ID
        "template_qje4cjq", // Replace with your EmailJS Template ID
        {
          username: formData.username,
          email: formData.email,
          telephone: formData.telephone,
          subject: formData.subject,
          message: formData.message,
        },
        "HuwuNE4VUAmAxB8z6" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setFormData({
            username: "",
            email: "",
            telephone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <>
      <ScrollToTop />
      <main>
        <section className="p-20 pt-40 md:p-28 lg:p-28 md:pt-52 lg:pt-52 bg-contact-banner bg-blue-700 bg-blend-overlay bg-no-repeat bg-cover">
          <h1 className="text-4xl md:text-5xl lg:text-5xl mb-4 text-white">Contact us</h1>
          <h1 className="text-white text-sm md:text-xl lg:text-xl">
            /Christ Glorious Divine Academy
          </h1>
        </section>

        <section className="p-9 md:p-28 lg:p-28 items-center justify-center flex">
          <div>
            <h1 className="text-2xl md:text-4xl mb-5 lg:text-4xl text-center">
              Get In Touch With Us
            </h1>
            <div className="grid md:grid-cols-2 gap-5 mb-7">
              <div className="bg-blue-100/45 rounded-xl p-5 border-spacing-4 border-blue-100 border-[2px]">
                <h1 className="text-xl mb-3 md:text-xl lg:text-xl font-bold">
                  Address
                </h1>
                <p>
                  Uhunoke Area, Obenevboweribo Community, B/C. Close to UBTH
                  Staff Quarter, Benin City, Edo State.
                </p>
              </div>
              <div className="bg-blue-100/45 rounded-xl p-5 border-spacing-4 border-blue-100 border-[2px]">
                <h1 className="text-xl mb-3 font-bold">Telephone</h1>
                <p>
                  08054949885 <br /> 08166532117 <br /> 08071271525
                </p>
              </div>
            </div>
            <p className="text-sm md:text-xl lg:text-xl mb-9 text-center">
              You can use the form below to contact us for more details about
              our school and admissions
            </p>
            <form
              onSubmit={handleSubmit}
              className="p-5 *:my-2 rounded-md border-slate-400 border-[1px]"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-2 *:w-full *:duration-300 *:p-2 gap-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name*"
                  value={formData.username}
                  onChange={handleChange}
                  className="outline-none focus:border-black border-[1px]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-none focus:border-black border-[1px]"
                  required
                />
                <input
                  type="text"
                  name="telephone"
                  placeholder="Phone Number*"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="outline-none focus:border-black border-[1px]"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className="outline-none focus:border-black border-[1px]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="outline-none focus:border-black border-[1px] md:col-span-2 h-64"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-2xl border-black border-[2px] p-2 px-8 hover:bg-blue-800 hover:text-white duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
