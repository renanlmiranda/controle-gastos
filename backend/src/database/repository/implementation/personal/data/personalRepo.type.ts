export interface defaultType {
    created_at:  string;
    updated_at:  null;
    disabled_at: null;
    name:        string;
    value:       string;
    id:          number;
}

export interface IncomeJsonType {
    incomes: Array<defaultType>
}

export interface ExpensesJsonType {
    expenses: Array<defaultType>
}