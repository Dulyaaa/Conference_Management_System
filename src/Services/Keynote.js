import http from '../API';

class KeynoteService {

    getAll() {
        return http.get("/keynote/");
    }
}

export default new KeynoteService();