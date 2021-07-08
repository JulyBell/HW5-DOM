console.log('------------- # 4, 5');

//получаем элементы по id:
let userInput = document.getElementById('username');
let passInput = document.getElementById('password');
let infoWindow = document.getElementById('results');
let button = document.getElementById('addInfo');


//обработчик:
button.addEventListener('click', showUserData);

function showUserData(){

	//помещаем данные пользователя в div под формой:
	infoWindow.innerHTML='You entered the following data: ' + userInput.value + ' ' + passInput.value;

	//записываем данные в localstorage:
	localStorage.setItem('username', userInput.value);
	localStorage.setItem('password', passInput.value);


	// получаем данные из localstorage и выводим в консоль:
	let username = localStorage.getItem('username');
	let password = localStorage.getItem('password');

	console.log('data: ', username, password);
}



