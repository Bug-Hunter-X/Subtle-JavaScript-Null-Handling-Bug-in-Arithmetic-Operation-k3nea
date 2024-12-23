# Subtle JavaScript Null Handling Bug

This repository demonstrates a subtle bug in JavaScript related to null value handling in arithmetic operations.  The `foo` function aims to add two numbers, but it handles null values unexpectedly.  The solution provides a more robust approach.

## Bug Description

The bug lies in how the function handles null values in the addition. The conditional correctly checks for null values; however, the implementation doesn't explicitly handle the case where one or both inputs might be non-numbers.  While it works correctly with numbers and null, unexpected results might occur with other non-number values. 

## Solution

The solution in `bugSolution.js` demonstrates a more robust solution by checking for non-number inputs before performing the addition, resulting in a more predictable and error-resistant function.
