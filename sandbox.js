const msg=document.querySelectorAll('p');

msg.forEach(p=>{
    if(p.textContent.includes('Error')){
        p.classList.add('error');
    }
    else if(p.textContent.includes('Success')){
        p.classList.add('success');
    }
    else{
        p.style.color="orange";
        p.style.border="1px dotted black"
    }
})