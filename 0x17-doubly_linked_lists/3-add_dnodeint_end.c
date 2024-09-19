#include "lists.h"

/**
 * add_dnodeint_end - Function that adds a new node at the end
 * of a dlistint_t list
 * @head: head of the list
 * @n: value of the element
 * Return: the address of the new element
 */

dlistint_t *add_dnodeint_end(dlistint_t **head, const int n)
{
	dlistint_t *y;
	dlistint_t *new;

	new = malloc(sizeof(dlistint_t));
	if (new == NULL)
		return (NULL);

	new->n = n;
	new->next = NULL;

	y = *head;

	if (y != NULL)
	{
		while (y->next != NULL)
			y = y->next;
		y->next = new;
	}
	else
	{
		*head = new;
	}

	new->prev = y;

	return (new);
}
