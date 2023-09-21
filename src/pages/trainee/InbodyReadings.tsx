import PageLayout from "../PageLayout";
import LineChart from "../../components/LineChart";
import { useUser } from "../../contexts/user";
import { useReadings } from "../../firebase/firestore/readings";
import { toDateString } from "../../util/date";


function InbodyReadings() {
  const { uid } = useUser();
  const readings = useReadings(uid);
  const dates = readings.map(
    reading => toDateString(reading.timestamp || new Date()).slice(0, 5)
  );

  return (
    <PageLayout title="Inbody">

      <div className="flex flex-col items-center gap-8 p-4">

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

      </div>

    </PageLayout>
  );
}


export default InbodyReadings;
