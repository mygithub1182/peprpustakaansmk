//@ts-check
export default function updateDendahari(){
    return(
 <div id="wrapper" style={{width: 1345}}>
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
    
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Update Data Denda Perhari</h3>
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
                    <form>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Denda</strong>&nbsp;Perhari<br /></label><input className="form-control" type="text" id="username" placeholder="Isikan Jumlah Denda" name="username" /></div>
                        </div>
                      </div>
                      <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit" style={{padding: '11px 8px', fontSize: 17, marginTop: 11}}>Update</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-white sticky-footer">
      <div className="container my-auto">
        <div className="text-center my-auto copyright"><span>Powered by STIKOM PGRI BANYUWANGI ©&nbsp; 2021</span></div>
      </div>
    </footer>
  </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
</div>

  
    )
}