describe("#starOutGrid", () => {
  it("should not change grid without stars", function () {
    expect(starOutGrid([
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ])
    ).toEqual([
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ]);
  });
  it("should star-out row and col that has a star", function () {
    expect(starOutGrid([
      ["A", "B", "C"],
      ["D", "E", "*"],
      ["G", "H", "I"],
    ])
    ).toEqual([
      ["A", "B", "*"],
      ["*", "*", "*"],
      ["G", "H", "*"],
    ]);
  });
  it("should work with multiple stars", function () {
    const inputGrid = [
      ["*", "B", "C"],
      ["D", "E", "*"],
      ["G", "H", "I"],
    ];
    const expectedGrid = [
      ["*", "*", "*"],
      ["*", "*", "*"],
      ["*", "H", "*"],
    ];

    expect(starOutGrid(inputGrid)).toEqual(expectedGrid);
  });
  it("should work with non-square grids:", function () {
    expect(starOutGrid([
      ["*", "B", "C"],
      ["D", "E", "*"],
      ["G", "H", "I"],
      ["J", "K", "L"]
    ])
    ).toEqual([
      ["*", "*", "*"],
      ["*", "*", "*"],
      ["*", "H", "*"],
      ["*", "K", "*"],
    ]);
  });
});
