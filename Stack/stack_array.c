#include<stdio.h>

#define size 3
int stack[size];
int top = -1;
int res = 0;

int isStackFull()
{
    if(top == size - 1)
        return 1;
    return 0;
}

void push(int val)
{
    if(isStackFull())
        return;
    else
    {
        ++top;
        stack[top] = val;
    }
}

int isStackEmpty()
{
    if (top == -1)
        return 1;
    return 0;
}

int pop()
{
    if(isStackEmpty())
        return -1;
    else
    {
        res = stack[top];
        --top;
        return res;
    }
}

int main()
{
    push(10);
    push(20);
    push(30);
    push(40);
    printf("%d ",pop());
    push(40);
    printf("%d ",pop());
    printf("%d ",pop());
    printf("%d ",pop());
    printf("%d ",pop());

    return 0;
}
