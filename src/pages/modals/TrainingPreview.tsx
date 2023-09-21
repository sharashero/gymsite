import Button from "../../components/Button";
import Modal from "../../components/Modal/Modal";
import { TTraining } from "../../types/training";


interface ITrainingPreviewComponent extends Omit<TTraining, "timestamp"> {
  onClose(): void;
}


function TrainingPreviewComponent({
  name,
  trainingSets,
  onClose,
}: ITrainingPreviewComponent)
{
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 rounded-xl bg-white p-4 shadow-xl">
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex flex-col gap-4 p-2">
        {trainingSets.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="font-bold">{item.name}</h2>
              <ul className="ml-8 list-disc marker:text-blue-400">
                {item.workouts.map((workout, idx) => <li key={idx}>{workout}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
      <Button variant="outline" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}


function TrainingPreview({
  name,
  trainingSets,
}: Omit<ITrainingPreviewComponent, "onClose">)
{
  return (
    <Modal
      renderOpener={open => (
        <Button
          size="sm"
          variant="outline"
          onClick={open}
        >
          Preview
        </Button>
      )}

      renderComponent={close => (
        <TrainingPreviewComponent
          name={name}
          trainingSets={trainingSets}
          onClose={close}
        />
      )}
    />
  );
}


export default TrainingPreview;
