import http from '../API';

class ImportantDatesService {

    get(id) {
        return http.get(`/importantDate/${id}`);
    }

    getAll() {
        return http.get("/importantDate/");
    }
}

export default new ImportantDatesService();