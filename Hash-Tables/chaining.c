#include "../Singly-Linked-List/sorted_insert.c"
#include "../Singly-Linked-List/lists.h"

listint_t *search(listint_t *head, int key)
{

	while (head != NULL)
	{
		if (head->n == key)
			return (head);
		head = head->next;
	}

	return (NULL);
}

int hash(int key)
{
	return key % 10;
}

void insert(listint_t **hashtable, int key)
{
	int idx = hash(key);
	sorted_insert(&hashtable[idx], key);
}

int main()
{
	listint_t** hashtable = malloc(sizeof(listint_t*) * 10);
	listint_t *temp_a, *temp_b, *temp_c;
	int i;

	for(i=0; i<10; i++)
		hashtable[i] = NULL;

	insert(hashtable, 12);
	insert(hashtable, 22);
	insert(hashtable, 42);

	temp_a = search(hashtable[hash(22)], 22);
	temp_b = search(hashtable[hash(12)], 12);
	temp_c = search(hashtable[hash(65)], 65);

	printf("ans-> %d\n", temp_a->n);
	printf("ans-> %d\n", temp_b->n);
	printf("ans-> %d\n", temp_c->n); /* seg fault */

	return 0;
}
