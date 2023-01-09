import { age } from "./utilities/age.js";
import { firstName as fname  } from "./utilities/name.js";
// import  p1  from "./utilities/person.js";
// import  {person2 } from "./utilities/person.js";

import person ,{person2} from "./utilities/person.js";

const data = new person("Aayush" , "Chouhan" , "19 year old ");
data.info();
const data2 = new person2("Aayush" , "Chouhan" , "19 year old ");
data2.info();