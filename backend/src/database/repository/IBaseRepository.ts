export default interface IBaseRepository<Domain> {
    save: (body: any) => Promise<Domain>
    update: (body: any) => Promise<Domain>
    findOne: (id: number) => Promise<Domain>
    findAll: (filters: any) => Promise<Domain[]>
}