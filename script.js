 const menuItens = document.querySelectorAll('.menu a[href^="#"]')
 menuItens.forEach(item => {
  item.addEventListener('click', scrollSuave)
 })
function scrollSuave() {
  event.preventDefault()
  const element = event.target
  const id = element.getAttribute("href")
  const to = document.querySelector(id).offsetTop
  
  window.scroll({
    top: to ,
    behavior: 'smooth'
  })
}


document.querySelector("#items")
.addEventListener("wheel", event => {
  if(event.deltaY > 0) {
    event.target.scrollBy(200, 0)
  }else{
    event.target.scrollBy(-200, 0)
  }
})