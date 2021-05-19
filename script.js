let curr = new Date;
let firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+1))
               .toLocaleDateString();
let secondDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+2))
                .toLocaleDateString();
let thirdDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+3))
              .toLocaleDateString();
let fourthDay = new Date(curr.setDate(curr.getDate() - curr.getDay())+4)
                .toLocaleDateString();
let fifthDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+5))
               .toLocaleDateString();



const dayTime = {
      weekdays: [firstDay, secondDay, thirdDay,fourthDay,fifthDay,],
      times: ['09:00','10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00'],
      
  };


let day, times, timesRow;

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
    { let mondayCell = document.createElement('td') ;
      mondayCell.className += "Monday"; 
      mondayCell.addEventListener("click", addEvent);
      
      mondayCell.id =  `Monday`;

      let emptyCell2 = document.createElement('td') ;
      emptyCell2.className += "Tuesday"; 
      emptyCell2.addEventListener("click", addEvent);
      emptyCell2.id =  `Tuesday`;

      let emptyCell3 = document.createElement('td') ;
      let emptyCell4 = document.createElement('td') ;
      let emptyCell5 = document.createElement('td') ;

      timesRow = document.createElement('tr');
      time = document.createElement('td');  
      time.innerHTML = dayTime.times[j];    
      timesRow.append(time, mondayCell, emptyCell2,emptyCell3, emptyCell4,emptyCell5);
      table.appendChild(timesRow);
    }
}



const addEvent = () => {
   var event = prompt("Please enter an event for this time", "Reading");
    if (event != null) {
     console.log(`You wan't to do ${event} at this time`)
      
    }
}

// document.getElementsByTagName("td").addEventListener("click", addEvent);

renderCalender();
