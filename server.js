import  express  from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
connectToMongo();



const app  = express()
app.use(express.json());
app.use(cors());
// app.use(morgan("dev"));
app.use(bodyParser.json());
const port = process.env.port || 8080;


// rest api
app.get("/", (req, res) => {
  res.send("<h2>Welcome to TripPlanner website</h2>");
});

//routes
app.use("/api/v1/auth", authRoutes);



//run listen
app.listen(port, () => {
    console.log(`TripPlanner backend listening on port ${port}`);
  });
  