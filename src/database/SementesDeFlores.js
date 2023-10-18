// Defina as URLs das imagens aqui
const imageUrls = {
    camomila: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36680023/fe8994a047.jpg',
    bocaDeLeao: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36677073/fad589d049.jpg',
    girassolVermelho: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36727532/39ad77a623.jpg',
    papoulaSingela: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36691204/87b52697d1.jpg',
};

let plants = [
    {
        nome: "Camomila",
        subtitulo: "20 sementes",
        preco: 5.98,
        promo: 4.98,
        src: imageUrls.camomila
    },
    {
        nome: "Boca de Leão",
        subtitulo: "100 sementes",
        preco: 3.98,
        promo: 3.86,
        src: imageUrls.bocaDeLeao
    },
    {
        nome: "Girassol Vermelho",
        subtitulo: "10 sementes",
        preco: 4.98,
        promo: 4.49,
        src: imageUrls.girassolVermelho
    },
    {
        nome: "Papoula Singela",
        subtitulo: "20 sementes",
        preco: 3.98,
        promo: 3.56,
        src: imageUrls.papoulaSingela
    }
]

export default plants;
