const drivers = require('../../data/drivers.json');
const trips = require('../../data/trips.json');
const vehicles = require('../../data/vehicles.json');

function randomIntInc(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export function getTrips() {
  return trips;
}

export function getDrivers() {
  return Object.values(drivers);
}

export function getVehicles() {
  return vehicles;
}

export function getVehiclesByIDs(vehicleIDs: string[]) {
  return vehicleIDs.map(vehicleID => {
    return getVehicle(vehicleID);
  });
}

export function getTrip(tripID: string) {
  const trip = trips.filter((trip: any) => trip.tripID === tripID);

  if (!trip.length) {
    throw new Error('Trip not found');
  }

  return trip[0];
}

export function getDriver(driverID: string) {
  const driver = drivers[driverID];

  if (!driver) {
    throw new Error('Driver not found');
  }

  const profileNum = randomIntInc(1, 9);

  return {
    ...driver,
    photo: `https://randomuser.me/api/portraits/lego/${profileNum}.jpg`,
  };
}

export function getVehicle(vehicleID: string) {
  const vehicle = vehicles[vehicleID];

  if (!vehicle) {
    throw new Error('Vehicle not found');
  }

  return { ...vehicle, vehicleID };
}
