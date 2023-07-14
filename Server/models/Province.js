//db table for province
module.exports = (sequelize, DataTypes) => {
    const Province = sequelize.define("Province", {
      provinceName: {
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

    //one-to-many relationships
    Province.associate = (models) => {
        Province.hasMany(models.District, {
          onDelete: "cascade",
        });
        Province.hasMany(models.Students, {
            onDelete: "cascade",
          });
      };
  
    return Province;
  };