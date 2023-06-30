// DDX Bricks Wiki - See https://developer.domo.com/docs/ddx-bricks/getting-started-using-ddx-bricks
// for tips on getting started, linking to Domo data and debugging your app
 

//Step 1. Select your dataset(s) from the button in the bottom left corner

debugger;
//Step 2. Query your dataset(s): https://developer.domo.com/docs/dev-studio-references/data-api

var data = {
  actual: 1155,
  projected: 1573,
  limits: [500, 1000, 2500]
};

var actualProgress = document.getElementById("actual-progress");
var projectedProgress = document.getElementById("projected-progress");
var caption = document.getElementById("vv");

var barLength = Math.max(...data.limits);
var actualPercentage = (data.actual / barLength) * 100;
var projectedPercentage = ((data.projected - data.actual) / barLength) * 100;

actualProgress.style.width = `${actualPercentage}%`;
projectedProgress.style.width = `${projectedPercentage}%`;


//Step 3. Do something with the data from the query result
function handleResult(data1){
 debugger;
 let pillText = '';
  console && console.log(data1);
  if (funk == 'avg') {
    pillText = convertToInternationalCurrencySystem((data1.reduce((s, a) => s + a.revenue, 0))/data1.length) + '(avg)';    
  } else {
    pillText = convertToInternationalCurrencySystem(data1.reduce((s, a) => s + a.revenue, 0));
  }
  if (dollars) pillText = '$' + pillText;
  return actualProgress.innerHTML = pillText;
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
