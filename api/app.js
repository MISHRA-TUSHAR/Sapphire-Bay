import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
const PORT = 8800;

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use(cookieParser());

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
