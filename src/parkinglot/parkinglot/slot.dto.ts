class SlotDTO {
  id: number;
  car_reg_no: string;
  car_color: string;
  status: 'reserved' | 'unreserved';
}

class ReservedSlotResponse {
  slot_no: number;
  registration_no: string;
  color: string;
}

export class Slotarray {
  slots: SlotDTO[];
  reservedslots: ReservedSlotResponse[];
  public intiliazeSlot(no_of_slot: number): number {
    this.slots = [];
    for (let i = 1; i <= no_of_slot; i++) {
      const temp: SlotDTO = new SlotDTO();
      temp.id = i;
      temp.status = 'unreserved';
      this.slots.push(temp);
    }
    return no_of_slot;
  }

  public addnewSlot(new_slot: number): number {
    var total_no_slots = this.slots.length;
    for (let i = 1; i <= new_slot; i++) {
      const temp: SlotDTO = new SlotDTO();
      temp.id = i + total_no_slots;
      temp.status = 'unreserved';
      this.slots.push(temp);
    }
    var total_no_slots = this.slots.length;
    return total_no_slots;
  }

  public parkCar(reg_no: string, color: string): number {
    var total_no_slots = this.slots.length;
    let allocated_slot;
    for (let i = 0; i < total_no_slots; i++) {
      if (this.slots[i].status == 'unreserved') {
        allocated_slot = i + 1;
        this.slots[i].car_reg_no = reg_no;
        this.slots[i].car_color = color;
        this.slots[i].status = 'reserved';
        return allocated_slot;
      }
    }
    return 0;
  }

  public findCarByColor(color: string): string[] {
    let car_registration_number: Array<string>;
    car_registration_number = [];
    var total_no_slots = this.slots.length;
    for (let i = 0; i < total_no_slots; i++) {
      if (this.slots[i].car_color === color) {
        car_registration_number.push(this.slots[i].car_reg_no);
      }
    }
    return car_registration_number;
  }

  public findSlotOfCarByColor(color: string): string[] {
    let slot_id: Array<string>;
    slot_id = [];

    var total_no_slots = this.slots.length;
    for (let i = 0; i < total_no_slots; i++) {
      if (this.slots[i].car_color === color) {
        let str = String(this.slots[i].id);
        slot_id.push(str);
      }
    }
    return slot_id;
  }

  public freeSlotBySlotNumber(slot_num: number): number {
    this.slots[slot_num - 1].car_reg_no = null;
    this.slots[slot_num - 1].car_color = null;
    this.slots[slot_num - 1].status = 'unreserved';
    return slot_num;
  }

  public freeSlotByRegNumber(reg_no: string): number {
    var freed_slot;
    var total_no_slots = this.slots.length;
    for (let i = 0; i < total_no_slots; i++) {
      if (this.slots[i].car_reg_no === reg_no) {
        this.slots[i].car_color = null;
        this.slots[i].car_reg_no = null;
        this.slots[i].status = 'unreserved';
        freed_slot = i + 1;
      }
    }
    return freed_slot;
  }

  public getReservedSlot(): ReservedSlotResponse[] {
    this.reservedslots = [];
    var total_no_slots = this.slots.length;
    for (let i = 0; i < total_no_slots; i++) {
      if (this.slots[i].status === 'reserved') {
        const temp: ReservedSlotResponse = new ReservedSlotResponse();
        temp.color = this.slots[i].car_color;
        temp.registration_no = this.slots[i].car_reg_no;
        temp.slot_no = this.slots[i].id;
        this.reservedslots.push(temp);
      }
    }
    return this.reservedslots;
  }
}

export const slotarrayobj: Slotarray = new Slotarray();
 

//  module.exports = [slotarrayobj, Slotarray]
