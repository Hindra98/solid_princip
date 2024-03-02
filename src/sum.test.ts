
// test.each([
//     {name: 'a', path: 'path/to/a', count: 1, write: true},
//     {name: 'b', path: 'path/to/b', count: 3},
//   ])('inline table', ({name, path, count, write}) => {
//     console.log(name, path, count, write);
    
//   });

// describe("Test du module 'SUM'", () => {
  test("Addition de 1 et 2 qui nous donne 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
// });
