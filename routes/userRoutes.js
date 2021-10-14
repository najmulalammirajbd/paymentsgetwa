import express from 'express';
import {
  getUserPaymentData,
  saveUserPaymentData,
  getPaymentStatus
} from '../controller/userController.js';

const router = express.Router();

//send user info and create payment link and save transaction id with user details in user collection
router
  .route('/createPaymentLink')
  .get(saveUserPaymentData);

//get payment status & save payment data to paymentDetails collection
router
  .route('/getUserPaymentStatus')
  .get(getUserPaymentData);

router
  .route('/getpaymentStatus')
  .get(getPaymentStatus)

export default router;
