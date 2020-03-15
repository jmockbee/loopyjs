let joe = [ `larry`, `moe`, `curly`, `shemp` ];
for (let i = 0; i < joe.length; i++) {
	console.log(joe[i]);
}
for (let sub of joe) {
	console.log(sub);
}


for (let char of `roosterrining`) {
    console.log(char.toUpperCase());
}