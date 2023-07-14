module.exports = (sequelize, DataTypes) => {
    const Announcements = sequelize.define("Announcements", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    //   image: {
    //     type: DataTypes.BLOB,
    //     allowNull: false,
    //   },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
    );
  
    return Announcements;
  };