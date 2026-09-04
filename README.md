## DEMO TODO FULLSTACK APPLICATION

- Introduction https://docs.google.com/presentation/d/1-f9mTJ7ig0561gnO1is76TprXmL4mfNe5eOKQv1JKF4/edit?usp=sharing
- Fork this repo & clone it to start your fullstack application development
- References folder contain completed demo application

#### 1. Setup Development Environment

##### 1.1 Windows

- VSCode https://code.visualstudio.com/
- NodeJS https://nodejs.org/en
- Git https://git-scm.com/downloads
- Terminal https://github.com/microsoft/terminal?tab=readme-ov-file#microsoft-store-recommended
- Scoop https://github.com/ScoopInstaller/Install#readme
- Lazygit https://github.com/jesseduffield/lazygit#scoop-windows

##### 1.2 MacOS

- VSCode https://code.visualstudio.com/
- Homebrew https://brew.sh/
- NodeJS `brew install node@24`
- Git `brew install git`
- Lazygit https://github.com/jesseduffield/lazygit#homebrew

#### 2. Git Configuration

- `git config --global user.name "YOUR NAME HERE"`
- `git config --global user.email "your@email.here"`

#### 3. VSCode Extensions

- Auto Rename Tag by Jun Han
- Prettier - Code formatter by Prettier
- Tailwind CSS IntelliSense by Tailwind Labs

#### 4. VSCode setting.json

```json
{
  "editor.wordWrap": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "workbench.editor.labelFormat": "short",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```

#### Setup MongoDB database

- https://www.mongodb.com/docs/atlas/getting-started/ - Follow under tab “Atlas UI” step 1 to 4 only
- Connect database with MongoDB Compass

---

Created by 'Azab Kubur' Team.

Project is licensed under the [MPL-2.0](references/LICENSE) license.
