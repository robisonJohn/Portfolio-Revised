import api from './apiConfig'

export const getBooks = async () => {
    try {
        const response = await api.get('/books')
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const getBook = async id => {
    try {
        const response = await api.get(`/books/${id}`)
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const createBook = async book => {
    try {
        const response = await api.post('/books', book)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateBook = async (id, book) => {
    try {
        const response = await api.put(`/books/${id}`, book)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteBook = async id => {
    try {
        const response = await api.delete(`/books/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

