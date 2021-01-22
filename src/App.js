import React from 'react';
const api = {
  base: "https://data.cityofnewyork.us/resource/8vwk-6iz2.json?$$app_token=EXt1S7Ta87Credl0ZzYdQOyHH"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Outober", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  } 

  return (
    <div className="app">
        <main>
          <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
          </div>
          <div className="location-box">
            <div className="location">New York, USA </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        </main>
    </div>
  );
}

export default App;