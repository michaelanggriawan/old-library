import { dateFormat } from '../../../common/utils/date-util';

const mapper = {
  updateDataSiswa: (data) => ({
    id: data.id,
    nisn: data.nisn,
    nama: data.nama,
    tgl_lahir: dateFormat(data.tgl_lahir, 'DD-MMMM-YYYY'),
    kelas: data.kelas,
  }),
  addDataSiswa: (data) => ({
    id: data.id,
    nisn: data.nisn,
    nama: data.nama,
    tgl_lahir: dateFormat(data.tgl_lahir, 'DD-MMMM-YYYY'),
    kelas: data.kls,
  }),
};

export default mapper;
