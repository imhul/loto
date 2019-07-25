const rondomNum  = () => Math.floor(Math.random() * 20) + 1;
const testData = [
    {
        id: 1,
        numbers: [rondomNum, rondomNum, rondomNum, rondomNum, rondomNum]
    },
    {
        id: 2,
        numbers: [3, 18]
    },
    {
        id: 3,
        numbers: []
    },
    {
        id: 4,
        numbers: [8]
    },
    {
        id: 5,
        numbers: [15]
    }
];

export default testData;



