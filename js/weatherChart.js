function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function(obj) {
    return obj.temp.english;
  });
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(obj) {
    return obj.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  // Your code goes here
  var data = {
    'labels': labels,
    datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    ]
  };
  return data;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
