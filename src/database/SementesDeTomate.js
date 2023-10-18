// Você pode definir as URLs das imagens aqui
const imageUrls = {
    tomatoAssorted: 'https://cdn.awsli.com.br/800x800/998/998380/produto/50852422/7dca469311.jpg',
    tomatoPurple: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36885377/9e5825d753.jpg',
    cherryTomato: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/36868622/2591dc4a38.jpg',
    italianTomato: 'https://cdn.awsli.com.br/2500x2500/998/998380/produto/36868971/439ac28c3d.jpg',
};

let plants = [
    {
        nome: "Tomates Sortidos",
        subtitulo: "100 sementes",
        preco: 16.98,
        promo: 14.98,
        src: imageUrls.tomatoAssorted // Substitua com a URL apropriada
    },
    {
        nome: "Tomate Purple",
        subtitulo: "20 sementes",
        preco: 7.98,
        promo: 7.74,
        src: imageUrls.tomatoPurple // Substitua com a URL apropriada
    },
    {
        nome: "Tomate Cereja",
        subtitulo: "20 sementes",
        preco: 15,
        promo: 13,
        src: imageUrls.cherryTomato // Substitua com a URL apropriada
    },
    {
        nome: "Tomate Italiano",
        subtitulo: "20 sementes",
        preco: 7.98,
        promo: 7.04,
        src: imageUrls.italianTomato // Substitua com a URL apropriada
    }
]

export default plants;
