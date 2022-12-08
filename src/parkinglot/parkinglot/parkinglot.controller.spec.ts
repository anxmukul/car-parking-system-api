import { Test, TestingModule } from '@nestjs/testing';
import { ParkinglotController } from './parkinglot.controller';

describe('ParkinglotController', () => {
  const mockSlotDto = {
    // intiliazeSlot: jest.fn(noOfSlot => {
    //   return {
    //     no_of_slot: noOfSlot
    //   }
    // }),
    // addnewSlot: jest.fn(noOfSlot =>{
    //   return {
    //     no_of_slot: noOfSlot
    //   }
    // })
  };
  let controller: ParkinglotController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkinglotController],
    }).compile();

    controller = module.get<ParkinglotController>(ParkinglotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create slots', () => {
    expect(controller.createSlots({ no_of_slot: 1 })).toEqual({
      total_slot: 1,
    });
  });

  it('should add new slots', () => {
    controller.createSlots({ no_of_slot: 1 });
    expect(controller.addSlots({ no_of_slot: 2 })).toEqual({ total_slot: 3 });
  });

  it('should park a car and return details of car', () => {
    controller.createSlots({ no_of_slot: 2 });
    expect(
      controller.park({ car_reg_no: 'KK-05-MN-3354', car_color: 'blue' }),
    ).toEqual({ allocated_slot_number: 1 });
  });

  it('should park a car and return slot no', () => {
    controller.createSlots({ no_of_slot: 2 });
    expect(
      controller.park({ car_reg_no: 'BR-05-MN-5439', car_color: 'black' }),
    ).toEqual({ allocated_slot_number: 1 });
    expect(
      controller.park({ car_reg_no: 'KK-05-MN-3354', car_color: 'blue' }),
    ).toEqual({ allocated_slot_number: 2 });
  });

  it('should return car_reg no. ', () => {
    controller.createSlots({ no_of_slot: 2 });
    controller.park({ car_reg_no: 'BR-05-MN-5439', car_color: 'black' });
    controller.park({ car_reg_no: 'KK-05-MN-3354', car_color: 'blue' });
    expect(controller.findParticularColorCar('black')).toEqual([
      'BR-05-MN-5439',
    ]);
    expect(controller.findParticularColorCar('blue')).toEqual([
      'KK-05-MN-3354',
    ]);
  });

  it('should return slot no of particular color car ', () => {
    controller.createSlots({ no_of_slot: 2 });
    // expect(controller.findSlotOfCarByColor('black')).toEqual([]);
    controller.park({ car_reg_no: 'BR-05-MN-5439', car_color: 'black' });
    controller.park({ car_reg_no: 'KK-05-MN-3354', car_color: 'blue' });
    expect(controller.findSlotOfCarByColor('black')).toEqual(['1']);
    expect(controller.findSlotOfCarByColor('blue')).toEqual(['2']);
  });

  it('should return details of parked cars ', () => {
    controller.createSlots({ no_of_slot: 2 });
    controller.park({ car_reg_no: 'BR-05-MN-5439', car_color: 'black' });
    controller.park({ car_reg_no: 'KK-05-MN-3354', car_color: 'blue' });
    expect(controller.findReservedSlot()).toEqual([
      { slot_no: 1, registration_no: 'BR-05-MN-5439', color: 'black' },
      { slot_no: 2, registration_no: 'KK-05-MN-3354', color: 'blue' },
    ]);
  });

  it('should return slot no of freed car ', () => {
    controller.createSlots({ no_of_slot: 2 });
    controller.park({ car_reg_no: 'BR-05-MN-5439', car_color: 'black' });
    controller.park({ car_reg_no: 'KK-05-MN-3354', car_color: 'blue' });
    expect(
      controller.Free({ slot_number: 1, car_registration_no: null }),
    ).toEqual({ freed_slot_number: 1 });
    expect(
      controller.Free({
        slot_number: null,
        car_registration_no: 'KK-05-MN-3354',
      }),
    ).toEqual({ freed_slot_number: 2 });
  });
});
