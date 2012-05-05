/*Exercise3*/

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

/*Primo stabilizzatore*/

var controls1 = [[0,0,0],[-1,1,0],[0,3,0],[-3,0,0]]; 
var c1 = CUBIC_HERMITE(S0)(controls1);
var curve1 = MAP(c1)(domain1);
//DRAW(curve1);

var controls2 = [[-1,1,0],[0,0,0],[0,-3,0],[3,0,0]]; 
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve2 = MAP(c2)(domain1);
//DRAW(curve2);

var controls3 = [[0,0,0.1],[-1,1,0.1],[0,3,0],[-3,0,0]]; 
var c3 = CUBIC_HERMITE(S0)(controls3);
var curve3 = MAP(c3)(domain1);
//DRAW(curve3);

var controls4 = [[-1,1,0.1],[0,0,0.1],[0,-3,0],[3,0,0]]; 
var c4 = CUBIC_HERMITE(S0)(controls4);
var curve4 = MAP(c4)(domain1);
//DRAW(curve4);

/*Secondo stabilizzatore ORIZZONTALE */
var controls5 = [[0,0,0],[-1,0,1],[0,0,3],[-3,0,0]]; 
var c5 = CUBIC_HERMITE(S0)(controls5);
var curve5 = MAP(c5)(domain1);
//DRAW(curve5);

var controls6 = [[-1,0,1],[0,0,0],[0,0,-3],[3,0,0]]; 
var c6 = CUBIC_HERMITE(S0)(controls6);
var curve6 = MAP(c6)(domain1);
//DRAW(curve6);

var controls7 = [[0,-0.1,0],[-1,-0.1,1],[0,0,3],[-3,0,0]]; 
var c7 = CUBIC_HERMITE(S0)(controls7);
var curve7 = MAP(c7)(domain1);
//DRAW(curve7);

var controls8 = [[-1,-0.1,1],[0,-0.1,0],[0,0,-3],[3,0,0]]; 
var c8 = CUBIC_HERMITE(S0)(controls8);
var curve8 = MAP(c8)(domain1);
//DRAW(curve8);

/*Terzo stabilizzatore ORIZZONTALE*/
var controls9 = [[0,0,0],[-1,0,-1],[0,0,-3],[-3,0,0]]; 
var c9 = CUBIC_HERMITE(S0)(controls9);
var curve9 = MAP(c9)(domain1);
//DRAW(curve9);

var controls10 = [[-1,0,-1],[0,0,0],[0,0,3],[3,0,0]]; 
var c10 = CUBIC_HERMITE(S0)(controls10);
var curve10 = MAP(c10)(domain1);
//DRAW(curve10);

var controls11 = [[0,-0.1,0],[-1,-0.1,-1],[0,0,-3],[-3,0,0]]; 
var c11 = CUBIC_HERMITE(S0)(controls11);
var curve11 = MAP(c11)(domain1);
//DRAW(curve11);

var controls12 = [[-1,-0.1,-1],[0,-0.1,0],[0,0,3],[3,0,0]]; 
var c12 = CUBIC_HERMITE(S0)(controls12);
var curve12 = MAP(c12)(domain1);
//DRAW(curve12);


var s1=CUBIC_HERMITE(S1)([c1,c3,[0,0,0],[0,0,0]]);
var surface1=MAP(s1)(domain2);
var s2=CUBIC_HERMITE(S1)([c2,c4,[0,0,0],[0,0,0]]);
var surface2=MAP(s2)(domain2);
//DRAW(surface1);
//DRAW(surface2);

var s3=CUBIC_HERMITE(S1)([c5,c7,[0,0,0],[0,0,0]]);
var surface3=MAP(s3)(domain2);
var s4=CUBIC_HERMITE(S1)([c6,c8,[0,0,0],[0,0,0]]);
var surface4=MAP(s4)(domain2);
//DRAW(surface3);
//DRAW(surface4);

var s5=CUBIC_HERMITE(S1)([c9,c11,[0,0,0],[0,0,0]]);
var surface5=MAP(s5)(domain2);
var s6=CUBIC_HERMITE(S1)([c10,c12,[0,0,0],[0,0,0]]);
var surface6=MAP(s6)(domain2);
//DRAW(surface5);
//DRAW(surface6);

var s1a = BEZIER(S1)([c1,c2]);
var surface1a = MAP(s1a)(domain2);
//DRAW(surface1a);

var s2a = BEZIER(S1)([c3,c4]);
var surface2a = MAP(s2a)(domain2);
//DRAW(surface2a);

var s3a = BEZIER(S1)([c5,c6]);
var surface3a = MAP(s3a)(domain2);
//DRAW(surface3a);

var s4a = BEZIER(S1)([c7,c8]);
var surface4a= MAP(s4a)(domain2);
//DRAW(surface4a);

var s5a = BEZIER(S1)([c9,c10]);
var surface5a = MAP(s5a)(domain2);
//DRAW(surface5a);

var s6a = BEZIER(S1)([c11,c12]);
var surface6a = MAP(s6a)(domain2);
//DRAW(surface6a);

var stabilizzatori=R([0,2])(PI)(R([0,1])(-PI/2)(STRUCT([surface1,surface2,surface3,surface4,surface5,surface1a,surface2a,surface3a,surface4a,surface5a])));
DRAW(stabilizzatori);