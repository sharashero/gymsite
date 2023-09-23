import { useState } from "react";
import { useForm } from "react-hook-form";
import PageLayout from "../PageLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { dateToInput } from "../../util/date";
import { getAllPayments } from "../../firebase/firestore/payments";


function Money() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      from: dateToInput(new Date(Date.now() - 30 * 24 * 60 * 60* 1000)),
      to: dateToInput(new Date()),
    }
  });

  const [results, setResults] = useState({
    calculated: false,
    number: 0,
    total: 0,
  });

  async function onSubmit(data: { from: Date; to: Date; }) {
    const payments = await getAllPayments(data.from, data.to);
    setResults({
      calculated: true,
      number: payments.length,
      total: payments.reduce((prev, curr) => prev + curr.amount, 0)
    });
  }


  return (
    <PageLayout title="Money">

      <div className="container mx-auto flex max-w-md flex-col items-center gap-8">

        <div className="w-full p-4">
          <h2 className="mb-8 text-xl font-bold">Payments</h2>

          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit as never)}
          >
            <div className="flex w-full flex-col gap-2">
              <label>
              From Date
              </label>
              <Input
                type="date"
                { ...register("from", { valueAsDate: true }) }
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label>
              To Date
              </label>
              <Input
                type="date"
                { ...register("to", { valueAsDate: true }) }
              />
            </div>

            <Button type="submit">
            Calculate
            </Button>
          </form>
        </div>

        {results.calculated && <div className="w-full max-w-xs rounded-lg border-2 border-neutral-200 bg-white p-4 shadow-lg">
          <div className="flex w-full items-center">
            <div className="w-1/2">Payments</div>
            <div>{results.number}</div>
          </div>
          <div className="flex w-full items-center">
            <div className="w-1/2">Total</div>
            <div>{results.total} LE</div>
          </div>
        </div>}

      </div>
    </PageLayout>
  );
}


export default Money;
