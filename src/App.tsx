import React from 'react';

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import 'bootstrap/dist/css/bootstrap.min.css'

import Calendar from './calendar';
// import Reserve from './reserve';

import './App.css';

// const thisMonth = () => {
//   const today = new Date();
//   return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,"0")}`;
// };

// document.addEventListener('DOMContentLoaded', function() {
//   let draggableEl = document.getElementById('mydraggable');
//   let calendarEl = document.getElementById('mycalendar');

//   let calendar = new Calendar(calendarEl, {
//     plugins: [ interactionPlugin ],
//     droppable: true
//   });

//   calendar.render();

//   new Draggable(draggableEl);
// });

function App() {

  return (
    <div className="App">
      <main>
        <h2>Full Calendar</h2>
        <Calendar></Calendar>
        {/* <Reserve></Reserve> */}
      </main>
      <br/>
    </div>
  );
}

export default App;