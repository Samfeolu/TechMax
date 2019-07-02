import { Router } from 'express';
import {
  getTrips,
  getDrivers,
  getDriver,
  getTrip,
  getVehicle,
} from '../controllers/index';

const router = Router();

router.get('/', function(_req, res, _next) {
  res.status(200).json({ message: 'All is well' });
});

router.get('/trips', (_req, res) => {
  const trips = getTrips();

  res.status(200).json({ data: trips });
});

router.get('/trip/:tripID', (req, res) => {
  try {
    const data = getTrip(req.params.tripID);

    res.status(200).json({ data });
  } catch {
    res.status(404).json({ error: 'Trip not found' });
  }
});

router.get('/drivers', (_req, res) => {
  const drivers = getDrivers();

  res.status(200).json({ data: drivers });
});

router.get('/driver/:driverID', (req, res) => {
  try {
    const driver = getDriver(req.params.driverID);

    res.status(200).json({ data: driver });
  } catch {
    res.status(404).json({ error: 'Driver not found' });
  }
});

router.get('/vehicle/:vehicleID', (req, res) => {
  try {
    const vehicle = getVehicle(req.params.vehicleID);

    res.status(200).json({ data: vehicle });
  } catch {
    res.status(404).json({ error: 'Vehicle not found' });
  }
});

router.get('/stats', (_req, res) => {
  res.status(200).json({
    data: {
      male: 30,
      female: 20,
      noOfCashTrips: 26,
      noOfNonCashTrips: 24,
      billedTotal: 128224.69,
      cashBilledTotal: 69043.8,
      nonCashBilledTotal: 59180.89,
    },
  });
});

export default router;
