const btn = document.getElementById('hamburger')
const menu = document.getElementById('header-menu')
const overlay = document.getElementById('overlay')

btn.addEventListener('click', () => {

    btn.classList.toggle('open')
    menu.classList.toggle('open')
    overlay.classList.toggle('open')

    if(menu.classList.contains('open')){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = ''
    }
})

overlay.addEventListener('click', closeMenu)

document.querySelectorAll('#header-menu a').forEach(link => {
    link.addEventListener('click', closeMenu)
})

function closeMenu(){
    btn.classList.remove('open')
    menu.classList.remove('open')
    overlay.classList.remove('open')
    document.body.style.overflow = ''
}