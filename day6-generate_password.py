#!/usr/bin/env python3

import sys
import string
import random

def generate_password():
    ascii = list(string.ascii_letters)
    numbers = [1,2,3,4,5,6,7,8,9]
    password = "" 
    index = 0
    symbols = ascii + numbers
    while index < int(sys.argv[1]):
        random_number = random.randint(0, len(symbols) - 1)
        password = password + str(symbols[random_number])
        index += 1
    print(password)

generate_password()
