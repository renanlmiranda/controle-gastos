import ExpensePersonalRepository from "@/database/repository/implementation/personal/expense.personal.repository"
import { IRequest } from "@/controller/interface/IRequest"

export default class ExpenseController {
    async create(request: IRequest): Promise<any> {
        const personalRepository = new ExpensePersonalRepository()
        console.log(request)
        await personalRepository.save(request.body)
        return true
    }
}