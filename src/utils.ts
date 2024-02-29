function capitalizeWord(word: string) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

export function capitalize(text: string) {
  return text.split(' ')
    .map((word) => capitalizeWord(word))
    .join(' ')
    .split('-')
    .map((word) => capitalizeWord(word))
    .join('-');
}
