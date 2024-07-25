### Type

Type can be one of the following, or anything else

#### Most common:

- **feat**: A new feature
  - Example: `feat: add user authentication`
- **fix**: A bug fix
  - Example: `fix: resolve issue with data fetching`

#### Other:

- **build:** Changes that affect the build system or external dependencies.
- **chore:** Routine tasks.
- **ci:** Continuous integration changes.
- **docs:** Documentation updates.
- **style:** Code style changes (formatting, missing semi-colons, etc.).
- **refactor:** Code changes that neither fix a bug nor add a feature.
- **perf:** Performance improvements.
- **test:** Adding or correcting tests.

### Specifications

- Use the imperative, present tense: "change" not "changed" nor "changes".
- **Type Prefix:** Required (e.g., feat, fix), followed by an optional scope, optional `!`, and a required colon and space.
- **Scope:** Optional, a noun describing the section of the codebase.
- **Description:** Required, short summary after the type/scope prefix.
  value`.
- **Case Sensitivity:** Please use lower-case for type. Scope, description can be any case

### Examples

#### Valid Commit Messages

- `feat: allow provided config object to extend other configs`
- `feat(api)!: send an email to the customer when a product is shipped`
- `fix: prevent racing of requests`
- Please refer to Notion "Commit conventions" page for more details and examples

### Additional Guidelines

- Keep the commit messages concise yet descriptive.
- Use the commit descrription to explain the "why"
- Avoid committing large changes in a single commit; break them down into smaller, logical commits.
- Don't end description with dot.

### Automated Enforcement

To ensure adherence to this convention, we use Commitlint and Husky. These tools automatically check commit messages and prevent non-compliant commits.

#### Commitlint Configuration

Our `commitlint.config.js` is configured as follows:

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", []],
    "type-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
    "header-min-length": [2, "always", 10],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)(?:\(([^)]+)\))?!?:\s(.+)$/,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
};
```
