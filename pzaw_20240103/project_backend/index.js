const express = require("express")

const application = express()
application.listen(8000, () => {console.log("server started")})