import { NewDiaryEntry } from "./types";
import { Visibility,Weather } from "./types";

const isString=(text:unknown):text is string=>{
  return typeof text==='string' || text instanceof  String;
};

const isDate=(date:string):boolean=>{
  return Boolean(Date.parse(date));
};

const isVisibility=(param:string):param is Visibility=>{
   return ['great' , 'good' ,'ok' ,'poor'].includes(param);
};

const isWeather=(weather:string):weather is Weather =>{
  return ['sunny' , 'rainy' , 'cloudy' , 'windy' , 'stormy'].includes(weather);
};

const parseComment=(comment:unknown):string=>{
  if(!comment || !isString(comment)){
    throw new Error('missing comment or data');
  }
  return comment;
};

const parseDate=(date:unknown):string=>{
  if(!date || !isString(date) || !isDate(date)){
    throw new Error('Incorrect or missing date');
  }
 return date;
};

const parseVisibility=(visibility:unknown):Visibility=>{
 if(!visibility || !isString(visibility) || !isVisibility(visibility)){
  throw new Error('incorrect or missing visibility');
 }
 return visibility;
};

const parseWeather=(weather:unknown):Weather=>{
  if(!weather || !isString(weather) || !isWeather(weather)){
    throw new Error('Incorrect or missing weather');
  }
  return weather;
};

const getNewDiaryEntry=(entry:unknown):NewDiaryEntry=>{
  //console.log(entry, 'see');
  
  if(!entry || typeof entry !=='object'){
    throw new Error('incorrect or data is missing');
  }

  if('comment' in entry && 'date' in entry  &&  'visibility' in entry && 'weather' in entry){
    const newEntry:NewDiaryEntry={
        comment:parseComment(entry.comment),
        date:parseDate(entry.date),
        visibility:parseVisibility(entry.visibility),
        weather:parseWeather(entry.weather)
    };
  
    return newEntry;
  }
  throw new Error('Incorrect data: some fields are missing');
};

export default getNewDiaryEntry;