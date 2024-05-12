import  express  from "express";
const router=express.Router();
import diaryService from "../services/diaryService";
import getNewDiaryEntry from "../utils";

router.get('/', (_req,res)=>{
  res.send(diaryService.getNonSensitiveDiaryEntry());
});

router.get('/:id', (req,res)=>{
  const diary=diaryService.findById(Number(req.params.id));
  if(diary){
    res.send(diary);
  }
  else{
    res.sendStatus(404);
  }
});

router.post('/', (req,res)=>{
  try {
    const newDiaryEntry= getNewDiaryEntry(req.body);
    const addedEntry=diaryService.addDiaries(newDiaryEntry);
    return res.json(addedEntry);
  } catch (error:unknown) {
    let errorMessage='something went wrong ::';
    if(error instanceof Error){
      errorMessage=`something went wrong :: ${error.message}`;
    }
    return res.sendStatus(400).send(errorMessage);
  }
});

export default router;