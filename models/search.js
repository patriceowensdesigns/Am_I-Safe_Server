module.exports = (sequelize, DataTypes) => {
    const Search = sequelize.define('search', {
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
    });
    return Search;
  };