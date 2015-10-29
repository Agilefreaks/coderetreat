describe('sanity check', function () {
   it('always passes', function () {
     expect(true).toBe(true);
   });
   
   it('main is available', function () {
     expect(main).toEqual(jasmine.any(Function));
   });
});
