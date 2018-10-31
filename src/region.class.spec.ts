import { Region } from "./region.class";

describe("Tests for Region class", () => {
    it("Should calcutate the correct area of a region", () => {
        const region = new Region(0, 0, 100, 100);
        const expected = 10000;

        expect(region.area()).toEqual(expected);
    });

    it("Should return a proper string representatio", () => {
        const region = new Region(0, 0, 100, 100);
        const expected = "(0, 0, 100, 100)";

        expect(region.toString()).toEqual(expected);
    })
});