const _ = require('lodash')
const assert = require('assert')


/**
Build a simple terminal app that uses at least 5 lodash methods.

Use fake data or APIs you have worked with in previous projects or google fake data you can use. - [ ] Either make a fetch or save it in a few variables.

Console.log the output of each lodash method called on the fake data.

Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().

Create unit tests with Mocha for each function you build.
 */

const animals = ['dog', 'monkey', 'cat', 'tiger', 'lion', 'snake', 'gorilla', 'wolf', 'dragon'];

    let chunkedAnimals = _.chunk(animals, 2);
console.log(chunkedAnimals)

    let mixedAnimals = _.shuffle(animals);
console.log(mixedAnimals)


const numbers = [24, 24, 2, 7, 45, 29, 29, 62, 9, 99, 99, 55, 14];

    let sortedNum = _.sortedUniq(numbers)
console.log(sortedNum)

    let removeNum = _.without(numbers, 9, 7, 2);        
console.log(removeNum)




if (typeof describe === 'function'){
    describe('Lodash', function(){
        it('should chunk the input array into separate arrays', function(){

            let chunkedAnimals = _.chunk(animals, 2)
            assert.equal(chunkedAnimals[0][1], 'monkey');
        }); // end of it function and condition

        it('should reverse the input array', function(){

            let reverseAnimals = _.reverse(animals)
            assert.equal(reverseAnimals[0], 'dragon');
        }); // end of it function and condition

        it('should remove single digit numbers for arrayOfNum', function(){

            let removeNum = _.without(numbers, 9, 7, 2)
            assert.equal(removeNum.toString(), [24, 24, 45, 29, 29, 62, 99, 99, 55, 14].toString());
        }); // end of it function and condition
        
        it('should make sure string dont equal each other', function(){

            let mixedAnimals = _.shuffle(animals);
            assert.notEqual(mixedAnimals, animals)
        }); // end of it function and condition

        it('should make sure numbers arent repeated', function(){

            let sortedNum = _.sortedUniq(numbers);
            assert.equal(sortedNum.toString(), [24, 2,  7, 45, 29, 62, 9, 99, 55, 14].toString())
        }); // end of it function and condition
    }); // end of describe function and condition

} // end of if function