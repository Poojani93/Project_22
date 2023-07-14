module.exports = (sequelize, DataTypes) => {
    const Advertisement = sequelize.define("Advertisement", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //   image: {
    //     type: DataTypes.BLOB,
    //     allowNull: false,
    //   },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
    );
  
    return Advertisement;
  };