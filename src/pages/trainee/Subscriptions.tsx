import PageLayout from "../PageLayout";
import { Table } from "../../components/Table";
import { useUser } from "../../contexts/user";
import { useSubscriptions } from "../../firebase/firestore/subscriptions";
import {
  mapCheckIns,
  checkInFields,
  subscriptionFields,
} from "../../types/subscription";


function Subscriptions() {
  const { uid } = useUser();
  const subscriptions = useSubscriptions(uid);

  return (
    <PageLayout title="Subscriptions">
      <div className="flex flex-col gap-8">
        <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-lg ring ring-neutral-200">
          <Table data={subscriptions} fields={subscriptionFields} />
        </div>

        {subscriptions.map(subscription => (
          <div
            key={subscription.id}
            className="mx-auto w-full max-w-xs rounded-2xl bg-white p-4 shadow-lg ring ring-neutral-200"
          >
            <Table data={mapCheckIns(subscription.checkIns)} fields={checkInFields} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}


export default Subscriptions;
