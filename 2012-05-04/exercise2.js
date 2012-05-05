/*Exercise2*/

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}

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

var fusoliera=STRUCT([surface11,surface12,surface13,surface14,surface21,surface22,surface23,surface24,surface31,surface32,surface33,surface34,surface41,surface42,surface43,surface44]);
DRAW(R([1,2])(PI)(fusoliera));
