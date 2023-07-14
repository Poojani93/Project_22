module.exports = (sequelize, DataTypes) => {
    const Banks = sequelize.define("Banks", {
      bankName: {
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
  
    Banks.associate = (models) => {
      Banks.hasMany(models.Payment, {
        onDelete: "cascade",
      });
    };

    return Banks;
  };