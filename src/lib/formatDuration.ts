const pad: (num: number) => string = (num) => {
    return `${num}`.padStart(2, '0');
};

const formatDuration: (milliseconds: number) => string = (milliseconds) => {
  
  const asSeconds: number = milliseconds / 1000;

  let hours: number = 0;
  let minutes: number = Math.floor(asSeconds / 60);
  const seconds: number = Math.floor(asSeconds % 60);

  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }

  return hours
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
};

export default formatDuration;
