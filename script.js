document.querySelectorAll('a[herf^="#"]').forEach(anchor => {

    anchor.addEvetListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute
            ('herf')).scrollIntoView({
                behavior : 'smooth'
            });
    });
    
});


window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)':
        navbar.style.backgroundColor ='rgba(10,10,10,0.95)';
})