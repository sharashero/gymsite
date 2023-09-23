import { Link, useParams } from "react-router-dom";
import Grid from "../Grid";
import PageLayout from "../PageLayout";
import Button from "../../components/Button";
import AddData from "../../components/Table/AddData";
import UserInfo from "../../components/User/UserInfo";
import DataTable from "../../components/Table/DataTable";
import {
  createSub,
  updateSub,
  deleteSub,
  useSubscriptions,
} from "../../firebase/firestore/subscriptions";
import {
  usePayments,
  createPayment,
  updatePayment,
  deletePayment,
} from "../../firebase/firestore/payments";
import { paymentFields } from "../../types/payment";
import { subscriptionFields } from "../../types/subscription";


function User() {
  const { userId } = useParams();
  const uid = userId || "";
  const payments = usePayments(uid);
  const subscriptions = useSubscriptions(uid);

  return (
    <PageLayout title="User">

      <Grid>
        <UserInfo
          userId={uid}
        />

        <div className="my-auto">
          <Link to="cycles">
            <Button>
              Go to cycles
            </Button>
          </Link>
        </div>

        {/* subscriptions, checkins, payments */}

        <div className="flex w-full flex-col items-center gap-8 p-2">
          <h2 className="text-2xl font-bold">Payments</h2>
          <div className="flex flex-wrap justify-evenly gap-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="w-52 rounded-lg border-2 border-neutral-400 bg-white p-2 shadow-lg"
              >
                <DataTable
                  onEdit={async (data) => {
                    await updatePayment(uid, {
                      id: payment.id,
                      ...data,
                    });
                  }}
                  onDelete={async () => {
                    await deletePayment(uid, payment);
                  }}
                  data={payment}
                  dataFields={paymentFields}
                />
              </div>
            ))}
          </div>

          <div className="my-4 text-center">
            <AddData
              dataFields={paymentFields}
              onAdd={async (data) => {
                await createPayment(uid, data);
              }}
            >
              Add Payment
            </AddData>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-8 p-2">
          <h2 className="text-2xl font-bold">Subscribtions</h2>
          <div className="flex flex-wrap justify-evenly gap-4">
            {subscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="w-56 rounded-lg border-2 border-neutral-400 bg-white p-2 shadow-lg"
              >
                <DataTable
                  onEdit={async (data) => {
                    await updateSub(uid, {
                      id: subscription.id,
                      ...data,
                    });
                  }}
                  onDelete={async () => {
                    await deleteSub(uid, subscription);
                  }}
                  data={subscription}
                  dataFields={subscriptionFields}
                />
              </div>
            ))}
          </div>

          <div className="my-4 text-center">
            <AddData
              dataFields={subscriptionFields}
              onAdd={async (data) => {
                await createSub(uid, {
                  ...data,
                  checkIns: [],
                });
              }}
            >
              Add Subscription
            </AddData>
          </div>
        </div>
      </Grid>

    </PageLayout>
  );
}


export default User;
