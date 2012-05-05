/*Exercise5*/

//PISTA
var contorno=T([0,1,2])([1.5,-15,-15])(SIMPLEX_GRID([[1],[30],[30]]));
var pavimento=COLOR([0.4,0.4,0.4])(STRUCT([contorno]));
DRAW(pavimento);


var domain = DOMAIN([[0,1],[0,1]])([15,30]);
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}

//ALA SINISTRA

var p0 = [[0,1.5,0],[0,-0.46,0],[0.2,-0.46,0],[0,1.5,0]];
var p1 = p0.map(function (p) {return [p[0], p[1], p[2]+0.7]});
var p2 = p0.map(function (p) {return [p[0], p[1], p[2]+1.4]});
var p3=  [[0,1.5,0],[0,-0.16,0],[0.2,-0.16,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]+2.2]});
var p4=  [[0,1.5,0],[0,0.16,0],[0.2,0.16,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]+2.6]});
var p5=  [[0,1.5,0],[0,0.56,0],[0.2,0.56,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]+3]});
var p6=  [[0,1.5,0],[0,1,0],[0.2,1,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]+3.2]});
var p7=  [[0,1.5,0],[0,1.3,0],[0.2,1.3,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]+3.5]});
//var Punti = STRUCT(AA(POLYPOINT)([p0,p1,p2,p3,p4,p5,p6,p7]));

//DRAW(Punti);

var c0=BEZIER(S0)(p0);
var c1=BEZIER(S0)(p1);
var c2=BEZIER(S0)(p2);
var c3=BEZIER(S0)(p3);
var c4=BEZIER(S0)(p4);
var c5=BEZIER(S0)(p5);
var c6=BEZIER(S0)(p6);
var c7=BEZIER(S0)(p7);

var puntiDiControllo = [c0,c1,c2,c3,c4,c5,c6,c7];
//var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));
//DRAW(curves);

var alaSinistra = BEZIER(S1)(puntiDiControllo);
var alaS = MAP(alaSinistra)(domain);
//DRAW(alaS);

//ALA DESTRA
var p0 = [[0,1.5,0],[0,-0.46,0],[0.2,-0.46,0],[0,1.5,0]];
var p1 = p0.map(function (p) {return [p[0], p[1], p[2]-0.7]});
var p2 = p0.map(function (p) {return [p[0], p[1], p[2]-1.4]});
var p3=  [[0,1.5,0],[0,-0.16,0],[0.2,-0.16,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]-2.2]});
var p4=  [[0,1.5,0],[0,0.16,0],[0.2,0.16,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]-2.6]});
var p5=  [[0,1.5,0],[0,0.56,0],[0.2,0.56,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]-3]});
var p6=  [[0,1.5,0],[0,1,0],[0.2,1,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]-3.2]});
var p7=  [[0,1.5,0],[0,1.3,0],[0.2,1.3,0],[0,1.5,0]].map(function (p) {return [p[0], p[1], p[2]-3.5]});

//var Punti = STRUCT(AA(POLYPOINT)([p0,p1,p2,p3,p4,p5,p6,p7]));
//DRAW(Punti);

var c0 = BEZIER(S0)(p0);
var c1=BEZIER(S0)(p1);
var c2=BEZIER(S0)(p2);
var c3=BEZIER(S0)(p3);
var c4=BEZIER(S0)(p4);
var c5=BEZIER(S0)(p5);
var c6=BEZIER(S0)(p6);
var c7=BEZIER(S0)(p7);

var puntiDiControllo = [c0,c1,c2,c3,c4,c5,c6,c7];
//var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));
//DRAW(curves);

var alaDestra = BEZIER(S1)(puntiDiControllo);
var alaD = MAP(alaDestra)(domain);
//DRAW(alaD);

var Ali=COLOR([0,0,1])(STRUCT([alaD,alaS]));
DRAW(Ali);

//FUSOLIERA
var controls1LEFTUP = [[1,-1,0],[0,-1,1],[0,0,2],[-2,0,0]]; // p0, p1, t0, t1
var controls1RIGHTUP=[[-1,-1,0],[0,-1,1],[0,0,2],[2,0,0]]; 
var controls1LEFTDOWN=[[1,-1,0],[0,-1,-1],[0,0,-2],[-2,0,0]];
var controls1RIGHTDOWN=[[-1,-1,0],[0,-1,-1],[0,0,-2],[2,0,0]];


