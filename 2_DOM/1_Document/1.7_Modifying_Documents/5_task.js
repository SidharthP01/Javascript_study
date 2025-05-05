// Write a function createTree that creates a nested ul/li list from the nested object.

// For instance:

// let data = {
//   "Fish": {
//     "trout": {},
//     "salmon": {}
//   },

//   "Tree": {
//     "Huge": {
//       "sequoia": {},
//       "oak": {}
//     },
//     "Flowering": {
//       "apple tree": {},
//       "magnolia": {}
//     }
//   }
// };
// The syntax:

// let container = document.getElementById('container');
// createTree(container, data); // creates the tree in the container
let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },

    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };
function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  function createTreeText(obj) { // standalone recursive function
    let li = '';
    let ul;
    for (let key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
  }

  createTree(container, data);