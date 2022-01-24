'use strict'
function one(x){
    function two(){
    const a = prompt('Введите число')
    if (typeof(a)=='string'){
    if (Number(a) !== x){
        if(a>x){
            alert('Ваше число больше загаданного')
        }
        if(a<x){
            alert('Ваше число меньше загаданного')
        }
        two()
    }
    if (Number(a) == x){
        alert('Вы угадали число')
    }
    }
    if(typeof(a)!='string'){
        alert('Введите именно число')
        two()
    }
}
    two()
}
one((Math.floor(Math.random() * 100) + 1))
