// Defina as URLs das imagens aqui
const imageUrls = {
    carolinaReaper: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36722967/2e28591dda.jpg',
    ervilha: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36830146/93a1840f2a.jpg',
    feijaoVermelho: 'https://cdn.awsli.com.br/800x800/998/998380/produto/210193949/feijao-andino-crlyfe.jpg',
    grama: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36727796/979834ef08.jpg',
};

let plants = [
    {
        nome: "Carolina Reaper",
        subtitulo: "(Pimenta mais forte do Mundo)",
        preco: 33.98,
        promo: 28.99,
        src: imageUrls.carolinaReaper
    },
    {
        nome: "Ervilha",
        subtitulo: "Ervilha Verde",
        preco: 24.98,
        promo: 21.99,
        src: imageUrls.ervilha
    },
    {
        nome: "Feijão Andino",
        subtitulo: "Phaseolus lunatus",
        preco: 8.90,
        promo: 7.90,
        src: imageUrls.feijaoVermelho
    },
    {
        nome: "Grama",
        subtitulo: "500 sementes",
        preco: 3.98,
        promo: 3.45,
        src: imageUrls.grama
    }
]

export default plants;
