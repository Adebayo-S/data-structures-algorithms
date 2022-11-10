#ifndef MAIN_H
#define MAIN_H

#include <stdlib.h>
#include <stdio.h>

struct node
{
    int key;
    struct node *left;
    struct node *right;
};

struct node *getNewNode(int val);

#endif
