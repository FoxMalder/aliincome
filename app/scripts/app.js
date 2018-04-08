$(document).ready(function() {
  moment.locale('ru');
  $('input[name="daterange"]').daterangepicker({
    "startDate": "09/4/2018",
    "endDate": "10/5/2018",
    locale: {
      cancelLabel: 'Сбросить',
      applyLabel: 'Применить'
    }
  });
});
