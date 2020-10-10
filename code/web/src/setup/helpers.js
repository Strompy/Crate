// Helpers

// Render element or component by provided condition
//* conditinal rendering check
//* renderFn() is a render return 
//* Being used in: /web/src/modules/common/Layout.js
//* Being used in: /web/src/modules/product/Detail.js
//* Being used in: /web/src/modules/admin/product/CreateOrEdit.js
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null
}

// Substring with ...
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
//! Not being used in project currently no imports of function
export function subString(string, length = 0) {
  return string.length > length ? `${ string.substr(0, length) }...` : string
}

// Duplicate object
//* makes copy
//! Not being used in project currently no imports of function
//* I believe its being used to add items to order
export function duplicate(object) {
  return Object.assign({}, object)
}

// Return empty string if value is null
//* null === '' || value
//! Not being used in project currently no imports of function
export function nullToEmptyString(value) {
  return value === null ? '' : value
}

// Return zero if value is null
//* null === 0 || value
//? Where are we having to make these null conversions?
//? It this good practice? 
//! Not being used in project currently no imports of function
export function nullToZero(value) {
  return value === null ? 0 : value
}

// Add (s) to any string by count
//* adds plural to value if multiple 
export function plural(value) {
  return value === 1 ? '' : 's'
}

//* Check if object is empty
//* Being used in: /web/src/modules/user/api/state.js
export function isEmpty(obj) {
  let name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  if (obj.constructor !== Object) {
    return false;
  }
  return true;
}

// Slug
//* Most used helper in project used to keep text formating correct in item descriptions, user names, api responses, mutations, products,  etc... 
//* I love the regex
export function slug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    //* Look through program and see why this regex expression is commented out. 
    //? It it causing errors?
    //! .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')            // Trim - from end of text
}
