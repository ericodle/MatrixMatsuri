from MatrixMatsuri import MatrixMatsuri

# Initialize the MatrixMatsuri game
MatrixMatsuri_game = MatrixMatsuri()

# Create a sample MatrixMatsuri board
sample_board = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y']
]

# Test the MatrixMatsuri game logic
guess = "HELLO"  # Replace with the word you want to test
result = MatrixMatsuri_game.check_valid_word(sample_board, guess)

print(f"Result for '{guess}': {result}")
