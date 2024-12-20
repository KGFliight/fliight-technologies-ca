import { useRef, useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'

function RequestDemoForm() {
  useEffect(() => {
    AOS.init()
  }, [])

  const recaptchaRef = useRef()
  const formRef = useRef()
  const [isVerified, setIsVerified] = useState(false)

  // Retrieve environment variables
  const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID 
  const HUBSPOT_FORM_GUID_DEMO = import.meta.env.VITE_HUBSPOT_FORM_GUID_DEMO 
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY 
  const ENABLE_RECAPTCHA = 'true'

  // Function to submit data to HubSpot
  const sendToHubSpot = async (formData) => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID_DEMO}`

    const payload = {
      fields: [
        {
          name: 'firstname', // Ensure this matches the internal name in HubSpot
          value: formData.firstname,
        },
        {
          name: 'lastname', // Ensure this matches the internal name in HubSpot
          value: formData.lastname,
        },
        {
          name: 'email',
          value: formData.email,
        },
        {
          name: 'phone',
          value: formData.phone,
        },
        {
          name: 'message',
          value: formData.message,
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
      // Optional: Include legal consent if required by your HubSpot form settings
      // legalConsentOptions: {
      //   consent: {
      //     consentToProcess: true,
      //     text: "I agree to allow [Your Company] to store and process my personal data.",
      //     communications: [
      //       {
      //         value: true,
      //         subscriptionTypeId: 999, // Replace with your subscription type ID if applicable
      //         text: "I agree to receive marketing communications from [Your Company].",
      //       },
      //     ],
      //   },
      // },
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorDetail = await response.json()
      throw new Error(
        `HubSpot submission failed: ${errorDetail.message || response.statusText}`
      )
    }

    return response.json()
  }

  // Function to handle form submission
  const sendEmail = async (e) => {
    e.preventDefault()

    if (ENABLE_RECAPTCHA) {
      if (!isVerified) {
        toast.error('Please verify that you are not a robot.')
        recaptchaRef.current.execute()
        return
      }
    }

    const formData = {
      firstname: formRef.current.firstname.value,
      lastname: formRef.current.lastname.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      message: formRef.current.message.value,
    }

    try {
      await sendToHubSpot(formData)
      toast.success('Message sent successfully')
      formRef.current.reset()
      if (ENABLE_RECAPTCHA) {
        recaptchaRef.current.reset()
      }
      setIsVerified(false)
    } catch (error) {
      console.error(error)
      toast.error(
        'Failed to send message. Please try again later or contact us directly.'
      )
    } finally {
      if (ENABLE_RECAPTCHA) {
        recaptchaRef.current.reset()
      }
    }
  }

  // Function to handle ReCAPTCHA changes
  const onReCAPTCHAChange = (captchaCode) => {
    if (captchaCode) {
      setIsVerified(true)
    } else {
      setIsVerified(false)
      toast.error('reCAPTCHA expired, please verify again.')
    }
  }

  return (
    <div className="my-12 font-['Inter'] font-light">
      <form
        className="flex flex-col gap-4"
        onSubmit={sendEmail}
        ref={formRef}
      >
        {/* First Name Field */}
        <label className="flex flex-col">
          First Name*
          <input
            type="text"
            name="firstname" // Updated name
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your first name?"
          />
        </label>

        {/* Last Name Field */}
        <label className="flex flex-col">
          Last Name*
          <input
            type="text"
            name="lastname" // Updated name
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your last name?"
          />
        </label>

        {/* Email Field */}
        <label className="flex flex-col">
          Email*
          <input
            type="email" // Changed to email type for better validation
            name="email"
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your email address?"
          />
        </label>

        {/* Phone Number Field */}
        <label className="flex flex-col">
          Phone Number*
          <input
            type="tel"
            name="phone"
            required
            pattern="^\+?\d{0,13}"
            title="A valid phone number is required"
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your phone number?"
          />
        </label>

        {/* Message Field */}
        <label className="flex flex-col">
          Message*
          <textarea
            name="message"
            required
            className="bg-ft-dark-grey placeholder-ft-grey rounded h-40 p-2 my-2 placeholder-top"
            placeholder="Please describe your request for a demo and any other relevant details."
          ></textarea>
        </label>

        {/* ReCAPTCHA and Submit Button */}
        {ENABLE_RECAPTCHA ? (
          <div className="w-full justify-center items-center my-4 flex flex-col">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
              className="w-full flex justify-center my-4 mb-8"
            />
            <button
              type="submit" // Changed to 'submit' type for proper form submission
              className="cursor-pointer bg-ft-red rounded-3xl w-72 h-12 sm:w-44 min-h-[2.75rem] hover:opacity-90 hover:bg-[#5b172c] transition duration-300 active:bg-ft-dark-grey"
              data-aos="fade-down-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-offset="0"
              data-aos-mirror="true"
              data-aos-duration="600"
            >
              <span className="uppercase text-base font-semibold leading-tight tracking-widest">
                Send
              </span>
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center my-4">
            <button
              type="submit"
              className="cursor-pointer bg-ft-red rounded-3xl w-72 h-12 sm:w-44 min-h-[2.75rem] hover:opacity-90 hover:bg-[#5b172c] transition duration-300 active:bg-ft-dark-grey"
              data-aos="fade-down-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-offset="0"
              data-aos-mirror="true"
              data-aos-duration="600"
            >
              <span className="uppercase text-base font-semibold leading-tight tracking-widest">
                Send
              </span>
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default RequestDemoForm
