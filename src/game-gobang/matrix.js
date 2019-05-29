/**
 * @param {*} row the number of rows 
 * @param {*} col the number of columns
 * @param {*} value the initial values of each elems in the 2D array
 */
export function createMatrx(row, col, value) {
  var arr = Array(row);
  for (var i = 0; i < row; i++) {
    arr[i] = Array(col).fill(value);
  }
  return arr;
}

/**
 * @param {*} row the number of rows 
 * @param {*} col the number of columns
 * @param {*} matrix the matrix to copy
 */
export function copyMatrix(row, col, matrix) {
  const matrix_ = createMatrx(row, col, 0);
  for (var x = 0; x < row; x++) {
    for (var y = 0; y < col; y++) {
      matrix_[x][y] = matrix[x][y];
    }
  }
  return matrix_;
}

function check0(matrix, x, y) {
  if (y < 2 || y > 12) return {win: false, value: 0};
  for (var i = y-2; i < y+3; i++) {
    if (matrix[x][i] === 0 || matrix[x][i] !== matrix[x][y]) 
      return {win: false, value: 0};
  }
  return {win: true, value: matrix[x][y]};
}

function check45(matrix, x, y) {
  if (y < 2 || y > 12 || x < 2 || x > 12)
    return {win: false, value: 0};
  for (var i = x-2, j = y+2; i < x+3; i++, j--) {
    if (matrix[i][j] === 0 || matrix[i][j] !== matrix[x][y]) 
      return {win: false, value: 0};
  }
  return {win: true, value: matrix[x][y]};
}

function check90(matrix, x, y) {
  if (x < 2 || x > 12) return {win: false, value: 0};
  for (var i = x-2; i < x+3; i++) {
    if (matrix[i][y] === 0 || matrix[i][y] !== matrix[x][y]) 
      return {win: false, value: 0};
  }
  return {win: true, value: matrix[x][y]};
}

function check135(matrix, x, y) {
  if (y < 2 || y > 12 || x < 2 || x > 12)
    return {win: false, value: 0};
  for (var i = x-2, j = y-2; i < x+3; i++, j++) {
    if (matrix[i][j] === 0 || matrix[i][j] !== matrix[x][y]) 
      return {win: false, value: 0};
  }
  return {win: true, value: matrix[x][y]};
}

export function checkWin(matrix) {
  for (var x = 0; x < 15; x++) {
    for (var y = 0; y < 15; y++) {
      var result = check0(matrix, x, y);
      if (result.win) return result;
      var result = check90(matrix, x, y);
      if (result.win) return result;
      var result = check135(matrix, x, y);
      if (result.win) return result;
      var result = check45(matrix, x, y);
      if (result.win) return result;
    }
  }
  return {win: false, value: 0};
}

