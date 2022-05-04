/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
	let i, j, count = 0;
	for (i = 0; i < nums.length; i++)
	{
		if (nums[i + 1] == nums[i])
		{
			for (j = i; j < nums.length - 1; j++)
				nums[j] = nums[j + 1];
			nums.pop();
			i--, count--;
		}
		count++;
	}
	return (count);
};
