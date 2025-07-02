function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addStat(statName, displayName) {
  
  // Add a stat
  document.querySelector("#statTable thead input[type=submit]").click();
  while (document.querySelector("#statTable tr.dirty") == null)
  	await sleep(50);
  
  // Set stat values
  document.querySelector("#statTable tr.dirty td:nth-child(3) input").value = statName;
  document.querySelector("#statTable tr.dirty td:nth-child(5) input").checked = true;
  document.querySelector("#statTable tr.dirty td:nth-child(6) input").value = 1;
  document.querySelector("#statTable tr.dirty td:nth-child(7) input").value = 0;
  document.querySelector("#statTable tr.dirty td:nth-child(11) input").checked = true;
  document.querySelector("#statTable tr.dirty td:nth-child(12) input").value = displayName;
  
  // save stat
  document.querySelector("#statTable tr.dirty td:last-child input[value=Save]").click()
  while (document.querySelector("#statTable tr.dirty") != null)
  	await sleep(50);
}

async function createStats(){
  await addStat("stat1", "Stat 1");
  await addStat("stat2", "Stat 2");
}

createStats();
