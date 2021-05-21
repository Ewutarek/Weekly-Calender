let curr = new Date;
let monday = new Date(curr.setDate(curr.getDate() - curr.getDay()+1))
               .toLocaleDateString("en-GB");
let tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay()+2))
                .toLocaleDateString("en-GB");
let wednesday = new Date(curr.setDate(curr.getDate() - curr.getDay()+3))
              .toLocaleDateString("en-GB");
let thursday = new Date(curr.setDate(curr.getDate() - curr.getDay()+4))
                .toLocaleDateString("en-GB");
let friday = new Date(curr.setDate(curr.getDate() - curr.getDay()+5))
               .toLocaleDateString("en-GB");

monday = `Monday:<br>${monday}`;
tuesday = `Tuesday:<br>${tuesday}`
wednesday = `Wednesday:<br>${wednesday}`
thursday = `Thursday:<br>${thursday}`
friday = `Friday:<br>${friday}`



const dayTime = {
      weekdays: [monday, tuesday, wednesday,thursday,friday,],
      times: ['09:00','10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00'],
      
  };


let day, times, timesRow, slot, activity, priority;

let table = document.getElementById("schedule");

let weekdays = document.getElementById("weekdays");

let eventForm = document.getElementById("eventForm");

let msg = document.getElementById("help-text");


const renderCalender = () =>
{
  for(let i =0;i < dayTime.weekdays.length ;i++)
  {
    day = document.createElement('th');
    day.innerHTML = dayTime.weekdays[i];
    weekdays.appendChild(day);  
  }

  for(let j = 0; j < dayTime.times.length; j++ )
  { 
      let mondayCell = document.createElement('td');
      mondayCell.addEventListener("click", addEvent);
      mondayCell.id =`M_${dayTime.times[j]}`;

      let tuesdayCell = document.createElement('td');
      tuesdayCell.addEventListener("click", addEvent);
      tuesdayCell.id =`Tu_${dayTime.times[j]}`;

      let wednesdayCell = document.createElement('td');
      wednesdayCell.addEventListener("click", addEvent);
      wednesdayCell.id =`W_${dayTime.times[j]}`;


      let thursdayCell = document.createElement('td');
      thursdayCell.addEventListener("click", addEvent);
      thursdayCell.id =`Th_${dayTime.times[j]}`;


      let fridayCell = document.createElement('td');
      fridayCell.addEventListener("click", addEvent);
      fridayCell.id =`Fr_${dayTime.times[j]}`;

      timesRow = document.createElement('tr');
      time = document.createElement('td');  
      time.innerHTML = dayTime.times[j];    
      timesRow.append(time, mondayCell, tuesdayCell,wednesdayCell, thursdayCell,fridayCell);
      table.appendChild(timesRow);
  }
}

const submitEvent =(e) => {
  
  e.preventDefault();

  //set actiivity
  activity = document.getElementById("event").value;
  console.log(activity);
  //set priority
  priority = document.getElementById("priority").value;
  
} 

const addEvent = (event) => {

   
   let theId = event.target.id;
   slot = document.getElementById(theId);

   slot.innerHTML = "";

   if (activity != "" && priority == "high")
   {
     slot.style.backgroundColor = `#ff9797`;
   } else if (activity != "" && priority == "medium")
     {
       slot.style.backgroundColor = `#fffd97`;
     } else if (activity != "" && priority == "low")
       {
        slot.style.backgroundColor = `#97ffa8`;
       } else
         {
           slot.style.backgroundColor = `#ffffff`
         }

    if (activity != undefined && event != null) 
    {
      slot.innerHTML = activity
      
    } else
      {
         slot.innerHTML = ""
      }


}

renderCalender();
