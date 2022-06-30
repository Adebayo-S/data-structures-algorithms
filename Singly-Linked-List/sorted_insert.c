#include "lists.h"

/**
 * sorted_insert - adds a new node in a sorted way
 * @head: head of a list.
 * @n: data to be inserted
 *
 * Return: nothing.
 */
void sorted_insert(listint_t **head, int n)
{
	listint_t *temp;
	listint_t *new = NULL;

	new = (listint_t *)malloc(sizeof(listint_t));
	if (!new)
		return (NULL);

	new->n = n;
	new->next = NULL;

	if (!(*head))
		*head = new;
	else
	{
		temp = *head;
		while (temp->next)
		{
			if (temp->n < n && temp->next->n > n)
			{
				new->next = temp->next;
				temp->next = new;
				return;
			}
			if (temp->n > n)
			{
				new->next = temp;
				*head = new;
				return;
			}

			temp = temp->next;
		}

		temp->next = new;
	}
}
