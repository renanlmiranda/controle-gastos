import { IRequest } from "@/controller/interface/IRequest"
import ExpenseRepository from "@/database/repository/implementation/expense.repository"
import IncomeRepository from "@/database/repository/implementation/income.repository"
import ExpensePersonalRepository from "@/database/repository/implementation/personal/expense.personal.repository"
import IncomePersonalRepository from "@/database/repository/implementation/personal/income.personal.repository"
import { envs } from "@/shared/envs/envs"
import FindTotalIncomesAndExpenses from "@/useCase/expenseAndIncome/findTotalIncomesAndExpenses.useCase"
import { created, getResponseList } from "@/controller/util/httpResponses"
import { getResponseFromError } from "./util/httpResponses"
import CreateIncome from "@/useCase/income/createIncome.useCase"
import CreateExpense from "@/useCase/expense/createExpense.useCase"
import FindAllIncome from "@/useCase/income/findAll.useCase"
import FindAllExpense from "@/useCase/expense/findAll.useCase"

export default class IncomeAndExpenseController {
    async createIncome(request: IRequest): Promise<any> {
        try {
            const repository = envs.nodeEnv === 'dev' ? new IncomePersonalRepository() : new IncomeRepository()
            const createIncomeUseCase = new CreateIncome(repository)
            await createIncomeUseCase.execute(request.body)
    
            return created('ok')
        } catch (error) {
            return getResponseFromError(error)
        }
    }

    async createExpense(request: IRequest): Promise<any> {
        try {
            const repository = envs.nodeEnv === 'dev' ? new ExpensePersonalRepository() : new ExpenseRepository()
            const createExpenseUseCase = new CreateExpense(repository)
            await createExpenseUseCase.execute(request.body)
    
            return created('ok')
        } catch (error) {
            return getResponseFromError(error)
        }
    }

    async findSumOfValues(request: IRequest): Promise<any> {
        try {
            const incomeRepository = envs.nodeEnv === 'dev' ? new IncomePersonalRepository() : new IncomeRepository()
            const expenseRepository = envs.nodeEnv === 'dev' ? new ExpensePersonalRepository() : new ExpenseRepository()

            const useCase = new FindTotalIncomesAndExpenses(envs, incomeRepository, expenseRepository)
            const result = await useCase.execute(request.query)
            return getResponseList(result)
        } catch (error) {
            getResponseFromError(error)
        }
    }

    async findAllIncomes(request: IRequest): Promise<any> {
        try {
            const incomeRepository = envs.nodeEnv === 'dev' ? new IncomePersonalRepository() : new IncomeRepository()
            const useCase = new FindAllIncome(incomeRepository)
            const result = await useCase.execute(request.query)
            return getResponseList(result)
        } catch (error) {
            getResponseFromError(error)
        }
    }

    async findAllExpenses(request: IRequest): Promise<any> {
        try {
            const expenseRepository = envs.nodeEnv === 'dev' ? new ExpensePersonalRepository() : new ExpenseRepository()
            const useCase = new FindAllExpense(expenseRepository)
            const result = await useCase.execute(request.query)
            return getResponseList(result)
        } catch (error) {
            getResponseFromError(error)
        }
    }
}