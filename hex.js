const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexcolor='#';

const btn=document.querySelector('#btn');
btn.addEventListener('click',()=>{
    for(let i=1;i<=6;i++){
        let num=Math.floor(Math.random()*hex.length);
        hexcolor+=hex[num];
    }
    document.querySelector('.container').style.backgroundColor=hexcolor;
    document.querySelector('#col-name').textContent=hexcolor;
    //document.querySelector('#col-name').style.color=hexcolor;
    hexcolor='#';
})