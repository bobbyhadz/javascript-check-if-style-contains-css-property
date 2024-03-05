console.log('bobbyhadz.com');

const box = document.getElementById('box');

// ✅ Check if CSS property is contained in Style
if (box.style.backgroundColor) {
  console.log('value is', box.style.backgroundColor);
} else {
  console.log('CSS property is not contained in style');
}

// -----------------------------------------

// ✅ Remove property from style
box.style.removeProperty('background-color');

// -----------------------------------------

// ✅ Add property to style
box.style.setProperty('background-color', 'lime');
