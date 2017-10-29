$(document).ready(function () {
  //ACCENT COLOR CHANGE
  accentColorChange();

  //PONTOS LINGUAGENS
  pontos("EN")(4);
  pontos("PT-BR")(5);

  //TAMANHO CIRCULOS
  SetSize_Object(".circle", 17);
});

function accentColorChange(){
  var green = 'rgb(0, 180, 0)';
  var teal = 'rgb(0,128,128)';
  var purple = '#aa00ff';

  //MUDA COR
  $('#green-circle').css('background',green);
  $(document).on('click','#green-circle', () => mudaCor(green));
  $('#teal-circle').css('background', teal);
  $(document).on('click','#teal-circle', () => mudaCor(teal));
  $('#purple-circle').css('background', purple);
  $(document).on('click','#purple-circle', () => mudaCor(purple));

  //POPOVER
  $('[rel=popover]').popover({
    html : true,
    content: function() {
    return $('#muda-cor').html();
  }
  });


  function mudaCor(color) {
    $('body').css('--accent-color', color);
  }
}


function pontos(language) {
  return function (qtdPontos) {
    for (var i = 0; i < qtdPontos; i++) {
      $('#' + language).append('<div class="circle" style="background: var(--accent-color);"></div> &nbsp');
    }
    for (var i = qtdPontos; i < 5; i++) {
      $('#' + language).append('<div class="circle" style="background: #333;"></div> &nbsp');
    }
  }
}

function SetSize_Object(object, size) {
  $(object).css("width", size + "px");
  $(object).css("height", size + "px");
}

//string.replace(//g,' ') //replace globally
