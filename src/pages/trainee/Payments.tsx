import PageLayout from "../PageLayout";
import { Table } from "../../components/Table";
import { useUser } from "../../contexts/user";
import { usePayments } from "../../firebase/firestore/payments";
import { paymentFields } from "../../types/payment";


function Payments() {
  const { uid } = useUser();
  const payments = usePayments(uid);

  return (
    <PageLayout title="Payments">
      <div className="mx-auto max-w-xs rounded-2xl bg-white p-4 shadow-lg ring ring-neutral-200">
        <Table data={[...payments]} fields={paymentFields} />
      </div>
    </PageLayout>
  );
}


export default Payments;
