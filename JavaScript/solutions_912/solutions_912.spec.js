import { describe, expect, test } from "vitest";
import { heapSort, mergeSort, quickSort } from "./solutions_912.js";

const testCases = [
	{ nums: [5, 2, 3, 1], expected: [1, 2, 3, 5] },
	{ nums: [5, 1, 1, 2, 0, 0], expected: [0, 0, 1, 1, 2, 5] },
	{ nums: [], expected: [] },
	{ nums: [1], expected: [1] },
	{ nums: [2, 1], expected: [1, 2] },
	{ nums: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
	{ nums: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
	{ nums: [1000, -1000, 0, 999, -999], expected: [-1000, -999, 0, 999, 1000] },
	{ nums: [3, 3, 3, 3], expected: [3, 3, 3, 3] },
	{ nums: [4, 2, 4, 3, 2, 1], expected: [1, 2, 2, 3, 4, 4] },
	{ nums: [-1, -3, -2, -4, -5], expected: [-5, -4, -3, -2, -1] },
	{ nums: [-5, -1, 0, 2, -3, 4], expected: [-5, -3, -1, 0, 2, 4] },
];

describe("quickSort", () => {
	testCases.forEach(({ nums, expected }, index) => {
		test(`case ${index}`, () => {
			const result = Array.from(nums);
			quickSort(result, 0, result.length - 1);
			expect(result).toEqual(expected);
		});
	});
});

describe("mergeSort", () => {
	testCases.forEach(({ nums, expected }, index) => {
		test(`case ${index}`, () => {
			const result = Array.from(nums);
			mergeSort(result, 0, result.length - 1);
			expect(result).toEqual(expected);
		});
	});
});

describe("heapSort", () => {
	testCases.forEach(({ nums, expected }, index) => {
		test(`case ${index}`, () => {
			const result = Array.from(nums);
			heapSort(result, 0, result.length - 1);
			expect(result).toEqual(expected);
		});
	});
});
