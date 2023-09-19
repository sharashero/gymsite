import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import PageLayout from "../pages/PageLayout";


function Loading() {
  return (
    <PageLayout title="Gymsite">
      <div className="fixed inset-0 flex items-center justify-center">
        <FontAwesomeIcon
          className="text-blue-400"
          icon={faSpinner}
          size="8x"
          spin
        />
      </div>
    </PageLayout>
  );
}


export default Loading;
