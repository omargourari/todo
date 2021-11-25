module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    // Check for data types https://sequelize.org/master/manual/model-basics.html#data-types
    {
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Task description",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Task title",
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { sequelize, modelaName: "Task", freezeTableName: true }
  );
  Task.associate = (models) => {
    Task.belongsTo(models.Task, {
      foreignKey: "item_id",
      onDelete: "CASCADE",
    });
  };
  return Task;
};
