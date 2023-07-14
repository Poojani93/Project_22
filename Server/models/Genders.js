module.exports = (sequelize, DataTypes) => {
    const Genders = sequelize.define("Genders", {
      genderName: {
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

    Genders.associate = (models) => {
      Genders.hasMany(models.Students, {
        onDelete: "cascade",
      });
      Genders.hasMany(models.Lecturers, {
        onDelete: "cascade",
      });
  }
  
    return Genders;
  };