var punto1= POLYLINE([[0,0],[39,0],[39,4]]);
var punto2=	POLYLINE([[39,4],[52,4],[52,6]]);
var punto3= POLYLINE([[52,6],[51,6],[51,16]]);
var punto4= POLYLINE([[51,16],[39,16],[39,17]]);
var punto5=	POLYLINE([[39,17],[9,17],[9,22]]);
var punto6= POLYLINE([[9,22],[1,22],[1,2]]);
//var punto7= POLYLINE([[0,13],[1,13],[1,2]]);
var punto8= POLYLINE([[1,2],[0,2],[0,0]]);
var perimetro=STRUCT([punto1,punto2,punto3,punto4,punto5,punto6,punto8]);
DRAW (perimetro);
COLOR([0,0,0])(perimetro);

var piscina1= POLYLINE ([[1,1],[21,1],[21,10]]);
var piscina2= POLYLINE ([[21,10],[1,10],[1,1]]);
var piscina= STRUCT ([piscina1,piscina2]);
DRAW(piscina);
COLOR([0,0,0])(piscina);

var scala1=POLYLINE([[36,1],[39,1],[39,4]]);
var scala2=POLYLINE([[39,4],[36,4],[36,1]]);
var perimetroScala= STRUCT([scala1,scala2]);
DRAW(perimetroScala);
COLOR([0,0,0])(perimetroScala);

var riga1=POLYLINE([[37,1],[37,4]]);
var riga2=POLYLINE([[38,1],[38,4]]);
var riga3=POLYLINE([[37.5,1],[37.5,4]]);
var riga4=POLYLINE([[36.5,1],[36.5,4]]);
var riga5=POLYLINE([[38.5,1],[38.5,4]]);
var righeScala=STRUCT([riga1,riga2,riga3,riga4,riga5]);
DRAW(righeScala);
COLOR([0,0,0])(righeScala);

var altraPiscina1=POLYLINE([[47,5],[51,5],[51,16]]);
var altraPiscina2=POLYLINE([[51,16],[47,16],[47,5]]);
var altraPiscina=STRUCT([altraPiscina1,altraPiscina2]);
DRAW(altraPiscina);
COLOR([0,0,0])(altraPiscina);

var panchina1=POLYLINE([[7,14],[22,14],[22,15]]);
var panchina2=POLYLINE([[22,15],[7,15],[7,14]]);
var panchina=STRUCT([panchina1,panchina2]);
DRAW(panchina);
COLOR([0,0,0])(panchina);


var tetto1=POLYLINE([[47,16],[47,17],[39,17]]);
var tetto=STRUCT([tetto1]);
DRAW(tetto);

var tetto2=POLYLINE([[10,13],[10,23],[0,23]]);
var tetto3=POLYLINE([[0,23],[0,13],[10,13]]);
var altroTetto=STRUCT([tetto2,tetto3]);
DRAW(altroTetto);


var muro1=POLYLINE([[31,7.5],[32,7.5],[32,13.5]]);
var muro2=POLYLINE([[32,13.5],[31,13.5],[31,7.5]]);
var muro=STRUCT([muro1,muro2]);
DRAW(muro);
COLOR([0,0,0])(muro);

var muretto1=POLYLINE([[32.3,9],[33.3,9],[33.3,12]]);
var muretto2=POLYLINE([[33.3,12],[32.3,12],[32.3,9]]);
var muretto=STRUCT([muretto1,muretto2]);
DRAW(muretto);
COLOR([0,0,0])(muretto);

var stanza=POLYLINE([[1,17],[9,17]]);
var perimetroStanza=STRUCT([stanza]);
DRAW(perimetroStanza);
COLOR([0,0,0])(perimetroStanza);
