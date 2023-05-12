import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../sote/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverLay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch(error) {
        setError('Could not fetch expenses!')
      }
      
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null) //we could try to fetch the data again here after pressing the okay button
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isFetching) {
    return <LoadingOverLay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
