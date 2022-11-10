#include "main.h"
#include <stdio.h>
#include <stdlib.h>

struct node *insert(struct node *root, int val)
{
    //Write your code here
    if (!root)
        return getNewNode(val);
    if (val < root->key)
        root->left = insert(root->left, val);
    else if(val > root->key)
        root->right = insert(root->right, val);
    return root;
}

//Don't change the below code
void inorder(struct node *root)
{
    if(root == NULL)
        return;
    inorder(root->left);
    printf("%d ",root->key);
    inorder(root->right);
}

int main()
{
    struct node *root = NULL;
    root = insert(root,100);
    root = insert(root,50);
    root = insert(root,200);
    root = insert(root,150);
    root = insert(root,300);

    inorder(root);

    return 0;
}
