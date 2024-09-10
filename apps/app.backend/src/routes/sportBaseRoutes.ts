import { Router } from 'express';
import { getSportBases, getSportBase, createSportBase, updateSportBase, deleteSportBase } from '../controllers/sportBaseController';

const router = Router();

router.get('/', getSportBases);
router.get('/:id', getSportBase);
router.post('/', createSportBase);
router.put('/:id', updateSportBase);
router.delete('/:id', deleteSportBase);

export default router;
