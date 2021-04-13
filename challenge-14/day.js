const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function isDay(dayOfWeek) {
  if (days.includes(dayOfWeek)) return true;
}

console.log(isDay('Monday'));

console.log(isDay('shit'));
