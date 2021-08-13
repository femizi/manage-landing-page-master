new Splide( '.splide', {
	type   : 'loop',
	perPage: 3,
	perMove: 1,
    focus : 'center',
    gap: '20px',
	pagination: false,
	
	
} ).mount();

var options = {
	perPage: 3,
	breakpoints: {
		640: {
			perPage: 1,
		},
	}
};
const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.closeModal')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick )


function openModal() {
    modal.style.display ='block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if(e.target == modal) {
        closeModal()
    }
}