AOS.init();
$(window).on("load", function () {

  $("#preloader").fadeOut();
  $("#preloader").addClass("opacity-0", 2500);
  $("body").removeClass("h-100vh");
});
let windowwidth = window.innerWidth;
  if (windowwidth <= 520){
    let text=document.getElementsByClassName("ms-3");
    text[0].classList.replace("ms-3","ms-0");
  }
  if(windowwidth <= 575){
  let why = document.getElementsByTagName("h3");
  why[0].parentElement.classList.add("text-center");
  }
  // MODAL
  const body = document.getElementsByTagName("BODY")[0];
  var atr = document.createAttribute('style');
  atr.value = 'overflow: hidden;'
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");
  
  overlay.addEventListener('click',() =>{
    const openModals = document.querySelectorAll('.apply-modal.active');
    openModals.forEach(modal => {
      body.removeAttributeNode(atr);
      closeModal(modal);
    })
  })
  openModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
      body.setAttributeNode(atr);
    })
  })

  closeModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
      const modal = button.closest('.apply-modal');
      body.removeAttributeNode(atr);
      closeModal(modal);
    })
  })
  function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }
  function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
