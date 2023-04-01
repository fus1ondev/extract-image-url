export const extractImgUrl = (markdown: string) => {
  const match = markdown.match(/.*<img .*src=(['"])(.*?)\1.*>.*|\!\[[^\]]*\]\(\s*([^\s\)]+)\s*[^\)]*\)/);
  return match ? match[2] ?? match[3] : undefined;
}
