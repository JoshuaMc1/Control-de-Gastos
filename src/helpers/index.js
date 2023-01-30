export const generateId = () =>
    Math.random().toString(36).substr(2) + Date.now().toString(36);

export const formatDate = (date) =>
    new Date(date).toLocaleDateString('es-HN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

export const formatQuantity = (quantity) =>
    quantity.toLocaleString("es-HN", {
        style: "currency",
        currency: "HNL",
    })