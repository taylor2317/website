function replaceEpisodeLinks() {
    const inputBox = document.getElementById("inputBox");
    let text = inputBox.value;

    // Match all [[...]] patterns
    text = text.replace(/\[\[(.*?)\]\]/g, (match, innerText) => {
        // Only process if "Episode ###" is present
        if (/Episode\s+\d{3}/.test(innerText)) {
            // Find the text inside parentheses
            const parenMatch = innerText.match(/\((.*?)\)/);
            if (parenMatch) {
                return `[[${parenMatch[1]}]]`;
            }
        }
        // Leave unchanged if no Episode ### or no ()
        return match;
    });

    inputBox.value = text;
}