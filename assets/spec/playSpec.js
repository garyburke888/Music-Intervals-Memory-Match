describe("start of game", function() {
    
    describe("move counter", function() {
        it("should start at zero", function() {
            expect(moves).toEqual(0);
        });

    });
    
    describe("opened tiles array", function() {
        it("should start empty", function() {
            expect(openedTiles.length).toEqual(0);
        });
    });

    describe("you win modal", function() {
        it("should be defined", function() {
            expect(modal).toBeDefined();
        });
    });

});