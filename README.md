# Welcome messages

We want to build a simple server. The server should render a form to the user. After some data is provided and sent back to the server; the user should receive a welcome message.

# Requirement 1

Render a simple form to gather from the user:

1. First name
2. Last Name
3. Language to study (Java, PHP, etc.) - the list is of your choice

**BONUS:** Place your form in a file named form.html. Read it and return it as a response to the client when requested. [Hint](https://nodejs.dev/learn/reading-files-with-nodejs)

**BONUS:** Retrieve all the possible messages to study in our academy from a "database" in  database/languages.json

# Requirement 2

Create an endpoint named __/greetings__; that will gather the fields passes from the form in a QueryString.

Respond to the user with a simple message. This message should be generated similar to this [kata](https://www.codewars.com/kata/58279e13c983ca4a2a00002a). Actually, try to reuse it.

**BONUS**: Write a file in the root directory with name __messages.txt__. Write all the messages generated in this server. **Don't** remove previous messages.

# Requirement 3

Move the greeting functionality to a **custom module**. Place it inside a folder named **Greetings**. 

Export the module in a right way to use it. You'll need also to __require__ the module in the app.js.

# Requirement 4

Use a **third-party** module to generate a random welcome message each time the user submits the form.

As a part of your tasks as a developer; you should be able to find out which tools and libraries may help you in order to accomplish client's requirements. Have a look at http://nnpmjs.com and try to find a package that will generate a random welcome message each time u use it.


<details>
  <summary>Hint</summary>
  <p>Have a look at this <a href="https://www.npmjs.com/package/greetings"> one</a></p>
</details>