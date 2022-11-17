import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';

import { slotarrayobj } from './slot.dto';

class Slotresponse {
  total_slot: number;
}

class Noofslotrequest {
  no_of_slot: number;
}

class carDetail {
  car_reg_no: string;
  car_color: string;
}

class allocatedSlot {
  allocated_slot_number: number;
}
class badresponse {
    Error: string;
}
class FreeSlotResponse {
  freed_slot_number: number;
}
class FreeSlotRequest {
  slot_number: number;
}

class ReservedSlotResponse {
  slot_no: number;
  registration_no: string;
  color: string;
}

// class CarRegNos{
//     cars: Array<string>
// }
// class CarSlotNos{
//     cars_slot_no: number;
// }
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

  @Post('park')
  park(@Body() newCar: carDetail): allocatedSlot | badresponse{
    let slotGiven = slotarrayobj.parkCar(newCar.car_reg_no, newCar.car_color);
    console.log('Slots allocated', slotGiven);
    if (slotGiven != 0) {
      const returnobj: allocatedSlot = new allocatedSlot();
      returnobj.allocated_slot_number = slotGiven;
      return returnobj;
    }
    else{
        const returnobj: badresponse = new badresponse();
        returnobj.Error = "Parking lot is Full!";
    }
    
  }

  @Get('registration_numbers/:color')
  findParticularColorCar(@Param('color') color: string): string[] {
    let car_no = slotarrayobj.findCarByColor(color);
    return car_no;
  }

  //   @Get('registration_numbers/:color')
  //   findParticularColorCar(@Param('color') color: string): CarRegNos{
  //     let car_no = slotarrayobj.findCarByColor(color);
  //     const responsearr: CarRegNos = new CarRegNos();
  //     responsearr.cars = car_no;
  //     return responsearr;
  //   }

  @Get('slot_numbers/:color')
  findSlotOfCarByColor(@Param('color') color: string): string[] {
    let car_no = slotarrayobj.findSlotOfCarByColor(color);
    return car_no;
  }

  @Post('clear')
  Free(@Body() free_slot_no: FreeSlotRequest): FreeSlotResponse {
    let freed_slot = slotarrayobj.freeSlot(free_slot_no.slot_number);
    const returnobj: FreeSlotResponse = new FreeSlotResponse();
    returnobj.freed_slot_number = freed_slot;
    return returnobj;
  }

  @Get('status')
  findReservedSlot(): ReservedSlotResponse[] {
    let reserved_slots_array = slotarrayobj.getReservedSlot();
    // const reservedSlots: ReservedSlotResponse = new ReservedSlotResponse();
    // reservedSlots.registration_no = reserved_slots_array.;
    return reserved_slots_array;
  }
}
