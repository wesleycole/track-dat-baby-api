import BabyController from '../baby';

describe('Baby Controller', () => {
  let instance: BabyController;

  beforeEach(() => {
    instance = new BabyController();
  });

  it('should getAllBabies', async () => {
    expect(instance).toBeInstanceOf(BabyController);
    const result = await instance.getAllBabies({}, {});
    expect(result).toEqual('Getting babies');
  });

  it('should getBabyById', async () => {
    expect(instance).toBeInstanceOf(BabyController);
    const result = await instance.getBabyById({}, {});
    expect(result).toEqual('Getting baby by ID');
  });

  it('should createBaby', async () => {});

  it('should updateBaby', async () => {
    expect(instance).toBeInstanceOf(BabyController);
    const result = await instance.updateBaby({
      params: {
        id: 1
      }
    }, {});
    expect(result).toEqual('Update baby');
  });

  it('should deleteBaby', async () => {
    expect(instance).toBeInstanceOf(BabyController);
    const result = await instance.deleteBaby({
      params: {
        id: 1
      }
    }, {});
    expect(result).toEqual('Delete baby');
  });
});
