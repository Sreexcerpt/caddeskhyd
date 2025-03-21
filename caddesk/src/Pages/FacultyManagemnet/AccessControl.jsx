// import React from 'react';

// const AccessControl = () => {
//     return (
//         <>
//             <div className="main-wrapper">
//                 <div className="page-wrapper cardhead">
//                     <div className="content container-fluid">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="page-header">
//                                     <div className="row">
//                                         <div className="col-md-4">
//                                             <h3>Access Control</h3>
//                                         </div>
//                                         <div className="col-md-8 float-end ms-auto">
//                                             <div className="d-flex title-head">
//                                                 <div className="daterange-picker d-flex align-items-center justify-content-center">
//                                                     <div className="head-icons mb-0">
//                                                         <a href="/AccessControl" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
//                                                         <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='row'>
//                             <div className="col-md-12">
//                                 <div className="card">
//                                     <div className="card-header">
//                                         <div className='row'>
//                                         <div className='col-xl-9'>
//                                             <h4>Roles List</h4></div>
//                                             <div className='col-xl-3'>
//                                                 <button type="button" class="btn btn-primary waves-effect waves-light mt-1"
//                                                     data-bs-toggle="modal" data-bs-target="#con-close-modal">Add Role</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card-body">
//                                         <table className="table table-bordered">
//                                             <thead>
//                                                 <tr>
//                                                     <th>Role ID</th>
//                                                     <th>Role Name</th>
//                                                     <th>Permissions</th>
//                                                     <th>Actions</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>1</td>
//                                                     <td>Admin</td>
//                                                     <td>Read, Write, Execute, Delete</td>
//                                                     <td>
//                                                         <div class="hstack gap-2 fs-15">
//                                                             <a onClick={() => handleEdit(faculty)}
//                                                                 class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="modal"
//                                                                 data-bs-target="#con-close-modal" ><i
//                                                                     class="feather-edit"></i></a>
//                                                             <a onClick={() => handleDelete(faculty._id)}
//                                                                 class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
//                                                                     class="feather-trash"></i></a>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>2</td>
//                                                     <td>User</td>
//                                                     <td>Read, Write</td>
//                                                     <td>
//                                                         <div class="hstack gap-2 fs-15">
//                                                             <a onClick={() => handleEdit(faculty)}
//                                                                 class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="modal"
//                                                                 data-bs-target="#con-close-modal" ><i
//                                                                     class="feather-edit"></i></a>
//                                                             <a onClick={() => handleDelete(faculty._id)}
//                                                                 class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
//                                                                     class="feather-trash"></i></a>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>3</td>
//                                                     <td>Guest</td>
//                                                     <td>Read</td>
//                                                     <td>
//                                                         <div class="hstack gap-2 fs-15">
//                                                             <a onClick={() => handleEdit(faculty)}
//                                                                 class="btn btn-icon btn-sm btn-soft-info rounded-pill" data-bs-toggle="modal"
//                                                                 data-bs-target="#con-close-modal" ><i
//                                                                     class="feather-edit"></i></a>
//                                                             <a onClick={() => handleDelete(faculty._id)}
//                                                                 class="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i
//                                                                     class="feather-trash"></i></a>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* <!-- sample modal content --> */}
//                         <div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog"
//                             aria-hidden="true" style={{ display: "none" }}>
//                             <div class="modal-dialog">
//                                 <div class="modal-content">
//                                     <div class="modal-header">
//                                         <h4 class="modal-title">Add New Role</h4>
//                                         <button type="button" class="btn-close" data-bs-dismiss="modal"
//                                             aria-label="Close"></button>
//                                     </div>
//                                     <div class="modal-body p-4">
//                                         <div className="card">
//                                             <div className="card-body">
//                                                 <form>
//                                                     <div className="mb-3">
//                                                         <label htmlFor="roleId" className="form-label">Role ID</label>
//                                                         <input type="text" className="form-control" id="roleId" placeholder="Enter role Id" />
//                                                     </div>
//                                                     <div className="mb-3">
//                                                         <label htmlFor="roleName" className="form-label">Role Name</label>
//                                                         <input type="text" className="form-control" id="roleName" placeholder="Enter role name" />
//                                                     </div>
//                                                     <div className="mb-3">
//                                                         <label htmlFor="permissions" className="form-label">Permissions</label>
//                                                         <select multiple className="form-control select2" id="permissions">
//                                                             <option>Read</option>
//                                                             <option>Write</option>
//                                                             <option>Execute</option>
//                                                             <option>Delete</option>
//                                                         </select>
//                                                     </div>
//                                                     <button type="submit" className="btn btn-primary">Add Role</button>
//                                                 </form>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default AccessControl;


import React, { useState, useEffect } from "react";
import axios from "axios";

