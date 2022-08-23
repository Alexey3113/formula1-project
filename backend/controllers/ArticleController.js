const {
    Article
} = require("../models/models")
const ApiError = require("../error/ApiError")
const fs = require("fs")
const path = require("path")

class ArticleController {
    async getAll(req, res, next) {
        let articles = await Article.findAll()
        if (articles) articles = articles.map(el => {
            el = el.dataValues
            const obj = {
                id: el.id,
                title: el.title,
                description: el.description,
                miniTitle: el.miniTitle,
                img: ""
            }
            if (el.img) {
                const photo = fs.readFileSync(path.resolve(__dirname, "..", "assets", el.img))
                return ({
                    ...obj,
                    img: "data:image/png;base64," + photo.toString('base64')
                })
            }
            return obj
        })
        res.json(articles)
    }
    async getOne(req, res) {
        const {
            id
        } = req.params
        const el = await Article.findOne({
            where: {
                id
            }
        })
        const photo = fs.readFileSync(path.resolve(__dirname, "..", "assets", el.img))
        const article = {
            id: el.id,
            title: el.title,
            description: el.description,
            miniTitle: el.miniTitle,
            img: "data:image/png;base64," + photo.toString('base64'),
            createdAt: el.createdAt
        }

        res.json(article)
    }
    async create(req, res, next) {
        let {
            title,
            description,
            miniTitle,
            img,
            key
        } = req.body
        try {
            if (key === "QQQQQQQQQQQQQQQQQQQQSSSDASDSASAD") {
                if (!title || !description || !miniTitle) {
                    next(ApiError.badRequest("Ошибка запроса! Не указано поле!"))
                }
                console.log("title - ", title, description, miniTitle)

                if (img) {
                    img = img.replace(/^data:image\/(jpeg|png|jpg);base64,/, "")
                    const titleImg = `${Date.now().toString(16)}.jpg`
                    fs.writeFileSync(path.resolve(__dirname, "..", "assets", titleImg), img, "base64")
                    const article = await Article.create({
                        title,
                        description,
                        miniTitle,
                        img: titleImg
                    })
                    return res.status(203).json(article)
                }
                const article = await Article.create({
                    title,
                    description,
                    miniTitle,
                    img: ""
                })
                res.status(203).json(article)
            } else {
                next(ApiError.forbidden("Нет доступа!"))
            }
        } catch (e) {
            next(ApiError.badRequest(`Ошибка, ${e}`))
        }


    }
}

module.exports = new ArticleController()