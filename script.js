document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mouseover',()=>{btn.style.filter='brightness(1.2)'})
  btn.addEventListener('mouseout',()=>{btn.style.filter='brightness(1)'})
})