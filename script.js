const dayTime = {
      weekdays: ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday',],
      times: ['09:00','10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00']
  };

let table = document.getElementById("schedule");
let weekdays = document.getElementById("weekdays")
let day, times, timesRow;

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
      timesRow = document.createElement('tr');
      time = document.createElement('td');
      time.innerHTML = dayTime.times[j];
      timesRow.appendChild(time);
      table.appendChild(timesRow);
    }
}


renderCalender();