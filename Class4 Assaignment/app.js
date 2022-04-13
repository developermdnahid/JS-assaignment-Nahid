

//      1. Create a function that will return children, teenagers, young people, old people from the age


/**
 * 
let name = prompt('Enter Your Name?');
let age = prompt('Enter Your age?');


ageCal( name , age );
 */


//      2. Create a function that will return the area of a rectangle, square, triangle

//      Rectangle
 

/**
 * 
let length = prompt('Enter your length');
let width = prompt('Enter your width');

areaRectangle(length , width) ;
 */

//      Square

/**
 * 
let length = prompt('Enter your length');

areaSquare( length );
 */


//       Triangle

/**
 * 
let base = prompt('Enter your base');
let height = prompt('Enter your height');

areaTriangle( base , height );
 */



/**
 * 
//      3. GPA, CGPA, GRADE function for result publishing


let name = prompt('Student Name');
let className = prompt('Student Class');
let roll = prompt('Student Roll');
let depName = prompt('Depertment Name');
let bn = prompt('Bangla Mark');
let en = prompt('English Mark');
let sc = prompt('Science Mark');
let math = prompt('Mathematics Mark');
let ss = prompt('Social Science Mark');
let rl = prompt('Religion Mark');
let cm = prompt('Computer Mark');


let gpa = ' ';
let grade = ' ';

if( bn >= 0 && bn < 33 ){
    gpa = 0 ;
    grade = 'F';
}else if( bn >= 33 && bn < 40 ){
    gpa = 1 ;
    grade = 'D';
}else if( bn >= 40 && bn < 50 ){
    gpa = 2 ;
    grade = 'C';
}else if( bn >= 50 && bn < 60 ){
    gpa = 3 ;
    grade = 'B';
}else if( bn >= 60 && bn < 70 ){
    gpa = 3.5 ;
    grade = 'A-';
}else if( bn >= 70 && bn < 80 ){
    gpa = 4 ;
    grade = 'A';
}else if( bn >= 80 && bn <= 100 ){
    gpa = 5 ;
    grade = 'A+';
}else{
    gpa = 'Invalid' ;
    grade = 'Invalid' ;
}


console.log(`

    Name                    : ${ name }
    Class                   : ${ className }
    Roll                    : ${ roll }
    Derpertment Name        : ${ depName }
    -------------------------------------------------------------------->
    Subject              Marks           GPA         Grade           Result
    Bangla                ${ bn }              ${ getGpa(bn) }           ${ getGrade(bn) }
    English               ${ en }              ${ getGpa(en) }           ${ getGrade(en) }
    Science               ${ sc }              ${ getGpa(sc) }           ${ getGrade(sc) }
    Mathematics           ${ math }              ${ getGpa(math) }           ${ getGrade(math) }
    Social Science        ${ ss }              ${ getGpa(ss) }           ${ getGrade(ss) }
    Religion              ${ rl }              ${ getGpa(rl) }           ${ getGrade(rl) }
    Computer              ${ cm }              ${ getGpa(cm) }           ${ getGrade(cm) }
    

 `);
 */



//      4. Create an age calculator function

/**
 * 
let name = prompt('Enter your Name?');
let bage = prompt('Ente your Birthday Date');

ageCal( name , bage );
 */



//      5. Create a BMI function for health

let name = prompt('Enter your Name');
let height = prompt('Enter your height');
let weight = prompt('Enter your weight');


bmiCal( name , height , weight );









//      6. Create a currency converter function from taka to USD, CAD, POUND, EURO etc




/**
 * 
let amount = prompt('Amount');
let type = prompt('Currency Type');

cureencyConverter(amount , type);
 */

