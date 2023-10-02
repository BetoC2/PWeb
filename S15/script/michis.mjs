import chalk from "chalk";
import asciiCats from "ascii-cats"

console.log(chalk.bgBlue.underline("Specs: "))
console.log(chalk.white.bold("CPU Usage:"), chalk.underline.red("99%"))
console.log(chalk.white.bold("RAM Usage:"), chalk.underline.yellow("99%"))
console.log(chalk.white.bold("Disk Usage:"), chalk.underline.green("99%"))
console.log(chalk.blue(asciiCats('nyan')))