 var data = [{
         value: 24488692.88,
         color: "#F7464A",
         highlight: "#FF5A5E",
         label: "less than $200"
    },
     {
         value: 4681603.71,
         color: "#46BFBD",
         highlight: "#5AD3D1",
         label: "$200 - $499"
 }, {
         value: 14471858.9,
         color: "#46BFBD",
         highlight: "#5AD3D1",
         label: "$500 - $1499"
 }, {
         value: 4681603.71,
         color: "#46BFBD",
         highlight: "#5AD3D1",
         label: "$1500 - $2699"
 }, {
         value: 59454000,
         color: "#46BFBD",
         highlight: "#5AD3D1",
         label: "more than 2700"
 }
];

 var options = {
    segmentShowStroke: false,
    animateRotate: true,
    animateScale: false,
    percentageInnerCutout: 50,
    tooltipTemplate: "<%= value %>%"
}

 var ctx = document.getElementById("1").getContext("2d");
 var myChart = new Chart(ctx).Doughnut(data, options);

 document.getElementById('js-legend').innerHTML = myChart.generateLegend();