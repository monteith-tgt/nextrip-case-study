import type { Book } from '~/interfaces/books';

export const getBooks = (): Promise<Book[]> => {
  return new Promise(resolve => {
    fetch('https://www.mock-api.com').then(response => resolve(response.json()));
  });
};
