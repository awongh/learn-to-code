# learn-to-code

```bash
npx markdown-it input.md -o content.html && \
sed '/<!--CONTENT-->/r content.html' template.html > build/output.html && \
rm content.html && \
npx tailwindcss -i input.css -o ./build/output.css --content './build/*.{html,js}' --minify
```
