import IExpenseAndIncomeRepository from "@/database/repository/IExpenseAndIncomeRepository"
import { IEnvs } from "@/shared/envs/IEnvs"

export default class FindTotalIncomesAndExpenses {
    constructor(
        private readonly envs: IEnvs, 
        private readonly incomeRepository: IExpenseAndIncomeRepository<any>,
        private readonly expenseRepository: IExpenseAndIncomeRepository<any>
    ) {}

    async execute(filters: any): Promise<any> {
        if (this.envs.nodeEnv === "dev"){
            const income = await this.incomeRepository.findTotal(
                filters
            )

            const expense = await this.expenseRepository.findTotal(
                filters
            )

            return {
                income,
                expense,
                available: income - expense
            }
        }

        return true
    }
}
