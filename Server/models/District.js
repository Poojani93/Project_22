module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("District", {
      districtName: {
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

    District.associate = (models) => {
      District.hasMany(models.Students, {
        onDelete: "cascade",
      });
    };
  
    return District;
  };