## Contributing Guide

Thank you for considering contributing to this project. The following steps describe how to propose changes and submit pull requests.

### Basic workflow

1. Fork the repository.
2. Clone your fork locally.

```
git clone <your-fork-url>
cd unit4-ai-assignment
```

3. Create a topic branch:

```
git checkout -b feat/short-description
```

4. Make your changes, follow the code style used in the repo, and commit with clear messages.

```
git add .
git commit -m "feat: add example fetchData implementation"
```

5. Push the branch and open a Pull Request against the `main` branch.

### Commit message style

- Use imperative, lower-case type prefixes: `feat:`, `fix:`, `docs:`, `chore:`.
- Keep the subject line concise (50 characters or less) and, if needed, add a body describing motivation and details.

### Pull Request checklist

- [ ] The change is small and focused.
- [ ] Code compiles and runs locally.
- [ ] Tests added (or explanation provided why tests are not applicable).
- [ ] Documentation updated if behaviour changed.

### Coding style

- Keep code simple and readable.
- Use `async/await` for asynchronous code where appropriate.
- Prefer descriptive variable names.

If you'd like help implementing a specific change (scaffolding a test, adding a `fetchData` example, or configuring `jest`), open an issue or ask here and I can implement it for you.
