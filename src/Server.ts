import { abc } from "https://deno.sh/abc/mod.ts";
import { config } from "https://deno.land/x/dotenv/dotenv.ts";

const { PORT, DENO_ENV } = config();

// import { Client } from "https://deno.land/x/mysql/mod.ts";

// const client = await new Client().connect({
//   hostname: "127.0.0.1",
//   username: "root",
//   db: "dbname",
//   pool: 3, // pool size
//   password: "password"
// });

const app = abc();

app
  .get("/", function() {
    return "Hello, Abc";
  })
  .start(`0.0.0.0:${PORT}`);
