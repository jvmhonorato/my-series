const labels = [
    {id: 'to-watch', name: 'Para assistir'},
    {id: 'watched', name: 'Assistido'},
    {id: 'watching', name:'Assistindo'}
]

const index = async({Serie},req,res)=> {
    const docs = await Serie.find({})
    res.render('series/index', { series: docs, labels})
   
}


const novaProcess =  async({Serie},req,res) => {
    const serie = new Serie(req.body)
    await serie.save()
    res.redirect('/series')
        console.log('saved')
    
    
}

const novaForm = (req,res) => {
    res.render('series/nova')
}

const excluir = async({Serie},req,res)=> {
    await Serie.remove({
        _id: req.params.id 
})
        res.redirect('/series')

}


const editarProcess =  async({Serie},req,res) => {
    Serie.findOne({_id: req.params.id})
    serie.name=req.body.name
    serie.status=req.body.status
    await serie.save()
    res.redirect('/series')
    
 
    
}



const editarForm = async({Serie},req,res) => {

   const serie = await Serie.findOne({_id: req.params.id})
    res.render('series/editar', {serie, labels})
    
   
}




module.exports = {
    index,
     novaProcess,
    novaForm,
    excluir,
    editarForm,
    editarProcess
}