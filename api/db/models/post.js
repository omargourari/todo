module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    // Check for data types https://sequelize.org/master/manual/model-basics.html#data-types
    {
      excerpt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      favorite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      given_title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Missing post title",
      },
      given_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      has_image: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      has_video: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_article: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_index: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lang: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      listen_duration_estimate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      resolved_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      resolved_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resolved_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sort_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      time_added: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      time_favorited: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      time_read: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      time_to_read: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      time_updated: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      word_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // authors: {
      //   99771418: {
      //     item_id: "3492",
      //     author_id: "99771418",
      //     name: "Static Shock",
      //     url:
      //       "https://everything2.com/title/Static+Shock?author_id=2068077#Dustyblue",
      //   },
      // },
      // tags: {
      //   dev: {
      //     item_id: "3492",
      //     tag: "dev",
      //   },
      // },
    },
    { sequelize, modelaName: "Post", freezeTableName: true }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.Post, {
      foreignKey: "item_id",
      onDelete: "CASCADE",
    });
  };
  return Post;
};
