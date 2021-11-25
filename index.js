const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

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