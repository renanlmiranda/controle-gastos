import IBaseRepository from "@/database/repository/IBaseRepository"

export default class CreateIncome {
    private repository: IBaseRepository<any>

    constructor(repository: IBaseRepository<any>) {
        this.repository = repository
    }

    async execute(expense: any): Promise<any> {
        const incomeCreation = await this.repository.save(
            expense
        )
        return incomeCreation
    }
}
