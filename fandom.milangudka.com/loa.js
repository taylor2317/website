function loa() {
  console.log("Starting wikitext cleanup...");

  // Get the raw input from the textarea
  const inputBox = document.getElementById('inputBox');
  const originalText = inputBox.value;
  const originalLength = originalText.length;

  let wikitext = originalText;

  console.log(`Original input loaded. Length: ${originalLength} characters`);

  // 0. Convert multi-episode links like [[Episode 3594-3595 (11 June 2008)|11 June]] → [[11 June 2008|11 June]]
  wikitext = wikitext.replace(/\[\[Episode \d+-\d+ \(([^)]+)\)\|([^\]]+)\]\]/g, '[[$1|$2]]');
  console.log("Handled multi-episode links (Episode ####-####).");

  // 1. Simplify episode links with display text
  wikitext = wikitext.replace(/\[\[Episode \d+ \(([^)]+)\)\|([^\]]+)\]\]/g, '[[$1|$2]]');
  console.log("Simplified episode links with display text.");

  // 2. Simplify episode links without display text
  wikitext = wikitext.replace(/\[\[Episode \d+ \(([^)]+)\)\]\]/g, '[[$1]]');
  console.log("Simplified episode links without display text.");

  // 3. Standardize section headers: ==*text*== -> == text ==
  wikitext = wikitext.replace(/^(={2,})(.*?)={2,}$/gm, (_, equals, content) => {
    return `${equals} ${content.trim()} ${equals}`;
  });
  console.log("Standardized section headers formatting.");

  // 4. Ensure a blank line before headers
  wikitext = wikitext.replace(/([^\n])\n(={2,}.*?={2,})/g, '$1\n\n$2');
  console.log("Ensured blank lines before headers.");

  // 5. Normalize line breaks in notes
  wikitext = wikitext.replace(/'''Note:'''<br\s*\/?>/g, "'''Note:''' <br>");
  console.log("Normalized <br> in Note sections.");

  // 6. Standardize all <br /> to <br>
  wikitext = wikitext.replace(/<br\s*\/?>/g, '<br>');
  console.log("Standardized <br> tags.");

  // 7. Add space around <br> tags
  wikitext = wikitext.replace(/\s*<br>\s*/g, ' <br> ');
  console.log("Ensured spacing around <br> tags.");

  // 8. Fix spacing in list items before links
  wikitext = wikitext.replace(/^([*#])\s+\[\[/gm, '$1[[');
  console.log("Fixed spacing in list items before links.");

  // 9. Replace multiple spaces with single space
  wikitext = wikitext.replace(/ {2,}/g, ' ');
  console.log("Reduced multiple spaces to single spaces.");

  // 10. Final trim
  wikitext = wikitext.trim();
  const newLength = wikitext.length;
  console.log(`Trimmed final output. New length: ${newLength} characters`);

  // Update the textarea with cleaned result
  inputBox.value = wikitext;

  // Show summary to user
  alert(`Wikitext cleanup complete!`);
  alert(`Original length: ${originalLength} characters
New length: ${newLength} characters`);
  console.log("Finished all transformations. ✅");
}
