var domain= DOMAIN([[0,1]])([10]); // divide il segmento [0,1] in 10 segmenti
var mapping=function(p){
	var u=p[0];
	return [u,1];
};
var mapped=MAP(mapping)(domain);

//Disegnare la bisettrice del primo quadrante

var bisettrice = function(p){
	var u=p[0];
	return [u,u];
};

//Disegnare una sinusoide
var domain2 =DOMAIN([[0,2*PI]])([36]);

var sinusoide=function(p){
	var u=p[0];
	return [u,SIN(u)];
}
var mapped2=MAP(sinusoide)(domain2);

//Disegnare una circonferenza
var drawCircle = function(r,n) {
	var dominioCircle = DOMAIN([[0,2*PI]])([n]);

	var mappingCircle = function(p) {
		var u = p[0];
		return [r * COS(u), r * SIN(u)];
	};

	var mappedCircle = MAP(mappingCircle)(dominioCircle);
	DRAW(mappedCircle);
};


//Disegnare un cilindro
var drawCylinder=function(r,h,m,n){
	var dominioCilindro= DOMAIN([[0,2*PI],[0,h]])([n,m]);
	var mappingCylinder=function (p){
		var u=p[0];
		var v=p[1];
		return [r * COS(u), r * SIN(u),v];
	};
	var mappedCylinder=MAP(mappingCylinder)(dominioCilindro);
	DRAW(mappedCylinder);
}

//Disegnare una sfera

var drawSphere=function(r,n){
	var dominioSfera=DOMAIN ([[0,2*PI],[0,2*PI],[0,2*PI]])([n,n,n]);
	var mappingSphere=function (p){
		var u=p[0];
		var v=p[1];
		return [r*SIN(u)*COS(v),r*SIN(u)*SIN(v),r*COS(u)];
	};
	var mappedSphere=MAP(mappingSphere)(dominioSfera);
	DRAW(mappedSphere);
}