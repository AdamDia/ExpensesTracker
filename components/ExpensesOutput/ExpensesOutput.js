import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pari of shoes',
        amount: 159.99,
        date: new Date('2023-05-10')
    },
    {
        id: 'e2',
        description: 'A pari of trousers',
        amount: 89.29,
        date: new Date('2023-01-11')
    },
    {
        id: 'e3',
        description: 'Some banans',
        amount: 5.99,
        date: new Date('2023-02-10')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2023-03-10')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2023-04-19')
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 14,
        backgroundColor: GlobalStyles.colors.primary700
    }
})