var controls2LEFTUP = [[0.7,1,0],[0,1,0.7],[0,0,1.4],[-1.4,0,0]]; // p0, p1, t0, t1
var controls2RIGHTUP=[[-0.7,1,0],[0,1,0.7],[0,0,1.4],[1.4,0,0]]; 
var controls2LEFTDOWN=[[0.7,1,0],[0,1,-0.7],[0,0,-1.4],[-1.4,0,0]];
var controls2RIGHTDOWN=[[-0.7,1,0],[0,1,-0.7],[0,0,-1.4],[1.4,0,0]];

var controls25LEFTUP = [[0.01,1.5,0],[0,1.5,0.01],[0,0,0.02],[-0.02,0,0]]; // p0, p1, t0, t1
var controls25RIGHTUP=[[-0.01,1.5,0],[0,1.5,0.01],[0,0,0.02],[0.02,0,0]]; 
var controls25LEFTDOWN=[[0.01,1.5,0],[0,1.5,-0.01],[0,0,-0.02],[-0.02,0,0]];
var controls25RIGHTDOWN=[[-0.01,1.5,0],[0,1.5,-0.01],[0,0,-0.02],[0.02,0,0]];

var controls3LEFTUP = [[0.3,-4,0],[0,-4,0.3],[0,0,0.6],[-0.6,0,0]]; // p0, p1, t0, t1
var controls3RIGHTUP=[[-0.3,-4,0],[0,-4,0.3],[0,0,0.6],[0.6,0,0]]; 
var controls3LEFTDOWN=[[0.3,-4,0],[0,-4,-0.3],[0,0,-0.6],[-0.6,0,0]];
var controls3RIGHTDOWN=[[-0.3,-4,0],[0,-4,-0.3],[0,0,-0.6],[0.6,0,0]];

var controls4LEFTUP = [[0.1,-5,0],[0,-5,0.1],[0,0,0.2],[-0.2,0,0]]; // p0, p1, t0, t1
var controls4RIGHTUP=[[-0.1,-5,0],[0,-5,0.1],[0,0,0.2],[0.2,0,0]]; 
var controls4LEFTDOWN=[[0.1,-5,0],[0,-5,-0.1],[0,0,-0.2],[-0.2,0,0]];
var controls4RIGHTDOWN=[[-0.1,-5,0],[0,-5,-0.1],[0,0,-0.2],[0.2,0,0]];
	
var c1= CUBIC_HERMITE(S0)(controls1LEFTUP);
var c2= CUBIC_HERMITE(S0)(controls1RIGHTUP);
var c3= CUBIC_HERMITE(S0)(controls1LEFTDOWN);
var c4= CUBIC_HERMITE(S0)(controls1RIGHTDOWN);

var c5= CUBIC_HERMITE(S0)(controls2LEFTUP);
var c6= CUBIC_HERMITE(S0)(controls2RIGHTUP);
var c7= CUBIC_HERMITE(S0)(controls2LEFTDOWN);
var c8= CUBIC_HERMITE(S0)(controls2RIGHTDOWN);

var c9= CUBIC_HERMITE(S0)(controls3LEFTUP);
var c10= CUBIC_HERMITE(S0)(controls3RIGHTUP);
var c11= CUBIC_HERMITE(S0)(controls3LEFTDOWN);
var c12= CUBIC_HERMITE(S0)(controls3RIGHTDOWN);

var c13= CUBIC_HERMITE(S0)(controls4LEFTUP);
var c14= CUBIC_HERMITE(S0)(controls4RIGHTUP);
var c15= CUBIC_HERMITE(S0)(controls4LEFTDOWN);
var c16= CUBIC_HERMITE(S0)(controls4RIGHTDOWN);

var c17= CUBIC_HERMITE(S0)(controls25LEFTUP);
var c18= CUBIC_HERMITE(S0)(controls25RIGHTUP);
var c19= CUBIC_HERMITE(S0)(controls25LEFTDOWN);
var c20= CUBIC_HERMITE(S0)(controls25RIGHTDOWN);

