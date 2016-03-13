/* Valid input assumed (from specification)
* - Space delimited
* - Contains only legal characters
* - Credit cards vary in length (max=19)
* - Credit card numbers always numeric
* - Amounts will always be prefaced with '$'
*/
module.exports = (line) => {
  // Split on spaces
  const commandArgs = line.split(' ')
  console.log(commandArgs)
}
