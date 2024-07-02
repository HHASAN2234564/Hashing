let inputText = document.getElementById("inputText");
let hashButton = document.getElementById("hashButton");
let hashOutput = document.getElementById("hashOutput");

let inputText2 = document.getElementById("inputText2");
let convertButton = document.getElementById("convertButton");
let hashNumberOutput = document.getElementById("hashNumberOutput");

hashButton.addEventListener("click", function() {
    LetterCode();
});

convertButton.addEventListener("click", function() {
    convertHash();
});

const sequences = {
    a: ['6845901237', '4726501983', '9571624830'],
    b: ['3821564907', '5180732964', '7903482165'],
    c: ['0631842957', '8170524936', '2957604813'],
    d: ['9048371652', '1873264950', '5302981467'],
    e: ['6742930815', '0217594638', '4351029768'],
    f: ['5832179640', '9047612358', '7926183405'],
    g: ['8207359461', '7310924685', '9463701285'],
    h: ['3127486905', '4871239605', '5016824739'],
    i: ['6392847150', '7824059613', '9154608327'],
    j: ['1054879623', '2947301865', '6438927105'],
    k: ['1840297536', '2974308165', '7105836492'],
    l: ['5372084916', '6924183057', '4203816579'],
    m: ['9784523016', '2348165709', '1659324870'],
    n: ['0598327461', '4832169075', '7219863405'],
    o: ['4376291850', '5804913672', '9687314025'],
    p: ['2519374806', '7081956342', '4859263170'],
    q: ['4897320156', '6017534928', '3728516094'],
    r: ['6435170928', '2096847315', '8172934065'],
    s: ['4298631507', '5972814630', '8317462095'],
    t: ['1326495078', '2905748136', '6859207314'],
    u: ['2043916587', '8913452670', '3769824501'],
    v: ['9835206417', '1273094865', '4618235079'],
    w: ['3942068517', '7815429603', '2409685731'],
    x: ['8729301546', '4103569827', '6094723815'],
    y: ['5904837162', '3170524689', '6421087953'],
    z: ['8204617539', '1903478625', '6579342801']
};

function LetterCode() {
    let input = inputText.value;
    let words = input.split(' '); 
    let finalResult = '';

    words.forEach(word => {
        let modifiedWord = '';

        for (let char of word) {
            if (sequences[char]) {
                let count = countOccurrences(word, char);
                let sequenceIndex = Math.min(count - 1, sequences[char].length - 1);
                modifiedWord += sequences[char][sequenceIndex];
            } else {
                modifiedWord += char;
            }
        }
        finalResult += modifiedWord + ' ';
    });

    hashOutput.textContent = `Modified word: ${finalResult.trim()}`;
}

function convertHash() {
    let input = inputText2.value;
    let words = input.split(' '); 
    let finalResult = '';

    words.forEach(word => {
        let modifiedWord = '';
        let i = 0;

        while (i < word.length) {
            let found = false;
            for (let char in sequences) {
                for (let seq of sequences[char]) {
                    if (word.startsWith(seq, i)) {
                        modifiedWord += char;
                        i += seq.length;
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
            if (!found) {
                modifiedWord += word[i];
                i++;
            }
        }
        finalResult += modifiedWord + ' ';
    });

    hashNumberOutput.textContent = `Converted text: ${finalResult.trim()}`;
}

function countOccurrences(word, charToCheck) {
    return (word.match(new RegExp(charToCheck, 'g')) || []).length;
}
