module.exports = (sequelize, DataTypes) => {
    const Subjects = sequelize.define("Subjects", {
      subjectName: {
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
  
    Subjects.associate = (models) => {
        Subjects.hasMany(models.Lessons, {
          onDelete: "cascade",
        });
        Subjects.hasMany(models.Practicals, {
            onDelete: "cascade",
          });
          Subjects.hasMany(models.Assignments, {
            onDelete: "cascade",
          });
      };

    return Subjects;
  };