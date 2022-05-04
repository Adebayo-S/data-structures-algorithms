#include "main.h"

int removeDuplicates(int* nums, int numsSize){
	int i, j, count = 0;
	if (numsSize < 2)
		return (numsSize);
	for (i = 0; i < numsSize - 1; i++)
	{
		if (nums[i + 1] == nums[i])
		{
			for (j = i; j < numsSize - 1; j++)
				nums[j] = nums[j + 1];
			nums[numsSize - 1] = 0;
			numsSize--;
			i--, count--;
		}
		count++;
	}
	return (++count);
}
