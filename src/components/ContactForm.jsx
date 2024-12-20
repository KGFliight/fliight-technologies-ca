import { useRef, useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'

function ContactForm() {
  useEffect(() => {
    AOS.init()
  }, [])

  const recaptchaRef = useRef()
  const formRef = useRef()
  const [isVerified, setIsVerified] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([]) // State for selected products

  // Retrieve environment variables
  const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID
  const HUBSPOT_FORM_GUID = import.meta.env.VITE_HUBSPOT_FORM_GUID
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

  

  // Define product options with separate labels and values
  const productOptions = [
    {
      label: 'Aircraft (RPAS/Drones)',
      value: 'Aircraft (RPAS/ Drones)',
    },
    {
      label: 'Payloads (LiDAR/ISR/Survey)',
      value: 'Payloads (LiDAR/ISR/Survey)',
    },
    {
      label: 'Software (Aerowhere, Voyance, NTRIP)',
      value: 'Software (Aerowhere, Voyance, NTRIP)',
    },
    {
      label: 'Training (RePL/Type/Application)',
      value: 'Training (RePL/ Type / Application)',
    },
    {
      label: 'Mining Solutions (Argus VTS)',
      value: 'Mining Solutions (Argus VTS)',
    },
    {
      label: 'Rajant Solutions',
      value: 'Rajant Solutions',
    },
  ]

  // Function to submit data to HubSpot
  const sendToHubSpot = async (formData) => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`

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
          name: 'interested_products', // New field name
          value: formData.interested_products, // Array of selected products
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
        `HubSpot submission failed: ${
          errorDetail.message || response.statusText
        }`
      )
    }

    return response.json()
  }

  // Function to handle form submission
  const sendEmail = async (e) => {
    e.preventDefault()

    // Optional: Validate that at least one product is selected
    if (selectedProducts.length === 0) {
      toast.error('Please select at least one interested product.')
      return
    }

    if (!isVerified) {
      toast.error('Please verify that you are not a robot.')
      recaptchaRef.current.execute()
      return
    }

    const formData = {
      firstname: formRef.current.firstname.value,
      lastname: formRef.current.lastname.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      interested_products: selectedProducts, // Use state for selected products
      message: formRef.current.message.value,
    }

    // Debugging: Log formData to verify values
    console.log('Form Data:', formData)

    try {
      await sendToHubSpot(formData)
      toast.success('Message sent successfully')
      formRef.current.reset()
      setSelectedProducts([])
      recaptchaRef.current.reset()
      setIsVerified(false)
    } catch (error) {
      console.error(error)
      toast.error(
        'Failed to send message. Please try again later or contact us directly.'
      )
    } finally {
      recaptchaRef.current.reset()
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

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setSelectedProducts((prev) => [...prev, value])
    } else {
      setSelectedProducts((prev) => prev.filter((product) => product !== value))
    }
  }

  console.log('HubSpot Portal ID:', HUBSPOT_PORTAL_ID)
  console.log('HubSpot Form GUID:', HUBSPOT_FORM_GUID)
  console.log('ReCAPTCHA Site Key:', RECAPTCHA_SITE_KEY)

  return (
    <div className="my-12 font-['Inter'] font-light">
      <form className="flex flex-col gap-4" onSubmit={sendEmail} ref={formRef}>
        {/* First Name Field */}
        <label className="flex flex-col">
          First Name*
          <input
            type="text"
            name="firstname"
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
            name="lastname"
            required
            className="bg-ft-dark-grey p-2 my-2 rounded focus:border-green-500 placeholder-ft-grey"
            placeholder="What's your last name?"
          />
        </label>

        {/* Email Field */}
        <label className="flex flex-col">
          Email*
          <input
            type="email"
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

        {/* Interested Products Field with Checkboxes */}
        <fieldset className="flex flex-col">
          <legend className="mb-2">Interested Products*</legend>
          <div className="flex flex-col gap-2">
            {productOptions.map((product, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  name="interested_products"
                  value={product.value} // Use exact internal value
                  checked={selectedProducts.includes(product.value)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-green-500"
                />
                <span className="ml-2">{product.label}</span>{' '}
                {/* Display label */}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Message Field */}
        <label className="flex flex-col">
          How can we help?*
          <textarea
            name="message"
            required
            className="bg-ft-dark-grey placeholder-ft-grey rounded h-40 p-2 my-2 placeholder-top"
            placeholder="Please describe your problem and where you see us fitting into your project?"
          ></textarea>
        </label>

        {/* ReCAPTCHA and Submit Button */}
          <div className="w-full justify-center items-center my-4 flex flex-col">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
              className="w-full flex justify-center my-4 mb-8"
            />
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
      </form>
    </div>
  )
}

export default ContactForm
