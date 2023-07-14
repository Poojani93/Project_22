module.exports = (sequelize, DataTypes) => {
    const Attendence = sequelize.define("Attendence", {
      attendenceStatus: {
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
  
    return Attendence;
  };