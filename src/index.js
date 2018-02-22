module.exports = function solveEquation(equation) {
    equation = equation.replace(/ /g,'');
    let equationArr = equation.split('*');

    let A = equationArr[0];
    let B = equationArr[1].slice(3);
    let C = equationArr[2].slice(1);

    var diz = Math.pow(B,2)-4*A*C;
    let x1;
    let x2;

    if(A==0 && B==0 && C==0)
    {
        x1 = "Any number";
        x2 = "Any number";
    }
    else
    if(A==0 && B==0 && C!=0)
    {
        x1 = "there is no decision";
        x2 = "there is no decision";
    }
    else
    if(A==0 && B!=0 && C!=0)
    {
        x1 = - C/B;
        x2 =" ";
    }
    else
    if(A!=0 && diz>0)
    {
        x1= Math.round(-B+Math.sqrt(diz))/(2*A);
        x2= Math.round(-B-Math.sqrt(diz))/(2*A);
        if(A > 0){
            let x = x1;
            x1 = x2;
            x2 = x;
        }
    }
    else
    if(A!=0 && diz==0)
    {
        x1= -B/2*A;
        x2=" ";
    }
    else
    {
        x1 = "there is no decision";
        x2 = "there is no decision";
    }
    return [x1, x2]
};