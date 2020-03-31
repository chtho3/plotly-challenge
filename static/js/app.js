// Practice indexing into the json file; populate dropdown

d3.json("./data/samples.json").then(function(data){
//     var sample_values = data.samples[0].id;
//     var otu_ids = data.samples[0].otu_ids;
//     var otu_labels = data.samples[0].otu_labels;
//     console.log(data);
//     console.log(sample_values);
//     console.log(otu_ids);
//     console.log(otu_labels);

    var sampleIDs = data.names;

//appending sampleIDs to the dropdown menu on load
    for (var i = 0; i < sampleIDs.length; i++) {
        var dropdownContent = document.getElementById("selDataset");
        var element = sampleIDs[i];
        //console.log(element)

        var htmlToAppend = document.createElement('option');
        htmlToAppend.text = element;
        htmlToAppend.value = element;
        //console.log(htmlToAppend)
        dropdownContent.add(htmlToAppend);
}
});

// event listener
d3.selectAll("body").on("change", optionChanged);

// build the bubble plot as a function
function optionChanged() {
// pull dropdown value as subjectID
    var dropdownMenu = d3.select("#selDataset");
    var subjectID = dropdownMenu.property('value');
    //console.log(subjectID)
// index samples.json file
    d3.json("./data/samples.json").then(function(data){
// match subjectID to index in dataset
        for (var i = 0; i < data['names'].length; i++) {
            if (data.names[i] === subjectID) {
                var indexID = parseInt(i);
            }}
// pull data from that subject
        var sample_values = data.samples[indexID].sample_values;
        var otu_ids = data.samples[indexID].otu_ids;
        var otu_labels = data.samples[indexID].otu_labels;
        //console.log(otu_ids)
        
//top ten OTUs
        var top_sample_values = sample_values.sort((a,b) => b - a);
        var top_ten_sample = top_sample_values.slice(0,10).reverse();
        //console.log(top_ten_sample)

//build horizontal bar chart
        var trace = {
            type: 'bar',
            x: top_ten_sample,
            y: otu_ids,
            text: otu_labels,
            orientation: 'h'
        };
        var barData = [trace];

        var layout = {
            title: `Sample ${subjectID} Biodiversity Density`,
            yaxis: {title: "OTU ID", type: 'category'},
            xaxis: {title: "Sample Values"},
            showlegend: false,

        };
    
    Plotly.newPlot('bar', barData, layout);

//build metadata table
        //console.log(data.metadata);
        var metaID = data.metadata[indexID];
        console.log(metaID);
        var table = d3.select(".sample-metadata").select("tbody");
        table.data(metaID).enter().append("tr").text(metaID);
        // var trow = table.append("tr");
        // trow.append("td").text(`id: ${metaID.id}`);
        // trow.append("td").text(`ethnicity: ${metaID.ethnicity}`);
        // trow.append("td").text(`gender: ${metaID.gender}`);
        // trow.append("td").text(`age: ${metaID.age}`);
        // trow.append("td").text(`location: ${metaID.location}`);
        // trow.append("td").text(`bbtype: ${metaID.bbtype}`);
        // trow.append("td").text(`wfreq: ${metaID.wfreq}`);

//build wash indicator


//build bubble plot
      var trace1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
            size: sample_values,
            sizeref: 0.05,
            sizemode: 'area',
            opacity: 0.7,
            color: sample_values
        }
      };
  
      var bubbleData = [trace1];
  
      var layout = {
        title: `Sample ${subjectID} Biodiversity Density`,
        xaxis: {title: "OTU ID"},
        yaxis: {title: "Sample Values"},
        showlegend: false,

      };
      Plotly.newPlot("bubble", bubbleData, layout);
    });
  };
