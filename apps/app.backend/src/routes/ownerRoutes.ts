import { Router } from 'express';
import { getOwners, getOwner, createOwner, updateOwner, deleteOwner } from '../controllers/ownerController';

const router = Router();

router.get('/', getOwners);
router.get('/:id', getOwner);
router.post('/', createOwner);
router.put('/:id', updateOwner);
router.delete('/:id', deleteOwner);

export default router;
