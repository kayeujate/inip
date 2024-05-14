const size = 5;
const board2 = Array.from({ length: size }, () => Array(size).fill(0));
board2.forEach(row => row[2] = 1);
