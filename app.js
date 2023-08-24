import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();
const port = 3333;

app.use(express.json())
app.use(cors());

app.listen(port, () => {
    console.log(`App running on http://localhost;${port}`);
});

app.get("/", (request, response) => {
    response.send("Xatures er tilbage guys");
});

app.get("/test", (request, response) =>  {
    response.send("siuu");
});

app.get("/users", async (request, response) => {
    const data = await fs.readFile("data.json");
    const users = JSON.parse(data)
    console.log(users);
    response.json(users)
});