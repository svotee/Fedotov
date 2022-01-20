'use strict'
function one(x){
    function two(){
    
    
    const a = prompt('Введите число')
    if (typeof(a)=='string'){
    if (Number(a) !== x){
        if(a>x){
            console.log('Ваше число больше загаданного')
        }
        if(a<x){
            console.log('Ваше число меньше загаданного')
        }
        two()
    }
    if (Number(a) == x){
        console.log('Вы угадали число')
    }
    }
    if(typeof(a)!='string'){
        console.log('Введите именно число')
        two()
    }
}
    two()
}
one(10)
