import { IBrand, IBrandUpdate } from './../Types/Brand';
import { apiRequestRefeshToken } from './..//utils/apiHelperRefeshToken';
import { Method } from './../Types/Auth';


export const get_all_brand = async () => {
    return await apiRequestRefeshToken('/admin/brand', Method.GET);
}

export const get_brand_by_id = async (id:number) => {
    return await apiRequestRefeshToken(`/admin/brand/${id}`, Method.GET);
}

export const create_brand = async (name:string) => {
    return await apiRequestRefeshToken('/admin/brand', Method.POST, {name});
}

export const update_brand = async (category:IBrandUpdate) => {
    return await apiRequestRefeshToken(`/admin/brand/`, Method.PUT, category);
}

export const delete_brand = async (id:number) => {
    return await apiRequestRefeshToken(`/admin/brand/${id}`, Method.DELETE);
}