fn main() {
    // let _vec = vec![0,1,0,3,12];
    let mut vec = vec![0,0,1];
    move_zeroes(&mut vec);
    println!("{:?}", vec);
}

fn move_zeroes(nums: &mut Vec<i32>) {
    let mut i:usize = 0;
    let mut count =  0;
    while i < nums.len() - count {
        if nums[i] == 0 {
            count += 1;
            nums.remove(i);
            nums.push(0);
        } else{
            i += 1;
        }
    }
}
