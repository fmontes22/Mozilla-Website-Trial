 alert('Warning, this is a popup alert!!!');

  // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

function toggleImage(foxImage){
  document.querySelector('#image').classList.toggle('hidden');
}

.hidden{
  display: none;
}

.w-100{
  width: 100%;
}

.mb-10{
  margin-bottom: 10px;
}

<button onClick="toggleImage(foxImage)" class="w-100 mb-10">Show/Hide</button>

<img src="firefox_logo_new.webp" id="image" class="hidden w-100"/>