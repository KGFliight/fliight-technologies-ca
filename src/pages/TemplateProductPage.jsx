import Header from '../components/Header'
import Footer from '../components/Footer'
import DeltaQuadBanner from '../components/DeltaQuadXxxBanner'
import deltaQuadEvoBannerImage from '../assets/images/deltaquad-evo-banner.jpg'
import { NavLink } from 'react-router-dom'
import TemplateProductInfo from '../components/templateComponents/TemplateProductInfo'
import TemplateProductPayloads from '../components/templateComponents/TemplateProductPayloads'
import TemplateProductResults from '../components/templateComponents/TemplateProductResults'
import TemplateProductTechnical from '../components/templateComponents/TemplateProductTechnical'

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


function DeltaQuadEvo() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        <DeltaQuadBanner
          title="CHANGE ME"
          imageSrc={deltaQuadEvoBannerImage} // change this
          subheading="I am a subheading. You can change me. Please change me. I need to change. Help."
        />
      </div>
      <TemplateProductInfo />
      <TemplateProductPayloads />
      <TemplateProductResults />
      <TemplateProductTechnical />
      <div className="flex flex-col items-center text-center uppercase text-5xl tracking-widest my-40 mx-8">
        We offer onsite demos
        <div className="normal-case text-lg leading-loose tracking-wide max-w-lg my-8 font-light font-['Inter']">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          inventore mollitia illum? Corporis, sequi neque.
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

export default DeltaQuadEvo
