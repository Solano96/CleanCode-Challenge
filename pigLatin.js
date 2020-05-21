const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
const VOWELS = "aeiou";

function isVowel(char) {
	return VOWELS.indexOf(char) > -1;
}

function isConsonant(char) {
	return CONSONANTS.indexOf(char) > -1;
}

function isInAlphabet(char) {
	return isVowel(char) || isConsonant(char);
}

function isValidString(string){
	return string !== null && string.length > 0 && isInAlphabet(string[0]);
}

function englishToPigLatin(english) {
	const SYLLABLE = "ay";
	let pigLatin = "";
	let i = 0;

	if (isValidString(english)) {
		let preConsonants = "";
		let i = 0;

		while(i < english.length) {
			let actualChar = english[i];

			if(isConsonant(actualChar) || english.substring(i-1, i+1) === 'qu'){
				preConsonants += actualChar;
				i++;
			}
			if(isVowel(actualChar)){
				break;
			}
		}
		pigLatin = english.substring(i) + preConsonants + SYLLABLE;
	}
	return pigLatin;
};

module.exports = {
    englishToPigLatin
};
