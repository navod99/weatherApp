import React, { useEffect, useState } from "react";
import cities from "../asserts/data/cities.json";
import axios from "axios";
import Showcase from "./Showcase";
import bgImg from "../asserts/images/bg2.jpg";


const Home = () => {

    
    const [cityList, setCityList] = useState([]);
  const [newCityList, setNewCityList] = useState([]);

  useEffect(() => {
    setCityList(cities.List);
    for (let i = 0; i < cities.List.length; i++) {
      let cityC = cities.List[i].CityCode;
      axios
        .get
        (`https://api.openweathermap.org/data/2.5/group?id=${cityC}&units=metric&appid=062f058e4a1ad81bfa4e9e6b6f08b772`)
        .then((res) => {
          console.log(res);
          setNewCityList((oldArray) => [...oldArray, res.data.list[0]]);
        })
        .catch((err) => {
          console.log(err,"hi");
        });
    }
  }, []);

//   useEffect(() => {
//     console.log(newCityList);
//   }, [newCityList]);
    
    return (
        <div className='Home'>
            {/* <img className="bgimg" src={bgImg} /> */}
            <Showcase newCityList={newCityList} />



        </div>
    );
}

export default Home;
