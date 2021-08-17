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
        const response = await api.get(`/goodreads/${id}`)
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const createBook = async book => {
    try {
        const response = await api.post('/goodreads', book)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateBook = async (id, book) => {
    try {
        const response = await api.put(`/goodreads/${id}`, book)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteBook = async id => {
    try {
        const response = await api.delete(`/goodreads/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

