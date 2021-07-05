import http from "../http-common";

class WorkshopDataService {
    getAll() {
      return http.get("/workshop/");
    }
  
    get(id) {
      return http.get(`/workshop/byId/${id}`);
    }
  
    create(data) {
      return http.post("/workshop/create", data);
    }
  
    update(id, data) {
      return http.put(`/workshop/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/workshop/${id}`);
    }
  
    findByUserId(id) {
      return http.get(`/workshop/byUserId/{id}`);
    }
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/workshop/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get(`/workshop/downloadFile/{fileName:.+}`);
    }
  }
  
  export default new WorkshopDataService();