import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///ratings');

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    modelName: 'user',
    sequelize: db,
  },
);


export class Movie extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Movie.init({
  movieId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  overview: {
    type: DataTypes.TEXT
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  posterPath: {
    type: DataTypes.TEXT
  }
}, {
  sequelize: db,
  modelName: 'movie'
})



export class Rating extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Rating.init({
  ratingId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  score: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: db,
  modelName: 'rating',
  timestamps: true, // This will enable timstamps and create the created_at column
  updatedAt: false // This will disable updated_at column
})

// movie -> rating - One to Many
Movie.hasMany(Rating, {foreignKey: 'movieId'})
Rating.belongsTo(Movie, {foreignKey: 'movieId'})

// user -> rating - One to Many
User.hasMany(Rating, {foreignKey: 'userId'})
Rating.belongsTo(User, {foreignKey: 'userId'})