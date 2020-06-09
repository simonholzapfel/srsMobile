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
}

export const demoDecks = [
    tinfDeck,
]