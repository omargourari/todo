module.exports = (sequelize, DataTypes) => {
  const Pocket = sequelize.define(
    "Pocket",
    {
      access_token: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelaName: "Pocket", freezeTableName: true }
  );
  Pocket.associate = (models) => {
    Pocket.belongsTo(models.Pocket);
  };
  return Pocket;
};
