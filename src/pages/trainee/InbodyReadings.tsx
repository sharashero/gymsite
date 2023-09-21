import PageLayout from "../PageLayout";
import LineChart from "../../components/LineChart";
import AddData from "../../components/Table/AddData";
import { useUser } from "../../contexts/user";
import {
  useReadings,
  createReading,
  updateReading,
  deleteReading,
} from "../../firebase/firestore/readings";
import { readingFields } from "../../types/reading";
import { toDateString } from "../../util/date";
import DataTable from "../../components/Table/DataTable";


function InbodyReadings() {
  const { uid } = useUser();
  const readings = useReadings(uid);
  const dates = readings.map(
    reading => toDateString(reading.timestamp || new Date()).slice(0, 5)
  );

  return (
    <PageLayout title="Inbody">

      <div className="flex flex-col items-center gap-8 p-4">
        <AddData dataFields={readingFields} onAdd={async (data) => {
          await createReading(uid, data);
        }}>
          Add Inbody
        </AddData>

        <div className="container bg-white">
          <LineChart
            label="Weight (kg)"
            keys={dates}
            values={readings.map(reading => reading.weight || 0)}
          />
        </div>

        <div className="container bg-white">
          <LineChart
            label="Muscle Mass (kg)"
            keys={dates}
            values={readings.map(reading => reading.muscleMass || 0)}
            secondary
          />
        </div>

        <div className="container bg-white">
          <LineChart
            label="Fat Mass (kg)"
            keys={dates}
            values={readings.map(reading => reading.fatMass || 0)}
          />
        </div>

        <div className="container bg-white">
          <LineChart
            label="Fat %"
            keys={dates}
            values={readings.map(reading => reading.fatPercent || 0)}
            secondary
          />
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          {readings.map(reading => (
            <div
              key={reading.id}
              className="w-full max-w-[240px] rounded-lg bg-white p-4 shadow-lg"
            >
              <DataTable
                data={reading}
                dataFields={readingFields}
                onEdit={async (data) => {
                  await updateReading(uid, {
                    id: reading.id,
                    ...data
                  });
                }}
                onDelete={async () => {
                  await deleteReading(uid, {
                    id: reading.id
                  });
                }}
              />
            </div>
          ))}
        </div>

      </div>

    </PageLayout>
  );
}


export default InbodyReadings;
