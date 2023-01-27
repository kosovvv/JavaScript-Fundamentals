function solve(input)
{
    let dic = [];
    input.forEach(element => {
        element = JSON.parse(element);
        let tuple = Object.entries(element);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dic[term] = definition;
    })

    Object.entries(dic).sort((a,b) => a[0].localeCompare(b[0])).forEach(
        el => {
            console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
        }
    )

    
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);    