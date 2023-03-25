const form= document.querySelector('form');
const nameInput = document.querySelector('name');
const emailInput= document.querySelector('email');
const phoneInput= document.querySelector('phone');
form.addEventListener('submit', (event)=> {
event.preventDefault();
const name=nameInput.value;
const email=emailInput.value;
const phone=phoneInput.value;
fetch('https://test-api-v3.myways.ai/user?email=').then(response => {
if(response.ok){
return response.json();
}
else{
throw new Error('Network response was not ok');
}
}).then(data => {
alert('User found');
}).catch(error=> {
fetch('https://test-api-v3.myways.ai/user',{
method: 'POST',
body: JSON.stringify({ name,email,phone}),
headers:{
'Content-Type": 'application/json'
}
}).then(response => {
if(response.ok){
alert('User created successfully');
}else{
throw new Error('Network response was not ok');
}
}).catch(error => {
console.error('Error', error);
});
});
});
