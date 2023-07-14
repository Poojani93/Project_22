module.exports = (sequelize, DataTypes) => {
    const University = sequelize.define("University", {
      universitytName: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
        freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
    );

    University.associate = (models) => {
      University.hasMany(models.Students, {
        onDelete: "cascade",
      });
    };
  
    return University;
  };