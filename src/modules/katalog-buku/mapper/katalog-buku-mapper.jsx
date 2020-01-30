const mapper = {
  updateDataBuku: (data) => ({
    id: data.id,
    judul: data.judul,
    pengarang: data.pengarang,
    penerbit: data.penerbit,
    jumlah_buku: data.jumlah_buku,
  }),
  addDataBuku: (data) => ({
    id: data.id,
    judul: data.judul,
    pengarang: data.pengarang,
    penerbit: data.penerbit,
    jumlah_buku: data.jumlah_buku,
  }),
};

export default mapper;
