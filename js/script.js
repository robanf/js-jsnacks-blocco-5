/* var bici=[
    {
        nome:'franco',
        peso:10
    },

    {
        nome:'bmx',
        peso:18
    },

    {
        nome:'carlo',
        peso:27
    },

    {
        nome:'maurizio',
        peso:20
    }
];
var pesante=bici[0];

for(var i=1;i<bici.length;i++){
    if(bici[i].peso>pesante.peso){
        pesante=bici[i];
    }
}

console.log(pesante); */


/* var squadre=[
    {
        nome:'milan',
        punti:0,
        falli:0
    },
    {
        nome:'roma',
        punti:0,
        falli:0
    },
    {
        nome:'inter',
        punti:0,
        falli:0
    }
];


for(var i=0;i<squadre.length;i++){
    squadre[i].punti=Math.floor(Math.random()*50);
    squadre[i].falli=Math.floor(Math.random()*10);
}

console.log(squadre); */

/* var pesototale=0;

for(var i=0;i<zucchine.length;i++){
 pesototale += zucchine[i].peso;
}

console.log(pesototale); */


var zucchine=[
    {
        nome:'franco',
        peso:17,
        lunghezza:10
    },
    {
        nome:'maurizio',
        peso:14,
        lunghezza:15
    },
    {
        nome:'lino',
        peso:15,
        lunghezza:18
    },
    {
        nome:'verde',
        peso:12,
        lunghezza:13
    },
    {
        nome:'blu',
        peso:13,
        lunghezza:21
    },
    {
        nome:'franco',
        peso:17,
        lunghezza:12
    },
    {
        nome:'maurizio',
        peso:14,
        lunghezza:16
    },
    {
        nome:'lino',
        peso:15,
        lunghezza:18
    },
    {
        nome:'verde',
        peso:12,
        lunghezza:13
    },
    {
        nome:'blu',
        peso:13,
        lunghezza:21
    },
    
];

var arraymin=[];
var arraymax=[];
var pesomin=0;
var pesomax=0;

for(var i=0;i<zucchine.length;i++){
    if(zucchine[i].lunghezza<=15){
        arraymin.push(zucchine[i]);
        pesomin += zucchine[i].peso;
    }
    else{
        arraymax.push(zucchine[i]);
        pesomax += zucchine[i].peso;
    }
}

   console.log(pesomin);
   console.log(pesomax);

   console.log(arraymin);
   console.log(arraymax);
