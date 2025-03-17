import React from 'react';

const AccessControl = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="page-wrapper cardhead">
                    <div className="content container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h3>Access Control</h3>
                                        </div>
                                        <div className="col-md-8 float-end ms-auto">
                                            <div className="d-flex title-head">
                                                <div className="daterange-picker d-flex align-items-center justify-content-center">
                                                    <div className="head-icons mb-0">
                                                        <a href="/AccessControl" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                                                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className='row'>
                                        <div className='col-xl-9'>
                                            <h4>Roles List</h4></div>
                                            <div className='col-xl-3'>
                                                <button type="button" class="btn btn-primary waves-effect waves-light mt-1"
                                                    data-bs-toggle="modal" data-bs-target="#con-close-modal">Add Role</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Role ID</th>
                                                    <th>Role Name</th>
                                                    <th>Permissions</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Admin</td>
                                                    <td>Read, Write, Execute, Delete</td>
                                                    <td>
                                                        <div class="hstack gap-2 fs-15">
                                                            <a onClick={() => handleEdit(faculty)}
                                                                class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="modal"
                                                                data-bs-target="#con-close-modal" ><i
                                                                    class="feather-edit"></i></a>
                                                            <a onClick={() => handleDelete(faculty._id)}
                                                                class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                                                                    class="feather-trash"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>User</td>
                                                    <td>Read, Write</td>
                                                    <td>
                                                        <div class="hstack gap-2 fs-15">
                                                            <a onClick={() => handleEdit(faculty)}
                                                                class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="modal"
                                                                data-bs-target="#con-close-modal" ><i
                                                                    class="feather-edit"></i></a>
                                                            <a onClick={() => handleDelete(faculty._id)}
                                                                class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                                                                    class="feather-trash"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Guest</td>
                                                    <td>Read</td>
                                                    <td>
                                                        <div class="hstack gap-2 fs-15">
                                                            <a onClick={() => handleEdit(faculty)}
                                                                class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="modal"
                                                                data-bs-target="#con-close-modal" ><i
                                                                    class="feather-edit"></i></a>
                                                            <a onClick={() => handleDelete(faculty._id)}
                                                                class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
                                                                    class="feather-trash"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- sample modal content --> */}
                        <div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog"
                            aria-hidden="true" style={{ display: "none" }}>
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add New Role</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body p-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label htmlFor="roleId" className="form-label">Role ID</label>
                                                        <input type="text" className="form-control" id="roleId" placeholder="Enter role Id" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="roleName" className="form-label">Role Name</label>
                                                        <input type="text" className="form-control" id="roleName" placeholder="Enter role name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="permissions" className="form-label">Permissions</label>
                                                        <select multiple className="form-control select2" id="permissions">
                                                            <option>Read</option>
                                                            <option>Write</option>
                                                            <option>Execute</option>
                                                            <option>Delete</option>
                                                        </select>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Add Role</button>
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

        </>
    );
};

export default AccessControl;