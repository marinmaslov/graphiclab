<h1 align="center">
  🎨 GraphicApp 🖌️
</h1>
<h5 align="center">
  🏷️ The two main branches are:
</h5>
<h3 align="center">
  👨🏼‍💻 Development & 🌐 Production
</h3>

## 💡 Purpose

### 👨🏼‍💻 Development

This branch contains the newest/latest code. The code isn't necessarily stable (e.g. working properly). Once developers submitted enough commits and test them all, this branch will be merged with the production one (so that it will contain the latest stable code).

### 🌐 Production

This branch contains the latest stable code (e.g. working code without errors). Once the code on the development branch is tested it can be merged into production.

## 🏷️ Other branches

🍭 **Design** - Here you can find the Low and High Fidelity designs for the app

## 💻 Versions used

1.  **Node.js v12.18.3**

    This should be installed or updated manually.

2.  **NPM 6.14.7**

    Npm comes with Node.js, bud if errors occure, installing a specific version of npm is done using the following command:

    ```shell
    npm install -g npm@6.14.7
    ```

## 🚀 How to run

1.  **Pull the code**

    Paste the following command into a command prompt of your choice (we used bash):

    ```shell
    git clone https://github.com/marinmaslov/graphiclab.git
    ```

2.  **Install the following while in graphiclab/ directory**

    Gatsby 2.24.67
    ```shell
    npm install gatsby@2.24.67
    ```

    Gatsby CLI 2.12.87
    ```shell
    npm install -g gatsby-cli@2.12.87
    ```

3.  **Install all other dependencies while in graphiclab/ directory**

    Install it from package.json with the following command:
    ```shell
    npm install
    ```
    (to be more clear: Go to the graphiclab/ directory and hit 'npm install' it will automatically install all crucial dependencies from package.json)

4.  **Create a file named .env in the directory graphiclab/**

    The TOKEN for Contentful shoud be within that file, without it you can not use graphql to fetch data from Contentful. Copy and paste the following into the .env file.
    ```shell
    CONTENTFUL_ACCESS_TOKEN=XKqR8U_cR9zSKcgg856h8OMy1zRUqNFG_QrrI3EdqZ0
    ```

5.  **Start the Gatsby App:**

    Navigate into GraphicLab’s directory and start it up.
    ```shell
    gatsby develop
    ```

    If any problems considering Gatsby Source Contentful occur execute the folloving and restart gatsby develop:
    ```shell
    npm install --save gatsby-cli
    ```

    Your site is now running at `http://localhost:8000`!

<br>
<br>
<p align="center">
Gatsby app created by Marin Maslov & Ante Turić for HCI course @ <a href="https://www.fesb.unist.hr/">FESB (UNIST)</a>
</p>
