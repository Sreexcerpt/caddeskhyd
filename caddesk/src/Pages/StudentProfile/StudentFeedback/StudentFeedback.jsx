import React from 'react';

const StudentFeedback = () => {
    return (
        <>
            <div class="main-wrapper">
                <div class="page-wrapper cardhead">
                    <div class="content container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title">Student Feedback</h5>
                                    </div>
                                    <div class="card-body">
                                        <div>
                                            <form>
                                                <div className='row'>
                                                    <div className='col-xl-3'>
                                                        <label htmlFor="course">Course:</label>
                                                        <select id="course" name="course">
                                                            <option value="course1">Course 1</option>
                                                            <option value="course2">Course 2</option>
                                                            <option value="course3">Course 3</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-xl-3'>
                                                        <label htmlFor="batch">Batch:</label>
                                                        <select id="batch" name="batch">
                                                            <option value="batch1">Batch 1</option>
                                                            <option value="batch2">Batch 2</option>
                                                            <option value="batch3">Batch 3</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-xl-3'>
                                                        <label htmlFor="subject">Subject:</label>
                                                        <select id="subject" name="subject">
                                                            <option value="subject1">Subject 1</option>
                                                            <option value="subject2">Subject 2</option>
                                                            <option value="subject3">Subject 3</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                    <div className='row'>
                                                    <div className='col-xl-5'>
                                                        <label htmlFor="date">Facluty:</label>
                                                        <select id="faculty" name="faculty">
                                                            <option value="faculty1">Faculty 1</option>
                                                            <option value="faculty2">Faculty 2</option>
                                                            <option value="faculty3">Faculty 3</option>
                                                        </select>
                                                    </div>
                                         
                                               
                                                    <div className='col-xl-4'>
                                                        <label htmlFor="rating">Rating:</label>
                                                        <select id="rating" name="rating">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>

                                                    <div className='col-xl-9'>

                                                        <label htmlFor="review">Review:</label>
                                                        <textarea id="review" className='form-control' name="review"></textarea>
                                                    </div>

                                                    <div className='col-xl-4'>
                                                        <button type="submit">Submit</button>
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
        </>
    );
};

export default StudentFeedback;