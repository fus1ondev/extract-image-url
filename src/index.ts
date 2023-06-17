/**
 * Extracts the first image url from a markdown string
 * @param {string} markdown The markdown string to extract image url
 */
export const extractImgUrl = (markdown: string) => {
  const match = markdown.match(/.*<img .*src=(['"])(.*?)\1.*>.*|\!\[[^\]]*\]\(\s*([^\s\)]+)\s*(?:[\s]+"[^"]*")?\)/);
  return match ? match[2] ?? match[3] : undefined;
}
