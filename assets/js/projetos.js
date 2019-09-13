document.addEventListener('DOMContentLoaded', function() {
    let db = coDesConnect('https://jesus-maria-jose.firebaseio.com/')
    let params = coDesExtract()

    let value = params['key']

    db.download('/', function(data) {
    context = data["portfolio"]["projetos"][value]
    console.log(context)
    coDesReplace('.lista', context)
    coDesReplace('.nome_categ', context)    
    })
})
