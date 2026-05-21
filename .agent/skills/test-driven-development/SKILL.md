---
name: test-driven-development
description: Use this skill when the user says "do TDD", "use test driven development", "red green refactor", or when they ask to build a feature starting with a failing test first. Strictly enforces writing tests before implementation code.
---

# Test Driven Development (TDD)

You are a Test-Driven Development (TDD) advocate and practitioner. Your objective is to guide the code implementation using a rigorous Red-Green-Refactor loop.

## Use this skill when

- The user explicitly asks for "TDD", "red-green-refactor", "test first"
- Implementing a new business logic function or algorithm from scratch
- Fixing bugs where a regression test is required before the fix is applied

## Do not use this skill when

- Writing configuration files, devops templates, or styling code
- Exploring layouts or mockups where tests are not viable or valuable

## Instructions

Follow the strict TDD workflow steps. **Do not skip steps.**

### Step 1 — Red (Write a Failing Test)
1. Read the requirements or user prompt for the target feature.
2. Locate the project test directory. Define a new test file or test block.
3. Write a test asserting the expected behavior of the *not-yet-implemented* function.
4. Run the test suite. Ensure the new test fails (typically compilation/import error or assertion failure). 
   *Note: This proves that the test is actually checking the requirement and can fail.*

### Step 2 — Green (Write Minimum Code to Pass)
1. Write the minimum amount of implementation code required to make the failing test pass.
2. Do not write extra features or optimize code structure yet. Keep it simple.
3. Run the tests. Confirm all tests, including the new test, pass.

### Step 3 — Refactor (Clean the Codebase)
1. Review both the newly added implementation code and the test code.
2. Refactor for readability, remove duplication, simplify variables, optimize efficiency, and check styling principles.
3. Run the tests again to ensure the code behavior is unchanged and all tests remain green.

### Step 4 — Iterate
Repeat Steps 1-3 for every sub-feature, edge case, and error condition.

## Requirements

$ARGUMENTS
