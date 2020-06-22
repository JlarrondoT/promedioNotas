
function ejecutaRutina() {//función que se gatilla con el botón "Calcular Promedio"
    var arregloNotas = []; //creamos un arreglo vacío para llenarlo despues
    for (let i = 0; i < 7; i++) {//creamos un ciclo for para recorrer todos los inputs y traer su valor
        var nota = document.getElementById('nota'+i).value;//creamos una variable nota, que trae el valor del input según la posicion del ciclo for
        if(validarCampo(nota) === true){//llamamos la función que valida si la nota es válida (ver función declarada abajo)
            arregloNotas.push(nota)//si la nota es válida, agregamos la nota al arreglo con la función .push()
        }else{//si la nota es inválida, mostramos un alert indicando cuál es 
            alert('La asignatura N°'+ (i+1) + ' contiene una nota erronea')//mostramos la asignatura con problemas.
        }
    }
    if(arregloNotas.length === 7){//preguntamos si el arreglo está completo
        console.log('el arreglo de notas queda así: ', arregloNotas);//si está completo, deberíamos generar la lógica de sacar el promedio
        //Acá!





        //Acá!
    }else{//si está incompleto, no sacamos el promedio y generamos un error
        console.log('aún faltan notas por ingresar');
    }
    
}

function validarCampo(params) {//declaramos una función (función o método son lo mismo) para validar si la nota es válida
    var toFloat = parseFloat(params);//parseamos el valor de entrada a un float (float es la variable que detecta decimales, integer sólo son numeros enteros)
    if(toFloat >= 0.0 && toFloat <= 7.0){//si la nota está entre un 0.0 y un 7.0 el valor es correcto
        return true;
    }else{//si la nota es invalida retornamos un false, para indicar que la nota es incorrecta
        return false;
    }
}