#include <stdio.h>
#define SIZE 10

int hash(int key)
{
	return key % SIZE;
}

int probe(int hashtable[], int key)
{
	int index = hash(key);
	int i = 0;

	while (hashtable[(index + (i * i)) % SIZE] != 0)
		i++;

	return (index + (i * i)) % SIZE;
}

void insert(int hashtable[], int key)
{
	int index = hash(key);

	if (hashtable[index] != 0)
		index = probe(hashtable, key);

	hashtable[index] = key;
}

int Search(int hashtable[], int key)
{
	int index = hash(key);
	int i = 0;

	while(hashtable[(index + (i * i)) % SIZE] != key)
		i++;

	return (index + (i * i)) % SIZE;
}

int main()
{
	int hashtable[10] = {0};

	insert(hashtable, 12);
	insert(hashtable, 25);
	insert(hashtable, 35);
	insert(hashtable, 26);

	printf("\nKey found at %d\n", Search(hashtable, 35));
	return (0);
}
