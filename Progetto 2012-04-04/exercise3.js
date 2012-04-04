var parte1=SIMPLEX_GRID([[39],[1],[1]]);
var parte2=T([1])([1])(SIMPLEX_GRID([[1],[1],[1]]));
var parte3=T([0,1])([21,1])(SIMPLEX_GRID([[15],[3],[1]])); 
var parte4=T([0,1])([21,4])(SIMPLEX_GRID([[31],[1],[1]]));
var parte5=T([0,1])([51,5])(SIMPLEX_GRID([[1],[1],[1]]));
var parte6=T([0,1])([39,5])(SIMPLEX_GRID([[8],[11],[1]]));
var parte7=T([0,1])([21,5])(SIMPLEX_GRID([[18],[12],[1]]));
var parte8=T([0,1])([1,10])(SIMPLEX_GRID([[20],[7],[1]]));
var parte9=T([0,1])([1,17])(SIMPLEX_GRID([[8],[5],[1]]));
var pavimento=STRUCT([parte1,parte2,parte3,parte4,parte5,parte6,parte7,parte8,parte9]);


var piscina1=T([0,1])([1,1])(SIMPLEX_GRID([[20],[9],[0.5]]));
var piscina2=T([0,1])([47,5])(SIMPLEX_GRID([[4],[11],[0.5]]));
var piscine=STRUCT([piscina1,piscina2]);


var gradino1=T([0,1])([36,1])(SIMPLEX_GRID([[0.6],[3],[1]]));
var gradino2=T([0,1])([36.6,1])(SIMPLEX_GRID([[0.6],[3],[0.8]]));
var gradino3=T([0,1])([37.2,1])(SIMPLEX_GRID([[0.6],[3],[0.6]]));
var gradino4=T([0,1])([37.8,1])(SIMPLEX_GRID([[0.6],[3],[0.4]]));
var gradino5=T([0,1])([38.4,1])(SIMPLEX_GRID([[0.6],[3],[0.2]]));
var scala=STRUCT([gradino1,gradino2,gradino3,gradino4,gradino5]);



var muroPanchina=STRUCT([T([0,1,2])([6.5,15,1])(SIMPLEX_GRID([[20],[0.3],[3]]))]);



var muroPiscinaGrande1=T([0,1,2])([1,0.7,1])(SIMPLEX_GRID([[7],[0.3],[3]]));
var muroPiscinaGrande2=T([0,1,2])([0.7,1,0.5])(SIMPLEX_GRID([[0.3],[9],[3.5]]));
var muroPiscinaGrande3=T([0,1,2])([1,10,1])(SIMPLEX_GRID([[0.3],[12],[3]]));
var muroPiscinaGrande4=T([0,1,2])([1,22,1])(SIMPLEX_GRID([[8],[0.3],[3]]));
var muroPiscinaGrande5=T([0,1,2])([9,17,1])(SIMPLEX_GRID([[0.3],[5],[3]]));
var muroPiscinaGrande=STRUCT([muroPiscinaGrande1,muroPiscinaGrande2,muroPiscinaGrande3,muroPiscinaGrande4,muroPiscinaGrande5]);


var muroPiscinaPiccola1=T([0,1,2])([41,5,1])(SIMPLEX_GRID([[10],[0.3],[3]]));
var muroPiscinaPiccola2=T([0,1,2])([51,5,0.5])(SIMPLEX_GRID([[0.3],[11],[3.5]]));
var muroPiscinaPiccola3=T([0,1,2])([47,5,0.5])(SIMPLEX_GRID([[0.3],[11],[3.5]]));
var muroPiscinaPiccola4=T([0,1,2])([38,16,1])(SIMPLEX_GRID([[13],[0.3],[3]]));
var muroPiscinaPiccola= STRUCT([muroPiscinaPiccola1,muroPiscinaPiccola2,muroPiscinaPiccola3]);



var muroPiccolo=T([0,1,2])([25,7.5,1])(SIMPLEX_GRID([[9],[0.3],[3]]));
var muroGrande=T([0,1,2])([30,13.5,1])(SIMPLEX_GRID([[10],[0.3],[3]]));
var altroMuroPiccolo=T([0,1,2])([37.2,11.5,1])(SIMPLEX_GRID([[6],[0.3],[3]]));
var altriMuri=STRUCT([muroPiccolo,muroGrande,altroMuroPiccolo]);



var vetro1 = T([0,1,2])([30,13.5,1])(SIMPLEX_GRID([[10],[0.25],[3]]));
var vetro2 = T([0,1,2])([44.6,6.8,1])(SIMPLEX_GRID([[0.25],[7.3],[3]]));
var vetro3 = T([0,1,2])([32,7.5,1])(SIMPLEX_GRID([[0.25],[6],[3]]));
var vetro4 = T([0,1,2])([30,5-0.25,1])(SIMPLEX_GRID([[11.2],[0.25],[3]]));
var vetro5 = T([0,1,2])([39,13.5+0.25,1])(SIMPLEX_GRID([[0.25],[2.25],[3]]));
var vetro6 = T([0,1,2])([31,7.5,1])(SIMPLEX_GRID([[0.25],[6],[3]]));
var vetri = STRUCT([vetro1,vetro2,vetro3,vetro4,vetro5,vetro6]);



var tettoPiccolo = T([0,1,2])([0,13,4])(SIMPLEX_GRID([[10],[10],[0.4]]));
var tettoGrande = T([0,1,2])([24,4,4])(SIMPLEX_GRID([[23],[13],[0.4]]));
var tetti = STRUCT([tettoPiccolo, tettoGrande]);



var pilastro1 = T([0,1,2])([26,13,1])(SIMPLEX_GRID([REPLICA(4)([0.15, -6.2]), [0.15], [3]]));
var pilastro2 = T([0,1,2])([26,7,1])(SIMPLEX_GRID([REPLICA(4)([0.15, -6.2]), [0.15],	[3]]));
var pilastri = STRUCT([pilastro1, pilastro2]);

var panchina1 = T([0,1,2])([7,14.2,1])(SIMPLEX_GRID([REPLICA(8)([0.2, -2]), [0.2], [0.3]]));
var panchina2 = T([0,1,2])([7,14,1+0.5])(SIMPLEX_GRID([[16], [0.5], [0.15]]));
var panchina = STRUCT([panchina1, panchina2]);

COLOR([0,0,1])(piscine);
COLOR([0.2,0.8,0.2])(scala);
COLOR([0,0.5,0.5])(vetri);
COLOR([0,0,0])(tetti);

var Barcellonapavilion = STRUCT([pavimento, piscine, scala, muroPanchina, muroPiscinaPiccola, muroPiscinaGrande, altriMuri, vetri,tetti,pilastri,panchina]);
DRAW(Barcellonapavilion);