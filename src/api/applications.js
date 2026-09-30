import apiClient from "./client";
export const submitApplication = async (payload) => {
    const response = await apiClient.post("/applications", payload);
    return response.data;
};
