module.exports.products = [
    {
        id: 1,
        thumbnail: "ameen-fahmy-gcWd0ts4RCo-unsplash",
        name: "Rose",
        description: "A Rose",
        cost: 12,
        qtyAvailable: 0
    },
    {
        id: 2,
        thumbnail: "freya-ingva-6P9JgFe3f9Q-unsplash",
        name: "Daisy",
        description: "A Daisy",
        cost: 10,
        qtyAvailable: 5
    },
    {
        id: 3,
        thumbnail: "severin-candrian-rL5Jz2e9Rao-unsplash",
        name: "Fern",
        description: "A Fern",
        cost: 5,
        qtyAvailable: 6
    },
    {
        id: 4,
        thumbnail: "severin-candrian-IZz3sboy1g8-unsplash",
        name: "Pothos",
        description: "A Vine",
        cost: 2000,
        qtyAvailable: 6
    },
];

module.exports.customers = [
    {
        name: "doug",
        email: "example.com",
        destination: "Narnia"
    }
];

module.exports.orders = [
    {
        id: "12345",
        customerName: "John Doe",
        destination: "123 Small walkway, Nowheresville, ND",
        status: "placed",
        total: 1000,
        email: "example@example.com",
        items: [
            {
                name: "Rose",
                cost: 12,
                qty: 1
            },
            {
                name: "Daisy",
                cost: 10,
                qty: 2
            },
            {
                name: "Fern",
                cost: 5,
                qty: 2
            },
            {
                name: "Pothos",
                cost: 2000,
                qty: 1
            }
        ]
    }
];