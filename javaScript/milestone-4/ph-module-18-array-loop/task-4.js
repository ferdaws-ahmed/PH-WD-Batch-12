


const statement = 'I am a hard working person';


const vag = statement.split(' ');

const rev = []

for( const element of vag){
    rev.unshift(element);
}
console.log(rev.join(' '))