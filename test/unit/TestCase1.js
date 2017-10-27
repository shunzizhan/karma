describe("A suite of basic functions", function() {
    it("reverse word",function(){
    		// console.log('adsakdsjakdsja');
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("DCBA").toEqual(reverse2("ABCD"));
    });
});