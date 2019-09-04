import { serve } from "https://deno.land/std@v0.12/http/server.ts";

import Router from "./Router.ts";

window.onload = async () => {
  console.log("http://localhost:8000/");
  for await (const req of serve(":8000")) {
    Router(req);
  }
};
