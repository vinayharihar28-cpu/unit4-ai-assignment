## Usage Guide

This file contains step-by-step examples for running the example file and preparing a minimal test environment.

### Run the example file

Open PowerShell and run:

```
cd "d:\BCA Sem 3\VCS\VCS project\UNIT-4 Assignment\Unit4-ai-assignment\unit4-ai-assignment"
node test_sample.js
```

If `test_sample.js` is not runnable because `fetchData` is missing, create a simple `fetchData.js` in the same directory:

```
// fetchData.js
module.exports = async function fetchData() {
  return { status: 'ok', data: [] };
};
```

Then update `test_sample.js` to actually call and log the result, for example:

```
const fetchData = require('./fetchData');

(async () => {
  const result = await fetchData();
  console.log(result);
})();
```

### Add a test runner (optional)

Install `jest`:

```
npm init -y
npm install --save-dev jest
```

Add to `package.json`:

```
"scripts": {
  "test": "jest"
}
```

Create a test file `__tests__/fetchData.test.js`:

```
const fetchData = require('../fetchData');

test('fetchData returns status ok', async () => {
  const res = await fetchData();
  expect(res).toHaveProperty('status', 'ok');
});
```

Run tests:

```
npm test
```

### Notes

- Use the `node` command to run single files. Use `npm test` when a test-runner is configured.
- Adjust paths if you move files out of the repository root.
