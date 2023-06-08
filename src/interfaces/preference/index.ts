import { UserInterface } from 'interfaces/user';
import { ReservationInterface } from 'interfaces/reservation';

export interface PreferenceInterface {
  id?: string;
  customer_id: string;
  reservation_id: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  reservation?: ReservationInterface;
  _count?: {};
}
