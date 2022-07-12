const btnModal = document.querySelector('.btn-modal');
const modalWrappper = document.querySelector('.content-wrapper');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.close');

btnModal.addEventListener("click", function(){
  modalWrappper.style.display = "block"
})

modalClose.addEventListener("click", function(){
  modalWrappper.style.display = "none"
})


window.addEventListener('click', function(e){
  if(e.target === modalWrappper){
    modalWrappper.style.display= "none"
  }
})

       