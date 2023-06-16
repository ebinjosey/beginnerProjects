import random

board=["-","-","-",
       "-","-","-",
       "-","-","-",]

currentPlayer = "X"
winner = None
gameRun = True


# Printing the Tic Tac Toe Board

def printBoard(board):
    print(board[0] + " | " + board[1] + " | " + board[2])
    print("-"*10)
    print(board[3] + " | " + board[4] + " | " + board[5])
    print("-"*10)
    print(board[6] + " | " + board[7] + " | " + board[8])
    print('\n')

# Taking player input

def playerMove(board):
    move=int(input("Enter your move:"))
    if move >= 1 and move <= 9 and board[move-1] == "-":
        board[move-1] = currentPlayer
    else:
        print("Sorry! Invalid Move. Try again!" '\n')

# Checking Horizontal

def checkHorizontal(board):
    global winner
    if board[0] == board[1] == board[2] and board[0] != "-":
        winner = board[0]
        return True
    
    elif board[3] == board[4] == board[5] and board[3] != "-":
        winner = board[3]
        return True

    elif board[6] == board[7] == board[8] and board[7] != "-":
        winner = board[6]
        return True

# Checking Vertical

def checkVertical(board):
    global winner
    if board[0] == board[3] == board[6] and board[0] != "-":
        winner = board[0]
        return True
    
    elif board[1] == board[4] == board[7] and board[1] != "-":
        winner = board[1]
        return True

    elif board[2] == board[5] == board[8] and board[2] != "-":
        winner = board[2]
        return True

# Checking Diagonal

def checkDiagonal(board):
    global winner
    if board[0] == board[4] == board[8] and board[0] != "-":
        winner = board[0]
        return True
    
    elif board[2] == board[4] == board[6] and board[2] != "-":
        winner = board[1]
        return True

# Checking if the game ended in a tie

def checkTie(board):
    global gameRun
    if "-" not in board:
        printBoard(board)
        print("Your game has ended in a tie!" '\n')
        gameRun = False

# Checking for the winner

def checkWin(): 
    if checkDiagonal(board) or checkHorizontal(board) or checkVertical(board):
        print(f"The winner is {winner}")
        gameRun = False
        printBoard(board)
        exit()

# Switching player after every move

def switchPlayer():
    global currentPlayer
    if currentPlayer == "X":
        currentPlayer = "O"
    else: 
        currentPlayer = "X"

# Computer Random Player

def computerPlayer(board):
    while currentPlayer=="O":
        pos = random.randint(0,8)
        if board[pos] == "-":
            board[pos] = "O"
            switchPlayer()

# Running the program

while gameRun:
    printBoard(board)
    playerMove(board)
    checkWin()
    checkTie(board)
    switchPlayer()
    computerPlayer(board)
    checkWin()
    checkTie(board)
