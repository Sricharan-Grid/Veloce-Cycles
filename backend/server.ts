import express from "express";
import cors from "cors";
import productsRoute from "./routes/productsRoute";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productsRoute);


app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
