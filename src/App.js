
import { useState } from 'react';
import Container from './Components/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Search from './Components/Results/Search';
import Searchs from './Components/Results/Search.jsx';
import Results from './Components/Results/Result.jsx';
import Place from './Components/Place.jsx';
// import axios from 'axios';

function App() {
  const [data,setData]=useState({
    From:'',
    To:'',
    Type:'',
    ReturnAt:'',
    PickUp:'',
    PickUpAt:''

})
// useEffect(()=>{

//   axios.get('http://localhost:8080/api/v1/post').then((data)=>console.log("successfully fetched data")).catch((error)=>console.log(error))
// },[]);
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Container data={data} setData={setData} />}/>
        
          <Route path="search" element={<Searchs datas={data} setData={setData}/>} />
          <Route path="search/:Cid" element={<Results datas={data} setData={setData}/>} />
          <Route path="location/:id" element={<Place datas={data} setData={setData}/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
