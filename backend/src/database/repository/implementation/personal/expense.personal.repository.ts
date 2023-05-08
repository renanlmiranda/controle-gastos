import IBaseRepository from "@/database/repository/IBaseRepository";
import fs from 'fs'
import path from "path";

export default class ExpensePersonalRepository implements IBaseRepository<any> {
    private expenseRepositoryPath: string

    constructor(){
        this.expenseRepositoryPath = path.join(path.join(__dirname, "./data/expense.data.json"))
    }

    async save(body: any): Promise<any> {
        const filePath = this.expenseRepositoryPath
        const expenseJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const id = expenseJson.expenses.length  + 1
        const data = {
            created_at: new Date(),
            updated_at: null,
            disabled_at: null, 
            ...body, 
            id 
        }
        await expenseJson.expenses.push(data)
        fs.writeFileSync(filePath, JSON.stringify(expenseJson, null, 2))
        return {created: true}
    };

    async update(body: any): Promise<any> {
        
    };

    async findOne(id: number): Promise<any> {
        
    };

    async findAll(filters: any): Promise<any> {

    };
}