import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SingleView from './components/SingleView';


function App() {
  const [searchData, setSearchData] = useState('')
  return (
    <div className="App">
      <Header setSearchData={setSearchData} />

      <Routes>
        <Route path="" element={<Home searchData={searchData} />}></Route>
        <Route path="/singleView/:idMeal" element={<SingleView />}></Route>


      </Routes>

      <Footer />


    </div>
  );
}

export default App;
