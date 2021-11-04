import { Draggable } from "@fullcalendar/interaction";


const EventEl = (props : EventProps) =>{

  let baseEl = document.getElementById('base');
  let draggableEl = document.createElement('div');
  new Draggable(draggableEl, {
    eventData: {
      title: props.title,
      duration: props.duration * 3600000,
    }
  });
  
  // draggableEl.setAttribute("data-event", '{ "title": "my event", "duration": "02:00" }');
  var newContent = document.createTextNode("Event");
  draggableEl.appendChild(newContent);
  document.body.insertBefore(draggableEl, baseEl);
    return(
        <>
        {/* {
          new Draggable(draggableEl, {
            eventData: {
              title: props.title,
              duration: props.duration * 3600000,
            }
          });
        } */}
            <div>
                {/* {draggableEl} */}
                aiueo
            </div>
        </>
    );
}

export default EventEl;

type EventProps = {
  title : string;
  duration : number;
}