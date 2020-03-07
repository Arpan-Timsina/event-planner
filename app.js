const inputs = document.querySelectorAll('.inputlogin');
function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if (this.value == ''){
        parent.classList.remove('focus')
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})

const linputs = document.querySelectorAll('.sinput');
function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if (this.value == ''){
        parent.classList.remove('focus')
    }
}

linputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})
const navs = document.querySelectorAll('.navlinks');
navs.forEach(nav =>{
    let bar = document.querySelector('.navlist');
    nav.addEventListener('click', (e)=>{
        if(e.target.parentNode.classList == "navlinks homel"){
            e.target.parentNode.parentNode.className = 'navlist'
            e.target.parentNode.parentNode.classList.add('homenav');
    }
        else if(e.target.parentNode.classList == "navlinks gall"){
            e.target.parentNode.parentNode.className = 'navlist'
            e.target.parentNode.parentNode.classList.add('signnav');
    }
        else if(e.target.parentNode.classList == "navlinks aboutl"){
            e.target.parentNode.parentNode.className = 'navlist'
            e.target.parentNode.parentNode.classList.add('signnav');
    }
        else if(e.target.parentNode.classList == "navlinks contactl"){
            e.target.parentNode.parentNode.className = 'navlist'
            e.target.parentNode.parentNode.classList.add('signnav');
    }
        else if(e.target.parentNode.classList == "navlinks logl"){
            e.target.parentNode.parentNode.className = 'navlist'
            e.target.parentNode.parentNode.classList.add('lognav');
    }
        else if(e.target.parentNode.classList == "navlinks signl"){
                e.target.parentNode.parentNode.className = 'navlist'
                e.target.parentNode.parentNode.classList.add('signnav');
        }
    })
})