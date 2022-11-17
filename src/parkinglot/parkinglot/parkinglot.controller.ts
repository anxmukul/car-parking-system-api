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
    let ns = slotarrayobj.intiliazeSlot(reqestedSlot.no_of_slot);
    const returnobj: Slotresponse = new Slotresponse();
    returnobj.total_slot = ns;
    return returnobj;
  }

  @Patch()
  addSlots(@Body() addnewSlot: Noofslotrequest): Slotresponse {
    let ns = slotarrayobj.addnewSlot(addnewSlot.no_of_slot);
    const returnobj: Slotresponse = new Slotresponse();
    console.log(ns);
    returnobj.total_slot = ns;
    return returnobj;
  }
}
