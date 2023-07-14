module.exports = (sequelize, DataTypes) => {
    const Practicals = sequelize.define("Practicals", {
      practicalName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
    );
  
    return Practicals;
  };