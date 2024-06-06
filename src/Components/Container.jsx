import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Filter from './Filter'
import About from './About'
import Services from './Services'
// import Search from './Search'
// import Results from './Results'
import Footer from './Footer'
import Team from './Team'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import Testimonial from './Testimonial'
import Nearest from './Nearest'
import Menu from './Menu'
// import CustomizedTables from './Planel'

export default function Container({data,setData}) {
  
  return (
    <div className=''>
      <Header/>
      <Banner/>
      <Filter data={data} setData={setData}/>
      <About/>
      <Services/>
      <Team/>
      <Nearest datas={data} setData={setData}/>
   {/* <CustomizedTables/> */}
      {/* <>
      <GooglePlacesAutocomplete
      apiKey="4daa9bea11msh78f57d6671a1229p102c7ajsne64b93e90ce4"
      />
    </> */}
  

<Testimonial/>
    <div id='contact' className='w-[100vw] my-[2rem]'>
    <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15389.826220338422!2d75.1347203!3d15.3517409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d753371b096b%3A0xf6f3b73467373c22!2sGanesh%20Travels%20Hubballi%20Office!5e0!3m2!1sen!2sin!4v1717519475188!5m2!1sen!2sin" title='location' className='w-[100%] h-[30rem]' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
    </div>
      {/* <Results/>   */}
      {/* <Search datas={data} /> */}
     <Menu/>
      <Footer/>
    </div>
  )
}
