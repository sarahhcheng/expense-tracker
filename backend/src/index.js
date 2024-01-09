import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { DataSource } from "typeorm";
import { URL } from "url"; // URL is a global object in Node.js, but explicitly importing it can be a good practice

// Initialize dotenv configuration
config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log("Server is running on port: " + PORT));

const dbUrl = new URL(process.env.DATABASE_URL);
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

const AppDataSource = new DataSource({
  type: "cockroachdb",
  url: dbUrl.toString(),
  ssl: true,
  extra: {
    options: routingId,
  },
  synchronize: true,
  entities: ["src/models/*.ts"],
  timeTravelQueries: false,
});

AppDataSource.initialize()
  .then(() => console.log("CockroachDB connected"))
  .catch((e) => console.log(e));
