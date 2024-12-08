import { Router } from 'express';
import {
  getCourts,
  getCourt,
  createCourt,
  updateCourt,
  deleteCourt,
} from '../controllers/courtController';

const router = Router();

router.get('/courts/:userId', getCourts);
router.get('/courts/:id', getCourt);
router.post('/courts/:userId', createCourt);
router.put('courts/:id', updateCourt);
router.delete('courts/:id', deleteCourt);

// router.get('/users/:userId/courts', getCourts);
// router.get('/users/:userId/courts/:id', getCourt);
// router.post('/users/:userId/courts', createCourt);
// router.put('/users/:userId/courts/:id', updateCourt);
// router.delete('/users/:userId/courts/:id', deleteCourt);

export default router;
