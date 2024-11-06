const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController');
const activityController = require('../controllers/activityController');

// Add API routes here
router.get('/trip', tripController.getTrip);
router.get('/name', tripController.getTripName);


module.exports = router;