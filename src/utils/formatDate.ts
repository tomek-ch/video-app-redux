function formatDate(timestamp: number) {
  const time = new Date(timestamp);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = String(time.getDate());
  const month = months[time.getMonth()];

  return `${hours}:${minutes}, ${month} ${day}`;
}

export default formatDate;