var s11=CUBIC_HERMITE(S1)([c1,c5,[0,0,0],[0,0,0]]);
var surface11=MAP(s11)(domain2);
var s12=CUBIC_HERMITE(S1)([c2,c6,[0,0,0],[0,0,0]]);
var surface12=MAP(s12)(domain2);
var s13=CUBIC_HERMITE(S1)([c3,c7,[0,0,0],[0,0,0]]);
var surface13=MAP(s13)(domain2);
var s14=CUBIC_HERMITE(S1)([c4,c8,[0,0,0],[0,0,0]]);
var surface14=MAP(s14)(domain2);

var s21=CUBIC_HERMITE(S1)([c1,c9,[0,0,0],[0,0,0]]);
var surface21=MAP(s21)(domain2);
var s22=CUBIC_HERMITE(S1)([c2,c10,[0,0,0],[0,0,0]]);
var surface22=MAP(s22)(domain2);
var s23=CUBIC_HERMITE(S1)([c3,c11,[0,0,0],[0,0,0]]);
var surface23=MAP(s23)(domain2);
var s24=CUBIC_HERMITE(S1)([c4,c12,[0,0,0],[0,0,0]]);
var surface24=MAP(s24)(domain2);

var s31=CUBIC_HERMITE(S1)([c9,c13,[0,0,0],[0,0,0]]);
var surface31=MAP(s31)(domain2);
var s32=CUBIC_HERMITE(S1)([c10,c14,[0,0,0],[0,0,0]]);
var surface32=MAP(s32)(domain2);
var s33=CUBIC_HERMITE(S1)([c11,c15,[0,0,0],[0,0,0]]);
var surface33=MAP(s33)(domain2);
var s34=CUBIC_HERMITE(S1)([c12,c16,[0,0,0],[0,0,0]]);
var surface34=MAP(s34)(domain2);

var s41=CUBIC_HERMITE(S1)([c5,c17,[0,0,0],[0,0,0]]);
var surface41=MAP(s41)(domain2);
var s42=CUBIC_HERMITE(S1)([c6,c18,[0,0,0],[0,0,0]]);
var surface42=MAP(s42)(domain2);
var s43=CUBIC_HERMITE(S1)([c7,c19,[0,0,0],[0,0,0]]);
var surface43=MAP(s43)(domain2);
var s44=CUBIC_HERMITE(S1)([c8,c20,[0,0,0],[0,0,0]]);
var surface44=MAP(s44)(domain2);

var fusoliera=COLOR([0,0,1])(STRUCT([surface11,surface12,surface13,surface14,surface21,surface22,surface23,surface24,surface31,surface32,surface33,surface34,surface41,surface42,surface43,surface44]));

DRAW(R([1,2])(PI)(fusoliera));


//STABILIZZATORI
/*Exercise3*/

// surfaces
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

/*Primo stabilizzatore*/

var controls1 = [[0,0,0],[-1,1,0],[0,3,0],[-3,0,0]]; // p0, p1, t0, t1
var c1 = CUBIC_HERMITE(S0)(controls1);
var curve1 = MAP(c1)(domain1);
//DRAW(curve1);

var controls2 = [[-1,1,0],[0,0,0],[0,-3,0],[3,0,0]]; // p0, p1, t0, t1
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve2 = MAP(c2)(domain1);
//DRAW(curve2);

var controls3 = [[0,0,0.1],[-1,1,0.1],[0,3,0],[-3,0,0]]; // p0, p1, t0, t1
var c3 = CUBIC_HERMITE(S0)(controls3);
var curve3 = MAP(c3)(domain1);
//DRAW(curve3);

var controls4 = [[-1,1,0.1],[0,0,0.1],[0,-3,0],[3,0,0]]; // p0, p1, t0, t1
var c4 = CUBIC_HERMITE(S0)(controls4);
var curve4 = MAP(c4)(domain1);
//DRAW(curve4);

/*Secondo stabilizzatore ORIZZONTALE */
var controls5 = [[0,0,0],[-1,0,1],[0,0,3],[-3,0,0]]; // p0, p1, t0, t1
var c5 = CUBIC_HERMITE(S0)(controls5);
var curve5 = MAP(c5)(domain1);
//DRAW(curve5);

var controls6 = [[-1,0,1],[0,0,0],[0,0,-3],[3,0,0]]; // p0, p1, t0, t1
var c6 = CUBIC_HERMITE(S0)(controls6);
var curve6 = MAP(c6)(domain1);
//DRAW(curve6);

