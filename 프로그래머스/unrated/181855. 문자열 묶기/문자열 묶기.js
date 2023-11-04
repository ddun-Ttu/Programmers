function solution(strArr) {
    var groupCounts = {};

    for (const str of strArr) {
        const strLength = str.length;

        if (!groupCounts[strLength]) {
            groupCounts[strLength] = 1;
        } else {
            groupCounts[strLength]++;
        }
    }

    let maxCount = 0;
    for (const length in groupCounts) {
        if (groupCounts[length] > maxCount) {
            maxCount = groupCounts[length];
        }
    }

    return maxCount;
}