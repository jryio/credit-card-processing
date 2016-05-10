## Credit Card Processing

This is a Node.js command line program which simulates credit card payments and validation.

Project was created for a potential employer.

### Installation

```
$ cd credit-card-processing
$ npm install
$ npm link                      # Creates symlink to /usr/local/bin on OS X
```

**Requirements:**

 -  Node.js LTS (v4.0.0)
 -  npm v3.8.1

### Usage
 
```
$ credit-card input.txt OR $ credit-card < input.txt
```

### Testing

Tests are implemented using [Mocha](https://mochajs.org) and assertions using [Chai](http://chaijs.com).

To run tests

```
npm test
```

### Design Decisions

#### Language

For this project I chose Node.js as an opportunity to explore running command line style applications. Previously I've utilized Node.js for creating web servers and RESTful APIs using express.

I would have been equally comfortable using Python or Bash, however I saw the opportunity to learn about Node and the command line, as well as JavaScript testing.


#### Architecture

When calling `credit-card input.txt` the program executes in the following way:

```
[Executable] -> [Parser] -> [Command Execution] -> [Credit Card Object] -> [Output]

---

[bin/credit-card.js] -> [lib/parser.js] -> [lib/commands.js] -> [lib/CreditCard.js] -> [bin/credit-card.js]
```



--

To remove `credit-card` from `/usr/local/bin` (on Mac) run:

````
cd credit-card-processing
npm unlink
````
