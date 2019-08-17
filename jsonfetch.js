// JavaScript Document
// A script to use JS Fetch API to retrieve information from JSON (in this case from r/onionhate) and to display it

// https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

// Creative Commons Zero v1.0 Universal - thanks guys!
// adapted from the MDN fetch() example at https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html

// Unfortunately variables had to be moved inside a function as scope issues conflicted with another script

fetch('https://www.reddit.com/r/onionhate.json')
.then(function(response) {
  if (!response.ok) {
    throw new Error("uh oh: HTTP error, status = " + response.status); // We check that the Response Status = 500 before proceeding
  }
  return response.json();
})
.then(function(json) {
  var pSelect = document.querySelector('p'); // We select elements in our webpage to display the fetched content in. You need to have an element in your webpage for this to work, that matches either the tag or the id of the querySelector
  var aSelect = document.querySelector('a'); // If you want, you can use document.querySelector('#orange'); where id is a proper id (e.g <p id="orange">) to display info
  var requestURL = 'https://www.reddit.com/r/onionhate.json'; // Keeping variables inside function limits their scope and makes sure there aren't any conflicts. If you leave them outside a function, they will become a global variable and may break your code

  var createHeader = document.createElement('h1'); // Although you are selecting a element to display content in, you can still alter the formatting by adding additional tags like this
  var createPara = document.createElement('p');
  var createBold = document.createElement('b');
  var createBolder = document.createElement('b');

  // get ready!
  var contents = json.data && json.data.children && json.data.children["1"] && json.data.children["1"].data && json.data.children["1"].data.title;
  createHeader.innerHTML = contents; // To display deeply nested objects, you'll need to make sure you ensure that you use && statements and move down the hierarchy, otherwise you'll receive an undefined error
  var username = json.data && json.data.children && json.data.children["1"] && json.data.children["1"].data && json.data.children["1"].data.author;
  createPara.innerHTML = "by " + username;
  var potato = json.data && json.data.children && json.data.children["1"] && json.data.children["1"].data && json.data.children["1"].data.score;
  createBold.innerHTML = potato + " points";
  var linebreak = document.createElement('br');
  var grassJellyDrink = json.data && json.data.children && json.data.children["1"] && json.data.children["1"].data && json.data.children["1"].data.permalink;
  document.getElementById("redditlink").href = "https://reddit.com" + grassJellyDrink; // variables are fun! Which is why you'll be able to add extra text before and after you use a JS object.

  aSelect.appendChild(createHeader);
  pSelect.appendChild(createPara);
  pSelect.appendChild(createBold);
  pSelect.appendChild(linebreak);
  pSelect.appendChild(createBolder);
})
.catch(function(error) {
  console.log("oof - " + error)
})


// x-moose: majestic (me when I replace dreamweaver with atom or vs code) //
