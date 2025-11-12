// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");
// const fs = require("fs");

// // Load environment variables
// dotenv.config({ path: path.join(__dirname, ".env") });

// const app = express();

// // Create uploads directory if it doesn't exist
// const uploadsDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Middleware
// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   process.env.CLIENT_ORIGIN,
// ].filter(Boolean);

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploaded files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // MongoDB Connection
// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   console.error("MONGODB_URI environment variable is not set");
//   process.exit(1);
// }

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log("Connected to MongoDB Atlas successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//   }
// };

// // Connect to database
// connectDB();

// // Routes
// const authRoutes = require("./routes/auth");
// const packageRoutes = require("./routes/packages");
// const destinationRoutes = require("./routes/destinations");
// const blogRoutes = require("./routes/blogs");
// const adminRoutes = require("./routes/admin");
// const testimonialRoutes = require("./routes/testimonials");
// const heroRoutes = require("./routes/hero");
// const headerRoutes = require("./routes/header");
// const ctaRoutes = require("./routes/cta");
// const holidayTypeRoutes = require("./routes/holidayTypes");
// const uploadRoutes = require("./routes/upload");
// const fixedDepartureRoutes = require("./routes/fixedDepartures");
// const footerRoutes = require("./routes/footer");
// const locationRoutes = require("./routes/locations");
// const seoRoutes = require("./routes/seo");
// const faqRoutes = require("./routes/faq");

// app.use("/api/auth", authRoutes);
// app.use("/api/packages", packageRoutes);
// app.use("/api/destinations", destinationRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/testimonials", testimonialRoutes);
// app.use("/api/hero", heroRoutes);
// app.use("/api/header", headerRoutes);
// app.use("/api/cta", ctaRoutes);
// app.use("/api/holiday-types", holidayTypeRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/fixed-departures", fixedDepartureRoutes);
// app.use("/api/footer", footerRoutes);
// app.use("/api/locations", locationRoutes);
// app.use("/api/seo", seoRoutes);
// app.use("/api/faq", faqRoutes);

// // Basic route
// app.get("/", (req, res) => {
//   res.json({ message: "Paradise Yatra API is running!" });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     message: "Something went wrong!",
//     error:
//       process.env.NODE_ENV === "development"
//         ? err.message
//         : "Internal server error",
//   });
// });

// // 404 handler
// app.use("*", (req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     await connectDB();

//     const server = app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });

//     server.on("error", (error) => {
//       if (error.code === "EADDRINUSE") {
//         console.log(`Port ${PORT} is busy, trying port ${PORT + 1}...`);
//         const newPort = PORT + 1;
//         app.listen(newPort, () => {
//           console.log(`Server is running on port ${newPort}`);
//         });
//       } else {
//         console.error("Server error:", error);
//       }
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();

// upr k code hide kiya

// ✅ Paradise Yatra - Backend Server (Final Fixed Version)

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");
// const fs = require("fs");

// // ✅ Load environment variables from .env
// dotenv.config();

// const app = express();

// // ✅ Ensure uploads directory exists
// const uploadsDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // ✅ Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Serve uploaded files (for Cloudinary/local image access)
// app.use("/uploads", express.static(uploadsDir));

// // ✅ CORS Configuration
// const allowedOrigins = [
//   "http://localhost:3000", // local frontend
//   "http://localhost:3001",
//   process.env.CLIENT_ORIGIN, // production frontend (e.g., easypanel)
// ].filter(Boolean);

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true); // allow requests like Postman
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       console.warn(`⚠️ CORS blocked origin: ${origin}`);
//       return callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true,
//   })
// );

// // ✅ MongoDB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// // ✅ Helper to safely load routes
// const safeRoute = (filePath, routeName) => {
//   try {
//     const route = require(filePath);
//     app.use(`/api/${routeName}`, route);
//     console.log(`✅ Route loaded: /api/${routeName}`);
//   } catch (err) {
//     console.warn(`⚠️ Failed to load route ${routeName}: ${err.message}`);
//   }
// };

// // ✅ Load All Routes Dynamically
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

// // ✅ NEW: Lead Capture Route (for LeadCaptureForm)
// safeRoute("./routes/lead", "lead");

// // ✅ Health Check Endpoint
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "🚀 Paradise Yatra API is running successfully!",
//   });
// });

// // ✅ 404 Handler
// app.use("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
// });

// // ✅ Global Error Handler (for async errors)
// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err.stack);
//   res.status(500).json({
//     success: false,
//     message: "Internal Server Error",
//     error: process.env.NODE_ENV === "development" ? err.message : undefined,
//   });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;

// connectDB().then(() => {
//   const server = app.listen(PORT, () => {
//     console.log(`🌍 Server running on port ${PORT}`);
//   });

//   // Handle Port Conflicts Gracefully
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

// iske upr aj 12 nov ko kiya
// ✅ Paradise Yatra - Backend Server (Fixed Image Handling)
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");
// const fs = require("fs");
// const mime = require("mime-types");

// dotenv.config();
// const app = express();

