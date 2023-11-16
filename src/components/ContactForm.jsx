import React from 'react'

function ContactForm() {
  return (
    <div className="my-12">
      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          Full Name*
          <input
            type="text"
            name="name"
            className="bg-ft-dark-grey p-1 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your full name?"
          />
        </label>
        <label className="flex flex-col">
          Email*
          <input
            type="text"
            name="email"
            className="bg-ft-dark-grey p-1 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your email address?"
          />
        </label>
        <label className="flex flex-col">
          Phone number*
          <input
            type="text"
            name="phone"
            className="bg-ft-dark-grey p-1 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your phone number?"
          />
        </label>
        <label className="flex flex-col">
          Reason for getting in touch
          <select
            type="text"
            name="why"
            className="bg-ft-dark-grey p-1 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="Select"
          >
            <option value="" disabled>Select</option>
            <option value="general" >General Enquiry</option>
            <option value="technical" >Technical Support</option>
            <option value="feedback" >Feedback</option>
            <option value="requestdemo" >Request a demo</option>
          </select>
        </label>
        <label className="flex flex-col">
          How can we help?* Copy code
          <textarea
            name="message"
            className="bg-ft-dark-grey placeholder-ft-grey rounded h-40 p-1 placeholder-top"
            placeholder="Please describe your problem and where you see us fitting into your project?"
          ></textarea>
        </label>
        <button className="my-4">
          <input
            type="submit"
            value="Send"
            className="bg-rose-700 uppercase rounded-3xl py-2 w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest"
          />
        </button>
      </form>
    </div>
  )
}

export default ContactForm
