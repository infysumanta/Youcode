#!/usr/bin/env node
const { packageJson, indexJs } = require("./basicServer");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const dir = process.cwd();

inquirer
  .prompt([
    {
      name: "app_name",
      message: "What is your Project Name?",
      defaultValue: "youcode_app",
      default: "youcode_app",
    },
  ])
  .then((answers) => {
    const appName = answers.app_name;
    const projectPath = path.join(process.cwd(), appName);
    console.info("Project Name:", appName);
    if (appName) {
      createBasicServer(appName, projectPath);
    }
  });

const createBasicServer = (appName, projectPath) => {
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath);
  }

  fs.writeFileSync(
    path.join(projectPath, "package.json"),
    JSON.stringify(packageJson(appName), null, 2)
  );

  fs.writeFileSync(path.join(projectPath, "index.js"), indexJs);
  console.log(`Express server ${appName} created at ${projectPath}`);
};
