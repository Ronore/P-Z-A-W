const express = require("express")

const application = express()

application.get("/",(request,response) => {response.send("<div>Kocham Karolinkę</div>")})
application.get("/abc",(request,response) => {response.statusCode = 500; response.send("<div>Kocham jeść</div>")})
application.post("/abc",(request,response) => {response.send("<div>daw</div>")})

// /sci/4c/abc
const sci_router = express.Router()
sci_router.get("/",(req, res) => {res.send("<div>sci</div>");})


sci_router.get("/json", (req, res) => {
    const data = [{
        "key1": "wow",
        "key2": "13"
    }]

    res.json(data);})

application.use("/sci/4c/abc", sci_router)

application.listen(8000, () => {console.log("server started")})