const AccessControl = () => {
    const [roles, setRoles] = useState([]);
    const [roleId, setRoleId] = useState("");
    const [roleName, setRoleName] = useState("");
    const [permissions, setPermissions] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const availablePermissions = [ "Dashboard",
        "Lead & Inquiry",
        "Admission & Enrollment",
        "Student Information",
        "Fee & Accounting",
        "Communication",
        "Faculty & Staff",
        "Course, Class & Batch",
        "Reports and Analytics",
    "HRMS","Faculty Profile",
"Student Profile"];

    useEffect(() => {
        fetchRoles();
    }, []);

    // Add event listener for clicks outside the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownOpen && !event.target.closest('.dropdown')) {
                setDropdownOpen(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    const fetchRoles = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/roles");
            setRoles(res.data);
        } catch (error) {
            console.error("Error fetching roles:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const roleData = { roleId, roleName, permissions };

        try {
            if (editingId) {
                await axios.put(`http://localhost:8080/api/roles/${editingId}`, roleData);
            } else {
                await axios.post("http://localhost:8080/api/roles", roleData);
            }

            fetchRoles();
            resetForm();
            closeModal();
        } catch (error) {
            console.error("Error saving role:", error);
        }
    };

    const handleEdit = (role) => {
        setEditingId(role._id);
        setRoleId(role.roleId);
        setRoleName(role.roleName);
        setPermissions(role.permissions);
        openModal();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/roles/${id}`);
            fetchRoles();
        } catch (error) {
            console.error("Error deleting role:", error);
        }
    };

    const resetForm = () => {
        setRoleId("");
        setRoleName("");
        setPermissions([]);
        setEditingId(null);
    };

    const openModal = () => {
        const modalElement = document.getElementById("role-modal");
        if (modalElement) {
            const modalInstance = new window.bootstrap.Modal(modalElement);
            modalInstance.show();
        }
    };

    const closeModal = () => {
        setDropdownOpen(false); // Close the dropdown when modal closes
        const modalElement = document.getElementById("role-modal");
        if (modalElement) {
            const existingModal = window.bootstrap.Modal.getInstance(modalElement);
            if (existingModal) existingModal.hide();
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handlePermissionSelect = (perm) => {
        if (permissions.includes(perm)) {
            setPermissions(permissions.filter((p) => p !== perm));
        } else {
            setPermissions([...permissions, perm]);
        }
    };

    const removePermission = (perm) => {
        setPermissions(permissions.filter((p) => p !== perm));
    };

    return (
        <>
            <div className="main-wrapper">
                <div className="page-wrapper cardhead">
                    <div className="content container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h3>Access Control</h3>
                                </div>
                            </div>
                        </div>

                        {/* Roles List */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4>Roles List</h4>
                                        <div className='col-xl-3'>
                                                <button type="button" className="btn btn-primary waves-effect waves-light mt-1"
                                                    onClick={() => { resetForm(); openModal(); }}>
                                                    Add Role
                                                </button>
                                            </div>
                                    </div>
                                    <div className="card-body">
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
                                                {roles.length > 0 ? (
                                                    roles.map((role) => (
                                                        <tr key={role._id}>
                                                            <td>{role.roleId}</td>
                                                            <td>{role.roleName}</td>
                                                            <td>{role.permissions.join(", ")}</td>
                                                            <td>
                                                                <div className="hstack gap-2 fs-15">
                                                                    <button onClick={() => handleEdit(role)}
                                                                        className="btn btn-icon btn-sm btn-soft-info rounded-pill">
                                                                        <i className="feather-edit"></i>
                                                                    </button>
                                                                    <button onClick={() => handleDelete(role._id)}
                                                                        className="btn btn-icon btn-sm btn-soft-danger rounded-pill">
                                                                        <i className="feather-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="text-center">No roles found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal */}
                        <div id="role-modal" className="modal fade" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">{editingId ? "Edit Role" : "Add New Role"}</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal}></button>
                                    </div>
                                    <div className="modal-body p-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Role ID</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={roleId}
                                                    onChange={(e) => setRoleId(e.target.value)}
                                                    disabled={!!editingId}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Role Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={roleName}
                                                    onChange={(e) => setRoleName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Permissions</label>
                                                <div className="dropdown">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light dropdown-toggle w-100"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded={dropdownOpen}
                                                        onClick={toggleDropdown}
                                                    >
                                                        Select Permissions
                                                    </button>
                                                    <div className={`dropdown-menu w-100 ${dropdownOpen ? 'show' : ''}`}>
                                                        {availablePermissions.map((perm) => (
                                                            <div key={perm} className="dropdown-item">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={permissions.includes(perm)}
                                                                    onChange={() => handlePermissionSelect(perm)}
                                                                />{" "}
                                                                {perm}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    {permissions.map((perm) => (
                                                        <span key={perm} className="badge bg-info me-1">
                                                            {perm}{" "}
                                                            <button type="button" className="btn-close btn-close-white ms-1" onClick={() => removePermission(perm)}></button>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Save Role</button>
                                        </form>
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


