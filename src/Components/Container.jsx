import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Filter from './Filter'
import About from './About'
import Services from './Services'
// import Search from './Search'
import Results from './Results'
import Footer from './Footer'
import Team from './Team'
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import Testimonial from './Testimonial'

export default function Container({data,setData}) {
  
  return (
    <div className=''>
      <Header/>
      <Banner/>
      <Filter data={data} setData={setData}/>
      <About/>
      <Services/>
      <Team/>
      {/* <>
      <GooglePlacesAutocomplete
      apiKey="4daa9bea11msh78f57d6671a1229p102c7ajsne64b93e90ce4"
    />
      </> */}
  

<Testimonial/>
      <Results/>  
      {/* <Search datas={data} /> */}
      <Footer/>
    </div>
  )
}
