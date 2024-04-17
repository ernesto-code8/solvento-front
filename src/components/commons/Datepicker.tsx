import React from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers"

interface Props extends DatePickerProps<moment.Moment, false> {}

const Datepicker: React.FC<Props> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker {...props} />
    </LocalizationProvider>
  )
}

export default Datepicker
