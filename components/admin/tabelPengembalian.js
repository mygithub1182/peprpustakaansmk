//@ts-check
export default function tabelPengembalian({props}){
    return(
        <div className="table-responsive table mt-2" id="tabelPengembalian" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0" id="dataTable">
            <thead>
                <tr>
                <th style={{width: 93}}>No</th>
                <th>id_kembali</th>
                <th>id_pinjam</th>
                <th>id_siswa</th>
                <th>id_buku</th>
                <th>tgl-pinjam</th>
                <th>tgl-tempo</th>
                <th>tgl_kembali</th>
                <th>Denda</th>
                </tr>
            </thead>
            <tbody>
                {props.map((kembali, index) => (
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{kembali.idKembali}</td>
                    <td>{kembali.idPinjam}</td>
                    <td>{kembali.idSiswa}</td>
                    <td>{kembali.idBuku}</td>
                    <td>{kembali.tglPinjam}</td>
                    <td>{kembali.tglTempo}</td>
                    <td>{kembali.tglKembali}</td>
                    <td>{kembali.denda}</td>
                    </tr>
                ))}   
            </tbody>
            </table>
        </div>
    )
}