""" --- Directions
 Given a string, return a new string with the reversed
 order of characters
 --- Examples
   reverse('apple') === 'leppa'
   reverse('hello') === 'olleh'
   reverse('Greetings!') === '!sgniteerG'
"""

# first trial ( Theoretically bad because strings are ..
# immutable,  so every time where it looks like you're appending
# a character onto your new_string, it's theoretically creating a
# new string every time! However, CPython knows how to optimize
# this in certain cases, of which this trivial case is one.)
def reverse(arg):
    if not isinstance(arg, str):
        raise TypeError('arg must be a string')
    reverse = ''
    for char in arg:
        reverse = char + reverse
    return reverse

# Theoretically better is to collect your substrings in a list,
# and join them later. However, this actually takes longer,
# because CPython can optimize the string concatenation.
def reverse(arg):
    if not isinstance(arg, str):
        raise TypeError('arg must be a string')
    str_array = []
    index = len(arg) - 1
    while index >= 0:
        str_array.append(arg[index])
        index -= 1
    return ''.join(str_array)


# interesting way
def reverse(arg):
    if not isinstance(arg, str):
        raise TypeError('arg must be a string')
    return ''.join(reversed(arg))


# # fastest and most performant way
def reverse(arg):
    if not isinstance(arg, str):
        raise TypeError('arg must be a string')
    return arg[::-1]
