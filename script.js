new Splide( '.splide', {
	type   : 'loop',
	perPage: 3,
	perMove: 1,
    focus : 'center',
    gap: '20px',
	pagination: false,
	breakpoints: {
		640: {
			perPage: 2,
		},
	}
} ).mount();