# extract-image-url

This package extracts the first image URL of a Markdown text.

In this package, only regular expressions are used, so it is fast.

## Installation

```bash
npm install extract-image-url
```

## Usage

```js
const extractImageUrl = require('extract-image-url');

const markdown = '# Hello World\n\n![image](https://example.com/image.png)';
const imageUrl = extractImageUrl(markdown);

console.log(imageUrl);

// => 'https://example.com/image.png'
``` 

The following formats are supported:

```markdown
![image](https://example.com/image.png)
![image](https://example.com/image.png "title")
![image](https://example.com/image.png title)

<img src="https://example.com/image.png" >
<img src="https://example.com/image.png" alt="image" />
```

## License

MIT