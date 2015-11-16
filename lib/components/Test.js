module.exports = {
  "a": function() {
    console.log('test')

    for(let i of [1, 2, 3, 4, 5].values())
    {
      console.log(i)
    }
  }
}
