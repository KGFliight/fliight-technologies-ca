import emailjs from 'emailjs-com'

function RequestDemoForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s5zd9yh', 'template_brdrre2', e.target, 'L6wCoQNjMIaX3KMFK')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
  };
  return (
    <div className="my-12 font-['Inter'] font-light">
      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <label className="flex flex-col">
          Full Name*
          <input
            type="text"
            name="name"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your full name?"
          />
        </label>
        <label className="flex flex-col">
          Email*
          <input
            type="text"
            name="email"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your email address?"
          />
        </label>
        <label className="flex flex-col">
          Phone number*
          <input
            type="text"
            name="phone"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your phone number?"
          />
        </label>
        {/*<label className="flex flex-col">
          Date preference*
          <input
            type="date"
            name="date"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-black"
            placeholder="Select"
          >
          </input>
  </label>*/}
        <label className="flex flex-col">
          How can we help?*
          <textarea
            name="message"
            className="bg-ft-dark-grey placeholder-ft-grey rounded h-40 p-2 my-2 placeholder-top"
            placeholder="Please describe your problem and where you see us fitting into your project?"
          ></textarea>
        </label>
        <div className="w-full flex justify-center items-center my-4">
          <button className="cursor-pointer bg-ft-red  rounded-3xl w-72 h-8 sm:w-44 min-h-[2.75rem]  hover:opacity-90 hover:bg-[#5b172c] transition duration-300">
            <input
              type="submit"
              value="Send"
              className="uppercase text-base font-semibold leading-tight tracking-widest"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default RequestDemoForm
