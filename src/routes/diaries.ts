import  express  from "express";
const router=express.Router();
import diaryService from "../services/diaryService";

router.get('/',(_req,res)=>{
  res.send(diaryService.getNonSensitiveDiaryEntry());
});

router.post('/',(_req,res)=>{
  res.send('saving');
});

export default router;