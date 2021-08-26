// funções callback
function showArrayElementos(element, index, array){
    console.log(`a[${index}] = ${element}`)    
}
function somaUm(a){
    return a+1
}
function maior6(element, index, array){
    return element >6
}
function soma(acc, cur){
    return acc+cur
}

// arrays para testes
let arrayParaTestes=[1,2,3,4,5,6,7,8,9]
let arrayParaTestes2=["a","b","c","d","e","f","g","h","i"]
let arrayParaTestes3=[1,2,3,[4,,6,[7,8,9]]]

// função newForEach
console.log("Função ForEach")
arrayParaTestes.forEach(showArrayElementos)

function newForEach(array, callBack){
    for(let i = 0;i<array.length;i++){
        callBack(array[i],i, array)
    }
}
console.log("Função newForEach")
newForEach(arrayParaTestes, showArrayElementos)

// function newFill
console.log("Função fill")
console.log(arrayParaTestes.fill(4,1,5))

function newFill(array, valor, inicial=0,final =array.length){
    if(inicial<0){inicial=array.length+inicial}
    if(final<0){final=array.length+final}
    for(let i=inicial;i<final;i++){
        array[i]=valor
    }
    return array
}
console.log("Função newFill")
console.log(newFill(arrayParaTestes,4,1,5))

// function newMap
console.log("Função map")
arrayParaTestes.map(showArrayElementos)

function newMap(array, callBack){
    let newArray =[]
    for(let i = 0;i<array.length;i++){
        newArray.push(callBack(array[i],i,array))
    }
    return newArray
}
console.log("Função newMap")
newMap(arrayParaTestes, showArrayElementos)

// function newSome
console.log("Função Some")
console.log(arrayParaTestes.some(maior6))
function newSome(array, callBack){
    for(let i = 0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            return true
        }
    }
    return false
}
console.log("Função newSome")
console.log(newSome(arrayParaTestes, maior6))

// function newFind
console.log("Função find")
console.log(arrayParaTestes.find(maior6))

function newFind(array, callBack){
    for(let i=0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            return array[i]
        }
    }
}
console.log("Função newFind")
console.log(newFind(arrayParaTestes, maior6))

// function newFindIndex
console.log("Função findIndex")
console.log(arrayParaTestes.findIndex(maior6))

function newFindIndex(array, callBack){
    for(let i=0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            return i
        }
    }
    return -1
}
console.log("Funçao newFindIndex")
console.log(newFindIndex(arrayParaTestes, maior6))

// function newEvery
console.log("Função Every")
console.log(arrayParaTestes.every(maior6))

function newEvery(array, callBack){
    for(let i = 0;i<array.length;i++){
        if(!callBack(array[i],i,array)){
            return false
        }
    }
    return true
}
console.log("Função newEvery")
console.log(newEvery(arrayParaTestes, maior6))

// function newFilter
console.log("Função filter")
console.log(arrayParaTestes.filter(maior6))

function newFilter(array, callBack){
    let newArray=[]
    for(let i = 0;i<array.length;i++){
        if(callBack(array[i],i,array)){
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log("Função newFiler")
console.log(newFilter(arrayParaTestes, maior6))

// function newConcat
console.log("Função concat")
console.log(arrayParaTestes.concat(arrayParaTestes2,"a", 100,"b",5,23))

function newConcat(...array){
    let newArray=[]
    let leng = 0
    for(let a = 0;a<array.length;a++){
        if(array[a].length>1){
            leng = array[a].join("").toString().length
        }else{
            leng = array[a].toString().length
        }
        for(let j=0;j<leng;j++){
            if(typeof(array[a])==="number"){
                newArray.push(Number(array[a].toString()))
                break
            }else{
                newArray.push(array[a][j])
            }
         }
    }
    return newArray
}
console.log("Função newConcat")
console.log(newConcat(arrayParaTestes, arrayParaTestes2,"a", 100,"b",5,23))

// function newIncludes
console.log("Função includes")
console.log(arrayParaTestes.includes(4))

function newIncludes(array, elemento){
    for(let i = 0;i<array.length;i++){
        if(array[i]=== elemento){
            return true
        }
    }
    return false
}
console.log("Função newIncludes")
console.log(newIncludes(arrayParaTestes, 4))

// function newIndexOf
console.log("Função indexOf")
console.log(arrayParaTestes.indexOf(8))

function newIndexOf(array, elemento, index=0){
    if(index<0){
        index = array.length +index
    }
    for(let i = index;i<array.length;i++){
        if(array[i]===elemento){
            return i
        }
    }
    return -1
}
console.log("Função newIndexOf")
console.log(newIndexOf(arrayParaTestes,8))

// function newJoin
console.log("Função join")
console.log(arrayParaTestes2.join(" "))

function newJoin(array, elemento){
    let string = ""
    for(let i =0;i<array.length;i++){
        string+= array[i]
        if(i !== array.length-1){
            string+=elemento
        }
    }
    return string
}
console.log("Função newJoin")
console.log(newJoin(arrayParaTestes2," "))

// function newReduce
console.log("Função reduce")
console.log(arrayParaTestes.reduce(soma))

function newReduce(array, callBack, inicial=0){
    let contador= inicial
    if(typeof(inicial==="string")){
        inicial=""
    }
    for(let i=0;i<array.length;i++){
        contador =  callBack(contador, array[i])
    }
    if(inicial!==0){
        contador+=inicial
    }
    
    return Number(contador)
}
console.log("Função newReduce")
console.log(newReduce(arrayParaTestes, soma))

// function newSlice
console.log("Função slice")
console.log(arrayParaTestes.slice(2,8))

function newSlice(array, inicial=0, final=array.length){
    let newArray=[]
    if(inicial<0){
        inicial+=array.length
    }
    if(final>array.length){
        final=array.length
    }
    if(final<0){
        final+=array.length
    }
    for(let i=inicial;i<final;i++){
        newArray.push(array[i])
    }
    return newArray
}
console.log("Função newSlice")
console.log(newSlice(arrayParaTestes,2,8))

// function newFlat
console.log("Função flat")
console.log(arrayParaTestes3.flat(2))

function newFlat(array, depth = 1) {
    let result = [];
    for(let i=0;i<array.length;i++){
        if(array[i]!==undefined){
            if(Array.isArray(array[i]) && depth > 0){
                result.push(...newFlat(array[i], depth -1));
            } else {
                result.push(array[i]);
            }
        }
    }
    return result;
}
console.log("Função newFlat")
console.log(newFlat(arrayParaTestes3,2))

// function newFlatMap
console.log("Função flatMap")
console.log(arrayParaTestes.flatMap(somaUm))

function newFlatMap(array,callBack){
    let newArray=[]
    newArray.push(newMap(array,callBack))
    newArray = newFlat(newArray)
    return newArray
}
console.log("Função newFlatMap")
console.log(newFlatMap(arrayParaTestes,somaUm))

// function newArrayOf
console.log("Função Array.of")
console.log(Array.of(5,2,"A","c",1,7))

function newArrayOf(...elemento){
    let newArray=elemento
    return newArray
}
console.log("Função newArrayOf")
console.log(newArrayOf(5,2,"A","c",1,7))