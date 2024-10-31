const myForm = document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    //msg style and text
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields'
    //remove msg after 3sec
    setTimeout(() => msg.remove(), 3000)

  } else{
    //add user to ui
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    userList.appendChild(li);
    
    //clear value
    nameInput.value='';
    emailInput.value='';
  }
}


//learning:
// console.log(window);
// window.alert(1);

//selectors - Single, Multiple Element
//Single elements
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//Multiple elements
// console.log(document.querySelectorAll('.item')); //perfered
// console.log(document.getElementsByClassName('item')) 
// console.log(document.getElementsByTagName('li'))
// old method not prefered 

//loop
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item))

//DOM

// const ul = document.querySelector('.items');
// ul.remove();
// ul.firstElementChild.remove()
// ul.lastElementChild.textContent = 'Hi';
// ul.children[1].innerHTML = '<h1> Dom Changed <h1>'

// const btn =  document.querySelector('.btn');

// // btn.style.background = 'red';
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#333333'
//   alert('You submitted')
// })
// btn.addEventListener('mouseover', (b) => {
//   b.preventDefault()
//   document.querySelector('.btn').style.background='#737'
// })