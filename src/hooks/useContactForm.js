import { useState } from "react";
import { submitApplication } from "../api/applications";
const INITIAL_STATE = { name: "", phone: "", course: "" };
export function useContactForm() {
    const [values, setValues] = useState(INITIAL_STATE);
    const [status, setStatus] = useState("idle");
    const updateField = (field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!values.name.trim() || !values.phone.trim())
            return;
        setStatus("submitting");
        try {
            // Backend пока не подключён — запрос уйдёт на VITE_API_URL,
            // как только появится реальный эндпоинт /applications.
            await submitApplication(values);
            setStatus("success");
            setValues(INITIAL_STATE);
        }
        catch {
            setStatus("error");
        }
    };
    return { values, updateField, handleSubmit, status };
}
