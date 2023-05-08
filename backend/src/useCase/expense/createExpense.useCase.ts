import IBaseRepository from "@/database/repository/IBaseRepository"

export default class CreateExpense {
    private repository: IBaseRepository<any>

    constructor(repository: IBaseRepository<any>) {
        this.repository = repository
    }

    async execute(expense: any): Promise<any> {
        const expenseCreation = await this.repository.save(
            expense
        )
        return expenseCreation
    }
}
