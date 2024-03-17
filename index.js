const input = document.getElementById('button');
function clickAlert() {
    alert('I was clicked!');
  }
  input.addEventListener('click', clickAlert);
  function addingEventListener() {
    input.addEventListener('mouseenter', function() {
        console.log('Mouse entered the button');
      });
    }
