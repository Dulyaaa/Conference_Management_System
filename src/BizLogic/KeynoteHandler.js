import KeynoteService from '../Services/Keynote';

/**
 * @description This method get all Important Dates
 * @param {Function} callback
 * @memberof KeynoteHandler
 */
export const getAllKeynoteFn = (callback) => {
    console.log("KeynoteHandler :: KeynoteHandler", callback);
    KeynoteService.getAll()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}