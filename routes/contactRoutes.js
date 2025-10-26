const express = require('express');
const { body, validationResult } = require('express-validator');
const { submitForm, getContacts } = require('../controllers/contactController');

const router = express.Router();

router.post('/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').isLength({ min: 5 }).withMessage('Message must be at least 5 chars long'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  submitForm
);

// Note: In a real app protect this route with auth
router.get('/', getContacts);

module.exports = router;
