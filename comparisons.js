const dayStart = "07:30"
const dayEnd = "17:45"

function scheduleMeeting(startTime, durationMinutes) {
  let start = startTime.length === 5 ? String(startTime) : '0' + String(startTime)

  let hours = Number([...start][0] + [...start][1])
  let minutes = Number([...start][3] + [...start][4])

  if ((minutes + durationMinutes) >= 60) {
    hours++
    minutes = minutes + durationMinutes - 60
  } else {
    minutes = minutes + durationMinutes
  }

  hours = String(hours).length === 1 ? '0' + String(hours) : String(hours)
  minutes = String(minutes).length === 1 ? '0' + String(minutes) : String(minutes)
  let meetingEnd = hours + ':' + minutes

  if (start < dayStart) return console.log('fml')

  if (meetingEnd > dayEnd) return console.log('fmm')

  return console.log(true)
}

scheduleMeeting("7:00", 15)
scheduleMeeting("07:15", 30)
scheduleMeeting("7:30", 30)
scheduleMeeting("11:30", 60)
scheduleMeeting("17:00", 45)
scheduleMeeting("17:30", 30)
scheduleMeeting("18:00", 15)
