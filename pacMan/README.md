# 🕹️ PacMan

**PacMan** is a Python-based implementation of the classic arcade game, built as part of a school project. The game simulates the iconic Pac-Man navigating a maze, collecting pellets, and avoiding ghosts.

## Features
- **Classic Pac-Man Gameplay**: Navigate through the maze while avoiding ghosts.
- **Ghost AI**: Different types of ghosts with varying behavior.
- **Score System**: Collecting pellets increases the player's score.
- **Interactive Interface**: Basic keyboard controls to navigate Pac-Man around the maze.

## Tech Stack
- **Python** - The core programming language used to develop the game.
- **Pygame** - A Python library used to build the game window and handle graphics, input, and other game mechanics.

## How it Works
The game is built using **Pygame**, which handles the rendering of the game window and game objects. The basic logic of the game includes:
- Movement of Pac-Man controlled by the player via the keyboard.
- Ghost AI that moves towards Pac-Man and follows set patterns.
- Scoring system where points are awarded for collecting pellets.
- Life System: The player starts with 3 lives. Each time Pac-Man is caught by a ghost, a life is lost. The game ends when all lives are lost.
