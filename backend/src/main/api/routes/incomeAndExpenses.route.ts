import { create } from "domain";
import Controller from "@/controller/incomeAndExpenses.controller"
import { Router } from "express";
import { adaptRoute } from "../expressAdapter";

export default  (router: Router): void => {
    const incomeAndExpensesController = new Controller()

    router.post(
        '/expense',
        adaptRoute(incomeAndExpensesController.create)
    )

    router.post(
        '/income',
        adaptRoute(incomeAndExpensesController.create)
    )
}