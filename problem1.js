const SortCharacter = (words) => {
  const regexConsonant = /^[^aeiouAEIOU]+$/;
  const regexOnlyAlphabet = /^[a-zA-Z() ]+$/;
  const regexVowel = /[aiueo]/gi;
  let character = words
    .split("")
    .filter(
      (e) => regexConsonant.test(e) && regexOnlyAlphabet.test(e) && e !== " "
    );
  let vowel = words.split("").filter((e) => regexVowel.test(e));

  const toFormat = (arrayOfWord) => {
    return arrayOfWord.join("").toLowerCase();
  };

  function sortString(input) {
    const counts = {};
    const sortedChars = [];

    for (const char of input) {
      counts[char] = (counts[char] || 0) + 1;
    }

    for (const char in counts) {
      sortedChars.push(char.repeat(counts[char]));
    }

    return sortedChars.join("");
  }

  return `Vowel Characters : ${sortString(toFormat(vowel))}
    Consonant Characters : ${sortString(toFormat(character))},`;
};

console.log(SortCharacter("Sample Case"));
console.log(SortCharacter("Next Case"));
