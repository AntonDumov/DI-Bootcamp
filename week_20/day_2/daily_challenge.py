import re


def decode_matrix_string(
        matrix_string='''7ii
        Tsx
        h%?
        i #
        sM 
        $a 
        #t%
        ^r!'''):
    matrix_list = matrix_string.split('\n')
    columns_number = len(matrix_list[0])
    matrix_list = [list(row) for row in matrix_list]

    matrix_transposed = []
    for i in range(columns_number):
        transposed_row = []
        for j in range(len(matrix_list)):
            transposed_row.append(matrix_list[j][i])
        matrix_transposed.append(transposed_row)
    print(matrix_transposed)

    message_with_symbols = ''
    for column in matrix_transposed:
        for ch in column:
            message_with_symbols += ch

    print(message_with_symbols)

    message = ''
    is_in_symbols = False
    for ch in message_with_symbols:
        if ch.isalpha():
            if is_in_symbols:
                message += ' ' + ch
                is_in_symbols = False
            else:
                message += ch
        else:
            is_in_symbols = True
    message = message.strip()
    print(message)
