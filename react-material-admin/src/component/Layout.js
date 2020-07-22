import React  from 'react';
import TableData from './TableData';
import Footer from './Footer';
const Layout = () => {
    return (
        <div className="main-panel ps">
     
     <div className="content">
     <div className="container-fluid">
         <div className="row">
         <div className="col-md-12">
        <div className="container-fluid">
        <div className="row">
            <div className="card">
                <div className="card-header card-header-tabs card-header-rose">
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                        <span className="nav-tabs-title">Data</span>
                        <ul className="nav nav-tabs" data-tabs="tabs">
                            <li className="nav-item">
                            <a className="nav-link active show" href="#userList" data-toggle="tab">
                                <i className="material-icons">list</i> User List
                                <div className="ripple-container" />
                                <div className="ripple-container" /></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#userProfile" data-toggle="tab">
                                <i className="material-icons">face</i> User Profiler
                                <div className="ripple-container" />
                                <div className="ripple-container" /></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane active posts" id="userList">
                                   <TableData />
                                </div>
                                <div className="tab-pane" id="userProfile"> 
                                <form autoComplete="off" >
                                                <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                                                <div className="form-group bmd-form-group mt-3">
                                <label htmlFor="firstname" className="bmd-label-floating">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="fname" />
                                </div>
                                <div className="form-group bmd-form-group mt-4">
                                <label htmlFor="Address1" className="bmd-label-floating">Address 1</label>
                                <textarea type="text" className="form-control" id="Address1" name="addressOne" ></textarea>
                                </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                                                <div className="form-group bmd-form-group mt-3">
                                <label htmlFor="lastName" className="bmd-label-floating">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lname" />
                                </div>
                                <div className="form-group bmd-form-group mt-4">
                                <label htmlFor="exampleEmail" className="bmd-label-floating">Address 2</label>
                                <textarea type="text" className="form-control" id="Address2" name="addressTwo" ></textarea>
                                </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                                                <div className="form-group bmd-form-group mt-3">
                                <label htmlFor="exampleEmail" className="bmd-label-floating">Email ID</label>
                                <input type="email" className="form-control" id="exampleEmail" name="mailid" />
                                </div>
                                <div className="form-group bmd-form-group mt-4">
                                <label htmlFor="city" className="bmd-label-floating">City</label>
                                <input type="text" className="form-control" id="city" name="City" />
                                </div>
    
                                
    
                                                    </div>
                                                    <div className="card-footer">
                      <button type="submit" className="btn btn-fill btn-rose">Submit<div className="ripple-container"></div></button>
                    </div>
                                              
                                               </div>
                                                
                                                
                                               
                                            
                                                </div>
                                            
                                               
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
     <Footer />
     </div>
    )

};
export default Layout;