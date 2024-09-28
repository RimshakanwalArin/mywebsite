"use client"
import { useState } from 'react';

    function Contact() {
      // Defining state for form fields with TypeScript types
      const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
      });
    
      // Handler to update form state
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Handler for form submission (you can add functionality as needed)
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form data submission
        console.log(formData);

       // Show an alert upon successful submission
        window.alert('Your data has been submitted successfully!');
      };
    
      return (
        <main className="mt-44 border bg-sky-200 justify-center p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <form
            className="md:mt-10 text-sm md:text-base justify-center text-blue-900"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
    
            {/* Company Name Field */}
            <label className="block text-lg font-medium text-gray-700 mt-4" htmlFor="company">
              Company Name
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              type="text"
              name="company"
              id="company"
              placeholder="Enter your Company Name"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
    
            {/* Email Field */}
            <label className="block text-lg font-medium text-gray-700 mt-4" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
    
            {/* Message Field */}
            <label className="block text-lg font-medium text-gray-700 mt-4" htmlFor="message">
              Message
            </label>
            <textarea
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              name="message"
              id="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleInputChange}
            />
    
            {/* Buttons */}
            <div className="space-x-7 mt-6">
              <button
                type="submit" onClick={()=>  handleSubmit}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Submit
              </button>
              <button
                type="reset"
                onClick={() => setFormData({ name: '', company: '', email: '', message: '' })}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reset
              </button>
            </div>
          </form>
        </main>
      );
    }
    
    export default Contact;
    