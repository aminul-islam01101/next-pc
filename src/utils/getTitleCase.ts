export function getTitleCase(str: string) {
  const words = str.split(',');
  const capitalizedWords = words.map((word) => {
    const parts = word.trim().split('-');
    const capitalizedParts = parts.map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    });
    return capitalizedParts.join(' ');
  });
  return capitalizedWords.join(', ');
}
