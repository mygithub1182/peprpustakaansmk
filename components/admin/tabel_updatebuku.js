//@ts-check
export default function Tblpengembalian(buku){
    return(
      <tr>
         <th style={{width: 56}}>{buku.no}</th>
        <th>{buku.id_buku}</th>
        <th>{buku.judulbuku}</th>
        <th>{buku.pengarang}</th>
        <th>{buku.penerbit}</th>
        <th>{buku.tahun_terbit}</th>
        <th>{buku.kategori}</th>
        <th>{buku.jumlahbuku}</th>
        <th>{buku.gambarbuku}</th>
        <th>{buku.rak}</th>
        <th>{buku.baris}</th>
        <th>{buku.tglmasuk}</th>
      </tr>
    )
}