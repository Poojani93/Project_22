module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
      paymentName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      referenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //   attachment: {
    //     type: DataTypes.BLOB,
    //     allowNull: false,
    //   }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
    );
  
    return Payment;
  };