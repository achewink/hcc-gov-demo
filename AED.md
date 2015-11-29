---
layout:         "single-page"
title:          "AED地圖"
lead:           "開放資料"
description:    ""
keywords:       ""
permalink:       /AED/
lang:           "zh-tw"
---

<div class="container custom mb-30">
  <div class="col-md-12 center">
    <h2> 新竹 AED google map </h2>
    <iframe src="https://www.google.com/maps/d/embed?mid=zVrTPcxAHtdM.k9Z2KBx4osgs" width="640" height="480"></iframe>
  </div>
</div>
<script>
  $(document).ready(function(e) {
    var geocoder = new google.maps.Geocoder();

    var ajaxresult = '';
    $.ajax({
      url: 'http://opendata.hccg.gov.tw/dataset/21dbb7fa-7654-403e-9375-daa09c168ded/resource/8085caaf-5e22-447a-bc1d-b82cdcccebe4/download/20150129143946531.json',
      success: function(result) {
        var text = '';
        for (var i = 0; i < result.length; i++) {
          var addr = result[i]['場所地址'];
          text += addr + '<br>';
          console.log(addr);
          /*geocoder.geocode({
            'address': addr
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log(results[0].geometry.location.lat());
              console.log(results[0].geometry.location.lng());
            }
          }); */

          // ajaxresult += '<tr><td>' + result[i]['姓名'] + '</td><td>' + result[i]['里別'] + '</td><td>' + result[i]['行動電話'] + '</td>';
        }
        //$('#test').html(text);
      }
    })
  });
</script>
