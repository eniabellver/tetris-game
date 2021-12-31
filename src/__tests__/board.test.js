import { Board } from '../board';

describe('Board Tests', () => {
  describe('createMatrix method', () => {
    it('should return a matrix of size: width * height', () => {
      const WIDTH = 5;
      const HEIGHT = 3;
      const board = new Board();
      const matrix = board.createMatrix(WIDTH, HEIGHT);

      expect(matrix).toEqual(
        [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
      );
    });
  });
});
