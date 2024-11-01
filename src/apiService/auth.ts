import { PayloadItem, SuccessResponsePayload, } from "../types/authentity";
import { END_POINTS } from "./apis";
import { postRequest } from "./network";

export const fetchdata = async (payload: PayloadItem) => {
    const url = END_POINTS.APP_CONFIG;
    const response = await postRequest(url, payload);
    return response as PayloadItem
}
