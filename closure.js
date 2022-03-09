function range(start, end) {
  function publicApi (start, end) {
    var array = []

    for (let i = start; i <= end; i++) {
      array.push(i)
    }

    console.log(array)
    return array
  }
  return (end !== undefined) 
    ? publicApi(start, end)
    : function (end) {
      return publicApi(start, end)
    }
}

range(3, 3)
range(3, 8)
range(3, 0)

var start3 = range(3)
var start4 = range(4)

start3(3)
start3(8)
start3(0)
start4(6)
