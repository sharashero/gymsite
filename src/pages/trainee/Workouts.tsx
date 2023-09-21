import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageLayout from "../PageLayout";
import Button from "../../components/Button";
import Workout from "../../components/Workout";
import { useUser } from "../../contexts/user";
import { updateWorkout, useWorkouts } from "../../firebase/firestore/workouts";
import { TWorkoutDetails } from "../../types/workout";


function Workouts() {
  const { state: pageName } = useLocation();
  const { uid } = useUser();
  const { cycleId, trainingId } = useParams();
  const workouts = useWorkouts(uid, cycleId || "", trainingId || "");

  const forms = useRef(new Map());
  const trainingMode = workouts.reduce((prev, curr) => prev || !curr.done, false);

  function handleSubmit(workoutId: string, progress: Partial<TWorkoutDetails>) {
    updateWorkout(uid, cycleId || "", trainingId || "", {
      id: workoutId,
      progress
    });
  }

  return (
    <PageLayout title={pageName || "Workouts"}>
      <div className="flex flex-col items-center gap-8">
        {workouts.map(workout => (
          <Workout
            key={workout.id}
            {...workout}
            onSubmit={handleSubmit}
            ref={(node: HTMLFormElement) => {
              if (node) forms.current.set(workout.id, node);
              else forms.current.delete(workout.id);
            }}
          />
        ))}

        {trainingMode && <Button
          onClick={() => forms.current.forEach(form => {
            form.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            );
          })}
        >
          Submit
        </Button>}
      </div>
    </PageLayout>
  );
}


export default Workouts;
