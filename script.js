let curr = new Date;
let firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+1))
               .toLocaleDateString("en-GB");
let secondDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+2))
                .toLocaleDateString("en-GB");
let thirdDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+3))
              .toLocaleDateString("en-GB");
let fourthDay = new Date(curr.setDate(curr.getDate() - curr.getDay())+4)
                .toLocaleDateString("en-GB");
let fifthDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+5))
               .toLocaleDateString("en-GB");



const dayTime = {
      weekdays: [firstDay, secondDay, thirdDay,fourthDay,fifthDay,],
      times: ['09:00','10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00'],
      
  };


let day, times, timesRow, slot;

let table = document.getElementById("schedule");

let weekdays = document.getElementById("weekdays")



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


const addEvent = (event) => {
 
  let theId = event.target.id;
   slot = document.getElementById(theId);
   let activity = prompt("Please enter an event for this time", "Reading");
    if (event != null) 
    {
      slot.innerHTML = activity
      
    }    
}

renderCalender();
