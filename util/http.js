/* REFERE TO SEC 10 V4 */
import axios from "axios";

const baseURL =
  "https://react-native-course-2f068-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {
  const response = await axios.post(baseURL + "expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(baseURL + "expenses.json");
  const expenses = [];
  //   console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(baseURL + `expenses/${id}.json`, expenseData); //`` beware of the backtext not the regular one
}

export async function deleteExpense(id) {
  return axios.delete(baseURL + `expenses/${id}.json`);
}
