function clic(){
    var al = document.getElementById("btn").
    al = alert("Ainda em construção")
}
function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();
const typed =new Typed('.texto',{
    strings:['Shusiman', 'Garçom'],
    typeSpeed: 120,
    backSpeed: 20,
    backDelay: 1300,
    loop:true
});



