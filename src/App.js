// import { useState } from "react";
// import './App.css';
// import test from "./Component/Test";


// const App =()=>{

//   const [imageUrl,setImageUrl] = useState('');
//   const [name,setName] = useState('');
//   const [city,setCity] = useState('');
//   const [position,setPosition] = useState('');
//   const [myData,setMyData] = useState([]);

//   console.log(myData);

//   return(
//     <div className="main__Container">
//       <div className="main__left">
//         <input type="text" value={imageUrl}  onChange={(e)=>{
//           e.preventDefault()
//           setImageUrl(e.target.value)
//         }}/>
//         <input type="text" value={name} onChange={(e)=>{
//           e.preventDefault()
//           setName(e.target.value)
//         }}/>
//         <input type="text" value={city} onChange={(e)=>{
//           e.preventDefault()
//           setCity(e.target.value)
//         }}/>
//         <input type="text" value={position} onChange={(e)=>{
//           e.preventDefault()
//           setPosition(e.target.value)
//         }}/>
//         <button onClick={()=>{
//           setMyData(
//             (pre)=>{
//               return[...pre,{
//                 image:imageUrl,
//                 name,
//                 city,
//                 position,
//               }]
//             }
//           )

//           setImageUrl((pre)=>{
//             if (pre.length>0){
//               return '';
//             } else return pre;
//           });

//           setName((pre)=>{
//             if(pre.length>0){
//               return'';
//             } else return pre;
//           });

//           setCity((pre)=>{
//             if(pre.length>0){
//               return'';
//             } else return pre;
//           });

//           setPosition((pre)=>{
//             if(pre.length>0){
//               return'';
//             }else return pre;
//           });
//         }}>Submit</button>
//       </div>
//       <div className="main__right">
//         {myData?.map(({image,name,city,position},index)=>(
//           <test image={image} name={name} city={city} position={position} key={index}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './View/Home';
import ContactUs from './View/ContactUs';
import InvestmentFarm from './View//InvestmentFarm';
import PlantCare from './View//PlantCare';
import MarketPlace from './View//MarketPlace';



const App = () => {
  return (
    <div>
      <Router>
        {/* <Home/> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/InvestmentFarm" element={<InvestmentFarm/>}/>
        <Route path="/PlantCare" element={<PlantCare/>}/>
        <Route path='/MarketPlace' element={<MarketPlace/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;