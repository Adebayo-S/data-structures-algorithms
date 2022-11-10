""" --- Directions
 Given a string, return a new string with the reversed
 order of characters
 --- Examples
   reverse('apple') === 'leppa'
   reverse('hello') === 'olleh'
   reverse('Greetings!') === '!sgniteerG'
"""

# first trial
def reverse(arg):
    if not isinstance(arg, str):
        raise TypeError('arg must be a string')
    reverse = ''
    for char in arg:
        reverse = char + reverse
    return reverse
