
  // heart
  window.onload = function() {
    const icoHearts = document.querySelectorAll('.heart')
    icoHearts.forEach(heart => {
      heart.addEventListener('click', () => {
        heart.classList.toggle('active')
        if(heart.classList.contains('active')) {
          heart.innerHTML = '<i class="fa-solid fa-heart"></i>'
        }
        else{
        heart.innerHTML = '<i class="fa-regular fa-heart"></i>'
        }
        
      })
    })
  }