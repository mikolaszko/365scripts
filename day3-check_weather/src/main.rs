use reqwest;
use std::error::Error;
use std::time::Duration;
use std::env;
use std::fs;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let args: Vec<String> = env::args().collect();
    let api_string: String = fs::read_to_string("./src/api_key.txt")?.parse()?;
    let api_key = api_string.trim_end();
    let city = &args[1];
    let client = reqwest::Client::new();
    let api_url = format!("http://api.weatherapi.com/v1/current.json?key={}&q={}&aqi=no",api_key, city);
    let weather = client
        .get(api_url)
        .header("Accept", "text/plain")
        .timeout(Duration::from_secs(3))
        .send()
        .await?
        .text()
        .await?;
    println!("{:}", weather);
    Ok(())
}
