import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IBook } from '../../interfaces/books/IBook';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IBook>>('books', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('books');
  },
};
