import IExpenseAndIncomeRepository from "@/database/repository/IExpenseAndIncomeRepository";
import fs from 'fs'
import path from "path";
import { ExpensesJsonType } from "@/database/repository/implementation/personal/data/personalRepo.type";

export default class ExpensePersonalRepository implements IExpenseAndIncomeRepository<any> {
    private expenseRepositoryPath: string

    constructor(){
        this.expenseRepositoryPath = path.join(path.join(__dirname, "./data/expense.data.json"))
    }

    async save(body: any): Promise<any> {
        const filePath = this.expenseRepositoryPath
        const expenseJson: ExpensesJsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const id = expenseJson.expenses.length  + 1
        const data = {
            created_at: new Date(),
            updated_at: null,
            disabled_at: null, 
            ...body, 
            id 
        }
        expenseJson.expenses.push(data)
        fs.writeFileSync(filePath, JSON.stringify(expenseJson, null, 2))
        return {created: true}
    };

    async update(body: any): Promise<any> {
        
    };

    async findOne(id: number): Promise<any> {
        
    };

    async findAll(filters: any): Promise<any> {
        const filePath = this.expenseRepositoryPath
        const expenseJson: ExpensesJsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        const filteredArray = expenseJson.expenses.filter(expense => {
            const createdAt = new Date(expense.created_at)
            const disabledAt = expense.disabled_at

            const currentDate = new Date()
            const currentYear = currentDate.getFullYear()
            const currentMonth = currentDate.getMonth() + 1

            return (
                createdAt.getFullYear() === currentYear &&
                createdAt.getMonth() + 1 === currentMonth &&
                disabledAt === null
            )

        })

        return {list: filteredArray}
    };

    async findTotal(filters: any): Promise<any> {
        let total: number = 0
        const filePath = this.expenseRepositoryPath
        const expenseJson: ExpensesJsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        const filteredArray = expenseJson.expenses.filter(expense => {
            const createdAt = new Date(expense.created_at)
            const disabledAt = expense.disabled_at

            const currentDate = new Date()
            const currentYear = currentDate.getFullYear()
            const currentMonth = currentDate.getMonth() + 1

            return (
                createdAt.getFullYear() === currentYear &&
                createdAt.getMonth() + 1 === currentMonth &&
                disabledAt === null
            )

        })

        filteredArray.forEach(expense => {
            total += expense.value
        })

        return total
    };
}