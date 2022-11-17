class SlotDTO {
  id: number;
  car_reg_no: string;
  color: string;
  status: 'reserved' | 'unreserved';
}

class Slotarray {
  slots: SlotDTO[];

  public intiliazeSlot(no_of_slot: number): number {
    // this.slots = new Array<SlotDTO>(no_of_slot);
    for (let i = 1; i <= no_of_slot; i++) {
      const temp: SlotDTO = new SlotDTO();
      temp.id = i;
      temp.status = 'unreserved';
    }
    return no_of_slot;
  }

}

export const slotarrayobj: Slotarray = new Slotarray();
