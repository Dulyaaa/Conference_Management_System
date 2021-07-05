import http from '../API';

class ResearchService {

upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/researchers/uploadFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
  getFiles() {
    return http.get(`/researchers/downloadFile/{fileName:.+}`);
  }
}
export default new ResearchService();
