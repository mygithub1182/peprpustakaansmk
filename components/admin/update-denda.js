//@ts-check

import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default function updateDenda(){

  const [_nis, setNis] = useState('')
  const [_index_buku, setBuku] = useState('')
  const [_tgl_terlambat, setTgl] = useState('')
  const [_denda, setDenda] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { nis, index_buku, tgl_terlambat,denda } = router.query

  useEffect(() => {
    if (typeof nis == 'string') {
      setNis(nis)
    }
    if (typeof index_buku == 'string') {
      setBuku(index_buku)
    }
    if (typeof tgl_terlambat == 'string') {
      setTgl(tgl_terlambat)
    }
    if (typeof denda == 'string') {
      setDenda(denda)
    }

  }, [nis, index_buku, tgl_terlambat,denda])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('http://localhost:3000/api/update-denda', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nis : _nis,
          index_buku: _index_buku,
          tgl_terlambat: _tgl_terlambat,
          denda: _denda,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)

      alert("update data suskses" +_nis +_index_buku +_tgl_terlambat+ _denda)
      Router.push('/admin/data-denda')
    } catch (e) {
      throw Error(e.message)
    }
  }


    return(
 <div id="wrapper" style={{width: 1345}} onSubmit={submitHandler}>
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
    
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Update Data Denda</h3>
        <div className="row mb-3">
          <div className="col-lg-8">
            <div className="row mb-3 d-none">
              <div className="col">
                <div className="card textwhite bg-primary text-white shadow">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col">
                        <p className="m-0">Peformance</p>
                        <p className="m-0"><strong>65.2%</strong></p>
                      </div>
                      <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                    </div>
                    <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card textwhite bg-success text-white shadow">
                  <div className="card-body">
                    <div className="row mb-2">
                      <div className="col">
                        <p className="m-0">Peformance</p>
                        <p className="m-0"><strong>65.2%</strong></p>
                      </div>
                      <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                    </div>
                    <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{width: '489.328px'}}>
                <div className="card shadow mb-3" style={{width: '516.328px'}}>
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Tambah Denda</p>
                  </div>
                  <div className="card-body">
                  
                  <form >
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>NIS</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" id="nis" 
                            placeholder="NISN" 
                            name="username" 
                            value={_nis}
                            onChange={(e) => setNis(e.target.value)}
                          /></div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>No Index Buku</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" 
                            id="index_buku" 
                            placeholder="No Buku" 
                            name="email"
                            value={_index_buku}
                            onChange={(e) => setBuku(e.target.value)} 

                          /></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="date"><strong>Tanggal Terlambat</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="date" 
                            id="tgl_terlambat" 
                            placeholder="" 
                            name="username"
                            value={_tgl_terlambat}
                            onChange={(e) => setTgl(e.target.value)}
                          /></div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Denda</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" id="denda" 
                            placeholder="Jumlah Denda" 
                            name="email" 
                            value={_denda}
                            onChange={(e) => setDenda(e.target.value)}
                          /></div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <button 
                        className="btn btn-primary btn-sm" 
                        type="submit" 
                        style={{padding: '11px 8px', fontSize: 17, marginTop: 11}}
                        disabled={submitting} 
                        > {submitting ? 'Saving ...' : 'Save'}
                        </button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
</div>

  
    )
}