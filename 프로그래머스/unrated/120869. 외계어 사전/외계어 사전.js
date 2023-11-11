function solution(spell, dic) {
    const permutations = [];

    function generatePermutations(remaining, current) {
        if (remaining.length === 0) {
            permutations.push(current.join(''));
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextRemaining = [...remaining];
            const nextCurrent = [...current, nextRemaining.splice(i, 1)[0]];
            generatePermutations(nextRemaining, nextCurrent);
        }
    }

    generatePermutations(spell, []);

    for (const perm of permutations) {
        if (dic.includes(perm)) {
            return 1;
        }
    }

    return 2;
}
