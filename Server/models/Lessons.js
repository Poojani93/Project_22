module.exports = (sequelize, DataTypes) => {
    const Lessons = sequelize.define("Lessons", {
      lessonName: {
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

    Lessons.associate = (models) => {
        Lessons.hasMany(models.ResourceNotes, {
            onDelete: "cascade",
        });
        Lessons.hasMany(models.ResourceVideos, {
            onDelete: "cascade",
        });
      };
  
    return Lessons;
  };