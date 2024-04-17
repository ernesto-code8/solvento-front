import React, { useEffect, useState } from "react"
import { css } from "@emotion/css"
import PlanningTable from "../../components/commons/planningTable/PlanningTable"
import { Moment } from "moment"

type Props = {}

interface RowData {
  tripNameId: string
  plateNumber: string
  error: string
}

const columns = [
  { id: "tripNameId", label: "Nombre viaje" },
  { id: "plateNumber", label: "Plate Number" },
  { id: "error", label: "Error" },
]

const API_URL = process.env.REACT_APP_API_URL_BASE

const Trucks: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<RowData[]>([])

  useEffect(() => {
    document.title = "Distpatch Trucks"
  }, [])

  const handleApplyButton = async (date: Moment): Promise<void> => {
    try {
      setLoading(true)
      const result = await postData(date?.format("YYYY-MM-DD"))

      const formattedData: RowData[] = result.map((row: any) => ({
        tripNameId: row.tripNameId,
        plateNumber: row.plateNumber,
        error: row.error,
      }))

      setData(formattedData)
      console.log(date)

      setTimeout(() => {
        setLoading(false)
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  const postData = async (planningDate: string): Promise<any> => {
    console.log(JSON.stringify(planningDate))
    const response = await fetch(`${API_URL}/assigntrucks`, {
      method: "POST", // Método de solicitud POST
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ planningDate }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json() // Devuelve una promesa que se resuelve con el resultado JSON
  }

  return (
    <div className={styles.root}>
      <PlanningTable
        dateLabel="Departure date"
        buttonLabel="apply"
        columns={columns}
        rows={data as any[]}
        loading={loading}
        onClickButton={handleApplyButton}
      />
    </div>
  )
}

const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }),
}

export default Trucks
