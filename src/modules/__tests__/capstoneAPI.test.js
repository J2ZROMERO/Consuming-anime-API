import Requestapicapstone from '../capstoneAPI.js';

jest.mock('../capstoneAPI.js');

describe('Amount of comments from capstoneAPI', () => {
  const data = new Requestapicapstone();
  test('The result must be 5 comments', () => {
    data.getcomments().then((e) => {
      expect(e.length).toBe(5);
    });
  });
});