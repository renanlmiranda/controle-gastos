import IBaseRepository from "@/database/repository/IBaseRepository";
import fs from 'fs'
import path from "path";

export default class ExpensePersonalRepository implements IBaseRepository<any> {
    async save(body: any): Promise<any> {
        const filePath = path.join(path.join(__dirname, "./data/expense.data.json"))
        const expenseJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        await expenseJson.expenses.push(body)
        fs.writeFileSync(filePath, JSON.stringify(expenseJson, null, 2))
        return true
    };

    async update(body: any): Promise<any> {
        
    };

    async findOne(id: number): Promise<any> {
        
    };

    async findAll(filters: any): Promise<any> {

    };
}