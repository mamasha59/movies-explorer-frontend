const calculateMovieDuration = valueInMinutes => {
    const hours = Math.floor(valueInMinutes / 60);
    const minutes = valueInMinutes % 60;
    let calculatedDuration = `${hours}ч ${minutes}м`;
    if (hours === 0) calculatedDuration = `${minutes}м`;
    if (minutes === 0) calculatedDuration = `${hours}ч`;
    return calculatedDuration;
  };
  
  export default calculateMovieDuration;