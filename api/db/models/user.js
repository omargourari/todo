module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      access_token: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelaName: "User", freezeTableName: true }
  );
  User.associate = (models) => {
    User.belongsTo(models.User);
  };
  return User;
};
