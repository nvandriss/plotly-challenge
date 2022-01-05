//Fetch Library
async function main() {
    const response = await fetch("../data/samples/.json");
    const data = await response.json();
    console.log(data);
}

function buildCharts(sample_values) {
//Arrays
const sample_values = Object.keys(data.sample_values);
const otu_ids = Object.values(data.samples.otu_ids)
const otu_labels = Object.values(data.samples.otu_labels)

// Bar Chart
let bubbleLayout = {
    margin: { t: 0 },
    hovermode: "closests",
    xaxis: { title: "OTU ID"}
  }

  let bubbleData = [
    {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }
  ]

  Plotly.plot("bubble", bubbleData, bubbleLayout);
  let pieData = [
    {
      values: sample_values.slice(0, 10),
      labels: otu_ids.slice(0, 10),
      hovertext: otu_labels.slice(0, 10),
      hoverinfo: "hovertext",
      type: "pie"
    }
  ];
  
  let pieLayout = {
    margin: { t: 0, l: 0 }
  };

  Plotly.plot("pie", pieData, pieLayout)
}

function init() {

}
const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);


function optionChanged(newSample) {
  buildCharts(newSample);
  buildMetadata(newSample);
}

main();