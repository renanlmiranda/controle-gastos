import IBaseRepository from "@/database/repository/IBaseRepository"

export default class FindAllIncome {
    constructor( 
        private readonly incomeRepository: IBaseRepository<any>
    ) {}

    async execute(filters: any): Promise<any> {
        const getIncome = await this.incomeRepository.findAll(
            filters
        )

        return getIncome
    }
}
