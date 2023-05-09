import IExpenseAndIncomeRepository from "@/database/repository/IExpenseAndIncomeRepository";
import path from "path";
import fs from 'fs'
import { IncomeJsonType } from "@/database/repository/implementation/personal/data/personalRepo.type";

export default class IncomePersonalRepository implements IExpenseAndIncomeRepository<any> {
    private incomeRepositoryPath: string

    constructor(){
        this.incomeRepositoryPath = path.join(path.join(__dirname, "./data/income.data.json"))
    }

    async save(body: any): Promise<any> {
        const filePath = this.incomeRepositoryPath
        const expenseJson: IncomeJsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const id = expenseJson.incomes.length  + 1
        const data = {
            created_at: new Date(),
            updated_at: null,
            disabled_at: null, 
            ...body, 
            id 
        }
        expenseJson.incomes.push(data)
        fs.writeFileSync(filePath, JSON.stringify(expenseJson, null, 2))
        return {created: true}
    };

    async update(body: any): Promise<any> {
        
    };

    async findOne(id: number): Promise<any> {
        
    };

    async findAll(filters: any): Promise<any> {
        const filePath = this.incomeRepositoryPath
        const expenseJson: IncomeJsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        const filteredArray = expenseJson.incomes.filter(income => {
            const createdAt = new Date(income.created_at)
            const disabledAt = income.disabled_at

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
        const filePath = this.incomeRepositoryPath
        const expenseJson: IncomeJsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        const filteredArray = expenseJson.incomes.filter(income => {
            const createdAt = new Date(income.created_at)
            const disabledAt = income.disabled_at

            const currentDate = new Date()
            const currentYear = currentDate.getFullYear()
            const currentMonth = currentDate.getMonth() + 1

            return (
                createdAt.getFullYear() === currentYear &&
                createdAt.getMonth() + 1 === currentMonth &&
                disabledAt === null
            )

        })

        filteredArray.forEach(income => {
            total += income.value
        })

        return total
    };
}