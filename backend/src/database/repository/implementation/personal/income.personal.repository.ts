import IBaseRepository from "@/database/repository/IBaseRepository";
import path from "path";
import fs from 'fs'
import { JsonType } from "@/database/repository/implementation/personal/data/personalRepo.type";

export default class IncomePersonalRepository implements IBaseRepository<any> {
    private incomeRepositoryPath: string

    constructor(){
        this.incomeRepositoryPath = path.join(path.join(__dirname, "./data/income.data.json"))
    }

    async save(body: any): Promise<any> {
        const filePath = this.incomeRepositoryPath
        const expenseJson: JsonType = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
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

    };
}