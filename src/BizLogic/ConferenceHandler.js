import ConferenceService from '../Services/Conference';
import WorkshopService from '../Services/WorkshopService';

/**
 * @description This method create new conference
 * @param {Object} data 
 * @memberof ConferenceHandler
 */
export const createConferenceFn = (data) => {
    console.log("ConferenceHandler :: createConferenceFn", data);
    ConferenceService.create(data)
        .then(response => {
            alert('Data successfully entered.');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        })
}

/**
 * @description This method get all Conferences
 * @param {Function} callback
 * @memberof ConferenceHandler
 */
export const getAllConferenceFn = (callback) => {
    console.log("ConferenceHandler :: getAllConferenceFn", callback);
    ConferenceService.getAll()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}

/**
 * @description This method get Conference By ID
 * @param {String} id 
 * @memberof ConferenceHandler
 */
export const getConferenceByIdFn = (id) => {
    console.log("ConferenceHandler :: getConferenceByIdFn", id);
    return ConferenceService.get(id).then(response => response.data);
}

/**
 * @description This method get Approved Conference
 * @param {Function} callback
 * @memberof ConferenceHandler
 */
export const getApprovedConferenceFn = (callback) => {
    console.log("ConferenceHandler :: getApprovedConferenceFn", callback);
    ConferenceService.approvedConference()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}

/**
 * @description This method get all Workshops
 * @param {Function} callback
 * @memberof ConferenceHandler
 */
export const getWorkshopsFn = (callback) => {
    console.log("ConferenceHandler :: getWorkshopsFn", callback);
    WorkshopService.getAll()
        .then(response => callback({ data: response.data }))
        .catch(error => callback({ error: error }));
}

/**
 * @description This method delete conference
 * @param {String} id
 * @memberof ConferenceHandler
 */
export const deleteConferenceFn = (id) => {
    console.log("ConferenceHandler :: deleteConferenceFn", id);
    ConferenceService.delete(id)
        .then(response => {
            alert('Data successfully Deleted.');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        })
}

/**
 * @description This method change status of conference
 * @param {String} id
 * @param {String} status
 * @memberof ConferenceHandler
 */
export const changeStatusFn = (id, status) => {
    console.log("ConferenceHandler :: changeStatusFn", id, status);
    ConferenceService.changeStatusApproved(id, status)
        .then(response => {
            alert('Changed Status.');
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        })
}
