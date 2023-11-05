// Você pode definir as URLs das imagens aqui
const imageUrls = {
    tomatoAssorted: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/36867815/d24a87c687.jpg',
    tomatoPurple: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/196262667/rabanete-ulisses-4819a615cf.jpg',
    cherryTomato: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/113014663/78f7f11caf.jpg',
    italianTomato: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/36852802/14914ca52a.jpg',
};

let plants = [
    {
        nome: "COUVE FLOR ROXA",
        subtitulo: "50 sementes",
        preco: 16.98,
        promo: 14.98,
        src: imageUrls.tomatoAssorted // Substitua com a URL apropriada
    },
    {
        nome: "RABANETE ULISSES",
        subtitulo: "20 sementes",
        preco: 7.98,
        promo: 7.74,
        src: imageUrls.tomatoPurple // Substitua com a URL apropriada
    },
    {
        nome: "ZINNIA DOCE LISTRA",
        subtitulo: "15 sementes",
        preco: 15,
        promo: 13,
        src: imageUrls.cherryTomato // Substitua com a URL apropriada
    },
    {
        nome: "RUIBARBO",
        subtitulo: "10 sementes",
        preco: 7.98,
        promo: 7.04,
        src: imageUrls.italianTomato // Substitua com a URL apropriada
    }
]

export default plants;
