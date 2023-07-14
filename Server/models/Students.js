const Courses = require("./Courses");

module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
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
      // universityId: {
      //   type: DataTypes.BLOB
      // },
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

    //one-to-many relationships
    Students.associate = (models) => {
      Students.hasMany(models.Attendence, {
        onDelete: "cascade",
      });
      Students.hasMany(models.Certificate, {
        onDelete: "cascade",
      });
      Students.hasMany(models.Payment, {
        onDelete: "cascade",
      });

      Students.belongsToMany(models.Courses, { 
        through: 'Students_Courses' });

    };
  
    return Students;
  };