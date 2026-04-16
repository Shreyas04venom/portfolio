import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import '../index.css'

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Import MDBootstrap components
import { MDBFooter } from 'mdb-react-ui-kit';

const SERVICE_ID = 'service_2zksqjd';
const CONTACT_TEMPLATE_ID = 'template_9mqhamk';   // email to you (admin)
const AUTOREPLY_TEMPLATE_ID = 'template_e1e95bx'; // auto-reply to sender
const PUBLIC_KEY = 'nhR2mpvLbA1xXP7np';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      // 1) Send contact email to admin
      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shreyas Mastery",
          from_email: form.email,
          to_email: "shreyasmahajan0306@gmail.com",
          user_email: form.email, // alias
          email: form.email,      // alias
          message: form.message,
          reply_to: form.email,
        },
        PUBLIC_KEY
      );

      // 2) Send auto-reply to the user
      await emailjs.send(
        SERVICE_ID,
        AUTOREPLY_TEMPLATE_ID,
        {
          to_name: form.name,
          to_email: form.email,
          user_email: form.email, // alias
          email: form.email,      // alias
          from_email: "shreyasmahajan0306@gmail.com",
          from_name: "Shreyas Mastery",
          reply_to: "shreyasmahajan0306@gmail.com",
          message: form.message,
        },
        PUBLIC_KEY
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error("EmailJS Error:", error);
      alert(`Ahh, something went wrong. Please try again.\nError Details: ${error?.text || error?.message || JSON.stringify(error)}`);
    }
  };

  return (
    <div className="flex flex-col min-h-[auto]">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <MDBFooter bgColor="primary" className="text-white text-center text-lg-left mt-20 w-full rounded-2xl">
        <div className="text-center p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright: Studying at{' '}
          <a className="text-white font-bold" href="https://frcrce.ac.in/">
            FRCRCE
          </a>
        </div>
      </MDBFooter>
    </div>
  );

};

export default SectionWrapper(Contact, "contact");
