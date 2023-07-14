module.exports = (sequelize, DataTypes) => {
    const Offers = sequelize.define("Offers", {
      offerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      offerPercentage: {
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

    return Offers;
  };