const Album = require("./Album")
// @ponicode
describe("handleClick", () => {
    let inst

    beforeEach(() => {
        inst = new Album.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})
