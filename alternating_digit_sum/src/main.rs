fn main() {
    let number = 5;
    let result = alternate_digit_sum(number);
    println!("{}", result);
}

fn alternate_digit_sum(n: i32) -> i32 {
    let str_num = n.to_string();
    let mut numbers:Vec<i32> = Vec::new();



    for i in str_num.chars() {
        numbers.push(i.to_digit(10).unwrap() as i32);
    }

    if numbers.len() == 1{
        return n;
    }

    let mut result = 0;

    result = numbers[0] - numbers[1];

    for i in 1..numbers.len() - 1{
        if i % 2 != 0 {
            result = result + (numbers[i + 1]);
        } else {
            result = result - (numbers[i + 1]);
        }
    }

    result
}