# learn-to-code

```bash
node build.js input.md > content.html && \
sed '/<!--CONTENT-->/r content.html' template.html > docs/output.html && \
rm content.html && \
npx tailwindcss -i input.css -o ./docs/output.css --content './docs/*.{html,js}' --minify
```
