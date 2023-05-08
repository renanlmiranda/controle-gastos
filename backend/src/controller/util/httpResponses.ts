import { IResponse } from '@/controller/interface/IResponse'

export const created = (data: any): IResponse => ({
    statusCode: 201,
    body: data,
})

export const ok = (data?: any): IResponse => ({
    statusCode: 200,
    body: data,
})

export const badRequest = (data: any): IResponse => ({
    statusCode: 400,
    body: data,
})

export const notFound = (): IResponse => ({
    statusCode: 404,
})

export const serverError = (data: any): IResponse => ({
    statusCode: 500,
    body: data,
})

export const getResponseDelete = (response: any, body: string): IResponse => {
    return response ? ok() : ok(body)
}

export const getResponse = (response: any, hasBody = true): IResponse => {
    const hasElements = response && response.length && response.length > 0
    const responseOk = hasBody ? ok(response) : ok()
    return hasElements ? responseOk : notFound()
}

export const getResponseOne = (response: any): IResponse => {
    const hasElements = !!response && !!Object.keys(response).length
    return hasElements ? ok(response) : notFound()
}

export const getResponseList = (response: any): IResponse => {
    const hasElements = response && response.list && response.list.length > 0
    return hasElements ? ok(response) : notFound()
}

export const getResponseFromError = (error: any): IResponse => {
    const badRequestErrors = [
        'InvalidParamError',
    ]

    if (badRequestErrors.includes(error.name)) {
        return badRequest(error.message)
    }

    if (error.name === 'RegisterNotFound') {
        return notFound()
    }

    return serverError(error.message)
}