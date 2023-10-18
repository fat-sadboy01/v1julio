// Defina as URLs das imagens aqui
const imageUrls = {
    carolinaReaper: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36722967/2e28591dda.jpg',
    assortedPeppers: 'https://cdn.awsli.com.br/800x800/998/998380/produto/37067075/5e6d429f95.jpg',
    greenPepper: 'https://cdn.awsli.com.br/800x800/998/998380/produto/54569749/f9c39be284.jpg',
    birdEyeChili: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36668941/b282a09027.jpg',
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
        nome: "Pimentas Sortidas",
        subtitulo: "100 sementes",
        preco: 24.98,
        promo: 21.99,
        src: imageUrls.assortedPeppers
    },
    {
        nome: "Pimenta Biquinho ",
        subtitulo: "Pepper - 5 sementes",
        preco: 17.98,
        promo: 15.29,
        src: imageUrls.greenPepper
    },
    {
        nome: "Pimenta Malagueta",
        subtitulo: "60 sementes",
        preco: 9.98,
        promo: 3.49,
        src: imageUrls.birdEyeChili
    }
]

export default plants;
