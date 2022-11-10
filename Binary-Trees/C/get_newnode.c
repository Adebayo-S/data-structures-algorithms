#include "main.h"

/**
 * get a newnode with the provided value
 *
 * @val: the value of the node
 * return:
*/
struct node *getNewNode(int val)
{
    struct node *newNode;

    newNode = malloc(sizeof(struct node));
    newNode->key = val;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

int main()
{
    struct node *root = NULL;

    root = getNewNode(10);
    if (root && root->left == NULL && root->right == NULL)
        printf("%d", root->key);

    return 0;
}
