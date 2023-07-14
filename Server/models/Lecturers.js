const Courses = require("./Courses");

module.exports = (sequelize, DataTypes) => {
    const Lecturers = sequelize.define("Lecturers", {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      university: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressLine1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressLine2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // image: {
      //   type: DataTypes.BLOB
      // },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
    );

    Lecturers.associate = (models) => {

      Lecturers.hasMany(models.Subjects, {
        onDelete: "cascade",
      });

      Lecturers.belongsToMany(models.Courses, { 
        through: 'Courses_Lecturers' });

    };
  
    return Lecturers;
  };