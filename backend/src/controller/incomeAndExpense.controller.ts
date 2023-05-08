import { IRequest } from "@/controller/interface/IRequest"
import ExpenseRepository from "@/database/repository/implementation/expense.repository"
import IncomeRepository from "@/database/repository/implementation/income.repository"
import ExpensePersonalRepository from "@/database/repository/implementation/personal/expense.personal.repository"
import IncomePersonalRepository from "@/database/repository/implementation/personal/income.personal.repository"
import { envs } from "@/shared/envs/envs"
import FindAllExpenseAndIncome from "@/useCase/expenseAndIncome/findAll.useCase"
import { getResponseList } from "./util/httpResponses"
import { getResponseFromError } from "./util/httpResponses"

export default class IncomeAndExpenseController {
    async findAll(request: IRequest): Promise<any> {
        try {
            const incomeRepository = envs.nodeEnv === 'dev' ? new IncomePersonalRepository() : new IncomeRepository()
            const expenseRepository = envs.nodeEnv === 'dev' ? new ExpensePersonalRepository() : new ExpenseRepository()

            const useCase = new FindAllExpenseAndIncome(envs, incomeRepository, expenseRepository)
            const result = await useCase.execute(request.query)
            return getResponseList(result)
        } catch (error) {
            getResponseFromError(error)
        }
    }
}