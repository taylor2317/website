function whitespace() {
    const inputBox = document.getElementById("inputBox");
    let text = inputBox.value;

    // Normalize <br>
    text = text.replace(/<br\s*\/?>/gi, '<br>');
    text = text.replace(/\s*<br>\s*/g, ' <br> ');

    // Collapse multiple spaces (not newlines)
    text = text.replace(/ {2,}/g, ' ');

    // Remove lines that end in = but have no value
    text = text.split('\n').filter(line => !/[^=]+= *$/.test(line)).join('\n');

    // Normalize pipe and asterisk lines
    text = text.replace(/^\| /gm, '|');
    text = text.replace(/^\* /gm, '*');

    // Fix headings like = Title =
    text = text.replace(/^=+\s*(.*?)\s*=+$/gm, (match, p1) => {
        const level = match.match(/^=+/)[0].length;
        return '='.repeat(level) + ' ' + p1.trim() + ' ' + '='.repeat(level);
    });

    // Remove space before }}
    text = text.replace(/[ \t]+}}/g, '}}');

    // Join lines like just "}}" into the end of the line above
    text = text.replace(/\n\s*}}/g, '}}');

    // Only insert newline after "}}" if it's followed by a heading or a new field
    text = text.replace(/}}(?=(\n*==| *\| *[A-Za-z]))/g, '}}\n');

    // Fix over-corrected headings like "== = Title = = ="
    text = text.replace(/= {1,}=+/g, match => match.replace(/ /g, ''));
    text = text.replace(/=+ =/g, match => match.replace(/ /g, ''));

    // Remove 3+ consecutive newlines
    text = text.replace(/\n{3,}/g, '\n\n');

    // Trim final result
    text = text.trim();
    
    text = replaceEpisodeLinks(text);
    inputBox.value = text;
    alert("Whitespace cleanup complete!");
}

function replaceEpisodeLinks(text) {
    return text.replace(/\[\[(.*?)\]\]/g, (match, innerText) => {
        if (/Episode\s+\d{3}/.test(innerText)) {
            const parenMatch = innerText.match(/\((.*?)\)/);
            if (parenMatch) {
                return `[[${parenMatch[1]}]]`;
            }
        }
        return match;
    });
}