'use strict';

const CandidatesNumber = Number(prompt('Enter number of candidates: '));
const candidates = [];

for (let i = 1; i <= CandidatesNumber; i++) {
    const candidate = {};
    candidate.name = prompt('Enter name of candidate ' + i + ': ');
    candidate.vote = 0;
    candidates.push(candidate);
}

const VotersNumber = Number(prompt('Enter number of voters: '));

for (let i = 1; i <= VotersNumber; i++) {
    const votefor = prompt('Voter' + i + ', enter your vote: ');
    for (const candidate of candidates) {
        if (candidate.name === votefor) {
            candidate.vote++;
        }
    }
}

candidates.sort((a,b)=>(b.vote - a.vote));

console.log(`The winner is ${candidates[0].name} with ${candidates[0].vote} votes.`);
console.log('results:');
for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.vote} votes`);
}
