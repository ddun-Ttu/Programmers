function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function solution(numer1, denom1, numer2, denom2) {
    const commonDenominator = denom1 * denom2;

    const newNumer1 = numer1 * denom2;
    const newNumer2 = numer2 * denom1;

    const sumNumer = newNumer1 + newNumer2;

    const gcdValue = gcd(sumNumer, commonDenominator);

    const simplifiedNumer = sumNumer / gcdValue;
    const simplifiedDenom = commonDenominator / gcdValue;

    return [simplifiedNumer, simplifiedDenom];
}