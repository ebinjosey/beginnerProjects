from tkinter import * 
import random

gwidth = 800
gheight = 800
speed = 75
spaceSize = 40
bodyParts = 3
snakeColour = "#05204A"
foodColour = "#78CDD7"
bgColour = "#FFFFFF"

class Snake:
    def __init__(self):
        self.body_size = bodyParts
        self.coordinates = []
        self.squares = []

        for i in range(0, bodyParts):
            self.coordinates.append([0,0])

        for x, y in self.coordinates:
            square = canvas.create_rectangle(x, y, x + spaceSize, y + spaceSize, fill = snakeColour, tag="snake")
            self.squares.append(square)

class Food: 
    def __init__(self):
        x = random.randint(0,(gwidth/spaceSize)-1) * spaceSize
        y = random.randint(0,(gheight/spaceSize)-1) * spaceSize
        
        self.coordinates = [x, y]

        canvas.create_oval(x, y, x +spaceSize, y + spaceSize, fill=foodColour, tag="food")

def nextTurn(snake, food):
    x, y = snake.coordinates[0]
    if direction == "Up":
        y-= spaceSize

    elif direction == "Down":
        y += spaceSize

    elif direction == "Left":
        x -= spaceSize

    elif direction == "Right":
        x += spaceSize
    
    snake.coordinates.insert(0, (x,y))

    square = canvas.create_rectangle(x, y, x + spaceSize, y + spaceSize, fill=snakeColour)

    snake.squares.insert(0, square)

    if x == food.coordinates[0] and y == food.coordinates[1]:
        global score
        score += 1

        label.config(text="Score:{}".format(score))
        canvas.delete("food")
        food = Food()

    else:
        del snake.coordinates[-1]
        canvas.delete(snake.squares[-1])
        del snake.squares[-1]


    if checkCollisions(snake):
        gameOver()

    else:
        window.after(speed, nextTurn, snake, food)

def changeDirection(new_direction):
    global direction
    
    if new_direction == "Left":
        if new_direction != "Right":
            direction = new_direction

    if new_direction == "Right":
        if new_direction != "Up":
            direction = new_direction

    if new_direction == "Up":
        if new_direction != "Down":
            direction = new_direction

    if new_direction == "Down":
        if new_direction != "Up":
            direction = new_direction

def checkCollisions(snake):
    x, y = snake.coordinates[0]

    if x < 0 or x >= gwidth:
        return True

    elif y < 0 or y >= gheight:
        return True

    for body_part in snake.coordinates[1:]:
        if x == body_part[0] and y == body_part[1]:
            return True

    return False

    
def gameOver():
    canvas.delete(ALL)
    canvas.create_text(canvas.winfo_width()/2, canvas.winfo_height()/2, font=('Helvetica',70), text=("G A M E O V E R"), fill="red", tag=("gameover"))

window = Tk()
window.title("Snake Game")
window.resizable(False, False)

score = 0 
direction = "Down"

label = Label(window, text="Score:{}".format(score), font=("Helvetica", 40))
label.pack()

canvas = Canvas(window, bg=bgColour, height=gheight, width=gwidth)
canvas.pack()

window.update()

window_width = window.winfo_width()
window_height = window.winfo_height()
screen_width = window.winfo_screenwidth()
screen_height = window.winfo_screenheight()

x = int((screen_width/2) - (window_width/2))
y = int((screen_height/2) - (window_height/2))

window.geometry(f"{window_width}x{window_height}+{x}+{y}")

window.bind("<Left>", lambda event: changeDirection("Left"))
window.bind("<Right>", lambda event: changeDirection("Right"))
window.bind("<Up>", lambda event: changeDirection("Up"))
window.bind("<Down>", lambda event: changeDirection("Down"))

snake = Snake()
food = Food()
nextTurn(snake,food)

window.mainloop()

