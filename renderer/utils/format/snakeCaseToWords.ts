export default function snakeCaseToWords(word: string) {
  return (
    word.charAt(0).toUpperCase() +
    word.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')
  );
}
