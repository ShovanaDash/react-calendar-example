import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from './events'
import * as dates from './dates'

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const eventDetails = (event) => {
  //Call API here with all details of event
  console.log(event)
}

let SamplCalendar = ({ localizer }) => (
  <Calendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2022, 12, 15), 'day'), -1, 'hours')}
    defaultDate={new Date()}
    components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
    localizer={localizer}
    eventPropGetter={
      (event, start, end, isSelected) => {
        let newStyle = {
          backgroundColor: "lightblue",
          color: 'black',
          borderRadius: "4px",
          border: "none",
          fontStyle: "normal"
        };
  
        if (event.eventStyle && event.eventStyle.backgroundColor){
          newStyle.backgroundColor = event.eventStyle.backgroundColor
        }
        if (event.eventStyle && event.eventStyle.fontStyle){
          newStyle.fontStyle = event.eventStyle.fontStyle
        }
        return {
          className: "",
          style: newStyle
        };
      }
    }
    onSelectEvent={event => eventDetails(event)}
  />
)

export default SamplCalendar
