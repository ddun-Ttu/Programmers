function solution(num_list) {
  const last_element = num_list[num_list.length - 1];
  const previous_element = num_list[num_list.length - 2];

  if (last_element > previous_element) {
    return num_list.concat(last_element - previous_element);
  } else {
    return num_list.concat(last_element * 2);
  }
}