import { Test, TestingModule } from '@nestjs/testing';

import { Slotarray } from './slot.dto';

describe('Slotarray', () => {
  let slotarrayobj: Slotarray = new Slotarray();

  beforeEach(async () => {});

  describe('intiliazeSlot', () => {
    it('should initialize slots correctly"', () => {
      expect(slotarrayobj.intiliazeSlot(2)).toBe(2);
      expect(slotarrayobj.slots[0].id).toBe(1);
      expect(slotarrayobj.slots[1].id).toBe(2);
      expect(slotarrayobj.slots[0].status).toBe("unreserved");
      expect(slotarrayobj.slots[1].status).toBe("unreserved");

    });
  });
});
