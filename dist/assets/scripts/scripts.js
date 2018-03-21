"use strict";
"use strict";

function AddReadMore() {
  var lengthLimit = 290;
  var readMoreTxt = "...";
  var readLessTxt = "";
  var longTextElement = $("._longtext");

  longTextElement.each(function () {
    if ($(this).find(".firstSec").length) return;

    var allstr = $(this).text();
    if (allstr.length > lengthLimit) {
      var firstSet = allstr.substring(0, lengthLimit);
      var secdHalf = allstr.substring(lengthLimit, allstr.length);
      var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
      $(this).html(strtoadd);
    }
  });

  $('.main-testimonials_item').click(function () {
    $(this).toggleClass('open');
    $(this).find('._longtext').toggleClass('_less _show');
  });
}
$(function () {
  AddReadMore();
});
'use strict';

var clipboard = new ClipboardJS('.ref-link');