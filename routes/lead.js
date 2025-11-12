// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");

// // ✅ Handle lead form submissions
// router.post("/", async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       phone,
//       destination,
//       budget,
//       message,
//       packageTitle,
//       packagePrice,
//       newsletterConsent,
//       timestamp,
//     } = req.body;

//     if (!fullName || !email || !phone) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // ✅ Optional: Email Notification (Gmail SMTP)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER, // send notification to yourself
//       subject: `📩 New Travel Inquiry from ${fullName}`,
//       text: `
// Name: ${fullName}
// Email: ${email}
// Phone: ${phone}
// Destination: ${destination}
// Budget: ${budget}
// Message: ${message}
// Newsletter: ${newsletterConsent ? "Yes" : "No"}
// Package: ${packageTitle || "N/A"} (${packagePrice || "N/A"})
// Received at: ${timestamp}
//       `,
//     });

//     // ✅ Respond success
//     res
//       .status(200)
//       .json({ success: true, message: "Inquiry submitted successfully" });
//   } catch (error) {
//     console.error("❌ Lead submission error:", error);
//     res.status(500).json({ error: "Failed to submit inquiry" });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");

// // ✅ POST /api/lead — handle form submissions from frontend
// router.post("/", async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       phone,
//       destination,
//       budget,
//       message,
//       packageTitle,
//       packagePrice,
//     } = req.body;

//     if (!fullName || !email || !phone) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // ✅ Send Email Notification
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER, // Send lead info to yourself
//       subject: `New Travel Inquiry from ${fullName}`,
//       text: `
//       Name: ${fullName}
//       Email: ${email}
//       Phone: ${phone}
//       Destination: ${destination}
//       Budget: ${budget}
//       Package: ${packageTitle || "N/A"} (${packagePrice || "N/A"})
//       Message: ${message}
//       `,
//     });

//     res.status(200).json({ success: true, message: "Inquiry submitted successfully" });
//   } catch (error) {
//     console.error("❌ Lead submission error:", error);
//     res.status(500).json({ error: "Failed to submit inquiry" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// ✅ POST /api/lead — Handle form submissions
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      destination,
      budget,
      message,
      packageTitle,
      packagePrice,
      newsletterConsent,
      timestamp,
    } = req.body;

    // ✅ Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ✅ Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"Paradise Yatra" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Travel Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 15px; background: #fafafa; border-radius: 8px;">
          <h2 style="color:#333;">📩 New Travel Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Destination:</strong> ${destination || "N/A"}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
          <p><strong>Newsletter:</strong> ${
            newsletterConsent ? "✅ Subscribed" : "❌ Not Subscribed"
          }</p>
          ${
            packageTitle
              ? `<p><strong>Package:</strong> ${packageTitle}</p>
                 <p><strong>Price:</strong> ${packagePrice}</p>`
              : ""
          }
          <hr/>
          <small>🕒 Received: ${
            timestamp || new Date().toLocaleString()
          }</small>
        </div>
      `,
      text: `
New Travel Inquiry

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Destination: ${destination || "N/A"}
Budget: ${budget || "N/A"}
Message: ${message || "N/A"}
Newsletter: ${newsletterConsent ? "Yes" : "No"}
Package: ${packageTitle || "N/A"} (${packagePrice || "N/A"})
`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Lead received from ${fullName}`);

    res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("❌ Lead submission error:", error);
    res.status(500).json({
      error: "Failed to submit inquiry. Please try again later.",
    });
  }
});

module.exports = router;
