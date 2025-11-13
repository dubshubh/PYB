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

// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");

// // ✅ POST /api/lead — Handle form submissions
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

//     // ✅ Basic validation
//     if (!fullName || !email || !phone) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // ✅ Create transporter using Gmail
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // ✅ Email content
//     const mailOptions = {
//       from: `"Paradise Yatra" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       subject: `New Travel Inquiry from ${fullName}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 15px; background: #fafafa; border-radius: 8px;">
//           <h2 style="color:#333;">📩 New Travel Inquiry</h2>
//           <p><strong>Name:</strong> ${fullName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Destination:</strong> ${destination || "N/A"}</p>
//           <p><strong>Budget:</strong> ${budget || "N/A"}</p>
//           <p><strong>Message:</strong> ${message || "N/A"}</p>
//           <p><strong>Newsletter:</strong> ${
//             newsletterConsent ? "✅ Subscribed" : "❌ Not Subscribed"
//           }</p>
//           ${
//             packageTitle
//               ? `<p><strong>Package:</strong> ${packageTitle}</p>
//                  <p><strong>Price:</strong> ${packagePrice}</p>`
//               : ""
//           }
//           <hr/>
//           <small>🕒 Received: ${
//             timestamp || new Date().toLocaleString()
//           }</small>
//         </div>
//       `,
//       text: `
// New Travel Inquiry

// Name: ${fullName}
// Email: ${email}
// Phone: ${phone}
// Destination: ${destination || "N/A"}
// Budget: ${budget || "N/A"}
// Message: ${message || "N/A"}
// Newsletter: ${newsletterConsent ? "Yes" : "No"}
// Package: ${packageTitle || "N/A"} (${packagePrice || "N/A"})
// `,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log(`✅ Lead received from ${fullName}`);

//     res.status(200).json({
//       success: true,
//       message: "Inquiry submitted successfully",
//     });
//   } catch (error) {
//     console.error("❌ Lead submission error:", error);
//     res.status(500).json({
//       error: "Failed to submit inquiry. Please try again later.",
//     });
//   }
// });

// module.exports = router;

// ✅ Paradise Yatra - Backend Server (FINAL FIXED VERSION FOR EASYPANEL)

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");
// const fs = require("fs");

// // Load environment variables
// dotenv.config();

// const app = express();

// // -------------------------------------------------------
// // Ensure uploads directory exists
// // -------------------------------------------------------
// const uploadsDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // -------------------------------------------------------
// // Middleware
// // -------------------------------------------------------
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploaded images
// app.use("/uploads", express.static(uploadsDir));

// // -------------------------------------------------------
// // 🚀 FIXED CORS CONFIGURATION (WORKS FOR WWW + NON-WWW + LOCALHOST)
// // -------------------------------------------------------
// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "https://paradiseyatra.com",
//   "https://www.paradiseyatra.com",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true); // allow Postman / curl
//       if (allowedOrigins.includes(origin)) return callback(null, true);

//       console.warn(`❌ CORS BLOCKED: ${origin}`);
//       return callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true,
//   })
// );

// // -------------------------------------------------------
// // MongoDB Connection
// // -------------------------------------------------------
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// // -------------------------------------------------------
// // Dynamic Route Loader
// // -------------------------------------------------------
// const safeRoute = (filePath, routeName) => {
//   try {
//     const route = require(filePath);
//     app.use(`/api/${routeName}`, route);
//     console.log(`✅ Loaded route: /api/${routeName}`);
//   } catch (err) {
//     console.warn(`⚠️ Could not load route /api/${routeName}: ${err.message}`);
//   }
// };

// // Load all routes
// safeRoute("./routes/auth", "auth");
// safeRoute("./routes/packages", "packages");
// safeRoute("./routes/destinations", "destinations");
// safeRoute("./routes/blogs", "blogs");
// safeRoute("./routes/admin", "admin");
// safeRoute("./routes/testimonials", "testimonials");
// safeRoute("./routes/hero", "hero");
// safeRoute("./routes/header", "header");
// safeRoute("./routes/cta", "cta");
// safeRoute("./routes/holidayTypes", "holiday-types");
// safeRoute("./routes/upload", "upload");
// safeRoute("./routes/fixedDepartures", "fixed-departures");
// safeRoute("./routes/footer", "footer");
// safeRoute("./routes/locations", "locations");
// safeRoute("./routes/seo", "seo");
// safeRoute("./routes/faq", "faq");

// // ⭐ Lead form route
// safeRoute("./routes/lead", "lead");

// // -------------------------------------------------------
// // Health Check Route
// // -------------------------------------------------------
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "🚀 Paradise Yatra Backend API is running!",
//   });
// });

// // -------------------------------------------------------
// // 404 Handler
// // -------------------------------------------------------
// app.use("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
// });

// // -------------------------------------------------------
// // Global Error Handler
// // -------------------------------------------------------
// app.use((err, req, res, next) => {
//   console.error("❌ SERVER ERROR:", err.stack);
//   res.status(500).json({
//     success: false,
//     message: "Internal Server Error",
//   });
// });

// // -------------------------------------------------------
// // Start Server
// // -------------------------------------------------------
// const PORT = process.env.PORT || 5000;

// connectDB().then(() => {
//   const server = app.listen(PORT, () => {
//     console.log(`🌍 Server running on port ${PORT}`);
//   });

//   server.on("error", (error) => {
//     if (error.code === "EADDRINUSE") {
//       const newPort = PORT + 1;
//       console.warn(`⚠️ Port ${PORT} in use. Retrying on ${newPort}...`);
//       app.listen(newPort, () => {
//         console.log(`✅ Server running on port ${newPort}`);
//       });
//     } else {
//       console.error("Server startup error:", error);
//     }
//   });
// });

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Lead = require("../models/Lead");

// POST /api/lead
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

    // Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1️⃣ Save Lead to MongoDB
    const lead = new Lead({
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
    });

    await lead.save();
    console.log("✅ Lead saved to MongoDB:", lead._id);

    // 2️⃣ Send Email Notification to Admin (You)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Paradise Yatra" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Notification goes to your email
      subject: `📩 New Travel Inquiry from ${fullName}`,
      html: `
        <h2>New Travel Inquiry</h2>
        
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <p><strong>Destination:</strong> ${destination || "Not Provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not Provided"}</p>
        <p><strong>Message:</strong> ${message || "Not Provided"}</p>

        <p><strong>Newsletter Consent:</strong> ${
          newsletterConsent ? "Yes" : "No"
        }</p>

        ${
          packageTitle ? `<p><strong>Package:</strong> ${packageTitle}</p>` : ""
        }
        ${
          packagePrice
            ? `<p><strong>Package Price:</strong> ${packagePrice}</p>`
            : ""
        }

        <hr />
        <p><strong>Submitted At:</strong> ${
          timestamp || new Date().toISOString()
        }</p>
      `,
    });

    // 3️⃣ Send Response to Frontend
    res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("❌ Lead submission error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to submit inquiry",
    });
  }
});

module.exports = router;
