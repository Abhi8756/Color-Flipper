const colors=["green","red","purple","yellow"];
const btn=document.querySelector('#btn');
btn.addEventListener('click',()=>{
    const rand=Math.random()*colors.length;
    const color=colors[Math.floor(rand)];
    document.querySelector('.container').style.backgroundColor=color;
    document.querySelector('#col-name').textContent=color;
    document.querySelector('#col-name').style.color=color;
})
