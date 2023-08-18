// What is DOM?
// DOM stands for "Document Object Model." It's a programming interface provided by web browsers that allows scripts (like JavaScript) to interact with the content and structure of HTML and XML documents. In simple terms, the DOM represents a structured tree of objects that correspond to the elements and components of a web page.

// Key points about the DOM:

// 1. **Structured Representation:** The DOM represents a web page's structure as a hierarchical tree of objects, where each object corresponds to an element, attribute, or piece of content in the HTML or XML document.

// 2. **Dynamic Interaction:** Through the DOM, scripts can dynamically modify, add, or remove elements, attributes, and content on a web page. This enables the creation of interactive and dynamic web applications.

// 3. **Platform Independence:** The DOM is not tied to a specific programming language or platform. It's a standard interface that can be used by different programming languages to interact with web documents.

// 4. **Document Modification:** Using JavaScript, you can manipulate the DOM to change the appearance, content, and behavior of a web page without requiring a full page reload.

// 5. **Event Handling:** The DOM allows scripts to respond to events such as clicks, form submissions, and keyboard interactions, enabling interactivity.

// 6. **Hierarchical Structure:** The DOM tree structure reflects the nesting of HTML elements in the document. Each element becomes a node in the tree.

// 7. **Cross-Browser Compatibility:** While there are variations in browser implementations, the core concepts of the DOM remain consistent, allowing developers to create cross-browser compatible web applications.

// Example:
// Consider the following HTML code:

/* <!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>  
  <body>
    <h1>Hello, DOM!</h1>
    <p>This is an example of the Document Object Model.</p>
  </body>
</html>

*/

// The corresponding DOM tree would represent the `<html>`, `<head>`, `<title>`, `<body>`, `<h1>`, and `<p>` elements, as well as their text content and attributes. JavaScript can be used to access and modify these elements programmatically.

// Overall, the DOM is a fundamental concept in web development, allowing scripts to interact with and manipulate the structure and content of web documents, enabling dynamic and interactive web experiences.

console.log(window.document);
