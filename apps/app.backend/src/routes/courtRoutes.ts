import { Router } from 'express';
import { getCourts, getCourt, createCourt, updateCourt, deleteCourt } from '../controllers/courtController';

const router = Router();

router.get('/', getCourts);
router.get('/:id', getCourt);
router.post('/', createCourt);
router.put('/:id', updateCourt);
router.delete('/:id', deleteCourt);

export default router;
