
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
img.setAttribute('src','jovem h.png')
          }else if ( idade < 50){
            //adulto
            img.setAttribute('src','hmadult.png')
          }else{
            //idoso
            img.setAttribute('src','idoso.png')  
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
            img.setAttribute('src','mulher.png')
          }else{
            //idoso
            img.setAttribute('src','idosa.png')    
          }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
    }
}