var controls7 = [[0,-0.1,0],[-1,-0.1,1],[0,0,3],[-3,0,0]]; // p0, p1, t0, t1
var c7 = CUBIC_HERMITE(S0)(controls7);
var curve7 = MAP(c7)(domain1);
//DRAW(curve7);

var controls8 = [[-1,-0.1,1],[0,-0.1,0],[0,0,-3],[3,0,0]]; // p0, p1, t0, t1
var c8 = CUBIC_HERMITE(S0)(controls8);
var curve8 = MAP(c8)(domain1);
//DRAW(curve8);

/*Terzo stabilizzatore ORIZZONTALE*/
var controls9 = [[0,0,0],[-1,0,-1],[0,0,-3],[-3,0,0]]; // p0, p1, t0, t1
var c9 = CUBIC_HERMITE(S0)(controls9);
var curve9 = MAP(c9)(domain1);
//DRAW(curve9);

var controls10 = [[-1,0,-1],[0,0,0],[0,0,3],[3,0,0]]; // p0, p1, t0, t1
var c10 = CUBIC_HERMITE(S0)(controls10);
var curve10 = MAP(c10)(domain1);
//DRAW(curve10);

var controls11 = [[0,-0.1,0],[-1,-0.1,-1],[0,0,-3],[-3,0,0]]; // p0, p1, t0, t1
var c11 = CUBIC_HERMITE(S0)(controls11);
var curve11 = MAP(c11)(domain1);
//DRAW(curve11);

var controls12 = [[-1,-0.1,-1],[0,-0.1,0],[0,0,3],[3,0,0]]; // p0, p1, t0, t1
var c12 = CUBIC_HERMITE(S0)(controls12);
var curve12 = MAP(c12)(domain1);
//DRAW(curve12);

//UNIAMOLE

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

//USIAMO BEZIER ED E' FATTA
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

var stabilizzatori=COLOR([0,0,1])(T([1])([5])(R([0,2])(PI)(R([0,1])(-PI/2)(STRUCT([surface1,surface2,surface3,surface4,surface5,surface1a,surface2a,surface3a,surface4a,surface5a])))));
DRAW(stabilizzatori);

//CARRELLO
	var domain1 = INTERVALS(1)(30);
	var domain2 = DOMAIN([[0,1],[0,1]])([30,60]);

	var p0 = [[0.5,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,0],[0.5,0,0]];
	var p1 = [[2,0,0],[4,0,0],[4,4,0],[0,4,0],[0,0,0],[2,0,0]].map(function (p) {return [p[0]-1.5, p[1]-1, p[2]]});
	var p2 = [[0.5,0,6],[1,0,6],[1,1,6],[0,1,6],[0,0,6],[0.5,0,6]].map(function (p) {return [p[0]-3, p[1], p[2]]});;
	var p3 = [[0.5,0.5,0]];
	var p4 = [[2,0,0],[4,0,0],[4,4,0],[0,4,0],[0,0,0],[2,0,0]].map(function (p) {return [p[0]-1.5, p[1]-1, p[2]-0.1]});
	var p5 = [[0.5,0.5,-0.1]];

	var c0 = BEZIER(S0)(p0);
	var c1 = BEZIER(S0)(p1);
	var c2 = BEZIER(S0)(p2);
	var c3 = BEZIER(S0)(p3);
	var c4 = BEZIER(S0)(p4);
	var c5 = BEZIER(S0)(p5);

	var parte1 = MAP(BEZIER(S1)([c0,c2]))(domain2);
	var parte2 = MAP(BEZIER(S1)([c1,c3]))(domain2);
	var parte3 = MAP(BEZIER(S1)([c1,c4]))(domain2);
	var parte4 = MAP(BEZIER(S1)([c4,c5]))(domain2);

	var RuotaDestra = R([0,2])([PI/2])(STRUCT([parte1,parte2,parte3,parte4]));
	var RuotaSinistra = R([0,1])([PI])(T([0,1])([-12,-0.75])(RuotaDestra));
	var carrello = STRUCT([RuotaSinistra,RuotaDestra]);
	var carrelloInScala =R([0,2])(-PI/2) (S([0,1,2])([0.3,0.3,0.3])(T([0,1,2])([-6,3,-3])(carrello)));

	DRAW(COLOR([0.5,0.5,0.5])(carrelloInScala));