export const decks = [
    {
        id: "1",
        name: "How to SRS",
        creatorId: "1"
    },
    {
        id: "2",
        name: "React Native",
        creatorId: "2"
    },
]

export const users = [
    {
        id: "1",
        name: "Simon",
        discriminator: "1234"
    },
    {
        id: "2",
        name: "Emil",
        discriminator: "6541"
    },
    {
        id: "3",
        name: "Paul",
        discriminator: "7842"
    },
]

const tinfDeck = {
    name: "Computer Hardware",
    thumbnail: require("../assets/nzxt.jpg"),
    cards: [
        {
            front: [
                {
                    type: "text",
                    style: {

                    },
                    text: "What is this component called?"
                },
                {
                    type: "image",
                    style: {

                    },
                    image: require("../assets/psu.jpg")
                }
            ],
            back: [
                {
                    type: "text",
                    style: {

                    },
                    text: "This is the Power Supply, also called PSU."
                }
            ]
        },
    ]
};

const bitDeck = {
    name: "Bits & Bytes",
    thumbnail: require("../assets/bits_bytes.jpg"),
    cards: [
        {
            front: [
                {
                    type: "text",
                    text: "How many bits has one byte?"
                }
            ],
            back: [
                {
                    type: "text",
                    text: "One byte has 8 bits"
                }
            ]
        },
    ]
};

const frenchDeck = {
    name: "French Vocabulary",
    thumbnail: require("../assets/french_flag.jpeg"),
    cards: [
        {
            front: [
                {
                    type: "text",
                    style: {

                    },
                    text: "Forest"
                }
            ],
            back: [
                {
                    type: "text",
                    style: {

                    },
                    text: "Forêt"
                }
            ]
        },
        {
            front: [
                {
                    type: "text",
                    style: {

                    },
                    text: "Vogel"
                }
            ],
            back: [
                {
                    type: "text",
                    style: {

                    },
                    text: "Oiseau"
                }
            ]
        },
        {
            front: [
                {
                    type: "text",
                    style: {

                    },
                    text: "Katze"
                }
            ],
            back: [
                {
                    type: "text",
                    style: {

                    },
                    text: "chat"
                }
            ]
        },
        {
            front: [
                {
                    type: "text",
                    style: {

                    },
                    text: "Panzer"
                }
            ],
            back: [
                {
                    type: "text",
                    style: {

                    },
                    text: "réservoir"
                }
            ]
        },
    ]
};

export const demoDecks = [
    tinfDeck,
    frenchDeck,
    bitDeck,
]
