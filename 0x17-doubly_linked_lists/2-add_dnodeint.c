#include "lists.h"

/**
 * add_dnodeint - function that adds a new node at the beginning
 * of a dlistint_t list
 * @head: head of the list
 * @n: value of the element
 * Return: the address of the new element
 */

dlistint_t *add_dnodeint(dlistint_t **head, const int n)
{
	dlistint_t *new;
	dlistint_t *y;

	new = malloc(sizeof(dlistint_t));
	if (new == NULL)
		return (NULL);

	new->n = n;
	new->prev = NULL;
	y = *head;

	if (y != NULL)
	{
		while (y->prev != NULL)
			y = y->prev;
	}

	new->next = y;

	if (y != NULL)
		y->prev = new;

	*head = new;

	return (new);
}
