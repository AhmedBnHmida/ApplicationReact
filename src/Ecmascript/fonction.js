////////////  1

// Trouver le mot le plus long dans un tableau
const findLongestWord = (words) => {
    // Décomposition du tableau dans une variable
    const wordObjects = words.map(word => ({ mot: word, longueur: word.length }));
  
    // Utilisation de reduce pour trouver le mot avec la longueur la plus grande
    const longestWord = wordObjects.reduce((longest, current) => {
      return current.longueur > longest.longueur ? current : longest;
    });
  
    // Retourner le mot le plus long et sa longueur
    return { mot: longestWord.mot, longueur: longestWord.longueur };
  };
  
  console.log(findLongestWord(["chien", "éléphant", "chat"])); // { mot: "éléphant", longueur: 8 }
  
  
////////////  2


  // Compter les occurrences d'éléments dans un tableau de tableaux de chaînes
const countOccurrences = (array) => {
    // Aplatir le tableau de tableaux et utiliser reduce pour compter les occurrences
    return array.flat().reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  };
  const input = [
        ["a", "b", "c"],
        ["c", "d", "f"],
        ["d", "f", "g"],
    ];
  console.log(countOccurrences(input));
  // { a: 3, b: 2, c: 1 }
  