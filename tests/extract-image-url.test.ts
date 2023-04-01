import { extractImgUrl } from '../src/index';

describe('extractImgUrl', () => {
  test('should extract image url from `![]()`', () => {
    const markdown = '![alt text](https://example.com/image.png)';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image.png');
  });

  test('should extract image url from `![]()` with title text', () => {
    const markdown = '![alt text](https://example.com/image.png title)';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image.png');
  });

  test('should extract image url from `<img>`', () => {
    const markdown = '<img src="https://example.com/image.png" alt="alt text">';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image.png');
  });

  /*test('should extract image url from `<img>` which contains an escaped character', () => {
    const markdown = '<img src="https://example.com/\\\"image\\\".png" alt="alt text">';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image.png');
  });*/

  test('should extract image url from two lines', () => {
    const markdown = '![alt text](https://example.com/image1.png)\r![alt text](https://example.com/image2.png)';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image1.png');
  });

  test('should extract image url from two lines in different formats (1)', () => {
    const markdown = '<img src="https://example.com/image1.png" alt="alt text">\r![alt text](https://example.com/image2.png)';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image1.png');
  });

  test('should extract image url from two lines in different formats (2)', () => {
    const markdown = '![](https://example.com/image1.png)\r![](https://example.com/image2.png "title text")';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image1.png');
  });

  test('should extract image url from two lines in different formats (3)', () => {
    const markdown = '![alt text](https://example.com/image1.png)\r<img src="https://example.com/image2.png" alt="alt text">';
    const url = extractImgUrl(markdown);
    expect(url).toBe('https://example.com/image1.png');
  });

});
