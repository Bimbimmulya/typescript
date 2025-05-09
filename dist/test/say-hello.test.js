import { sayHello } from '../src/say-hello';
describe('Hello', function () {
    it("should say hello", function () {
        const name = "Hello Bimbim";
        expect(name).toBe("Hello Bimbim");
    });
});
describe('Hello', function () {
    it("should say hello", function () {
        expect(sayHello('Bimbim')).toBe('Hello Bimbim');
    });
});
