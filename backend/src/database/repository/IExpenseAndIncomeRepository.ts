import IBaseRepository from "./IBaseRepository"

export default interface IExpenseAndIncome<Domain> extends IBaseRepository<Domain> {
    findTotal: (filters: any) => Promise<number>
}