import { Vehicle } from './Vehicle';
import { PaymentStatus } from '../enums/PaymentStatus';

export class Ticket {
  paymentStatus: PaymentStatus = PaymentStatus.PENDING;

  constructor(
    public ticketId: string,
    public entryTime: Date,
    public vehicle: Vehicle,
    public floorId: string,
    public spotId: string
  ) {}
}
