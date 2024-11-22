import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import araceAngelBannerImage from '../assets/images/arace-angel-banner.png'
import { NavLink } from 'react-router-dom'
import AraceAngelProductInfo from '../components/AraceAngelProductInfo'
import AraceAngelProductResults from '../components/AraceAngelProductResults'
import AraceAngelProductTechnical from '../components/AraceAngelProductTechnical'
import AraceAngelProductPayloads from '../components/AraceAngelProductPayloads'

//TEMPLATE PRODUCT PAGE BASED OFF OF THE DELTAQUAD EVO PAGE. SOME ASSETS (MAINLY THE IMAGES) HAVE REMAINED THE SAME BUT ARE INTERCHANGEABLE. MOST TEXT HAS BEEN CHANGED TO HELP. 
// USE THE DELTAQUADEVO.JSX PAGE FILE FOR REFERENCE IF NEEDED. ALL TEMPLATE COMPONENTS ARE BASED OFF OF THE RESPONDING COMPONENTS BEGINNING WITH DELTAQUAD
// DELTAQUAD BANNER (line 29) IS A REUSABLE COMPONENT AS IS. CHANGE THE TITLE, IMAGE SOURCE AND SUBHEADING TO CHANGE THE BANNER
// STYLING IS DONE IN TAILWIND

// CHANGE THE COMPONENTS FROM COMPONENTS/templateComponents

// IF IMPLEMENTING THIS TEMPLATE PAGE, BE SURE TO ADJUST THE FOLLOWING:
// MENU ITEMS -> MobileMenu.jsx, Header.jsx, Footer.jsx
// Nav links from App.jsx

// TO START INTEGRATE TO START BUILDING:
// Go to App.jsx
// Uncomment the line which enables the route path /template-product
// run in the terminal npm run dev and go to the url given with the suffix /template-product


function AraceAngel() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <DeltaQuadBanner
          title="Arace Angel"
          imageSrc={araceAngelBannerImage} // change this
          subheading="Rapid deployment. Unparalleled endurance. Exceptional performance."
        />
      </div>
      <AraceAngelProductInfo />
      <AraceAngelProductPayloads />
      <AraceAngelProductResults />
      <AraceAngelProductTechnical />
      <div className="flex flex-col items-center text-center uppercase text-5xl tracking-widest my-40 mx-8">
        We offer onsite demos
        <div className="normal-case text-lg leading-loose tracking-wide max-w-lg my-8 font-light font-['Inter']">
        We let the technology speak for itself, and the best way to do that is for you to see it in action. Contact us today for an on site demonstration with your organisation.
        </div>
        <NavLink to="/request-demo">
          <button className="bg-ft-red uppercase rounded-3xl flex items-center justify-center w-72 h-8 sm:w-44 min-h-[2.75rem] text-base font-semibold leading-tight tracking-widest hover:opacity-90 hover:hover:bg-[#5b172c] transition duration-300">
            Book a demo
          </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default AraceAngel
