import Controller from "@/controller/income.controller"
import { Router } from "express";
import { adaptRoute } from "../expressAdapter";

export default  (router: Router): void => {
    const incomeController = new Controller()

    router.post(
        '/income',
        adaptRoute(incomeController.create)
    )
}