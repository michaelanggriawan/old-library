import uuid from 'uuid/v4';
import { dateFormat } from '../../../common/utils/date-util';

const mapper = {
  addDataPeminjam: (data) => ({
    id: uuid(),
    no_pinjam: data.no_pinjam,
    judul: data.judul,
    nama_siswa: data.nama_siswa,
    tgl_pinjam: dateFormat(data.dateFrom, 'DD MMM YYYY'),
    tgl_kembali: dateFormat(data.dateTo, 'DD MMM YYYY'),
    terlambat: '0 hari',
  }),
};

export default mapper;
