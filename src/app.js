import express from "express";
import globalrouter from "./routers/globalrouter";
import userrouter from "./routers/userrouter";
import videorouter from "./routers/videorouter";

// / => 프로젝트 최상단
// ./ => 나와 같은 경로
// ../ => 한 칸 위로

const PORT = 3001;

const app = express();

app.set("view engine", "pug");

app.use("/", globalrouter);
app.use("/user", userrouter);
app.use("/video", videorouter);




app.listen(PORT, ()=> {
    console.log(`${PORT} SERVER START!`)
});
