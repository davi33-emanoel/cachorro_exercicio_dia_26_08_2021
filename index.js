let latido=document.getElementById('latir')
let come=document.getElementById('comer')
let objet=document.getElementById('objeto')
var zicao = {
    // Atributos
    nome:'zicao',
    data_nascimento:'2018',
    pelo: ['longo', 'marrom'],
    focinhoSaudavel: true,
    idade: 4,
    porte: 'grande',
    nomeTutor: 'Bibinho',
    raca: 'labrador',

    // Métodos
    // ...
    
    // Opcional implementar
    comer(  ){alert('o cachorro comeu')},
    brincar( ){alert('O cachorro pegou o objeto')},
    latir(){alert("O cachorro latiu")},
    rosnar(){},
    auxiliar( alguem ){},
    fazerArte( qualArte ){},
    corre( posicao ){}
}
latido.addEventListener('click',function(){
    zicao.latir()
})
come.addEventListener('click',function(){
    zicao.comer()
})
objet.addEventListener('click',function(){
    zicao.brincar()
})