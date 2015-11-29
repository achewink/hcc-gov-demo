---
layout:         "single-page"
title:          "里長聯絡資訊"
lead:           "開放資料"
description:    ""
keywords:       ""
permalink:       /phone/
lang:           "zh-tw"
---
<div class="container custom">
  <div class="row">
    <div class="col-md-12">
    <h1>里長聯絡資訊</h1>
    <table class="table table-striped contact-info">
      <thead>
      <tr>
        <th>姓名</th>
        <th>村里名</th>
        <th>電話</th>
      </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
    </div>
  </div>
</div>


<script>

$(document).ready(function(e) {
  var ajaxresult = '';
  $.ajax({
    url: 'http://opendata.hccg.gov.tw/dataset/c9f33bea-1a8f-4d70-a8af-d0679e65965d/resource/fee99e15-3ada-4128-aa9d-453f44241468/download/20151119095625129.json',
    success: function(result) {

      for (var i = 0; i < result.length; i++) {
        ajaxresult += '<tr><td>' +  result[i]['姓名'] + '</td><td>' + result[i]['里別'] + '</td><td>' + result[i]['行動電話'] + '</td>';
      }
      $('.contact-info tbody').html(ajaxresult);
    }
  })
});
</script>
