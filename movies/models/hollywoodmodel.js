const sequelize=require('./index')
const {DataTypes, }=require('sequelize')
/**
 * @description:table columns defining
 */
const Movie = sequelize.define("hollywood", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        movieName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[^-\s][a-zA-Z_\s-]+$/,
                not:/[*|\":<>[\]{}`\\()';@&$]/
              }
        },
        plot: {
            type:DataTypes.STRING,
            allowNull:false,

        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate:{
            }
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
       
    }, {
        timestamps: false
    });
  module.exports=Movie
