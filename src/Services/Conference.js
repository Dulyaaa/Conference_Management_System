import http from '../API';

class ConferenceService {

    get(id) {
        return http.get(`/conference/${id}`);
    }

    getAll() {
        return http.get("/conference/");
    }

    create(data) {
        return http.post("/conference/create", data);
    }

    approvedConference() {
        return http.get("/conference/approvedConference");
    }

    delete(id) {
        return http.delete(`/conference/delete/${id}`);
    }

    changeStatusApproved(id, status) {
        return http.put(`/conference/changeStatus/${status}/${id}`);
    }
}

export default new ConferenceService();