// // ✅ Ensure uploads folder exists
// const uploadsDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // ✅ Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // ✅ Serve uploaded files safely with MIME type
// app.use("/uploads", (req, res, next) => {
//   const filePath = path.join(uploadsDir, req.path);
//   if (fs.existsSync(filePath)) {
//     const contentType = mime.lookup(filePath) || "application/octet-stream";
//     res.setHeader("Content-Type", contentType);
//   }
//   next();
// });
// app.use("/uploads", express.static(uploadsDir));

// // ✅ CORS Configuration
// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   process.env.CLIENT_ORIGIN, // e.g. https://paradiseyatra.com
// ].filter(Boolean);

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       console.warn(`⚠️ CORS blocked origin: ${origin}`);
//       return callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true,
//   })
// );

// // ✅ MongoDB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// // ✅ Safe route loader
// const safeRoute = (filePath, routeName) => {
//   try {
//     const route = require(filePath);
//     app.use(`/api/${routeName}`, route);
//     console.log(`✅ Route loaded: /api/${routeName}`);
//   } catch (err) {
//     console.warn(`⚠️ Failed to load route ${routeName}: ${err.message}`);
//   }
// };

// // ✅ Load Routes
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
// safeRoute("./routes/lead", "lead");

// // ✅ Health Check
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "🚀 Paradise Yatra API is running successfully!",
//   });
// });

// // ✅ 404 Handler
// app.use("*", (req, res) => {
//   res.status(404).json({ success: false, message: "Route not found" });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err.stack);
//   res.status(500).json({
//     success: false,
//     message: "Internal Server Error",
//     error: process.env.NODE_ENV === "development" ? err.message : undefined,
//   });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5000;
// connectDB().then(() => {
//   const server = app.listen(PORT, () => {
//     console.log(`🌍 Server running on port ${PORT}`);
//   });

//   server.on("error", (error) => {
//     if (error.code === "EADDRINUSE") {
//       const newPort = PORT + 1;
//       console.warn(`⚠️ Port ${PORT} in use. Retrying on ${newPort}...`);
//       app.listen(newPort, () =>
//         console.log(`✅ Server running on port ${newPort}`)
//       );
//     } else {
//       console.error("Server startup error:", error);
//     }
//   });
// });

// iske upr raat ko kiya 12 bje k krib

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const mime = require("mime-types");

dotenv.config();
const app = express();

// ✅ Ensure uploads folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve uploaded files safely with correct MIME type
app.use("/uploads", (req, res, next) => {
  const filePath = path.join(uploadsDir, req.path);
  if (fs.existsSync(filePath)) {
    const contentType = mime.lookup(filePath) || "application/octet-stream";
    res.setHeader("Content-Type", contentType);
  }
  next();
});
app.use("/uploads", express.static(uploadsDir));

// ✅ CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://paradiseyatra.com", // ✅ Your live frontend
  process.env.CLIENT_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`⚠️ CORS blocked origin: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ✅ MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// ✅ Import routes manually (avoid dynamic loader issues)
const authRoute = require("./routes/auth");
const packagesRoute = require("./routes/packages");
const destinationsRoute = require("./routes/destinations");
const blogsRoute = require("./routes/blogs");
const adminRoute = require("./routes/admin");
const testimonialsRoute = require("./routes/testimonials");
const heroRoute = require("./routes/hero");
const headerRoute = require("./routes/header");
const ctaRoute = require("./routes/cta");
const holidayTypesRoute = require("./routes/holidayTypes");
const uploadRoute = require("./routes/upload");
const fixedDeparturesRoute = require("./routes/fixedDepartures");
const footerRoute = require("./routes/footer");
const locationsRoute = require("./routes/locations");
const seoRoute = require("./routes/seo");
const faqRoute = require("./routes/faq");
const leadRoute = require("./routes/lead"); // ✅ MANUAL IMPORT FIX

// ✅ Register routes
app.use("/api/auth", authRoute);
app.use("/api/packages", packagesRoute);
app.use("/api/destinations", destinationsRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/admin", adminRoute);
app.use("/api/testimonials", testimonialsRoute);
app.use("/api/hero", heroRoute);
app.use("/api/header", headerRoute);
app.use("/api/cta", ctaRoute);
app.use("/api/holiday-types", holidayTypesRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/fixed-departures", fixedDeparturesRoute);
app.use("/api/footer", footerRoute);
app.use("/api/locations", locationsRoute);
app.use("/api/seo", seoRoute);
app.use("/api/faq", faqRoute);
app.use("/api/lead", leadRoute); // ✅ FULLY WORKING ROUTE

// ✅ Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Paradise Yatra API is running successfully!",
  });
});

// ✅ 404 Handler
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`🌍 Server running on port ${PORT}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const newPort = PORT + 1;
      console.warn(`⚠️ Port ${PORT} in use. Retrying on ${newPort}...`);
      app.listen(newPort, () =>
        console.log(`✅ Server running on port ${newPort}`)
      );
    } else {
      console.error("Server startup error:", error);
    }
  });
});
