import { adaptRoute } from "@/main/api/expressAdapter"
import { Router } from "express"
import Controller from "@/controller/incomeAndExpense.controller"

export default  (router: Router): void => {
    const controller = new Controller()

    router.post(
        '/income',
        adaptRoute(controller.createIncome)
    )

    router.post(
        '/expense',
        adaptRoute(controller.createExpense)
    )

    router.get(
        '/income',
        adaptRoute(controller.findAllIncomes)
    )

    router.get(
        '/expense',
        adaptRoute(controller.findAllExpenses)
    )

    router.get(
        '/total',
        adaptRoute(controller.findSumOfValues)
    )
}