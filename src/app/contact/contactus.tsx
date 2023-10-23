import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      data: {
        ...formData.data,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1337/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show a success notification
        toast.success("Message sent successfully!");
        setFormData({
          data: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          },
        });
      } else {
        toast.error("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="max-w-md mx-auto lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              As a continuation of the 2005/06-2009/10 five-year plan and after
              concentrating its efforts on education, health, and agriculture,
              the Ethiopian government decided to focus on the improvement of
              telecommunication services considering them as a key lever in the
              development of Ethiopia. Ethio telecom was born on 29 November
              2010, from this ambition of supporting the steady growth of our
              country.
            </p>
            <div className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex items-center">
                <BuildingOffice2Icon className="w-6 h-6 text-gray-400" />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">Address</p>
                  <p>545 Mavis Island</p>
                  <p>Chicago, IL 99191</p>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 text-gray-400" />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">Phone</p>
                  <p>
                    <a
                      href="tel:+1 (555) 234-5678"
                      className="hover:text-gray-900"
                    >
                      +1 (555) 234-5678
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-6 h-6 text-gray-400" />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">Email</p>
                  <p>
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-gray-900"
                    >
                      hello@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.data.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.data.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.data.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  name="phoneNumber"
                  value={formData.data.phoneNumber}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.data.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        style={{
          borderRadius: "20px",
        }}
      />
    </section>
  );
}
