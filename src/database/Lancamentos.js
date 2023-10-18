// Defina as URLs das imagens aqui
const imageUrls = {
    maracujaColombiano: 'https://cdn.awsli.com.br/800x800/998/998380/produto/229676067/granadilla-1mftmvnti1.jpg',
    feijaoFavaRaioDeSol: 'https://cdn.awsli.com.br/800x800/998/998380/produto/219118703/feijao-fava-raio-sol-ygzh0hxzs2.jpg',
    feijaoFavaVovo: 'https://cdn.awsli.com.br/600x450/998/998380/produto/219117309/feijao-fava-vovo-r3z9l6q2l4.png',
    celosiaCrisaliaVermelha: 'https://cdn.awsli.com.br/800x800/998/998380/produto/36742927/a8f4cb4ce8.jpg',
};

let plants = [
    {
        nome: "Maracuja Colombiano",
        subtitulo: " - Granadilla: 5 sementes",
        preco: 15.99,
        promo: 10.98,
        src: imageUrls.maracujaColombiano
    },
    {
        nome: "Feijão Fava Raio de Sol",
        subtitulo: " 3 sementes",
        preco: 3.49,
        promo: 2.99,
        src: imageUrls.feijaoFavaRaioDeSol
    },
    {
        nome: "Feijão Fava Vovo",
        subtitulo: " - 3 sementes",
        preco: 4.49,
        promo: 3.99,
        src: imageUrls.feijaoFavaVovo
    },
    {
        nome: "Lupino Sortidos",
        subtitulo: " - 15 sementes",
        preco: 3.98,
        promo: 3.45,
        src: imageUrls.celosiaCrisaliaVermelha
    }
]

export default plants;
