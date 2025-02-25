import React from 'react'
import './Button.css'
import { reset } from "../service.js"
import { toast } from "react-toastify"

const Button = () => {
    const handleReset = async () => {
        if (!window.confirm("Êtes-vous sûr de vouloir réinitialiser toutes les données du tableau ?")) return;
        try {
            await reset()
            window.location.reload();
        } catch (error) {
            toast.error("Impossible de réinitialiser le tableau. Veuillez réessayer.")
        }
    }
    return (
        <button type="button" className="button" onClick={handleReset}>
            Réinitialiser
        </button>
    )
}

export default Button
