const form=document.querySelector('#searchForm');
form.addEventListener('submit',async function (e){
    e.preventDefault();
    const searchTerm=form.elements.query.value;
    const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    makeImages(res.data);
    form.elements.query.value=' ';
    
},)
const makeImages=(shows)=>{
    for(let result of shows){
        if(result.show.image){
        const image= document.createElement('IMG');
        image.src= result.show.image.medium;
    document.body.append(image);}
    }
}