const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { json } = require("express");
const authRouter = require("./routes/auth.routes.js");


const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(json());
app.use((req, res, next) => {
  next();
});

app.use(authRouter);

app.get("/", (req, res) => {
  res.send("Get en raiz");
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puero ${port} (⌐■_■) Yeah Chikibaby`);
    
})