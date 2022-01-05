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
}
//Arrays
const sample_values = Object.keys(data.sample_values);
const sample_values = Object.values(data.samples.otu_ids)
const otu_ids = Object.values(data.samples.otu_ids)
const otu_labels = Object.values(data.samples.otu_labels)

// Bar Chart

