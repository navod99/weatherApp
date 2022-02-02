import React, { useEffect, useState } from 'react';

const Updatedtime=({city})=> {
    const[unixTimeStamp,setUnixTimeStamp]=useState();
    var date = new Date(unixTimeStamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    useEffect(() => {
        setUnixTimeStamp(city.dt);
       
    }, []);
    
  return( 
  <div>
      Updated Time : {formattedTime}

  </div>
    
  );
}

export default Updatedtime;
