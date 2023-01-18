function toggleMode() {
  const html= document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img= document.querySelector("#profile img")

  if(html.classList.contains('light')){
    //se tiver light mode, selecionar a imagem light
    img.setAttribute('src', './assets/Avatar-light.png.png')
   } else {
    //se tiver sem light, manter a img normal
    img.setAttribute('src', './assets/avatar.png.png')
  }

}