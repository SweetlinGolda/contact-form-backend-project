const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Using a reusable transporter; if EMAIL_USER is not set, we skip sending emails (useful for local testing)
function createTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
}

exports.submitForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    const transporter = createTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: `"Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      }).catch(err => console.error('Mail error (admin):', err.message));

      await transporter.sendMail({
        from: `"Support" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We received your message",
        text: `Hello ${name},\n\nThank you for reaching out. Our team will reply soon.`
      }).catch(err => console.error('Mail error (user):', err.message));
    } else {
      console.log('EMAIL_USER/PASS not set — skipping email send (local test mode)');
    }

    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};
