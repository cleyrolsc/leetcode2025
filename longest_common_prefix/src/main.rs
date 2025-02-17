/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

fn main(){
    let my_vec:Vec<String> = vec![String::from("flower"),String::from("flow"),String::from("flight")];
    println!("{:?}", longest_common_prefix(my_vec));
}

    pub fn longest_common_prefix(strs: Vec<String>) -> String {

        let mut prefix = &strs[0];

        for s in &strs[1..] {
            while !s.starts_with(prefix) {
                prefix.pop();
            }
        }
        prefix.to_string()
    }
