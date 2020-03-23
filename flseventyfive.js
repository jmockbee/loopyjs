const moviesReviews = {
	Arrival: 9.5,
	Alien: 9,
	Amelie: 8,
	'in Burges': 9,
	Amadeus: 10,
	'Kill Bill': 8,
	'Little Miss Sunhine': 8.5,
	Coraline: 7.5
};
//for (let x of moviesReviews) {

//   console.log (x);
//}  this will not owrk

for (let movie of Object.keys(moviesReviews)) {
	console.log(movie, moviesReviews[movie]);
}

const ratings = Object.values(moviesReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log(avg);
