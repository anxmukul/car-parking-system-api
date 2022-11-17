import { Controller, Get, Post, Body, Patch } from '@nestjs/common';

import { slotarrayobj } from './slot.dto';

class Slotresponse {
  total_slot: number;
}

class Noofslotrequest {
  no_of_slot: number;
}

@Controller('parkinglot')
export class ParkinglotController {
  @Post()
  createSlots(@Body() reqestedSlot: Noofslotrequest): Slotresponse {
    // console.log(reqestedSlot);
    let ns = slotarrayobj.intiliazeSlot(reqestedSlot.no_of_slot);
    const returnobj: Slotresponse = new Slotresponse();
    // console.log(reqestedSlot.no_of_slot, ns);
    returnobj.total_slot = ns;
    return returnobj;
  }

}
