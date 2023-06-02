const makeSentenceCase = (sentence) => {
  const sentenceCase = sentence[0].toUpperCase() + sentence.slice(1);
  return sentenceCase;
};

export { makeSentenceCase };
