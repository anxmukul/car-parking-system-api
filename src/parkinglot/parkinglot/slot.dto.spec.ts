import { Test, TestingModule } from '@nestjs/testing';

import { Slotarray } from './slot.dto';

describe('Slotarray', () => {
  beforeEach(async () => {});

  describe('intiliazeSlot', () => {
    let slotarrayobj: Slotarray = new Slotarray();
    it('should initialize slots correctly', () => {
      expect(slotarrayobj.intiliazeSlot(2)).toBe(2);
      expect(slotarrayobj.slots[0].id).toBe(1);
      expect(slotarrayobj.slots[1].id).toBe(2);
      expect(slotarrayobj.slots[0].status).toBe('unreserved');
      expect(slotarrayobj.slots[1].status).toBe('unreserved');
    });
  });
  describe('addnewSlot', () => {
    let slotarrayobj: Slotarray = new Slotarray();
    slotarrayobj.intiliazeSlot(1);
    it('should add more slots correctly', () => {
      var res = slotarrayobj.addnewSlot(1);
      expect(res).toBe(2);
      expect(slotarrayobj.slots[1].status).toBe('unreserved');
      expect(slotarrayobj.slots[1].id).toBe(2);
    });
  });
  describe('parkCar', () => {
    it('should park car on first vacan slot', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(2);
      var res = slotarrayobj.parkCar('kk-89-cr-8996', 'white');
      expect(res).toBe(1);
      expect(slotarrayobj.slots[0].status).toBe('reserved');
      expect(slotarrayobj.slots[0].car_color).toBe('white');
      expect(slotarrayobj.slots[0].car_reg_no).toBe('kk-89-cr-8996');
      expect(slotarrayobj.slots[1].status).toBe('unreserved');
    });
    it('should park car on first vacan slot', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      var res = slotarrayobj.parkCar('kk-89-cr-8996', 'white');
      expect(res).toBe(1);
      expect(slotarrayobj.slots[0].status).toBe('reserved');
      expect(slotarrayobj.slots[0].car_color).toBe('white');
      expect(slotarrayobj.slots[0].car_reg_no).toBe('kk-89-cr-8996');
      res = slotarrayobj.parkCar('UP-89-cr-4452', 'white');
      expect(res).toBe(0);
    });
  });
  describe('findCarByColor', () => {
    it('should return correct reg_no if available color car is searched', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('kk-89-cr-8996', 'white');
      var res = slotarrayobj.findCarByColor('white');
      expect(res).toEqual(['kk-89-cr-8996']);
    });
    it('should return empty array if no car exits of given color', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('kk-89-cr-8996', 'blue');
      var res = slotarrayobj.findCarByColor('white');
      expect(res).toEqual([]);
    });
  });
  describe('findSlotOfCarByColor', () => {
    it('should return correct Slot no if available color car is searched', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('kk-89-cr-8996', 'white');
      var res = slotarrayobj.findSlotOfCarByColor('white');
      expect(res[0]).toEqual('1');
    });
    it('should return empty array if no car exits of given color', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('kk-89-cr-8996', 'blue');
      var res = slotarrayobj.findSlotOfCarByColor('white');
      expect(res).toEqual([]);
    });
  });
  describe('freeSlotBySlotNumber', () => {
    it('should return correct freed Slot no. if car is unparked of given slot num', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('KA-03-ME-8256', 'black');
      var res = slotarrayobj.freeSlotBySlotNumber(1);
      expect(res).toEqual(1);
      expect(slotarrayobj.slots[0].status).toBe('unreserved');
    });
  });
  describe('freeSlotByRegNumber', () => {
    it('should return correct freed Slot no. if car is unparked', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('KA-03-ME-8256', 'black');
      var res = slotarrayobj.freeSlotByRegNumber('KA-03-ME-8256');
      expect(res).toEqual(1);
      expect(slotarrayobj.slots[0].status).toBe('unreserved');
    });
    it('should return -1 if no car parked of given reg_no', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      slotarrayobj.parkCar('KA-03-ME-8256', 'black');
      var res = slotarrayobj.freeSlotByRegNumber('kk-89-cr-8996');
      expect(res).toEqual(-1);
    });
  });
  describe('getReservedSlot', () => {
    it('should return array of cars details which are parked', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(2);
      slotarrayobj.parkCar('KA-03-ME-8256', 'black');
      slotarrayobj.parkCar('kk-89-cr-8996', 'blue');
      var res = slotarrayobj.getReservedSlot();
      // expect(res).toEqual([1,2]);
      expect(slotarrayobj.slots[0].car_reg_no).toBe('KA-03-ME-8256');
      expect(slotarrayobj.slots[0].car_color).toBe('black');
      expect(slotarrayobj.slots[1].car_reg_no).toBe('kk-89-cr-8996');
      expect(slotarrayobj.slots[1].car_color).toBe('blue');
    });
    it('should return empty array if no cars are parked yet', () => {
      let slotarrayobj: Slotarray = new Slotarray();
      slotarrayobj.intiliazeSlot(1);
      var res = slotarrayobj.getReservedSlot();
      expect(res).toEqual([]);
    });
  });
});
