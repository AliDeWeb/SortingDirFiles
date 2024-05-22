# 📁 Folder File Sorter

Welcome to the Folder File Sorter project! This simple Node.js application takes a folder path and sorts all the files within that folder by their creation date, renaming them in numerical order. 📅🔢

## 🚀 Features

- Sorts files by their creation date.
- Renames files in a numerical sequence.
- Supports various file formats.

## 📋 Prerequisites

Make sure you have Node.js installed on your machine. If not, follow the instructions below to install it.

### 🛠️ Installing Node.js

1. Go to the [Node.js website](https://nodejs.org/) and download the installer for your operating system.
2. Run the installer and follow the setup instructions.

To check if Node.js is installed correctly, run the following command in your terminal:

```sh
node -v
```
You should see the version number of Node.js if the installation was successful.

### 📦 Installation

Clone this repository to your local machine:
```sh
git clone https://github.com/AliDeWeb/SortingDirFiles.git
```
Navigate to the project directory:
```sh
git cd SortingDirFiles
```
Install the required dependencies:
```sh
npm install
```

### 📂 Usage

You'll see a text file named folderPath.txt in the root directory of the project. Inside this file, specify the path to the folder you want to sort.

Then Run the application:
```sh
node ./src/index.js
```
The files in the specified folder will be sorted by their creation date and renamed in numerical order.

### 📝 Note
Ensure that the "folderPath.txt" file contains a valid and correct path to the folder you want to sort.
The program will throw an error if the folder is empty or if the path is incorrect.

<hr />

👨‍💻 Made with ❤️ by [AliDeWeb](https://www.github.com/alideweb)