/*
 Directions
 Given a string, return a new string with the reversed
 order of characters
 --- Examples
   reverse('apple') === 'leppa'
   reverse('hello') === 'olleh'
   reverse('Greetings!') === '!sgniteerG'
*/
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

char *reverse(char *str)
{
  int i, j = 0;
  char *reverse = NULL;

  reverse = malloc(strlen(str) * sizeof(char));

  for (i = strlen(str) - 1; i >= 0; i--, j++)
    reverse[j] = str[i];

  reverse[j] = '\0';

  return reverse;
}
