let url='https://api.dictionaryapi.dev/api/v2/entries/en/';
let inputvalue=document.getElementsByTagName('input')[0];
let data=[];
let sample=document.getElementsByTagName('h1')[0];
let speak=document.getElementById('speak');
console.log(speak);



let search=document.getElementById('search');
search.addEventListener('click',()=>{
   let word=inputvalue.value;
    fetch(`${url}${word}`).then((data)=>data.json()).then((d)=>{
        sample.innerHTML=d[0].meanings[0].definitions[0].definition;
        console.log(d);
        speak.setAttribute('src',`${d[0].phonetics[0].audio}`)
        console.log(speak);
        
    });
});

    
    
