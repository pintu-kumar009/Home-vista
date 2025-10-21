// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App








import React from "react";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PropertyDetailsPage from "./component/Search_img_view/PropertyDetailsPage";

import PropertyList from "./component/Search_img_view/PropertyList";
import Backgroundfile from "./component/Search_img_view/Backgroundfile";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router> 
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Backgroundfile />} />
          <Route exact path="/properties" element={<PropertyList />} />


          <Route path="/property/:id" element={<PropertyDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
