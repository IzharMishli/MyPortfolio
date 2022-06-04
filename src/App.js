import "./styles/headerStyle.css"
import "./styles/mainStyle.css"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio";
import Credits from "./components/Credits";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {initializeApp} from 'firebase/app';
import { getAnalytics} from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";


function App() {
  
  //creating IP state
  const [clientData, setclientData] = useState({
    country_name: "",
    latitude: "",
    longitude:"",
    city: "",
    ip: "",
    date: ""
  });
  
  const [dataLoaded, setDataLoaded] = useState(false);

  //creating function to load ip address from the API
  async function getData() {
    const res = await axios.get('https://geolocation-db.com/json/');
    var today = new Date();
    setclientData({
      country_name: res.data.country_name,
      latitude: res.data.latitude,
      longitude: res.data.longitude,
      city: res.data.city,
      ip: res.data.IPv4,
      date: String(today)
    })
    setDataLoaded(true);
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
     getData()

  }, [])
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
   //initialize firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function writeUserData(date, data) {
    const key = date.replace(/\./g,' ');
    const db = getDatabase();
    set(ref(db, 'loggins/' + key), data,
     console.log("done"));
  }
  
  
  if (dataLoaded){
    writeUserData(String(clientData.ip) ,clientData);
  }
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />}/>
        <Route path="/MyPortfolio" element={<Portfolio />}/>
        <Route path="/MyPortfolio/credits" element={<Credits />}/>
      </Routes>
    </div>
  );
}

export default App;
