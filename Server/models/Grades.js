module.exports = (sequelize, DataTypes) => {
    const Grades = sequelize.define("Grades", {
      grade: {
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
  
    return Grades;
  };