function altImg(){
    document.addEventListener('DOMContentLoaded', function(){
        let imgs =  document.querySelectorAll('img');
        // console.log(imgs);
        imgs.forEach(function(img){
            let imgSrc = img.getAttribute('src');
            let splitSrc = imgSrc.split('/');
            let imgRawName = splitSrc[splitSrc.length - 1];
            let imgname = imgRawName.split('.')[0];
            // console.log(img.alt.includes(!imgname));
            
            if(img.hasAttribute('alt') || img.alt.includes(!imgname)){
                img.setAttribute('alt', imgname);
            }else{
                img.setAttribute('alt', imgname);
            }
        })
    })
}
export default altImg();