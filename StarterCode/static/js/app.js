//Fetch Library
async function main() {
    const response = await fetch("../data/samples/.json");
    const data = await response.json();
    console.log(data);
}
//Dropdown
function optionChanged(selectedID){
    console.log(selectedID);

const idmetadata = data.metadata.filter(item=> (item.id == selectedID));

console.log(idmetadata);
    
const panelDisplay = d3.select("#sample-metadata");
panelDisplay.html("");
Object.entries(idmetadata[0]).forEach(item=> 
   {
      panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
   });

// Bar Chart
