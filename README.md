# learn-to-code

```bash
node build.js input.md > content.html && \
sed '/<!--CONTENT-->/r content.html' template.html > docs/index.html && \
rm content.html && \
npx tailwindcss -i input.css -o ./docs/output.css --content './docs/*.{html,js}' --minify
```

## File Server

This is needed bc some paths don't work from file://
```
node -e "require('http').createServer((req, res) => { const fs = require('fs'); const path = require('path'); const filePath = path.join('.', req.url === '/' ? 'index.html' : req.url); fs.readFile(filePath, (err, data) => { if (err) { res.writeHead(404); res.end('Not Found'); } else { res.end(data); } }); }).listen(3000, () => console.log('File server running on port 3000'))"
```