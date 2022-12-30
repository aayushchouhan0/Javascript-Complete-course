// Aync and differ javascript File linking way 
// 1. alking about head section linking 
// As we know that html files goes to browser for run. when run gors o reun line -by-line 
// in the head section there will look a script file there stop instead of beacuse 
// They load js file and inside js file they saw html elemnts using in html page. they cannt found it 
// so that reason they will ive error 

// Fo these reaso we should script your js fie n body section this will good practice and it is also important 
//  question for interview 

// 2 . But In the body section to script the js file also hving some probem
// means is that 
// we know that first html files goes with  broswer and there will excute the execute the code 
// then came in the last section of body they saw scipt file link in js firstly be load and exutes 
// // so it is a tme taken process 


// 3. async is the meaning of run to files consecutively 
// means when broswer saw the async word toh fhir voh html file toh parse hoti rahegi or js file load hoti rahegi
// to jasie js file complete load hone ke baad html file parse stop hojayega and js file exetues karega apne code 
// but still give a error so it is also not convient way
// Syntax = <script scr= "" async ></script>

// 4. defer = Defer is avery convient way 
// In these method defer laod both file htmll file and js file as well  it is also takes less time
// beacuse in which js file load fast as comapre to html file
// pharse will be stop teh will continue going after complete both js and html file they will exectus 
// Syntax = <script scr= "" defer ></script>
// Syntax = <script scr= "" defer ></script>