# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
#
#
# Hint
# To do this project, you basically need to create four functions:
#
# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.
#
#
#
# Tips : Consider The Following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!


def display_board(board):
    print('*'*17)
    print('*' + ' ' * 3 + board[1] + ' ' + '|' + ' ' + board[2] + ' ' + '|' + ' ' + board[3] + ' ' * 3 + '*' )
    print('*  ---|---|---  *')
    print('*' + ' ' * 3 + board[4] + ' ' + '|' + ' ' + board[5] + ' ' + '|' + ' ' + board[6] + ' ' * 3 + '*' )
    print('*  ---|---|---  *')
    print('*' + ' ' * 3 + board[7] + ' ' + '|' + ' ' + board[8] + ' ' + '|' + ' ' + board[9] + ' ' * 3 + '*' )
    print('*' * 17)

def player_input(player):
    position = input(f"Player {player}, choose a position (1-9): ")
    return int(position)

def check_win(board):
    if (board[1] == board[2] == board[3] != ' ') or \
       (board[4] == board[5] == board[6] != ' ') or \
       (board[7] == board[8] == board[9] != ' ') or \
       (board[1] == board[4] == board[7] != ' ') or \
       (board[2] == board[5] == board[8] != ' ') or \
       (board[3] == board[6] == board[9] != ' ') or \
       (board[1] == board[5] == board[9] != ' ') or \
       (board[3] == board[5] == board[7] != ' '):
        return True
    else:
        return False

def play():
    board = [' '] * 10
    display_board(board)
    player = 'X'
    game_over = False

    while not game_over:
        position = player_input(player)
        if board[position] == ' ':
            board[position] = player
        else:
            print("Position already taken. Choose another position.")
            display_board(board)
            continue
        display_board(board)

        if check_win(board):
            print(f"Player {player} wins!")
            game_over = True
        elif ' ' not in board[1:]:
            print("Tie!")
            game_over = True
        else:
            player = 'O' if player == 'X' else 'X'

if __name__ == '__main__':
    play()