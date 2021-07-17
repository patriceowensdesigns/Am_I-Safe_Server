module.exports = (sequelize, DataTypes) => {
    const Source = sequelize.define("source", {
      sourceId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
          type: DataTypes.STRING,
          allowNull: false
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    return Source;
  };