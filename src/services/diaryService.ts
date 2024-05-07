import diaries from '../../data/diaries';
import { NonSensitiveDiaryEntry, DiaryEntry } from '../types';

const getDiaries=():DiaryEntry[]=>{
  return diaries;
};

const getNonSensitiveDiaryEntry=():NonSensitiveDiaryEntry[]=>{
 return diaries.map(({id,date,weather,visibility})=>({
  id,
  date,
  weather,
  visibility
 }));
};

const addDiaries=()=>{
  return null;
};
export default {
  getDiaries,
  addDiaries,
  getNonSensitiveDiaryEntry
};