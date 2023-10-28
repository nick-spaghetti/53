// add whatever parameters you deem necessary
const longestFall = (nums) => {
	let counter = 1;
	let maxCounter = 0;
	if (nums.length === 0) return 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			counter++;
			maxCounter = Math.max(counter, maxCounter);
		} else {
			counter = 1;
		}
	}
	return maxCounter || 1;
};
