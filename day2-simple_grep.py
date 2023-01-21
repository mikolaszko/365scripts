#!/usr/bin/python3
import sys

def simple_grep():
    pattern = sys.argv[1]
    lines = open(sys.argv[2]).readlines()
    for line in lines:
        if line.find(pattern) != -1:
            print(lines.index(line), line)
            return
    print("Pattern not found")


simple_grep()

