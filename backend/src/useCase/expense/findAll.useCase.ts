import IBaseRepository from "@/database/repository/IBaseRepository"

export default class FindAllExpense {
    constructor( 
        private readonly expenseRepository: IBaseRepository<any>
    ) {}

    async execute(filters: any): Promise<any> {
        const getExpense = await this.expenseRepository.findAll(
            filters
        )

        return getExpense
    }
}
