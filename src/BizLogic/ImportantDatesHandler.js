import ImportantDateService from '../Services/ImportantDate';

/**
 * @description This method get Important Date By ID
 * @param {String} id 
 * @memberof ImportantDatesHandler
 */
export const getImportantDateByIdFn = (id) => {
    console.log("ImportantDatesHandler :: getImportantDateByIdFn", id);
    return ImportantDateService.get(id).then(response => response.data);
}

/**
 * @description This method get all Important Dates
 * @param {Function} callback
 * @memberof ImportantDatesHandler
 */
export const getAllImportantDateFn = (callback) => {
    console.log("ImportantDatesHandler :: getAllImportantDateFn", callback);
    ImportantDateService.getAll()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}