function solution(arr, intervals) {
    const [interval1, interval2] = intervals;
    const firstSection = arr.slice(interval1[0], interval1[1] + 1);
    const secondSection = arr.slice(interval2[0], interval2[1] + 1);

    const result = [...firstSection, ...secondSection];
    return result;
}