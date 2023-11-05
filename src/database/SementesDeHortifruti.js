// Defina as URLs das imagens aqui
const imageUrls = {
    carolinaReaper: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/50852422/7dca469311.jpg',
    assortedPeppers: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/36867815/d24a87c687.jpg',
    greenPepper: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/214577395/couve-flor-verde-8ykx40ndyf.jpg',
    birdEyeChili: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/191435813/e517c3368f.jpg',
};

let plants = [
    {
        nome: "TOMATES SORTIDOS",
        subtitulo: "100 sementes",
        preco: 33.98,
        promo: 28.99,
        src: imageUrls.carolinaReaper
    },
    {
        nome: "COUVE FLOR ROXA",
        subtitulo: "50 sementes",
        preco: 24.98,
        promo: 21.99,
        src: imageUrls.assortedPeppers
    },
    {
        nome: "COUVE FLOR VERDE ",
        subtitulo: " 50 sementes",
        preco: 17.98,
        promo: 15.29,
        src: imageUrls.greenPepper
    },
    {
        nome: "BETERRABA COLORIDA",
        subtitulo: "20 sementes",
        preco: 9.98,
        promo: 3.49,
        src: imageUrls.birdEyeChili
    }
]

export default plants;
