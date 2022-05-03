#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize)
{
	int i, j;
	*returnSize = 2;

	int* output = malloc(sizeof(int) * (*returnSize));
	if (!output)
	{
		free(output);
		return ((int*)0);
	}

	for (i = 0; i < numsSize; i++)
	{
		for (j = i+1; j < numsSize; j++)
		{
			if ((nums[i] + nums[j]) == target)
			{
				output[0] = i, output[1] = j;
				return (output);
			}
		}
	}

	return (output);
}
