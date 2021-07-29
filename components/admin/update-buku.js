//@ts-check
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
export default function TambahBuku(){
  const [_index_buku, setIndex] = useState('')
  const [_no_klasifikasi, setKlasifikasi] = useState('')
  const [_judul, setJudul] = useState('')
  const [_pengarang, setPengarang] = useState('')
  const [_penerbit, setPenerbit] = useState('')
  const [_stok, setStok] = useState('')
  const [_tersedia, setTersedia] = useState('')
  const [_status, setStatus] = useState('')
  const [_rak, setRak] = useState('')
  const [_baris, setBaris] = useState('')
  const [_tgl_masuk, setTglmask] = useState('')
  const [_gambar, setGambar] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { index_buku,no_klasifikasi, judul, pengarang, penerbit, stok, tersedia,
    status, rak, baris, tgl_masuk, gambar } = router.query

  useEffect(() => {
    if (typeof index_buku == 'string') {
      setIndex(index_buku)
    }
    if (typeof no_klasifikasi == 'string') {
      setKlasifikasi(no_klasifikasi)
    }
    if (typeof judul == 'string') {
      setJudul(judul)
    }
    if (typeof pengarang == 'string') {
      setPengarang(pengarang)
    }
    if (typeof penerbit == 'string') {
      setPenerbit(penerbit)
    }
    if (typeof stok == 'string') {
      setStok(stok)
    }
    if (typeof tersedia == 'string') {
      setTersedia(tersedia)
    }
    if (typeof status == 'string') {
      setStatus(status)
    }
    if (typeof rak == 'string') {
      setRak(rak)
    }
    if (typeof baris == 'string') {
      setBaris(baris)
    }
    if (typeof tgl_masuk == 'string') {
      setTglmask(tgl_masuk)
    }
    if (typeof gambar == 'string') {
      setGambar(gambar)
    }

  }, [ index_buku,no_klasifikasi, judul, pengarang, penerbit, stok, tersedia,
    status, rak, baris, tgl_masuk, gambar])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const buku = await fetch('http://localhost:3000/api/update-buku', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          index_buku : _index_buku,
          no_klasifikasi: _no_klasifikasi,
          judul: _judul,
          pengarang: _pengarang,
          penerbit: _penerbit,
          stok: _stok,
          tersedia: _tersedia,
          status: _status,
          rak: _rak,
          baris: _baris,
          tgl_masuk: _tgl_masuk,
          gambar: _gambar,
        }),
      })
      const json = await buku.json()
      setSubmitting(false)
      if (!buku.ok) throw Error(json.message)

      alert("update data suskses" + _index_buku +_no_klasifikasi +_judul +_pengarang +_penerbit +_stok +_tersedia
      +_status +_rak +_baris +_tgl_masuk +_gambar )
      Router.push('/admin/data-buku')
    } catch (e) {
      throw Error(e.message)
    }
  }

  
  return(
 <div id="wrapper" style={{width: 1345}} onSubmit={submitHandler}>
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
    
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Update Buku</h3>
        <div className="row mb-3">
          <div className="col-lg-8">
            <div className="row mb-3 d-none">
            </div>
            <div className="row">
              <div className="col" style={{width: '489.328px'}}>
                <div className="card shadow mb-3" style={{width: '516.328px'}}>
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Tambah Buku</p>
                  </div>
                  <div className="card-body">
                  <form >
                  <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="index_buku"><strong>No Index Buku</strong>&nbsp;<br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="index_buku" 
                            placeholder="" 
                            value = {_index_buku}
                            onChange = {(e) => setIndex(e.target.value)} 
                          />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="no_klasifikasi"><strong>No Klasifikasi Buku</strong><br /></label>
                          <input
                            className="form-control" 
                            type="text" 
                            id="no_klasifikasi" 
                            placeholder="" 
                            value = {_no_klasifikasi}
                            onChange = {(e) => setKlasifikasi(e.target.value)} 
                          />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Judul Buku</strong><br /></label>
                          <input 
                          className="form-control" 
                          type="text" 
                          id="judul" 
                          placeholder="" 
                          value = {_judul}
                          onChange = {(e) => setJudul(e.target.value)}  
                          />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Pengarang</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="pengarang" 
                            placeholder="" 
                            value = {_pengarang}
                            onChange = {(e) => setPengarang(e.target.value)}  
                          /></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Penerbit</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="username" 
                            placeholder="" 
                            value = {_penerbit}
                            onChange = {(e) => setPenerbit(e.target.value)} 
                          /></div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Stok</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="email" 
                            placeholder="" 
                            value = {_stok}
                            onChange = {(e) => setStok(e.target.value)} 
                          /></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Tersedia</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="username-2" 
                            placeholder="" 
                            value = {_tersedia}
                            onChange = {(e) => setTersedia(e.target.value)} 
                          /></div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Status</strong><br /></label>
                          <select 
                          className="form-control form-control-sm form-select"
                          placeholder="" 
                          value={_status}
                          onChange = {(e) => setStatus(e.target.value)}
                          >
                            <option></option>
                            <option value="Normal">Normal</option>
                            <option value="Rusak">Rusak</option>
                            <option value="Hilang">Hilang</option>
                          </select></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Rak</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="username-2" 
                            placeholder="" 
                            value = {_rak}
                            onChange = {(e) => setRak(e.target.value)} 
                          />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Baris</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" id="email-2" 
                            placeholder="" 
                            value = {_baris}
                            onChange = {(e) => setBaris(e.target.value)} 
                          />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Tanggal Masuk</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="date" 
                            id="rakBuku" 
                            placeholder="" 
                            value = {_tgl_masuk}
                            onChange = {(e) => setTglmask(e.target.value)}  
                          />
                          </div>
                        </div>
                        {/* GAMBAR MASIH RAGU */}
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Gambar</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="file"
                            id="barisBuku" 
                            placeholder="" 
                            value = {_gambar}
                            onChange = {(e) => setGambar(e.target.value)} 
                          />
                          </div>
                        </div>
                        {/* GAMBAR MASIH RAGU */}
                      </div>

                      <div className="mb-3">
                        <button 
                        className="btn btn-primary btn-sm" 
                        type="submit" 
                        style={{padding: '11px 8px', fontSize: 17, marginTop: 11}}>
                          disabled={submitting} 
                          Update Buku</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

  
    )
}