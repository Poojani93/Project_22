module.exports = (sequelize, DataTypes) => {
    const Assignments = sequelize.define("Assignments", {
      assignmentName: {
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
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
    );

    Assignments.associate = (models) => {
        Assignments.hasMany(models.Submission, {
          onDelete: "cascade",
        });
      };
  
    return Assignments;
  };