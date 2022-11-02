import Api from "@/services/Api";

export default {
  //ฟังก์ชันสมัครสมาชิกผู้ดูแลระบบ
  register(credentials) {
    return Api.post("register", credentials);
  },
};
