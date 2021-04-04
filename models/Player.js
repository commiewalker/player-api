module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("Player", {
        name: DataTypes.STRING,
        team: DataTypes.STRING,
        age: DataTypes.INTEGER
    });
    return Player;
}