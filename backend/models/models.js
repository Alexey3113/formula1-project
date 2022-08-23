const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const Article = sequelize.define("articles", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false },
    description: {type: DataTypes.STRING(10000), allowNull: false, },
    miniTitle: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING(10000)}
})

module.exports = {
    Article
}