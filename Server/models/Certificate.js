module.exports = (sequelize, DataTypes) => {
    const Certificate = sequelize.define("Certificate", {
      certificateName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eligibility: {
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
  
    return Certificate;
  };