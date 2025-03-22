
import React, { useState, useEffect } from "react";
import axios from "axios";

const Branch = () => {
    const [branches, setBranches] = useState([]);
    const [branchId, setBranchId] = useState("");
    const [branchName, setBranchName] = useState("");
    const [location, setLocation] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchBranches();
    }, []);

    const fetchBranches = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/branches");
            setBranches(res.data);
        } catch (error) {
            console.error("Error fetching branches:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const branchData = { branchId, branchName, location };

        try {
            if (editingId) {
                await axios.put(`http://localhost:8080/api/branches/${editingId}`, branchData);
            } else {
                await axios.post("http://localhost:8080/api/branches", branchData);
            }

            fetchBranches();
            resetForm();
            closeModal();
        } catch (error) {
            console.error("Error saving branch:", error);
        }
    };

    const handleEdit = (branch) => {
        setEditingId(branch._id);
        setBranchId(branch.branchId);
        setBranchName(branch.branchName);
        setLocation(branch.location);
        openModal();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/branches/${id}`);
            fetchBranches();
        } catch (error) {
            console.error("Error deleting branch:", error);
        }
    };

    const resetForm = () => {
        setBranchId("");
        setBranchName("");
        setLocation("");
        setEditingId(null);
    };

    const openModal = () => {
        const modalElement = document.getElementById("branch-modal");
        if (modalElement) {
            const modalInstance = new window.bootstrap.Modal(modalElement);
            modalInstance.show();
        }
    };

    const closeModal = () => {
        const modalElement = document.getElementById("branch-modal");
        if (modalElement) {
            const existingModal = window.bootstrap.Modal.getInstance(modalElement);
            if (existingModal) existingModal.hide();
        }
    };

    return (
        <>
            <div className="main-wrapper">
                <div className="page-wrapper cardhead">
                    <div className="content container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-header">
                                    <h3>Branch Management</h3>
                                </div>
                            </div>
                        </div>

                        {/* Branches List */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4>Branches List</h4>
                                        <div className='col-xl-3'>
                                            <button type="button" className="btn btn-primary waves-effect waves-light mt-1"
                                                onClick={() => { resetForm(); openModal(); }}>
                                                Add Branch
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Branch ID</th>
                                                    <th>Branch Name</th>
                                                    <th>Location</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {branches.length > 0 ? (
                                                    branches.map((branch) => (
                                                        <tr key={branch._id}>
                                                            <td>{branch.branchId}</td>
                                                            <td>{branch.branchName}</td>
                                                            <td>{branch.location}</td>
                                                            <td>
                                                                <div className="hstack gap-2 fs-15">
                                                                    <button onClick={() => handleEdit(branch)}
                                                                        className="btn btn-icon btn-sm btn-soft-info rounded-pill"
                                                                        data-bs-toggle="modal" data-bs-target="#branch-modal">
                                                                        <i className="feather-edit"></i>
                                                                    </button>
                                                                    <button onClick={() => handleDelete(branch._id)}
                                                                        className="btn btn-icon btn-sm btn-soft-danger rounded-pill">
                                                                        <i className="feather-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="text-center">No branches found.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal */}
                        <div id="branch-modal" className="modal fade" tabIndex="-1" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">{editingId ? "Edit Branch" : "Add New Branch"}</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={closeModal}></button>
                                    </div>
                                    <div className="modal-body p-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Branch ID</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={branchId}
                                                    onChange={(e) => setBranchId(e.target.value)}
                                                    disabled={!!editingId}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Branch Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={branchName}
                                                    onChange={(e) => setBranchName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Location</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Save Branch</button>
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

export default Branch;
                                               
