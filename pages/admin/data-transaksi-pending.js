//@ts-check
import TabelTransaksiTemp from '../../components/admin/tableTransaksiTemp'

export default function DataPengembalian(){
    const dataPinjamTemp=[{no:'01' ,idPinjam: 'P01',idSiswa: 'S01', idBuku: 'B01', tglPinjam : '12-01-2021', tglTempo: '20-02-2021'},
  {idSiswa: 'S01', idBuku: 'B01', tglPinjam : '12-01-2021', tglTempo: '21-01-2021'},
  {idSiswa: 'S01', idBuku: 'B01', tglPinjam : '12-01-2021', tglTempo: '22-01-2021'},
  {idSiswa: 'S01', idBuku: 'B01', tglPinjam : '12-01-2021', tglTempo: '13-08-2021'},
  {idSiswa: 'S01', idBuku: 'B01', tglPinjam : '12-01-2021', tglTempo: '15-08-2021'}]
    return(
            <div className="container-fluid">
    <h3 className="text-dark mb-4">Data Transaksi Pending</h3>
    <div className="card shadow">
        <div className="card-header py-3">
        <p className="text-primary m-0 fw-bold">Tabel Data Pengembalian</p>
        </div>
        <div className="card-body">
        <div className="row">
            <div className="col-md-6 text-nowrap">
            <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show&nbsp;<select className="d-inline-block form-select form-select-sm">
                    <option value={10} selected>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>&nbsp;</label></div>
            </div>
            <div className="col-md-6">
            <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
            </div>
        </div>
        <TabelTransaksiTemp />
        <div className="row">
            <div className="col-md-6 align-self-center">
            <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
            </div>
            <div className="col-md-6">
            <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
    </div>
    </div>

    )
}