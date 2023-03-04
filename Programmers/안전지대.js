function solution(board) {
  const length = board.length
  const xArr = [-1, 1, 0, 0, -1, -1, 1, 1]
  const yArr = [0, 0, -1, 1, -1, 1, -1, 1]

  // 지뢰가 설치된 곳
  const booms = []
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      if (board[x][y] === 1) {
        booms.push([x, y])
      }
    }
  }

  booms.forEach(([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + xArr[i]
      const ny = y + yArr[i]
      if (0 <= nx && nx < length && 0 <= ny && ny < length) {
        board[nx][ny] = 1
      }
    }
  })

  return  board.flat().filter(x=>x === 0).length;
}
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
