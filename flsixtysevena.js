const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

const myStudents = [
	{
		firstName: 'Zues',
		grade: 86
	},

	{
		firstName: 'Artemis',
		grade: 97
	},

	{
		firstName: 'Hera',
		grade: 72
	},

	{
		firstName: 'Apollo',
		grade: 90
	}
];

/*for (let i = 0; i <= myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}
*/
let total = 0;

for (let i = 0; i <= myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade;
}
console.log (total);


