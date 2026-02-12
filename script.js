
function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO!]Verifique os dados novamente!")
    }else{
      var fsex = document.getElementsByName('radsex') 
      var idade = ano - Number(fano.value)// cálculo da idade
      res.innerHTML=`Idade calculada: ${idade} anos`
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
          gênero = 'Homem'
          if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'bebemenino.png')
          }else if ( idade  < 21){
//jovem
img.setAttribute('src','jovemh.png')
          }else if ( idade < 50){
            //adulto
            img.setAttribute('src','adultoh.png')
          }else{
            //idoso
            img.setAttribute('src','idosoh.png')  
          }
      }else{
          gênero = 'Mulher'
           if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'bebemenina.png')
          }else if ( idade  < 21){
//jovem
img.setAttribute('src','jovemm.png')
          }else if ( idade < 50){
            //adulto
            img.setAttribute('src','adultom.png')
          }else{
            //idoso
            img.setAttribute('src','idosom.png')    
          }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
    }
}