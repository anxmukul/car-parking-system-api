class SlotDTO {
  id: number;
  car_reg_no: string;
  color: string;
  status: 'reserved' | 'unreserved';
}

class Slotarray {
  slots: SlotDTO[];

  public intiliazeSlot(no_of_slot: number): number {
    this.slots = []
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
        temp.id = i+total_no_slots;
        temp.status = 'unreserved';
        this.slots.push(temp);
    }
    var total_no_slots = this.slots.length;
    return total_no_slots;
  }
}

export const slotarrayobj: Slotarray = new Slotarray();
