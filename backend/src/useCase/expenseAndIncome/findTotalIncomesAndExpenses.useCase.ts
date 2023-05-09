import IBaseRepository from "@/database/repository/IBaseRepository"
import { IEnvs } from "@/shared/envs/IEnvs"

export default class FindTotalIncomesAndExpenses {
    constructor(
        private readonly envs: IEnvs, 
        private readonly incomeRepository: IBaseRepository<any>,
        private readonly expenseRepository: IBaseRepository<any>
    ) {}

    async execute(filters: any): Promise<any> {
        if (this.envs.nodeEnv === "dev"){
            const getIncome = await this.incomeRepository.findAll(
                filters
            )

            const getExpense = await this.expenseRepository.findAll(
                filters
            )

            return {
                getIncome,
                getExpense
            }
        }

        return true
    }
}
