import React, { useState } from "react"
import { Moment } from "moment"
import { css } from "@emotion/css"
import Button from "@mui/material/Button"
import Datepicker from "../Datepicker"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"

interface Column {
  id: string
  label: string
  align?: "left" | "center" | "right"
}

interface Row {
  [key: string]: React.ReactNode
}

interface Props {
  dateLabel: string
  buttonLabel: string
  columns: Column[]
  rows: Row[]
  loading: boolean
  onClickButton: (date: Moment) => Promise<void> 
}

const dateFormat = "DD-MM-YYYY"

const PlanningTable: React.FC<Props> = ({ dateLabel, buttonLabel, columns, rows, loading, onClickButton }) => {
  const [date, setDate] = useState<Moment | null>(null)

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Datepicker label={dateLabel} format={dateFormat} value={date} onChange={(val) => setDate(val)} />

        <Button variant="contained" className={styles.button} onClick={() => onClickButton(date!)}>
          {buttonLabel}
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="custom table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              rows.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }),

  row: css({
    display: "flex",
    flexDirection: "row",
    gap: "16px",
  }),

  button: css({
    width: "250px",
  }),
}

export default PlanningTable
