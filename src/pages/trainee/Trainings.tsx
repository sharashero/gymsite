import { Link, useParams, useLocation } from "react-router-dom";
import PageLayout from "../PageLayout";
import TrainingPreview from "../modals/TrainingPreview";
import { useUser } from "../../contexts/user";
import { useTrainings } from "../../firebase/firestore/trainings";


function Trainings() {
  const { state: pageName } = useLocation();
  const { uid } = useUser();
  const { cycleId } = useParams();
  const trainings = useTrainings(uid, cycleId || "");

  return (
    <PageLayout title={pageName || "Trainings"}>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full max-w-xs">
          <ul className="space-y-4">
            {trainings.map(training => (
              <li
                key={training.id}
                className="flex w-full items-center justify-between rounded-lg bg-white p-4 py-2 ring-2 ring-neutral-400"
              >
                <Link
                  to={training.id}
                  state={training.name}
                >
                  {training.name}
                </Link>
                <TrainingPreview
                  name={training.name || ""}
                  trainingSets={training.trainingSets || []}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}


export default Trainings;
