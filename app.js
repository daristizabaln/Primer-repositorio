/*/*//*//*/
//MENU HAMBURGUESA
/*/*//*/*/

const btnOpenNav = document.querySelector("#nav-open");
const btnCloseNav = document.querySelector("#nav-close");
const mainHeader = document.querySelector('#header')
const navMobile = document.querySelector("#nav-mobile")
const navContent = document.querySelector("#nav-content")

btnOpenNav.addEventListener('click', ()=>{
  toggleMenu()
  navMobile.classList.add('animation-bounce-nav')
  navContent.classList.add('animation-content')
})
btnCloseNav.addEventListener('click', ()=>{
  toggleMenu()
})

function toggleMenu(){
  mainHeader.classList.toggle('invisible');
  navMobile.classList.toggle('hidden'); 
}

/*/*//*/*/
//NAVEGACION POR TABS
/*/*//*/*/

//LLamar los botones de los tabs
const tabs = document.querySelectorAll('[name=tab-li]')
const sections = document.querySelectorAll('[name=section]')


//Recorre todos los tabs, recuperar cada tab y su indice
tabs.forEach( (tab, i) => {

  //Evento a cada tab
  tab.addEventListener('click', ()=>{

    //recorre todos los tabs de nuevo,
    tabs.forEach( (tab, i) => {
      //Quita la clase active a cada li
      tab.classList.remove('tab-active')
      //Por cada tab que recorre, recorre el grupo de bloques de la misma posicion, y va añadiedon la clase para esconderlos
      sections[i].classList.add('opacity-0')
    } )
    
    //En el tab que hemos seleccionado, le añadimos la clase active
    tab.classList.add('tab-active')
    //el bloque con el mismo indice al tab seleccionado, aparecera
    sections[i].classList.remove('opacity-0');

  })
} )


//FAQs section

const questions = document.querySelectorAll('[name=question]');
questions.forEach( question => {
  question.addEventListener('click', e =>{
    question.parentElement.classList.toggle('faq-active')
  })
}
)