 const showLinks = document.querySelector('.hidden');
 const activeElement = document.querySelector('.active');
 const hideMichelleText = document.querySelector('.container');
 const hideMichelleImg = document.querySelector('.michelle');

 showLinks.addEventListener('click', () => {
     // Check if the content div is currently visible
     if (activeElement.style.display === 'block') {
         activeElement.style.display = 'none';
         hideMichelleText.style.display= 'none';
         hideMichelleImg.style.display= 'none';
          // Hide the content
     } else {
         activeElement.style.display = 'block';
         hideMichelleImg.style.display= 'block';
         hideMichelleText.style.display= 'block';
          // Show the content
     }
 });

