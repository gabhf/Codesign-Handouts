document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://jesus-maria-jose.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.texto_categ', context)
    coDesReplace('.nome_categ', context)
    coDesReplace('.categ_image', context)
    coDesReplace('.link1', context)
    coDesReplace('.descricao1', context)
    coDesReplace('.img1', context)
    })
})
