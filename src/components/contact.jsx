import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5c39adce-4289-401f-b78e-a6a05966c005");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
              });
        } else {
            Swal.fire({
                title: "Error!",
                text: data.message || "Something went wrong. Please try again.",
                icon: "error",
              });
              setResult(data.message || "An error occurred.");
        }
    };
  return (
    <div id="contact" className="py-20 text-white">
      <h1 className="text-center text-4xl mb-10">Contact</h1>
        <form className="max-w-xl mx-auto space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 mt-4 border border-gray-300 rounded text-black text-base bg-blue-50" required/>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 mt-4 border border-gray-300 rounded text-black text-base bg-blue-50" required/>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea id="message" name="message" className="w-full p-2 mt-4 border border-gray-300 rounded text-black text-base bg-blue-50" rows="4" required/>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-1/5 p-2 mt-4 font-light rounded bg-blue-600">
                Send message
            </button>
          </div>
        </form>
    </div>
  );
}
export default Contact;
