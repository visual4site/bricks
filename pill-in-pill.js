// DDX Bricks Wiki - See https://developer.domo.com/docs/ddx-bricks/getting-started-using-ddx-bricks
// for tips on getting started, linking to Domo data and debugging your app
 
//Available globals
var domo = window.domo; // For more on domo.js: https://developer.domo.com/docs/dev-studio-guides/domo-js#domo.get
var datasets = window.datasets;

//Step 1. Select your dataset(s) from the button in the bottom left corner



//Step 2. Query your dataset(s): https://developer.domo.com/docs/dev-studio-references/data-api
var fields = ['state', 'revenue'];
var groupby = ['state'];
var query = `/data/v1/${datasets[0]}?fields=${fields.join()}&groupby=${groupby.join()}`;
domo.get(query).then(handleResult);


const data = {
  actual: 1155,
  projected: 1573,
  limits: [500, 1000, 2500]
};

const actualProgress = document.getElementById("actual-progress");
const projectedProgress = document.getElementById("projected-progress");
const caption = document.getElementById("vv");

const barLength = Math.max(...data.limits);
const actualPercentage = (data.actual / barLength) * 100;
const projectedPercentage = ((data.projected - data.actual) / barLength) * 100;

debugger;

actualProgress.style.width = `${actualPercentage}%`;
projectedProgress.style.width = `${projectedPercentage}%`;


//Step 3. Do something with the data from the query result
function handleResult(data){
  debugger;
  console && console.log(data);
  actualProgress.innerHTML = convertToInternationalCurrencySystem(data.reduce((s, a) => s + a.revenue, 0));
  
}

function convertToInternationalCurrencySystem (labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

}
