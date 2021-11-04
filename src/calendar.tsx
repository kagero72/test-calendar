import FullCalendar, { EventClickArg } from "@fullcalendar/react";
// import { Button, Container, Row, Col, Form, FloatingLabel, FormControlProps, FormControl } from 'react-bootstrap';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useCallback } from "react";

const Calendar = () => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    // alert(arg.dateStr)
    console.log(arg)
  }, [])

  const handleEventClick = useCallback((arg: EventClickArg) => {
    console.log(arg.event.title)

    if(arg.event.title === '空')
    {
      // ページ遷移
      alert("ページ遷移")
    }
  }, [])

  let vacancyCodes = []
  for(let i = 0; i < 180; i++){
    let r = Math.floor( Math.random() * 3);
    vacancyCodes.push(r);
  }

  const GetVacantInfo = (code : number, date : Date) => {
    let vacantTypes = [
      {
        title: '空',
        color: '#22bb22',
        start: '',
      },
      {
        title: '満',
        color: '#cc0000',
        start: '',
      },
      {
        title: '休',
        color: '#777777',
        start: '',
      },  
    ]

    let vacantInfo = vacantTypes[code];
    vacantInfo.start = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    return vacantInfo;
  }

  // 仮のランダムな予約
  let reservations = []
  for(let i = 0; i < 180; i++){
    let day = new Date()
    day.setDate( day.getDate() + i );
    reservations.push(GetVacantInfo(vacancyCodes[i], day));
  }

  return(
    <>
      <FullCalendar
        themeSystem='Minty'
        plugins={[dayGridPlugin, timeGridPlugin,listPlugin ,interactionPlugin]}
        locales={allLocales}
        locale="ja"
        timeZone='Asia/Tokyo'
        // initialView="dayGridMonth"
        // droppable={true}
        // editable={true}
        // selectable={true}
        // selectMinDistance={1}
        // customButtons={{
        //     new: {
        //         text: 'new',
        //         click: () => console.log('new event'),
        //     },
        // }}
        headerToolbar={{
            end: 'prev,today,next', //timeGridWeek 
        }}
        // footerToolbar={{
        //     end: 'listDay,listWeek,listMonth dayGridMonth,timeGridWeek,timeGridDay prev,today,next',
        // }}
        buttonText= {{
            today: '今月',
            // listDay: '今日の予定',
            // listWeek: '今週の予定',
            // listMonth: '今月の予定',
        }}
        events = {reservations}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </>
  );
}

export default Calendar