
import { useEffect, useState } from 'react';
import Container from './Components/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Search from './Components/Results/Search';
import Searchs from './Components/Results/Search.jsx';
import Results from './Components/Results/Result.jsx';
import Place from './Components/Place.jsx';
// import CustomizedTables from './Components/Planel.jsx';
// import axios from 'axios';
import Tac from './Components/Tac.jsx'
// import CustomizedTables from './Components/Panel.jsx';
import axios from 'axios';
function App() {
  const [data,setData]=useState({
    From:'',
    To:'',
    Type:'',
    ReturnAt:'',
    PickUp:'',
    PickUpAt:''

})

useEffect(()=>{

  axios.get('https://carsbackend-3oe0.onrender.com/api/v1/post').then((data)=>console.log(data)).catch((error)=>console.log(error))
},[]);
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Container data={data} setData={setData} />}/>
        
          <Route path="search" element={<Searchs datas={data} setData={setData}/>} />
          <Route path="t&c" element={ <Tac/>} />
          <Route path="search/:Cid" element={<Results datas={data} setData={setData}/>} />
          <Route path="location/:id" element={<Place datas={data} setData={setData}/>} />
          {/* {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="/panel" element={<CustomizedTables />} /> */}
       
      </Routes>
      </BrowserRouter>
    
   </div>
  );
}

export default App;
