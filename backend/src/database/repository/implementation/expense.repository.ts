import IBaseRepository from "@/database/repository/IBaseRepository";
import IExpenseAndIncome from "@/database/repository/IExpenseAndIncomeRepository";

export default class ExpenseRepository implements IExpenseAndIncome<any> {
    async save(body: any): Promise<any> {
        
    };

    async update(body: any): Promise<any> {
        
    };

    async findOne(id: number): Promise<any> {
        
    };

    async findAll(filters: any): Promise<any> {

    };

    async findTotal(filters: any): Promise<any> {

    };
}