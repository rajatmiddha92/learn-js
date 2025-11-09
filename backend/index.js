"use strict";
var cron = require("node-cron");
const express = require("express");
const app = express();
const port = 3010;
cron.schedule("* * * * *", () => {
    let c = 0;
    let timer = setInterval(() => {
        c++;
        console.log(c);
        if (c == 60) {
            clearInterval(timer);
            c = 0;
        }
    }, 1000);
    console.log("running a task every minute");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
