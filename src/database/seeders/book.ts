import { QueryInterface } from 'sequelize';
export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'The Great Gatsby',
          price: 10.99,
          author: 'F. Scott Fitzgerald',
          isbn: '9780743273565',
        },
        {
          title: 'To Kill a Mockingbird',
          price: 12.99,
          author: 'Harper Lee',
          isnb: '9780061120084',
        },
      ],
      {}
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  },
};
