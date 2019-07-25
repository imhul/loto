const rondomNum  = () => Math.floor(Math.random() * 20) + 1;

const testData = [
    {
        id: 1,
        numbers: [rondomNum(), rondomNum(), rondomNum(), rondomNum(), rondomNum()]
    },
    {
        id: 2,
        numbers: [rondomNum(), rondomNum(), rondomNum(), rondomNum(), rondomNum()]
    },
    {
        id: 3,
        numbers: [rondomNum(), rondomNum(), rondomNum(), rondomNum(), rondomNum()]
    },
    {
        id: 4,
        numbers: [rondomNum(), rondomNum(), rondomNum(), rondomNum(), rondomNum()]
    },
    {
        id: 5,
        numbers: [rondomNum(), rondomNum(), rondomNum(), rondomNum(), rondomNum()]
    }
];

export default testData;



