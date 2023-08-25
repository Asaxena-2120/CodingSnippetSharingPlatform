# Code Snippet Sharing Platform

![prototype](/First_page.png "Prototype")

## Table of Contents
* About
* Demo
* Features
* Installation
* Usage
* API
* Contributing

## About {#about}
The Code Snippet Sharing Platform is a web application that allows developers to share and discover code snippets. It provides a centralized platform for users to showcase their coding skills, learn from others.

### Main Features:
Fetch and display code snippets from a dummy json server.
Allow users to search code snippets by tags.
Provide an interactive code editor for users to experiment with snippets.
Support user interaction, such as liking.

### Target Audience:
The platform is designed for software developers and programmers who want to share their code solutions, learn from others' code, and collaborate with like-minded developers.

## Demo
You can try out the live demo of the Code Snippet Sharing Platform [here](https://asaxena-2120.github.io/CodingSnippetSharingPlatform/).

Note: In order to see snippets populated on page, run json server first.

## Features
* Fetch and display code snippets from a free API.
* Allow users to search and filter code snippets by language or tags.
* Provide an interactive code editor for users to experiment with snippets.
* Support user interaction, such as liking and bookmarking snippets.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/Asaxena-2120/code-snippet-sharing-platform.git`

2. In the terminal run
`json-server --watch db.json` to start the mock server

3. Open index.html in the default browser.

## Usage
1. The Code Snippet Sharing Platform provides a user-friendly interface for browsing and interacting with code snippets.

2. Browse Snippets: Use the search to find relevant code snippets based on tags.

3. Code Editor: Click on a snippet to modify and test the code.

4. Interaction: Like your favorite snippets to save them for future reference.

## API
The platform uses a mock API to fetch code snippets for demonstration purposes. The API provides a list of snippets in JSON format.

### Endpoint:
`GET http://localhost:3000/snippets`

### Sample Response:
```
[
  {
    "id": 1,
    "title": "Sample Snippet 1",
    "language": "JavaScript",
    "code": "console.log('Hello, World!');",
    "tags": ["example", "hello-world"]
  },
  {
    "id": 2,
    "title": "Sample Snippet 2",
    "language": "Python",
    "code": "print('Hello, World!')",
    "tags": ["example", "hello-world"]
  },
  // More snippets...
]
```

## Contributing
We welcome contributions from the community! Please submit a pull request.

Made with ❤️ & 🍵
