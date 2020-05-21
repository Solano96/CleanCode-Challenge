var pigLatin = require('./pigLatin');

describe('pigLatin', function() {
	it('translate a word beginning with consonant', function() {
		expect( pigLatin.englishToPigLatin("car") ).toEqual("arcay");
	});

	it('translate a word beginning with vowel', function() {
		expect( pigLatin.englishToPigLatin("orange") ).toEqual("orangeay");
	});

	it('translate a word beginning with qu', function() {
		expect( pigLatin.englishToPigLatin("queue") ).toEqual("euequay");
	});

	it('translate a word containing the string qu before vowel', function() {
		expect( pigLatin.englishToPigLatin("square") ).toEqual("aresquay");
	});
});
