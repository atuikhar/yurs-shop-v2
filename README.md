# abc / Frontend

```
Copyright (c) 2023-present abc. All Rights Reserved.
Proprietary and confidential information of abc.
Disclosure, use, or reproduction without written authorization of abc is prohibited.
```

## Table of Contents

1. [Welcome](#welcome)
2. [Getting started](#getting-started)
3. [Tech stack](#tech-stack)
4. [Git rules](#git-rules)
5. [Dependencies](#dependencies)
6. [Import rules](#import-rules)
7. [File naming conventions](#file-naming-conventions)
8. [Comments rules](#comments-rules)
9. [Cross browser compatibility](#cross-browser-compatibility)

## WELCOME

<p style='color:DarkOrange'>
Welcome on board - we are pleased to have you!
</p>

#### Please validate requirements

- `Node.js`: Please make sure you have recommended [Node.js](https://nodejs.org/en/) version, (suggestion v18.17.0 LTS).
- `Yarn`: Validate Yarn version `yarn --version` - should be at least 1.13.0, or
  install Yarn through the npm package manager:
  ```
  npm install --global yarn
  ```

## GETTING STARTED

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

| Command                 | Description                                                                                                |
| :---------------------- | :--------------------------------------------------------------------------------------------------------- |
| yarn clear-all          | Clears the build ouput and node_modules folder                                                             |
| yarn install            | Install all dependencies for a project                                                                     |
| yarn start              | Runs the app in the development mode assuming API's are also running locally                               |
| yarn start:backend-test | Runs the app in the development mode points to API's running on test server                                |
| yarn build              | Builds the app for production to the `../../public/app` folder.                                            |
| yarn build:ci           | Builds the app on CI for packaging                                                                         |
| yarn serve:dist         | Serves the application from dist ( build output folder) instead of dev mode, to help validate build outpit |
| yarn test               | Launches the test runner in the interactive watch mode                                                     |
| yarn lint               | Lints the code                                                                                             |
| yarn lint:fix           | Automatically fix linting errors                                                                           |
| yarn validate           | Command used by `CI/CD` to validate the code quality.                                                      |

#### `yarn install && yarn start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## TECH STACK

Please be familiar with

- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React.js](https://reactjs.org/) + hooks
- [Material-UI](https://material-ui.com/components/paper/)

## GIT RULES

- Merging:

  - Please always take a pull from main to keep the branch up-to-date with
    the base branch (usually main(master)).

    ```

    ```

- Always commit in reference to the module and the story. Here's the convention for various scenarios:

1. For adding new features commit message should be like this:

- `[Feature]: Description about the new feature that has been added`

2. For adding bug fix or any other fix:

- `[Fix]: Description of the fix that is in the commit`

3. For adding modifications:

- `[Modification]: Description of the modification`

4. For adding the code that needs to be reviewed first:

- `[WIP]: Description of what has been done`

- Don't commit directly to main(master)/staging/develop branches.

- Don't merge your branch with master/staging/develop branches
  You can submit a pull request and it needs to be reviewed by your supervisor / team lead

### Please read:

- https://docs.gitlab.com/
- https://docs.gitlab.com/ee/user/project/merge_requests/
- https://www.atlassian.com/git/tutorials/making-a-pull-request

## DEPENDENCIES

**Always version dependencies!**

If you want to add a new dependency or remove existing one - please do the following:

- Discuss the reason with the team.
- Ask your team leader.

## IMPORT RULES

Please follow the belowe import rules:

1. Group of React libraries.
2. Group of other dependencies.
3. Optional context (state manager)
4. Models
5. Views

Example:

```
import React from 'react';

import clsx from 'clsx';

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';

import AdminContext from './AdminContext';

import { CompanyModel, CompanyDepartmentType } from '../models/CompanyModel';

import AdminCompaniesView from './views/AdminCompaniesView';
import AdminTaxRuleEngineView from './views/AdminTaxRuleEngineView';
```

## FILE NAMING CONVENTIONS

Please follow the naming convencions:
`Prefix-name-[View|Context].[ts|tsx]` for example

- admin/view/`Admin`Companies`View`.tsx
- admin/view/`Admin`Logs`View`.tsx
- admin/`Admin`Context.ts

## COMMENTS RULES

Please follow comments [best practices](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/javascript/).

- File Headers

  ```
  /**
  * Summary
  *
  * Description. (use period)
  */
  ```

- Functions

  ```
  /**
  * Summary
  *
  * Description. (use period)
  *
  * @param {type}   var           Description.
  * @param {type}   [var]         Description of optional variable.
  * @param {type}   [var=default] Description of optional variable with default variable.
  * @param {Object} objectVar     Description.
  * @param {type}   objectVar.key Description of a key in the objectVar parameter.
  *
  * @return {type} Return value description.
  */
  ```

## CROSS BROWSER COMPATIBILITY

Cross browser refers to the ability for the Que platform to support all the web browsers.

- [Chrome](https://www.w3schools.com/browsers/browsers_chrome.asp) **C56**

- [Firefox](https://www.w3schools.com/browsers/browsers_firefox.asp) **FF51**

- [Internet Explorer Edge/IE](https://www.w3schools.com/browsers/browsers_explorer.asp) **Edge14** / **IE11**

- [Safari](https://www.w3schools.com/browsers/browsers_safari.asp) **S10**
