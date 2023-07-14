module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("Courses", {
      courseName: {
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
      fees: {
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

    Courses.associate = (models) => {

      Courses.hasMany(models.Offers, {
        onDelete: "cascade",
      });
      Courses.hasMany(models.Advertisement, {
        onDelete: "cascade",
      });
      Courses.hasMany(models.Announcements, {
        onDelete: "cascade",
      });
      Courses.hasMany(models.Subjects, {
        onDelete: "cascade",
      });

      Courses.belongsToMany(models.Lecturers, { 
        through: 'Courses_Lecturers' });
      Courses.belongsToMany(models.Students, { 
        through: 'Students_Courses' });

    };
  
    return Courses;
  };