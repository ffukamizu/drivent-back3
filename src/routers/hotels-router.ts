import { Router } from 'express';
import { getHotels, getHotelById } from '@/controllers';
import { hotelIdSchema } from '@/schemas';
import { authenticateToken, validateParams } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/', getHotels)
  .get('/:hotelId', validateParams(hotelIdSchema), getHotelById);

export { hotelsRouter };
