// // const msg=document.querySelectorAll('p');

// // msg.forEach(p=>{
// //     if(p.textContent.includes('Error')){
// //         p.classList.add('error');
// //     }
// //     else if(p.textContent.includes('Success')){
// //         p.classList.add('success');
// //     }
// //     else{
// //         p.style.color="orange";
// //         p.style.border="1px dotted black"
// //     }
// // })




// // const items=document.querySelector('li');
// // console.log(items)
// // items.forEach(item=>{
// //     item.addEventListener('click',(e)=>{
// //         console.log("Clicked");
// //         console.log(e.target);
// //         e.target.style.textDecoration='line-through';
// //     })
// // })

// const ul=document.querySelector('ul');

// const uls=document.querySelectorAll('ul');

// console.log(ul);
// console.log(uls);

// const btn=document.querySelector('button');

// btn.addEventListener('click',()=>{
//     // ul.innerHTML+='<li>Something</li>';
//     const li=document.createElement('li');
//     const text=window.prompt("What to do")
//     li.innerText=text;
//     ul.append(li);
// })

// ul.addEventListener('click',(e)=>{
//     if(e.target.tagName==='LI'){
//         e.target.remove();
//     }
// })

const form=document.querySelector('.signup-form');
//const username=document.querySelector('#username');

form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(form.username.value)
})

let use="sreevats"
let patt=/[a-z]{9,}/;
console.log(patt.test(use));
