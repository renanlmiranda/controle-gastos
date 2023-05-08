import IncomeRepository from "@/database/repository/implementation/income.repository"
import IncomePersonalRepository from "@/database/repository/implementation/personal/income.personal.repository"
import { envs } from "@/shared/envs/envs"
import CreateIncome from "@/useCase/income/createIncome.useCase"
import { created, getResponseFromError } from "@/controller/util/httpResponses"

export default class IncomeController {
    async create(request: any): Promise<any> {
        try {
            const repository = envs.nodeEnv === 'dev' ? new IncomePersonalRepository() : new IncomeRepository()
            const createIncomeUseCase = new CreateIncome(repository)
            await createIncomeUseCase.execute(request.body)
    
            return created('ok')
        } catch (error) {
            return getResponseFromError(error)
        }
    }
}