import express from "express";
import path from "path";
import cors from "cors";
import Routes from "./routes";

const server = express();

server.use(express.json());
server.use(cors());
server.use(Routes);

server.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "uploads"))
);

server.listen(3333, () => {
  console.log("Server running at port 3333");
});
