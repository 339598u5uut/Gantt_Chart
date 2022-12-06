export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export default function checkResponse(res: Response) {
    if (!res.ok) {
        throw new Error("Сервер не отвечает");
    }
    return res.json();
}