import { $authHost } from "./index";

export const createTypePart = async (device) => {
    const { data } = await $authHost.post('api/typepart', device)
    return data
}

export const createModelPart = async (model) => {
    const { data } = await $authHost.post('api/modelname', model)
    return data
}
