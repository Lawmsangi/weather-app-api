import { DateTime } from './Luxon.js';

const displayTime = () => {
  const date = document.getElementById('date');

  const updateTime = () => {
    const now = DateTime.now();
    const formattedTime = now.toLocaleString(DateTime.DATETIME_MED);
    date.innerHTML = formattedTime;
  };
  updateTime();
  setInterval(updateTime, 1000);
};

export default displayTime;
