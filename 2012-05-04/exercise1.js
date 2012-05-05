/*Exercise1 */

var dominio = DOMAIN([[0,1],[0,1]])([15,30]);
var POLYPOINT = function (points) {
  return SIMPLICIAL_COMPLEX(points)(points.map(function (p,i) { 
    return [i];
  }));
}

var p0 = [[1.5,0,0],[-0.46,0,0],[-0.46,0.2,0],[1.5,0,0]];
var p1 = p0.map(function (p) {return [p[0], p[1], p[2]+0.7]});
var p2 = p0.map(function (p) {return [p[0], p[1], p[2]+1.4]});
var p3=  [[1.5,0,0],[-0.16,0,0],[-0.16,0.2,0],[1.5,0,0]].map(function (p) {return [p[0], p[1], p[2]+2.2]});
var p4=  [[1.5,0,0],[0.16,0,0],[0.16,0.2,0],[1.5,0,0]].map(function (p) {return [p[0], p[1], p[2]+2.6]});
var p5=  [[1.5,0,0],[0.56,0,0],[0.56,0.2,0],[1.5,0,0]].map(function (p) {return [p[0], p[1], p[2]+3]});
var p6=  [[1.5,0,0],[1,0,0],[1,0.2,0],[1.5,0,0]].map(function (p) {return [p[0], p[1], p[2]+3.2]});
var p7=  [[1.5,0,0],[1.3,0,0],[1.3,0.2,0],[1.5,0,0]].map(function (p) {return [p[0], p[1], p[2]+3.5]});


var c0 = BEZIER(S0)(p0);
var c1=BEZIER(S0)(p1);
var c2=BEZIER(S0)(p2);
var c3=BEZIER(S0)(p3);
var c4=BEZIER(S0)(p4);
var c5=BEZIER(S0)(p5);
var c6=BEZIER(S0)(p6);
var c7=BEZIER(S0)(p7);

var puntiDiControllo = [c0,c1,c2,c3,c4,c5,c6,c7];

var ala = BEZIER(S1)(puntiDiControllo);
var profiloAla = MAP(ala)(dominio);
DRAW(profiloAla);