import {
  Ref,
  useMemo,
  forwardRef,
} from "react";
import { useForm } from "react-hook-form";
import Tab from "../Tab/Tab";
import Input from "../Input/Input";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import {
  TWorkout,
  TWorkoutDetails,
  workoutDetailsFields,
} from "../../types/workout";


interface IWorkout extends TWorkout {
  onSubmit(workoutId: string, progress: Partial<TWorkoutDetails>): void;
}


function WorkoutComponent({
  id,
  name,
  short,
  video = "",
  description = "",
  details = {},
  progress = {},
  onSubmit,
}: IWorkout, ref: Ref<HTMLFormElement>)
{
  const tabs = useMemo(() => {
    const list = [];
    if (video) {
      list.push({
        icon: faVideo,
        element: <iframe
          className="aspect-video w-full p-2"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      });
    }

    if (description) {
      list.push({
        icon: faCircleInfo,
        element: <div className="p-2">{description}</div>
      });
    }

    return list;
  }, [video, description]);

  const { register, handleSubmit } = useForm();

  function submit(data: Partial<TWorkoutDetails>) {
    onSubmit(id || "", data);
  }

  return (
    <div className="flex w-full max-w-xs flex-col overflow-hidden rounded-xl shadow-xl ring-2 ring-neutral-400">
      <div className="flex flex-col gap-1 bg-neutral-100 p-1">
        <h3 className="font-bold">{short}: {name}</h3>
        <div className="text-sm text-neutral-500">
          {
            workoutDetailsFields.filter(
              entry => details[entry.key] !== undefined
            ).map(
              entry => `${entry.name}: ${details[entry.key]}`
            ).join(", ")
          }
        </div>
      </div>

      <div className="bg-neutral-50">
        <h3>Progress</h3>
        <form
          ref={ref}
          className="grid grid-cols-1 gap-y-2 p-4"
          onSubmit={handleSubmit(submit)}
        >
          {workoutDetailsFields.filter(
            entry => details[entry.key] !== undefined
          ).map(entry => {
            return (
              <div
                key={entry.key}
                className="flex items-center justify-between"
              >
                <label>{entry.name}</label>
                <div className="w-20">
                  <Input
                    { ...register(entry.key, { valueAsNumber: true }) }
                    defaultValue={progress[entry.key] || details[entry.key]}
                    disabled={progress[entry.key] !== undefined}
                  />
                </div>
              </div>
            );
          })}
        </form>
      </div>

      {tabs.length > 0 &&
        <div className="flex flex-col items-end gap-1 bg-neutral-100 p-2">
          <Tab tabs={tabs} />
        </div>
      }
    </div>
  );
}


const Workout = forwardRef(WorkoutComponent);


export default Workout;
