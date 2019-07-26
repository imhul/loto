const winNum  = () => Math.floor(Math.random() * 20) + 1;

const testData = [
    {
        id: 1,
        numbers: [winNum(), winNum(), winNum(), winNum(), winNum()]
    },
    {
        id: 2,
        numbers: [winNum(), winNum(), winNum(), winNum(), winNum()]
    },
    {
        id: 3,
        numbers: [winNum(), winNum(), winNum(), winNum(), winNum()]
    },
    {
        id: 4,
        numbers: [winNum(), winNum(), winNum(), winNum(), winNum()]
    },
    {
        id: 5,
        numbers: [winNum(), winNum(), winNum(), winNum(), winNum()]
    }
];

export default testData;



