import next from "next";
import startServer from "./server";

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  startServer(handle, process.env.PORT);
});
