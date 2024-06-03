
import { useState } from 'react';
import Container from './Components/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Search from './Components/Results/Search';
import Searchs from './Components/Results/Search.jsx';
import Results from './Components/Results/Result.jsx';

function App() {
  const [data,setData]=useState({
    From:'',
    To:'',
    Type:'',
    ReturnAt:'',
    PickUp:'',
    PickUpAt:''

})
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Container data={data} setData={setData} />}/>
        
          <Route path="search" element={<Searchs datas={data} setData={setData}/>} />
          <Route path="search/:Cid" element={<Results datas={data} setData={setData}/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
