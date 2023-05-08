import ExpensePersonalRepository from "@/database/repository/implementation/personal/expense.personal.repository"
import { IRequest } from "@/controller/interface/IRequest"
import { envs } from "@/shared/envs/envs"
import ExpenseRepository from "@/database/repository/implementation/expense.repository"
import CreateExpense from "@/useCase/expense/createExpense.useCase"
import { created, getResponseFromError } from "@/controller/util/httpResponses"

export default class ExpenseController {
    async create(request: IRequest): Promise<any> {
        try {
            const repository = envs.nodeEnv === 'dev' ? new ExpensePersonalRepository() : new ExpenseRepository()
            const createExpenseUseCase = new CreateExpense(repository)
            await createExpenseUseCase.execute(request.body)
    
            return created('ok')
        } catch (error) {
            return getResponseFromError(error)
        }
    }
}