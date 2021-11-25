const { nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('70.70.248.100', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });

// const myCoord = {latitude: 49.1049, longitude: -122.824};
// fetchISSFlyOverTimes(myCoord, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!:" , error)
//     return;
//   }
//   console.log('It worked! Returned fly over times:', flyOverTimes)
// });

const printPassTimes = (passTimes) => {
  passTimes.forEach( pass => {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }) 
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});