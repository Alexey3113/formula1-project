const Router = require("express")
const router = new Router()
const articlesRouter = require("./articlesRouter")

router.use("/articles", articlesRouter)

module.exports = router