function fillTemplate() {
    console.log("Starting template generation...");
  
    const rawNames = document.getElementById("nameInput").value.trim();
    if (!rawNames) {
      alert("Please fill in the Name field");
      console.log("Name field empty - aborting.");
      return;
    }
    const name = rawNames
      .split(',')
      .map(n => n.trim())
      .filter(n => n.length > 0)
      .join('|');
    console.log("Processed names:", name);
  
    const duration = document.getElementById("durationInput").value.trim();
    if (!duration) {
      alert("Please fill in the Duration");
      console.log("Duration field empty - aborting.");
      return;
    }
    console.log("Duration input:", duration);
  
    const currentYear = new Date().getFullYear();
  
    // Helper: Parse durations like "1985-1987, 1988, 2014-" into array of years (numbers)
    function parseDuration(durStr) {
      const years = new Set();
  
      durStr.split(',').forEach(part => {
        part = part.trim();
        if (!part) return;
  
        if (part.includes('-')) {
          let [start, end] = part.split('-').map(s => s.trim());
          start = parseInt(start, 10);
          if (end === '') {
            end = currentYear;
          } else {
            end = parseInt(end, 10);
          }
          for (let y = start; y <= end; y++) {
            years.add(y);
          }
        } else {
          // single year
          years.add(parseInt(part, 10));
        }
      });
  
      return Array.from(years).sort((a,b) => a-b);
    }
  
    const years = parseDuration(duration);
    console.log("Parsed years:", years);
  
    // Assume some fixed data for episodes count and doof-doofs for demo purposes
    const episodeCount = "X";  // Replace as needed or calculate
    const appearancesThisYear = "Y";
    const totalAppearances = "Z";
    const doofDoofsThisYear = "D";
    const totalDoofDoofs = "T";
  
    // Construct the years table rows (repeat per year)
    let yearRows = '';
    years.forEach(() => {
      yearRows +=
  `|-
  |[[#<!-- YEAR !-->|<!-- YEAR !-->]]||<!-- THIS YEAR APPEARANCES !-->||<!-- TOTAL APPEARANCES !-->||<!-- THIS YEAR DOOF-DOOFS !-->||<!-- TOTAL DOOF-DOOFS !--> 
  `;
    });
    console.log("Constructed yearRows.");
  
    // Construct the DPL blocks per year
    let dplBlocks = '';
    years.forEach(year => {
      dplBlocks +=
  `
  ==[[${year}]]==
  {{#dpl:
   |linksto = ${name}
   |category = ${year} Episodes
   |format = ,# [[%PAGE%|%TITLE%]],\\n,
   |replaceintitle = /^[^\\(]+\\((.+)\\)/,$1}}
  `;
    });
    console.log("Constructed dplBlocks.");
  
    // Fill in the template
    const output = `__NOTOC__
  [[<!-- ACTOR !-->]] appeared as [[<!-- CHARACTER !-->]] in '''${episodeCount}''' episodes of ''[[EastEnders]]'' from [[${duration}]] to [[${duration}]]. Here is a list of <!-- his/her !--> appearances.
  
  '''Note:''' <br>
  (d) denotes a doof-doof.
  
  ==Statistics==
  {| class="sortable" width="60%" border="1" cellspacing="0" cellpadding="4" valign="top"
  |- bgcolor="#779909"
  ! width="16%" class="unsortable" |Year
  ! width="18%" class="unsortable" |Year total
  ! width="20%" class="unsortable" |Running total
  ! width="22%" class="unsortable" |No of doof-doofs
  ! width="22%" class="unsortable" |Doof-doof total
  ${yearRows}|}
  
  ${dplBlocks}
  
  [[Category:Character Appearances]]
  `;
  
    const outputBox = document.getElementById("outputBox");
    if (outputBox) {
      outputBox.value = output;
      console.log("Template output set to textarea.");
    } else {
      console.log("Output textarea not found, logging to console instead.");
      console.log(output);
    }
  
    alert("Template generated successfully!");
    console.log("Template generation finished.");
  }
  