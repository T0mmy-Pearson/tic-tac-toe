# Tic-Tac-Toe (XandOs)

A modern, interactive tic-tac-toe game built with React and Vite. This is a web-based implementation of the classic X's and O's game featuring a clean user interface and responsive design.

## Features

- **Interactive Gameplay**: Click on any cell to place your mark (X or O)
- **Turn-based System**: Alternates between Player X and Player O
- **Win Detection**: Automatically detects winning combinations (rows, columns, diagonals)
- **Draw Detection**: Recognizes when the game ends in a tie
- **Game Status Display**: Shows current player's turn and game results
- **Reset Functionality**: Easy game reset button to start a new round
- **Responsive Design**: Works on both desktop and mobile devices with touch support

## Technology Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: CSS with custom styling
- **Development**: ESLint for code quality

## Project Structure

```
xsandos/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   ├── main.jsx         # Application entry point
│   └── components/
│       ├── game.jsx     # Game logic and state management
│       ├── board.jsx    # 3x3 game board component
│       └── cell.jsx     # Individual cell component
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Game Rules

1. Players take turns placing their marks (X or O) on a 3x3 grid
2. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
3. If all nine cells are filled without a winner, the game ends in a draw
4. Use the Reset button to start a new game

## Getting Started

1. Navigate to the xsandos directory:
   ```bash
   cd xsandos/xsandos
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to play the game

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Author

Tommy Pearson
