// Defina as URLs das imagens aqui
const imageUrls = {
    ipeBranco: 'https://cdn.awsli.com.br/800x800/998/998380/produto/43636008/f4bdfaa897.jpg',
    ipeRoxo: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36928150/80d2f58813.jpg',
    guarana: 'https://cdn.awsli.com.br/800x800/998/998380/produto/58449693/d17dc16b9b.jpg',
    jacaranda: 'https://cdn.awsli.com.br/800x800/998/998380/produto/37544519/jacaranda-mimoso-jacaranda-mimosifolia-comprar-sementes-003fd733c5.jpg',
};

let plants = [
    {
        nome: "Ipe Branco",
        subtitulo: "Ipe",
        preco: 7.98,
        promo: 6.98,
        src: imageUrls.ipeBranco
    },
    {
        nome: "Ipe Roxo",
        subtitulo: "Ipe",
        preco: 7.98,
        promo: 6.98,
        src: imageUrls.ipeRoxo
    },
    {
        nome: "Guarana",
        subtitulo: "5 sementes",
        preco: 9.98,
        promo: 8.49,
        src: imageUrls.guarana
    },
    {
        nome: "Jacaranda",
        subtitulo: "Dalbergia nigra",
        preco: 12.98,
        promo: 11.04,
        src: imageUrls.jacaranda
    }
]

export default plants;
