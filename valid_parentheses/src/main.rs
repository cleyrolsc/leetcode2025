/*

20. Valid Parentheses
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true*/
use std::thread::spawn;

fn main()    {
    pub fn is_valid(s: String) -> bool {
        let mut my_vec = Vec::new();

        if !s.contains(")") && s.contains("(") {
            return false;
        } else if !s.contains("]") && s.contains("[") {
            return false;
        } else if !s.contains("}") && s.contains("{") {
            return false;
        }
        println!("{}", !s.contains(']'));

        for c in s.chars(){
            if c == '(' || c == '[' || c == '{'{
                my_vec.push(c);
            } else if c == ')' && my_vec.last() == Some(&'('){
                my_vec.pop();
            }
            else if c == ']' && my_vec.last() == Some(&'['){
                my_vec.pop();
            }
            else if c == '}' && my_vec.last() == Some(&'{'){
                my_vec.pop();
            } else{
                return false;
            }
        }
        my_vec.is_empty()
    }
}
