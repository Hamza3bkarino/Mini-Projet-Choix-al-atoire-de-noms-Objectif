
const nameInput = document.getElementById("name");
const AjouterBtn = document.getElementById("AjouterBtn");   // for retrieve elements
const chooseBtn=document.getElementById('Choiser')
const divOfList=document.getElementById('list')
const ul = document.createElement('ul')
ul.id='listUl'  //add id to ul

let names=[]
let i=1;
AjouterBtn.addEventListener('click', function AjouterName(){

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);    // for rgb colors
    const blue = Math.floor(Math.random() * 256);

    if( (names.includes(nameInput.value) === false) && ( nameInput.value.trim().length!=0) ){ // if names dont have value 
            divOfList.style.display='block'
            chooseBtn.style.display='block'

            if(ul.contains(noName)){        // if ul dont contain noName
                ul.removeChild(noName);
            }            

            const style = document.createElement('style')
            const li = document.createElement('li')
            li.id=`link${i}`

            divOfList.appendChild(ul)
            ul.appendChild(li)

            li.textContent= nameInput.value
            names.push(nameInput.value)
            console.log(names);
            
            nameInput.value = ''

            style.textContent=`
                #link${i}::marker{
                    color: rgb(${red}, ${green}, ${blue});
                    font-size:25px;
                }
            `    
            document.head.appendChild(style)

            

    }else if(names.includes(nameInput.value)===true){

        alert('This name already existe')
        nameInput.value = ''

    }else if(nameInput.value.trim().length==0){
        alert('you cant add an empty value')
        nameInput.value = ''
    }
    i++
})


const popup=document.getElementById('popup')
const overlay=document.getElementById('overlay')
const popupBtn=document.getElementById('popupBtn')
const paraPopUp=document.getElementById('para_Popup')


chooseBtn.addEventListener('click',function ChooseName(){
    const randomNumber= Math.floor(Math.random() * names.length)
    overlay.style.display ='block'
    popup.style.display ='block'
    paraPopUp.textContent=names[randomNumber]


})



let noName = document.createElement('p'); 
noName.id = 'noName';
noName.innerHTML = 'There are no name now';
noName.style.marginLeft='-70px'
const listItems = ul.children

popupBtn.addEventListener('click',function closePopUp(){
    overlay.style.display ='none'
    popup.style.display ='none'
    

        for( let i = 0 ; i<listItems.length; i++){
            if( listItems[i].textContent===paraPopUp.textContent){ 
                       
                names.splice(names.indexOf(listItems[i].textContent),1) 
                ul.removeChild(listItems[i])
                        
                
            }
        }

        if(names.length == 0){
            ul.appendChild(noName);
            chooseBtn.style.display='none'
        } else {
            if(ul.contains(noName)){
                ul.removeChild(noName);
            }
        }

    
})