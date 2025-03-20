// //todo maps api needs
// //google map js api
// // geocoding api
// //todo setting the dotenv:
// import dotenv from "dotenv";
// dotenv.config();
// //todo importing axios file
// import axios from "axios";
// //todo importing express
// import express, { response } from "express";
// const app = express();
// let port = 8080;
// //todo to change from common Js to Embedded Js we required to add these 3 lines extra so that we can use import at the place of require import is a part of new ejs and in package.json write "type:" = "module"
// import { fileURLToPath } from "url"; // Required for __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename); // Get the directory name
// //todo for taking the data of post method 
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// //todo setting up ejs file
// import path from "path";
// app.set("view engine" , "ejs"); //compulsary step
// app.set("views",path.join(__dirname , "/views") ); //todo set view folder// if the view folder and ejs file you are doing are in same directory
// app.set("views", [path.join(__dirname, "views"), path.join(__dirname, "../projectPrithivi/view")]); //if the view folder and ejs file are in different directory.
// //todo to set public folder 
// app.use(express.static(path.join(__dirname, "public")));
//  //todo Method-override by query method
//  import methodOverride from "method-override";
//  app.use(methodOverride('_method'))
//  //todo setting the apiKey
//  const apiKey = process.env.maps_key;
 
// //  //todo sample centers of e-waste
//  let sampleCenters = [
//     {
//         name: "Green Earth Recycling",
//         address: "MG Road, Gorakhpur, UP",
//         location: { type: "Point", coordinates: [83.3688, 26.7606] } // Longitude, Latitude
//     },
//     {
//         name: "EcoWaste Solutions",
//         address: "Golghar, Gorakhpur, UP",
//         location: { type: "Point", coordinates: [83.3775, 26.7550] }
//     }
// ];

//   //todo starting the code
//   app.listen(port,()=>{
//     console.log("app is functioning properly");
//   })
//   app.get("/", (req, res)=>{
//     // res.send("Hi your system is running properly");
//     res.render("index.ejs");
//   })
//   app.get("/rCenters" , (req, res)=>{
//     const lat = req.query.lat;
//     const lng = req.query.lng;
//     // const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&type=recycling_center&key=${apiKey}`;
//     // const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&type=establishment&keyword=recycling&key=${apiKey}`;
//     const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=100000&type=point_of_interest&key=${apiKey}`;
//     // const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&type=college&key=${apiKey}`;
//     // const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&keyword=recycling&fields=name,vicinity,geometry&key=${apiKey}`;
//     // const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&keyword=recycling&fields=name,vicinity,geometry&key=${apiKey}`;
//  axios.get(placesUrl)
//  .then(response =>{
//   const recycling_centers = response.data.results;
//   console.log("latitude of user are "+lat + "  longitude of the user are " + lng);
//   console.log(recycling_centers);
//   return res.json({
//     status: "success",
//     centers: recycling_centers
//   })
//  })
//  .catch(err => {
//   console.log(err);
//  });
//   })
// Import required modules
// import dotenv from "dotenv";
// dotenv.config();
import dotenv from "dotenv";
dotenv.config();
// API Key from .env
const apiKey = process.env.maps_key;
console.log("Loaded API Key:", apiKey ? "Exists" : "MISSING"); // Debugging

import axios from "axios";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

// Set up Express app
const app = express();
const port = 8080;

// Handle ES Module imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Sample e-waste centers
let sampleCenters = [
  {
    name: "Green Earth Recycling",
    address: "MG Road, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3688, 26.7606] }, // Longitude, Latitude
  },
  {
    name: "EcoWaste Solutions",
    address: "Golghar, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3775, 26.7550] },
  },
  {
    name: "CleanTech Disposal",
    address: "Civil Lines, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3721, 26.7589] },
  },
  {
    name: "Green Planet Recycling",
    address: "University Road, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3812, 26.7634] },
  },
  {
    name: "Eco-Friendly Waste Management",
    address: "Railway Station Road, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3654, 26.7523] },
  },
  {
    name: "Sustainable Waste Solutions",
    address: "Khalilabad Road, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3598, 26.7491] },
  },
  {
    name: "Green Horizon Recycling",
    address: "Chowk Bazaar, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3705, 26.7567] },
  },
  {
    name: "EcoCare Waste Disposal",
    address: "Ramgarhtal, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3743, 26.7618] },
  },
  {
    name: "Earth Savers Recycling",
    address: "Gorakhnath Temple Road, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3699, 26.7595] },
  },
  {
    name: "Green Future Waste Management",
    address: "Katra Bazaar, Gorakhpur, UP",
    location: { type: "Point", coordinates: [83.3767, 26.7542] },
  },
];
// Start the server
app.listen(port, () => {
  console.log("App is functioning properly");
});

// Home route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Route to get recycling centers
// app.get("/rCenters", async (req, res) => {
//   const lat = parseFloat(req.query.lat);
//   const lng = parseFloat(req.query.lng);
//     //todo by using this link it activate google places api which help to find the centers nearby it .
//       const placesUrl = `https://places.googleapis.com/v1/places:searchNearby`;
//       // const placesUrl = `https://places.googleapis.com/v1/places:searchText?text=e-waste recycling center&location=${lat},${lng}&radius=10000&regionCode=IN&key=YOUR_API_KEY`;
//   const requestBody = {
//     // includedTypes: ["point_of_interest"], // Adjust as needed
//     // includedTypes: ["restaurant"], // Adjust as needed
//     // includedTypes: ["recycling_center"],
//     locationRestriction: {
//       circle: {
//         center: { latitude: lat, longitude: lng },
//         radius: 10000, // 10 km radius
//       },
//     },
//     regionCode: "IN", // Add this
//   };
//   console.log("Request Body:", JSON.stringify(requestBody, null, 2));
//   console.log("API Key:", apiKey ? "Exists" : "MISSING");
//   try {
//     const response = await fetch(placesUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "X-Goog-Api-Key": apiKey,
//         // "X-Goog-FieldMask": "displayName,formattedAddress,location"
//         "X-Goog-FieldMask": "places.name,places.formattedAddress,places.location"

//       },
//       body: JSON.stringify(requestBody),
//     });
  
//     if (!response.ok) {
//       const errorData = await response.text(); // Capture full error response
//       console.error("API Response:", errorData);
//       throw new Error(`API request failed with status ${response.status}`);
//     }
//     //todo for showing the actual name at the place of name id.
//     // console.log(detailsUrl);
//     const data = await response.json();
//     console.log(`Latitude: ${lat}, Longitude: ${lng}`);
//     console.log(data.places);
  
//     return res.json({
//       status: "success",
//       centers: data.places || [],
//     });
//   } catch (error) {
//     console.error("Error fetching places:", error);
//     return res.status(500).json({ status: "error", message: error.message });
//   }
// });

  app.get("/rCenters", async (req, res)=>{
    console.log("you accessed the location ");
    const lat = parseFloat(req.query.lat);
     const lng = parseFloat(req.query.lng);
     console.log("latitude of the user is "+lat);
     console.log("longitude of the user is "+lng);
       res.render("response.ejs",{sampleCenters , apiKey});
  })