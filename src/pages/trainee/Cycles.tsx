import { Link } from "react-router-dom";
import PageLayout from "../PageLayout";
import { useUser } from "../../contexts/user";
import { useCycles } from "../../firebase/firestore/cycles";


function Cycles() {
  const { uid } = useUser();
  const cycles = useCycles(uid);

  return (
    <PageLayout title="Cycles">

      <div className="flex flex-col items-center gap-8">
        {cycles.map(cycle => (
          <Link
            key={cycle.id}
            to={cycle.id}
            state={cycle.name}
            className="w-full max-w-xs"
          >
            <div
              className="rounded-lg bg-white p-4 ring-2 ring-neutral-400 hover:bg-blue-50"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">{cycle.name}</h2>
                <ul className="ml-8 list-disc">
                  {cycle.trainings?.map((training, idx) => (
                    <li key={idx}>{training}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}


export default Cycles;
