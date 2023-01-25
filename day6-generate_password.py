#!/usr/bin/env python3

import sys
import string
import random

def generate_password():
    ascii = list(string.ascii_letters)
    numbers = [1,2,3,4,5,6,7,8,9]
    password = [] 
    index = 0
    symbols = ascii + numbers
    print(sys.argv)
    while index < int(sys.argv[1]):
        print('running')
        password.append(random.choice(symbols))
        index += 1
    print(password)

generate_password()
