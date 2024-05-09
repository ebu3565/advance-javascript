const students = [
    {id: 21, names: 'Omor sunny'},
    {id: 31, names: 'Manna day'},
    {id: 41, names: 'Moushumi'},
    {id: 71, names: 'Depjol'},
];

const namess = students.map(s => s.names);
const ids = students.map(s=> s.id);
const bigger = students.filter(s=> s.id>40);
const biggerOne = students.find(s=> s.id>40);
console.log(biggerOne); 