#!/usr/bin/env rust-script
//! Dependencies can be specified in the script file itself as follows:
//!
//! ```cargo
//! [dependencies]
//! tokio = { version = "1", features = ["full"] }
//! ```

use std::env;
#[tokio::main]
async fn main() {
    let args: Vec<String> = env::args().collect();
    let sentence = &args[1];
    let mut binary_representation = String::new(); 

    for character in sentence.clone().into_bytes() {
        binary_representation += &format!("0{:b} ", character);
    }
    print!("\"{}\" in binary is {}", sentence, binary_representation);
}
