module.exports = (sequelize, DataTypes) => {
    const Pinned = sequelize.define("pinned", {
        userId: {
            type: DataTypes.INTEGER,
          },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          mugshot: {
            type: DataTypes.STRING,
          },
          sourceId: {
            type: DataTypes.STRING,
            allowNull: false
          },
          note: {
            type: DataTypes.STRING,
            allowNull: true
          },
    });
    return Pinned;
  };