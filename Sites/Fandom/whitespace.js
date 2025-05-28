function whitespace() {
    const inputBox = document.getElementById("inputBox");
    let text = inputBox.value;

    // 1. Normalize all <br /> and <br/> to <br>
    text = text.replace(/<br\s*\/?>/gi, '<br>');

    // 2. Ensure <br> has one space on either side
    text = text.replace(/\s*<br>\s*/g, ' <br> ');

    // 3. Remove double or more spaces
    text = text.replace(/ {2,}/g, ' ');

    // 4. Remove lines ending in "=" with no value after
    text = text.split('\n').filter(line => !/[^=]+= *$/.test(line)).join('\n');

    // 5. Lines starting with "| " become "|"
    text = text.replace(/^\| /gm, '|');

    // 6. Lines starting with "* " become "*"
    text = text.replace(/^\* /gm, '*');

    // 7. Normalize heading lines to "== Text =="
    text = text.replace(/^=+\s*(.*?)\s*=+$/gm, (match, p1) => {
        const level = match.match(/^=+/)[0].length;
        return `${'='.repeat(level)} ${p1.trim()} ${'='.repeat(level)}`;
    });

    // 8. Ensure spacing inside any equal signs (inline or headings)
    text = text.replace(/(=+)\s*(.*?)\s*(=+)/g, (match, openEq, content, closeEq) => {
        return `${openEq} ${content.trim()} ${closeEq}`;
    });

    // 9. Remove space after '#' in headings
    text = text.replace(/^(#+) +/gm, '$1');

    // 10. Remove space before any '}}'
    text = text.replace(/[ \t]+}}/g, '}}');

    // 11. Merge standalone '}}' lines up to the end of the previous line
    text = text.replace(/\n\s*}}\s*/g, '}}');

    // 12. Move any text after '}}' to the next line
    text = text.replace(/}}[ \t]*(.+)/g, '}}\n$1');

    // 13. Update the textarea
    inputBox.value = text;

    // 14. Alert user
    alert("Fixed");
}