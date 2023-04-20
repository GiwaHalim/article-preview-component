const path = document.querySelectorAll('path')
const share = document.querySelector('.share')
const dis = document.querySelector('.dis')


let status = 'clicked';

share.addEventListener('click', function(){
    dis.classList.toggle('dist');
    path[0].getAttribute('fill')  === '#6E8098' ? path[0].setAttribute('fill', 'white') : path[0].setAttribute('fill', '#6E8098');
    if(status === 'clicked'){
        share.style.background = 'hsl(217, 19%, 35%)'
        status = 'unclicked'
    }else if(status === 'unclicked'){
        share.style.background = 'hsl(210, 46%, 95%)'
        status = 'clicked'
    }
})


const shareMobile = document.querySelector('.share-mobile')
const userMobile = document.querySelector('.user-mobile')
const sharer = document.querySelector('.sharer')
const end2 =document.querySelector('.end2')

shareMobile.addEventListener('click', function () {
    path[1].getAttribute('fill')  === '#6E8098' ? path[1].setAttribute('fill', 'white') : path[1].setAttribute('fill', '#6E8098');
    if(status === 'clicked'){
        userMobile.style.display = 'none';
        sharer.style.display = 'flex';
        end2.style.background = 'hsl(217, 19%, 35%)'
        shareMobile.style.background = 'hsl(214, 17%, 51%)'
        status = 'unclicked'
    }else if(status === 'unclicked'){
        userMobile.style.display = 'flex';
        sharer.style.display = 'none';
        end2.style.background = 'white'
        shareMobile.style.background = 'hsl(210, 46%, 95%)'
        status = 'clicked'
    }
    
})