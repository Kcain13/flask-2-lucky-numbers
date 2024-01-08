function starOutGrid(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const rowsToStar = new Set();
    const colsToStar = new Set();

    // Identify rows and columns containing stars
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "*") {
                rowsToStar.add(i);
                colsToStar.add(j);
            }
        }
    }

    // Star out rows
    rowsToStar.forEach(row => {
        for (let j = 0; j < cols; j++) {
            grid[row][j] = "*";
        }
    });

    // Star out columns
    colsToStar.forEach(col => {
        for (let i = 0; i < rows; i++) {
            grid[i][col] = "*";
        }
    });

    return grid;
}

// Example usage:
const inputGrid = [
    ['A', 'B', 'C'],
    ['D', '*', 'E'],
    ['F', 'G', 'H']
];

const resultGrid = starOutGrid(inputGrid);
console.log(resultGrid);