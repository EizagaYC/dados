const showDados = document.getElementById('ShowDados');
const btnList = document.getElementById('btn-list');
const btnClear = document.getElementsByClassName('clear');
const cant = 5; 

// Pintamos los dados en pantalla
showStatic();

// Funcion lanzar dados
async function shake()
{
	// Ocultamos los botones mientras se muestran resultados
	btnList.classList.add("d-none");

	// Limpiamos las variables
	showDados.innerHTML = '';
	data = [];

	// Mostramos una animacion para tener mas suspenso
	animation()

	// Recolectar los numeros de cada dado
	for (let i = 0; i < cant; i++){
		data.push(getRand());
	}
	console.log(data);
	// Mostrar resultado de cada dado
	for (let i = 0; i < cant; i++){	
		await sleep(1000);
		// Seleccionamos el nombre de la cara del dado (opcinal)
		let name = '';
		switch(data[i]){
			case '1': name = 'Ass'; color = 'danger'; break 
			case 'K': name = 'King'; color = 'danger'; break
			case 'Q': name = 'Queen'; color = 'dark'; break
			case 'J': name = 'Jota'; color = 'dark'; break
			case '7': name = '9'; color = 'dark'; break
			case '8': name = '10'; color = 'danger'; break
		}
		showDados.innerHTML +=	'<div class="col-4 col-lg-2 col-md-2 text-center"> <img src="./img/dados/dado-'+ data[i] +'.png" class="w-100" id="dado"><span class="badge badge-pill badge-'+color+' my-3 font-weight-bold">'+name+'</span></div>';
		console.log(data[i])
	}
	// Volvemos a mostrar botones
	btnList.classList.remove("d-none");
	btnClear[0].classList.remove("d-none");
	btnClear[1].classList.remove("d-none");
}

// Funcion pintar los dados estaticos
function showStatic()
{
	btnClear[0].classList.add("d-none");
	btnClear[1].classList.add("d-none");
	for (let i = 0; i < cant; i++){	
		showDados.innerHTML +=	'<div class="col-4 col-lg-2 col-md-2"> <img src="./img/dados/dado-rand.png" class="w-100" id="dado"></div>';
	}
}

// Funcion dar animacion a cada dadon en pantalla
async function animation()
{
	showStatic();
	let img_dado = document.querySelectorAll('#dado');
	Array.prototype.forEach.call(img_dado, function(dado) {
		dado.src = "./img/dados/dado-rand.gif";
	});

	await sleep(800);
	showDados.innerHTML = '';
}

// Funcion limpiar animacion y datos en pantalla
function clearScream()
{
	showDados.innerHTML = '';
	showStatic();
}

// Funcion obtener un numero random
function getRand()
{
    let array = ['K','Q','J','8','7','1'] ;
    let tem, x ,i;

    // Recorremos el array de atras para delante
    for (i = array.length - 1; i > 0; i--) {

        x = array[i];

        // Generamos una posicion comprendida entre los valores
        tem = Math.floor(Math.random() * (i + 1));

        // Intercambiamos valores ayudados de una
        array[i] = array[tem];
        array[tem] = x
    }
    // Retornamos el primer valor
    return array[0];
}

// Esta funcion detiene el tiempo segun el milisegundos que le demos
function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve,ms));
}