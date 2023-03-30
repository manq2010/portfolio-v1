import leaderboard from '../assets/leaderboard.png';
import bookstore from '../assets/bookstore.png';
import beerlover from '../assets/beerlover.png';
import catolog from '../assets/catolog.png';
import categories from '../assets/categories.png';

const projects = [
  // projects can be added an removed
  {
    id: 1,
    name: 'Leaderboard',
    description:
          'The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
    stack: ['HTML', 'Javascript', 'CSS'],
    sourceCode: 'https://github.com/manq2010/books-javascript',
    livePreview: 'https://mancobasihlongonyane.me/leaderboard/',
    image: leaderboard,
  },
  {
    id: 2,
    name: 'Bookstore',
    description:
          '"Bookstore" is a website that allows you to display a list of books, add books to and also remove a selected book from a collection',
    stack: ['JavaScript', 'Redux', 'React'],
    sourceCode: 'https://github.com/manq2010/bookstore',
    livePreview: 'https://react-bookstore.onrender.com/books',
    image: bookstore,
  },
  {
    id: 3,
    name: 'Beers-Lovers',
    description:
          '"Beers-Lovers" is a website that displays details of Brewdog beers. It allows users to search for their favourite beers or filter based on categories',
    stack: ['JavaScript', 'React', 'Redux'],
    sourceCode: 'https://github.com/manq2010/beer-lovers',
    livePreview: 'https://beer-lovers.onrender.com/',
    image: beerlover,
  },
  {
    id: 4,
    name: 'Catalog of my things',
    description:
          'In this project, a console app created that keep a record of different types of items owned: books, music albums, movies, and games',
    stack: ['Ruby', 'Rspec'],
    sourceCode: 'https://github.com/manq2010/catalog-of-my-things',
    livePreview: 'https://github.com/manq2010/catalog-of-my-things',
    image: catolog,
  },
  {
    id: 5,
    name: 'Catalog of my things',
    description:
          'In this project, a console app created that keep a record of different types of items owned: books, music albums, movies, and games',
    stack: ['Ruby', 'Rspec', 'Rails'],
    sourceCode: 'https://github.com/manq2010/budget-app',
    livePreview: 'https://github.com/manq2010/catalog-of-my-things',
    image: categories,
  },
];

export default projects;
