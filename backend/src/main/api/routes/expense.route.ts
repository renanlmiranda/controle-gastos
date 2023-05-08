import Controller from "@/controller/expense.controller"
import { Router } from "express";
import { adaptRoute } from "../expressAdapter";

export default  (router: Router): void => {
    const expenseController = new Controller()

    router.post(
        '/expense',
        adaptRoute(expenseController.create)
    )
}