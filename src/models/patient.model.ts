export class Patient {
    id!: number;
    name!: string;
    gender?: boolean;
    birthday?: Date;
    phone?: number; // get from mask

  constructor(obj?: Patient) {
    Object.assign(this, obj);
  }
}
